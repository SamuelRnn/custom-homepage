import { useState } from 'react'
import Form from './form'
import TabLink from './tab-link'
import { TabsState } from '@/types'
import { BsPlusLg } from 'react-icons/bs'
import * as Dialog from '@radix-ui/react-dialog'
import { getLocalTabs, setLocalTabs } from '@/utils'
import dynamic from 'next/dynamic'

function Tabs() {
	const [tabs, setTabs] = useState<TabsState[]>(getLocalTabs())
	const [data, setData] = useState<TabsState>({ id: '', title: '', url: '' })
	const [open, setOpen] = useState(false)

	const openCreate = () => {
		setData({ id: '', title: '', url: '' })
		setOpen(true)
	}

	return (
		<>
			<Dialog.Root open={open} onOpenChange={setOpen}>
				<Form data={data} setOpen={setOpen} open={open} setTabs={setTabs} tabs={tabs} />

				<div className="tabs-grid mt-16">
					{tabs.map(tab => (
						<TabLink key={tab.id} setData={setData} tab={tab} setOpen={setOpen} tabs={tabs} setTabs={setTabs} />
					))}
					<button className="tablink" onClick={openCreate}>
						<BsPlusLg className="text-2xl" />
					</button>
				</div>
			</Dialog.Root>
		</>
	)
}
export default dynamic(() => Promise.resolve(Tabs), { ssr: false })
