import { axiosWithAuth } from '@/api/api.interceptors'

import { getStoreUrl } from '@/config/api.config'

import {
	IStore,
	IStoreCreate,
	IStoreEdit
} from '@/shared/types/store.interface'

class StoreService {
	async getById(id: string) {
		const { data } = await axiosWithAuth<IStore>({
			url: getStoreUrl(`/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IStoreCreate) {
		const { data: createdStore } = await axiosWithAuth<IStore>({
			url: getStoreUrl(''),
			method: 'POST',
			data
		})

		return createdStore
	}

	async update(id: string, data: IStoreEdit) {
		const { data: updatedStore } = await axiosWithAuth<IStore>({
			url: getStoreUrl(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedStore
	}

	async delete(id: string) {
		const { data: deletedStore } = await axiosWithAuth<IStore>({
			url: getStoreUrl(`/${id}`),
			method: 'DELETE'
		})

		return deletedStore
	}
}

export const storeService = new StoreService()
