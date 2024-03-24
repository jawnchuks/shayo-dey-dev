import React from 'react'
import Link from 'next/link'

import ShayoDeyLogo from '../../../../public/icons/logo-white.svg'
import MasterCardLogo from '../../../../public/icons/Mastercard.png'
import VisaLogo from '../../../../public/icons/Visa.png'
import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <img className={classes.logo} alt="shayo dey logo" src={ShayoDeyLogo.src} />
          </picture>
        </Link>
        <nav className={classes.nav}>
          <h4>Company</h4>
          <Link href="/">Wholesale</Link>
          <Link href="/">About us</Link>
          <Link href="/">Terms of service</Link>
          <Link href="/">Privacy policy</Link>
          <Link href="/">Returns and refunds</Link>
        </nav>
        <nav className={classes.nav}>
          <h4>Follow us</h4>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
        </nav>
        <nav className={classes.nav}>
          <picture>
            <img className={classes.cards} alt="visa logo" src={VisaLogo.src} />
          </picture>
          <picture>
            <img className={classes.cards} alt="mastercard logo" src={MasterCardLogo.src} />
          </picture>
          <ThemeSelector />
        </nav>
      </Gutter>
    </footer>
  )
}
