import { TabsState } from '@/types'
import { setLocalTabs } from '@/utils'
import * as Dialog from '@radix-ui/react-dialog'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { v4 as uuid } from 'uuid'

type Props = {
	data: TabsState
	open: boolean
	tabs: TabsState[]
	setOpen: Dispatch<SetStateAction<boolean>>
	setTabs: Dispatch<SetStateAction<TabsState[]>>
}

export default function Form({ data, open, tabs, setOpen, setTabs }: Props) {
	const [form, setForm] = useState({ ...data })
	useEffect(() => {
		setForm({ ...data })
	}, [open])

	const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newTab = { ...form }
		const newTabs = [...tabs]
		let foundTab = newTabs.findIndex(tab => tab.id === form.id)

		if (foundTab !== -1) {
			newTabs[foundTab] = newTab
			setTabs(newTabs)
			setLocalTabs(newTabs)
		} else {
			newTab.id = uuid()
			setTabs(state => {
				const newTabState = [...state, newTab]
				setLocalTabs(newTabState)

				return newTabState
			})
		}
		setOpen(false)
	}
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm(state => ({ ...state, [event.target.name]: event.target.value }))
	}
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="dialog-overlay bg-black/30 backdrop-blur-sm fixed w-full h-full" />
			<Dialog.Content className="dialog-content text-zinc-400 font-main fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-box rounded-md bg-main-black/80 backdrop-blur-md">
				<div className="flex justify-between px-4 py-2 border-b border-zinc-700">
					<Dialog.Title className="m-1">{data.id ? 'Edit' : 'Create'} Tab</Dialog.Title>
					<Dialog.Close>
						<IoMdClose className="text-xl m-1" />
					</Dialog.Close>
				</div>
				<form className="mt-4 flex flex-col gap-4 p-4" onSubmit={onSubmit}>
					<fieldset className="flex gap-4 items-center">
						<label htmlFor="title" className="w-10">
							Title
						</label>
						<input
							id="title"
							name="title"
							value={form.title}
							onChange={onChange}
							type="text"
							className="bg-transparent py-1 px-3 w-full border-b border-b-zinc-700 outline-none rounded-t placeholder:text-zinc-600"
							required
							placeholder="Google"
						/>
					</fieldset>
					<fieldset className="flex gap-4 items-center">
						<label htmlFor="url" className="w-10">
							URL
						</label>
						<input
							id="url"
							name="url"
							value={form.url}
							onChange={onChange}
							type="text"
							className="bg-transparent py-1 px-3 w-full border-b border-b-zinc-700 outline-none rounded-t placeholder:text-zinc-600"
							required
							placeholder="https://www.google.com"
						/>
					</fieldset>
					<button type="submit" className="py-2 px-10 w-fit bg-[#9a3b67] rounded mt-4 text-zinc-200 self-end">
						Save
					</button>
				</form>
			</Dialog.Content>
		</Dialog.Portal>
	)
}
