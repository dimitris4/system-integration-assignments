"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readTxt = exports.readCsv = void 0;

var _fs = require("fs");

var readTxt = function readTxt() {
  return new Promise(function (resolve, reject) {
    (0, _fs.readFile)("../../words.txt", "utf8", function (err, data) {
      if (err) {
        reject('Error');
      }

      resolve(data);
    });
  });
};

exports.readTxt = readTxt;

var readCsv = function readCsv() {
  return new Promise(function (resolve, reject) {
    (0, _fs.readFile)("../../words.csv", "utf8", function (err, data) {
      if (err) {
        reject('Error');
      }

      resolve(data);
    });
  });
};

exports.readCsv = readCsv;