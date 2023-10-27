<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use Illuminate\Http\Request;
use App\Mail\InscriptionMail;
use App\Models\RaceCategorie;
use App\Mail\PreInscriptionMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Exports\InscriptionsExport;
use Maatwebsite\Excel\Facades\Excel;

class InscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $preInscriptions = Inscription::where('billing_verified_at', null )->where('verification_denied', null )->filter(request(['search']))->paginate(30);
        $categories = RaceCategorie::all();

        return view('pages.pre-inscriptions', ['preInscriptions' => $preInscriptions, 'categories' => $categories]);
    }

    public function indexInscriptions()
    {
        /* $test = Inscription::join('race_categories', 'race_categories.id', '=', 'inscriptions.race_categorie_id')
        ->where('billing_verified_at', '!=', null )->where('verification_denied', null )
        ->get(['inscriptions.*', 'race_categories.name as categorie_name']); */
        // dd($test);

        $inscriptions = Inscription::where('billing_verified_at', '!=', null )->where('verification_denied', null )->filter(request(['search']))->paginate(30);
        $inscriptionCategories = RaceCategorie::all();
        return view('pages.inscriptions', ['inscriptions' => $inscriptions, 'inscriptionCategories' => $inscriptionCategories]);
    }

    public function indexDeniedInscriptions()
    {
        $DeniedInscriptions = Inscription::where('verification_denied', '!=', null )->paginate(30);
        $inscriptionCategories = RaceCategorie::all();
        return view('pages.denied-inscriptions', ['DeniedInscriptions' => $DeniedInscriptions, 'inscriptionCategories' => $inscriptionCategories]);
    }


    public function exportAllInscriptions(){
        return Excel::download(new InscriptionsExport, 'inscriptos_Unco_Activa.xlsx');
    }

    public function indexFrontInscriptions()
    {
        $test = Inscription::join('race_categories', 'race_categories.id', '=', 'inscriptions.race_categorie_id')
        ->where('billing_verified_at', '!=', null)->where('verification_denied', null)
        ->get(['inscriptions.id as id', 'inscriptions.name', 'inscriptions.surname', 'race_categories.name as categorie_name']);
        // dd($test);
        return $test;

        // $inscriptions = Inscription::where('billing_verified_at', '!=', null)->where('verification_denied', null)->filter(request(['search']))->paginate(10);
        // $inscriptionCategories = RaceCategorie::all();
        // return view('pages.inscriptions', ['inscriptions' => $inscriptions, 'inscriptionCategories' => $inscriptionCategories]);
    }
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         //contar inscripciones
         $countInscriptions = Inscription::count();
        //dd($request);
        $userEnrolled = Inscription::where('email', '=', $request->email)->get("id");
        // var_dump($userEnrolled);
        // if (!is_null(Auth::user())){
        if (count($userEnrolled) === 0) {
            $inscription = new Inscription();
            // $inscription->user_id = Auth::user()->id;
            $users = DB::table('inscriptions')->count() + 1;
            $files = $request->file();
            $path =  'files';
            // $resultados = print_r($files, true);
            // abort(404, $resultados);
            $filesPath = public_path($path);
            if (!file_exists($filesPath)) {
                mkdir($filesPath, 0777, true);
            }
            $inscriptionFiles = public_path('files/' . $users . "/");
            if (!file_exists($inscriptionFiles)) {
                mkdir($inscriptionFiles, 0777, true);
            }
            $destinationPath = 'files/' . $users . "/";
            $file = $request->file('files')[0];
            $name = 'payment-' .  $file->getClientOriginalName();
            $file->move(public_path() . '/files/' . $users . '/', $name);
            $destinationPath = $destinationPath . $name;
            $destinationPathFile = null;
            if ($request->promo == 'si') {
                $promoFile = $request->file('files')[1];
                $namefilepromo = 'promo-' . $promoFile->getClientOriginalName();
                $promoFile->move(public_path() . '/files/' . $users . '/', $namefilepromo);
                $destinationPathFile = '/files/' . $users . '/' . $namefilepromo;
            }
            $inscription->race_categorie_id = $request->race_categorie_id;
            $inscription->files = $destinationPath;
            $inscription->name = $request->name;
            $inscription->promo = $destinationPathFile;
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
                "price" => $categorie->price,
                "promo" => $categorie->promo
            ];
            $correo = new PreInscriptionMail($arreglocontacto);
            if (!Mail::to($request->email)->send($correo)) abort(500, 'Error al enviar el mail.');
        } else {
            abort(404, 'El cupo está completo o ya te has inscrito anteriormente con este correo, por favor reviza tu bandeja de spam en caso de no encontrar el correo en tu buzon de mensajes');
        }
        // }
    }

    public function edit($id)
    {
        $inscription = Inscription::find($id);
        if ($inscription->verification_denied) {
            $inscription->verification_denied = NULL;
            $inscription->save();

            return redirect('/pre-inscripciones-rechazadas')->with('message', 'Has habilitado a '.$inscription->name.' '.$inscription->surname.'!');
        } else {
            $inscription->verification_denied = date('Y-m-d');
            $inscription->save();

            return redirect('/pre-inscripciones')->with('message', 'Has rechazado a '.$inscription->name.' '.$inscription->surname.'!');
        }
    }

    public function update(Request $request, $id)
    {
        $inscription = Inscription::find($id);
        $idCategorie = $inscription->race_categorie_id;
        $categorie = RaceCategorie::find($idCategorie);

        if ($inscription->billing_verified_at) {
            $categorie->quotas = $categorie->quotas + 1;
            if ($categorie->save()) {
                $inscription->billing_verified_at = NULL;
                $inscription->save();

                return redirect('/inscripciones')->with('message', 'Has desinscripto a '.$inscription->name.' '.$inscription->surname.'!');
            };
        } else {
            $categorie->quotas = $categorie->quotas - 1;
            if ($categorie->save()) {
                $inscription->billing_verified_at = date('Y-m-d');
                $inscription->save();

                $arreglocontacto = [
                    "name" => $inscription->name . " " . $inscription->surname,
                    "categoriename" => $categorie->name,
                ];
                
                $correo = new InscriptionMail($arreglocontacto);
                if (!Mail::to($inscription->email)->send($correo)) abort(500, 'Error al enviar el mail.');

                return redirect('/pre-inscripciones')->with('message', 'Has aprobado a '.$inscription->name.' '.$inscription->surname.'!');
            }
        }
    }
}
