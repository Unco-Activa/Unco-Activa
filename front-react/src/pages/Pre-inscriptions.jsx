import { useState, useEffect } from 'react'
import axios from 'axios'
import AppLayout from 'components/Layouts/AppLayout'
import React from 'react'

const PreInscriptions = () => {
  const [PreInscriptions, setPreInscriptions] = useState([])
  const endpoint = 'http://127.0.0.1:8000/api'
  useEffect(() => {
    getAllPreInscriptions()
  }, [])
  const getAllPreInscriptions = async () => {
    await axios.get(`${endpoint}/inscriptions`)
      .then(function (response) {
        setPreInscriptions(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <AppLayout>
      <>
      <div className='h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32'>
        <div className='grid justify-center bg-gray rounded-lg pb-2'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5'>PRE-INSCRIPCIONES</h1>
          <div className='overflow-x-auto pb-5'>
            <table className='font-Hurme-Geometric-N '>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th className='px-3'>#</th>
                  <th className='px-3'>#CATEGORIA</th>
                  <th className='px-3'>NOMBRE APELLIDO</th>
                  <th className='px-3'>DNI</th>
                  <th className='px-3'>TELEFONO</th>
                  <th className='px-3'>EMAIL</th>
                  <th className='px-3'>DIRECCION</th>
                  <th className='px-3'>CIUDAD</th>
                  <th className='px-3'>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {PreInscriptions.map((PreInscription) => (
                  <>
                    {!PreInscription.billing_verified_at ?
                      <tr key={PreInscription.unic}>
                        <td className='px-3'>
                          {PreInscription.id}
                        </td>
                        <td className='px-3' >
                          {PreInscription.categorie_name}
                        </td>
                        <td className='px-3' >
                          {PreInscription.name} {PreInscription.surname}
                        </td>
                        <td className='px-3 py-1' >
                          {PreInscription.dni}
                        </td>
                        <td className='px-3' >
                          {PreInscription.phone}
                        </td>
                        <td className='px-3' >
                          {PreInscription.email}
                        </td>
                        <td className='px-3'>
                          {PreInscription.address}
                        </td>
                        <td className='px-3' >
                          {PreInscription.city}
                        </td>
                        <td className='px-3'>
                          <form>
                            <button className='bg-yellow mx-1 px-2 my-1 rounded-full'>aceptar</button>
                          </form>
                          <form>
                            <button className='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>rechazar</button>
                          </form>
                        </td>
                      </tr>
                      :
                      <tr></tr>
                    }
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='grid justify-center bg-gray rounded-lg pb-2 my-7'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5'>INSCRIPCIONES</h1>
          <div className='overflow-x-auto pb-5'>
            <table className='font-Hurme-Geometric-N '>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th className='px-3'>#</th>
                  <th className='px-3'>#CATEGORIA</th>
                  <th className='px-3'>NOMBRE APELLIDO</th>
                  <th className='px-3'>DNI</th>
                  <th className='px-3'>TELEFONO</th>
                  <th className='px-3'>EMAIL</th>
                  <th className='px-3'>DIRECCION</th>
                  <th className='px-3'>CIUDAD</th>
                  <th className='px-3'>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {PreInscriptions.map((PreInscription) => (
                  <>
                    {PreInscription.billing_verified_at ?
                      <tr key={PreInscription.unic}>
                        <td className='px-3'>
                          {PreInscription.id}
                        </td>
                        <td className='px-3' >
                          {PreInscription.categorie_name}
                        </td>
                        <td className='px-3' >
                          {PreInscription.name} {PreInscription.surname}
                        </td>
                        <td className='px-3' >
                          {PreInscription.dni}
                        </td>
                        <td className='px-3' >
                          {PreInscription.phone}
                        </td>
                        <td className='px-3' >
                          {PreInscription.email}
                        </td>
                        <td className='px-3'>
                          {PreInscription.address}
                        </td>
                        <td className='px-3' >
                          {PreInscription.city}
                        </td>
                        {/* <td className='px-3'>
                          <button className='bg-yellow mx-1 px-2 my-1 rounded-full'>aceptar</button>
                          <button className='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>rechazar</button>
                        </td> */}
                      </tr>
                      :
                      <tr></tr>
                    }
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
      
      </>
    </AppLayout>
  )
}

export default PreInscriptions