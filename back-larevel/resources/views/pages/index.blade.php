<x-layout>
        <div class="bg-unco font-sans min-h-screen bg-opacity-50 z-0 bg-unco">
            @auth
                <h1 class="ml-6 text-lg text-board">
                <span class="font-bold uppercase">
                    bienvenido {{auth()->user()->name}}    
                    </span>
                </h1>
            @endauth
            <div class="flex justify-center items-center h-screen w-full absolute top-0 z-0">
                <h1 class="text-[3rem] sm:text-[5rem] text-blue-cyan font-bold italic">Unco Activa</h1>
            </div>
        </div>
</x-layout>