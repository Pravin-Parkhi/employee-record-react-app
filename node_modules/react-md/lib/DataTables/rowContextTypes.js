(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types', './headerContextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'), require('./headerContextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.headerContextTypes);
    global.rowContextTypes = mod.exports;
  }
})(this, function (exports, _propTypes, _headerContextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _headerContextTypes2 = _interopRequireDefault(_headerContextTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var rowContextTypes = Object.assign({}, _headerContextTypes2.default, {
    rowId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  });

  delete rowContextTypes.baseId;
  exports.default = rowContextTypes;
});