import { Metadata } from 'next'

import Products from '@/components/store/products/Products'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Товары',
	...NO_INDEX_PAGE
}

function ProductPage() {
	return <Products />
}

export default ProductPage
