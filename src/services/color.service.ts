import { axiosWithAuth } from '@/api/api.interceptors'

import { getColorUrl } from '@/config/api.config'

import { IColor, IColorInput } from '@/shared/types/color.interface'

class ColorService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IColor[]>({
			url: getColorUrl(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data || []
	}

	async getById(id: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: getColorUrl(`/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IColorInput, storeId: string) {
		const { data: createdColor } = await axiosWithAuth<IColor>({
			url: getColorUrl(`/${storeId}`),
			method: 'POST',
			data
		})

		return createdColor
	}

	async update(id: string, data: IColorInput) {
		const { data: updatedColor } = await axiosWithAuth<IColor>({
			url: getColorUrl(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedColor
	}

	async delete(id: string) {
		const { data: deletedColor } = await axiosWithAuth<IColor>({
			url: getColorUrl(`/${id}`),
			method: 'DELETE'
		})

		return deletedColor
	}
}

export const colorService = new ColorService()
