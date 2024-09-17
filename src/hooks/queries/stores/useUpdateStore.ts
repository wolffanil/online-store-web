import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { storeService } from '@/services/store.service'

import { QUERY_KEY } from '@/shared/enums/queryKeys'
import { IStoreEdit } from '@/shared/types/store.interface'

export function useUpdateStore() {
	const params = useParams<{ storeId: string }>()

	const queryClient = useQueryClient()

	const { data: store } = useQuery({
		queryKey: [QUERY_KEY.STORE, params.storeId],
		queryFn: () => storeService.getById(params.storeId),
		enabled: !!params.storeId,
		staleTime: 3 * 60 * 1000
	})

	const { mutate: updateStore, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update store'],
		mutationFn: (data: IStoreEdit) =>
			storeService.update(params.storeId, data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEY.STORE, store.id]
			})
			queryClient.invalidateQueries({
				queryKey: [QUERY_KEY.PROFILE]
			})
			toast.success('Магазин обновлён')
		},
		onError() {
			toast.error('Ошибка при обновление магазина')
		}
	})

	return useMemo(
		() => ({
			updateStore,
			isLoadingUpdate,
			store
		}),
		[updateStore, isLoadingUpdate, store]
	)
}
