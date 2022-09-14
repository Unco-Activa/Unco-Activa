<?php

namespace App\Http\Controllers;

use App\Mail\PreInscriptionMail;
use App\Models\Inscription;
use App\Models\RaceCategorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use function PHPUnit\Framework\isNull;

class InscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $preInscriptions = Inscription::join('race_categories', 'race_categories.id', '=', 'inscriptions.race_categorie_id')
        ->get( ['inscriptions.*', 'race_categories.name as categorie_name']);
        return $preInscriptions;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request);
        $userEnrolled = Inscription::where('email', '=', $request->email)->get("id");
        // var_dump($userEnrolled);
        // if (!is_null(Auth::user())){
        if (count($userEnrolled) === 0) {
            $inscription = new Inscription();
            // $inscription->user_id = Auth::user()->id;
            $inscription->name = $request->name;
            $inscription->race_categorie_id = $request->race_categorie_id;
            $inscription->surname = $request->surname;
            $inscription->dni = $request->dni;
            $inscription->birth = date($request->birth);
            $inscription->gender = $request->gender;
            $inscription->address = $request->address;
            $inscription->country = $request->country;
            $inscription->province = $request->province;
            $inscription->city = $request->city;
            $inscription->phone = $request->phone;
            $inscription->social_work = $request->social_work;
            $inscription->shirt_size = $request->shirt_size;
            $inscription->email = $request->email;
            $inscription->emergency_contac_name = $request->emergency_contac_name;
            $inscription->emergency_contac_phone = $request->emergency_contac_phone;
            $inscription->emergency_contac_bond = $request->emergency_contac_bond;
            $inscription->save();

            $categorie = RaceCategorie::findOrFail($inscription->race_categorie_id);

            $arreglocontacto = [
                "name" => $request->name . " " . $request->surname,
                "categoriename" => $categorie->name,
                "price" => $categorie->price
            ];
            $correo = new PreInscriptionMail($arreglocontacto);
            if (!Mail::to($request->email)->send($correo)) abort(500, 'Error al enviar el mail.');
        } else {
            abort(404, 'Ya te has inscrito anteriormente con este correo, por favor reviza tu bandeja de spam en caso de no encontrar el correo en tu buzon de mensajes');
        }
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $inscription = Inscription::find($id);
        $idCategorie = $inscription->race_categorie_id;
        $categorie = RaceCategorie::find($idCategorie);

        if($inscription->billing_verified_at){
            $categorie->quotas = $categorie->quotas + 1;
            if($categorie->save()){
                $inscription->billing_verified_at = NULL;
                $inscription->save();
            };
        }else{
            $categorie->quotas = $categorie->quotas - 1;
            if($categorie->save()){
                $inscription->billing_verified_at = date('Y-m-d');
                $inscription->save();
            };
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $inscription = Inscription::destroy($id);
        return $inscription;
    }
}
