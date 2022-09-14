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
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const update = async (id) => {
    await axios.post(`${endpoint}/inscription/${id}`)
    getAllPreInscriptions()
  }

  const deleteInscription = async (id) => {
    await axios.delete(`${endpoint}/inscription/${id}`)
    getAllPreInscriptions()
  }

  return (
    <AppLayout>
      <div className='min-h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32'>
        <div className='justify-center bg-gray-light rounded-lg pb-2  w-full'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5  w-full'>PRE-INSCRIPTOS</h1>
          <div className='overflow-x-auto pb-5'>
            <table className='font-Hurme-Geometric-N w-full '>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th className=''>#</th>
                  <th className=''>#CATEGORIA</th>
                  <th className=''>NOMBRE APELLIDO</th>
                  <th className=''>DNI</th>
                  <th className=''>TELEFONO</th>
                  <th className=''>EMAIL</th>
                  <th className=''>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {PreInscriptions.map((PreInscription) => (
                  <>
                    {!PreInscription.billing_verified_at ?
                      <tr key={PreInscription.unic} className='bg-gray border-y border-blue-cyan '>
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
                        <td className='flex justify-center px-3'>
                          <button onClick={ () => update(PreInscription.id) } className='bg-yellow mx-1 px-2 my-1 rounded-full'>aceptar</button>
                          <button onClick={ () => deleteInscription(PreInscription.id)} className='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>rechazar</button>
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
        <div className='justify-center bg-gray-light rounded-lg pb-2 my-7'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5'>INSCRIPTOS</h1>
          <div className='overflow-x-auto pb-5'>
            <table className='font-Hurme-Geometric-N w-full px-1'>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th className=''>#</th>
                  <th className=''>#CATEGORIA</th>
                  <th className=''>NOMBRE APELLIDO</th>
                  <th className=''>DNI</th>
                  <th className=''>TELEFONO</th>
                  <th className=''>EMAIL</th>
                  <th className=''>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {PreInscriptions.map((PreInscription) => (
                  <>
                    {PreInscription.billing_verified_at ?
                      <tr key={PreInscription.unic} className='bg-gray border-y border-blue-cyan '>
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
                        <td className='flex justify-center px-3'>
                          <button onClick={ () => update(PreInscription.id)} className='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>
                                Desinscribir
                          </button>
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
      </div>
    </AppLayout>
  )
}

export default PreInscriptions