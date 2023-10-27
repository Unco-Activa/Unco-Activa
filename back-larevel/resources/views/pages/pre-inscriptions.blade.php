<x-layout>
    <div class='bg-pre min-h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32 bg-gray-darker'>
        <div class='justify-center bg-white rounded-lg pb-2  w-full'>
            <h1
                class='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5 font-bold italic w-full'>
                PRE-INSCRIPTOS</h1>
            <div class="grid sm:flex items-center">
                @include('partials._search')
                <div class="flex items-center pl-2 sm:pl-0 py-1">
                    <a href="/pre-inscripciones">
                        <button type="submit"
                            class="h-10 px-2 text-gray-light rounded-lg bg-blue-high hover:bg-blue-cyan">
                            Restablecer
                        </button>
                    </a>
                </div>
            </div>
            <div class='m-3'>
                <p class='font-Hurme-Geometric-BO italic font-bold text-red-700'>
                  <span class="text-bold text-[1.4em]">
                    Cupos Disponibles:
                  </span>
                  |
                  @foreach ($categories as $categorie)
                  <span class="text-[1.3em] text-blue-500">
                    Prueba: {{ $categorie->name }} :
                  </span>
                  <span class=" text-blue-800">
                    {{ $categorie->quotas }} cupos
                  </span>
                  |
                  @endforeach
                </p>
            </div>
            <div class='overflow-x-auto pb-4'>
                <table class='font-Hurme-Geometric-N w-full'>
                    <thead>
                        <tr class='font-Hurme-Geometric-BO italic text-blue-dark'>
                            <th class='px-3'>#</th>
                            <th class='px-3'>#CATEGORIA</th>
                            <th class='px-3'>NOMBRE APELLIDO</th>
                            <th class='px-3'>DNI</th>
                            <th class='px-3'>ARCHIVOS</th>
                            <th class='px-3'>EMAIL</th>
                            <th class='px-3'>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($preInscriptions as $preInscription)
                            @if (!$preInscription->billing_verified_at)
                                <tr class='bg-gray-light border-y border-blue-cyan'>
                                    <td class='px-3'>
                                        {{ $preInscription->id }}
                                    </td>
                                    @foreach ($categories as $cat)
                                        @if ($preInscription->race_categorie_id === $cat->id)
                                            <td class='px-3'>
                                                {{ $cat->name }}
                                            </td>
                                        @endif
                                    @endforeach
                                    <td class='px-3'>
                                        {{ $preInscription->name }} {{ $preInscription->surname }}
                                    </td>
                                    <td class='px-3'>
                                        {{ $preInscription->dni }}
                                    </td>
                                    <td class='px-3'>
                                        <div class="grid">
                                            <a class="text-blue-high hover:text-board text-base font-semibold "
                                                href="{{ asset($preInscription->files) }}" target="_blank">Comprobate
                                            </a>
                                            @if ($preInscription->promo)
                                                <a class="text-blue-high hover:text-board text-base font-semibold "
                                                    href="{{ asset($preInscription->promo) }}"
                                                    target="_blank">Certificado
                                                </a>
                                            @else
                                                <p>Sin Promo</p>
                                            @endif
                                        </div>
                                    </td>
                                    <td class='px-3'>
                                        {{ $preInscription->email }}
                                    </td>
                                    <td class='flex justify-center px-3'>
                                        <a href="inscription/{{ $preInscription->id }}">
                                            <button
                                                class="bg-board text-gray-light mx-1 px-2 my-1 rounded-full">aceptar</button>
                                        </a>
                                        <a href="inscriptionDelete/{{ $preInscription->id }}">
                                            <button
                                                class="bg-yellow text-gray-darker mx-1 px-2 my-1 rounded-full">rechazar</button>
                                        </a>
                                    </td>
                                </tr>
                            @endif
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="text-blue-high px-3">
                {{ $preInscriptions->links() }}
            </div>
        </div>
    </div>
</x-layout>
