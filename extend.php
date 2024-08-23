<?php

/*
 * This file is part of xypp/flarum-invite-user.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\InviteUser;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Xypp\InviteUser\Api\Controller\AddInvitedByUserController;
use Xypp\InviteUser\Api\Controller\CreateCodeController;
use Xypp\InviteUser\Api\Controller\ShowCodeController;
use Xypp\InviteUser\Api\Serializer\InvitedCodeSerializer;
use Xypp\InviteUser\Api\Serializer\InvitedUserSerializer;
use Xypp\InviteUser\Notification\UserInvitedNotification;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Model(User::class))
        ->hasOne('inviteCode', InviteCode::class, 'user_id')
        ->hasMany('invitedUsers', InvitedUser::class, 'invited_by_user_id')
        ->hasOne('invitedByUser', InvitedUser::class, 'user_id'),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->hasOne('inviteCode', InvitedCodeSerializer::class)
        ->hasOne('invitation', InvitedCodeSerializer::class)
        ->hasOne('invitedByUser', InvitedUserSerializer::class),
    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->hasMany('invitedUsers', InvitedUserSerializer::class)
        ->hasOne('invitedByUser', InvitedUserSerializer::class),
    (new Extend\ApiController(ShowUserController::class))
        ->addOptionalInclude(['invitedUsers', 'invitedByUser', 'invitedUsers.user', 'invitedByUser.inviter']),
    (new Extend\Routes('api'))
        ->get('/invite-codes/{code}', 'inviteCode.show', ShowCodeController::class)
        ->post('/invited-users', "invitedUser.create", AddInvitedByUserController::class),
    (new Extend\ApiController(ShowForumController::class))
        ->addInclude(['inviteCode', "invitation", "invitation.user", "invitedByUser"])
        ->prepareDataForSerialization(ForumRelation::class),
    (new Extend\Notification())
        ->type(UserInvitedNotification::class, InvitedUserSerializer::class),
    (new Extend\Settings())
        ->default('xypp-invite.reward_be_invited', 5)
        ->default('xypp-invite.reward_inviter', 10)
];