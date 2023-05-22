import {Box, Checkbox} from '@chakra-ui/react'
import React from 'react'
import styles from './TodoItem.module.sass'
import {Todo} from 'types'
import {useAppDispatch} from 'hooks/redux-hooks'
import {toggleTodoCompleted} from 'store/slices/todoSlice'

interface TodoItemProps extends Todo {
}

export const TodoItem = ({id, title, completed}: TodoItemProps) => {
	const dispatch = useAppDispatch()

	return (
		<Box
			className={styles.todoItem}
			my={2}
			border="1px"
			borderColor="gray.200"
			rounded="md"
		>
			<Checkbox
				colorScheme="green"
				isChecked={completed}
				display="flex"
				p="4"
				onChange={() => dispatch(toggleTodoCompleted(id))}
				textDecoration={completed ? 'line-through' : ''}
				color={completed ? "gray.500" : ''}
			>
				{title}
			</Checkbox>
		</Box>
	)
}

