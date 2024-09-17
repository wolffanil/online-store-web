import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { SITE_DESCRIPTION } from '@/constants/seo.constants'

import { Button } from '../ui/Button'

import styles from './Hero.module.scss'

function Hero() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>
				Ваш шопинг, ваше удовольствие - <span>все в одином месте</span>
			</h1>
			<p className={styles.description}>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button variant='primary'>
					За покупками <ArrowRight />
				</Button>
			</Link>
		</div>
	)
}

export default Hero
