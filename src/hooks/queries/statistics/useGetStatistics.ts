import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.service'

import { QUERY_KEY } from '@/shared/enums/queryKeys'

export const useGetStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const { data: main } = useQuery({
		queryKey: [QUERY_KEY.GET_MAIN_STATISTICS, params.storeId],
		queryFn: () => statisticsService.getMain(params.storeId),
		staleTime: 3 * 60 * 1000
	})

	const { data: middle } = useQuery({
		queryKey: [QUERY_KEY.GET_MIDDLE_STATISTICS, params.storeId],
		queryFn: () => statisticsService.getMiddle(params.storeId),
		staleTime: 3 * 60 * 1000
	})

	return useMemo(() => ({ main, middle }), [main, middle])
}
