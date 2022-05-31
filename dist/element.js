import e from"lodash";import{onMounted as t,watch as n,inject as r,toRefs as a,computed as o,getCurrentInstance as i,ref as u,provide as l,onBeforeMount as s,onBeforeUnmount as c,onBeforeUpdate as f,onUpdated as v,onUnmounted as p,reactive as d}from"composition-api";import"moment";function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){g(o,r,a,i,u,"next",e)}function u(e){g(o,r,a,i,u,"throw",e)}i(void 0)}))}}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x,k;x=function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(e,t,n){var r=f;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=x(i,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=c(e,t,n);if("normal"===l.type){if(r=n.done?d:v,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",v="suspendedYield",p="executing",d="completed",h={};function m(){}function y(){}function g(){}var b={};l(b,o,(function(){return this}));var C=Object.getPrototypeOf,w=C&&C(C(q([])));w&&w!==n&&r.call(w,o)&&(b=w);var O=g.prototype=m.prototype=Object.create(b);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){function n(a,o,i,u){var l=c(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=c(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function q(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=g,l(O,"constructor",g),l(g,"constructor",y),y.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},j($.prototype),l($.prototype,i,(function(){return this})),e.AsyncIterator=$,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new $(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(O),l(O,u,"Generator"),l(O,o,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},x(k={exports:{}},k.exports);var A=function t(n){return n instanceof File?{lastModified:(r=n).lastModified,name:r.name,size:r.size,type:r.type}:n instanceof Date?n.toString():Array.isArray(n)?n.map(t):"object"===y(n)&&null!==n?e.mapValues(n,t):n;var r};var S=function(r,a,o){var i=o.form$,u=o.el$,l=o.fire,s=o.dirt,c=o.validate,f=o.value;t((function(){n(f,(function(t,n){var r,a;(r=t,a=n,e.isEqual(A(r),A(a)))||(l("change",t,n,u.value),s&&s(),c&&i.value.shouldValidateOnChange&&c())}),{immediate:!1,deep:!0})}))},q=function(e,t,n){return{form$:r("form$")}},P=function(e,t,n){return{theme:r("theme")}},E=function(e,t,n){var r=a(e),i=r.layout,u=r.inline;return{elementLayout:o((function(){return u.value||!i.value?"ElementLayoutInline":i.value}))}},L=function(e,t,n){var r=a(e).name,u=i(),l=o((function(){var e=function(e,n){return e&&(void 0!==t.expose&&e.$options.name&&e.$options.name.match(/^[a-zA-Z\-]*Element$/)||void 0===t.expose&&e.hasOwnProperty("el$")&&"function"!=typeof e.el$)?e.el$:e.$parent?n(e.$parent,n):null};return e(u.parent.proxy,e)})),s=o((function(){return l.value&&l.value.path?l.value.path+"."+r.value:r.value})),c=o((function(){return l.value&&l.value.dataPath?l.value.dataPath+"."+r.value:r.value})),f=o((function(){return!1}));return{parent:l,path:s,dataPath:c,flat:f}},F=function(t,n,r){var i=a(t),l=i.parent,s=i.conditions,c=r.form$,f=r.path||u(null),v=r.el$||u(void 0),p=u(s.value);return{available:o((function(){return!c.value.conditions||!(l&&l.value&&void 0!==l.value.available&&!l.value.available)&&(!p.value||!p.value.length||!e.some(p.value,(function(e){return!c.value.$vueform.services.condition.check(e,f.value,c.value,v.value)})))})),updateConditions:function(){p.value=s.value}}},V=function(t,r,i){var l,s,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},f=a(t),v=f.name,p=f.type,d=i.parent,h=i.defaultValue,m=i.dataPath,y=i.form$,g=u(void 0);y.value.isSync?g.value=e.get(y.value.model,m.value):d.value&&-1!==["object","list","multifile"].indexOf(d.value.type)&&(g.value=d.value.value[v.value]);var b=u(h.value instanceof File?h.value:e.cloneDeep(h.value)),C=o({get:(null===(l=c.value)||void 0===l?void 0:l.get)||function(){var t;return void 0!==(t=y.value.isSync?e.get(y.value.model,m.value):d.value&&-1!==["object","list","multifile"].indexOf(d.value.type)?d.value.value[v.value]:b.value)?t:h.value instanceof File?h.value:e.cloneDeep(h.value)},set:(null===(s=c.value)||void 0===s?void 0:s.set)||function(e){if(y.value.isSync)y.value.updateModel(m.value,e);else if(d.value&&-1!==["list","multifile"].indexOf(d.value.type)){var t=d.value.value.map((function(t,n){return n==v.value?e:t}));d.value.update(t)}else d.value&&-1!==["object"].indexOf(d.value.type)?d.value.value=Object.assign({},d.value.value,O({},v.value,e)):b.value=e}}),w=o({get:function(){return C.value},set:function(e){C.value=e}});return void 0!==c.init&&!1===c.init||void 0===g.value&&(C.value=h.value instanceof File?h.value:e.cloneDeep(h.value)),n(p,(function(){C.value=h.value instanceof File?h.value:e.cloneDeep(h.value)})),{initialValue:g,internalValue:b,value:C,model:w}},D=function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=a(t),l=u.submit,s=u.formatData,c=u.formatLoad,f=u.name,v=r.form$,p=r.available,d=r.value,h=r.resetValidators,m=r.defaultValue,y=r.nullValue,g=function(e){if(i.setValue)return i.setValue(e);d.value=e},C=o((function(){return O({},f.value,d.value)})),w=o((function(){return p.value&&l.value?s.value?s.value(f.value,d.value,v.value):O({},f.value,d.value):{}})),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g(t&&c.value?c.value(e,v.value):e)},$=function(e){g(e)},x=function(){g(e.cloneDeep(y.value))},k=function(){g(e.cloneDeep(m.value)),h()},A=function(){var e=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{data:C,requestData:w,load:j,update:$,clear:x,reset:k,prepare:A}},T=function(t,n,r){var i=a(t),u=i.default,l=i.name,s=r.nullValue,c=r.form$,f=r.parent;return{defaultValue:o((function(){var t;return f&&f.value&&!f.value.mounted?t=f.value.defaultValue[l.value]:!c.value.mounted&&c.value.options.default[l.value]&&(t=c.value.options.default[l.value]),void 0!==t?t instanceof File?new File([t],t.name,t):e.cloneDeep(t):void 0!==u.value?u.value instanceof File?new File([u.value],u.value.name,u.value):e.cloneDeep(u.value):e.cloneDeep(s.value)}))}},_=function(e,t,n){var r=a(e).label,i=n.form$,u=n.el$;return{hasLabel:o((function(){var e,n;return!!(i.value.options.forceLabels||r.value||u.value.slots.label||null!==(e=u.value.$slots)&&void 0!==e&&e.label||void 0===t.expose&&null!==(n=u.value.$scopedSlots)&&void 0!==n&&n.label)}))}},N=function(e,t,n){var r=a(e),i=r.columns,u=r.presets,l=n.form$,s=n.theme,c=n.hasLabel;return{columnsClasses:o((function(){var e=l.value.$vueform.config;return new l.value.$vueform.services.columns({configPresetColumns:e.usePresets,configColumns:e.columns,formPresetColumns:l.value.options.presets,formColumns:l.value.options.columns,elementPresetColumns:u.value,elementColumns:i.value},c.value,s.value.columns,e.presets).classes}))}},B=function(e){return void 0===e||"string"!=typeof e?e:e.match(/^-*\d+$/)?parseInt(e,10):e.match(/^\d+\.\d+$/)?parseFloat(e):e},I=function(n,r,d){var h={onBeforeMount:s,onMounted:t,onBeforeUpdate:f,onUpdated:v,onBeforeUnmount:c,onUnmounted:p},m=i(),y=d.form$,g=d.fire,b=function(e,t,n){var r=a(e).name,o=i(),u=n.form$;return{assignToParent:function(e,t){e.children$Array?e.children$Array.push(o.proxy):e.elements$?u.value.$set(e.elements$,r.value,o.proxy):t(e.$parent,t)},removeFromParent:function(e,t){e.children$Array?e.children$Array.splice(e.children$Array.map((function(e){return B(e.name)})).indexOf(B(r.value)),1):e.elements$?u.value.$delete(e.elements$,r.value):t(e.$parent,t)}}}(n,0,{form$:y}),C=b.assignToParent,w=b.removeFromParent,O=u(!1),j=u(!0),$=o((function(){return!1})),x=o((function(){return!1})),k=o((function(){return!1})),A=o((function(){return!1})),S=o((function(){return j.value})),q=o((function(){return m.proxy}));return l("el$",q),s((function(){C(m.proxy.$parent,C)})),t((function(){O.value=!0})),c((function(){w(m.proxy.$parent,w)})),Object.values(["onBeforeCreate","onCreated"]).forEach((function(t){g(e.lowerFirst(t.replace("on","")),q.value)})),Object.keys(h).forEach((function(t){h[t]((function(){g(e.lowerFirst(t.replace("on","")),q.value)}))})),{el$:q,isStatic:$,isFileType:x,isArrayType:A,isImageType:k,isActive:S,active:j,mounted:O,activate:function(){j.value=!0},deactivate:function(){j.value=!1}}},R=function(t,n,r){var i=a(t),u=i.name,l=i.floating,s=i.placeholder,c=i.label,f=i.fieldName,v=r.form$;return{genericName:o((function(){return f&&f.value?f.value:c&&c.value?c.value:l&&l.value?l.value:s&&s.value&&v.value.options.floatPlaceholders?s.value:e.upperFirst(u.value).replace(/_|-/g," ")}))}},M=function(t,n,r){var i=a(t),s=i.size,c=i.view,f=i.views,v=i.presets,p=n.name,d=r.available,h=r.active,m=r.form$,y=r.parent,g=u(!1),b=o((function(){return d.value&&!g.value&&h.value})),C=o((function(){var t;return s.value?t=s.value:e.each(v.value,(function(e){var n=m.value.$vueform.config.presets[e];n&&n.size&&(t=n.size)})),t||(t=y.value?y.value.Size:m.value.Size),t})),w=o((function(){return c.value?c.value:O.value[p.value]})),O=o((function(){var t=m.value.Views;return e.each(v.value,(function(e){var n=m.value.$vueform.config.presets[e];n&&n.views&&(t=Object.assign({},t,n.views))})),t=Object.assign({},t,f.value)}));return l("Size",C),l("View",w),l("Views",O),{hidden:g,visible:b,Size:C,View:w,Views:O,hide:function(){g.value=!0},show:function(){g.value=!1}}},z=function(t,n,r){var i=a(t),u=i.templates,l=i.presets,s=n.name,c=r.theme,f=r.View,v=r.form$,p=o((function(){var t={};return e.each(l?l.value:[],(function(e){var n=v.value.$vueform.config.presets[e];n&&n.templates&&(t=Object.assign({},t,n.templates))})),m(m(m({},c.value.templates),t),u?u.value:{})})),d=o((function(){return f&&f.value&&p.value["".concat(s.value,"_").concat(f.value)]?p.value["".concat(s.value,"_").concat(f.value)]:p.value[s.value]}));return{Templates:p,template:d}},U=function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=a(t);u.slots;var l=r.el$,s=["label","info","description","before","between","after"],c=["checkbox","radio","option","single-label","multiple-label","tag","no-results","no-options","after-list","before-list","placeholder","group-label","caret","clear","spinner","option","default"],f=o((function(){var t={};return s.filter((function(e){return-1!==i.slots.indexOf(e)})).forEach((function(n){var r=l.value.slots[n]||l.value.slots[e.camelCase(n)];"object"===y(r)&&(r.props&&-1===r.props.indexOf("el$")?r.props.push("el$"):r.props||(r.props=["el$"])),t[n]=r})),t})),v=o((function(){var t={};return c.filter((function(e){return-1!==i.slots.indexOf(e)})).forEach((function(n){var r=l.value.slots[n]||l.value.slots[e.camelCase(n)];"object"===y(r)&&(r.props&&(Array.isArray(r.props)&&-1===r.props.indexOf("el$")||!Array.isArray(r.props)&&-1===Object.keys(r.props).indexOf("el$"))?r.props.push("el$"):r.props||(r.props=["el$"])),t[n]=r})),t}));return{elementSlots:f,fieldSlots:v}},G=function(e,t,n){var r=a(e).disabled,i=u(null),l=o((function(){return r.value&&!1!==i.value||!0===i.value}));return{localDisabled:i,isDisabled:l,disable:function(){i.value=!0},enable:function(){i.value=!1}}},H=function(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!a.events)throw new Error("`events` option is required for useEvents");var o=u(a.events),i=u({}),l=function(e,t){i.value[e]||(i.value[e]=[]),i.value[e].push(t)},s=function(e){delete i.value[e]},c=function(){var t=arguments[0],r=[].slice.call(arguments).splice(1);e.each(i.value[t],(function(e){e.apply(void 0,j(r))})),i.value[t]&&i.value[t].length||n.emit.apply(n,j([t].concat(r)))};return e.each(o.value,(function(n){var r=t["on"+e.upperFirst(e.camelCase(n))];r&&l(n,r)})),{events:o,listeners:i,on:l,off:s,fire:c}},Y=function(e,t,n){var r=n.model;return{handleInput:function(e){r.value=e.target.value}}},Z=function(t,n,r){var a=r.value,i=r.nullValue;return{empty:o((function(){return e.isEqual(a.value,i.value)||-1!==[void 0,null,""].indexOf(a.value)}))}},J=function(e,t,n){var r=a(e),i=r.floating,u=r.placeholder,l=n.form$;return{hasFloating:o((function(){return!!(i.value||u.value&&l.value.options.floatPlaceholders)&&!1!==i.value}))}},K=["presets","usePresets","addClasses","prependClasses","removeClasses","replaceClasses","overrideClasses"],Q=["addClass","removeClass","replaceClass","overrideClass"],W=function(){function t(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C(this,t),this.options=r,this.shouldMergeTemplateClasses?(this.componentClasses=this.templateClasses,this.merge({overrideClasses:O({},this.component,this.themeClasses)})):this.componentClasses=this.templateClasses,this.merge(this.config),e.each(r.merge,(function(e){n.merge(e)})),this.merge(this.locals||this.component$.value,!0),this.config.classHelpers&&"production"!==this.config.env&&this.merge({prependClasses:O({},this.component,this.getClassHelpers(this.componentClasses,[this.component]))})}var n,r,a;return n=t,r=[{key:"classes",get:function(){var e=this;return new Proxy(this.componentClasses,{get:function(t,n){return"string"!=typeof n?t[n]:e.getDynamicClasses(t,n)}})}},{key:"config",get:function(){return this.options.config||{}}},{key:"component",get:function(){return this.options.component}},{key:"component$",get:function(){return this.options.component$}},{key:"locals",get:function(){return this.options.locals}},{key:"view",get:function(){return this.options.view}},{key:"theme",get:function(){return this.options.theme}},{key:"presets",get:function(){return this.config.presets}},{key:"templates",get:function(){return this.options.templates||{}}},{key:"template",get:function(){return this.view&&this.templates["".concat(this.component,"_").concat(this.view)]?this.templates["".concat(this.component,"_").concat(this.view)]:this.templates[this.component]||{}}},{key:"themeClasses",get:function(){return e.cloneDeep(this.toArray(this.view&&this.theme.classes["".concat(this.component,"_").concat(this.view)]?this.theme.classes["".concat(this.component,"_").concat(this.view)]:this.theme.classes[this.component]))}},{key:"templateClasses",get:function(){return e.cloneDeep(this.toArray(this.defaultClasses))}},{key:"shouldMergeTemplateClasses",get:function(){var e="function"==typeof this.template.data&&void 0!==this.template.data().merge?this.template.data().merge:this.component$.value.merge;return void 0!==e&&e}},{key:"defaultClasses",get:function(){return"function"==typeof this.template.data&&this.template.data().defaultClasses?this.template.data().defaultClasses:this.component$.value.defaultClasses}},{key:"mainClass",get:function(){var e="function"==typeof this.template.data&&this.template.data().defaultClasses?this.template.data().defaultClasses:this.component$.value.defaultClasses;return Object.keys(e)[0]}},{key:"merge",value:function(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.each(this.pick(t,r?Q:K),(function(t,r){switch(r){case"addClasses":case"prependClasses":case"overrideClasses":if(!t||void 0===t[n.component])return;n.mergeComponentClasses(n.toArray(t[n.component]),r);break;case"removeClasses":case"replaceClasses":if(!t||void 0===t[n.component])return;n.mergeComponentClasses(t[n.component],r);break;case"addClass":case"removeClass":case"replaceClass":case"overrideClass":if(!t)return;"string"==typeof t||Array.isArray(t)?(Array.isArray(t)||(t=t.length>0?t.split(" "):[]),n.mergeComponentClasses(O({},n.mainClass,t),"".concat(r,"es"))):"replaceClass"===r?n.mergeComponentClasses(t,"".concat(r,"es")):e.isPlainObject(t)&&n.mergeComponentClasses(n.toArray(t),"".concat(r,"es"));break;case"presets":case"usePresets":if(!Array.isArray(t))return;e.each(t,(function(e){n.merge(n.presets[e])}))}}))}},{key:"mergeComponentClasses",value:function(t,n){var r=this;e.each(t,(function(e,t){r[n](e,[t])}))}},{key:"addClasses",value:function(t,n){var r=this,a=e.get(this.componentClasses,n.join("."));(1!=t.length||t[0])&&(e.isPlainObject(a)?e.each(t,(function(e,t){r.addClasses(e,n.concat(t))})):e.set(this.componentClasses,n.join("."),e.union(a,t)))}},{key:"prependClasses",value:function(t,n){var r=this,a=e.get(this.componentClasses,n.join("."));(1!=t.length||t[0])&&(e.isPlainObject(a)?e.each(t,(function(e,t){r.prependClasses(e,n.concat(t))})):e.set(this.componentClasses,n.join("."),e.union(t,a)))}},{key:"removeClasses",value:function(t,n){var r=this,a=e.get(this.componentClasses,n.join("."));e.isPlainObject(a)?e.each(t,(function(e,t){r.removeClasses(e,n.concat(t))})):Array.isArray(a)&&e.set(this.componentClasses,n.join("."),a.filter((function(e){return"string"!=typeof e||-1===t.indexOf(e)})))}},{key:"replaceClasses",value:function(t,n){var r=this,a=e.get(this.componentClasses,n.join("."));if(Array.isArray(t)){var o={};t.forEach((function(e){o=m(m({},o),e)})),t=o}e.isPlainObject(a)?e.each(t,(function(e,t){r.replaceClasses(e,n.concat(t))})):Array.isArray(a)&&e.set(this.componentClasses,n.join("."),a.map((function(e){return"string"!=typeof e||-1===Object.keys(t).indexOf(e)?e:t[e]})))}},{key:"overrideClasses",value:function(t,n){var r=this,a=e.get(this.componentClasses,n.join("."));e.isPlainObject(a)?e.each(t,(function(e,t){r.overrideClasses(e,n.concat(t))})):e.set(this.componentClasses,n.join("."),t)}},{key:"toArray",value:function(t){var n=this,r={};return e.each(t,(function(e,t){r[t]=n.classesToArray(e,[t])})),r}},{key:"classesToArray",value:function(t,n){var r,a=this,o=t,i=n?e.get(this.componentClasses,n.join(".")):void 0;if("string"==typeof t)o=t.length>0?t.split(" "):[];else if(e.isPlainObject(t))i&&Array.isArray(i)?o=[t]:i&&!e.isPlainObject(i)||(o={},e.each(t,(function(e,t){o[t]=a.classesToArray(e,n.concat([t]))})));else if("boolean"==typeof t||"object"===y(t)&&-1!==["ComputedRefImpl","RefImpl"].indexOf(null==t||null===(r=t.constructor)||void 0===r?void 0:r.name))throw Error("Cannot add conditional class to ".concat(this.component,": '").concat(n.join("."),"'"));return o}},{key:"getDynamicClasses",value:function(t,n,r){var a=this;r||(r=t);var o=Array.isArray(t[n])?e.flattenDeep(t[n]):t[n];return t["$".concat(n)]?e.flattenDeep(t["$".concat(n)](r,this.component$.value)):(e.isPlainObject(o)&&(o=e.cloneDeep(o),e.each(o,(function(e,n){o[n]=a.getDynamicClasses(o,n,t)}))),o)}},{key:"getClassHelpers",value:function(t,n){var r=this,a={};return e.each(t,(function(o,i){i.match(/[$]/)||(e.isPlainObject(o)?a[i]=r.getClassHelpers(t[i],n.concat([i])):a[i]=["".concat(n.join("."),".").concat(i,"--\x3e")])})),a}},{key:"pick",value:function(t,n){var r={};return t?(e.each(n,(function(e){e in t&&(r[e]=t[e])})),r):r}}],r&&w(n.prototype,r),a&&w(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(),X=function(e,t,n){var r=t.name,a=n.form$,i=n.el$,u=n.theme,l=n.Templates,s=n.View,c=o((function(){return new W({component:r.value,component$:i,theme:u.value,config:a.value.$vueform.config,templates:l.value,view:s.value,merge:[a.value.options,i.value]})}));return{classes:o((function(){return m({},c.value.classes)})),classesInstance:c}},ee=function(e,t,n){var r=a(e).id,i=n.path;return{fieldId:o((function(){return r.value||i.value}))}},te=function(e,t,n){return{input:u(null)}};function ne(e,t){return re.apply(this,arguments)}function re(){return(re=b(regeneratorRuntime.mark((function t(n,r){var a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<(e.isPlainObject(n)?e.values(n):n).length)){t.next=8;break}return o=e.isPlainObject(n)?e.keys(n)[a]:a,t.next=5,r(n[o],o,n);case 5:a++,t.next=1;break;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var ae=function(t,n,r){var i=a(t).rules,l=r.form$,s=r.path,c=u({dirty:!1,validated:!0}),f=u([]),v=u({}),p=d({}),h=o((function(){return i.value})),m=o((function(){return c.value.dirty})),y=o((function(){return c.value.validated})),g=o((function(){return e.some(f.value,{invalid:!0})})),C=o((function(){return e.some(f.value,{pending:!0})})),w=o((function(){return C.value})),O=o((function(){var t=[];return e.each(f.value,(function(e){e.failing&&t.push(e.message)})),t})),j=o((function(){return v.value.errors})),$=o((function(){return v.value.error||null})),x=o((function(){return null!==$.value})),k=o((function(){return h.value&&h.value.length>0&&c.value.validated&&!g.value||(!h.value||!h.value.length)&&m.value})),A=function(){var e=b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.value){e.next=2;break}return e.abrupt("return");case 2:if(!1!==l.value.validation){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,ne(f.value,function(){var e=b(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.validate();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:c.value.validated=!0;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{state:c,Validators:f,messageBag:v,dirty:m,validated:y,invalid:g,pending:C,busy:w,errors:j,error:$,validationRules:h,isDanger:x,isSuccess:k,validate:A,dirt:function(){c.value.dirty=!0},clean:function(){c.value.dirty=!1},resetValidators:function(){e.each(f.value,(function(e){e.reset()})),c.value.validated=!h.value},initMessageBag:function(){v.value=new l.value.$vueform.services.messageBag(O)},initValidation:function(){h.value&&(c.value.validated=!1,p.value=new l.value.$vueform.services.validation.factory(s.value,l.value),f.value=[],e.each(p.value.makeAll(h.value),(function(e){f.value.push(e)})))}}},oe=function(e,n,r){var a=r.input,o=u(!1);return t((function(){a&&a.value&&a.value.addEventListener&&(a.value.addEventListener("focus",(function(){o.value=!0})),a.value.addEventListener("blur",(function(){o.value=!1})))})),{focused:o}},ie={props:{name:{required:!0,type:[String,Number]},conditions:{required:!1,type:[Array],default:function(){return[]}},onBeforeCreate:{required:!1,type:[Function],default:null,private:!0},onCreated:{required:!1,type:[Function],default:null,private:!0},onBeforeMount:{required:!1,type:[Function],default:null,private:!0},onMounted:{required:!1,type:[Function],default:null,private:!0},onBeforeUpdate:{required:!1,type:[Function],default:null,private:!0},onUpdated:{required:!1,type:[Function],default:null,private:!0},onBeforeUnmount:{required:!1,type:[Function],default:null,private:!0},onUnmounted:{required:!1,type:[Function],default:null,private:!0}}},ue={props:{inline:{required:!1,type:[Boolean],default:!1},layout:{required:!1,type:[String,Object,Boolean],default:"ElementLayout",private:!0},addClass:{required:!1,type:[Array,Object,String],default:null},removeClass:{required:!1,type:[Array,Object],default:null},replaceClass:{required:!1,type:[Object],default:null},overrideClass:{required:!1,type:[Array,Object,String],default:null},addClasses:{required:!1,type:[Object],default:function(){return{}}},replaceClasses:{required:!1,type:[Object],default:function(){return{}}},removeClasses:{required:!1,type:[Object],default:function(){return{}}},overrideClasses:{required:!1,type:[Object],default:function(){return{}}},presets:{required:!1,type:[Array],default:function(){return[]}},view:{required:!1,type:[String],default:void 0},views:{required:!1,type:[Object],default:function(){return{}}},size:{required:!1,type:[String],default:void 0},columns:{required:!1,type:[Object,String,Number],default:null},templates:{required:!1,type:[Object],default:function(){return{}}},description:{required:!1,type:[String],default:null},info:{required:!1,type:[String],default:null},infoPosition:{required:!1,type:[String],default:"right"},label:{required:!1,type:[String,Object,Function],default:null},before:{required:!1,type:[Object,String,Number],default:null},between:{required:!1,type:[Object,String,Number],default:null},after:{required:!1,type:[Object,String,Number],default:null},slots:{required:!1,type:[Object],default:function(){return{}}}}},le={props:{onChange:{required:!1,type:[Function],default:null,private:!0}}},se={props:{formatData:{required:!1,type:[Function],default:null},formatLoad:{required:!1,type:[Function],default:null},submit:{required:!1,type:[Boolean],default:!0}}},ce={props:{rules:{required:!1,type:[Array,String,Object],default:null},messages:{required:!1,type:[Object],default:function(){return{}}},fieldName:{required:!1,type:[String],"@default":"name|label"}}},fe=function(){return[ie,ue,le,se,ce]},ve=function(n,r,a,o){var i=u(void 0!==o.nullValue?o.nullValue:null);r.features=[q,P,E,te,L,G,ee,J,H,I,T,F,ae,V,D,Z,_,R,N,M,z,X,U,Y,oe],r.slots=["label","info","description","before","between","after"];var l=function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.deps||{},i=m(m({},a),{},{events:r.emits,slots:r.slots});return r.features.forEach((function(t){e.each(t(n,r,o,i),(function(e,t){o[t]=e}))})),!1!==r.watchValue&&S(0,0,o),!1!==r.initValidation&&t((function(){o.initMessageBag(),o.initValidation()})),m({},o)}(n,r,{deps:{nullValue:i}});return m({},l)};function pe(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.name)throw Error("The `name` attribute must be defined to create a new element");var r=t.name,a="".concat(e.upperFirst(e.camelCase(r))),o=["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"].concat(n.emits||[]);return m({name:a,mixins:[].concat(fe()).concat(n.mixins||[]),emits:o,setup:function(e,r){var i=m({},r);i.emits=o,i.name=u(a);var l=ve(e,i,0,t);i.element=l;var s=n.setup?n.setup(e,i):{};return m(m({},l),s)},props:m({type:{required:!1,type:[String],default:r},default:{required:!1,type:[String,Number],default:void 0},disabled:{required:!1,type:[Boolean],default:!1},floating:{required:!1,type:[String],default:null},id:{required:!1,type:[String],default:null},placeholder:{required:!1,type:[String],default:null}},t.props||{})},e.omit(n,["setup","mixins","emits","props"]))}export{pe as default};
