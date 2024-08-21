<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::createTable(
    'invite_user',
    function (Blueprint $table) {
        $table->increments('id');
        $table->timestamps();
        $table->integer('user_id')->unsigned()->nullable();
        $table->integer('invited_by_user_id')->unsigned()->nullable();
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->foreign('invited_by_user_id')->references('id')->on('users')->onDelete('cascade');
    }
);