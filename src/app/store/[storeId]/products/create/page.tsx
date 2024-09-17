import { Metadata } from 'next'

import CreateProduct from '@/components/store/products/create/CreateProduct'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Создание товара',
	...NO_INDEX_PAGE
}

export default function CreateProductPage() {
	return <CreateProduct />
}
