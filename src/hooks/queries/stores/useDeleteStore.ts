import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { PUBLIC_URL } from '@/config/url.config'

import { storeService } from '@/services/store.service'

import { QUERY_KEY } from '@/shared/enums/queryKeys'

export function useDeleteStore() {
	const params = useParams<{ storeId: string }>()

	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(params.storeId),
		onSuccess() {
			toast.success('Магазин удалён')
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEY.PROFILE]
			})
			router.push(PUBLIC_URL.home())
		},
		onError() {
			toast.error('Ошибка при удалении магазина')
		}
	})

	return useMemo(
		() => ({
			deleteStore,
			isLoadingDelete
		}),
		[deleteStore, isLoadingDelete]
	)
}
