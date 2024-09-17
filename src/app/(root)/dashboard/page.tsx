import { Metadata } from 'next'

import { Dashboard } from '@/components/dashboard/DashBoard'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Личный кабинет',
	...NO_INDEX_PAGE
}

function page() {
	return <Dashboard />
}

export default page
