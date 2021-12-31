(self["webpackChunkjemPassAngularApp"] = self["webpackChunkjemPassAngularApp"] || []).push([["src_app_views_sessions_sessions_module_ts"],{

/***/ 20558:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgElement": function() { return /* binding */ NgElement; },
/* harmony export */   "VERSION": function() { return /* binding */ VERSION; },
/* harmony export */   "createCustomElement": function() { return /* binding */ createCustomElement; }
/* harmony export */ });
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ 51493);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88229);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);







/**
 * @license Angular v11.2.14
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provide methods for scheduling the execution of a callback.
 */

var scheduler = {
  /**
   * Schedule a callback to be called after some delay.
   *
   * Returns a function that when executed will cancel the scheduled function.
   */
  schedule: function schedule(taskFn, delay) {
    var id = setTimeout(taskFn, delay);
    return function () {
      return clearTimeout(id);
    };
  },

  /**
   * Schedule a callback to be called before the next render.
   * (If `window.requestAnimationFrame()` is not available, use `scheduler.schedule()` instead.)
   *
   * Returns a function that when executed will cancel the scheduled function.
   */
  scheduleBeforeRender: function scheduleBeforeRender(taskFn) {
    // TODO(gkalpak): Implement a better way of accessing `requestAnimationFrame()`
    //                (e.g. accounting for vendor prefix, SSR-compatibility, etc).
    if (typeof window === 'undefined') {
      // For SSR just schedule immediately.
      return scheduler.schedule(taskFn, 0);
    }

    if (typeof window.requestAnimationFrame === 'undefined') {
      var frameMs = 16;
      return scheduler.schedule(taskFn, frameMs);
    }

    var id = window.requestAnimationFrame(taskFn);
    return function () {
      return window.cancelAnimationFrame(id);
    };
  }
};
/**
 * Convert a camelCased string to kebab-cased.
 */

function camelToDashCase(input) {
  return input.replace(/[A-Z]/g, function (char) {
    return "-".concat(char.toLowerCase());
  });
}
/**
 * Create a `CustomEvent` (even on browsers where `CustomEvent` is not a constructor).
 */


function createCustomEvent(doc, name, detail) {
  var bubbles = false;
  var cancelable = false; // On IE11, `CustomEvent` is not a constructor.

  if (typeof CustomEvent !== 'function') {
    var event = doc.createEvent('CustomEvent');
    event.initCustomEvent(name, bubbles, cancelable, detail);
    return event;
  }

  return new CustomEvent(name, {
    bubbles: bubbles,
    cancelable: cancelable,
    detail: detail
  });
}
/**
 * Check whether the input is an `Element`.
 */


function isElement(node) {
  return !!node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Check whether the input is a function.
 */


function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Convert a kebab-cased string to camelCased.
 */


function kebabToCamelCase(input) {
  return input.replace(/-([a-z\d])/g, function (_, char) {
    return char.toUpperCase();
  });
}

var _matches;
/**
 * Check whether an `Element` matches a CSS selector.
 * NOTE: this is duplicated from @angular/upgrade, and can
 * be consolidated in the future
 */


function matchesSelector(el, selector) {
  if (!_matches) {
    var elProto = Element.prototype;
    _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
  }

  return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 */


function strictEquals(value1, value2) {
  return value1 === value2 || value1 !== value1 && value2 !== value2;
}
/** Gets a map of default set of attributes to observe and the properties they affect. */


function getDefaultAttributeToPropertyInputs(inputs) {
  var attributeToPropertyInputs = {};
  inputs.forEach(function (_ref) {
    var propName = _ref.propName,
        templateName = _ref.templateName;
    attributeToPropertyInputs[camelToDashCase(templateName)] = propName;
  });
  return attributeToPropertyInputs;
}
/**
 * Gets a component's set of inputs. Uses the injector to get the component factory where the inputs
 * are defined.
 */


function getComponentInputs(component, injector) {
  var componentFactoryResolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver);
  var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
  return componentFactory.inputs;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function extractProjectableNodes(host, ngContentSelectors) {
  var nodes = host.childNodes;
  var projectableNodes = ngContentSelectors.map(function () {
    return [];
  });
  var wildcardIndex = -1;
  ngContentSelectors.some(function (selector, i) {
    if (selector === '*') {
      wildcardIndex = i;
      return true;
    }

    return false;
  });

  for (var i = 0, ii = nodes.length; i < ii; ++i) {
    var node = nodes[i];
    var ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);

    if (ngContentIndex !== -1) {
      projectableNodes[ngContentIndex].push(node);
    }
  }

  return projectableNodes;
}

function findMatchingIndex(node, selectors, defaultIndex) {
  var matchingIndex = defaultIndex;

  if (isElement(node)) {
    selectors.some(function (selector, i) {
      if (selector !== '*' && matchesSelector(node, selector)) {
        matchingIndex = i;
        return true;
      }

      return false;
    });
  }

  return matchingIndex;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time in milliseconds to wait before destroying the component ref when disconnected. */


var DESTROY_DELAY = 10;
/**
 * Factory that creates new ComponentNgElementStrategy instance. Gets the component factory with the
 * constructor's injector's factory resolver and passes that factory to each strategy.
 *
 * @publicApi
 */

var ComponentNgElementStrategyFactory = /*#__PURE__*/function () {
  function ComponentNgElementStrategyFactory(component, injector) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, ComponentNgElementStrategyFactory);

    this.componentFactory = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver).resolveComponentFactory(component);
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(ComponentNgElementStrategyFactory, [{
    key: "create",
    value: function create(injector) {
      return new ComponentNgElementStrategy(this.componentFactory, injector);
    }
  }]);

  return ComponentNgElementStrategyFactory;
}();
/**
 * Creates and destroys a component ref using a component factory and handles change detection
 * in response to input changes.
 *
 * @publicApi
 */


var ComponentNgElementStrategy = /*#__PURE__*/function () {
  function ComponentNgElementStrategy(componentFactory, injector) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, ComponentNgElementStrategy);

    this.componentFactory = componentFactory;
    this.injector = injector; // Subject of `NgElementStrategyEvent` observables corresponding to the component's outputs.

    this.eventEmitters = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
    /** Merged stream of the component's output events. */

    this.events = this.eventEmitters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(function (emitters) {
      return rxjs__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0, (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(emitters));
    }));
    /** Reference to the component that was created on connect. */

    this.componentRef = null;
    /** Reference to the component view's `ChangeDetectorRef`. */

    this.viewChangeDetectorRef = null;
    /**
     * Changes that have been made to component inputs since the last change detection run.
     * (NOTE: These are only recorded if the component implements the `OnChanges` interface.)
     */

    this.inputChanges = null;
    /** Whether changes have been made to component inputs since the last change detection run. */

    this.hasInputChanges = false;
    /** Whether the created component implements the `OnChanges` interface. */

    this.implementsOnChanges = false;
    /** Whether a change detection has been scheduled to run on the component. */

    this.scheduledChangeDetectionFn = null;
    /** Callback function that when called will cancel a scheduled destruction on the component. */

    this.scheduledDestroyFn = null;
    /** Initial input values that were set before the component was created. */

    this.initialInputValues = new Map();
    /**
     * Set of component inputs that have not yet changed, i.e. for which `recordInputChange()` has not
     * fired.
     * (This helps detect the first change of an input, even if it is explicitly set to `undefined`.)
     */

    this.unchangedInputs = new Set(this.componentFactory.inputs.map(function (_ref2) {
      var propName = _ref2.propName;
      return propName;
    }));
    /** Service for setting zone context. */

    this.ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone);
    /** The zone the element was created in or `null` if Zone.js is not loaded. */

    this.elementZone = typeof Zone === 'undefined' ? null : this.ngZone.run(function () {
      return Zone.current;
    });
  }
  /**
   * Initializes a new component if one has not yet been created and cancels any scheduled
   * destruction.
   */


  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(ComponentNgElementStrategy, [{
    key: "connect",
    value: function connect(element) {
      var _this = this;

      this.runInZone(function () {
        // If the element is marked to be destroyed, cancel the task since the component was
        // reconnected
        if (_this.scheduledDestroyFn !== null) {
          _this.scheduledDestroyFn();

          _this.scheduledDestroyFn = null;
          return;
        }

        if (_this.componentRef === null) {
          _this.initializeComponent(element);
        }
      });
    }
    /**
     * Schedules the component to be destroyed after some small delay in case the element is just
     * being moved across the DOM.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      var _this2 = this;

      this.runInZone(function () {
        // Return if there is no componentRef or the component is already scheduled for destruction
        if (_this2.componentRef === null || _this2.scheduledDestroyFn !== null) {
          return;
        } // Schedule the component to be destroyed after a small timeout in case it is being
        // moved elsewhere in the DOM


        _this2.scheduledDestroyFn = scheduler.schedule(function () {
          if (_this2.componentRef !== null) {
            _this2.componentRef.destroy();

            _this2.componentRef = null;
            _this2.viewChangeDetectorRef = null;
          }
        }, DESTROY_DELAY);
      });
    }
    /**
     * Returns the component property value. If the component has not yet been created, the value is
     * retrieved from the cached initialization values.
     */

  }, {
    key: "getInputValue",
    value: function getInputValue(property) {
      var _this3 = this;

      return this.runInZone(function () {
        if (_this3.componentRef === null) {
          return _this3.initialInputValues.get(property);
        }

        return _this3.componentRef.instance[property];
      });
    }
    /**
     * Sets the input value for the property. If the component has not yet been created, the value is
     * cached and set when the component is created.
     */

  }, {
    key: "setInputValue",
    value: function setInputValue(property, value) {
      var _this4 = this;

      this.runInZone(function () {
        if (_this4.componentRef === null) {
          _this4.initialInputValues.set(property, value);

          return;
        } // Ignore the value if it is strictly equal to the current value, except if it is `undefined`
        // and this is the first change to the value (because an explicit `undefined` _is_ strictly
        // equal to not having a value set at all, but we still need to record this as a change).


        if (strictEquals(value, _this4.getInputValue(property)) && !(value === undefined && _this4.unchangedInputs.has(property))) {
          return;
        } // Record the changed value and update internal state to reflect the fact that this input has
        // changed.


        _this4.recordInputChange(property, value);

        _this4.unchangedInputs.delete(property);

        _this4.hasInputChanges = true; // Update the component instance and schedule change detection.

        _this4.componentRef.instance[property] = value;

        _this4.scheduleDetectChanges();
      });
    }
    /**
     * Creates a new component through the component factory with the provided element host and
     * sets up its initial inputs, listens for outputs changes, and runs an initial change detection.
     */

  }, {
    key: "initializeComponent",
    value: function initializeComponent(element) {
      var childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injector.create({
        providers: [],
        parent: this.injector
      });
      var projectableNodes = extractProjectableNodes(element, this.componentFactory.ngContentSelectors);
      this.componentRef = this.componentFactory.create(childInjector, projectableNodes, element);
      this.viewChangeDetectorRef = this.componentRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef);
      this.implementsOnChanges = isFunction(this.componentRef.instance.ngOnChanges);
      this.initializeInputs();
      this.initializeOutputs(this.componentRef);
      this.detectChanges();
      var applicationRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_6__.ApplicationRef);
      applicationRef.attachView(this.componentRef.hostView);
    }
    /** Set any stored initial inputs on the component's properties. */

  }, {
    key: "initializeInputs",
    value: function initializeInputs() {
      var _this5 = this;

      this.componentFactory.inputs.forEach(function (_ref3) {
        var propName = _ref3.propName;

        if (_this5.initialInputValues.has(propName)) {
          // Call `setInputValue()` now that the component has been instantiated to update its
          // properties and fire `ngOnChanges()`.
          _this5.setInputValue(propName, _this5.initialInputValues.get(propName));
        }
      });
      this.initialInputValues.clear();
    }
    /** Sets up listeners for the component's outputs so that the events stream emits the events. */

  }, {
    key: "initializeOutputs",
    value: function initializeOutputs(componentRef) {
      var eventEmitters = this.componentFactory.outputs.map(function (_ref4) {
        var propName = _ref4.propName,
            templateName = _ref4.templateName;
        var emitter = componentRef.instance[propName];
        return emitter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (value) {
          return {
            name: templateName,
            value: value
          };
        }));
      });
      this.eventEmitters.next(eventEmitters);
    }
    /** Calls ngOnChanges with all the inputs that have changed since the last call. */

  }, {
    key: "callNgOnChanges",
    value: function callNgOnChanges(componentRef) {
      if (!this.implementsOnChanges || this.inputChanges === null) {
        return;
      } // Cache the changes and set inputChanges to null to capture any changes that might occur
      // during ngOnChanges.


      var inputChanges = this.inputChanges;
      this.inputChanges = null;
      componentRef.instance.ngOnChanges(inputChanges);
    }
    /**
     * Marks the component view for check, if necessary.
     * (NOTE: This is required when the `ChangeDetectionStrategy` is set to `OnPush`.)
     */

  }, {
    key: "markViewForCheck",
    value: function markViewForCheck(viewChangeDetectorRef) {
      if (this.hasInputChanges) {
        this.hasInputChanges = false;
        viewChangeDetectorRef.markForCheck();
      }
    }
    /**
     * Schedules change detection to run on the component.
     * Ignores subsequent calls if already scheduled.
     */

  }, {
    key: "scheduleDetectChanges",
    value: function scheduleDetectChanges() {
      var _this6 = this;

      if (this.scheduledChangeDetectionFn) {
        return;
      }

      this.scheduledChangeDetectionFn = scheduler.scheduleBeforeRender(function () {
        _this6.scheduledChangeDetectionFn = null;

        _this6.detectChanges();
      });
    }
    /**
     * Records input changes so that the component receives SimpleChanges in its onChanges function.
     */

  }, {
    key: "recordInputChange",
    value: function recordInputChange(property, currentValue) {
      // Do not record the change if the component does not implement `OnChanges`.
      if (!this.implementsOnChanges) {
        return;
      }

      if (this.inputChanges === null) {
        this.inputChanges = {};
      } // If there already is a change, modify the current value to match but leave the values for
      // `previousValue` and `isFirstChange`.


      var pendingChange = this.inputChanges[property];

      if (pendingChange) {
        pendingChange.currentValue = currentValue;
        return;
      }

      var isFirstChange = this.unchangedInputs.has(property);
      var previousValue = isFirstChange ? undefined : this.getInputValue(property);
      this.inputChanges[property] = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.SimpleChange(previousValue, currentValue, isFirstChange);
    }
    /** Runs change detection on the component. */

  }, {
    key: "detectChanges",
    value: function detectChanges() {
      if (this.componentRef === null) {
        return;
      }

      this.callNgOnChanges(this.componentRef);
      this.markViewForCheck(this.viewChangeDetectorRef);
      this.componentRef.changeDetectorRef.detectChanges();
    }
    /** Runs in the angular zone, if present. */

  }, {
    key: "runInZone",
    value: function runInZone(fn) {
      return this.elementZone && Zone.current !== this.elementZone ? this.ngZone.run(fn) : fn();
    }
  }]);

  return ComponentNgElementStrategy;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Implements the functionality needed for a custom element.
 *
 * @publicApi
 */


var NgElement = /*#__PURE__*/function (_HTMLElement) {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(NgElement, _HTMLElement);

  var _super = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(NgElement);

  function NgElement() {
    var _this7;

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NgElement);

    _this7 = _super.apply(this, arguments);
    /**
     * A subscription to change, connect, and disconnect events in the custom element.
     */

    _this7.ngElementEventsSubscription = null;
    return _this7;
  }

  return NgElement;
}( /*#__PURE__*/(0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.default)(HTMLElement));
/**
 *  @description Creates a custom element class based on an Angular component.
 *
 * Builds a class that encapsulates the functionality of the provided component and
 * uses the configuration information to provide more context to the class.
 * Takes the component factory's inputs and outputs to convert them to the proper
 * custom element API and add hooks to input changes.
 *
 * The configuration's injector is the initial injector set on the class,
 * and used by default for each created instance.This behavior can be overridden with the
 * static property to affect all newly created instances, or as a constructor argument for
 * one-off creations.
 *
 * @see [Angular Elements Overview](guide/elements "Turning Angular components into custom elements")
 *
 * @param component The component to transform.
 * @param config A configuration that provides initialization information to the created class.
 * @returns The custom-element construction class, which can be registered with
 * a browser's `CustomElementRegistry`.
 *
 * @publicApi
 */


function createCustomElement(component, config) {
  var inputs = getComponentInputs(component, config.injector);
  var strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component, config.injector);
  var attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);

  var NgElementImpl = /*#__PURE__*/function (_NgElement) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__.default)(NgElementImpl, _NgElement);

    var _super2 = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__.default)(NgElementImpl);

    function NgElementImpl(injector) {
      var _this8;

      (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, NgElementImpl);

      _this8 = _super2.call(this);
      _this8.injector = injector;
      return _this8;
    }

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(NgElementImpl, [{
      key: "ngElementStrategy",
      get: function get() {
        var _this9 = this;

        // NOTE:
        // Some polyfills (e.g. `document-register-element`) do not call the constructor, therefore
        // it is not safe to set `ngElementStrategy` in the constructor and assume it will be
        // available inside the methods.
        //
        // TODO(andrewseguin): Add e2e tests that cover cases where the constructor isn't called. For
        // now this is tested using a Google internal test suite.
        if (!this._ngElementStrategy) {
          var strategy = this._ngElementStrategy = strategyFactory.create(this.injector || config.injector); // Re-apply pre-existing input values (set as properties on the element) through the
          // strategy.

          inputs.forEach(function (_ref5) {
            var propName = _ref5.propName;

            if (!_this9.hasOwnProperty(propName)) {
              // No pre-existing value for `propName`.
              return;
            } // Delete the property from the instance and re-apply it through the strategy.


            var value = _this9[propName];
            delete _this9[propName];
            strategy.setInputValue(propName, value);
          });
        }

        return this._ngElementStrategy;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attrName, oldValue, newValue, namespace) {
        var propName = attributeToPropertyInputs[attrName];
        this.ngElementStrategy.setInputValue(propName, newValue);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        // For historical reasons, some strategies may not have initialized the `events` property
        // until after `connect()` is run. Subscribe to `events` if it is available before running
        // `connect()` (in order to capture events emitted suring inittialization), otherwise
        // subscribe afterwards.
        //
        // TODO: Consider deprecating/removing the post-connect subscription in a future major version
        //       (e.g. v11).
        var subscribedToEvents = false;

        if (this.ngElementStrategy.events) {
          // `events` are already available: Subscribe to it asap.
          this.subscribeToEvents();
          subscribedToEvents = true;
        }

        this.ngElementStrategy.connect(this);

        if (!subscribedToEvents) {
          // `events` were not initialized before running `connect()`: Subscribe to them now.
          // The events emitted during the component initialization have been missed, but at least
          // future events will be captured.
          this.subscribeToEvents();
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        // Not using `this.ngElementStrategy` to avoid unnecessarily creating the `NgElementStrategy`.
        if (this._ngElementStrategy) {
          this._ngElementStrategy.disconnect();
        }

        if (this.ngElementEventsSubscription) {
          this.ngElementEventsSubscription.unsubscribe();
          this.ngElementEventsSubscription = null;
        }
      }
    }, {
      key: "subscribeToEvents",
      value: function subscribeToEvents() {
        var _this10 = this;

        // Listen for events from the strategy and dispatch them as custom events.
        this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(function (e) {
          var customEvent = createCustomEvent(_this10.ownerDocument, e.name, e.value);

          _this10.dispatchEvent(customEvent);
        });
      }
    }]);

    return NgElementImpl;
  }(NgElement); // Work around a bug in closure typed optimizations(b/79557487) where it is not honoring static
  // field externs. So using quoted access to explicitly prevent renaming.


  NgElementImpl['observedAttributes'] = Object.keys(attributeToPropertyInputs); // Add getters and setters to the prototype for each property input.

  inputs.forEach(function (_ref6) {
    var propName = _ref6.propName;
    Object.defineProperty(NgElementImpl.prototype, propName, {
      get: function get() {
        return this.ngElementStrategy.getInputValue(propName);
      },
      set: function set(newValue) {
        this.ngElementStrategy.setInputValue(propName, newValue);
      },
      configurable: true,
      enumerable: true
    });
  });
  return NgElementImpl;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @publicApi
 */


