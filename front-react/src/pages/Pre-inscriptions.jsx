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
      })
      .catch(function (error) {
        console.error('error', error.response);
      });
  }
  return (
    <AppLayout>
      <div className='min-h-screen py-7 px-2 sm:px-10'>
        <div className='grid justify-center bg-gray rounded-lg'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5'>PRE-INSCRIPCIONES</h1>
          <div className='overflow-x-scroll pb-5'>
            <table className='font-Hurme-Geometric-N '>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th>#</th>
                  <th>#CATEGORIA</th>
                  <th>NOMBRE APELLIDO</th>
                  <th>DNI</th>
                  <th>TELEFONO</th>
                  <th>EMAIL</th>
                  <th>DIRECCION</th>
                  <th>CIUDAD</th>
                  <th>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {PreInscriptions.map((PreInscription) => (
                  <>
                    {!PreInscription.billing_verified_at ?
                      <tr key={PreInscription.id}>
                        <td className='px-3'>
                          {PreInscription.id}
                        </td>
                        <td className='px-3' key={PreInscription.race_categorie_id}>
                          {PreInscription.race_categorie_id}
                        </td>
                        <td className='px-3'>
                          {PreInscription.name} {PreInscription.surname}
                        </td>
                        <td className='px-3 py-1'>
                          {PreInscription.dni}
                        </td>
                        <td className='px-3'>
                          {PreInscription.phone}
                        </td>
                        <td className='px-3' key={PreInscription}>
                          {PreInscription.email}
                        </td>
                        <td className='px-3'>
                          {PreInscription.address}
                        </td>
                        <td className='px-3'>
                          {PreInscription.city}
                        </td>
                        <td className='px-3'>
                          <button className='bg-yellow mx-1 px-2 my-1 rounded-full'>aceptar</button>
                          <button className='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>rechazar</button>
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