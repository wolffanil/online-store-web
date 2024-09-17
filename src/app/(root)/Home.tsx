import Hero from '@/components/hero/Hero'
import Catalog from '@/components/ui/catalog/Catalog'

import { PUBLIC_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

interface HomeProps {
	products: IProduct[]
}

function Home({ products }: HomeProps) {
	return (
		<>
			<Hero />
			<Catalog
				products={products}
				title='Хиты продаж'
				description='Самые популярные товары нашего магазина.'
				linkTitle='Узнать больше'
				link={PUBLIC_URL.explorer()}
			/>
		</>
	)
}

export default Home
