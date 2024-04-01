'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ShayoDeyLogo from '../../../../../public/icons/logo-coloured.svg'
import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import HeaderMarquee from '../HeaderMarquee'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()

  return (
    <header
      className={(classes.container, noHeaderFooterUrls.includes(pathname) ? classes.hide : '')}
    >
      <HeaderMarquee />

      <nav className={classes.header}>
        <Gutter className={classes.wrap}>
          {/* add side menu icon on mobile/ tablet only when clicked will open the mobile menu */}
          <Link href="/">
            <img className={classes.logo} alt="Shayo dey Logo" src={ShayoDeyLogo.src} />
          </Link>
          <HeaderNav header={header} />
        </Gutter>
      </nav>
    </header>
  )
}

export default HeaderComponent
