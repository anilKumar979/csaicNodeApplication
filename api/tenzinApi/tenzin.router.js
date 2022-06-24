const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { 
    getCustomerByCustIdCtrl, getRegionListCtrl, getEmpSalesListCtrl, getCustomerByRegionIdCtrl, getCustomerBySalesIDCtrl
} = require("./tenzin.controller");


router.get("/getRegionList",  getRegionListCtrl);
router.get("/getEmpSalesList",  getEmpSalesListCtrl);
router.post("/getCustomerByRegionId",  getCustomerByRegionIdCtrl);
router.post("/getCustomerBySalesID",  getCustomerBySalesIDCtrl);
router.post("/getCustomerByCustId",  getCustomerByCustIdCtrl);
module.exports = router;
