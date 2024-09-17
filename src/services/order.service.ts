import { axiosWithAuth } from '@/api/api.interceptors'

import { getOrderUrl } from '@/config/api.config'

import {
	EnumOrderStatus,
	IPaymentResponse
} from '@/shared/types/order.interface'

type TypeData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: string
		storeId: string
	}[]
}

class OrderService {
	async place(data: TypeData) {
		return axiosWithAuth<IPaymentResponse>({
			url: getOrderUrl('/place'),
			method: 'POST',
			data
		})
	}
}

export const orderService = new OrderService()
