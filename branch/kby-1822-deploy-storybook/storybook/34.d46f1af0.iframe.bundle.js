(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1215:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_menu",(function(){return Menu})),__webpack_require__.d(__webpack_exports__,"ion_menu_button",(function(){return MenuButton})),__webpack_require__.d(__webpack_exports__,"ion_menu_toggle",(function(){return MenuToggle}));var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(81),_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(537),_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(239),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(70),_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(539),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1262);__webpack_require__(238),__webpack_require__(39);const Menu=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.ionWillOpen=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionWillOpen",7),this.ionWillClose=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionWillClose",7),this.ionDidOpen=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionDidOpen",7),this.ionDidClose=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionDidClose",7),this.ionMenuChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_3__.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(type,oldType){const contentEl=this.contentEl;contentEl&&(void 0!==oldType&&contentEl.classList.remove(`menu-content-${oldType}`),contentEl.classList.add(`menu-content-${type}`),contentEl.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.m)(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("menuType","overlay"));const parent=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n');const content=void 0!==this.contentId?document.getElementById(this.contentId):parent&&parent.querySelector&&parent.querySelector("[main]");content&&content.tagName?(this.contentEl=content,content.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._register(this),this.gesture=(await Promise.resolve().then(__webpack_require__.bind(null,536))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:ev=>this.canStart(ev),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(ev){this.isPaneVisible=ev.detail.isPane(this.el),this.updateState()}onBackdropClick(ev){if(this._isOpen&&this.lastOnEnd<ev.timeStamp-100){!!ev.composedPath&&!ev.composedPath().includes(this.menuInnerEl)&&(ev.preventDefault(),ev.stopPropagation(),this.close())}}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(animated=!0){return this.setOpen(!0,animated)}close(animated=!0){return this.setOpen(!1,animated)}toggle(animated=!0){return this.setOpen(!this._isOpen,animated)}setOpen(shouldOpen,animated=!0){return _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._setOpen(this,shouldOpen,animated)}async _setOpen(shouldOpen,animated=!0){return!(!this._isActive()||this.isAnimating||shouldOpen===this._isOpen)&&(this.beforeAnimation(shouldOpen),await this.loadAnimation(),await this.startAnimation(shouldOpen,animated),this.afterAnimation(shouldOpen),!0)}async loadAnimation(){const width=this.menuInnerEl.offsetWidth;width===this.width&&void 0!==this.animation||(this.width=width,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._createAnimation(this.type,this),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(shouldOpen,animated){const isReversed=!shouldOpen,mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),easing="ios"===mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",easingReverse="ios"===mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",ani=this.animation.direction(isReversed?"reverse":"normal").easing(isReversed?easingReverse:easing).onFinish((()=>{"reverse"===ani.getDirection()&&ani.direction("normal")}));animated?await ani.play():ani.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(detail){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._getOpenSync()&&checkEdgeSide(window,detail.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(!1,"isAnimating has to be true")}onMove(detail){if(!this.isAnimating||!this.animation)return void Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(!1,"isAnimating has to be true");const stepValue=computeDelta(detail.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-stepValue:stepValue)}onEnd(detail){if(!this.isAnimating||!this.animation)return void Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(!1,"isAnimating has to be true");const isOpen=this._isOpen,isEndSide=this.isEndSide,delta=computeDelta(detail.deltaX,isOpen,isEndSide),width=this.width,stepValue=delta/width,velocity=detail.velocityX,z=width/2,shouldCompleteRight=velocity>=0&&(velocity>.2||detail.deltaX>z),shouldCompleteLeft=velocity<=0&&(velocity<-.2||detail.deltaX<-z),shouldComplete=isOpen?isEndSide?shouldCompleteRight:shouldCompleteLeft:isEndSide?shouldCompleteLeft:shouldCompleteRight;let shouldOpen=!isOpen&&shouldComplete;isOpen&&!shouldComplete&&(shouldOpen=!0),this.lastOnEnd=detail.currentTime;let newStepValue=shouldComplete?.001:-.001;const adjustedStepValue=stepValue<0?.01:stepValue;newStepValue+=Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__.a)([0,0],[.4,0],[.6,1],[1,1],Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.j)(0,adjustedStepValue,.9999))[0]||0;const playTo=this._isOpen?!shouldComplete:shouldComplete;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(shouldOpen)),{oneTimeCallback:!0}).progressEnd(playTo?1:0,this._isOpen?1-newStepValue:newStepValue,300)}beforeAnimation(shouldOpen){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(SHOW_MENU),this.backdropEl&&this.backdropEl.classList.add(SHOW_BACKDROP),this.blocker.block(),this.isAnimating=!0,shouldOpen?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(isOpen){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(this.isAnimating,"_before() should be called while animating"),this._isOpen=isOpen,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),isOpen?(this.contentEl&&this.contentEl.classList.add(MENU_CONTENT_OPEN),this.ionDidOpen.emit()):(this.el.classList.remove(SHOW_MENU),this.contentEl&&this.contentEl.classList.remove(MENU_CONTENT_OPEN),this.backdropEl&&this.backdropEl.classList.remove(SHOW_BACKDROP),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const isActive=this._isActive();this.gesture&&this.gesture.enable(isActive&&this.swipeGesture),!isActive&&this._isOpen&&this.forceClosing(),this.disabled||_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a._setActiveMenu(this),Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(!this.isAnimating,"can not be animating")}forceClosing(){Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__.l)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0;this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{isEndSide:isEndSide,type:type,disabled:disabled,isPaneVisible:isPaneVisible}=this,mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{role:"navigation",class:{[mode]:!0,[`menu-type-${type}`]:!0,"menu-enabled":!disabled,"menu-side-end":isEndSide,"menu-side-start":!isEndSide,"menu-pane-visible":isPaneVisible}},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"menu-inner",part:"container",ref:el=>this.menuInnerEl=el},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",null)),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-backdrop",{ref:el=>this.backdropEl=el,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},computeDelta=(deltaX,isOpen,isEndSide)=>Math.max(0,isOpen!==isEndSide?-deltaX:deltaX),checkEdgeSide=(win,posX,isEndSide,maxEdgeStart)=>isEndSide?posX>=win.innerWidth-maxEdgeStart:posX<=maxEdgeStart,SHOW_MENU="show-menu",SHOW_BACKDROP="show-backdrop",MENU_CONTENT_OPEN="menu-content-open";Menu.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const updateVisibility=async menu=>{const menuEl=await _index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a.get(menu);return!(!menuEl||!await menuEl.isActive())},MenuButton=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a.toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await updateVisibility(this.menu)}render(){const{color:color,disabled:disabled}=this,mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),menuIcon=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("menuIcon","ios"===mode?"menu-outline":"menu-sharp"),hidden=this.autoHide&&!this.visible,attrs={type:this.type};return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{onClick:this.onClick,"aria-disabled":disabled?"true":null,"aria-hidden":hidden?"true":null,class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__.a)(color,{[mode]:!0,button:!0,"menu-button-hidden":hidden,"menu-button-disabled":disabled,"in-toolbar":Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__.c)("ion-toolbar",this.el),"in-toolbar-color":Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_6__.c)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("button",Object.assign({},attrs,{disabled:disabled,class:"button-native",part:"native","aria-label":"menu"}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("span",{class:"button-inner"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",null,Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-icon",{part:"icon",icon:menuIcon,mode:mode,lazy:!1,"aria-hidden":"true"}))),"md"===mode&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-ripple-effect",{type:"unbounded"})))}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}};MenuButton.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const MenuToggle=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.visible=!1,this.autoHide=!0,this.onClick=()=>_index_0d58a5bf_js__WEBPACK_IMPORTED_MODULE_5__.a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await updateVisibility(this.menu)}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),hidden=this.autoHide&&!this.visible;return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{onClick:this.onClick,"aria-hidden":hidden?"true":null,class:{[mode]:!0,"menu-toggle-hidden":hidden}},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",null))}};MenuToggle.style=":host(.menu-toggle-hidden){display:none}"},1262:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);