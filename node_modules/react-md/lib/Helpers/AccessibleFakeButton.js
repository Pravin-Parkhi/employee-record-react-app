(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-dom', 'classnames', '../constants/keyCodes', '../utils/EventUtils/handleKeyboardAccessibility'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-dom'), require('classnames'), require('../constants/keyCodes'), require('../utils/EventUtils/handleKeyboardAccessibility'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactDom, global.classnames, global.keyCodes, global.handleKeyboardAccessibility);
    global.AccessibleFakeButton = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDom, _classnames, _keyCodes, _handleKeyboardAccessibility) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _handleKeyboardAccessibility2 = _interopRequireDefault(_handleKeyboardAccessibility);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var AccessibleFakeButton = function (_PureComponent) {
    _inherits(AccessibleFakeButton, _PureComponent);

    function AccessibleFakeButton(props) {
      _classCallCheck(this, AccessibleFakeButton);

      var _this = _possibleConstructorReturn(this, (AccessibleFakeButton.__proto__ || Object.getPrototypeOf(AccessibleFakeButton)).call(this, props));

      _this.state = { pressed: false, tabFocused: false };
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      _this._handleBlur = _this._handleBlur.bind(_this);
      _this._setNode = _this._setNode.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      return _this;
    }

    /**
     * Focuses the button.
     */


    _createClass(AccessibleFakeButton, [{
      key: 'focus',
      value: function focus() {
        if (this._node) {
          this._node.focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        if (this._node) {
          this._node.blur();
        }
      }
    }, {
      key: '_setNode',
      value: function _setNode(node) {
        if (node) {
          this._node = (0, _reactDom.findDOMNode)(node);
        }
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(e) {
        if (this.props.disabled) {
          return;
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        this._node.focus();
        this.setState({ pressed: !this.state.pressed });
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        var _props = this.props,
            disabled = _props.disabled,
            onKeyDown = _props.onKeyDown,
            listenToEnter = _props.listenToEnter,
            listenToSpace = _props.listenToSpace;

        if (disabled) {
          return;
        }

        if (onKeyDown) {
          onKeyDown(e);
        }

        (0, _handleKeyboardAccessibility2.default)(e, this._handleClick, listenToEnter, listenToSpace);
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        var _props2 = this.props,
            onKeyUp = _props2.onKeyUp,
            onTabFocus = _props2.onTabFocus;

        if (onKeyUp) {
          onKeyUp(e);
        }

        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          if (onTabFocus) {
            onTabFocus(e);
          }

          this.setState({ tabFocused: true });
        }
      }
    }, {
      key: '_handleBlur',
      value: function _handleBlur(e) {
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }

        if (this.state.tabFocused) {
          this.setState({ tabFocused: false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            Component = _props3.component,
            children = _props3.children,
            className = _props3.className,
            tabbedClassName = _props3.tabbedClassName,
            disabled = _props3.disabled,
            tabIndex = _props3.tabIndex,
            ink = _props3.ink,
            props = _objectWithoutProperties(_props3, ['component', 'children', 'className', 'tabbedClassName', 'disabled', 'tabIndex', 'ink']);

        delete props.onBlur;
        delete props.onClick;
        delete props.onKeyUp;
        delete props.onKeyDown;
        delete props.onTabFocus;
        delete props.listenToEnter;
        delete props.listenToSpace;

        var childElements = children;
        if (ink) {
          childElements = _react.Children.toArray(children);
          childElements.unshift(ink);
        }

        return _react2.default.createElement(
          Component,
          _extends({}, props, {
            ref: this._setNode,
            className: (0, _classnames2.default)('md-fake-btn', _defineProperty({
              'md-pointer--hover': !disabled
            }, tabbedClassName, tabbedClassName && this.state.tabFocused), className),
            disabled: disabled,
            tabIndex: disabled ? null : tabIndex,
            onBlur: this._handleBlur,
            onClick: this._handleClick,
            onKeyUp: this._handleKeyUp,
            onKeyDown: this._handleKeyDown,
            'aria-pressed': this.state.pressed
          }),
          childElements
        );
      }
    }]);

    return AccessibleFakeButton;
  }(_react.PureComponent);

  AccessibleFakeButton.propTypes = {
    /**
     * An optional style to apply.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply.
     */
    className: _propTypes2.default.string,

    /**
     * An optional function to call only when the button has been focused with the tab key.
     */
    tabbedClassName: _propTypes2.default.string,

    /**
     * Any children to display in the Accessible Fake Button.
     */
    children: _propTypes2.default.node,

    /**
     * An optional onClick function to call whent he user clicks the
     * button or presses space || enter.
     */
    onClick: _propTypes2.default.func,

    /**
     * An optional onKeyDown function to call.
     */
    onKeyDown: _propTypes2.default.func,

    /**
     * An optional onBlur function to call.
     */
    onBlur: _propTypes2.default.func,

    /**
     * An optional onKeyUp function to call.
     */
    onKeyUp: _propTypes2.default.func,

    /**
     * An optional function to call when the element is focused with the tab key.
     */
    onTabFocus: _propTypes2.default.func,

    /**
     * The component to render the Fake button as.
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,

    /**
     * The tab index to use for the Fake button so it is keyboard focusable.
     */
    tabIndex: _propTypes2.default.number,

    /**
     * Boolean if the Button is disabled. This will prevent tab focus.
     */
    disabled: _propTypes2.default.bool,

    /**
     * The role for the accessible fake button. It is recommended to keep it
     * the default of `button` unless you are rendering it as an `a` tag.
     */
    role: _propTypes2.default.string,

    /**
     * The ink when coming from the AccessibleFakeInkedButton
     * @access private
     */
    ink: _propTypes2.default.node,

    /**
     * Boolean if the spacebar should be used to trigger the click event. This _should_ be `true`
     * is almost all cases.
     */
    listenToSpace: _propTypes2.default.bool,

    /**
     * Boolean if the enter key should be used to trigger the click event. This _should_ be `true`
     * in most cases. By default, the param will be ignored if the `role` attribute is for a `checkbox`
     * or `radio`. When it is a checkbox or radio, it will attempt to submit the form on the enter
     * keypress instead like the native elements.
     */
    listenToEnter: _propTypes2.default.bool
  };
  AccessibleFakeButton.defaultProps = {
    component: 'div',
    tabIndex: 0,
    role: 'button',
    listenToEnter: true,
    listenToSpace: true
  };
  exports.default = AccessibleFakeButton;
});