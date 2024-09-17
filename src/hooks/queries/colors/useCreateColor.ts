import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { colorService } from '@/services/color.service'

import { IColorInput } from '@/shared/types/color.interface'

export const useCreateColor = () => {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createColor, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create color'],
		mutationFn: (data: IColorInput) =>
			colorService.create(data, params.storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get colors for store dashboard']
			})
			toast.success('Цвет создан')
			router.push(STORE_URL.colors(params.storeId))
		},
		onError() {
			toast.error('Ошибка при создание цвета')
		}
	})

	return useMemo(
		() => ({
			createColor,
			isLoadingCreate
		}),
		[createColor, isLoadingCreate]
	)
}
