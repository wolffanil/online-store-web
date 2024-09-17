import { Metadata } from 'next'

import { ProductEdit } from '@/components/store/products/edit/ProductEdit'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Настройка товара',
	...NO_INDEX_PAGE
}

export default function ProductEditPage() {
	return <ProductEdit />
}
