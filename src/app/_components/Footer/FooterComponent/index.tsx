'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ShayoDeyLogo from '../../../../../public/icons/logo-white.svg'
import MasterCardLogo from '../../../../../public/icons/Mastercard.png'
import VisaLogo from '../../../../../public/icons/Visa.png'
import { Footer } from '../../../../payload/payload-types'
import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import Inclusions from '../Inclusions'

import classes from './index.module.scss'

type Props = {
  footer: Footer
}

function FooterComponent({ footer }: Props) {
  const pathname = usePathname()
  return (
    <section className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <Inclusions />
      </Gutter>
      <footer className={classes.footer}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            <picture>
              <img className={classes.logo} alt="shayo dey logo" src={ShayoDeyLogo.src} />
            </picture>
          </Link>
          <nav className={classes.nav}>
            <h4 className={classes.heading}>Company</h4>
            <Link href="/">Wholesale</Link>
            <Link href="/">About us</Link>
            <Link href="/">Terms of service</Link>
            <Link href="/">Privacy policy</Link>
            <Link href="/">Returns and refunds</Link>
          </nav>
          <nav className={classes.nav}>
            <h4 className={classes.heading}>Follow us</h4>
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
      <div className={classes.copyright}>
        <small>&copy; Shayo Dey {new Date().getFullYear()} | Designed by </small>
        <Link href="https://www.jawnchuks.github.io/">Jawn</Link>
      </div>
    </section>
  )
}

export default FooterComponent
