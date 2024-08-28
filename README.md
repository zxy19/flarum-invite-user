# Intive User

![License](https://img.shields.io/badge/license-GPL-3.0-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/xypp/flarum-invite-user.svg)](https://packagist.org/packages/xypp/flarum-invite-user) [![Total Downloads](https://img.shields.io/packagist/dt/xypp/flarum-invite-user.svg)](https://packagist.org/packages/xypp/flarum-invite-user)

A [Flarum](http://flarum.org) extension. Allow user to invite other and gain rewards from it.

This Extension allows user to accept another user as his invite user.

The extension also adds invite code to the post url.

When the url with invite code loaded or the invite code is fill, an modal will be shown to user to accept the invite.

After the user accepted the invite, both user will gain rewards.

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
