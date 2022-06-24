const { NULL } = require("mysql/lib/protocol/constants/types");
const pool = require("../../config/database");

module.exports = {
  getAllRegion: ( callBack) => {
    pool.query(
      `select * from s_region;`,
      
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results);
      }
    );
  },

  getCustomerByRegionId: (data, callBack) => {
    pool.query(
      `select * from s_region a , s_customer b where a.ID = b.REGION_ID and a.ID = ?`,
      [
        data.RegionID
      ],
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results);
      }
    );
  },

  getEmpSalesList: ( callBack) => {
    pool.query(
      `SELECT  ID , CONCAT(FIRST_NAME , ' ' , LAST_NAME) AS EmpName FROM s_emp`,
      
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results);
      }
    );
  },
  getSalesEmpIdByName: (data, callBack) => {
    pool.query(
      `select * from s_emp where CONCAT(FIRST_NAME , ' ' , LAST_NAME) = ?`,
      [
        data.Sale_Emp_Name
      ],
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results[0]);
      }
    );
  },

  getCustomerBySalesID: (SaleEmpId, callBack) => {
    pool.query(
      `select * from  s_customer a, s_emp b where b.ID = a.SALES_REP_ID and b.ID = ?`,
      [
        SaleEmpId
      ],
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results);
      }
    );
  },

  getCustomerByCustId: (data, callBack) => {
    pool.query(
      `select * from  s_customer a, s_emp b where b.ID = a.SALES_REP_ID and a.ID = ?`,
      [
        data.CustID
      ],
      (error, results, fields) => {
        if (error) {
          return console.log(error)
        }
        return callBack(null, results[0]);
      }
    );
  },
};