var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.Version('11.2.14');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=elements.js.map

/***/ }),

/***/ 53546:
/*!******************************************************************************!*\
  !*** ./node_modules/@formio/angular/__ivy_ngcc__/fesm2015/formio-angular.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components": function() { return /* reexport safe */ formiojs__WEBPACK_IMPORTED_MODULE_6__.Components; },
/* harmony export */   "Formio": function() { return /* reexport safe */ formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio; },
/* harmony export */   "FormioUtils": function() { return /* reexport safe */ formiojs__WEBPACK_IMPORTED_MODULE_6__.Utils; },
/* harmony export */   "Templates": function() { return /* reexport safe */ formiojs__WEBPACK_IMPORTED_MODULE_6__.Templates; },
/* harmony export */   "FormBuilderComponent": function() { return /* binding */ FormBuilderComponent; },
/* harmony export */   "FormioAlerts": function() { return /* binding */ FormioAlerts; },
/* harmony export */   "FormioAlertsComponent": function() { return /* binding */ FormioAlertsComponent; },
/* harmony export */   "FormioAppConfig": function() { return /* binding */ FormioAppConfig; },
/* harmony export */   "FormioBaseComponent": function() { return /* binding */ FormioBaseComponent; },
/* harmony export */   "FormioComponent": function() { return /* binding */ FormioComponent; },
/* harmony export */   "FormioError": function() { return /* binding */ FormioError; },
/* harmony export */   "FormioLoaderComponent": function() { return /* binding */ FormioLoaderComponent; },
/* harmony export */   "FormioModule": function() { return /* binding */ FormioModule; },
/* harmony export */   "FormioPromiseService": function() { return /* binding */ FormioPromiseService; },
/* harmony export */   "FormioService": function() { return /* binding */ FormioService; },
/* harmony export */   "createCustomFormioComponent": function() { return /* binding */ createCustomFormioComponent; },
/* harmony export */   "extendRouter": function() { return /* binding */ extendRouter; },
/* harmony export */   "registerCustomFormioComponent": function() { return /* binding */ registerCustomFormioComponent; },
/* harmony export */   "registerCustomFormioComponentWithClass": function() { return /* binding */ registerCustomFormioComponentWithClass; },
/* harmony export */   "registerCustomTag": function() { return /* binding */ registerCustomTag; },
/* harmony export */   "registerCustomTags": function() { return /* binding */ registerCustomTags; },
/* harmony export */   "ɵa": function() { return /* binding */ CustomTagsService; },
/* harmony export */   "ɵb": function() { return /* binding */ ParseHtmlContentPipe; }
/* harmony export */ });
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 27078);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 43620);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formiojs */ 42281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formiojs_utils_Evaluator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formiojs/utils/Evaluator */ 66212);
/* harmony import */ var formiojs_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formiojs/utils/utils */ 98341);
/* harmony import */ var formiojs_utils_utils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formiojs_utils_utils__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/elements */ 20558);











var _c0 = ["formio"];

function FormioComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "formio-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoading", ctx_r0.isLoading);
  }
}

function FormioComponent_formio_alerts_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "formio-alerts", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focusComponent", function FormioComponent_formio_alerts_2_Template_formio_alerts_focusComponent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r4.focusOnComponet($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alerts", ctx_r1.alerts);
  }
}

function FormioComponent_formio_alerts_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "formio-alerts", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focusComponent", function FormioComponent_formio_alerts_5_Template_formio_alerts_focusComponent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r6.focusOnComponet($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alerts", ctx_r3.alerts);
  }
}

var _c1 = ["builder"];

function FormioLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function FormioAlertsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FormioAlertsComponent_div_0_Template_div_click_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      var alert_r1 = restoredCtx.$implicit;
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r2.getComponent($event, alert_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "parseHtmlContent");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var alert_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, alert_r1.message), "\n");
  }
}









var FormioAppConfig = function FormioAppConfig() {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioAppConfig);

  this.appUrl = '';
  this.apiUrl = '';
};

FormioAppConfig.ɵfac = function FormioAppConfig_Factory(t) {
  return new (t || FormioAppConfig)();
};

FormioAppConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FormioAppConfig,
  factory: FormioAppConfig.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioAppConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [];
  }, null);
})();

var FormioError = function FormioError(message, component, silent) {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioError);

  this.message = message;
  this.component = component;
  this.silent = silent;
};

var FormioService = /*#__PURE__*/function () {
  function FormioService(url, options) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioService);

    this.url = url;
    this.options = options;
    this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio(this.url, this.options);
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioService, [{
    key: "requestWrapper",
    value: function requestWrapper(fn) {
      var record;
      var called = false;
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.Observable.create(function (observer) {
        try {
          if (!called) {
            called = true;
            fn().then(function (_record) {
              record = _record;
              observer.next(record);
              observer.complete();
            }).catch(function (err) {
              return observer.error(err);
            });
          } else if (record) {
            observer.next(record);
            observer.complete();
          }
        } catch (err) {
          observer.error(err);
        }
      });
    }
  }, {
    key: "saveForm",
    value: function saveForm(form, options) {
      var _this = this;

      return this.requestWrapper(function () {
        return _this.formio.saveForm(form, options);
      });
    }
  }, {
    key: "loadForm",
    value: function loadForm(query, options) {
      var _this2 = this;

      return this.requestWrapper(function () {
        return _this2.formio.loadForm(query, options);
      });
    }
  }, {
    key: "loadForms",
    value: function loadForms(query, options) {
      var _this3 = this;

      return this.requestWrapper(function () {
        return _this3.formio.loadForms(query, options);
      });
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(query, options) {
      var _this4 = this;

      return this.requestWrapper(function () {
        return _this4.formio.loadSubmission(query, options);
      });
    }
  }, {
    key: "userPermissions",
    value: function userPermissions(user, form, submission) {
      var _this5 = this;

      return this.requestWrapper(function () {
        return _this5.formio.userPermissions(user, form, submission);
      });
    }
  }, {
    key: "deleteSubmission",
    value: function deleteSubmission(data, options) {
      var _this6 = this;

      return this.requestWrapper(function () {
        return _this6.formio.deleteSubmission(data, options);
      });
    }
  }, {
    key: "saveSubmission",
    value: function saveSubmission(submission, options) {
      var _this7 = this;

      return this.requestWrapper(function () {
        return _this7.formio.saveSubmission(submission, options);
      });
    }
  }, {
    key: "loadSubmissions",
    value: function loadSubmissions(query, options) {
      var _this8 = this;

      return this.requestWrapper(function () {
        return _this8.formio.loadSubmissions(query, options);
      });
    }
  }]);

  return FormioService;
}();

var FormioPromiseService = /*#__PURE__*/function () {
  function FormioPromiseService(url, options) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioPromiseService);

    this.url = url;
    this.options = options;
    this.formioService = new FormioService(url, options);
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioPromiseService, [{
    key: "saveForm",
    value: function saveForm(form, options) {
      return this.formioService.saveForm(form, options).toPromise();
    }
  }, {
    key: "loadForm",
    value: function loadForm(query, options) {
      return this.formioService.loadForm(query, options).toPromise();
    }
  }, {
    key: "loadSubmission",
    value: function loadSubmission(query, options) {
      return this.formioService.loadSubmission(query, options).toPromise();
    }
  }, {
    key: "userPermissions",
    value: function userPermissions(user, form, submission) {
      return this.formioService.userPermissions(user, form, submission).toPromise();
    }
  }, {
    key: "deleteSubmission",
    value: function deleteSubmission(data, options) {
      return this.formioService.deleteSubmission(data, options).toPromise();
    }
  }, {
    key: "loadForms",
    value: function loadForms(query, options) {
      return this.formioService.loadForms(query, options).toPromise();
    }
  }, {
    key: "saveSubmission",
    value: function saveSubmission(submission, options) {
      return this.formioService.saveSubmission(submission, options).toPromise();
    }
  }, {
    key: "loadSubmissions",
    value: function loadSubmissions(query, options) {
      return this.formioService.loadSubmissions(query, options).toPromise();
    }
  }]);

  return FormioPromiseService;
}();

function extendRouter(Class, config, ClassRoutes) {
  (0,lodash__WEBPACK_IMPORTED_MODULE_8__.each)(Class.decorators, function (decorator) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_8__.each)(decorator.args, function (arg) {
      if (arg.declarations) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_8__.each)(config, function (component) {
          return arg.declarations.push(component);
        });
      }

      if (arg.imports) {
        (0,lodash__WEBPACK_IMPORTED_MODULE_8__.each)(arg.imports, function (_import, index) {
          if (_import.ngModule && _import.ngModule.name === 'RouterModule' || _import.name === 'RouterModule') {
            arg.imports[index] = _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ClassRoutes(config));
          }
        });
      }
    });
  });
  return Class;
}

var FormioAlerts = /*#__PURE__*/function () {
  function FormioAlerts() {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioAlerts);

    this.alerts = [];
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioAlerts, [{
    key: "setAlert",
    value: function setAlert(alert) {
      this.alerts = [alert];
    }
  }, {
    key: "addAlert",
    value: function addAlert(alert) {
      this.alerts.push(alert);
    }
  }, {
    key: "setAlerts",
    value: function setAlerts(alerts) {
      this.alerts = alerts;
    }
  }]);

  return FormioAlerts;
}();

FormioAlerts.ɵfac = function FormioAlerts_Factory(t) {
  return new (t || FormioAlerts)();
};

FormioAlerts.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: FormioAlerts,
  factory: FormioAlerts.ɵfac
});

var CustomTagsService = /*#__PURE__*/function () {
  function CustomTagsService() {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, CustomTagsService);

    this.tags = [];
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CustomTagsService, [{
    key: "addCustomTag",
    value: function addCustomTag(tag) {
      this.tags.push(tag);
    }
  }]);

  return CustomTagsService;
}();

CustomTagsService.ɵfac = function CustomTagsService_Factory(t) {
  return new (t || CustomTagsService)();
};

CustomTagsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: CustomTagsService,
  factory: CustomTagsService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CustomTagsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable
  }], function () {
    return [];
  }, null);
})();

var AlertsPosition;

(function (AlertsPosition) {
  AlertsPosition[AlertsPosition["none"] = 0] = "none";
  AlertsPosition[AlertsPosition["top"] = 1] = "top";
  AlertsPosition[AlertsPosition["bottom"] = 2] = "bottom";
  AlertsPosition[AlertsPosition["both"] = 3] = "both";
})(AlertsPosition || (AlertsPosition = {}));

var FormioBaseComponent = /*#__PURE__*/function () {
  function FormioBaseComponent(ngZone, config, customTags) {
    var _this9 = this;

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioBaseComponent);

    this.ngZone = ngZone;
    this.config = config;
    this.customTags = customTags;
    this.submission = {};
    this.noeval = false;
    this.readOnly = false;
    this.viewOnly = false;
    this.hooks = {};
    this.watchSubmissionErrors = false;
    this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.fileUploadingStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.prevPage = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.beforeSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.invalid = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.errorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.formLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.submissionLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.AlertsPosition = AlertsPosition;
    this.initialized = false;
    this.alerts = new FormioAlerts();
    this.submitting = false;
    this.submissionSuccess = false;
    this.isLoading = true;
    this.formioReady = new Promise(function (ready) {
      _this9.formioReadyResolve = ready;
    });
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioBaseComponent, [{
    key: "getRenderer",
    value: function getRenderer() {
      return this.renderer;
    }
  }, {
    key: "getRendererOptions",
    value: function getRendererOptions() {
      var extraTags = this.customTags ? this.customTags.tags : [];
      return (0,lodash__WEBPACK_IMPORTED_MODULE_8__.assign)({}, {
        icons: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.config, 'icons', 'fontawesome'),
        noAlerts: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.options, 'noAlerts', true),
        readOnly: this.readOnly,
        viewAsHtml: this.viewOnly,
        i18n: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.options, 'i18n', null),
        fileService: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.options, 'fileService', null),
        hooks: this.hooks,
        sanitizeConfig: {
          addTags: extraTags
        }
      }, this.renderOptions || {});
    }
  }, {
    key: "createRenderer",
    value: function createRenderer() {
      var Renderer = this.getRenderer();
      var form = new Renderer(this.formioElement ? this.formioElement.nativeElement : null, this.form, this.getRendererOptions());
      return form.instance;
    }
  }, {
    key: "setForm",
    value: function setForm(form) {
      var _this10 = this;

      this.form = form;

      if (this.formio) {
        this.formio.destroy();
      }

      if (this.form.title) {
        this.label = this.form.title;
      } else if (this.form.components && this.form.components[0]) {
        this.label = this.form.components[0].label;
      } // Clear out the element to render the new form.


      if (this.formioElement && this.formioElement.nativeElement) {
        this.formioElement.nativeElement.innerHTML = '';
      }

      this.formio = this.createRenderer();
      this.formio.submission = this.submission;

      if (this.renderOptions && this.renderOptions.validateOnInit) {
        this.formio.setValue(this.submission, {
          validateOnInit: true
        });
      }

      if (this.url) {
        this.formio.setUrl(this.url, this.formioOptions || {});
      }

      if (this.src) {
        this.formio.setUrl(this.src, this.formioOptions || {});
      }

      this.formio.nosubmit = true;
      this.formio.on('prevPage', function (data) {
        return _this10.ngZone.run(function () {
          return _this10.onPrevPage(data);
        });
      });
      this.formio.on('nextPage', function (data) {
        return _this10.ngZone.run(function () {
          return _this10.onNextPage(data);
        });
      });
      this.formio.on('change', function (value, flags, isModified) {
        return _this10.ngZone.run(function () {
          return _this10.onChange(value, flags, isModified);
        });
      });
      this.formio.on('customEvent', function (event) {
        return _this10.ngZone.run(function () {
          return _this10.customEvent.emit(event);
        });
      });
      ['fileUploadingStart', 'fileUploadingEnd'].forEach(function (eventName, index) {
        var status = !!index ? 'end' : 'start';

        _this10.formio.on(eventName, function () {
          return _this10.ngZone.run(function () {
            return _this10.fileUploadingStatus.emit(status);
          });
        });
      });
      this.formio.on('submit', function (submission, saved) {
        return _this10.ngZone.run(function () {
          return _this10.submitForm(submission, saved);
        });
      });
      this.formio.on('error', function (err) {
        return _this10.ngZone.run(function () {
          _this10.submissionSuccess = false;
          return _this10.onError(err);
        });
      });
      this.formio.on('render', function () {
        return _this10.ngZone.run(function () {
          return _this10.render.emit();
        });
      });
      this.formio.on('formLoad', function (loadedForm) {
        return _this10.ngZone.run(function () {
          return _this10.formLoad.emit(loadedForm);
        });
      });
      return this.formio.ready.then(function () {
        _this10.ngZone.run(function () {
          _this10.isLoading = false;

          _this10.ready.emit(_this10);

          _this10.formioReadyResolve(_this10.formio);

          if (_this10.formio.submissionReady) {
            _this10.formio.submissionReady.then(function (submission) {
              _this10.submissionLoad.emit(submission);
            });
          }
        });

        return _this10.formio;
      });
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (this.initialized) {
        return;
      }

      var extraTags = this.customTags ? this.customTags.tags : [];
      var defaultOptions = {
        errors: {
          message: 'Please fix the following errors before submitting.'
        },
        alerts: {
          submitMessage: 'Submission Complete.'
        },
        disableAlerts: false,
        hooks: {
          beforeSubmit: null
        },
        sanitizeConfig: {
          addTags: extraTags
        },
        alertsPosition: AlertsPosition.top
      };
      this.options = Object.assign(defaultOptions, this.options);

      if (this.options.disableAlerts) {
        this.options.alertsPosition = AlertsPosition.none;
      }

      this.initialized = true;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this11 = this;

      formiojs_utils_Evaluator__WEBPACK_IMPORTED_MODULE_9__.default.noeval = this.noeval;
      this.initialize();

      if (this.language) {
        if (typeof this.language === 'string') {
          this.formio.language = this.language;
        } else {
          this.language.subscribe(function (lang) {
            _this11.formio.language = lang;
          });
        }
      }

      if (this.refresh) {
        this.refresh.subscribe(function (refresh) {
          return _this11.onRefresh(refresh);
        });
      }

      if (this.error) {
        this.error.subscribe(function (err) {
          return _this11.onError(err);
        });
      }

      if (this.success) {
        this.success.subscribe(function (message) {
          _this11.alerts.setAlert({
            type: 'success',
            message: message || (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(_this11.options, 'alerts.submitMessage')
          });
        });
      }

      if (this.src) {
        if (!this.service) {
          this.service = new FormioService(this.src);
        }

        this.isLoading = true;
        this.service.loadForm({
          params: {
            live: 1
          }
        }).subscribe(function (form) {
          if (form && form.components) {
            _this11.ngZone.runOutsideAngular(function () {
              _this11.setForm(form);
            });
          } // if a submission is also provided.


          if ((0,lodash__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(_this11.submission) && _this11.service && _this11.service.formio.submissionId) {
            _this11.service.loadSubmission().subscribe(function (submission) {
              if (_this11.readOnly) {
                _this11.formio.options.readOnly = true;
              }

              _this11.submission = _this11.formio.submission = submission;
            }, function (err) {
              return _this11.onError(err);
            });
          }
        }, function (err) {
          return _this11.onError(err);
        });
      }

      if (this.url && !this.service) {
        this.service = new FormioService(this.url);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.formio) {
        this.formio.destroy();
      }
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(refresh) {
      var _this12 = this;

      this.formioReady.then(function () {
        if (refresh.form) {
          _this12.formio.setForm(refresh.form).then(function () {
            if (refresh.submission) {
              _this12.formio.setSubmission(refresh.submission);
            }
          });
        } else if (refresh.submission) {
          _this12.formio.setSubmission(refresh.submission);
        } else {
          switch (refresh.property) {
            case 'submission':
              _this12.formio.submission = refresh.value;
              break;

            case 'form':
              _this12.formio.form = refresh.value;
              break;
          }
        }
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this13 = this;

      formiojs_utils_Evaluator__WEBPACK_IMPORTED_MODULE_9__.default.noeval = this.noeval;
      this.initialize();

      if (changes.form && changes.form.currentValue) {
        this.ngZone.runOutsideAngular(function () {
          _this13.setForm(changes.form.currentValue);
        });
      }

      this.formioReady.then(function () {
        if (changes.submission && changes.submission.currentValue) {
          _this13.formio.setSubmission(changes.submission.currentValue, {
            fromSubmission: false
          });
        }

        if (changes.hideComponents && changes.hideComponents.currentValue) {
          var hiddenComponents = changes.hideComponents.currentValue;
          _this13.formio.options.hide = hiddenComponents;

          _this13.formio.everyComponent(function (component) {
            component.options.hide = hiddenComponents;

            if (hiddenComponents.includes(component.component.key)) {
              component.visible = false;
            }
          });
        }
      });
    }
  }, {
    key: "onPrevPage",
    value: function onPrevPage(data) {
      this.alerts.setAlerts([]);
      this.prevPage.emit(data);
    }
  }, {
    key: "onNextPage",
    value: function onNextPage(data) {
      this.alerts.setAlerts([]);
      this.nextPage.emit(data);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(submission, saved, noemit) {
      this.submitting = false;
      this.submissionSuccess = true;
      this.formio.setValue((0,formiojs_utils_utils__WEBPACK_IMPORTED_MODULE_10__.fastCloneDeep)(submission), {
        noValidate: true,
        noCheck: true
      });

      if (saved) {
        this.formio.emit('submitDone', submission);
      }

      if (!noemit) {
        this.submit.emit(submission);
      }

      if (!this.success) {
        this.alerts.setAlert({
          type: 'success',
          message: (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.options, 'alerts.submitMessage')
        });
      }
    }
  }, {
    key: "onError",
    value: function onError(err) {
      var _this14 = this;

      this.alerts.setAlerts([]);
      this.submitting = false;
      this.isLoading = false;

      if (!err) {
        return;
      } // Make sure it is an array.


      var errors = Array.isArray(err) ? err : [err]; // Emit these errors again.

      this.errorChange.emit(errors);

      if (err.silent) {
        return;
      }

      if (this.formio && errors.length) {
        this.formio.emit('submitError', errors);
      } // Iterate through each one and set the alerts array.


      errors.forEach(function (error) {
        var _ref = error ? error.details ? {
          message: error.details.map(function (detail) {
            return detail.message;
          }),
          paths: error.details.map(function (detail) {
            return detail.path;
          })
        } : {
          message: error.message || error.toString(),
          paths: error.path ? [error.path] : []
        } : {
          message: '',
          paths: []
        },
            message = _ref.message,
            paths = _ref.paths;

        var shouldErrorDisplay = true;

        if (_this14.formio) {
          paths.forEach(function (path, index) {
            var component = _this14.formio.getComponent(path);

            if (component) {
              var components = Array.isArray(component) ? component : [component];
              var messageText = Array.isArray(message) ? message[index] : message;
              components.forEach(function (comp) {
                return comp.setCustomValidity(messageText, true);
              });

              _this14.alerts.addAlert({
                type: 'danger',
                message: message[index],
                component: component
              });

              shouldErrorDisplay = false;
            }
          });

          if (window.VPAT_ENABLED) {
            if (typeof error === 'string' && _this14.formio.components) {
              _this14.formio.components.forEach(function (comp) {
                if (comp && comp.type !== 'button') {
                  comp.setCustomValidity(message, true);
                }
              });
            }
          }

          if (!_this14.noAlerts) {
            _this14.formio.showErrors();
          }
        }

        if (shouldErrorDisplay) {
          _this14.alerts.addAlert({
            type: 'danger',
            message: message,
            component: error.component
          });
        }
      });
    }
  }, {
    key: "focusOnComponet",
    value: function focusOnComponet(key) {
      if (this.formio) {
        this.formio.focusOnComponent(key);
      }
    }
  }, {
    key: "submitExecute",
    value: function submitExecute(submission) {
      var _this15 = this;

      var saved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.service && !this.url && !saved) {
        this.service.saveSubmission(submission).subscribe(function (sub) {
          return _this15.onSubmit(sub, true);
        }, function (err) {
          return _this15.onError(err);
        });
      } else {
        this.onSubmit(submission, false);
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(submission) {
      var _this16 = this;

      var saved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Keep double submits from occurring...
      if (this.submitting) {
        return;
      }

      this.formio.setMetadata(submission);
      this.submissionSuccess = false;
      this.submitting = true;
      this.beforeSubmit.emit(submission); // if they provide a beforeSubmit hook, then allow them to alter the submission asynchronously
      // or even provide a custom Error method.

      var beforeSubmit = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this.options, 'hooks.beforeSubmit');

      if (beforeSubmit) {
        beforeSubmit(submission, function (err, sub) {
          if (err) {
            _this16.onError(err);

            return;
          }

          _this16.submitExecute(sub, saved);
        });
      } else {
        this.submitExecute(submission, saved);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(value, flags, isModified) {
      if (this.watchSubmissionErrors && !this.submissionSuccess) {
        var errors = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this, 'formio.errors', []);
        var alerts = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this, 'alerts.alerts', []);
        var submitted = (0,lodash__WEBPACK_IMPORTED_MODULE_8__.get)(this, 'formio.submitted', false);

        if (submitted && (errors.length || alerts.length)) {
          this.onError(errors);
        }
      }

      return this.change.emit(Object.assign(Object.assign({}, value), {
        flags: flags,
        isModified: isModified
      }));
    }
  }]);

  return FormioBaseComponent;
}();

FormioBaseComponent.ɵfac = function FormioBaseComponent_Factory(t) {
  return new (t || FormioBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FormioAppConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CustomTagsService, 8));
};

FormioBaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FormioBaseComponent,
  selectors: [["ng-component"]],
  viewQuery: function FormioBaseComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.formioElement = _t.first);
    }
  },
  inputs: {
    submission: "submission",
    noeval: "noeval",
    readOnly: "readOnly",
    viewOnly: "viewOnly",
    hooks: "hooks",
    watchSubmissionErrors: "watchSubmissionErrors",
    form: "form",
    options: "options",
    service: "service",
    src: "src",
    url: "url",
    formioOptions: "formioOptions",
    renderOptions: "renderOptions",
    hideComponents: "hideComponents",
    refresh: "refresh",
    error: "error",
    success: "success",
    language: "language",
    renderer: "renderer"
  },
  outputs: {
    render: "render",
    customEvent: "customEvent",
    fileUploadingStatus: "fileUploadingStatus",
    submit: "submit",
    prevPage: "prevPage",
    nextPage: "nextPage",
    beforeSubmit: "beforeSubmit",
    change: "change",
    invalid: "invalid",
    errorChange: "errorChange",
    formLoad: "formLoad",
    submissionLoad: "submissionLoad",
    ready: "ready"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 0,
  vars: 0,
  template: function FormioBaseComponent_Template(rf, ctx) {},
  encapsulation: 2
});

FormioBaseComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: FormioAppConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }, {
    type: CustomTagsService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }];
};

FormioBaseComponent.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  submission: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  src: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  url: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  service: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  noeval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  formioOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  renderOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  readOnly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  viewOnly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  hideComponents: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  refresh: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  error: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  success: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  language: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  hooks: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  renderer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  watchSubmissionErrors: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  render: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  customEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  fileUploadingStatus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  submit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  prevPage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  nextPage: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  beforeSubmit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  invalid: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  errorChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  formLoad: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  submissionLoad: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  ready: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  formioElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['formio', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioBaseComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: FormioAppConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }, {
      type: CustomTagsService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }];
  }, {
    submission: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    noeval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    viewOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hooks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    watchSubmissionErrors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    render: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    customEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    fileUploadingStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    submit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    prevPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    nextPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    beforeSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    invalid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    errorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    formLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    submissionLoad: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    service: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    src: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    formioOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    renderOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    hideComponents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    success: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    language: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    renderer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    formioElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['formio', {
        static: true
      }]
    }]
  });
})();
/* tslint:disable */

/* tslint:enable */


var FormioComponent = /*#__PURE__*/function (_FormioBaseComponent) {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(FormioComponent, _FormioBaseComponent);

  var _super = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(FormioComponent);

  function FormioComponent(ngZone, config, customTags) {
    var _this17;

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioComponent);

    _this17 = _super.call(this, ngZone, config, customTags);
    _this17.ngZone = ngZone;
    _this17.config = config;
    _this17.customTags = customTags;

    if (_this17.config) {
      formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio.setBaseUrl(_this17.config.apiUrl);
      formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio.setProjectUrl(_this17.config.appUrl);
    } else {
      console.warn('You must provide an AppConfig within your application!');
    }

    return _this17;
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioComponent, [{
    key: "getRenderer",
    value: function getRenderer() {
      return this.renderer || formiojs__WEBPACK_IMPORTED_MODULE_6__.Form;
    }
  }]);

  return FormioComponent;
}(FormioBaseComponent);

FormioComponent.ɵfac = function FormioComponent_Factory(t) {
  return new (t || FormioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FormioAppConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CustomTagsService, 8));
};

FormioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FormioComponent,
  selectors: [["formio"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 4,
  consts: [["role", "form"], ["style", "position:relative;height:200px", 4, "ngIf"], [3, "alerts", "focusComponent", 4, "ngIf"], ["formio", ""], [2, "position", "relative", "height", "200px"], [3, "isLoading"], [3, "alerts", "focusComponent"]],
  template: function FormioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FormioComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FormioComponent_formio_alerts_2_Template, 1, 1, "formio-alerts", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, FormioComponent_formio_alerts_5_Template, 1, 1, "formio-alerts", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.top || ctx.options.alertsPosition === ctx.AlertsPosition.both);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.options.alertsPosition === ctx.AlertsPosition.bottom || ctx.options.alertsPosition === ctx.AlertsPosition.both);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, FormioLoaderComponent, FormioAlertsComponent];
  },
  styles: ["@charset \"UTF-8\";.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;height:120px;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after,.tab-error:after{content:\" *\";color:red}.field-required:after{position:relative;z-index:10}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\\2713\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail:after{content:\"\\2717\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px #00000005 inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{position:relative;padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector .loader-wrapper{display:none;width:100%;height:100%;background-color:#0000001a}.formio-component-file .fileSelector .loader-wrapper .loader{height:45px;width:45px;margin-top:-23px;margin-left:-23px}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-component-modal-wrapper-select .formio-dialog-content{overflow:visible;overflow:initial}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:\"\\d7\";cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:\"\\d7\";font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:\"\";display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:\"\"}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:\"\\25be\";margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\\25b8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.table-responsive[ref=component]{overflow-x:visible}.formio-component-textarea .alert .ck-editor__editable{color:inherit}.formio-component-textarea .ck.ck-editor__editable .image .ck-progress-bar{height:4px}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left;white-space:normal;height:auto}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-content .text-tiny{font-size:.7em}.formio-component-content .text-small{font-size:.85em}.formio-component-content .text-big{font-size:1.4em}.formio-component-content .text-huge{font-size:1.8em}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .open-modal-button{height:auto}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}.formio-component-textarea div.formio-editor-read-only-content[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.formio-editor-read-only-content li[data-list=bullet]{list-style-type:none}.formio-editor-read-only-content li[data-list=bullet] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=bullet] .ql-ui:before{content:\"\\2022\"}.formio-editor-read-only-content li[data-list=ordered]{list-style-type:none;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.formio-editor-read-only-content li[data-list=ordered] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=ordered] .ql-ui:before{content:counter(list-0,decimal) \". \"}.formio-editor-read-only-content figure.table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.formio-editor-read-only-content figure.table table td,.formio-editor-read-only-content figure.table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.formio-component-password .pull-right:not(:last-child),.formio-component-textarea .pull-right:not(:last-child),.formio-component-textfield .pull-right:not(:last-child){padding-left:12px}.formio-form>div>nav>ul.pagination{flex-flow:wrap row}.formio-form>div>nav>ul.pagination .page-link{cursor:pointer}.pac-container{z-index:11000}[ref=buttonMessageContainer].has-error{cursor:pointer}.formio-component-textarea .formio-editor-read-only-content .text-big{font-size:1.4em}.formio-component-textarea .formio-editor-read-only-content .text-huge{font-size:1.8em}.formio-component-textarea .formio-editor-read-only-content .text-small{font-size:.85em}.formio-component-textarea .formio-editor-read-only-content .text-tiny{font-size:.7em}\n"],
  encapsulation: 2
});

FormioComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: FormioAppConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }, {
    type: CustomTagsService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'formio',
      template: "<div role=\"form\" [attr.aria-label]=\"label\">\n  <div *ngIf=\"isLoading\" style=\"position:relative;height:200px\">\n    <formio-loader [isLoading]=\"isLoading\"></formio-loader>\n  </div>\n  <formio-alerts *ngIf=\"this.options.alertsPosition === AlertsPosition.top || this.options.alertsPosition === AlertsPosition.both\" (focusComponent)=\"focusOnComponet($event)\" [alerts]=\"alerts\"></formio-alerts>\n  <div #formio></div>\n  <formio-alerts *ngIf=\"this.options.alertsPosition === AlertsPosition.bottom || this.options.alertsPosition === AlertsPosition.both\" (focusComponent)=\"focusOnComponet($event)\" [alerts]=\"alerts\"></formio-alerts>\n</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
      styles: ["@charset \"UTF-8\";.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;height:120px;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after,.tab-error:after{content:\" *\";color:red}.field-required:after{position:relative;z-index:10}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\\2713\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail:after{content:\"\\2717\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px #00000005 inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{position:relative;padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector .loader-wrapper{display:none;width:100%;height:100%;background-color:#0000001a}.formio-component-file .fileSelector .loader-wrapper .loader{height:45px;width:45px;margin-top:-23px;margin-left:-23px}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-component-modal-wrapper-select .formio-dialog-content{overflow:visible;overflow:initial}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:\"\\d7\";cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:\"\\d7\";font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:\"\";display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:\"\"}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:\"\\25be\";margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\\25b8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.table-responsive[ref=component]{overflow-x:visible}.formio-component-textarea .alert .ck-editor__editable{color:inherit}.formio-component-textarea .ck.ck-editor__editable .image .ck-progress-bar{height:4px}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left;white-space:normal;height:auto}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-content .text-tiny{font-size:.7em}.formio-component-content .text-small{font-size:.85em}.formio-component-content .text-big{font-size:1.4em}.formio-component-content .text-huge{font-size:1.8em}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .open-modal-button{height:auto}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}.formio-component-textarea div.formio-editor-read-only-content[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.formio-editor-read-only-content li[data-list=bullet]{list-style-type:none}.formio-editor-read-only-content li[data-list=bullet] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=bullet] .ql-ui:before{content:\"\\2022\"}.formio-editor-read-only-content li[data-list=ordered]{list-style-type:none;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.formio-editor-read-only-content li[data-list=ordered] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=ordered] .ql-ui:before{content:counter(list-0,decimal) \". \"}.formio-editor-read-only-content figure.table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.formio-editor-read-only-content figure.table table td,.formio-editor-read-only-content figure.table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.formio-component-password .pull-right:not(:last-child),.formio-component-textarea .pull-right:not(:last-child),.formio-component-textfield .pull-right:not(:last-child){padding-left:12px}.formio-form>div>nav>ul.pagination{flex-flow:wrap row}.formio-form>div>nav>ul.pagination .page-link{cursor:pointer}.pac-container{z-index:11000}[ref=buttonMessageContainer].has-error{cursor:pointer}.formio-component-textarea .formio-editor-read-only-content .text-big{font-size:1.4em}.formio-component-textarea .formio-editor-read-only-content .text-huge{font-size:1.8em}.formio-component-textarea .formio-editor-read-only-content .text-small{font-size:.85em}.formio-component-textarea .formio-editor-read-only-content .text-tiny{font-size:.7em}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: FormioAppConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }, {
      type: CustomTagsService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }];
  }, null);
})();
/* tslint:disable */

/* tslint:enable */


var FormBuilderComponent = /*#__PURE__*/function () {
  function FormBuilderComponent(ngZone, config, customTags) {
    var _this18 = this;

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormBuilderComponent);

    this.ngZone = ngZone;
    this.config = config;
    this.customTags = customTags;
    this.componentAdding = false;
    this.noeval = false;

    if (this.config) {
      formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio.setBaseUrl(this.config.apiUrl);
      formiojs__WEBPACK_IMPORTED_MODULE_6__.Formio.setProjectUrl(this.config.appUrl);
    } else {
      console.warn('You must provide an AppConfig within your application!');
    }

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.ready = new Promise(function (resolve) {
      _this18.readyResolve = resolve;
    });
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormBuilderComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this19 = this;

      formiojs__WEBPACK_IMPORTED_MODULE_6__.Utils.Evaluator.noeval = this.noeval;

      if (this.refresh) {
        this.refreshSubscription = this.refresh.subscribe(function () {
          _this19.ngZone.runOutsideAngular(function () {
            _this19.buildForm(_this19.form);
          });
        });
      }

      if (this.rebuild) {
        this.rebuild.subscribe(function (options) {
          _this19.ngZone.runOutsideAngular(function () {
            _this19.rebuildForm(_this19.form, options);
          });
        });
      }
    }
  }, {
    key: "setInstance",
    value: function setInstance(instance) {
      var _this20 = this;

      this.formio = instance;
      instance.off('addComponent');
      instance.off('saveComponent');
      instance.off('updateComponent');
      instance.off('removeComponent');
      instance.on('addComponent', function (component, parent, path, index, isNew) {
        _this20.ngZone.run(function () {
          if (isNew) {
            _this20.componentAdding = true;
          } else {
            _this20.change.emit({
              type: 'addComponent',
              builder: instance,
              form: instance.schema,
              component: component,
              parent: parent,
              path: path,
              index: index
            });

            _this20.componentAdding = false;
          }
        });
      });
      instance.on('saveComponent', function (component, original, parent, path, index, isNew) {
        _this20.ngZone.run(function () {
          _this20.change.emit({
            type: _this20.componentAdding ? 'addComponent' : 'saveComponent',
            builder: instance,
            form: instance.schema,
            component: component,
            originalComponent: original,
            parent: parent,
            path: path,
            index: index,
            isNew: isNew || false
          });

          _this20.componentAdding = false;
        });
      });
      instance.on('updateComponent', function (component) {
        _this20.ngZone.run(function () {
          _this20.change.emit({
            type: 'updateComponent',
            builder: instance,
            form: instance.schema,
            component: component
          });
        });
      });
      instance.on('removeComponent', function (component, parent, path, index) {
        _this20.ngZone.run(function () {
          _this20.change.emit({
            type: 'deleteComponent',
            builder: instance,
            form: instance.schema,
            component: component,
            parent: parent,
            path: path,
            index: index
          });
        });
      });
      this.ngZone.run(function () {
        _this20.readyResolve(instance);
      });
      return instance;
    }
  }, {
    key: "setDisplay",
    value: function setDisplay(display, prevDisplay) {
      var _this21 = this;

      if (display && display !== prevDisplay) {
        return this.builder.setDisplay(display).then(function (instance) {
          return _this21.setInstance(instance);
        });
      } else {
        return Promise.resolve();
      }
    }
  }, {
    key: "buildForm",
    value: function buildForm(form, prevForm) {
      var _this22 = this;

      if (!form || !this.builderElement || !this.builderElement.nativeElement) {
        return;
      }

      if (this.builder) {
        return this.setDisplay(form.display, prevForm === null || prevForm === void 0 ? void 0 : prevForm.display).then(function () {
          _this22.builder.form = form;
          _this22.builder.instance.form = form;
          return _this22.builder.instance;
        });
      }

      return this.rebuildForm(form);
    }
  }, {
    key: "rebuildForm",
    value: function rebuildForm(form, options) {
      var _this23 = this;

      var Builder = this.formbuilder || formiojs__WEBPACK_IMPORTED_MODULE_6__.FormBuilder;
      var extraTags = this.customTags ? this.customTags.tags : [];
      this.builder = new Builder(this.builderElement.nativeElement, form, (0,lodash__WEBPACK_IMPORTED_MODULE_8__.assign)({
        icons: 'fontawesome',
        sanitizeConfig: {
          addTags: extraTags
        }
      }, options || this.options || {}));
      return this.builder.ready.then(function (instance) {
        return _this23.setInstance(instance);
      });
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this24 = this;

      formiojs__WEBPACK_IMPORTED_MODULE_6__.Utils.Evaluator.noeval = this.noeval;

      if (changes.form && changes.form.currentValue) {
        this.ngZone.runOutsideAngular(function () {
          _this24.buildForm(changes.form.currentValue || {
            components: []
          }, changes.form.previousValue);
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }

      if (this.formio) {
        this.formio.destroy();
      }
    }
  }]);

  return FormBuilderComponent;
}();

FormBuilderComponent.ɵfac = function FormBuilderComponent_Factory(t) {
  return new (t || FormBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](FormioAppConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](CustomTagsService, 8));
};

FormBuilderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FormBuilderComponent,
  selectors: [["form-builder"]],
  viewQuery: function FormBuilderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.builderElement = _t.first);
    }
  },
  inputs: {
    noeval: "noeval",
    form: "form",
    options: "options",
    formbuilder: "formbuilder",
    refresh: "refresh",
    rebuild: "rebuild"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["builder", ""]],
  template: function FormBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", null, 0);
    }
  },
  styles: ["@charset \"UTF-8\";.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";filter:alpha(opacity=20)}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;height:120px;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after,.tab-error:after{content:\" *\";color:red}.field-required:after{position:relative;z-index:10}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\\2713\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail:after{content:\"\\2717\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px #00000005 inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{position:relative;padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector .loader-wrapper{display:none;width:100%;height:100%;background-color:#0000001a}.formio-component-file .fileSelector .loader-wrapper .loader{height:45px;width:45px;margin-top:-23px;margin-left:-23px}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-component-modal-wrapper-select .formio-dialog-content{overflow:visible;overflow:initial}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:\"\\d7\";cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:\"\\d7\";font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:\"\";display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:\"\"}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:\"\\25be\";margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\\25b8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.table-responsive[ref=component]{overflow-x:visible}.formio-component-textarea .alert .ck-editor__editable{color:inherit}.formio-component-textarea .ck.ck-editor__editable .image .ck-progress-bar{height:4px}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left;white-space:normal;height:auto}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-content .text-tiny{font-size:.7em}.formio-component-content .text-small{font-size:.85em}.formio-component-content .text-big{font-size:1.4em}.formio-component-content .text-huge{font-size:1.8em}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .open-modal-button{height:auto}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}.formio-component-textarea div.formio-editor-read-only-content[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.formio-editor-read-only-content li[data-list=bullet]{list-style-type:none}.formio-editor-read-only-content li[data-list=bullet] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=bullet] .ql-ui:before{content:\"\\2022\"}.formio-editor-read-only-content li[data-list=ordered]{list-style-type:none;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.formio-editor-read-only-content li[data-list=ordered] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=ordered] .ql-ui:before{content:counter(list-0,decimal) \". \"}.formio-editor-read-only-content figure.table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.formio-editor-read-only-content figure.table table td,.formio-editor-read-only-content figure.table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.formio-component-password .pull-right:not(:last-child),.formio-component-textarea .pull-right:not(:last-child),.formio-component-textfield .pull-right:not(:last-child){padding-left:12px}.formio-form>div>nav>ul.pagination{flex-flow:wrap row}.formio-form>div>nav>ul.pagination .page-link{cursor:pointer}.pac-container{z-index:11000}[ref=buttonMessageContainer].has-error{cursor:pointer}.formio-component-textarea .formio-editor-read-only-content .text-big{font-size:1.4em}.formio-component-textarea .formio-editor-read-only-content .text-huge{font-size:1.8em}.formio-component-textarea .formio-editor-read-only-content .text-small{font-size:.85em}.formio-component-textarea .formio-editor-read-only-content .text-tiny{font-size:.7em}.formbuilder{position:relative}.drag-container{padding:10px;border:dotted 2px #e8e8e8}.drag-container:hover{cursor:move;border:dotted 2px #ccc}.drag-container.formio-builder-form,.drag-container.formio-builder-form:hover,.panel-body>.drag-container.formio-builder-components,.panel-body>.drag-container.formio-builder-components:hover,.tab-pane>.drag-container.formio-builder-components,.tab-pane>.drag-container.formio-builder-components:hover{padding:0 0 1rem;border:none}.component-btn-group{position:absolute;right:0;z-index:1000;margin-top:-2px}.builder-component{position:relative;min-height:15px}.builder-component .formio-component-htmlelement{border:dotted 2px #e8e8e8}.builder-component .formio-component-htmlelement [ref=html]:empty:before{content:\"HTML Content\";color:#aaa}.builder-component:not(:hover) .component-btn-group{display:none}.builder-group-button{background-color:transparent;white-space:normal;text-align:left}.form-builder-group-header{padding:0}.component-btn-group .component-settings-button{float:right;margin:4px 4px 0 0;z-index:1001;box-shadow:0 0 10px 1px #3071a999}.formbuilder .formio-component-content,.formbuilder .formio-component-datasource,.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{border:2px dashed #ddd}.formbuilder .formio-component-datasource,.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{height:3em;text-align:center;color:#aaa;padding-top:.5em}.btn-group-xxs>.btn,.btn-xxs,.component-btn-group .component-settings-button{padding:2px;font-size:10px;line-height:1.2em;border-radius:0;width:18px;height:18px}.formcomponents .formcomponent{text-align:left;padding:5px 5px 5px 8px;margin-top:.2rem;font-size:.8em;line-height:1.2;border-radius:.3em}.form-builder-panel .panel-body{padding:5px}.formio-component-tabs .ui.tabular.menu .item{padding:.8em}.formio-pdf-builder{position:relative}.formio-drop-zone{display:none;position:absolute;z-index:10;background-color:#0d87e9;opacity:.1}.formio-drop-zone.enabled{display:inherit}.component-settings .formio-dialog-content{max-height:100%}.component-btn-group .btn.component-settings-button-paste{display:none}.builder-paste-mode .component-settings-button-paste{display:inherit!important}.wizard-page-label{cursor:pointer;border-radius:0}.panel-body .drag-and-drop-alert{margin-bottom:0}.builder-sidebar_scroll{position:sticky;top:15px}.builder-sidebar_search{margin-bottom:10px;-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.formio-wizard-builder-component-title{color:#6c757d;text-align:center;padding:.5rem}.formio-wizard-position{position:relative}.formio-settings-help{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc;margin-top:10px}.help-block{margin:0}.builder-sidebar .btn{white-space:normal}.component-settings{padding-top:20px!important;padding-bottom:20px!important}.component-edit-container{height:auto;overflow:hidden}.component-edit-content{height:calc(100% - 4em)}.component-edit-tabs.col-sm-6{height:100%;overflow-y:auto}.component-edit-tabs.col-sm-12{height:calc(100% - 4em);overflow-y:auto}.component-edit-tabs.col-sm-12 .editForm{height:calc(100% - 4em);overflow-y:auto}.progress.pdf-progress{height:2rem}.progress.pdf-progress .progress-bar{font-size:1rem;line-height:2rem}.builder-sidebar.disabled .formcomponent{cursor:not-allowed;opacity:.65;box-shadow:none}\n"],
  encapsulation: 2
});

FormBuilderComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: FormioAppConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }, {
    type: CustomTagsService,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
    }]
  }];
};

FormBuilderComponent.propDecorators = {
  form: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  formbuilder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  noeval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  refresh: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  rebuild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }],
  builderElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['builder', {
      static: true
    }]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormBuilderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'form-builder',
      template: "<div #builder></div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
      styles: ["@charset \"UTF-8\";.choices{position:relative;margin-bottom:24px;font-size:16px}.choices:focus{outline:0}.choices:last-child{margin-bottom:0}.choices.is-disabled .choices__inner,.choices.is-disabled .choices__input{background-color:#eaeaea;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.choices.is-disabled .choices__item{cursor:not-allowed}.choices [hidden]{display:none!important}.choices[data-type*=select-one]{cursor:pointer}.choices[data-type*=select-one] .choices__inner{padding-bottom:7.5px}.choices[data-type*=select-one] .choices__input{display:block;width:100%;padding:10px;border-bottom:1px solid #ddd;background-color:#fff;margin:0}.choices[data-type*=select-one] .choices__button{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);padding:0;background-size:8px;position:absolute;top:50%;right:0;margin-top:-10px;margin-right:25px;height:20px;width:20px;border-radius:10em;opacity:.5}.choices[data-type*=select-one] .choices__button:focus,.choices[data-type*=select-one] .choices__button:hover{opacity:1}.choices[data-type*=select-one] .choices__button:focus{box-shadow:0 0 0 2px #00bcd4}.choices[data-type*=select-one] .choices__item[data-value=\"\"] .choices__button{display:none}.choices[data-type*=select-one]:after{content:\"\";height:0;width:0;border-style:solid;border-color:#333 transparent transparent;border-width:5px;position:absolute;right:11.5px;top:50%;margin-top:-2.5px;pointer-events:none}.choices[data-type*=select-one].is-open:after{border-color:transparent transparent #333;margin-top:-7.5px}.choices[data-type*=select-one][dir=rtl]:after{left:11.5px;right:auto}.choices[data-type*=select-one][dir=rtl] .choices__button{right:auto;left:0;margin-left:25px;margin-right:0}.choices[data-type*=select-multiple] .choices__inner,.choices[data-type*=text] .choices__inner{cursor:text}.choices[data-type*=select-multiple] .choices__button,.choices[data-type*=text] .choices__button{position:relative;display:inline-block;margin:0 -4px 0 8px;padding-left:16px;border-left:1px solid #008fa1;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyeiIvPjxwYXRoIGQ9Ik0wIDE4LjM2NEwxOC4zNjQgMGwyLjU0OCAyLjU0OEwyLjU0OCAyMC45MTJ6Ii8+PC9nPjwvc3ZnPg==);background-size:8px;width:8px;line-height:1;opacity:.75;border-radius:0}.choices[data-type*=select-multiple] .choices__button:focus,.choices[data-type*=select-multiple] .choices__button:hover,.choices[data-type*=text] .choices__button:focus,.choices[data-type*=text] .choices__button:hover{opacity:1}.choices__inner{display:inline-block;vertical-align:top;width:100%;background-color:#f9f9f9;padding:7.5px 7.5px 3.75px;border:1px solid #ddd;border-radius:2.5px;font-size:14px;min-height:44px;overflow:hidden}.is-focused .choices__inner,.is-open .choices__inner{border-color:#b7b7b7}.is-open .choices__inner{border-radius:2.5px 2.5px 0 0}.is-flipped.is-open .choices__inner{border-radius:0 0 2.5px 2.5px}.choices__list{margin:0;padding-left:0;list-style:none}.choices__list--single{display:inline-block;padding:4px 16px 4px 4px;width:100%}[dir=rtl] .choices__list--single{padding-right:4px;padding-left:16px}.choices__list--single .choices__item{width:100%}.choices__list--multiple{display:inline}.choices__list--multiple .choices__item{display:inline-block;vertical-align:middle;border-radius:20px;padding:4px 10px;font-size:12px;font-weight:500;margin-right:3.75px;margin-bottom:3.75px;background-color:#00bcd4;border:1px solid #00a5bb;color:#fff;word-break:break-all;box-sizing:border-box}.choices__list--multiple .choices__item[data-deletable]{padding-right:5px}[dir=rtl] .choices__list--multiple .choices__item{margin-right:0;margin-left:3.75px}.choices__list--multiple .choices__item.is-highlighted{background-color:#00a5bb;border:1px solid #008fa1}.is-disabled .choices__list--multiple .choices__item{background-color:#aaa;border:1px solid #919191}.choices__list--dropdown{visibility:hidden;z-index:1;position:absolute;width:100%;background-color:#fff;border:1px solid #ddd;top:100%;margin-top:-1px;border-bottom-left-radius:2.5px;border-bottom-right-radius:2.5px;overflow:hidden;word-break:break-all;will-change:visibility}.choices__list--dropdown.is-active{visibility:visible}.is-open .choices__list--dropdown{border-color:#b7b7b7}.is-flipped .choices__list--dropdown{top:auto;bottom:100%;margin-top:0;margin-bottom:-1px;border-radius:.25rem .25rem 0 0}.choices__list--dropdown .choices__list{position:relative;max-height:300px;overflow:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.choices__list--dropdown .choices__item{position:relative;padding:10px;font-size:14px}[dir=rtl] .choices__list--dropdown .choices__item{text-align:right}@media (min-width:640px){.choices__list--dropdown .choices__item--selectable{padding-right:100px}.choices__list--dropdown .choices__item--selectable:after{content:attr(data-select-text);font-size:12px;opacity:0;position:absolute;right:10px;top:50%;transform:translateY(-50%)}[dir=rtl] .choices__list--dropdown .choices__item--selectable{text-align:right;padding-left:100px;padding-right:10px}[dir=rtl] .choices__list--dropdown .choices__item--selectable:after{right:auto;left:10px}}.choices__list--dropdown .choices__item--selectable.is-highlighted{background-color:#f2f2f2}.choices__list--dropdown .choices__item--selectable.is-highlighted:after{opacity:.5}.choices__item{cursor:default}.choices__item--selectable{cursor:pointer}.choices__item--disabled{cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:.5}.choices__heading{font-weight:600;font-size:12px;padding:10px;border-bottom:1px solid #f7f7f7;color:gray}.choices__button{text-indent:-9999px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background-color:transparent;background-repeat:no-repeat;background-position:center;cursor:pointer}.choices__button:focus,.choices__input:focus{outline:0}.choices__input{display:inline-block;vertical-align:baseline;background-color:#f9f9f9;font-size:14px;margin-bottom:5px;border:0;border-radius:0;max-width:100%;padding:4px 0 4px 2px}[dir=rtl] .choices__input{padding-right:2px;padding-left:0}.choices__placeholder{opacity:.5}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";filter:alpha(opacity=80)}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";filter:alpha(opacity=20)}.formio-loader{position:relative;min-height:60px}.loader-wrapper{z-index:1000;position:absolute;top:0;left:0;bottom:0;right:0;height:120px;background-color:#0000}.loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.formio-form{position:relative;min-height:80px}.formio-error-wrapper,.formio-warning-wrapper{padding:1em}.formio-error-wrapper{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.formio-warning-wrapper{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.formio-disabled-input .form-control.flatpickr-input{background-color:#eee}.builder-component.has-error .invalid-feedback,.formio-component.alert-danger .invalid-feedback,.formio-component.has-error .invalid-feedback,.formio-component.has-message .invalid-feedback{display:block;color:inherit;margin-top:4px}.formio-errors .error{color:#dc3545}.formio-errors .warning{color:#856404}.formio-errors .info{color:#004085}.formio-wysiwyg-editor{min-height:200px;background-color:#fff}.has-feedback .form-control{padding-right:10px}.has-feedback .form-control[type=hidden]{padding-right:0}.has-error.bg-danger{padding:4px}.ql-source:after{content:\"[source]\";white-space:nowrap}.quill-source-code{width:100%;margin:0;background:#1d1d1d;box-sizing:border-box;color:#ccc;font-size:15px;outline:0;padding:20px;line-height:24px;font-family:Consolas,Menlo,Monaco,\"Courier New\",monospace;position:absolute;top:0;bottom:0;border:none;display:none}.formio-component-tags tags{background-color:#fff}.field-required:after,.tab-error:after{content:\" *\";color:red}.field-required:after{position:relative;z-index:10}.glyphicon-spin{-webkit-animation:formio-spin 1s infinite linear;animation:formio-spin 1s infinite linear}@-webkit-keyframes formio-spin{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes formio-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button-icon-right{margin-left:5px}.formio-component-submit .submit-success:after{content:\"\\2713\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail:after{content:\"\\2717\";position:relative;right:-4px;top:1px;line-height:1}.formio-component-submit .submit-fail[disabled]{opacity:1}.form-control.flatpickr-input{background-color:#fff}td>.form-group{margin-bottom:0}.signature-pad-body{overflow:hidden;position:relative}.signature-pad-canvas{border-radius:4px;box-shadow:0 0 5px #00000005 inset;border:1px solid #f4f4f4}.btn.signature-pad-refresh{position:absolute;left:0;top:0;z-index:1000;padding:3px;line-height:0}[dir=rtl] .btn.signature-pad-refresh{left:unset;right:0}.formio-component-multiple .choices__input{width:100%}.choices__list--dropdown .choices__item--selectable{padding-right:0}.signature-pad-refresh img{height:1.2em}.signature-pad-footer{text-align:center;color:#c3c3c3}.choices__list--dropdown{z-index:100}.choices__list--multiple .choices__item{border-radius:0;padding:2px 8px;line-height:1em;margin-bottom:6px}.choices__list--single{padding:0}.choices__item.choices__item--selectable{white-space:nowrap;overflow:hidden;padding-right:25px;text-overflow:ellipsis}.choices__input{padding:2px}.choices[dir=rtl]>*{text-align:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable]{padding-left:5px;float:right}.choices[dir=rtl] .choices__list--multiple .choices__item[data-deletable] .choices__button{float:left;margin:0 8px 0 -4px;padding-left:unset;padding-right:16px;border-left:unset;border-right:1px solid #008fa1;overflow:hidden}.formio-component-file .fileSelector{position:relative;padding:15px;border:2px dashed #ddd;text-align:center}.formio-component-file .fileSelector .loader-wrapper{display:none;width:100%;height:100%;background-color:#0000001a}.formio-component-file .fileSelector .loader-wrapper .loader{height:45px;width:45px;margin-top:-23px;margin-left:-23px}.formio-component-file .fileSelector.fileDragOver{border-color:#127abe}.formio-component-file .fileSelector .fa,.formio-component-file .fileSelector .glyphicon{font-size:20px;margin-right:5px}[dir=rtl] .formio-component-file .fileSelector .fa,[dir=rtl] .formio-component-file .fileSelector .glyphicon{margin-right:unset;margin-left:5px}.formio-component-file .fileSelector .browse{cursor:pointer}@-webkit-keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@keyframes formio-dialog-fadeout{0%{opacity:1}to{opacity:0}}@-webkit-keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}@keyframes formio-dialog-fadein{0%{opacity:0}to{opacity:1}}.formio-dialog{box-sizing:border-box;font-size:.8em;color:#666}.formio-dialog.formio-modaledit-dialog{font-size:inherit}.formio-dialog *,.formio-dialog :after,.formio-dialog :before{box-sizing:inherit}.formio-dialog{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s}.formio-dialog.formio-dialog-disabled-animation,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-content,.formio-dialog.formio-dialog-disabled-animation .formio-dialog-overlay{-webkit-animation:none!important;animation:none!important}.formio-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;margin-right:15px;background:0 0}.formio-dialog-no-overlay{pointer-events:none}.formio-dialog.formio-dialog-closing .formio-dialog-overlay{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-content{background:#fff;-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadein .5s;animation:formio-dialog-fadein .5s;pointer-events:all;overflow:auto}.formio-component-modal-wrapper-select .formio-dialog-content{overflow:visible;overflow:initial}.formio-dialog.formio-dialog-closing .formio-dialog-content{-webkit-backface-visibility:hidden;-webkit-animation:formio-dialog-fadeout .5s;animation:formio-dialog-fadeout .5s}.formio-dialog-close:before{font-family:Helvetica,Arial,sans-serif;content:\"\\d7\";cursor:pointer}body.formio-dialog-open,html.formio-dialog-open{overflow:hidden}.formio-dialog .tab-content{padding-top:12px}.formio-dialog-close{z-index:1000}@-webkit-keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@keyframes formio-dialog-flyin{0%{opacity:0;transform:translateY(-40px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes formio-dialog-flyout{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}.formio-dialog.formio-dialog-theme-default{padding-bottom:160px;padding-top:160px}.formio-dialog.formio-dialog-theme-default.formio-dialog-closing .formio-dialog-content{-webkit-animation:formio-dialog-flyout .5s;animation:formio-dialog-flyout .5s}.formio-dialog.formio-dialog-theme-default .formio-dialog-content{-webkit-animation:formio-dialog-flyin .5s;animation:formio-dialog-flyin .5s;background:#f0f0f0;border-radius:5px;font-family:Helvetica,sans-serif;font-size:1.1em;line-height:1.5em;margin:0 auto;max-width:100%;padding:1em;position:relative;width:80%}.formio-dialog.formio-dialog-theme-default .formio-dialog-close{border:none;background:0 0;cursor:pointer;position:absolute;right:0;top:0;z-index:100}.formio-clickable{cursor:pointer}.component-settings .nav>li>a{padding:8px 10px}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:before{display:block;padding:3px;background:0 0;color:#bbb;content:\"\\d7\";font-size:26px;font-weight:400;line-height:26px;text-align:center}.formio-dialog.formio-dialog-theme-default .formio-dialog-close:active:before,.formio-dialog.formio-dialog-theme-default .formio-dialog-close:hover:before{color:#777}.formio-dialog.formio-dialog-theme-default .formio-dialog-message{margin-bottom:.5em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input{margin-bottom:1em}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text],.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url],.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea{background:#fff;border:0;border-radius:3px;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0 0 .25em;min-height:2.5em;padding:.25em .67em;width:100%}.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=email]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=password]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=text]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input input[type=url]:focus,.formio-dialog.formio-dialog-theme-default .formio-dialog-input textarea:focus{box-shadow:inset 0 0 0 2px #8dbdf1;outline:0}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons{*zoom:1}.formio-dialog.formio-dialog-theme-default .formio-dialog-buttons:after{content:\"\";display:table;clear:both}.formio-dialog.formio-dialog-theme-default .formio-dialog-button{border:0;border-radius:3px;cursor:pointer;float:right;font-family:inherit;font-size:.8em;letter-spacing:.1em;line-height:1em;margin:0 0 0 .5em;padding:.75em 2em;text-transform:uppercase}.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:formio-dialog-pulse 1.1s infinite;animation:formio-dialog-pulse 1.1s infinite;outline:0}@media (max-width:568px){.formio-dialog.formio-dialog-theme-default .formio-dialog-button:focus{-webkit-animation:none;animation:none}}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-primary{background:#3288e6;color:#fff}.formio-dialog.formio-dialog-theme-default .formio-dialog-button.formio-dialog-button-secondary{background:#e0e0e0;color:#777}.formio-dialog-content .panel{margin:0}.formio-placeholder{position:absolute;color:#999}.formio-dialog .formio-dialog-close{cursor:pointer}.formio-iframe{border:none;width:100%;height:1000px}.inline-form-button{margin-right:10px}.tooltip{opacity:1}.tooltip[x-placement=right] .tooltip-arrow{border-right:5px solid #000}.tooltip[x-placement=right] .tooltip-inner{margin-left:8px}.control-label--bottom{margin-bottom:0;margin-top:5px}.formio-component-label-hidden{position:relative}.formio-hidden{margin:0}.control-label--hidden{position:absolute;top:6px;right:5px;font-size:1.5em}.formio-component-datetime .control-label--hidden.field-required{right:45px;z-index:3}.formio-component-selectboxes .control-label--hidden.field-required,.formio-component-survey .control-label--hidden.field-required{top:0}.formio-component-resource .control-label--hidden.field-required,.formio-component-select .control-label--hidden.field-required{right:40px;z-index:2}.formio-component-datasource,.formio-component-hidden:not(.formio-component-checkbox){margin-bottom:0}.checkbox-inline label,.radio-inline label{font-weight:400;cursor:pointer}.editgrid-listgroup{margin-bottom:10px}.tree-listgroup{flex-direction:row}.formio-component-submit button[disabled]+.has-error{display:block}.formio-choices.form-group{margin-bottom:0}.formio-choices[data-type=select-multiple] .form-control{height:auto}.form-control.formio-multiple-mask-select{width:15%;z-index:4}.form-control.formio-multiple-mask-input{width:85%}.input-group.formio-multiple-mask-container{width:100%}.formio-component .table{margin-bottom:0}.formio-hide-label-panel-tooltip{margin-top:-10px;margin-left:-10px}.is-disabled .choices__list--multiple .choices__item{padding:5px 10px}.is-disabled .choices__list--multiple .choices__item .choices__button{display:none}.formio-collapse-icon{cursor:pointer;margin-right:4px}[dir=rtl] .formio-collapse-icon{margin-right:unset;margin-left:4px}.formio-component-dateTime .form-control[type=datetime-local]~.input-group-addon,.formio-component-datetime .form-control[type=datetime-local]~.input-group-addon{width:auto}.formio-component-datagrid .formio-datagrid-remove{position:absolute;top:0;right:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-datagrid .datagrid-table>tbody>tr>td:last-child{position:relative}.formio-component-datagrid .datagrid-table>tbody>tr:hover>td:last-child .formio-datagrid-remove{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-component-modaledit .formio-modaledit-view-container{position:relative;border:1px solid #ddd;min-height:34px;padding:6px 12px;cursor:text}td .formio-component-modaledit .formio-modaledit-view-container{padding:0;border-style:none}.formio-component-modaledit .formio-modaledit-edit{position:absolute;top:0;left:0;visibility:hidden;opacity:0;transition:opacity .2s linear,visibility 0s .2s}.formio-component-modaledit .formio-modaledit-view-container:hover .formio-modaledit-edit{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.formio-modaledit-dialog .formio-modaledit-close{position:absolute;top:100%;right:0;border-radius:0}.reset-margins a,.reset-margins abbr,.reset-margins acronym,.reset-margins address,.reset-margins applet,.reset-margins article,.reset-margins aside,.reset-margins audio,.reset-margins b,.reset-margins big,.reset-margins blockquote,.reset-margins body,.reset-margins canvas,.reset-margins caption,.reset-margins center,.reset-margins cite,.reset-margins code,.reset-margins dd,.reset-margins del,.reset-margins details,.reset-margins dfn,.reset-margins div,.reset-margins dl,.reset-margins dt,.reset-margins em,.reset-margins embed,.reset-margins fieldset,.reset-margins figcaption,.reset-margins figure,.reset-margins footer,.reset-margins form,.reset-margins h1,.reset-margins h2,.reset-margins h3,.reset-margins h4,.reset-margins h5,.reset-margins h6,.reset-margins header,.reset-margins hgroup,.reset-margins html,.reset-margins i,.reset-margins iframe,.reset-margins img,.reset-margins ins,.reset-margins kbd,.reset-margins label,.reset-margins legend,.reset-margins li,.reset-margins mark,.reset-margins menu,.reset-margins nav,.reset-margins object,.reset-margins ol,.reset-margins output,.reset-margins p,.reset-margins pre,.reset-margins q,.reset-margins ruby,.reset-margins s,.reset-margins samp,.reset-margins section,.reset-margins small,.reset-margins span,.reset-margins strike,.reset-margins strong,.reset-margins sub,.reset-margins summary,.reset-margins sup,.reset-margins table,.reset-margins tbody,.reset-margins td,.reset-margins tfoot,.reset-margins th,.reset-margins thead,.reset-margins time,.reset-margins tr,.reset-margins tt,.reset-margins u,.reset-margins ul,.reset-margins var,.reset-margins video{margin:0}.ck-body .ck.ck-balloon-panel{z-index:101000}.formio-component-select select[disabled=disabled]{-webkit-appearance:none;-moz-appearance:none;text-indent:1px;text-overflow:\"\"}.formio-component-select .choices.is-disabled[data-type*=select-one]:after,.formio-component-select div[disabled=disabled] button{display:none}.datagrid-group-label.collapsed>td{display:none}.datagrid-group-header.clickable{cursor:pointer}.datagrid-group-header.clickable .datagrid-group-label:before{display:inline-block;vertical-align:middle;content:\"\\25be\";margin:0 5px}.datagrid-group-header.clickable.collapsed .datagrid-group-label:before{content:\"\\25b8\"}.formio-component.alert-danger .help-block,.formio-component.alert-warning .help-block{color:inherit}.tree__level_even{background-color:#f6f6f6}.tree__node-content{margin-bottom:10px}.tree__node-children{margin:0}.formio-select-autocomplete-input{opacity:0;position:absolute;z-index:-1}.has-error>.help-block{margin-top:5px;margin-bottom:10px}.no-top-border-table>.table>tbody>tr:first-child>td{border-top:none}.table>tbody>tr>td.cell-align-left{text-align:left}.table>tbody>tr>td.cell-align-center{text-align:center}.table>tbody>tr>td.cell-align-center>div{margin-left:auto;margin-right:auto}.table>tbody>tr>td.cell-align-right{text-align:right}.table>tbody>tr>td.cell-align-right>div{margin-left:auto}.table-responsive[ref=component]{overflow-x:visible}.formio-component-textarea .alert .ck-editor__editable{color:inherit}.formio-component-textarea .ck.ck-editor__editable .image .ck-progress-bar{height:4px}div[data-oembed-url]{width:100%}.checkbox label.label-position-bottom,.checkbox label.label-position-left,.checkbox label.label-position-top,.radio label.label-position-bottom,.radio label.label-position-left,.radio label.label-position-top{padding-left:0}.checkbox label.label-position-bottom span,.checkbox label.label-position-top span,.radio label.label-position-bottom span,.radio label.label-position-top span{display:block}.checkbox label.label-position-bottom input[type=checkbox],.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-bottom input[type=radio],.radio label.label-position-top input[type=radio]{position:relative;margin-left:0}.checkbox label.label-position-top input[type=checkbox],.radio label.label-position-top input[type=radio]{margin-top:4px}.checkbox label.label-position-bottom input[type=checkbox],.radio label.label-position-bottom input[type=radio]{margin-bottom:8px}.checkbox label.label-position-left input[type=checkbox],.radio label.label-position-left input[type=radio]{margin-left:10px}.open-modal-button{width:100%;text-align:left;white-space:normal;height:auto}.formio-component-modal-wrapper-signature .open-modal-button{text-align:center;height:100%;font-size:1.4em;padding:0;margin:0}.formio-component-content .image{display:table;clear:both;text-align:center;margin:1em auto}.formio-component-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}.formio-component-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.formio-component-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.formio-component-content .image.image_resized img{width:100%}.formio-component-content .image.image_resized>figcaption{display:block}.formio-component-content .media{clear:both;margin:1em 0;display:block;min-width:15em}.formio-component-content .image-style-align-center:not(.image_resized),.formio-component-content .image-style-align-left:not(.image_resized),.formio-component-content .image-style-align-right:not(.image_resized),.formio-component-content .image-style-side:not(.image_resized){max-width:50%}.formio-component-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.formio-component-content .image-style-align-center{margin-left:auto;margin-right:auto}.formio-component-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.formio-component-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:solid 5px #ccc}.formio-component-content[dir=rtl] blockquote{border-left:0;border-right:solid 5px #ccc}.formio-component-content .text-tiny{font-size:.7em}.formio-component-content .text-small{font-size:.85em}.formio-component-content .text-big{font-size:1.4em}.formio-component-content .text-huge{font-size:1.8em}.formio-component-address.formio-component-label-hidden>label.field-required{z-index:1}.formio-component-address.formio-component-label-hidden>label.field-required~.address-autocomplete-container .address-autocomplete-remove-value-icon{right:20px}.address-autocomplete-container{position:relative}.address-autocomplete-container .address-autocomplete-remove-value-icon{cursor:pointer;position:absolute;margin-top:-9px;right:10px;top:50%}.address-autocomplete-container .address-autocomplete-remove-value-icon--hidden{display:none}.autocomplete{background:#fff;font:14px/22px \"-apple-system\",BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;overflow:auto;box-sizing:border-box;border:1px solid rgba(50,50,50,.6);z-index:11000}.autocomplete>div{cursor:pointer;padding:6px 10px}.autocomplete>div.selected,.autocomplete>div:hover:not(.group){background:#1e90ff;color:#fff}.field-wrapper{display:flex}.field-wrapper--reverse{flex-direction:row-reverse}.field-wrapper .field-label--right{text-align:right}.formio-component-modal-wrapper{margin-bottom:10px}.formio-component-modal-wrapper .open-modal-button{height:auto}.formio-component-modal-wrapper .component-rendering-hidden{visibility:hidden}.formio-component-textarea div.formio-editor-read-only-content[ref=input]{white-space:pre-wrap}.formio-editor-read-only-content img{max-width:100%}.formio-editor-read-only-content li[data-list=bullet]{list-style-type:none}.formio-editor-read-only-content li[data-list=bullet] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=bullet] .ql-ui:before{content:\"\\2022\"}.formio-editor-read-only-content li[data-list=ordered]{list-style-type:none;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.formio-editor-read-only-content li[data-list=ordered] .ql-ui{padding-right:.5rem}.formio-editor-read-only-content li[data-list=ordered] .ql-ui:before{content:counter(list-0,decimal) \". \"}.formio-editor-read-only-content figure.table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.formio-editor-read-only-content figure.table table td,.formio-editor-read-only-content figure.table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.formio-component-password .pull-right:not(:last-child),.formio-component-textarea .pull-right:not(:last-child),.formio-component-textfield .pull-right:not(:last-child){padding-left:12px}.formio-form>div>nav>ul.pagination{flex-flow:wrap row}.formio-form>div>nav>ul.pagination .page-link{cursor:pointer}.pac-container{z-index:11000}[ref=buttonMessageContainer].has-error{cursor:pointer}.formio-component-textarea .formio-editor-read-only-content .text-big{font-size:1.4em}.formio-component-textarea .formio-editor-read-only-content .text-huge{font-size:1.8em}.formio-component-textarea .formio-editor-read-only-content .text-small{font-size:.85em}.formio-component-textarea .formio-editor-read-only-content .text-tiny{font-size:.7em}.formbuilder{position:relative}.drag-container{padding:10px;border:dotted 2px #e8e8e8}.drag-container:hover{cursor:move;border:dotted 2px #ccc}.drag-container.formio-builder-form,.drag-container.formio-builder-form:hover,.panel-body>.drag-container.formio-builder-components,.panel-body>.drag-container.formio-builder-components:hover,.tab-pane>.drag-container.formio-builder-components,.tab-pane>.drag-container.formio-builder-components:hover{padding:0 0 1rem;border:none}.component-btn-group{position:absolute;right:0;z-index:1000;margin-top:-2px}.builder-component{position:relative;min-height:15px}.builder-component .formio-component-htmlelement{border:dotted 2px #e8e8e8}.builder-component .formio-component-htmlelement [ref=html]:empty:before{content:\"HTML Content\";color:#aaa}.builder-component:not(:hover) .component-btn-group{display:none}.builder-group-button{background-color:transparent;white-space:normal;text-align:left}.form-builder-group-header{padding:0}.component-btn-group .component-settings-button{float:right;margin:4px 4px 0 0;z-index:1001;box-shadow:0 0 10px 1px #3071a999}.formbuilder .formio-component-content,.formbuilder .formio-component-datasource,.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{border:2px dashed #ddd}.formbuilder .formio-component-datasource,.formbuilder .formio-component-form,.formbuilder .formio-component-hidden{height:3em;text-align:center;color:#aaa;padding-top:.5em}.btn-group-xxs>.btn,.btn-xxs,.component-btn-group .component-settings-button{padding:2px;font-size:10px;line-height:1.2em;border-radius:0;width:18px;height:18px}.formcomponents .formcomponent{text-align:left;padding:5px 5px 5px 8px;margin-top:.2rem;font-size:.8em;line-height:1.2;border-radius:.3em}.form-builder-panel .panel-body{padding:5px}.formio-component-tabs .ui.tabular.menu .item{padding:.8em}.formio-pdf-builder{position:relative}.formio-drop-zone{display:none;position:absolute;z-index:10;background-color:#0d87e9;opacity:.1}.formio-drop-zone.enabled{display:inherit}.component-settings .formio-dialog-content{max-height:100%}.component-btn-group .btn.component-settings-button-paste{display:none}.builder-paste-mode .component-settings-button-paste{display:inherit!important}.wizard-page-label{cursor:pointer;border-radius:0}.panel-body .drag-and-drop-alert{margin-bottom:0}.builder-sidebar_scroll{position:sticky;top:15px}.builder-sidebar_search{margin-bottom:10px;-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.formio-wizard-builder-component-title{color:#6c757d;text-align:center;padding:.5rem}.formio-wizard-position{position:relative}.formio-settings-help{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc;margin-top:10px}.help-block{margin:0}.builder-sidebar .btn{white-space:normal}.component-settings{padding-top:20px!important;padding-bottom:20px!important}.component-edit-container{height:auto;overflow:hidden}.component-edit-content{height:calc(100% - 4em)}.component-edit-tabs.col-sm-6{height:100%;overflow-y:auto}.component-edit-tabs.col-sm-12{height:calc(100% - 4em);overflow-y:auto}.component-edit-tabs.col-sm-12 .editForm{height:calc(100% - 4em);overflow-y:auto}.progress.pdf-progress{height:2rem}.progress.pdf-progress .progress-bar{font-size:1rem;line-height:2rem}.builder-sidebar.disabled .formcomponent{cursor:not-allowed;opacity:.65;box-shadow:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }, {
      type: FormioAppConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }, {
      type: CustomTagsService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }];
  }, {
    noeval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    formbuilder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    rebuild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    builderElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['builder', {
        static: true
      }]
    }]
  });
})();

