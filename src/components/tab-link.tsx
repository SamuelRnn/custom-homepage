import * as ContextMenu from '@radix-ui/react-context-menu'
import { BiLinkExternal } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

export default function TabLink() {
	return (
		<ContextMenu.Root>
			<a href="#" draggable={false}>
				<ContextMenu.Trigger className="tablink">
					<div className="whitespace-nowrap w-36 text-ellipsis overflow-hidden select-none">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						laudantium quisquam
					</div>
				</ContextMenu.Trigger>
			</a>
			<ContextMenu.Portal>
				<ContextMenu.Content className="MenuContent bg-main-black/80 backdrop-blur-md px-1.5 py-2 rounded-md text-zinc-400">
					<ContextMenu.Item
						className="menu-button"
						onClick={() => open('/', '_blank')}
					>
						Open in new tab
						<BiLinkExternal />
					</ContextMenu.Item>

					<ContextMenu.Item className="menu-button">
						Edit
						<AiFillEdit />
					</ContextMenu.Item>

					<ContextMenu.Item className="menu-button">
						Delete
						<MdDelete />
					</ContextMenu.Item>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	)
}
