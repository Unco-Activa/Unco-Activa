import { useState, useEffect } from 'react'
import axios from 'axios'
import AppLayout from 'components/Layouts/AppLayout'
import React from 'react'
// import { useAuth } from 'hooks/auth'

const PreInscriptions = () => {

  const [PreInscriptions, setPreInscriptions] = useState([])
  const [Categories, setCategories] = useState([])
  const endpoint = 'http://127.0.0.1:8000/api'
  useEffect(() => {
    getAllPreInscriptions()
    getAllCategories()
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

  const getAllCategories = async () => {
    await axios.get(`${endpoint}/categories`)
      .then(function (response) {
        setCategories(response.data)
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const update = async (id) => {
    await axios.post(`${endpoint}/inscription/${id}`)
    getAllPreInscriptions()
    getAllCategories()
  }

  const deleteInscription = async (id) => {
    await axios.delete(`${endpoint}/inscription/${id}`)
    getAllPreInscriptions()
    getAllCategories()
  }

  /* const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: '/Pre-inscripciones' })
  const eMail = user?.email
  if(eMail !== 'uncoactiva@gmail.com'){
    window.location.pathname = '/'
  } */
  
  return (
    <AppLayout>
      <div className='min-h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32'>
        <div className='justify-center bg-gray-light rounded-lg pb-2  w-full'>
          <h1 className='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5  w-full'>PRE-INSCRIPTOS</h1>
          <div className='overflow-x-auto pb-5'>
            <div className='px-3 font-Hurme-Geometric-BO'>
              <p className='text-blue-high'>Cupos Disponibles:</p>
              {Categories.map((categorie) => (
                <>
                  <span className={`text-[${categorie.color}]`}>{categorie.name}</span>:
                  <span className='font-Hurme-Geometric-N px-1'>{categorie.quotas}</span>
                </>
              ))}
            </div>
            <table className='font-Hurme-Geometric-N w-full '>
              <thead>
                <tr className='font-Hurme-Geometric-BO text-blue-dark'>
                  <th className='px-3'>#</th>
                  <th className='px-3'>#CATEGORIA</th>
                  <th className='px-3'>NOMBRE APELLIDO</th>
                  <th className='px-3'>DNI</th>
                  <th className='px-3'>TELEFONO</th>
                  <th className='px-3'>EMAIL</th>
                  <th className='px-3'>OPCIONES</th>
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
                      <tr>
                        <td></td>
                      </tr>
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
                  <th className='px-3'>#</th>
                  <th className='px-3'>#CATEGORIA</th>
                  <th className='px-3'>NOMBRE APELLIDO</th>
                  <th className='px-3'>DNI</th>
                  <th className='px-3'>TELEFONO</th>
                  <th className='px-3'>EMAIL</th>
                  <th className='px-3'>OPCIONES</th>
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