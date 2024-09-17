'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { productService } from '@/services/product.service'

import { IProduct } from '@/shared/types/product.interface'

import Catalog from '../ui/catalog/Catalog'

interface ExplorerProps {
	products: IProduct[]
}

function Explorer({ products }: ExplorerProps) {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('searchTerm')


	const { data } = useQuery({
		queryKey: ['product explorer', searchTerm],
		queryFn: () => productService.getAll(searchTerm),
		initialData: products
	})

	return (
		<div className='my-6'>
			<Catalog
				title={
					searchTerm
						? `Поиск по запросу ${searchTerm}`
						: 'Каталог товаров'
				}
				products={data}
			/>
		</div>
	)
}

export default Explorer
