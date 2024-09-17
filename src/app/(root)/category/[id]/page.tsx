import { type Metadata } from 'next'

import Catalog from '@/components/ui/catalog/Catalog'

import { categoryService } from '@/services/category.service'
import { productService } from '@/services/product.service'

export const revalidate = 60

async function getProducts(params: { id: string }) {
	const [products, category] = await Promise.all([
		productService.getByCategory(params.id),
		categoryService.getById(params.id)
	])

	return { products, category }
}

export async function generateMetadata({
	params
}: {
	params: { id: string }
}): Promise<Metadata> {
	const { category, products } = await getProducts(params)

	return {
		title: category.title,
		description: category.description,
		openGraph: {
			images: [
				{
					url: products[0].images[0].path,
					width: 1000,
					height: 1000,
					alt: category.title
				}
			]
		}
	}
}

async function CategoryPage({ params }: { params: { id: string } }) {
	const { category, products } = await getProducts(params)

	return (
		<div className='my-6'>
			<Catalog
				title={category.title}
				description={category.description}
				products={products}
			/>
		</div>
	)
}

export default CategoryPage
