import React, {useEffect} from 'react'
import styles from './TodoList.module.sass'
import {useAppDispatch, useAppSelector} from 'hooks/redux-hooks'
import {TodoItem} from 'components/TodoList/TodoItem/TodoItem'
import {Box} from '@chakra-ui/react'

interface TodoListProps {

}

export const TodoList = ({}: TodoListProps) => {
	const {todos, filtered} = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	return (
		<Box className={styles.todoList}>
			{
				filtered.map(todo => (
					<TodoItem key={todo.id} {...todo}/>
				))
			}
		</Box>
	)
}

