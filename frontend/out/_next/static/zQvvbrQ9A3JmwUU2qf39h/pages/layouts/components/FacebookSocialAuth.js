(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"0iUn":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return o})},"42Uh":function(e,t,n){"use strict";n.r(t);var o=n("pbKT"),r=n.n(o),i=n("9Jkg"),a=n.n(i),s=n("ln6h"),u=n.n(s),c=n("O40h"),l=n("0iUn"),f=n("sLSF"),p=n("Tit0"),d=n("MI3g"),y=n("a7VT"),h=n("q1tI"),b=n.n(h),g=n("CojT"),v=n.n(g),m=n("vDqi"),k=n.n(m),w=n("nOHt"),_=n.n(w),O=n("GGqY"),S=(n("jDDT"),n("brUm")),x=b.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(y.a)(e);if(t){var i=Object(y.a)(this).constructor;n=r()(o,arguments,i)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var T=function(e){Object(p.a)(n,e);var t=j(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=function(){var e=Object(c.a)(u.a.mark(function e(n){var o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post(S.a+"rest-auth/facebook/",{access_token:n});case 2:return o=e.sent,console.log(o),t(o.data.key),e.next=7,o.status;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t=function(e){var t=S.a+"userDetails/"+e;k()({method:"get",url:t,headers:{Authorization:"Token "+e}}).then(function(t){localStorage.setItem("hoarTemplatetoken",e),""!=t.data.association_name?(localStorage.setItem("userInfo",a()(t.data)),O.b.success("Login Success"),_.a.push("/")):window.location.href="/layouts/socialSignUpForm"}).catch(function(e){console.log(e)})};return x("div",{className:"App"},x(v.a,{size:"small",buttonStyle:{boxShadow:"rgb(0 0 0 / 24%) 0 2 2 0, rgb(0 0 0 / 24%) 0 0 1 0",height:40},textButton:"Facebook",appId:"489988798782352",fields:"name,email,picture",callback:function(t){console.log(t),e(t.accessToken)}}))}}]),n}(h.Component);t.default=T},"9Jkg":function(e,t,n){e.exports=n("oh+g")},CojT:function(e,t,n){var o;e.exports=(o=n("q1tI"),function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(8)},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(2),u=o(s),c=n(1),l=o(c),f=n(5),p=o(f),d=n(3),y=o(d),h=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={isSdkLoaded:!1,isProcessing:!1},o.responseApi=function(e){window.FB.api("/me",{locale:o.props.language,fields:o.props.fields},function(t){i(t,e),o.props.callback(t)})},o.checkLoginState=function(e){o.setStateIfMounted({isProcessing:!1}),e.authResponse?o.responseApi(e.authResponse):o.props.onFailure?o.props.onFailure({status:e.status}):o.props.callback({status:e.status})},o.checkLoginAfterRefresh=function(e){"connected"===e.status?o.checkLoginState(e):window.FB.login(function(e){return o.checkLoginState(e)},!0)},o.click=function(e){if(o.state.isSdkLoaded&&!o.state.isProcessing&&!o.props.isDisabled){o.setState({isProcessing:!0});var t=o.props,n=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,s=t.responseType,u=t.redirectUri,c=t.disableMobileRedirect,l=t.authType,f=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var d={client_id:r,redirect_uri:u,state:f,return_scopes:a,scope:n,response_type:s,auth_type:l};if(o.props.isMobile&&!c)window.location.href="https://www.facebook.com/dialog/oauth"+(0,p.default)(d);else{if(!window.FB)return void(o.props.onFailure&&o.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(o.checkLoginState,{scope:n,return_scopes:a,auth_type:d.auth_type})}}}},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,n=t.appId,o=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:n,xfbml:o,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,y.default)(e,"code")||(0,y.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,n,o){var r=t.getElementsByTagName(n)[0],i=r,a=r;t.getElementById(o)||((a=t.createElement(n)).id=o,a.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(u.default.Component);h.propTypes={isDisabled:l.default.bool,callback:l.default.func.isRequired,appId:l.default.string.isRequired,xfbml:l.default.bool,cookie:l.default.bool,authType:l.default.string,scope:l.default.string,state:l.default.string,responseType:l.default.string,returnScopes:l.default.bool,redirectUri:l.default.string,autoLoad:l.default.bool,disableMobileRedirect:l.default.bool,isMobile:l.default.bool,fields:l.default.string,version:l.default.string,language:l.default.string,onClick:l.default.func,onFailure:l.default.func,render:l.default.func.isRequired},h.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=h},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}},function(e,t,n){"use strict";function o(){}var r=n(7);e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),s=o(a),u=n(1),c=o(u),l=n(9),f=o(l),p=n(4),d=o(p),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&s.default.createElement("style",{dangerouslySetInnerHTML:{__html:f.default}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,n=e.isSdkLoaded,o=e.isDisabled,i={transition:"opacity 0.5s"};return(t||!n||o)&&(i.opacity=.6),r(i,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,n=t.cssClass,o=t.size,i=t.icon,a=t.textButton,u=t.typeButton,c=t.buttonStyle,l=e.onClick,f=e.isDisabled,p="string"==typeof i,d={};return f&&function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0}(this.props.tag)&&(d.disabled=!0),s.default.createElement("span",{style:this.containerStyle(e)},p&&s.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),s.default.createElement(this.props.tag,r({type:u,className:n+" "+o,style:c,onClick:l},d),i&&p&&s.default.createElement("i",{className:"fa "+i}),i&&!p&&i,a),this.style())}},{key:"render",value:function(){var e=this;return s.default.createElement(d.default,r({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(s.default.Component);y.propTypes={textButton:c.default.string,typeButton:c.default.string,size:c.default.string,cssClass:c.default.string,icon:c.default.any,containerStyle:c.default.object,buttonStyle:c.default.object,tag:c.default.oneOfType([c.default.node,c.default.func])},y.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t.default=y},function(e,t,n){(t=e.exports=n(10)()).push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}]))},MI3g:function(e,t,n){"use strict";var o=n("XVgq"),r=n.n(o),i=n("Z7t5"),a=n.n(i);function s(e){return(s="function"===typeof a.a&&"symbol"===typeof r.a?function(e){return typeof e}:function(e){return e&&"function"===typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"===typeof a.a&&"symbol"===s(r.a)?function(e){return s(e)}:function(e){return e&&"function"===typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":s(e)})(e)}function c(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return c})},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("eVuF"),r=n.n(o);function i(e,t,n,o,i,a,s){try{var u=e[a](s),c=u.value}catch(l){return void n(l)}u.done?t(c):r.a.resolve(c).then(o,i)}function a(e){return function(){var t=this,n=arguments;return new r.a(function(o,r){var a=e.apply(t,n);function s(e){i(a,o,r,s,u,"next",e)}function u(e){i(a,o,r,s,u,"throw",e)}s(void 0)})}}},Tit0:function(e,t,n){"use strict";var o=n("SqZg"),r=n.n(o),i=n("TRZx"),a=n.n(i);function s(e,t){return(s=a.a||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}n.d(t,"a",function(){return u})},a7VT:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("Bhuq"),r=n.n(o),i=n("TRZx"),a=n.n(i);function s(e){return(s=a.a?r.a:function(e){return e.__proto__||r()(e)})(e)}},kVlV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/components/FacebookSocialAuth",function(){return n("42Uh")}])},"oh+g":function(e,t,n){var o=n("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},sLSF:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("hfKm"),r=n.n(o);function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r()(e,o.key,o)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}},[["kVlV",0,1]]]);