import app from 'flarum/admin/app';

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
});
