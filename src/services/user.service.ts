import { axiosWithAuth } from '@/api/api.interceptors'

import { getUserUrl } from '@/config/api.config'

import { IUser } from '@/shared/types/user.interface'

class UserService {
	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: getUserUrl('/profile'),
			method: 'GET'
		})

		return data
	}

	async toggleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: getUserUrl(`/profile/favorites/${productId}`),
			method: 'PATCH'
		})
	}
}

export const userService = new UserService()