var FormioLoaderComponent = function FormioLoaderComponent() {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioLoaderComponent);
};

FormioLoaderComponent.ɵfac = function FormioLoaderComponent_Factory(t) {
  return new (t || FormioLoaderComponent)();
};

FormioLoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FormioLoaderComponent,
  selectors: [["formio-loader"]],
  inputs: {
    isLoading: "isLoading"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "formio-loader-wrapper", 4, "ngIf"], [1, "formio-loader-wrapper"], [1, "formio-loader"]],
  template: function FormioLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FormioLoaderComponent_div_0_Template, 2, 0, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
  styles: [".formio-loader-wrapper[_ngcontent-%COMP%]{position:absolute;top:0px;bottom:0px;left:0px;right:0px;z-index:1000}.formio-loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
});
FormioLoaderComponent.propDecorators = {
  isLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioLoaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'formio-loader',
      template: "<div class=\"formio-loader-wrapper\" *ngIf=\"isLoading\">\n  <div class=\"formio-loader\"></div>\n</div>\n",
      styles: [".formio-loader-wrapper{position:absolute;top:0px;bottom:0px;left:0px;right:0px;z-index:1000}.formio-loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px;z-index:10000;display:inline-block;border:6px solid #f3f3f3;border-top:6px solid #3498db;border-radius:50%;width:60px;height:60px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], null, {
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var FormioAlertsComponent = /*#__PURE__*/function () {
  function FormioAlertsComponent() {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioAlertsComponent);

    this.focusComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(FormioAlertsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (!this.alerts) {
        this.alerts = new FormioAlerts();
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent(event, alert) {
      this.focusComponent.emit(alert.component.key);
    }
  }]);

  return FormioAlertsComponent;
}();

FormioAlertsComponent.ɵfac = function FormioAlertsComponent_Factory(t) {
  return new (t || FormioAlertsComponent)();
};

FormioAlertsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: FormioAlertsComponent,
  selectors: [["formio-alerts"]],
  inputs: {
    alerts: "alerts"
  },
  outputs: {
    focusComponent: "focusComponent"
  },
  decls: 1,
  vars: 1,
  consts: [["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"]],
  template: function FormioAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, FormioAlertsComponent_div_0_Template, 3, 6, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.alerts.alerts);
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf];
  },
  pipes: function pipes() {
    return [ParseHtmlContentPipe];
  },
  encapsulation: 2
});
FormioAlertsComponent.propDecorators = {
  alerts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  focusComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioAlertsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component,
    args: [{
      selector: 'formio-alerts',
      template: "<div *ngFor=\"let alert of alerts.alerts\" class=\"alert alert-{{ alert.type }}\" role=\"alert\" (click)=\"getComponent($event, alert)\">\n  {{alert.message | parseHtmlContent}}\n</div>\n"
    }]
  }], function () {
    return [];
  }, {
    focusComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    alerts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();

var ParseHtmlContentPipe = /*#__PURE__*/function () {
  function ParseHtmlContentPipe() {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, ParseHtmlContentPipe);
  }

  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ParseHtmlContentPipe, [{
    key: "transform",
    value:
    /*
      Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
      And then render in template.
    */
    function transform(content) {
      var parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
      return parsedContent === null || parsedContent === void 0 ? void 0 : parsedContent.textContent;
    }
  }]);

  return ParseHtmlContentPipe;
}();

ParseHtmlContentPipe.ɵfac = function ParseHtmlContentPipe_Factory(t) {
  return new (t || ParseHtmlContentPipe)();
};

ParseHtmlContentPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
  name: "parseHtmlContent",
  type: ParseHtmlContentPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ParseHtmlContentPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
    args: [{
      name: 'parseHtmlContent',
      pure: false
    }]
  }], null, null);
})();

var FormioModule = function FormioModule() {
  (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, FormioModule);
};

FormioModule.ɵfac = function FormioModule_Factory(t) {
  return new (t || FormioModule)();
};

FormioModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: FormioModule
});
FormioModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [FormioAlerts, CustomTagsService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FormioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      declarations: [FormioComponent, FormioBaseComponent, FormBuilderComponent, FormioLoaderComponent, FormioAlertsComponent, ParseHtmlContentPipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule],
      exports: [FormioComponent, FormBuilderComponent, FormioLoaderComponent, FormioAlertsComponent],
      providers: [FormioAlerts, CustomTagsService],
      entryComponents: [FormioComponent, FormBuilderComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FormioModule, {
    declarations: function declarations() {
      return [FormioComponent, FormioBaseComponent, FormBuilderComponent, FormioLoaderComponent, FormioAlertsComponent, ParseHtmlContentPipe];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule];
    },
    exports: function exports() {
      return [FormioComponent, FormBuilderComponent, FormioLoaderComponent, FormioAlertsComponent];
    }
  });
})(); // @ts-nocheck


var BaseInputComponent = formiojs__WEBPACK_IMPORTED_MODULE_6__.Components.components.input;
var TextfieldComponent = formiojs__WEBPACK_IMPORTED_MODULE_6__.Components.components.textfield;

