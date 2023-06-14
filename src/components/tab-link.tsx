import * as ContextMenu from '@radix-ui/react-context-menu'
import { BiLinkExternal } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Dispatch, SetStateAction } from 'react'
import { TabsState } from '@/types'
import * as Dialog from '@radix-ui/react-dialog'
import { title } from 'process'
import { setLocalTabs } from '@/utils'

type Props = {
	tab: TabsState
	tabs: TabsState[]
	setData: Dispatch<SetStateAction<TabsState>>
	setOpen: Dispatch<SetStateAction<boolean>>
	setTabs: Dispatch<SetStateAction<TabsState[]>>
}

export default function TabLink({ setData, setOpen, setTabs, tab, tabs }: Props) {
	const openEdit = () => {
		setData({ ...tab })
		setOpen(true)
	}
	const deleteItem = (id: string) => {
		let newTabs = [...tabs]
		newTabs.splice(
			newTabs.findIndex(tab => id === tab.id),
			1
		)
		setTabs(newTabs)
		setLocalTabs(newTabs)
	}
	return (
		<ContextMenu.Root>
			<a href={tab.url} draggable={false}>
				<ContextMenu.Trigger className="tablink">
					<div className="first-letter:uppercase whitespace-nowrap w-36 text-ellipsis overflow-hidden select-none text-center">
						{tab.title}
					</div>
				</ContextMenu.Trigger>
			</a>
			<ContextMenu.Portal>
				<ContextMenu.Content className="menu-content bg-main-black/80 backdrop-blur-md px-1.5 py-2 rounded-md text-zinc-400">
					<ContextMenu.Item className="menu-button" onClick={() => open(tab.url, '_blank')}>
						Open in new tab
						<BiLinkExternal />
					</ContextMenu.Item>

					<ContextMenu.Item className="menu-button" onClick={openEdit}>
						Edit
						<AiFillEdit />
					</ContextMenu.Item>

					<ContextMenu.Item className="menu-button" onClick={() => deleteItem(tab.id)}>
						Delete
						<MdDelete />
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	)
}
