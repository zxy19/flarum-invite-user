(()=>{var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=flarum.core.compat["common/app"];e.n(t)().initializers.add("xypp/flarum-invite-user",(function(){console.log("[xypp/flarum-invite-user] Hello, forum and admin!")}));const i=flarum.core.compat["admin/app"];var n=e.n(i);n().initializers.add("xypp/flarum-invite-user",(function(){n().extensionData.for("xypp-invite-user").registerSetting({setting:"xypp-invite.reward_inviter",type:"number",label:n().translator.trans("xypp-invite-user.admin.settings.reward_invite.title"),help:n().translator.trans("xypp-invite-user.admin.settings.reward_invite.description")}).registerSetting({setting:"xypp-invite.reward_be_invited",type:"number",label:n().translator.trans("xypp-invite-user.admin.settings.reward_be_invited.title"),help:n().translator.trans("xypp-invite-user.admin.settings.reward_be_invited.description")}).registerSetting({setting:"xypp-invite.invite_each_other",type:"boolean",label:n().translator.trans("xypp-invite-user.admin.settings.invite_each_other.title"),help:n().translator.trans("xypp-invite-user.admin.settings.invite_each_other.description")}).registerSetting({setting:"xypp-invite.invite_new_user_only",type:"boolean",label:n().translator.trans("xypp-invite-user.admin.settings.invite_new_user_only.title"),help:n().translator.trans("xypp-invite-user.admin.settings.invite_new_user_only.description")})}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map