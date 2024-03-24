'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  // Function to extract the first name from the full name
  const getFirstName = (fullName: string): string => {
    return fullName.split(' ')[0]
  }

  // Function to get the first letter of the first name in uppercase
  const getUserLogo = (fullName: string): string => {
    const firstName = getFirstName(fullName)
    return firstName.charAt(0).toUpperCase()
  }

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {/* {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })} */}
      {user && (
        <React.Fragment>
          <div className={classes.user}>
            <p className={classes.userLogo}>{getUserLogo(user.name)}</p>
            <p>{getFirstName(user.name)}</p>
          </div>
          <CartLink />
        </React.Fragment>
      )}
      {!user && (
        <React.Fragment>
          <Link className={classes.link} href="/login">
            Login
          </Link>
        </React.Fragment>
      )}
    </nav>
  )
}
