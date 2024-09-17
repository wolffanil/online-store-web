import type { Metadata } from 'next'

import { CategoryForm } from '@/components/store/categories/CategoryForm'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Создать категорию',
	...NO_INDEX_PAGE
}

export default function CreateCategoryPage() {
	return <CategoryForm />
}
