import { PropsWithChildren } from 'react'

import StoreLayout from '@/components/store/store-layout/StoreLayout'

export default function Layout({ children }: PropsWithChildren) {
	return <StoreLayout>{children}</StoreLayout>
}
