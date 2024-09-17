import type { Metadata } from 'next'

import { Colors } from '@/components/store/colors/Colors'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Цвета',
	...NO_INDEX_PAGE
}

export default function ColorsPage() {
	return <Colors />
}
