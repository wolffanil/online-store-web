import { Metadata } from 'next'

import Auth from '../../components/auth/Auth'

export const metadata: Metadata = {
	title: 'Авторизация'
}

export default function Page() {
	return <Auth />
}
