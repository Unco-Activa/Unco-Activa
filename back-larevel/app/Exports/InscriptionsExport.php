<?php

namespace App\Exports;

use App\Models\Inscription;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class InscriptionsExport implements FromCollection, ShouldAutoSize, WithHeadings
{
    use Exportable;

    public function collection()
    {
        return  Inscription::join('race_categories', 'race_categories.id', '=', 'inscriptions.race_categorie_id')
        ->where('billing_verified_at', '!=', null )->where('verification_denied', null )
        ->get(['inscriptions.id',
            'race_categories.name as catagorie_name',
            'inscriptions.name',
            'inscriptions.surname',
            'inscriptions.birth',
            'inscriptions.dni',
            'inscriptions.phone',
            'inscriptions.email',
            'inscriptions.gender',
            'inscriptions.emergency_contact_phone',
            'inscriptions.shirt_size'
        ]);
    }

    public function headings(): array
    {
        return [
            'ID',
            'DISTANCIA',
            'NOMBRE',
            'APELLIDO',
            'FECHA DE NACIMIENTO',
            'DNI',
            'TELEFONO',
            'EMAIL',
            'GENERO',
            'EMERGENCIA',
            'TALLE',
        ];
    }
}
