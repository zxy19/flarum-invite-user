/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",m=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new B(n||[]);return u(i,"_invoke",{value:S(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v="suspendedStart",h="suspendedYield",y="executing",g="completed",x={};function b(){}function w(){}function _(){}var N={};f(N,c,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(F([])));O&&O!==i&&a.call(O,c)&&(N=O);var C=_.prototype=b.prototype=Object.create(N);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,u,s){var c=d(t[o],t,i);if("throw"!==c.type){var l=c.arg,m=l.value;return m&&"object"==n(m)&&a.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,u,s)}),(function(t){r("throw",t,u,s)})):e.resolve(m).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,s)}))}s(c.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function S(t,r,n){var o=v;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var s=U(u,n);if(s){if(s===x)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=d(t,r,n);if("normal"===c.type){if(o=n.done?g:h,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function U(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,x;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,x):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=_,u(C,"constructor",{value:_,configurable:!0}),u(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,m,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,m,"GeneratorFunction")),t.prototype=Object.create(C),t},r.awrap=function(t){return{__await:t}},E(k.prototype),f(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(C),f(C,m,"Generator"),f(C,c,(function(){return this})),f(C,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),x}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{extend:()=>at});const t=flarum.core.compat["common/app"];r.n(t)().initializers.add("xypp/flarum-invite-user",(function(){console.log("[xypp/flarum-invite-user] Hello, forum and admin!")}));const e=flarum.core.compat["forum/app"];var o=r.n(e);const i=flarum.core.compat["common/models/User"];var a=r.n(i);const u=flarum.core.compat["common/Model"];var s=r.n(u);const c=flarum.core.compat["common/extend"],l=flarum.core.compat["forum/components/UserPage"];var f=r.n(l);const p=flarum.core.compat["common/components/LinkButton"];var d=r.n(p);function v(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,u,"next",t)}function u(t){v(i,n,o,a,u,"throw",t)}a(void 0)}))}}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function g(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e)}var x=r(183),b=r.n(x);const w=flarum.core.compat["common/components/LoadingIndicator"];var _=r.n(w);const N=flarum.core.compat["common/components/Button"];var L=r.n(N);const O=flarum.core.compat["common/helpers/avatar"];var C=r.n(O);const E=flarum.core.compat["common/helpers/username"];var k=r.n(E);const S=flarum.core.compat["common/components/Link"];var U=r.n(S);function j(t,e,r){var n=t?e:r||"";return"function"==typeof n?n():n}function P(t){return B.apply(this,arguments)}function B(){return(B=h(b().mark((function t(e){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o().store.find("invite-codes",e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}const F=flarum.core.compat["common/components/Modal"];var M=r.n(F);const T=flarum.core.compat["common/components/Alert"];var I=r.n(T);function A(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return(e=o().translator).trans.apply(e,["xypp-invite-user.forum.confirm."+t].concat(n))}var G=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).loading=!1,e}g(e,t);var r=e.prototype;return r.className=function(){return"Modal Modal--small"},r.title=function(){return A("title")},r.content=function(){var t=this.attrs.code,e=this.attrs.code.user()||void 0;return m("div",{className:"Modal-body confirm-invite-container"},m("div",{className:"confirm-invite-user-avatar"},C()(e||null,{className:"confirm-invite-avatar"})),m("div",{className:"confirm-invite-name"},null==e?void 0:e.displayName()),m("div",{className:"confirm-invite-msg"},A("msg",{username:null==e?void 0:e.displayName()})),m("br",null),m("div",{className:"confirm-invite-alert"},A("alert")),m("div",{className:"confirm-invite-btn"},m(L(),{className:"Button Button--primary",onclick:this.confirm.bind(this),disabled:this.loading,loading:this.loading},A("accept"))),m("br",null),m("div",{className:"confirm-invite-code"},t.code()))},r.confirm=function(){var t=h(b().mark((function t(){var e,r,n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=o().store.createRecord("invited-users"),n=this.attrs.code.user(),null!=(e=o().session)&&e.user){t.next=4;break}return t.abrupt("return");case 4:return this.loading=!0,m.redraw(),t.prev=6,t.next=9,r.save({invited_by_user_id:n.id()});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(6),this.loading=!1,m.redraw(),t.abrupt("return");case 16:o().alerts.show(I(),{type:"success"},A("success")),o().modal.close();case 18:case"end":return t.stop()}}),t,this,[[6,11]])})));return function(){return t.apply(this,arguments)}}(),e}(M());const q=flarum.core.compat["common/components/Placeholder"];var R=r.n(q);const z=flarum.core.compat["common/helpers/humanTime"];var Y=r.n(z);function D(t){for(var e,r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return(e=o().translator).trans.apply(e,["xypp-invite-user.forum.page."+t].concat(n))}var H=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).loading=!1,e.url="",e.queryCode=!1,e}g(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.user=null,this.loading=!0,this.loadUser(m.route.param("username"))},r.show=function(e){var r=this;t.prototype.show.call(this,e),this.user=e,o().store.find("users",e.id()+"",{include:"invitedUsers,invitedUsers.user,invitedByUser,invitedByUser.inviter"}).then(h(b().mark((function t(){var e;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.loading=!1,r.url=o().forum.attribute("baseUrl")+"?inviteCode="+(null==(e=o().forum.inviteCode()||void 0)?void 0:e.code()),m.redraw();case 3:case"end":return t.stop()}}),t)}))))},r.content=function(){var t,e,r,n,i,a=this;return!this.user||this.loading?m(_(),{size:46}):m("div",{className:"invite-page-container"},j((null==(t=o().session)||null==(t=t.user)?void 0:t.id())===this.user.id(),m("div",null,m("h2",null,D("code.title")),m("div",{className:"Form-group"},m("label",{for:"xypp-invite-code"},D("code.code")),m("input",{readonly:!0,id:"xypp-invite-code",type:"text",className:"FormControl",value:null==(e=o().forum.inviteCode())?void 0:e.code()})),m("div",{className:"Form-group"},m("label",{for:"xypp-invite-url"},D("code.url")),m("input",{readonly:!0,id:"xypp-invite-url",type:"text",className:"FormControl",value:o().forum.attribute("baseUrl")+"?inviteCode="+(null==(r=o().forum.inviteCode())?void 0:r.code())})))),m("div",null,m("h2",null,D("my.title")),j(!!this.user.invitedByUser(),function(){var t,e,r;return[m("div",null,m("label",{for:"xypp-invite-code-input"},D("my.inviter"))),m("div",null,m(U(),{className:"invited-by-user-container",href:o().route.user(null==(t=a.user)||null==(t=t.invitedByUser())?void 0:t.inviter())},C()((null==(e=a.user)||null==(e=e.invitedByUser())?void 0:e.inviter())||null)," ",k()((null==(r=a.user)||null==(r=r.invitedByUser())?void 0:r.inviter())||null)))]}.bind(this),j((null==(n=o().session)||null==(n=n.user)?void 0:n.id())===this.user.id(),[m("div",{className:"Form-group"},m("label",{for:"xypp-invite-code-input"},D("my.code")),m("input",{id:"xypp-invite-code-input",type:"text",className:"FormControl"})),m("div",{className:"Form-group"},m(L(),{disabled:this.queryCode,loading:this.queryCode,className:"Button Button--primary",onclick:this.fillCode.bind(this)},D("my.accept")))],m(R(),{text:D("my.no-inviter")})))),m("div",{className:"invite-page-invited-users"},m("h2",null,D("invite.title")),j(!(null==(i=this.user.invitedUsers())||!i.length),m("table",{className:"Table"},m("thead",null,m("tr",null,m("th",null,D("invite.avatar")),m("th",null,D("invite.username")),m("th",null,D("invite.time")))),m("tbody",null,(this.user.invitedUsers()||[]).map((function(t){return m("tr",{key:t.id()},m("td",null,C()(t.user()||null)),m("td",null,m(U(),{href:t.user()&&o().route.user(t.user())},k()(t.user()||null))),m("td",null,Y()(t.created_at())))})))),m(R(),{text:D("invite.empty")}))))},r.fillCode=function(){var t=h(b().mark((function t(){var e,r;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.queryCode=!0,m.redraw(),e=this.$("#xypp-invite-code-input"),t.prev=3,t.next=6,P(e.val());case 6:r=t.sent,o().modal.show(G,{code:r},!0);case 8:return t.prev=8,this.queryCode=!1,m.redraw(),t.finish(8);case 12:case"end":return t.stop()}}),t,this,[[3,,8,12]])})));return function(){return t.apply(this,arguments)}}(),e}(f());const $=flarum.core.compat["common/models/Forum"];var J=r.n($);const K=flarum.core.compat["forum/components/NotificationGrid"];var Q=r.n(K);const V=flarum.core.compat["forum/components/Notification"];var W=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var r=e.prototype;return r.excerpt=function(){return""},r.icon=function(){return"fas fa-user-check"},r.href=function(){return o().route("user.invite",{username:this.attrs.notification.fromUser().slug()})},r.content=function(){var t=this.attrs.notification.fromUser();return o().translator.trans("xypp-invite-user.forum.notification.user_invited",{username:t.displayName()})},e}(r.n(V)());const X=flarum.core.compat["forum/components/PostMeta"];var Z=r.n(X);const tt=flarum.extensions["xypp-forum-quests"];function et(t){return function(){return t.call(this)||void 0}}o().initializers.add("xypp/flarum-invite-user",(function(){var t;a().prototype.invitedByUser=et(s().hasOne("invitedByUser")),a().prototype.invitedUsers=(t=s().hasMany("invitedUsers"),function(){return(t.call(this)||[]).filter((function(t){return!!t}))}),J().prototype.inviteCode=et(s().hasOne("inviteCode")),J().prototype.invitation=et(s().hasOne("invitation")),o().routes["user.invite"]={path:"/u/:username/invite",component:H},o().notificationComponents.user_invited=W,(0,c.extend)(f().prototype,"navItems",(function(t){var e;o().session.user&&t.add("invite",d().component({href:o().route("user.invite",{username:null==(e=this.user)?void 0:e.username()}),icon:"fas fa-user"},[o().translator.trans("xypp-invite-user.forum.invite")]),10)})),(0,c.extend)(Q().prototype,"notificationTypes",(function(t){t.add("user_invited",{name:"user_invited",icon:"fas fa-user-check",label:o().translator.trans("xypp-invite-user.forum.notification.user_invited_label")})})),setTimeout((function(){var t,e;o().forum.invitation()?null!=(t=o().session)&&t.user?(localStorage.removeItem("inviteCode"),o().modal.show(G,{code:o().forum.invitation()})):localStorage.setItem("inviteCode",(null==(e=o().forum.invitation())?void 0:e.code())||""):localStorage.getItem("inviteCode")&&(o().forum.invitedByUser()||P(localStorage.getItem("inviteCode")+"").then((function(t){localStorage.removeItem("inviteCode"),o().modal.show(G,{code:t})})))}),1e3),(0,c.override)(Z().prototype,"getPermalink",(function(t,e){var r;return o().forum.inviteCode()?t(e)+"?inviteCode="+(null==(r=o().forum.inviteCode())?void 0:r.code()):t(e)})),flarum.extensions["xypp-forum-quests"]&&((0,tt.addCondition)("user_be_invited",o().translator.trans("xypp-invite-user.forum.condition.user_be_invited")+""),(0,tt.addCondition)("user_invite",o().translator.trans("xypp-invite-user.forum.condition.user_invite")+""))}));const rt=flarum.core.compat["common/extenders"];var nt=r.n(rt),ot=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).user=s().hasOne("user"),e.code=s().attribute("code"),e}return g(e,t),e}(s()),it=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).user=s().hasOne("user"),e.inviter=s().hasOne("inviter"),e.created_at=s().attribute("created_at",s().transformDate),e}return g(e,t),e}(s());const at=[(new(nt().Store)).add("invite-codes",ot).add("invited-users",it)]})(),module.exports=n})();
//# sourceMappingURL=forum.js.map