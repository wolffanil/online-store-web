import { Menu } from 'lucide-react'
import React from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

import Sidebar from './Sidebar'

function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger className='lg:hidden pr-4 hover: opacity-75'>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className='p-0 bg-white'>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSidebar
