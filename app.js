require("dotenv").config();
const express = require("express");
const app = express();

// const attachmentRouter = require("./api/attachements/attachment.router");
// const nofaApiRouter = require("./api/nofaApi/nofa.router");
const tenzinRouter = require("./api/tenzinApi/tenzin.router");

app.use(express.json());
const bodyParser = require('body-parser');
app.use(express.static('./AttachedFile/'));
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// app.use("/nofaapi/nofa/attachements", attachmentRouter);
// app.use("/nofaapi/nofa/nofaApi", nofaApiRouter);
app.use("/tenzinApi/tenzin", tenzinRouter);

const port = process.env.APP_PORT || 9006;
app.listen(port, () => {
  console.log("server up and running on PORT :", process.env.APP_PORT);
});