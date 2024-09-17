import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'

import { API_URL, getProductUrl } from '@/config/api.config'

import { IProduct, IProductInput } from '@/shared/types/product.interface'

class ProductService {
	async getAll(searchTerm?: string | null) {
		const { data } = await axiosClassic<IProduct[]>({
			url: getProductUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})

		return data || []
	}

	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IProduct[]>({
			url: getProductUrl(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data || []
	}

	async getById(id: string) {
		const { data } = await axiosClassic<IProduct>({
			url: getProductUrl(`/by-productId/${id}`),
			method: 'GET'
		})

		return data
	}

	async getByCategory(categoryId: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: getProductUrl(`/by-category/${categoryId}`),
			method: 'GET'
		})

		return data
	}

	async getMostPopular() {
		const { data } = await axiosClassic<IProduct[]>({
			url: getProductUrl(`/most-popular`),
			method: 'GET'
		})

		return data
	}

	async getSimilar(id: string) {
		const { data } = await axiosClassic<IProduct[]>({
			url: getProductUrl(`/similar/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IProductInput, storeId: string) {
		const { data: createdProduct } = await axiosWithAuth<IProduct[]>({
			url: getProductUrl(`/${storeId}`),
			method: 'POST',
			data
		})

		return createdProduct
	}

	async update(id: string, data: IProductInput) {
		const { data: updatedProduct } = await axiosWithAuth<IProduct>({
			url: getProductUrl(`/${id}`),
			method: 'PUT',
			data
		})

		return updatedProduct
	}

	async delete(id: string) {
		const { data: deletedProduct } = await axiosWithAuth<IProduct>({
			url: getProductUrl(`/${id}`),
			method: 'DELETE'
		})

		return deletedProduct
	}
}

export const productService = new ProductService()
