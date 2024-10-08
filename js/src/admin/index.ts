import app from 'flarum/admin/app';
import { addCondition } from '@xypp-forum-quests/admin';

app.initializers.add('xypp/flarum-invite-user', () => {
  app.extensionData.for('xypp-invite-user')
    .registerSetting({
      setting: 'xypp-invite.reward_inviter',
      type: 'number',
      label: app.translator.trans('xypp-invite-user.admin.settings.reward_invite.title'),
      help: app.translator.trans('xypp-invite-user.admin.settings.reward_invite.description'),
    }).registerSetting({
      setting: 'xypp-invite.reward_be_invited',
      type: 'number',
      label: app.translator.trans('xypp-invite-user.admin.settings.reward_be_invited.title'),
      help: app.translator.trans('xypp-invite-user.admin.settings.reward_be_invited.description'),
    })
    .registerSetting({
      setting: 'xypp-invite.invite_each_other',
      type: 'boolean',
      label: app.translator.trans('xypp-invite-user.admin.settings.invite_each_other.title'),
      help: app.translator.trans('xypp-invite-user.admin.settings.invite_each_other.description'),
    })
    .registerSetting({
      setting: 'xypp-invite.invite_new_user_only',
      type: 'boolean',
      label: app.translator.trans('xypp-invite-user.admin.settings.invite_new_user_only.title'),
      help: app.translator.trans('xypp-invite-user.admin.settings.invite_new_user_only.description'),
    })
});
