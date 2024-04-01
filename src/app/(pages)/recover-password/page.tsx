import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import ShayoDeyLogo from '../../../../public/icons/logo-black.svg'
import CampFireNight from '../../../../public/images/campfire-night.jpg'
import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { TransitionOpacityAlone } from '../../_utilities/transition'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <TransitionOpacityAlone>
      <section className={classes.container}>
        <div className={classes.background}>
          <picture>
            <img className={classes.image} alt="indoor party" src={CampFireNight.src} />
          </picture>
        </div>
        <div className={classes.recoverPassword}>
          <picture>
            <img className={classes.formBg} alt="shayo dey logo" src={ShayoDeyLogo.src} />
          </picture>

          <Link className={classes.logo} href="/">
            <picture>
              <img alt="shayo dey logo" src={ShayoDeyLogo.src} />
            </picture>
          </Link>
          <RecoverPasswordForm />
        </div>
      </section>
    </TransitionOpacityAlone>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
