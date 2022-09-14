<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RaceCategorie extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'color',
        'price',
        'participants',
        'quotas'
    ];
    
    public function inscriptions()
    {
        return $this->hasOne('App\Models\Inscription');
    }
}
