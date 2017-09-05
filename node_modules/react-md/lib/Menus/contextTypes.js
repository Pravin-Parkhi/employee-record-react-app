(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'prop-types', './Positions'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('prop-types'), require('./Positions'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.Positions);
    global.contextTypes = mod.exports;
  }
})(this, function (exports, _propTypes, _Positions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Positions2 = _interopRequireDefault(_Positions);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    menuCascading: _propTypes2.default.bool,
    menuPosition: _propTypes2.default.oneOf([_Positions2.default.TOP_LEFT, _Positions2.default.TOP_RIGHT, _Positions2.default.BOTTOM_LEFT, _Positions2.default.BOTTOM_RIGHT, _Positions2.default.CONTEXT, _Positions2.default.BELOW]),
    listLevel: _propTypes2.default.number
  };
});