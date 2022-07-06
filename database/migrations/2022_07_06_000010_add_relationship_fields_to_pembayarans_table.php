<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToPembayaransTable extends Migration
{
    public function up()
    {
        Schema::table('pembayarans', function (Blueprint $table) {
            $table->unsignedBigInteger('pendaftar_id')->nullable();
            $table->foreign('pendaftar_id', 'pendaftar_fk_6939317')->references('id')->on('pendaftars');
        });
    }
}
