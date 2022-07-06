<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiketsTable extends Migration
{
    public function up()
    {
        Schema::create('tikets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('no_tiket')->nullable();
            $table->string('qr')->nullable();
            $table->string('checkin')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
