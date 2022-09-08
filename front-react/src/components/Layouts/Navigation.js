import ApplicationLogo from 'components/ApplicationLogo'
import Dropdown from 'components/Dropdown'
import ResponsiveNavLink, { ResponsiveNavButton } from 'components/ResponsiveNavLink'
import DropdownLink, { DropdownButton } from 'components/DropdownLink'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import CustomNavLink from 'components/NavLink';
import {NavLink} from 'react-router-dom';

const Navigation = ({ user }) => {
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    // <div className='  '>
    <nav className="bg-gray-darker  sticky top-0 z-50">
      {/* Primary Navigation Menu */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-light" />
              </NavLink>
            </div>
            {/* Navigation Links */}
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <CustomNavLink
                to="/"
              >
                Inicio
              </CustomNavLink>
            </div>
          </div>
          {/* Settings Dropdown */}
          {user ?
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <Dropdown
                align="right"
                width="48"
                trigger={
                  <button className="flex items-center text-sm font-medium text-gray
                  hover:text-gray-light focus:outline-none transition duration-150 ease-in-out">
                    <div>{user?.name}</div>
                    <div className="ml-1">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          // eslint-disable-next-line max-len
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                }>
                <DropdownLink
                  to="/Pre-inscripciones"
                >
                  Pre-inscripciones
                </DropdownLink>
                {/* Authentication */}
                <DropdownButton onClick={logout}>
                  Cerrar Sesion
                </DropdownButton>
              </Dropdown>
            </div>
            :
            <>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <CustomNavLink
                  to="/login"
                  className="ml-4 text-sm text-gray underline"
                >
                  Iniciar Sesion
                </CustomNavLink>
                <CustomNavLink
                  to="/register"
                  className="ml-4 text-sm text-gray underline"
                >
                  Registrate
                </CustomNavLink>
              </div>
            </>
          }
          {/* Hamburger */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(open => !open)}
              className="inline-flex items-center justify-center p-2
              rounded-md text-gray hover:text-gray-darker
              hover:bg-gray-light focus:outline-none focus:bg-gray-light
              focus:text-gray-darker transition duration-150 ease-in-out">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block sm:hidden border-t border-gray">
          {!user ?
            <div className="pt-2 pb-3 space-y-1">
              <ResponsiveNavLink
                to="/"
              >
                Inicio
              </ResponsiveNavLink>
              <ResponsiveNavLink
                to="/login"
              >
                Iniciar Sesion
              </ResponsiveNavLink>
              <ResponsiveNavLink
                to="/register"
              >
                Registrate
              </ResponsiveNavLink>
            </div>
            :
            <>
              {/* Responsive Settings Options */}
              <div className="pt-4 pb-1">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-10 w-10 fill-current text-gray"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-base text-gray">
                      {user?.name}
                    </div>
                    <div className="font-medium text-sm text-gray">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="pt-2 pb-3 space-y-1">
                  <ResponsiveNavLink
                    to="/"
                  >
                    Home
                  </ResponsiveNavLink>
                  <ResponsiveNavLink
                    to="/Pre-inscripciones"
                  >
                    Pre-inscripciones
                  </ResponsiveNavLink>
                  {/* Authentication */}
                  <ResponsiveNavButton onClick={logout}>
                    Cerrar Sesion
                  </ResponsiveNavButton>
                </div>
              </div>
            </>
          }
        </div>
      )}
    </nav>
    // </div>
  )
}

export default Navigation
