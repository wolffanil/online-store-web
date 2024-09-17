import { axiosWithAuth } from '@/api/api.interceptors'

import { getStatisticUrl } from '@/config/api.config'

import {
	IMainStatistics,
	IMiddleStatistics
} from '@/shared/types/statistics.interface'

class StatisticsService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistics[]>({
			url: getStatisticUrl(`/main/${storeId}`),
			method: 'GET'
		})

		return data
	}

	async getMiddle(storeId: string) {
		const { data } = await axiosWithAuth<IMiddleStatistics>({
			url: getStatisticUrl(`/middle/${storeId}`),
			method: 'GET'
		})

		return data
	}
}

export const statisticsService = new StatisticsService()
