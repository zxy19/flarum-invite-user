# Intive User

**V2.0.0 版本与 Forum-Quests v1.x 不兼容**

![License](https://img.shields.io/badge/license-GPLv3-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/xypp/flarum-invite-user.svg)](https://packagist.org/packages/xypp/flarum-invite-user) [![Total Downloads](https://img.shields.io/packagist/dt/xypp/flarum-invite-user.svg)](https://packagist.org/packages/xypp/flarum-invite-user)

一个 [Flarum](http://flarum.org) 拓展，允许用户邀请其他人加入论坛并获得奖励.

该拓展允许用户接受其他用户为邀请用户，并给予奖励.

该拓展也添加了邀请码到帖子的url中.

当邀请码的url被加载或者邀请码被填写，一个模态框将会被显示给用户，询问其是否接受邀请.

当用户接受邀请，邀请双方用户将会获得奖励.

## Installation

Install with composer:

```sh
composer require xypp/flarum-invite-user:"*"
```

## Updating

```sh
composer update xypp/flarum-invite-user:"*"
php flarum migrate
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/xypp/flarum-invite-user)
- [GitHub](https://github.com/zxy19/flarum-invite-user)
