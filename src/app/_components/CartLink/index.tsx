'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'

export const CartLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props
  const { cart } = useCart()
  const [length, setLength] = useState<number>()

  useEffect(() => {
    setLength(cart?.items?.length || 0)
  }, [cart])

  return (
    <Link className={[classes.cartLink, className].filter(Boolean).join(' ')} href="/cart">
      <Fragment>
        <svg
          className={classes.cartIcon}
          viewBox="-0.5 0 13 13"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              id="Path_2"
              data-name="Path 2"
              d="M106.974,837h-12l2-11.031h1.989a1.98,1.98,0,0,1,3.96,0h2.051Zm-6-12.011c-1.042-.01-1.04.338-1.04.98h2.049C101.983,825.367,102.013,825,100.974,824.989ZM102.925,827v.994h-.943V827H99.933v.994h-.974V827H97.848l-1.75,9h9.719l-1.75-9ZM101,824c-.021,0-.041.005-.062.006s-.041-.006-.063-.006Z"
              transform="translate(-94.974 -824)"
              fill="currentColor"
            ></path>{' '}
          </g>
        </svg>
        {typeof length === 'number' && length > 0 && (
          <small className={classes.quantity}>({length})</small>
        )}
      </Fragment>
    </Link>
  )
}
