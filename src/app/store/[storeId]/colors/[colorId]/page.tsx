import type { Metadata } from 'next'

import { ColorEdit } from '@/components/store/colors/ColorEdit'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Настройки цвета',
	...NO_INDEX_PAGE
}

export default function ColorEditPage() {
	return <ColorEdit />
}
