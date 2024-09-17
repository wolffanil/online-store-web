import { Metadata } from 'next'

import Favorites from '@/components/dashboard/favorites/Favorites'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Избраное',
	...NO_INDEX_PAGE
}

function FavoritesPage() {
	return <Favorites />
}

export default FavoritesPage
