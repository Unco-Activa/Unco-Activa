<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Inscription extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = [
        'name',
        'race_categorie_id',
        'surname',
        'dni',
        'birth',        
        'address',
        'country',
        'province',
        'city',
        'gender',
        'phone',
        'social_work',
        'shirt_size',
        'email',
        'emergency_contac_name',
        'emergency_contac_bond',
        'emergency_contac_phone_',
        'billing_verified_at',
        'verification_denied'
    ];

    protected $casts = [
        'billing_verified_at' => 'datetime',
    ];

    public function scopeFilter($query, array $filters){

        if($filters['search'] ?? false){
            $query->where('name', 'like', '%' . request('search') . '%')
            ->orwhere('surname', 'like', '%' . request('search') . '%')
            ->orwhere('dni', 'like', '%' . request('search') . '%')
            ->orwhere('email', 'like', '%' . request('search') . '%');
        }
    }
}
