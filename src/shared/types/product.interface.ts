import { ICategory } from './category.interface'
import { IColor } from './color.interface'
import { IImage } from './image.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: string
	title: string
	description: string
	price: number
	images: IImage[]
	category: ICategory
	reviews: IReview[]
	color: IColor
	storeId: string
}

export interface IProductInput
	extends Omit<
		IProduct,
		'id' | 'reviews' | 'storeId' | 'category' | 'color' | 'images'
	> {
	categoryId: string
	colorId: string
	images: string[]
}
