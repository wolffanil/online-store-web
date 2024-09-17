import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'

import { IMonthlySales } from '@/shared/types/statistics.interface'

import { formatPrice } from '@/utils/string/format-price'

import styles from './MiddleStatistics.module.scss'

const chartConfig = {
	value: {
		label: 'Прибыль',
		color: '#3B82F6'
	}
} satisfies ChartConfig

interface OverviewProps {
	data: IMonthlySales[]
}

function Overview({ data }: OverviewProps) {
	return (
		<Card>
			<CardHeader className={styles.header}>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-[310px] w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelFormatter={formatPrice}
									indicator='line'
								/>
							}
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}

export default Overview
