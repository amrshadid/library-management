(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/h46":function(e,t,n){n("cHUd")("Map")},"1HF/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("Y0NT")}])},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),s=n("YFqc"),a=n.n(s),i=n("1Yj4"),c=n("ok1R"),u=n("rhny"),l=o.a.createElement,f=function(e){var t=e.statusCode;return Object(r.useEffect)(function(){document.body.style.setProperty("--primary","#000000"),document.body.style.setProperty("--secondary","#434345"),document.body.style.setProperty("--light","#252525"),document.body.style.setProperty("--dark","#000000")},[]),l("div",{className:"bg-purple"},l("div",{className:"section-404"},l("div",{className:"stars"},l(i.a,null,l(c.a,null,l(u.a,{lg:"8",xs:"12",className:"offset-lg-2"},l("div",{className:"central-body"},l("h1",{className:"text-inner"},t||"404"),l("h3",{className:"sub-text text-white"},"page not found"),l("p",{className:"text-404 text-white text-center"},"The Page You Are Attempting To Reach Is Currently Not Available. This May Be Because The Page Does Not Exist Or Has Been Moved."),l(a.a,{href:"/layouts/app1"},l("a",{className:"btn btn-default m-t-20"},"back to home"))))))),l("div",{className:"objects"},l("img",{alt:"object_rocket",className:"object_rocket",src:"/assets/images/404/rocket.svg"}),l("div",{className:"earth-moon"},l("img",{alt:"object_earth",className:"object_earth",src:"/assets/images/404/earth.svg"}),l("img",{alt:"object_moon",className:"object_moon",src:"/assets/images/404/moon.svg"})),l("div",{className:"box_astronaut"},l("img",{alt:"object_astronaut",className:"object_astronaut",src:"/assets/images/404/astronaut.svg"}))),l("div",{className:"glowing_stars"},l("div",{className:"star"}),l("div",{className:"star"}),l("div",{className:"star"}),l("div",{className:"star"}),l("div",{className:"star"}))))};t.default=f,f.getInitialProps=function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("pbKT"),o=n("/HRN"),s=n("WaGi"),a=n("N9n2"),i=n("ZDA2"),c=n("/+P4");function u(e){var t=function(){if("undefined"===typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var s=c(this).constructor;n=r(o,arguments,s)}else n=o.apply(this,arguments);return i(this,n)}}var l=n("5Uuq"),f=n("KI45");t.__esModule=!0,t.default=void 0;var p,h=f(n("LX0d")),d=n("CxY0"),v=l(n("q1tI")),m=(f(n("17x9")),f(n("nOHt"))),y=(n("P5f7"),n("g/15"));function g(e){return e&&"object"===typeof e?(0,y.formatWithValidation)(e):e}var b=new h.default,N=window.IntersectionObserver;function w(){return p||(N?p=new N(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){a(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,r=null;return function(o,s){if(r&&o===t&&s===n)return r;var a=e(o,s);return t=o,n=s,r=a,a}}(function(e,t){return{href:g(e),as:t?g(t):t}}),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=r.formatUrls(r.props.href,r.props.as),a=s.href,i=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),i=i?(0,d.resolve)(c,i):a,e.preventDefault();var u=r.props.scroll;null==u&&(u=i.indexOf("#")<0),m.default[r.props.replace?"replace":"push"](a,i,{shallow:r.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},r.p=!1!==e.prefetch,r}return s(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&N&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);m.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var s=v.Children.only(t),a={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch()},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=o||r),v.default.cloneElement(s,a)}}]),n}(v.Component);k.propTypes=void 0;var _=k;t.default=_},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)}},[["1HF/",0,1]]]);