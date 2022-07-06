<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tiket extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use HasFactory;

    public const CHECKIN_SELECT = [
        [
            'label' => 'sudah',
            'value' => 'sudah',
        ],
        [
            'label' => 'belum',
            'value' => 'belum',
        ],
    ];

    public $table = 'tikets';

    protected $appends = [
        'checkin_label',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'pendaftar.nama',
        'no_tiket',
        'qr',
        'checkin',
    ];

    protected $filterable = [
        'id',
        'pendaftar.nama',
        'no_tiket',
        'qr',
        'checkin',
    ];

    protected $fillable = [
        'pendaftar_id',
        'no_tiket',
        'qr',
        'checkin',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function pendaftar()
    {
        return $this->belongsTo(Pendaftar::class);
    }

    public function getCheckinLabelAttribute()
    {
        return collect(static::CHECKIN_SELECT)->firstWhere('value', $this->checkin)['label'] ?? '';
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
