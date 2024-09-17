import { UseFormReturn } from 'react-hook-form'

import { validEmail } from '@/shared/regex'
import { IAuthForm } from '@/shared/types/auth.interface'

import { FormControl, FormField, FormItem, FormMessage } from '../ui/Form'
import { Input } from '../ui/Input'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

function AuthFields({ form, isPending, isReg }: AuthFieldsProps) {
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Имя обязательно'
					}}
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Иван'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: 'Почта обязательна',
					pattern: {
						value: validEmail,
						message: 'Введите валиднубю почту'
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								type='email'
								placeholder='ivan@example.com'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Пароль обязательный',
					minLength: {
						value: 6,
						message: 'Минимум 6 символов'
					}
				}}
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								type='password'
								placeholder='********'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

export default AuthFields
