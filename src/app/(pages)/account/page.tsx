import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>Персональна інформація</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Акаунт',
  description: 'Створіть обліковий запис або увійдіть до наявного облікового запису.',
  openGraph: mergeOpenGraph({
    title: 'Акаунт',
    url: '/account',
  }),
}