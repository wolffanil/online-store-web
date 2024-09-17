'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { API_URL } from '@/config/api.config'

import { Button } from '../ui/Button'

import styles from './Auth.module.scss'

function Social() {
	const router = useRouter()

	return (
		<div className={styles.social}>
			<Button
				variant='outline'
				onClick={() => router.push(`${API_URL}/auth/google`)}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>

			<Button
				variant='outline'
				onClick={() => router.push(`${API_URL}/auth/yandex`)}
			>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}

export default Social
