<?php

namespace App\Http\Requests;

use App\Models\Pembayaran;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StorePembayaranRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('pembayaran_create');
    }

    public function rules()
    {
        return [
            'pendaftar_id' => [
                'integer',
                'exists:pendaftars,id',
                'nullable',
            ],
            'payment' => [
                'nullable',
                'in:' . implode(',', Arr::pluck(Pembayaran::PAYMENT_SELECT, 'value')),
            ],
            'keterangan' => [
                'string',
                'nullable',
            ],
            'status' => [
                'nullable',
                'in:' . implode(',', Arr::pluck(Pembayaran::STATUS_SELECT, 'value')),
            ],
        ];
    }
}
