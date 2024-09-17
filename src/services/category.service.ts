import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { getCategoryUrl } from '@/config/api.config'

import { ICategory, ICategoryInput } from '@/shared/types/category.interface'

class CategoryService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<ICategory[]>({
			url: getCategoryUrl(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data
	}

	async getById(id: string) {
		const { data } = await axiosClassic<ICategory>({
			url: getCategoryUrl(`/by-categoryId/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: ICategoryInput, storeId: string) {
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: getCategoryUrl(`/${storeId}`),
			method: 'POST',
			data
		})

		return createdCategory
	}

	async update(id: string, data: ICategoryInput) {
		const { data: updatedCategory } = await axiosWithAuth<ICategory>({
			url: getCategoryUrl(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedCategory
	}

	async delete(id: string) {
		const { data: deletedCategory } = await axiosWithAuth<ICategory>({
			url: getCategoryUrl(`/${id}`),
			method: 'DELETE'
		})

		return deletedCategory
	}
}

export const categoryService = new CategoryService()
