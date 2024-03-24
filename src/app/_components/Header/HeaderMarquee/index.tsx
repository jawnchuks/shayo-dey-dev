'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import classes from './index.module.scss'

const marqueeItems = [
    '🆘 Oops... We ordered too much! Get up to 35% off.',
    '🚚 Free same-day delivery for orders ≥ $69 placed by 4pm on weekdays!',
    '🍺 Not sure where to start?',
]

const HeaderMarquee: React.FC = () => {
    const [currentItem, setCurrentItem] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentItem(prevItem => (prevItem + 1) % marqueeItems.length)
        }, 6000)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence initial={false} mode="wait">
            <motion.ul key={currentItem} className={classes.ul}>
                <motion.li
                    key={currentItem}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Link className={classes.link} href="/">
                        {marqueeItems[currentItem]}
                    </Link>
                </motion.li>
            </motion.ul>
        </AnimatePresence>
    )
}

export default HeaderMarquee
