import AppLayout from 'components/Layouts/AppLayout';
import Hero from 'components/Layouts/Hero';
import Slider from 'components/Slider';

const mockImagenes = [
  'elements/Remera frente 1.png',
  'elements/Remera Espalda 1.png',
  'elements/0_mockup 1.png',
  'elements/FLYERS 1.png',
  'elements/FLYERS 2.png',
  'elements/FLYERS 3.png',
  'elements/FLYERS 4.png'
]

function Home(categories, setcategories){

  return (
    <AppLayout>
      <div className="font-Hurme-Geometric-N min-h-screen">
        <div>
          <Hero categories={categories} setcategories={setcategories} />
        </div>
        <div className="px-3 md:px-12 py-7 ">
          <div className=' bg-gray rounded-lg text-black'>
            <div className='flex justify-center pt-5'>
              <Slider imagenes={mockImagenes} className='bg-white' />
            </div>
                    
            <div className='text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-blue-dark'>
              <h1 className=''>22 OCT / 11 HRS</h1>
              <h1>Sede Central - Neuquén Capital</h1>
            </div>

            <div className='py-5 text-sm'>
              <div className='px-5 sm:px-5 lg:px-16'>
                <p className='text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO'>Requisitos de la carrera</p>
                <h1 className=' bg-yellow py-1 w-1/6 mt-5'> </h1>
              </div>
              <div className="grid sm:grid-cols-2 px-5 lg:px-16">
                <div className="sm:px-5">
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Quien participa</h4>
                  <p className="">Toda persona que cumpla los requisitos de la inscripción. La modalidad de dicha carrera se va a dar en fomar individual.</p>
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">¿Como ganar?</h4>
                  <p>Los participantes deberan:</p>
                  <ul className='list-decimal pl-5'>
                    <li>Realizar el recorrido en el menor tiempo posible.</li>
                    <li>No podrán utilizar vehículos ni acortar el recorrido.</li>
                    <li>No se puede ser asistido por otras personas en competencia (fair play).</li>
                    <li>La largada será común para todas las distancias. Deberán seguir las marcas.</li>
                  </ul>
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Sevicios, Asistencia, Hidratacíon y Controles</h4>
                  <ul className='list-decimal pl-5'>
                    <li>En un punto intermedio del recorrido y en la llegada se montarán puestos de asistencia e hidratación.</li>
                    <li>A lo largo del recorrido se establecerán controles de paso de los corredores en donde habrá colaboradores con remeras.</li>
                  </ul>
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Remera de competencia y numero de identificacion de corredor</h4>
                  <p>La remera de corredor será de uso obligatorio con el número abrochado en el frente de la misma. Los participantes deberán hacer uso del chip, en el caso de que se utilice como sistema de clasificación.</p>
                </div>

                <div className="sm:px-5">
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Inscripciones</h4>
                  <p>El costo de la inscripción para cada distancia es el siguiente:</p>
                  <ul className='list-disc pl-5'>
                    <li>25km tiene un costo de $5500 por participante.</li>
                    <li>15km tiene un costo de $4000 por participante.</li>
                    <li>7km tiene un costo de $3000 por participante</li>
                    <li>3km tiene un costo de $2500 por participante. Es sin clasificación ni premiación.</li>
                  </ul>

                  <p className='pt-2'><span className='font-Hurme-Geometric-BO'>Incluye: </span>
                                    Derecho a participación / Remera técnica / servicios de control / servicio de hidratación seguro de corredor.
                  </p>
                  <p className='pt-1'><span className='font-Hurme-Geometric-BO'>ATENCIÓN COMUNIDAD UNIVERSITARIA: </span>
                                Presentado certificado de alumno regular, y en el caso de docentes y no docentes mediante número de legajo, acceden a precios promocionales. Enviar email a uncoactiva@gmail.com para recibir dicho beneficio.
                  </p>
                  <ul className='list-disc pl-5 pt-2'>
                    <li>25km tiene un costo de $5000 por participante.</li>
                    <li>15km tiene un costo de $3500 por participante.</li>
                    <li>7km tiene un costo de $2500 por participante</li>
                    <li>3km tiene un costo de $2000 por participante. Es sin clasificación ni premiación.</li>
                  </ul>
                  {/* <h4 className="text-blue-dark text-[2rem] py-3 font-bold font-Hurme-Geometric-BO"> Recorrido</h4>
                                <p>Tanto el recorrido de los 25km como el de 15km, será por senderos de barda y calles.  El recorrido de los 7km será por barda pero de dificultad baja. Y por último, los 3km de la caminata será por senderos accesibles casi sin desnivel.</p> */}
                  <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">MODO DE INSCRIPCIÓN:</h4>
                  <p className=''>Las inscripciones se realizan vía Internet en la web:
                                    Pago únicamente por transferencia:</p>
                  <ul className='list-none py-3'>
                    <li>Banco Credicoop Cooperativo Limitado</li>
                    <li>Adherente: Universidad Nacional del Comahue.</li>
                    <li>Operador: 549505 Roberto Antonio Sepulveda.</li>
                    <li>Nro Cuenta – Cuenta Corriente: $191-093-024908/9</li>
                    <li>CBU 19100933-55009302490896</li>
                  </ul>
                  <p>Se deberá enviar de manera obligatoria el comprobante de transferencia con todos los datos de la operación al mail <span className='text-board'>uncoactiva@gmail.com</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
