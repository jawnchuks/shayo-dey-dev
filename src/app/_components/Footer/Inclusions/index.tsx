import React from 'react'
import Image from 'next/image'

import { inclusions } from '../../../constants'

import classes from './index.module.scss'

type Props = {}

function Inclusions({}: Props) {
  return (
    <ul className={classes.inclusions}>
      {inclusions.map((inclusion, index) => (
        <li className={classes.card} key={inclusion.title}>
          <Image
            src={inclusion.icon}
            alt={inclusion.title}
            width={52}
            height={52}
            className={classes.icon}
          />
          <h6>{inclusion.title}</h6>
          <p>{inclusion.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Inclusions
