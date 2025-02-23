const {
  default: jsonToCSVuriConverter,
} = require("./components/convert-json-to-csv-uri");
const { default: isSample } = require("./components/sample/index");

module.exports = { jsonToCSVuriConverter, isSample };