function createCustomFormioComponent(customComponentOptions) {
  var _a;

  return _a = /*#__PURE__*/function (_BaseInputComponent) {
    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(CustomComponent, _BaseInputComponent);

    var _super2 = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(CustomComponent);

    function CustomComponent(component, options, data) {
      var _this25;

      (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, CustomComponent);

      _this25 = _super2.call(this, component, Object.assign(Object.assign({}, options), {
        sanitizeConfig: {
          addTags: [customComponentOptions.selector]
        }
      }), data);
      _this25.component = component;
      _this25.id = formiojs__WEBPACK_IMPORTED_MODULE_6__.Utils.getRandomComponentId();
      _this25.type = customComponentOptions.type;

      if (customComponentOptions.extraValidators) {
        _this25.validators = _this25.validators.concat(customComponentOptions.extraValidators);
      }

      return _this25;
    }

    (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CustomComponent, [{
      key: "defaultSchema",
      get: function get() {
        return CustomComponent.schema();
      }
    }, {
      key: "emptyValue",
      get: function get() {
        return customComponentOptions.emptyValue || null;
      }
    }, {
      key: "elementInfo",
      value: function elementInfo() {
        var info = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(CustomComponent.prototype), "elementInfo", this).call(this);

        info.type = customComponentOptions.selector;
        info.changeEvent = customComponentOptions.changeEvent || 'valueChange';
        info.attr = Object.assign(Object.assign({}, info.attr), {
          class: info.attr.class.replace('form-control', 'form-control-custom-field') // remove the form-control class as the custom angular component may look different

        });
        return info;
      }
    }, {
      key: "inputInfo",
      get: function get() {
        var info = Object.assign({
          id: this.key
        }, this.elementInfo());
        return info;
      }
    }, {
      key: "renderElement",
      value: function renderElement(value, index) {
        var info = this.inputInfo;
        return this.renderTemplate(customComponentOptions.template || 'input', {
          input: info,
          value: value,
          index: index
        });
      }
    }, {
      key: "attach",
      value: function attach(element) {
        var _this26 = this;

        var superAttach = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(CustomComponent.prototype), "attach", this).call(this, element);

        this._customAngularElement = element.querySelector(customComponentOptions.selector); // Bind the custom options and the validations to the Angular component's inputs (flattened)

        if (this._customAngularElement) {
          // To make sure we have working input in IE...
          // IE doesn't render it properly if it's not visible on the screen
          // due to the whole structure applied via innerHTML to the parent
          // so we need to use appendChild
          if (!this._customAngularElement.getAttribute('ng-version')) {
            this._customAngularElement.removeAttribute('ref');

            var newCustomElement = document.createElement(customComponentOptions.selector);
            newCustomElement.setAttribute('ref', 'input');
            Object.keys(this.inputInfo.attr).forEach(function (attr) {
              newCustomElement.setAttribute(attr, _this26.inputInfo.attr[attr]);
            });

            this._customAngularElement.appendChild(newCustomElement);

            this._customAngularElement = newCustomElement;
            superAttach = (0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_mn_jem_jem_src_v1_angular_app_v1_jemPass_Angular_Application_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.default)(CustomComponent.prototype), "attach", this).call(this, element);
          } // Bind customOptions


          for (var key in this.component.customOptions) {
            if (this.component.customOptions.hasOwnProperty(key)) {
              this._customAngularElement[key] = this.component.customOptions[key];
            }
          } // Bind validate options


          for (var _key in this.component.validate) {
            if (this.component.validate.hasOwnProperty(_key)) {
              this._customAngularElement[_key] = this.component.validate[_key];
            }
          } // Bind options explicitly set


          var fieldOptions = customComponentOptions.fieldOptions;

          if ((0,lodash__WEBPACK_IMPORTED_MODULE_8__.isArray)(fieldOptions) && fieldOptions.length > 0) {
            for (var _key2 in fieldOptions) {
              if (fieldOptions.hasOwnProperty(_key2)) {
                this._customAngularElement[fieldOptions[_key2]] = this.component[fieldOptions[_key2]];
              }
            }
          } // Attach event listener for emit event


          this._customAngularElement.addEventListener('formioEvent', function (event) {
            _this26.emit(event.detail.eventName, Object.assign(Object.assign({}, event.detail.data), {
              component: _this26.component
            }));
          }); // Ensure we bind the value (if it isn't a multiple-value component with no wrapper)


          if (!this._customAngularElement.value && !this.component.disableMultiValueWrapper) {
            this.restoreValue();
          }
        }

        return superAttach;
      } // Add extra option to support multiple value (e.g. datagrid) with single angular component (disableMultiValueWrapper)

    }, {
      key: "useWrapper",
      value: function useWrapper() {
        return this.component.hasOwnProperty('multiple') && this.component.multiple && !this.component.disableMultiValueWrapper;
      }
    }, {
      key: "defaultValue",
      get: function get() {
        var defaultValue = this.emptyValue; // handle falsy default value

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_8__.isNil)(this.component.defaultValue)) {
          defaultValue = this.component.defaultValue;
        }

        if (this.component.customDefaultValue && !this.options.preview) {
          defaultValue = this.evaluate(this.component.customDefaultValue, {
            value: ''
          }, 'value');
        }

        return (0,lodash__WEBPACK_IMPORTED_MODULE_8__.clone)(defaultValue);
      }
    }], [{
      key: "schema",
      value: function schema() {
        return BaseInputComponent.schema(Object.assign(Object.assign({}, customComponentOptions.schema), {
          type: customComponentOptions.type
        }));
      }
    }, {
      key: "builderInfo",
      get: function get() {
        return {
          title: customComponentOptions.title,
          group: customComponentOptions.group,
          icon: customComponentOptions.icon,
          weight: customComponentOptions.weight,
          documentation: customComponentOptions.documentation,
          schema: CustomComponent.schema()
        };
      }
    }]);

    return CustomComponent;
  }(BaseInputComponent), _a.editForm = customComponentOptions.editForm || TextfieldComponent.editForm, _a;
}

function registerCustomTag(tag, injector) {
  injector.get(CustomTagsService).addCustomTag(tag);
}

function registerCustomTags(tags, injector) {
  tags.forEach(function (tag) {
    return registerCustomTag(tag, injector);
  });
}

function registerCustomFormioComponent(options, angularComponent, injector) {
  registerCustomTag(options.selector, injector);
  var complexCustomComponent = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_14__.createCustomElement)(angularComponent, {
    injector: injector
  });
  customElements.define(options.selector, complexCustomComponent);
  formiojs__WEBPACK_IMPORTED_MODULE_6__.Components.setComponent(options.type, createCustomFormioComponent(options));
}

function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
  registerCustomTag(options.selector, injector);
  var complexCustomComponent = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_14__.createCustomElement)(angularComponent, {
    injector: injector
  });
  customElements.define(options.selector, complexCustomComponent);
  formiojs__WEBPACK_IMPORTED_MODULE_6__.Components.setComponent(options.type, formioClass);
}
/*
 * Public API Surface of angular-formio
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=formio-angular.js.map

/***/ }),

/***/ 73861:
/*!*************************************************!*\
  !*** ./src/app/views/sessions/myhome/myForm.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyForm": function() { return /* binding */ MyForm; }
/* harmony export */ });
/** @format */
var MyForm = {
    _id: '5d7a42f21cc1c2ca88ff2dd5',
    type: 'form',
    tags: [],
    owner: '553dbfc08d22d5cb1a7024f2',
    components: [
        {
            label: 'Panel',
            title: 'User Information',
            collapsible: false,
            mask: false,
            tableView: false,
            alwaysEnabled: false,
            type: 'panel',
            input: false,
            key: 'panel2',
            components: [
                {
                    label: 'Columns',
                    columns: [
                        {
                            components: [
                                {
                                    label: 'First Name',
                                    customClass: 'my-custom-class',
                                    placeholder: 'Enter your first Name, e.g., Madhu',
                                    tableView: true,
                                    alwaysEnabled: false,
                                    type: 'textfield',
                                    input: true,
                                    key: 'firstName',
                                    validate: { required: true },
                                    widget: {
                                        type: '',
                                        format: 'yyyy-MM-dd hh:mm a',
                                        dateFormat: 'yyyy-MM-dd hh:mm a',
                                        saveAs: 'text',
                                    },
                                    reorder: false,
                                    hideOnChildrenHidden: false,
                                    labelWidth: 30,
                                    labelMargin: 3,
                                    clearOnRefresh: false,
                                },
                            ],
                            width: 6,
                            offset: 0,
                            push: 0,
                            pull: 0,
                            type: 'column',
                            input: false,
                            hideOnChildrenHidden: false,
                            key: 'column',
                            tableView: true,
                            label: 'Column',
                            placeholder: '',
                            prefix: '',
                            'customClass': 'my-custom-class',
                            suffix: '',
                            multiple: false,
                            defaultValue: null,
                            protected: false,
                            unique: false,
                            persistent: true,
                            hidden: false,
                            clearOnHide: true,
                            dataGridLabel: false,
                            labelPosition: 'top',
                            labelWidth: 30,
                            labelMargin: 3,
                            description: '',
                            errorLabel: '',
                            tooltip: '',
                            hideLabel: false,
                            tabindex: '',
                            disabled: false,
                            autofocus: false,
                            dbIndex: false,
                            customDefaultValue: '',
                            calculateValue: '',
                            allowCalculateOverride: false,
                            widget: null,
                            refreshOn: '',
                            clearOnRefresh: false,
                            validateOn: 'change',
                            validate: { required: false, custom: '', customPrivate: false },
                            conditional: { show: null, when: null, eq: '' },
                            id: 'eu6xaap',
                            size: 'md',
                            currentWidth: 5,
                        },
                        {
                            width: 6,
                            offset: 0,
                            push: 0,
                            pull: 0,
                            type: 'column',
                            input: false,
                            hideOnChildrenHidden: false,
                            key: 'column',
                            tableView: true,
                            label: 'Column',
                            components: [
                                {
                                    label: 'Last Name',
                                    placeholder: 'Enter your last name',
                                    description: '',
                                    tooltip: 'Seriously?  You still need help with this one?',
                                    tableView: true,
                                    alwaysEnabled: false,
                                    type: 'textfield',
                                    input: true,
                                    key: 'lastName',
                                    validate: { required: true },
                                    widget: {
                                        type: '',
                                        format: 'yyyy-MM-dd hh:mm a',
                                        dateFormat: 'yyyy-MM-dd hh:mm a',
                                        saveAs: 'text',
                                    },
                                    reorder: false,
                                    hideOnChildrenHidden: false,
                                    labelWidth: 30,
                                    labelMargin: 3,
                                    clearOnRefresh: false,
                                },
                            ],
                            placeholder: '',
                            prefix: '',
                            customClass: '',
                            suffix: '',
                            multiple: false,
                            defaultValue: null,
                            protected: false,
                            unique: false,
                            persistent: true,
                            hidden: false,
                            clearOnHide: true,
                            dataGridLabel: false,
                            labelPosition: 'top',
                            labelWidth: 30,
                            labelMargin: 3,
                            description: '',
                            errorLabel: '',
                            tooltip: '',
                            hideLabel: false,
                            tabindex: '',
                            disabled: false,
                            autofocus: false,
                            dbIndex: false,
                            customDefaultValue: '',
                            calculateValue: '',
                            allowCalculateOverride: false,
                            widget: null,
                            refreshOn: '',
                            clearOnRefresh: false,
                            validateOn: 'change',
                            validate: { required: false, custom: '', customPrivate: false },
                            conditional: { show: null, when: null, eq: '' },
                            id: 'e02wdt8',
                            size: 'md',
                            currentWidth: 5,
                        },
                    ],
                    mask: false,
                    tableView: false,
                    alwaysEnabled: false,
                    type: 'columns',
                    input: false,
                    key: 'columns',
                    reorder: false,
                    labelWidth: 30,
                    labelMargin: 3,
                    clearOnRefresh: false,
                    hideOnChildrenHidden: false,
                },
                {
                    input: true,
                    tableView: true,
                    label: 'Email',
                    key: 'panel2Email',
                    type: 'email',
                    labelWidth: 30,
                    labelMargin: 3,
                    widget: { format: 'yyyy-MM-dd hh:mm a', dateFormat: 'yyyy-MM-dd hh:mm a', saveAs: 'text' },
                    clearOnRefresh: false,
                    alwaysEnabled: false,
                },
                {
                    components: [
                        {
                            input: true,
                            tableView: true,
                            label: 'SSN',
                            key: 'ssn',
                            type: 'textfield',
                            labelWidth: 30,
                            labelMargin: 3,
                            widget: { format: 'yyyy-MM-dd hh:mm a', dateFormat: 'yyyy-MM-dd hh:mm a', saveAs: 'text' },
                            clearOnRefresh: false,
                            alwaysEnabled: false,
                        },
                    ],
                    hidden: "this.hideSSN",
                },
                {
                    type: 'button',
                    label: 'Submit',
                    key: 'submit',
                    disableOnInvalid: true,
                    input: true,
                    tableView: true,
                    alwaysEnabled: false,
                    labelWidth: 30,
                    labelMargin: 3,
                    widget: null,
                    clearOnRefresh: false,
                },
            ],
            collapsed: false,
            reorder: false,
            labelWidth: 30,
            labelMargin: 3,
            clearOnRefresh: false,
            path: 'panel2',
        },
    ],
};


/***/ }),

/***/ 7399:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/myhome/myhome.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _myForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myForm */ 73861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _formio_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formio/angular */ 53546);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




// Make sure we use fontawesome everywhere in Form.io renderers.
// (Formio as any).icons = 'fontawesome';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router) {
        this.route = route;
        this.router = router;
        this.myForm = _myForm__WEBPACK_IMPORTED_MODULE_0__.MyForm;
        this.formioForm = '';
        this.submission = '';
        this.metaData = {
            firstName: "Madhu",
            lastName: "Nott",
            panel2Email: "mn@eml.cc"
        };
        this.passData = {
            password: "Madhu",
            ssn: "000-555-1212",
        };
        this.user = {};
        this.hideSSN = true;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {
            "data": __assign(__assign({}, this.metaData), this.passData)
        };
        setTimeout(function () {
            _this.hideSSN = false;
        }, 3000);
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-myhome"]], decls: 1, vars: 2, consts: [[3, "form", "submission"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "formio", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx.myForm)("submission", ctx.user);
        } }, directives: [_formio_angular__WEBPACK_IMPORTED_MODULE_3__.FormioComponent], styles: [".my-custom-class[_ngcontent-%COMP%] {\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15aG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUF5QztFQUN6QyxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibXlob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiB9Il19 */"] });
    return HomeComponent;
}());



/***/ }),

/***/ 69628:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/sessions-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsRoutingModule": function() { return /* binding */ SessionsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup/signup.component */ 36707);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ 48428);
/* harmony import */ var _myhome_myhome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myhome/myhome.component */ 7399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






var routes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent
    },
    {
        path: 'signup/verify/:token',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent
    },
    {
        path: 'homeComponent',
        component: _myhome_myhome_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
    }
];
var SessionsRoutingModule = /** @class */ (function () {
    function SessionsRoutingModule() {
    }
    SessionsRoutingModule.ɵfac = function SessionsRoutingModule_Factory(t) { return new (t || SessionsRoutingModule)(); };
    SessionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SessionsRoutingModule });
    SessionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
    return SessionsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SessionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 95134:
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionsModule": function() { return /* binding */ SessionsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessions-routing.module */ 69628);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 36707);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ 48428);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ 50933);
/* harmony import */ var _formio_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @formio/angular */ 53546);
/* harmony import */ var _myhome_myhome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myhome/myhome.component */ 7399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);









var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule.ɵfac = function SessionsModule_Factory(t) { return new (t || SessionsModule)(); };
    SessionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SessionsModule });
    SessionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
                _sessions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionsRoutingModule,
                _formio_angular__WEBPACK_IMPORTED_MODULE_8__.FormioModule,
            ]] });
    return SessionsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SessionsModule, { declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__.SigninComponent, _myhome_myhome_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentsModule,
        _sessions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionsRoutingModule,
        _formio_angular__WEBPACK_IMPORTED_MODULE_8__.FormioModule] }); })();


/***/ }),

