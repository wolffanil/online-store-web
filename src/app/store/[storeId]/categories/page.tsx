import type { Metadata } from 'next'

import { Categories } from '@/components/store/categories/Categories'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Категории',
	...NO_INDEX_PAGE
}

export default function CategoriesPage() {
	return <Categories />
}
