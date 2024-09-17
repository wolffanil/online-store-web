import type { Metadata } from 'next'

import { CreateColor } from '@/components/store/colors/create/CreateColor'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Создание цвета',
	...NO_INDEX_PAGE
}

export default function CreateColorPage() {
	return <CreateColor />
}