/***/ 48428:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": function() { return /* binding */ SigninComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ 7433);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/websocket */ 43711);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/local-store.service */ 69122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ 38845);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var _c0 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function SigninComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Open My JEMPass Vault (in Browser) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " New to JEMPass? Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "IMPORTANT! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " This app helps your JEM communicate with your JEMPass Vault. Please leave it running at all times. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "JEMPass v", ctx_r4.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r4.appVersion);
} }
function SigninComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SigninComponent_div_0_div_1_Template, 21, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep == 1);
} }
function SigninComponent_div_1_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You DO NOT need to sign in to this app to use your JEM in your browser. But please DO leave this app running - it links your JEM to your browsers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SigninComponent_div_1_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "btn-loading", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_1_div_13_div_1_Template_btn_loading_click_2_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); var user_r15 = restoredCtx.$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); ctx_r16.locallyStoredUsers = [user_r15]; ctx_r16.email.setValue(user_r15); return ctx_r16.signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_1_div_13_div_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r18.deleteStoredUser(ctx_r18.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r15, " ");
} }
function SigninComponent_div_1_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SigninComponent_div_1_div_1_div_13_div_1_Template, 8, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.locallyStoredUsers);
} }
function SigninComponent_div_1_div_1_div_14_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SigninComponent_div_1_div_1_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SigninComponent_div_1_div_1_div_14_div_2_div_4_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.email.hasError("email") || ctx_r19.email.hasError("required") && ctx_r19.email.touched);
} }
function SigninComponent_div_1_div_1_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Session Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "5 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "1 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "2 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "8 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "1 day");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Remember Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SigninComponent_div_1_div_1_div_14_btn_loading_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "btn-loading", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loadingText", ctx_r21.loadingText)("loading", ctx_r21.loading);
} }
function SigninComponent_div_1_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SigninComponent_div_1_div_1_div_14_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r23.signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SigninComponent_div_1_div_1_div_14_div_2_Template, 5, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SigninComponent_div_1_div_1_div_14_div_3_Template, 25, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SigninComponent_div_1_div_1_div_14_btn_loading_4_Template, 2, 2, "btn-loading", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r12.signinForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.loginWithEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.loginWithEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.loginWithEmail);
} }
function SigninComponent_div_1_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r25.loginWithEmail = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Need to Access a Different Account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SigninComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Sign In To Your Vault");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SigninComponent_div_1_div_1_p_12_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SigninComponent_div_1_div_1_div_13_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SigninComponent_div_1_div_1_div_14_Template, 5, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SigninComponent_div_1_div_1_button_16_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "JEMPass v", ctx_r5.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r5.appVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.isElectron());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.loginWithEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.loginWithEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.loginWithEmail);
} }
function SigninComponent_div_1_div_2_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "jemPass v", ctx_r27.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r27.appVersion);
} }
function SigninComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SigninComponent_div_1_div_2_img_5_Template, 1, 2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " to Sign in and Unlock Vault ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Waiting for JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " with enrolled finger to verify fingerprint and unlock your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Pass Vault. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.loginWithEmail);
} }
function SigninComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "JEM found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "btn-loading", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Decrypting... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loadingText", ctx_r7.loadingText)("loading", ctx_r7.loading);
} }
function SigninComponent_div_1_div_4_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " We are evaluating security and usability implications of additional delivery channels for this security code, e.g., email, and potentially SMS. Stay tuned, and thanks for your patience! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
var _c2 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "1000ms" }; };
function SigninComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " will flash a Pairing Color Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Watch your JEM now! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Enter the number of Red, Green and Blue flashes, then click NEXT. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r29.incrementCode("red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_4_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r31.incrementCode("green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_4_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r32.incrementCode("blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_4_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r33.verifyCodes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " NEXT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " IMPORTANT! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Never");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " share this security code with anyone else. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SigninComponent_div_1_div_4_div_33_Template, 5, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_div_1_div_4_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r34.showComingSoonAlert = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Prefer code via email?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "I need help");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.codes.red);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.codes.green);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.codes.blue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.showComingSoonAlert);
} }
function SigninComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " For security, this app/browser needs to (re)pair with your JEM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Pairing will start automatically in a few seconds... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c2)));
} }
function SigninComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SigninComponent_div_1_div_1_Template, 17, 10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SigninComponent_div_1_div_2_Template, 31, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SigninComponent_div_1_div_3_Template, 8, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SigninComponent_div_1_div_4_Template, 39, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SigninComponent_div_1_div_5_Template, 8, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.currentStep == 5);
} }
function SigninComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sign up for JEMPass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_ng_template_2_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); var modal_r35 = restoredCtx.$implicit; return modal_r35.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Please use the JEMPass app for macOS or Windows to create your account. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Navigate to www.jempass.com/start on your Mac or PC and follow setup instructions. Once set up is finished, return here to use JEMPass on this device. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SigninComponent_ng_template_2_Template_button_click_13_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); var modal_r35 = restoredCtx.$implicit; return modal_r35.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
var version = __webpack_require__(/*! ../../../../../package.json */ 60306).version;
var SigninComponent = /** @class */ (function () {
    function SigninComponent(WSS, fb, auth, route, router, jemService, toastr, store) {
        this.WSS = WSS;
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.jemService = jemService;
        this.toastr = toastr;
        this.store = store;
        this.locallyStoredUsers = [];
        this.currentStep = 1;
        this.attempt = 1;
        this.loginWithEmail = false;
        this.appVersion = version;
        this.codes = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.showComingSoonAlert = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.router.events.subscribe(function (event) {
                            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadStart || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ResolveStart) {
                                _this.loadingText = 'Loading Dashboard Module...';
                                _this.loading = true;
                            }
                            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteConfigLoadEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ResolveEnd) {
                                _this.loading = false;
                            }
                        });
                        this.signinForm = this.fb.group({
                            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email], updateOn: 'submit' }),
                            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
                            sessionDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(3600, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required], updateOn: 'submit' }),
                        });
                        _a = this;
                        return [4 /*yield*/, this.store.getItem('storedUsers')];
                    case 1:
                        if (!(_c.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.store.getItem('storedUsers')];
                    case 2:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _b = [];
                        _c.label = 4;
                    case 4:
                        _a.locallyStoredUsers = _b;
                        if (this.locallyStoredUsers.length === 0) {
                            this.loginWithEmail = true;
                        }
                        if (this.route.snapshot.paramMap.get('emailAddress')) {
                            // User has just registered and provisioned - log them in automatically
                            this.email.setValue(this.route.snapshot.paramMap.get('emailAddress'));
                            this.signin(false, this.route.snapshot.paramMap.get('jemID'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninComponent.prototype.isElectron = function () {
        if (typeof process !== "undefined" && process.versions.hasOwnProperty('electron'))
            return true;
        return false;
    };
    Object.defineProperty(SigninComponent.prototype, "email", {
        get: function () { return this.signinForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    SigninComponent.prototype.incrementCode = function (colour) {
        switch (colour) {
            case "red":
                this.codes.red = (this.codes.red == 3) ? 0 : this.codes.red + 1;
                break;
            case "green":
                this.codes.green = (this.codes.green == 3) ? 0 : this.codes.green + 1;
                break;
            case "blue":
                this.codes.blue = (this.codes.blue == 3) ? 0 : this.codes.blue + 1;
                break;
        }
    };
    SigninComponent.prototype.verifyCodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingText = "Checking codes...";
                        this.loading = true;
                        return [4 /*yield*/, this.jemService.checkBlinkCodes(this.deviceKeys, this.codes).then(function (code) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.jemService.fetchPasetoLoginToken(this.signinForm.value.sessionDuration, this.deviceKeys, this.userSigningPublicKey).then(function (data) {
                                                _this.auth.deviceSettings.encryptPublicKey = _this.deviceKeys.encryptPublicKey;
                                                _this.auth.deviceSettings.signPublicKey = _this.deviceKeys.signPublicKey;
                                                _this.auth.deviceSettings.encryptPrivateKey = _this.deviceKeys.encryptPrivateKey;
                                                _this.auth.deviceSettings.signPrivateKey = _this.deviceKeys.signPrivateKey;
                                                _this.auth.deviceSettings.username = _this.deviceKeys.username;
                                                // JEMS
                                                _this.auth.deviceSettings.jems = _this.jemService.jems.value;
                                                _this.auth.userSettings.metaKey = data["metaKey"];
                                                _this.auth.userSettings.signingPublicKey = _this.userSigningPublicKey;
                                                _this.auth.authenticated = true;
                                                _this.store.setItem('userSettings', JSON.stringify(_this.auth.userSettings));
                                                _this.store.setItem('deviceSettings', JSON.stringify(_this.auth.deviceSettings));
                                                _this.store.setItem('loggedInUser', data["pasetoToken"]);
                                                _this.store.setItem('emailAddress', _this.signinForm.value.email);
                                                if (!_this.auth.vaultLoaded) {
                                                    _this.auth.loadVault(data["pasetoToken"]);
                                                }
                                            })];
                                        case 1:
                                            _a.sent();
                                            if (this.signinForm.value.rememberMe) {
                                                this.locallyStoredUsers.indexOf(this.signinForm.value.email) === -1 ? this.locallyStoredUsers.push(this.signinForm.value.email) : '';
                                                this.store.setItem("storedUsers", this.locallyStoredUsers);
                                            }
                                            this.router.navigateByUrl('/dashboard/v2');
                                            this.loading = false;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                if (_this.attempt == 3) {
                                    // too many failures. Revert to login
                                    _this.toastr.error("Too many failures", 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                                    _this.loading = false;
                                    // LOGOUT AUTOMATICALLY AT THE END OF THE SESSION
                                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            window.location.reload();
                                            return [2 /*return*/];
                                        });
                                    }); }, 5000);
                                }
                                else {
                                    console.log(error);
                                    _this.attempt = _this.attempt + 1;
                                    _this.loading = false;
                                    _this.toastr.error(error, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                                    _this.codes = {
                                        red: 0,
                                        green: 0,
                                        blue: 0
                                    };
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninComponent.prototype.deleteStoredUser = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.locallyStoredUsers.splice(email);
                this.store.setItem("storedUsers", this.locallyStoredUsers);
                if (this.locallyStoredUsers.length === 0) {
                    this.loginWithEmail = true;
                }
                return [2 /*return*/];
            });
        });
    };
    SigninComponent.prototype.signin = function (isNewBrowser, jemID) {
        if (isNewBrowser === void 0) { isNewBrowser = false; }
        if (jemID === void 0) { jemID = null; }
        return __awaiter(this, void 0, void 0, function () {
            var doesUserExist, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.signinForm.invalid)
                            return [2 /*return*/];
                        this.loading = true;
                        this.loadingText = 'Looking for user...';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, this.auth.doesUserExist(this.signinForm.value.email).toPromise()];
                    case 2:
                        doesUserExist = _a.sent();
                        if (doesUserExist.status == 0) {
                            this.loading = false;
                            this.toastr.error("User doesn't exist", 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                            return [2 /*return*/];
                        }
                        this.loading = true;
                        if (!!isNewBrowser) return [3 /*break*/, 5];
                        this.currentStep = 2;
                        this.loadingText = 'Turn your JEM on...';
                        return [4 /*yield*/, Promise.all([
                                this.auth.generateMQTTKeys(this.signinForm.value),
                                this.auth.getUserJems(this.signinForm.value.email).toPromise(),
                                this.auth.getUserPublicKey(this.signinForm.value.email).toPromise()
                            ]).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.deviceKeys = result[0];
                                    this.jemService.jems.next(result[1]);
                                    this.userSigningPublicKey = result[2]["key"];
                                    return [2 /*return*/];
                                });
                            }); })
                                .catch(function (error) { return console.log("Error in promises " + error); })];
                    case 3:
                        _a.sent();
                        this.jemService.serviceEmitter.on("JEMONLINE", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.currentStep = 3;
                                this.loading = true;
                                this.loadingText = "Please wait, we're decrypting your keys & logging you in...";
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.WSS.connectToAPI(this.deviceKeys.username, this.signinForm.value.email)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, Promise.all([this.auth.generateMQTTKeys(this.signinForm.value)]).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.deviceKeys = result[0];
                                return [2 /*return*/];
                            });
                        }); })
                            .catch(function (error) { return console.log("Error in promises " + error); })];
                    case 6:
                        _a.sent();
                        this.jemService.serviceEmitter.on("JEMONLINE", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.currentStep = 3;
                                this.loading = true;
                                this.loadingText = "Please wait, we're decrypting your keys & logging you in...";
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.WSS.connectToAPI(this.deviceKeys.username, this.signinForm.value.email)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, this.jemService.fetchPasetoLoginToken(this.signinForm.value.sessionDuration, this.deviceKeys, this.userSigningPublicKey, jemID).then(function (data) {
                            // SET ALL DEVICE SETTINGS`
                            // BROWSER
                            _this.auth.deviceSettings.encryptPublicKey = _this.deviceKeys.encryptPublicKey;
                            _this.auth.deviceSettings.signPublicKey = _this.deviceKeys.signPublicKey;
                            _this.auth.deviceSettings.encryptPrivateKey = _this.deviceKeys.encryptPrivateKey;
                            _this.auth.deviceSettings.signPrivateKey = _this.deviceKeys.signPrivateKey;
                            _this.auth.deviceSettings.username = _this.deviceKeys.username;
                            // JEMS
                            _this.auth.deviceSettings.jems = _this.jemService.jems.value;
                            // SET ALL USER SETTINGS
                            _this.auth.userSettings.metaKey = data["metaKey"];
                            _this.auth.userSettings.signingPublicKey = _this.userSigningPublicKey;
                            _this.auth.authenticated = true;
                            _this.store.setItem('userSettings', JSON.stringify(_this.auth.userSettings));
                            _this.store.setItem('deviceSettings', JSON.stringify(_this.auth.deviceSettings));
                            _this.store.setItem('loggedInUser', data["pasetoToken"]);
                            _this.store.setItem('emailAddress', _this.signinForm.value.email);
                            if (!_this.auth.vaultLoaded) {
                                _this.auth.loadVault(data["pasetoToken"]);
                            }
                        })];
                    case 9:
                        _a.sent();
                        if (this.signinForm.value.rememberMe) {
                            this.locallyStoredUsers.indexOf(this.signinForm.value.email) === -1 ? this.locallyStoredUsers.push(this.signinForm.value.email) : '';
                            this.store.setItem("storedUsers", this.locallyStoredUsers);
                        }
                        this.router.navigateByUrl('/dashboard/v2');
                        this.loading = false;
                        return [3 /*break*/, 11];
                    case 10:
                        error_1 = _a.sent();
                        console.log(error_1);
                        if (error_1.code == 1) {
                            if (!this.auth.isNewBrowser) { // THIS SEED WAS STORED BUT NOW EXPIRED
                                this.loading = false;
                                this.currentStep = 5;
                                this.auth.nullDeviceSeed(this.signinForm.value.email);
                                setTimeout(function () {
                                    _this.WSS.disconnectAPI(false);
                                    _this.signin(true);
                                }, 3000);
                            }
                            else { // THIS SEED IS NEW
                                this.loading = false;
                                this.currentStep = 4;
                                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        this.jemService.startBlinkyPairing(this.deviceKeys);
                                        return [2 /*return*/];
                                    });
                                }); }, 5000);
                            }
                        }
                        else {
                            this.loading = false;
                            this.currentStep = 1;
                            this.WSS.disconnectAPI();
                            this.toastr.error(error_1.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                            // this.signinForm.reset();
                        }
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_websocket__WEBPACK_IMPORTED_MODULE_1__.WebSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_3__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__.LocalStoreService)); };
    SigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["needToSignUpModal", ""], ["class", "card o-hidden", 4, "ngIf"], [1, "card", "o-hidden"], [1, "row"], [1, "col-md-12"], [1, "p-4"], [1, "auth-logo", "text-center", "mb-4"], ["src", "assets/images/jempassIcon150x150.png", 3, "title", "alt"], [1, "mb-3", "text-18", "text-center"], [2, "font-weight", "800"], ["target", "_blank", "href", "https://my-staging.jempass.com/signin", 1, "btn", "btn-primary", "btn-rounded", "btn-block", "mt-3", "mb-3"], ["routerLink", "/signup", 1, "btn", "btn-link", "btn-block", "mb-4"], ["role", "alert", 1, "alert", "alert-danger"], [2, "font-weight", "600", "color", "red"], [1, "mb-3", "text-center"], ["class", "card-body", 4, "ngIf"], [1, "mt-3", "text-center"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "card-body"], ["class", "d-flex justify-content-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], [1, "row", "mt-3"], ["btnClass", "btn-primary btn-rounded btn-block align-self-center pl-5 pr-5", 3, "click"], [1, "text-large", "text-bold", "pl-1"], [1, "text-muted", "ml-2", "align-self-center", 3, "click"], [1, "i-Close"], [3, "formGroup", "ngSubmit"], ["class", "form-group text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["btnClass", "btn-primary btn-rounded btn-block mt-3", 3, "loadingText", "loading", 4, "ngIf"], [1, "form-group", "text-center"], ["for", "email"], ["id", "email", "formControlName", "email", "type", "email", "autofocus", "", 1, "form-control", "form-control-rounded", "text-center", "text-16"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "col-md-12", "text-center", "form-group", "text-center"], [1, "p-2"], ["for", "sessionDuration"], ["id", "sessionDuration", "formControlName", "sessionDuration", 1, "form-control", "inline", "text-16", "form-control-rounded", "text-center"], ["value", "300"], ["value", "3600"], ["value", "7200"], ["value", "28800"], ["value", "86400"], [1, "col-md-4", "text-center"], [1, "p-2", "text-center"], [1, "col-md-12", "text-center"], ["for", "rememberMe"], ["id", "rememberMe", "formControlName", "rememberMe", "type", "checkbox"], [1, "checkmark"], ["btnClass", "btn-primary btn-rounded btn-block mt-3", 3, "loadingText", "loading"], [1, "btn", "btn-link", 3, "click"], ["src", "assets/images/jempassIcon150x150.png", 3, "title", "alt", 4, "ngIf"], [1, "row", "justify-content-center", "align-items-center", "p-2"], ["Class", "d-flex align-items-center"], [1, "spinner-glow", "spinner-glow-primary", "mr-4", "align-self-center"], [1, "align-self-center"], [1, "text-center"], ["src", "/assets/images/searchBaseStation.gif"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-2", "mr-2", "align-items-center", "justify-content-center"], [1, "d-none", "d-md-block", "col-md-2", "text-center"], [1, "i-Idea-2", "m-0", "text-22"], [1, "col-md-10", "pl-0", "pr-0"], ["btnClass", "btn-success btn-rounded btn-block mt-3", 3, "loadingText", "loading"], [1, "col"], [1, "mb-3", "text-18", "text-center", "ml-4", "pr-4"], [1, "row", "row-cols-sm-auto", "g-3", "align-items-center", "alert", "alert-info", "ml-4", "mr-4"], [1, "col-sm-4"], [1, "col-sm-6", "d-flex", "justify-content-around", "p-4"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-info", 3, "click"], [1, "col-sm-2", "text-center"], [1, "i-Arrow-Next"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-4", "mr-4", "align-items-center", "justify-content-center"], [1, "i-Danger", "m-0", "text-22"], ["class", "d-flex row alert alert-info ml-4 mr-4 border-top", "role", "alert", 4, "ngIf"], [1, "row", "ml-4", "mr-4", "align-items-center", "justify-content-between"], ["target", "_blank", "href", "https://www.jempass.com/support"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-4", "mr-4", "border-top"], [1, "d-none", "d-md-block", "col-md-2", "align-self-center", "justify-content-center"], [1, "i-Information", "m-0", "text-22", "text-center"], [1, "mb-4", "text-muted", "font-small", "text-center"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-muted"], [1, "modal-footer"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-primary", "btn-rounded", 3, "click"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SigninComponent_div_0_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SigninComponent_div_1_Template, 6, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SigninComponent_ng_template_2_Template, 15, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isElectron());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isElectron());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_5__.BtnLoadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__.SharedAnimations] } });
    return SigninComponent;
}());



/***/ }),

/***/ 36707:
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ 7433);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sodium-plus */ 13031);
/* harmony import */ var sodium_plus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sodium_plus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_services_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/websocket */ 43711);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ 10629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_jem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/jem.service */ 91895);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/btn-loading/btn-loading.component */ 38845);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













