<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'invite_code',
    function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();
        $table->integer('user_id')->unsigned()->nullable();
        $table->string('code');
        $table->unique('code');
    }
);