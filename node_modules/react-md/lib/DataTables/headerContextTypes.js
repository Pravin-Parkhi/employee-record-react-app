(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types', './contextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'), require('./contextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.contextTypes);
    global.headerContextTypes = mod.exports;
  }
})(this, function (exports, _propTypes, _contextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = Object.assign({}, _contextTypes2.default, { header: _propTypes2.default.bool });
});