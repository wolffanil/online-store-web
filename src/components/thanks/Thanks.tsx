import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import styles from '../hero/Hero.module.scss'
import { Button } from '../ui/Button'

function Thanks() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>Спасибо за покупку</h1>
			<p className={styles.description}>
				Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все
				услилия, чтобы доставить ваш заказ как можно скорее.
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant='primary'>
					На главную <ArrowRight />
				</Button>
			</Link>
		</div>
	)
}

export default Thanks
