import {Input, useColorMode} from '@chakra-ui/react'
import React, {KeyboardEvent, useState} from 'react'
import styles from './TodoCreator.module.sass'
import {useAppDispatch} from 'hooks'
import {addTodo} from 'store/slices/todoSlice'

interface TodoCreatorProps {
}

export const TodoCreator = ({}: TodoCreatorProps) => {
	const dispatch = useAppDispatch()
	const [inputText, setInputText] = useState<string>('')
	const {colorMode} = useColorMode()

	const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			if (inputText.trim()) {
				dispatch(addTodo(inputText.trim()))
				setInputText('')
			}
		}
	}

	return (
		<Input
			placeholder="Create a new todo..."
			size="lg"
			onChange={(e) => setInputText(e.target.value)}
			value={inputText}
			onKeyDown={handleKey}
			borderColor={colorMode === 'light' ? 'gray.200' : 'gray.200'}
			minH="55px"
		/>
	)
}

