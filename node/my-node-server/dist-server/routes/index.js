"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/synchronizeTime', function (req, res) {
  console.log('test');
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-control": "no-cache",
    "Connection": "keep-alive"
  });
  setInterval(function () {
    res.write("data: ".concat(new Date().toLocaleTimeString(), " \n\n"));
  }, 1000);
});
router.get('/', function (req, res, next) {
  res.send('Welcome to my api!');
});
router.post('/', function (req, res, next) {
  res.send('Welcome to my api!');
});
var _default = router;
exports["default"] = _default;