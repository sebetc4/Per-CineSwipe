'use client'
import { signOut } from 'next-auth/react'
import React from 'react'
import { Locale, Path } from '~/types';

type LogoutButtonProps = {
    locale: Locale;
}


export const LogoutButton = ({locale}: LogoutButtonProps) => {
 
  const handleClick = () => signOut({callbackUrl: `/${locale}${Path.HOME}`})

  return (
    <button onClick={handleClick}> 
        Déconnexion
    </button>
  )
}
