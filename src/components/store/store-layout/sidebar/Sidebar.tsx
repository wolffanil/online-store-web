import Logo from '@/components/ui/main-layout/header/logo/Logo'

import styles from './Sidebar.module.scss'
import Navigation from './navigation/Navigation'

function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<Navigation />
		</div>
	)
}

export default Sidebar
