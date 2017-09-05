(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes);
    global.checkboxContextTypes = mod.exports;
  }
})(this, function (exports, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    uncheckedIconClassName: _propTypes2.default.string.isRequired,
    uncheckedIconChildren: _propTypes2.default.node,
    checkedIconClassName: _propTypes2.default.string.isRequired,
    checkedIconChildren: _propTypes2.default.node,
    rowId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    header: _propTypes2.default.bool,
    baseName: _propTypes2.default.string.isRequired,
    createCheckbox: _propTypes2.default.func.isRequired,
    removeCheckbox: _propTypes2.default.func.isRequired
  };
});