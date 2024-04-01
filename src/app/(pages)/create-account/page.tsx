import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import ShayoDeyLogo from '../../../../public/icons/logo-black.svg'
import IndoorParty from '../../../../public/images/indoor-party.jpg'
import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { TransitionOpacityAlone } from '../../_utilities/transition'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <TransitionOpacityAlone>
      <section className={classes.container}>
        <div className={classes.background}>
          <picture>
            <img
              className={classes.image}
              alt="indoor party"
              src={IndoorParty.src}
              style={{ width: '100%', height: '100dvh', objectFit: 'cover' }}
            />
          </picture>
        </div>
        <div className={classes.createAccount}>
          <picture>
            <img className={classes.formBg} alt="shayo dey logo" src={ShayoDeyLogo.src} />
          </picture>
          <RenderParams className={classes.params} />
          <Link className={classes.logo} href="/">
            <picture>
              <img alt="shayo dey logo" src={ShayoDeyLogo.src} />
            </picture>
          </Link>
          <h5>Get Started</h5>
          <CreateAccountForm />
        </div>
      </section>
    </TransitionOpacityAlone>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
