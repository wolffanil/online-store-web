'use client'

import { Trash } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useDeleteStore } from '@/hooks/queries/stores/useDeleteStore'
import { useUpdateStore } from '@/hooks/queries/stores/useUpdateStore'

import { IStoreEdit } from '@/shared/types/store.interface'

import styles from '../store/Store.module.scss'
import { Button } from '../ui/Button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/Form'
import Heading from '../ui/Heading'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import ConfirmModal from '../ui/models/ConfirmModal'

function Settings() {
	const { store, updateStore, isLoadingUpdate } = useUpdateStore()

	const { deleteStore, isLoadingDelete } = useDeleteStore()

	const form = useForm<IStoreEdit>({
		mode: 'onChange',
		values: {
			title: store?.title || '',
			description: store?.description || ''
		}
	})

	const onSubmit: SubmitHandler<IStoreEdit> = data => {
		updateStore(data)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Heading
					title='Настройки'
					description='Упрравление найстройками магазина'
				/>
				<ConfirmModal handleClick={() => deleteStore()}>
					<Button
						size='icon'
						variant='primary'
						disabled={isLoadingDelete}
					>
						<Trash className='size-4' />
					</Button>
				</ConfirmModal>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={styles.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder='Название магазина'
											disabled={isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Описание магазина'
										disabled={isLoadingUpdate}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button variant='primary' disabled={isLoadingUpdate}>
						Сохранить
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default Settings
