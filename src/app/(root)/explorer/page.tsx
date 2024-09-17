import { Metadata } from 'next'

import Explorer from '@/components/explorer/Explorer'

import { productService } from '@/services/product.service'

export const metadata: Metadata = {
	title: 'Каталог товаров'
}
export const revaildate = 60

async function getProducts() {
	const data = await productService.getAll()

	return data
}

async function ExplorerPage() {
	const data = await getProducts()

	return <Explorer products={data} />
}

export default ExplorerPage
