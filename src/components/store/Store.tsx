import Heading from '../ui/Heading'

import styles from './Store.module.scss'
import MainStatistics from './statistics/main-statistics/MainStatistics'
import MiddleStatistics from './statistics/middle-statistaics/MiddleStatistics'

function Store() {
	return (
		<div className={styles.wrapper}>
			<Heading title='Статистика' />
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}

export default Store
