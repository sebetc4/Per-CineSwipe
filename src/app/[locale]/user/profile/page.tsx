import React from 'react'
import { LogoutButton } from './components'
import { Locale, PageProps } from '~/types'
import { getServerSession } from 'next-auth';

export default async function ProfilePage({ params: { locale } }: PageProps<{ locale: Locale }>) {
  
  const session = await getServerSession();
  
  return (
    <section>
      <h1>Page de profil</h1>
      <LogoutButton locale={locale}/>
    </section>
  )
}
