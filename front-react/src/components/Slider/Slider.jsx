import React from 'react'
// import styles from './Slider.module.css'

function Slider({imagenes}){
  //Variables y estados
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  //Retorno prematuro para evitar errores.
  if(!Array.isArray(imagenes) || cantidad === 0) 
    return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual ===  cantidad - 1 ? 0 : imagenActual + 1);
  }

  const anteriorImagen = () => {
    setImagenActual(imagenActual ===  0 ? cantidad - 1 : imagenActual - 1);
  }

  return (
    <div className=''>
      <h1 className='text-center text-[2rem]  md:text-[2.5rem] font-Hurme-Geometric-BO text-blue-dark' fill='currentColor'>50 AÑOS CARRERA UNIVERSITARIO</h1>
      <div className='flex align-center items-center justify-center text-gray '>
        <div className='relative flex flex-row justify-between w-52 h-52 sm:w-96 lg:w-[500px] lg:h-[500px] sm:h-96 items-center overflow-hidden'>
          <button className='bg-gray-darker hover:bg-blue-cyan bg-opacity-70 h-10 w-10 rounded-full hover:text-gray-light z-20' onClick={anteriorImagen}>{/* ↶ */}{'<'}</button>
          {imagenes.map((imagen, index) => {
            return <img 
              key={index} 
              src={imagen}
              className={`absolute transition-all duration-[1600ms] ${imagenActual === index ? ' left-0 opacity-100' : ' left-full opacity-5'}`}
              alt="imagen"/>
          })}
          <button className='bg-gray-darker hover:bg-blue-cyan bg-opacity-70 px-3 h-10 w-10 rounded-full hover:text-gray-light z-20' onClick={siguienteImagen}>{/* ↷ */}{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Slider