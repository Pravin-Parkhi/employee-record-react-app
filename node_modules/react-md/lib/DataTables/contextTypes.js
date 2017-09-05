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
    global.contextTypes = mod.exports;
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
    plain: _propTypes2.default.bool,
    allSelected: _propTypes2.default.bool.isRequired,
    selectedRows: _propTypes2.default.arrayOf(_propTypes2.default.bool).isRequired,
    createCheckbox: _propTypes2.default.func.isRequired,
    removeCheckbox: _propTypes2.default.func.isRequired,
    toggleAllRows: _propTypes2.default.func.isRequired,
    toggleSelectedRow: _propTypes2.default.func.isRequired,
    baseId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    baseName: _propTypes2.default.string
  };
});