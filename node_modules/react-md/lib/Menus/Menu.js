(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-dom', 'react-transition-group/CSSTransitionGroup', 'classnames', 'react-prop-types/lib/deprecated', './contextTypes', './Positions', '../constants/CSSTransitionGroupTick', '../utils/EventUtils/handleWindowClickListeners', '../utils/EventUtils/handleKeyboardAccessibility', '../Lists/List'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-dom'), require('react-transition-group/CSSTransitionGroup'), require('classnames'), require('react-prop-types/lib/deprecated'), require('./contextTypes'), require('./Positions'), require('../constants/CSSTransitionGroupTick'), require('../utils/EventUtils/handleWindowClickListeners'), require('../utils/EventUtils/handleKeyboardAccessibility'), require('../Lists/List'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactDom, global.CSSTransitionGroup, global.classnames, global.deprecated, global.contextTypes, global.Positions, global.CSSTransitionGroupTick, global.handleWindowClickListeners, global.handleKeyboardAccessibility, global.List);
    global.Menu = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDom, _CSSTransitionGroup, _classnames, _deprecated, _contextTypes, _Positions, _CSSTransitionGroupTick, _handleWindowClickListeners, _handleKeyboardAccessibility, _List) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

  var _Positions2 = _interopRequireDefault(_Positions);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _handleWindowClickListeners2 = _interopRequireDefault(_handleWindowClickListeners);

  var _handleKeyboardAccessibility2 = _interopRequireDefault(_handleKeyboardAccessibility);

  var _List2 = _interopRequireDefault(_List);

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

  var Menu = function (_PureComponent) {
    _inherits(Menu, _PureComponent);

    function Menu(props) {
      _classCallCheck(this, Menu);

      var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

      _this._setList = _this._setList.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      _this._handleKeyDown = _this._handleKeyDown.bind(_this);
      _this._handleListClick = _this._handleListClick.bind(_this);
      _this._handleOutsideClick = _this._handleOutsideClick.bind(_this);
      return _this;
    }

    _createClass(Menu, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            menuCascading = _props.cascading,
            menuPosition = _props.position;

        return {
          menuCascading: menuCascading,
          menuPosition: menuPosition,
          listLevel: 0
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var isOpen = this.props.isOpen;

        if (isOpen) {
          (0, _handleWindowClickListeners2.default)(this._handleOutsideClick, true);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var isOpen = this.props.isOpen;

        if (isOpen === prevProps.isOpen) {
          return;
        }

        (0, _handleWindowClickListeners2.default)(this._handleOutsideClick, isOpen);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var isOpen = this.props.isOpen;

        if (isOpen) {
          (0, _handleWindowClickListeners2.default)(this._handleOutsideClick, false);
        }

        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: '_setList',
      value: function _setList(list) {
        if (list !== null) {
          this._list = (0, _reactDom.findDOMNode)(list);
        }

        try {
          var children = _react.Children.only(this.props.children);
          if (typeof children.ref === 'function') {
            children.ref(list);
          }
        } catch (e) {
          // do nothing
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        if (container !== null) {
          this._container = (0, _reactDom.findDOMNode)(container);
        }
      }
    }, {
      key: '_handleOutsideClick',
      value: function _handleOutsideClick(e) {
        var isInContextMenu = this.props.position === _Positions2.default.CONTEXT && !this._list.contains(e.target);

        if (isInContextMenu || !this._container.contains(e.target)) {
          var _props2 = this.props,
              onClose = _props2.onClose,
              close = _props2.close;

          if (close) {
            close(e);
          } else if (onClose) {
            onClose(e);
          }
        }
      }
    }, {
      key: '_handleKeyDown',
      value: function _handleKeyDown(e) {
        (0, _handleKeyboardAccessibility2.default)(e, this._handleListClick, true, true);
      }
    }, {
      key: '_handleListClick',
      value: function _handleListClick(e) {
        var _this2 = this;

        var _props3 = this.props,
            onClose = _props3.onClose,
            close = _props3.close;


        var node = e.target;
        while (this._container.contains(node)) {
          if (!node.classList.contains('md-list-item--nested-container') && node.classList.contains('md-list-item')) {
            this._timeout = setTimeout(function () {
              _this2._timeout = null;

              if (close) {
                close(e);
              } else if (onClose) {
                onClose(e);
              }
            }, _CSSTransitionGroupTick2.default);

            return;
          }
          node = node.parentNode;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props4 = this.props,
            id = _props4.id,
            className = _props4.className,
            listStyle = _props4.listStyle,
            listClassName = _props4.listClassName,
            isOpen = _props4.isOpen,
            fullWidth = _props4.fullWidth,
            toggle = _props4.toggle,
            contained = _props4.contained,
            children = _props4.children,
            position = _props4.position,
            props = _objectWithoutProperties(_props4, ['id', 'className', 'listStyle', 'listClassName', 'isOpen', 'fullWidth', 'toggle', 'contained', 'children', 'position']);

        delete props.close;
        delete props.onClose;
        delete props.cascading;
        delete props.autoclose;
        delete props.listId;

        var listId = this.props.listId;

        if (!listId && id) {
          listId = id + 'List';
        }

        var menuClassName = (0, _classnames2.default)({ 'md-list--menu-contained': contained }, listClassName);
        var menuItems = void 0;
        try {
          var list = _react.Children.only(children);

          menuItems = (0, _react.cloneElement)(children, {
            id: list.props.id || listId,
            key: 'menu-list',
            className: (0, _classnames2.default)(menuClassName, list.props.className),
            onClick: this._handleListClick,
            onKeyDown: this._handleKeyDown,
            ref: this._setList
          });
        } catch (e) {
          menuItems = _react2.default.createElement(
            _List2.default,
            {
              id: listId,
              key: 'menu-list',
              style: listStyle,
              className: menuClassName,
              onKeyDown: this._handleKeyDown,
              onClick: this._handleListClick,
              ref: this._setList
            },
            children
          );
        }

        return _react2.default.createElement(
          _CSSTransitionGroup2.default,
          _extends({}, props, {
            id: id,
            ref: this._setContainer,
            className: (0, _classnames2.default)('md-inline-block md-menu-container', {
              'md-full-width': fullWidth,
              'md-menu-container--menu-below': position === _Positions2.default.BELOW
            }, className),
            'aria-haspopup': true,
            'aria-expanded': isOpen,
            'aria-owns': listId
          }),
          toggle,
          isOpen ? menuItems : null
        );
      }
    }]);

    return Menu;
  }(_react.PureComponent);

  Menu.Positions = _Positions2.default;
  Menu.propTypes = {
    /**
     * An optional id to give to the menu's container. This is used for accessibility and is
     * generally recommended.
     */
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

    /**
     * An optional id to give to the `List` that gets generated when open. This is used for
     * accessibility and generally recommended. If this prop is given, the `aria-owns` attribute
     * will be added to the list.
     */
    listId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

    /**
     * An optional style to apply to the main container for a menu.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply to the main container for a menu.
     */
    className: _propTypes2.default.string,

    /**
     * An optional style to apply to the menu's `List` once it has been toggled open.
     */
    listStyle: _propTypes2.default.object,

    /**
     * An optional className to apply to the menu's `List` once it has been toggled open.
     */
    listClassName: _propTypes2.default.string,

    /**
     * The component to render the container as.
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]).isRequired,

    /**
     * This can either be a single `List` component or an array of `ListItem`, `ListItemControl`,
     * `Divider`, or `Subheader` to display when the menu is open. If it is the `List` component,
     * it will be cloned with some additional class names.
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),

    /**
     * Boolean if the `Menu` is currently open.
     */
    isOpen: _propTypes2.default.bool.isRequired,

    /**
     * The transition name to use for the menu's enter and leave transitions
     */
    transitionName: _propTypes2.default.string.isRequired,

    /**
     * The timeout for the enter transition.
     */
    transitionEnterTimeout: _propTypes2.default.number.isRequired,

    /**
     * The timeout for the leave transition.
     */
    transitionLeaveTimeout: _propTypes2.default.number.isRequired,

    /**
     * The node to use as the toggle for the menu.
     */
    toggle: _propTypes2.default.node,

    /**
     * The position that the menu should appear from. If the position is set to
     * `Menu.Positions.CONTEXT`, the `onClose` function will be called when something
     * outside of the `List` is clicked instead of something outside of the `Menu`.
     */
    position: _propTypes2.default.oneOf([Menu.Positions.TOP_LEFT, Menu.Positions.TOP_RIGHT, Menu.Positions.BOTTOM_LEFT, Menu.Positions.BOTTOM_RIGHT, Menu.Positions.CONTEXT, Menu.Positions.BELOW]).isRequired,

    /**
     * A function used to close the menu. This is used when the user clicks outside
     * of the menu or when a `ListItem` is clicked.
     */
    onClose: _propTypes2.default.func.isRequired,

    /**
     * Boolean if the menu is cascading. This isn't really working too well yet.
     */
    cascading: _propTypes2.default.bool,

    /**
     * Boolean if the width of the `List` should be limited to the width of the `toggle`
     */
    contained: _propTypes2.default.bool,

    /**
     * Boolean if the menu should be displayed full width instead of inline.
     */
    fullWidth: _propTypes2.default.bool,

    close: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onClose` instead'),
    autoclose: (0, _deprecated2.default)(_propTypes2.default.bool, 'The menus will always autoclose as according to the specs'),
    limitHeight: (0, _deprecated2.default)(_propTypes2.default.bool, 'The menus will always be limited in height as according to the specs'),
    expanderIconClassName: (0, _deprecated2.default)(_propTypes2.default.node, 'The expander for cascading menus will now just be a simple rotate of the existing `ListItem` ' + 'expander icon'),
    expanderIconChildren: (0, _deprecated2.default)(_propTypes2.default.node, 'The expander for cascading menus will now just be a simple rotate of the existing `ListItem` ' + 'expander icon')
  };
  Menu.defaultProps = {
    component: 'div',
    transitionName: 'md-menu',
    transitionEnterTimeout: 200,
    transitionLeaveTimeout: 200,
    position: Menu.Positions.TOP_RIGHT
  };
  Menu.childContextTypes = _contextTypes2.default;
  exports.default = Menu;
});