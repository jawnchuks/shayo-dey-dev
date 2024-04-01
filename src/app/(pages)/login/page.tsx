import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import ShayoDeyLogo from '../../../../public/icons/logo-black.svg'
import IndoorPartyGroup from '../../../../public/images/indoor-party-group.jpg'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { TransitionOpacityAlone } from '../../_utilities/transition'
import LoginForm from './LoginForm'

import classes from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <TransitionOpacityAlone>
      <section className={classes.container}>
        <div className={classes.background}>
          <picture>
            <img className={classes.image} alt="indoor party" src={IndoorPartyGroup.src} />
          </picture>
        </div>
        <div className={classes.login}>
          <picture>
            <img className={classes.formBg} alt="shayo dey logo" src={ShayoDeyLogo.src} />
          </picture>
          <RenderParams className={classes.params} />
          <Link className={classes.logo} href="/">
            <picture>
              <img alt="shayo dey logo" src={ShayoDeyLogo.src} />
            </picture>
          </Link>
          <h5>Welcome</h5>
          <LoginForm />
        </div>
      </section>
    </TransitionOpacityAlone>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