function SignupComponent_div_0_div_2_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please enter a valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Welcome to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Simple \u2022 Seamless \u2022 Secure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignupComponent_div_0_div_2_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r13.verify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SignupComponent_div_0_div_2_div_17_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "btn-loading", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Already a customer? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " This email address will be your JEMPass Account ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Ensure that you can access this email account from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "this");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " computer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "jemPass v", ctx_r11.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r11.appVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r11.verifyForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.email.hasError("email") || ctx_r11.email.hasError("required") && ctx_r11.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loadingText", ctx_r11.loadingText)("loading", ctx_r11.loading);
} }
var _c0 = function () { return { y: "120px", opacity: "0", delay: "100ms", duration: "1000ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function SignupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignupComponent_div_0_div_2_Template, 38, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.emailSent);
} }
function SignupComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Welcome to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "To sign up with JEMPass, you'll need a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " and the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Pass app ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Visit jempass.com to learn more about \u2013 or to buy - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " If you already have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, ", point your browser to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "jempass.com/start");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "jemPass v", ctx_r15.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r15.appVersion);
} }
function SignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignupComponent_div_1_div_2_Template, 40, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.emailSent);
} }
function SignupComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Verification Email Sent!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "We just sent you an email. Please click the verification link in the email to continue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " You can close this window now (but do not quit this app). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " IMPORTANT! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " This app helps your JEM communicate with your JEMPass Vault. Please leave it running at all times. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignupComponent_div_2_div_2_Template, 21, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.emailSent);
} }
function SignupComponent_div_3_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_3_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_3_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Required field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_3_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " For the smoothest experience, make sure that the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Pass app is running before clicking Submit and Continue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SignupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Sign Up for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SignupComponent_div_3_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.signup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SignupComponent_div_3_span_16_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SignupComponent_div_3_span_21_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "JEM ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SignupComponent_div_3_span_26_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "btn-loading", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Submit and Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Already registered? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, " In the next step you will add your fingerprint to JEM. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, SignupComponent_div_3_span_41_Template, 5, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.signupForm.value.firstName && ctx_r3.formInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.signupForm.value.lastName && ctx_r3.formInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.signupForm.value.jemID && ctx_r3.formInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("loadingText", ctx_r3.loadingText)("loading", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isMobileAgent);
} }
function SignupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Adding Fingerprint - Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " to switch on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Waiting for JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " will glow blue on start up, then flash purple to indicate successful connection to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Pass service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0)));
} }
function SignupComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Upgrading firmware");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Please wait while we upgrade your JEMs firmware. This should only take a minute or two.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r5.firmwarePercent, "%");
} }
function SignupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Adding Fingerprint - Press ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " to switch on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Waiting for JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " will glow blue on start up, then flash purple to indicate successful connection to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Pass service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0)));
} }
function SignupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Add Fingerprint to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Place and lift your finger on the JEM button repeatedly. JEM will take 7-10 fingerprint scans. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " We recommend using the thumb of your non-dominant hand. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " will glow green when waiting to scan a fingerprint. A blue flash indicates a successful scan. A red flash indicates a failed scan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " No need to click the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " button for each scan - gentle pressure is sufficient. Clicking the button will not affect the process. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Register your fingerprint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Your JEM is flashing green.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Press your finger against the button each time it flashes. Do not press the button.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0)));
} }
function SignupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "You have successfully added your fingerprint to your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "JEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Please wait...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "We're creating your encryption & signing keys. Won't be long...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0)));
} }
function SignupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Here's Your Recovery Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignupComponent_div_9_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.copy(ctx_r23.jemRK); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "IMPORTANT NOTICE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " This key offers the ONLY way to regain access to your account if your JEM is lost or becomes non-functional. No one at JEM has access to this key. It is your responsibility to store this key in a safe place. Do not share it with anyone you do not trust. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignupComponent_div_9_Template_input_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.hasSavedRecovery = !ctx_r25.hasSavedRecovery; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " I have read the above notice and I understand and accept it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "btn-loading", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignupComponent_div_9_Template_btn_loading_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.goToDashboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate6"](" ", ctx_r9.jemRK.substr(0, 7), "", ctx_r9.jemRK.substr(7, 5), "-", ctx_r9.jemRK.substr(12, 5), "-", ctx_r9.jemRK.substr(17, 5), "-", ctx_r9.jemRK.substr(22, 5), "-", ctx_r9.jemRK.substr(27), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r9.hasSavedRecovery);
} }
function SignupComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Critical Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "JEMPass needs Bluetooth. We can't detect Bluetooth on this computer -- is it switched off? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("title", "jemPass v", ctx_r27.appVersion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r27.appVersion);
} }
function SignupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignupComponent_div_10_div_2_Template, 9, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r10.emailSent);
} }
var version = __webpack_require__(/*! ../../../../../package.json */ 60306).version;
var sodium;
var SignupComponent = /** @class */ (function () {
    function SignupComponent(WSS, fb, auth, router, jemService, toastr, activatedRoute, sanitizer) {
        this.WSS = WSS;
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.jemService = jemService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.emailSent = false;
        this.emailAddress = "";
        this.validToken = false;
        this.currentStep = 1;
        this.recoveryKey = "";
        this.appVersion = version;
        this.firmwarePercent = 0;
    }
    Object.defineProperty(SignupComponent.prototype, "isMobileAgent", {
        get: function () {
            var agent = navigator.userAgent || navigator.vendor || window.opera;
            // tslint:disable-next-line:max-line-length
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0, 4)));
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.verifyForm = this.fb.group({ emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email], updateOn: 'submit' }) });
                this.signupForm = this.fb.group({
                    firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required], updateOn: 'submit' }),
                    lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required], updateOn: 'submit' }),
                    jemID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required], updateOn: 'submit' })
                });
                if (this.activatedRoute.snapshot.params.token) {
                    if (this.isMobileAgent) {
                        window.location.href = 'jempass://signup/verify/' + this.activatedRoute.snapshot.params.token;
                    }
                    this.auth.verifyPasetoToken(this.activatedRoute.snapshot.params.token).subscribe(function (res) {
                        _this.validToken = true;
                        _this.currentStep = 3;
                        _this.emailAddress = res;
                    }, function (error) {
                        _this.validToken = false;
                        _this.currentStep = 1;
                    });
                }
                this.verificationURL = window.location.href;
                this.verificationURL = this.verificationURL.replace(/^https:\/\//, "jempass://");
                return [2 /*return*/];
            });
        });
    };
    SignupComponent.prototype.isElectron = function () {
        if (typeof process !== "undefined" && process.versions.hasOwnProperty('electron'))
            return true;
        // return false;
        // temporarily disable isElectron check so Amitav can sign up from the browser 
        // (new bridge has not yet been packaged as an electron app with a 'main' window)
        return true;
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () { return this.verifyForm.get('emailAddress'); },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.verify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.verifyForm.invalid)
                    return [2 /*return*/];
                this.loading = true;
                this.loadingText = 'Sending validation email...';
                this.auth.confirmEmailAddress(this.verifyForm.value.emailAddress)
                    .subscribe(function (res) {
                    if (res.status == 400) {
                        _this.toastr.error("User already exists", 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                        _this.verifyForm.reset();
                        _this.loading = false;
                        return;
                    }
                    _this.loading = false;
                    _this.emailSent = true;
                    _this.currentStep = 2;
                }, function (error) {
                    _this.toastr.error("Couldn't send verification email. " + error.error.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                    _this.verifyForm.reset();
                    _this.loading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    SignupComponent.prototype.goToDashboard = function () {
        if (!this.hasSavedRecovery)
            return;
        this.auth.firstSignIn = true;
        this.WSS.disconnectAPI();
        this.router.navigate(["/signin/", { emailAddress: this.emailAddress, jemID: this.jemID }]);
    };
    SignupComponent.prototype.copy = function (item) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = item;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.toastr.success('Your JEM Recovery Key has been copied to your clipboard. Save it!', 'Success!', { timeOut: 5000 });
    };
    SignupComponent.prototype.xorEncode = function (txt, pass) {
        var ord = [];
        var buf = "";
        for (var z = 1; z <= 255; z++) {
            ord[String.fromCharCode(z)] = z;
        }
        for (var j = z = 0; z < txt.length; z++) {
            buf += String.fromCharCode(ord[txt.substr(z, 1)] ^ ord[pass.substr(j, 1)]);
            j = (j < pass.length) ? j + 1 : 0;
        }
        return buf;
    };
    SignupComponent.prototype.getRandomInt = function (min, max) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, byteArray, range, max_range;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_1__.SodiumPlus.auto()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _b.label = 3;
                    case 3:
                        sodium = _a;
                        return [4 /*yield*/, sodium.randombytes_buf(1)];
                    case 4:
                        byteArray = _b.sent();
                        range = max - min + 1;
                        max_range = 256;
                        if (byteArray[0] >= Math.floor(max_range / range) * range)
                            return [2 /*return*/, this.getRandomInt(min, max)];
                        return [2 /*return*/, min + (byteArray[0] % range)];
                }
            });
        });
    };
    SignupComponent.prototype.random_str = function (length, keyspace) {
        if (keyspace === void 0) { keyspace = 'ABCDEFGHJKLMNPQRSTVWXYZ23456789'; }
        return __awaiter(this, void 0, void 0, function () {
            var pieces, max, i, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pieces = [];
                        max = (keyspace.length - 1);
                        i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(i < length)) return [3 /*break*/, 4];
                        _b = (_a = pieces).push;
                        _c = keyspace;
                        return [4 /*yield*/, this.getRandomInt(0, max)];
                    case 2:
                        _b.apply(_a, [_c[_d.sent()]]);
                        _d.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, pieces.join("")];
                }
            });
        });
    };
    SignupComponent.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, doesUserExist, isJEMAvailable, deviceKeys, recoveryKey, _b, _c, jemRK_hash, recoveryKeyXOR;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(!sodium)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sodium_plus__WEBPACK_IMPORTED_MODULE_1__.SodiumPlus.auto()];
                    case 1:
                        _a = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = sodium;
                        _d.label = 3;
                    case 3:
                        sodium = _a;
                        if (this.signupForm.invalid)
                            return [2 /*return*/];
                        // IF THE USER HAS USED UNDERSCORES INSTEAD OF DASHES, CONVERT THEM
                        this.signupForm.patchValue({ jemID: this.signupForm.value.jemID.replace(/_/g, "-") });
                        this.loading = true;
                        this.loadingText = 'Looking for user...';
                        return [4 /*yield*/, this.auth.doesUserExist(this.emailAddress).toPromise()];
                    case 4:
                        doesUserExist = _d.sent();
                        if (doesUserExist.status == 1) {
                            this.loading = false;
                            this.toastr.error("User already exists", 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.auth.isJEMAvailable(this.signupForm.value.jemID).toPromise()];
                    case 5:
                        isJEMAvailable = _d.sent();
                        if (isJEMAvailable.status == 1) {
                            this.loading = false;
                            this.toastr.error("JEM already registered", 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                            return [2 /*return*/];
                        }
                        // GENERATE DEVICE KEYS
                        this.loadingText = 'Generating device keys...';
                        return [4 /*yield*/, this.auth.generateMQTTKeys({ "email": this.emailAddress })];
                    case 6:
                        deviceKeys = _d.sent();
                        // CONNECT TO API
                        return [4 /*yield*/, this.WSS.connectToAPI(deviceKeys.username, this.emailAddress)];
                    case 7:
                        // CONNECT TO API
                        _d.sent();
                        // GENERATE RECOVERY KEYS
                        this.loadingText = 'Generating recovery keys...';
                        return [4 /*yield*/, sodium.randombytes_buf(32)];
                    case 8:
                        recoveryKey = _d.sent();
                        _b = this;
                        _c = "JEM-RK-";
                        return [4 /*yield*/, this.random_str(26)];
                    case 9:
                        _b.jemRK = _c + (_d.sent());
                        return [4 /*yield*/, sodium.crypto_generichash(this.jemRK, '', 32)];
                    case 10:
                        jemRK_hash = _d.sent();
                        recoveryKeyXOR = this.xorEncode(recoveryKey.toString('hex'), jemRK_hash.toString('hex'));
                        // MOVE TO STEP 4 - TURN YOUR JEM ON
                        this.currentStep = 4;
                        // ADD A SERVICE EMITTER LISTENER FOR JEMSTATUS
                        this.jemService.serviceEmitter.on("JEMSTATUS", function (status) {
                            switch (status) {
                                case "FIRMWARE_UPGRADE":
                                    // START A TIMEOUT TO CHECK IF FIRMWARE HAS STARTED
                                    setTimeout(function () {
                                        if (_this.firmwarePercent === 0) {
                                            _this.toastr.error("It appears our firmware update hasn't started.  Has your JEM gone offline? Was it fully charged before you started? Is your jemPass application still running?", 'Error', { timeOut: 25000, closeButton: true, progressBar: true });
                                            _this.currentStep = 3;
                                            _this.verifyForm.reset();
                                            _this.loading = false;
                                        }
                                    }, 20000);
                                    _this.currentStep = 5; // firmware upgrade screen
                                    _this.jemService.serviceEmitter.on("JEM_FIRMWARE", function (jem) {
                                        _this.jemService.jemFound = true;
                                        _this.firmwarePercent = jem.percent;
                                        if (_this.firmwarePercent == 100) {
                                            _this.jemService.firmwareUpgraded = true;
                                            setTimeout(function () {
                                                _this.currentStep = 6;
                                            }, 1000);
                                        }
                                    });
                                    break;
                                case "PROVISION_NO_FINGER":
                                    _this.currentStep = 7; // fingerprint enrollment screen
                                    break;
                                case "PROVISION_FINGER":
                                    _this.currentStep = 8;
                                    _this.jemID = _this.signupForm.value.jemID;
                                    break;
                                case "offline":
                                    // JEM has gone offline.  Set its ID to null, so "signin" knows to follow normal procedure. Otherwise, the JEM's ID prompts auto signin.
                                    _this.jemID = "";
                                    break;
                                default:
                            }
                        });
                        // PROVISION FIRST JEM
                        return [4 /*yield*/, this.jemService.provisionFirstJEM(this.signupForm.value.jemID, deviceKeys.username, this.emailAddress, deviceKeys, recoveryKey)
                                .then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var user;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            // CREATE USER
                                            this.loadingText = 'Creating user...';
                                            return [4 /*yield*/, this.auth.createUser({
                                                    'token': this.activatedRoute.snapshot.params.token,
                                                    'firstName': this.signupForm.value.firstName,
                                                    'lastName': this.signupForm.value.lastName,
                                                    "jemID": this.signupForm.value.jemID,
                                                    "device": data.provisionResponse,
                                                    "userEncryptionPublicKey": data.provisionResponse.userEncPubKey.toString('base64'),
                                                    "userSigningPublicKey": data.provisionResponse.userSigPubKey.toString('base64'),
                                                    "userEncryptedVEK": data.provisionResponse.vekKeyEnc.toString('base64'),
                                                    "JEMdeviceEncryptionPublicKey": data.provisionResponse.devEncPubKey.toString('base64'),
                                                    "JEMdeviceSigningPublicKey": data.provisionResponse.devSigPubKey.toString('base64'),
                                                    "userEncryptionPrivateKey": data.provisionResponse.userEncPrivKeyEnc.toString('base64'),
                                                    "userSigningPrivateKey": data.provisionResponse.userSigPrivKeyEnc.toString('base64'),
                                                    "recoveryKeyXOR": btoa(recoveryKeyXOR),
                                                    "encryptionPrivateKeyKEK": data.encryptionPrivateKeyKEK.toString('base64'),
                                                    "signingPrivateKeyKEK": data.signingPrivateKeyKEK.toString('base64')
                                                })
                                                    .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        // THE USER HAS BEEN CREATED SUCCESSFULLY - ACK THE PROVISION WITH THE JEM
                                                        this.jemService.acknowledgeProvision(this.signupForm.value.jemID, sodium_plus__WEBPACK_IMPORTED_MODULE_1__.X25519PublicKey.from(data.provisionResponse.devEncPubKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_1__.X25519PublicKey.from(deviceKeys.encryptPublicKey, 'base64'), sodium_plus__WEBPACK_IMPORTED_MODULE_1__.X25519SecretKey.from(deviceKeys.encryptPrivateKey, 'base64'), "device/" + deviceKeys.username + "/response");
                                                        this.currentStep = 9;
                                                        return [2 /*return*/];
                                                    });
                                                }); }, function (error) {
                                                    _this.toastr.error("Couldn't create user. " + error.error.message, 'Error', { timeOut: 5000, closeButton: true, progressBar: true });
                                                    _this.verifyForm.reset();
                                                    _this.loading = false;
                                                })];
                                        case 1:
                                            user = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.WSS.disconnectAPI();
                                _this.toastr.error(error, 'Error', { timeOut: 10000, closeButton: true, progressBar: true });
                                _this.currentStep = 3;
                                _this.loading = false;
                            })];
                    case 11:
                        // PROVISION FIRST JEM
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_websocket__WEBPACK_IMPORTED_MODULE_2__.WebSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_jem_service__WEBPACK_IMPORTED_MODULE_4__.JemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer)); };
    SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 11, vars: 11, consts: [["class", "card o-hidden", 4, "ngIf"], [1, "card", "o-hidden"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], [1, "p-4"], [1, "auth-logo", "text-center", "mb-4"], ["routerLink", "/"], ["src", "assets/images/jempassIcon150x150.png", 3, "title", "alt"], [1, "mb-3", "text-18", "text-center"], [2, "font-weight", "800"], [1, "mb-4", "font-bold", "text-muted", "font-small", "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "text-center"], ["for", "email"], ["id", "emailAddress", "type", "email", "formControlName", "emailAddress", "required", "", "autofocus", "", 1, "form-control", "form-control-rounded", "text-center"], ["class", "text-danger", 4, "ngIf"], ["btnClass", "btn-primary btn-rounded btn-block mt-3", 3, "loadingText", "loading"], [1, "mt-3", "mb-5", "text-center"], ["href", "", "routerLink", "/signin", 1, "text-muted"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-info", "ml-2", "mr-2", "align-items-center", "justify-content-center"], [1, "d-none", "d-md-block", "col-md-2", "text-center"], [1, "i-Information", "m-0", "text-22"], [1, "col-md-10", "pl-0", "pr-0"], [1, "i-Idea-2", "m-0", "text-22"], [1, "text-danger"], [1, "mb-4", "text-muted", "font-small", "text-center"], ["target", "_blank", "href", "https://jempass.com"], ["target", "_blank", "href", "https://jempass.com/start"], [1, "font-weight:", "800;"], ["target", "_blank", "href", "https://jempass.com", 1, "text-reset"], ["src", "assets/images/JEM-Jewel-logo-6-2-150x150.png", "alt", ""], [1, "i-Danger", "m-0", "text-22"], [2, "font-weight", "600", "color", "red"], [1, "p-4", "justify-content-center"], [1, "mb-3", "text-center"], [1, "row", "justify-content-center"], [1, "col-md-6"], ["for", "firstName"], ["id", "firstName", "type", "text", "formControlName", "firstName", "required", "", 1, "jem-form-input", "form-control", "form-control-rounded", "text-center"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "type", "text", "formControlName", "lastName", "required", "", 1, "jem-form-input", "form-control", "form-control-rounded", "text-center"], ["for", "jemid"], ["id", "jemid", "type", "text", "value", "JEM-", "formControlName", "jemID", "required", "", 1, "jem-form-input", "form-control", "form-control-rounded", "text-center"], ["btnClass", "btn btn-primary btn-block btn-rounded mt-3", 3, "loadingText", "loading"], [1, "mt-3", "mb-3", "text-center"], [1, "col-12"], [4, "ngIf"], [1, "error-message"], [1, "row", "justify-content-center", "align-items-center", "p-2"], ["Class", "d-flex align-items-center"], [1, "spinner-glow", "spinner-glow-primary", "mr-4", "align-self-center"], [1, "align-self-center"], [1, "card-body"], [1, "text-center"], ["src", "/assets/images/searchBaseStation.gif"], [1, "d-none", "d-sm-block", "col-sm-2", "text-center"], [1, "col-sm-10", "pl-0", "pr-0"], [1, "mb-1", "text-22", "font-weight-light", "text-center"], ["src", "/assets/images/enrolFingerprint.gif"], [1, "d-none", "row"], [1, "text-center", "pb-2"], ["id", "jemRecoveryKey", 1, "mb-4", "text-20", "jem-form-input"], ["data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "Copy to clipboard", 1, "i-Duplicate-Layer", 3, "click"], ["role", "alert", 1, "d-flex", "row", "alert", "alert-danger", "ml-2", "mr-2", "pb-2", "align-items-center", "justify-content-center"], [1, "col-md-12", "pl-0", "pr-0"], [1, "pl-3", "pr-2", "mt-2", "pb-2"], [1, "checkbox", "checkbox-outline-danger", "center"], ["type", "checkbox", "id", "hasSavedRecovery", 1, "text-small", 3, "click"], [1, "text-small", "text-muted"], [1, "checkmark"], ["btnClass", "btn btn-primary btn-block btn-rounded mt-3", 3, "disabled", "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SignupComponent_div_0_Template, 3, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 3, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 3, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 42, 11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SignupComponent_div_4_Template, 30, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SignupComponent_div_5_Template, 10, 5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SignupComponent_div_6_Template, 30, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SignupComponent_div_7_Template, 49, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SignupComponent_div_8_Template, 15, 4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SignupComponent_div_9_Template, 24, 11, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SignupComponent_div_10_Template, 3, 5, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 1 && ctx.isElectron());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 1 && !ctx.isElectron());
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep == "doNotHaveBle" && !ctx.isElectron());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _shared_components_btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_5__.BtnLoadingComponent], styles: [".jem-form-input[_ngcontent-%COMP%] {\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 600;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuamVtLWZvcm0taW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuIH0iXX0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__.SharedAnimations] } });
    return SignupComponent;
}());



/***/ }),

/***/ 60306:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"jemPassAngularApp","version":"1.2.0","license":"https://www.jempass.com/terms-of-service","scripts":{"ng":"ng","start":"ng serve --ssl --disable-host-check --host 0.0.0.0 --port 443","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","postinstall":"node ./patches/paseto.js","build:blue":"ng build --configuration production --base-href \\"http://gull.ui-lib.com/blue/\\"","build:purple":"ng build --configuration production --base-href \\"http://gull.ui-lib.com/purple/\\""},"private":true,"dependencies":{"@angular/animations":"12.1.3","@angular/common":"12.1.3","@angular/compiler":"12.1.3","@angular/core":"12.1.3","@angular/elements":"^11.0.5","@angular/forms":"12.1.3","@angular/localize":"^12.1.3","@angular/platform-browser":"12.1.3","@angular/platform-browser-dynamic":"12.1.3","@angular/router":"12.1.3","@formio/angular":"^5.0.0","@ng-bootstrap/ng-bootstrap":"^7.0.0","@swimlane/ngx-datatable":"^19.0.0","angular-calendar":"0.28.26","angular-formio":"^4.11.5","angular-in-memory-web-api":"0.11.0","angular2-ladda":"3.1.0","angular2-text-mask":"9.0.0","base64url":"^3.0.1","bootstrap":"^4.5.2","classlist.js":"1.1.20150312","core-js":"3.6.4","crypto-browserify":"^3.12.0","date-fns":"2.10.0","echarts":"4.6.0","feather-icons":"4.7.3","highlight.js":"9.18.1","ladda":"2.0.1","ngx-chips":"2.1.0","ngx-color-picker":"11.0.0","ngx-custom-validators":"8.0.0","ngx-echarts":"4.2.2","ngx-img-cropper":"11.0.0","ngx-pagination":"5.0.0","ngx-perfect-scrollbar":"10.0.1","ngx-quill":"14.1.2","ngx-toastr":"14.0.0","paseto.js":"^0.1.7","popper.js":"1.14.4","protobufjs":"^6.11.2","quill":"^1.3.7","rxjs":"~6.5.4","sodium-native":"^3.3.0","sodium-plus":"^0.9.0","tslib":"^2.0.0","web-animations-js":"^2.3.2","zone.js":"~0.11.4"},"devDependencies":{"@angular-builders/custom-webpack":"^12.1.3","@angular-devkit/build-angular":"~12.1.3","@angular/cli":"^12.2.13","@angular/compiler-cli":"12.1.3","@angular/language-service":"12.1.3","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.11.1","codelyzer":"^6.0.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.4","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","node-polyfill-webpack-plugin":"^1.1.4","node-sass":"^4.12.0","protractor":"~7.0.0","ts-node":"~7.0.0","tslint":"~6.1.0","typescript":"~4.3.5"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_views_sessions_sessions_module_ts.js.map