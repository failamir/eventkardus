<?php

namespace App\Http\Requests;

use App\Models\Tiket;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreTiketRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('tiket_create');
    }

    public function rules()
    {
        return [
            'pendaftar_id' => [
                'integer',
                'exists:pendaftars,id',
                'nullable',
            ],
            'no_tiket' => [
                'string',
                'nullable',
            ],
            'qr' => [
                'string',
                'nullable',
            ],
            'checkin' => [
                'nullable',
                'in:' . implode(',', Arr::pluck(Tiket::CHECKIN_SELECT, 'value')),
            ],
        ];
    }
}
