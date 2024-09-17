import Link from 'next/link'

import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.inteface'
import { ProductCard } from './product-card/ProductCard'

function Catalog({ title, description, link, linkTitle, products }: ICatalog) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.info}>
					<h1>{title}</h1>
					{description && <p>{description}</p>}
				</div>
				{link && linkTitle && <Link href={link}>{linkTitle}</Link>}
			</div>

			<div className={styles.catalog}>
				<div className={styles.products}>
					{products.length ? (
						products.map(product => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						<div>Нечего не найдено</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Catalog
