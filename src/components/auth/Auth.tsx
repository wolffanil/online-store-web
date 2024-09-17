'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '../ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '../ui/Card'
import { Form } from '../ui/Form'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import Social from './Social'
import { useAuthForm } from './useAuthForm'

function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { form, isPending, onSubmit } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src='/images/auth.svg'
					alt='TeaShop auth'
					width={100}
					height={100}
					priority
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
						</CardTitle>
						<CardDescription>
							Войти или создать учетную запись, чтобы оформлять
							покупки!
						</CardDescription>
					</CardHeader>

					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>

								<Button disabled={isPending} type='submit'>
									Продолжить
								</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}

export default Auth
