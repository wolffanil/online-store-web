'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Loader } from '@/components/ui/Loader'

import { DASHBOARD_URL } from '@/config/url.config'

import { useProfile } from '@/hooks/useProfile'

import MobileSidebar from '../sidebar/MobileSidebar'

import styles from './Header.module.scss'
import { StoreSwitcher } from './StoreSwitcher'

function Header() {
	const { user, isLoading } = useProfile()

	return (
		<div className={styles.header}>
			<MobileSidebar />
			<div className={styles.header_menu}>
				{isLoading ? (
					<Loader size='sm' />
				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<Link href={DASHBOARD_URL.home()}>
								<Image
									src={user.picture}
									alt={user.name}
									width={42}
									height={42}
									priority
								/>
							</Link>
						</>
					)
				)}
			</div>
		</div>
	)
}

export default Header
