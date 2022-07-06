<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pembayaran extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use HasFactory;

    public const STATUS_SELECT = [
        [
            'label' => 'pending',
            'value' => 'pending',
        ],
        [
            'label' => 'success',
            'value' => 'success',
        ],
        [
            'label' => 'failed',
            'value' => 'failed',
        ],
    ];

    public const PAYMENT_SELECT = [
        [
            'label' => 'cash',
            'value' => 'cash',
        ],
        [
            'label' => 'gopay',
            'value' => 'gopay',
        ],
        [
            'label' => 'shopee',
            'value' => 'shopee',
        ],
        [
            'label' => 'transfer',
            'value' => 'transfer',
        ],
        [
            'label' => 'VA',
            'value' => 'VA',
        ],
    ];

    public $table = 'pembayarans';

    protected $appends = [
        'payment_label',
        'status_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'pendaftar.nama',
        'payment',
        'keterangan',
        'status',
    ];

    protected $filterable = [
        'id',
        'pendaftar.nama',
        'payment',
        'keterangan',
        'status',
    ];

    protected $fillable = [
        'pendaftar_id',
        'payment',
        'keterangan',
        'status',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function pendaftar()
    {
        return $this->belongsTo(Pendaftar::class);
    }

    public function getPaymentLabelAttribute()
    {
        return collect(static::PAYMENT_SELECT)->firstWhere('value', $this->payment)['label'] ?? '';
    }

    public function getStatusLabelAttribute()
    {
        return collect(static::STATUS_SELECT)->firstWhere('value', $this->status)['label'] ?? '';
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
