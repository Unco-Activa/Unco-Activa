import AlertSuccess from "components/alerts/AlertSuccess";
import ContacUs from "components/home/ContacUs";
import RacePath from "components/home/RacePath";
import ShortRegulation from "components/home/ShortRegulation";
import Hero from "components/Layouts/Hero";
import Slider from "components/Slider";

import { useState } from "react";
import { Link } from "react-router-dom";
import { AccessAlarm, Event, LocationOn } from "@mui/icons-material";
import { Fab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const mockImagenes = [
    "elements/camiseta-2023.jpg",
    "elements/unco-activa2023.jpeg",
    "elements/edicion-anterior1.jpeg",
    "elements/edicion-anterior2.jpeg",
    "elements/edicion-anterior3.jpeg",
    "elements/edicion-anterior4.jpeg",
    "elements/edicion-anterior5.jpeg",
    "elements/edicion-anterior6.jpeg",
    "elements/edicion-anterior7.jpeg",
    "elements/edicion-anterior8.jpeg",
    "elements/edicion-anterior9.jpeg",
    // 'elements/edicion20211210_190204.mp4'
];
const isdateOfRace = Date.now() > new Date("October 27, 2023 11:59:59");

const Home = () => {
    const [openEnd, setopenEnd] = useState(!isdateOfRace);
    return (
        <div className="font-Hurme-Geometric-R min-h-screen">
            <AlertSuccess
                open={openEnd}
                onClose={setopenEnd}
                bg=" rgb(240 240 240)"
                titlecolor="warning.main"
                title={<span className="font-semibold text-red-high">¡Atención Participantes!</span>}
                description={
                    <div>
                        <p className="text-center">
                            <span className="text-[1.4rem] text-red-700 font-bold py-4 font-Hurme-Geometric-BO">¡CARRERA REPROGRAMADA!</span><br/>
                            <span className="text-[1.4rem] text-blue-high font-bold py-4 font-Hurme-Geometric-BO">¡29/10 - 9 AM!</span>
                        </p>
                        <p>
                            <span className="text-[1rem] text-blue-500 py-4 font-Hurme-Geometric-BO flex">
                                Habida cuenta del alerta meteorológico por lluvias y ráfagas de vientos de hasta 120 km/h que se preveen para este viernes y sábado, la carrera se pospone para el mismo Domingo 29 del corriente a las 9 AM.
                            </span>
                        </p>
                        <span className="text-[1.1rem] text-blue-high font-normal py-4 font-Hurme-Geometric-BO">Deben realizar la acreditación y registro el día:</span>
                        <ul className="text-center pt-3">
                            <li>
                                <Event color="primary" /> Sábado 28 de Octubre
                            </li>
                            <li>
                                <AccessAlarm color="primary" /> De 12:00 a 16:00 hs
                            </li>
                            <li>
                                <LocationOn color="primary" /> Gimnasio Polideportivo Roberto Monteros (Escondido)
                            </li>
                        </ul>
                        <span className="text-[1rem] text-cyan-700 pt-6 font-Hurme-Geometric-BO flex">
                            <img src="../elements/botella.svg" alt="Botella" className="mr-2 w-24"/>
                             Además, queremos fomentar el cuidado del medio ambiente, por lo que te animamos a que traigas tu propia botella de agua. Con tu ayuda, reduciremos al mínimo el uso de envases desechables.
                        </span>
                    </div>
                }
            />
            <div>
                <Hero />
            </div>
            <div className="px-3 md:px-12 py-7  ">
                <div className=" bg-gray-light rounded-lg text-black">
                    <div className="flex justify-center pt-5">
                        <Slider imagenes={mockImagenes} className="bg-white" />
                    </div>

                    <div id="conoceMas" className="text-[1.8rem] text-center p-5 font-Hurme-Geometric-BO text-blue-dark">
                        <h1 className="">DOMINGO 29 OCT / 09:00 HRS</h1>
                        <h1>Universidad Nacional del Comahue - Neuquén Capital</h1>
                    </div>

                    <div className="py-5 ">
                        <div className="px-5 sm:px-5 lg:px-16">
                            <p className="text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO">Requisitos de la carrera</p>
                            <h1 className=" bg-yellow py-1 w-1/6 mt-5"> </h1>
                        </div>
                        <div className="grid sm:grid-cols-2 px-5 lg:px-16">
                            <div className="sm:px-5">
                                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Quién participa</h4>
                                <p className="">Toda persona que cumpla los requisitos de la inscripción. La modalidad de dicha carrera se va a dar en forma individual.</p>
                                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">¿Cómo ganar?</h4>
                                <p>Los y las participantes deberán:</p>
                                <ul className="list-decimal pl-5">
                                    <li>Realizar el recorrido en el menor tiempo posible.</li>
                                    <li>No podrán utilizar vehículos ni acortar el recorrido.</li>
                                    <li>No se puede ser asistido por otras personas en competencia (fair play).</li>
                                    <li>La largada será común para todas las distancias. Deberán seguir las marcas.</li>
                                </ul>
                                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Servicios, Asistencia, Hidratación y Controles</h4>
                                <ul className="list-decimal pl-5">
                                    <li>En un punto intermedio del recorrido y en la llegada se montarán puestos de asistencia e hidratación.</li>
                                    <li>A lo largo del recorrido se establecerán controles de paso de los corredores y las corredoras en donde habrá colaboradores con remeras.</li>
                                </ul>
                                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Remera de competencia y número de identificación de corredor</h4>
                                <p>La remera de corredor será de uso obligatorio con el número abrochado en el frente de la misma. Los participantes deberán hacer uso del chip, en el caso de que se utilice como sistema de clasificación.</p>
                            </div>

                            <div className="sm:px-5">
                                <h4 className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-BO">Acreditaciones: </h4>
                                <p>
                                    El participante deberá asistir a las acreditaciones, el día: <span className="text-[1.2rem] text-blue-high font-bold py-5 font-Hurme-Geometric-N">Sábado 28 de Octubre de 12 a 16 hs.</span> <strong className="text-rose-500 font-extrabold text-[1.4em] font-Hurme-Geometric-BO">Lugar: Gimnasio polideportivo Roberto Monteros (Escondido) predio de la UNCO - Neuquén Capital!</strong>
                                </p>
                                <p>La remera de corredor será de uso obligatorio con el número abrochado en el frente de la misma. Los participantes deberán hacer uso del chip, en el caso de que se utilice como sistema de clasificación.</p>
                                <p>Para retirar su remera, número y chip, y firmar el deslinde de responsabilidad.</p>
                                <h4 className="text-[1.2rem] text-blue-high font-bold pt-5 font-Hurme-Geometric-BO">Inscripciones</h4>
                                <p>El costo de la inscripción para cada distancia es el siguiente:</p>
                                <ul className="list-disc pl-5">
                                    <p className="font-bold">Hasta el 30 de Septiembre (o hasta cubrir el cupo):</p>
                                    <li>15 km tiene un costo de $6800 por participante.</li>
                                    <li>7 km tiene un costo de $4800 por participante</li>
                                    <li>3 km tiene un costo de $2800 por participante. Es sin clasificación ni premiación.</li>
                                    <br></br>
                                    <p className="font-bold">A partir del 1 de Octubre:</p>
                                    <li>15 km tiene un costo de $7800 por participante.</li>
                                    <li>7 km tiene un costo de $5800 por participante</li>
                                    <li>3 km tiene un costo de $3800 por participante. </li>
                                </ul>

                                <p className="pt-2">
                                    <span className="font-Hurme-Geometric-N">Incluye: </span>
                                    Derecho a participación / Remera técnica / Servicios de control / Servicio de hidratación seguro de corredor.
                                </p>

                                <div className="flex xl:pt-8 xl:pb-1 justify-center xl:my-0 my-5 px-2 -z-0 relative">
                                    <Fab color="primary" variant="extended" size="small" href={"/inscribirse"}>
                                        <LibraryBooksOutlinedIcon className="mr-3" /> Ir a Inscripciones
                                    </Fab>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 sm:px-5 lg:px-16 pt-10">
                            <p className="text-blue-dark text-3xl sm:text-4xl font-bold font-Hurme-Geometric-BO">Premiación categorías de los 15 y 7 KM:</p>
                            <h1 className=" bg-yellow py-1 w-1/6 mt-5"> </h1>
                        </div>
                        <div className="grid sm:grid-cols-2 px-5 lg:px-16">
                            <div className="sm:px-5">
                                <p className="text-[1.2rem] text-blue-high pt-5 font-Hurme-Geometric-BO">Premiación por categoría por edades, tanto en la rama femenina y masculina</p>
                                <ul className="list-disc pl-5 pt-2">
                                    <li>Hasta 19 años</li>
                                    <li>Hasta 29 años</li>
                                    <li>Hasta 39 años</li>
                                    <li>Hasta 49 años</li>
                                    <li>Hasta 59 años</li>
                                    <li>+ 60 años</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-center pb-5">
                        <h1 className="text-center text-[2rem]  md:text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark" fill="currentColor">
                            ORGANIZADORES
                        </h1>

                        <div id="racePath" className="grid grid-cols-5 gap-4 items-center justify-center p-5">
                            <img className="col-span-1 h-24 md:h-[180px] justify-self-end" alt="Dirección de deportes y recreación" src={"/logos/Logo Dirección de Deportes y Recreación 4-10.png"} />
                            <img className="col-span-1 h-24 md:h-[180px] justify-self-center " alt="Unco" src={"/logos/LOGO UNCO PNG.png"} />

                            <img className="col-span-1 h-24 md:h-[180px] justify-self-start bg-gray-darker" alt="Secretaria de Bienestar Universitario" src={"/logos/Secretaria_de_bienestar_universitario.png"} />
                            <img className="col-span-1 h-24 md:h-[180px] justify-self-start bg-gray-darker" alt="logo deportes" src={"/logos/logo_deporte.png"} />
                            <img className="col-span-1 h-24 md:h-[180px] justify-self-start bg-gray-darker" alt="logo anaar" src={"/logos/Anaar.png"} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <RacePath />
            <ShortRegulation />
            <div id="contactUs" className="flex justify-center px-3 md:px-12 py-7 ">
                <ContacUs />
            </div>
        </div>
    );
};

export default Home;
