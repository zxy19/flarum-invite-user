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

use Flarum\Api\Controller\ShowUserController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Xypp\InviteUser\Api\Controller\AddInvitedByUserController;
use Xypp\InviteUser\Api\Controller\CreateCodeController;
use Xypp\InviteUser\Api\Controller\ShowCodeUserController;
use Xypp\InviteUser\Api\Serializer\InvitedCodeSerializer;
use Xypp\InviteUser\Api\Serializer\InvitedUserSerializer;

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
    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->hasOne('inviteCode', InvitedCodeSerializer::class)
        ->hasMany('invitedUsers', InvitedUserSerializer::class)
        ->hasOne('invitedByUser', InvitedUserSerializer::class),
    (new Extend\ApiController(ShowUserController::class))
        ->addInclude(['inviteCode', 'invitedUsers', 'invitedByUser', 'invitedUsers.user', 'invitedByUser.user']),
    (new Extend\Routes('api'))
        ->get('/invite-code', 'inviteCode.create', CreateCodeController::class)
        ->get('/invite-code/{code}', 'inviteCode.show', ShowCodeUserController::class)
        ->post('/invite-user', "invitedUser.create", AddInvitedByUserController::class)
];
