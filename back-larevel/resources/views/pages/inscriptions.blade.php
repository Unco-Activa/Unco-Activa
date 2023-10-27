<x-layout>
  <div class='bg-pre min-h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32 bg-gray-darker'>
    <div class='justify-center bg-white rounded-lg pb-2 my-7'>
      <h1 class='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO font-bold italic text-blue-dark py-5'>INSCRIPTOS</h1>
      <div class="grid sm:flex items-center">
        @include('partials._search-i')
        <div class="flex items-center sm:justify-between w-full pl-2 sm:pl-0 py-1">
          <a href="/inscripciones" >
            <button
              type="submit"
              class="h-10 px-2 text-gray-light rounded-lg bg-blue-high hover:bg-blue-cyan">
              Restablecer
            </button>
          </a>
          <a href="/inscripciones/export" class="pl-1 sm:px-2" >
            <button
              type="submit"
              class="h-10 px-2 text-gray-light rounded-lg bg-blue-high hover:bg-blue-cyan">
              exportar 
            </button>
          </a>
        </div>
      </div>
      <div class='overflow-x-auto pb-5'>
        <table class='font-Hurme-Geometric-N w-full px-1'>
          <thead>
            <tr class='font-Hurme-Geometric-BO italic text-blue-dark'>
              <th class='px-3'>#</th>
              <th class='px-3'>#CATEGORIA</th>
              <th class='px-3'>NOMBRE APELLIDO</th>
              <th class='px-3'>DNI</th>
              <th class='px-3'>F.NAC</th>
              <th class='px-3'>TELEFONO</th>
              <th class='px-3'>ARCHIVOS</th>
              <th class='px-3'>EMAIL</th>
              <th class='px-3'>GENERO</th>
              <th class='px-3'>OPCIONES</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($inscriptions as $inscription)
              @if($inscription->billing_verified_at)
                <tr class='bg-gray-light border-y border-blue-cyan '>
                  <td class='px-3'>
                    {{$inscription->id}}
                  </td>
                  @foreach($inscriptionCategories as $cat)
                    @if($inscription->race_categorie_id === $cat->id)
                      <td class='px-3' >
                        {{$cat->name}}
                      </td>
                    @endif
                  @endforeach
                  <td class='px-3' >
                    {{$inscription->name}} {{$inscription->surname}}
                  </td>
                  <td class='px-3' >
                    {{$inscription->dni}}
                  </td>
                  <td class='px-3' >
                    {{$inscription->birth}}
                  </td>
                  <td class='px-3' >
                    {{$inscription->phone}}
                  </td>
                  <td class='px-3' >
                    <div class="grid">
                      <a class="text-blue-high hover:text-board text-base font-semibold " 
                        href="{{asset($inscription->files)}}"
                        target="_blank">Comprobate
                      </a>
                      @if($inscription->promo)
                        <a class="text-blue-high hover:text-board text-base font-semibold "
                          href="{{asset($inscription->promo)}}"
                          target="_blank">Certificado
                        </a>
                      @else
                        <p>Sin Promo</p>
                      @endif
                    </div>
                  </td>
                  <td class='px-3' >
                    {{$inscription->email}}
                  </td>
                  <td class='px-3' >
                    {{$inscription->gender}}
                  </td>
                  <td class='flex justify-center px-3'>
                    <a href="inscription/{{$inscription->id}}">
                      <button class='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>
                            Desinscribir
                      </button>
                    </a>
                  </td>
                </tr>
              @endif
            @endforeach
          </tbody>
        </table>
      </div>
      <div class="text-blue-high pt-3 px-3">
        {{$inscriptions->links()}}
      </div>
    </div>
  </div>
</x-layout>