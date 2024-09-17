import { Metadata } from 'next'

import Thanks from '@/components/thanks/Thanks'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Спасибо за покупку',
	...NO_INDEX_PAGE
}

function ThanksPage() {
	return <Thanks />
}

export default ThanksPage
