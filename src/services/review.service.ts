import { axiosWithAuth } from '@/api/api.interceptors'

import { getReviewUrl } from '@/config/api.config'

import { IReview, IReviewInput } from '@/shared/types/review.interface'

class ReviewService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IReview[]>({
			url: getReviewUrl(`/by-storeId/${id}`),
			method: 'GET'
		})

		return data
	}

	async create(data: IReviewInput, productId: string, storeId: string) {
		const { data: createdReview } = await axiosWithAuth<IReview>({
			url: getReviewUrl(`/${productId}/${storeId}`),
			method: 'POST',
			data
		})

		return createdReview
	}

	async delete(id: string) {
		const { data: deletedReview } = await axiosWithAuth<IReview>({
			url: getReviewUrl(`/${id}`),
			method: 'DELETE'
		})

		return deletedReview
	}
}

export const reviewService = new ReviewService()
