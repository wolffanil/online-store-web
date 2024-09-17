import type { Metadata } from 'next'

import { CategoryEdit } from '@/components/store/categories/CategoryEdit'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Настройка категории',
	...NO_INDEX_PAGE
}

export default function CategoryEditPage() {
	return <CategoryEdit />
}
