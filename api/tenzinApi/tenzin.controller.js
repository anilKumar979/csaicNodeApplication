const {
  getAllRegion,
  getEmpSalesList,
  getCustomerByRegionId,
  getCustomerBySalesID,
  getSalesEmpIdByName,
  getCustomerByCustId
} = require("./tenzin.service");

module.exports = {

  getRegionListCtrl: (req, res) => {
    const body = req.body;
    getAllRegion((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 500,
          message: "Database connection errror"
        });
      } else {
        return res.status(200).json({
          status: 200,
          data: results
        });
      }
    });

  },


  getEmpSalesListCtrl: (req, res) => {
    const body = req.body;
    getEmpSalesList((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 500,
          message: "Database connection errror"
        });
      } else {
        return res.status(200).json({
          status: 200,
          data: results
        });
      }
    });

  },



  getCustomerByRegionIdCtrl: (req, res) => {
    const body = req.body;
    getCustomerByRegionId(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 500,
          message: "Database connection errror"
        });
      } else {
        return res.status(200).json({
          status: 200,
          data: results
        });
      }
    });

  },


  getCustomerBySalesIDCtrl: (req, res) => {
    const body = req.body;
    getSalesEmpIdByName(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 500,
          message: "Database connection errror"
        });
      } else {
        let SaleEmpId = results.ID
        console.log("All id", results.ID)
        getCustomerBySalesID(SaleEmpId, (err, results2) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 500,
              message: "Database connection errror"
            });
          } else {
            return res.status(200).json({
              status: 200,
              data: results2
            });
          }
        });
      }
    });

  },

  getCustomerByCustIdCtrl: (req, res) => {
    const body = req.body;
    getCustomerByCustId(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 500,
          message: "Database connection errror"
        });
      } else {
        return res.status(200).json({
          status: 200,
          data: results
        });
      }
    });

  },


 


};