import type { Metadata } from 'next'

import { Reviews } from '@/components/store/reviews/Reviews'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Отзывы',
	...NO_INDEX_PAGE
}

export default function ReviewsPage() {
	return <Reviews />
}
