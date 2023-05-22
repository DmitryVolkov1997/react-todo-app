import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Todo} from 'types'

type FilterType = 'all' | 'active' | 'completed'

type TodoSlice = {
	todos: Todo[],
	currentFiltered: FilterType
	filtered: Todo[]
}

const initialState: TodoSlice = {
	todos: [
		{
			id: 10,
			title: 'Купить хлеб',
			completed: true
		}
	],
	currentFiltered: 'all',
	filtered: []
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos = [...state.todos, {
				id: new Date().getTime(),
				title: action.payload,
				completed: false
			}]
		},

		toggleTodoCompleted(state, action: PayloadAction<number>) {
			state.todos = state.todos.map(todo => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: !todo.completed
					}
				} else {
					return todo
				}
			})
		},

		setCurrentFiltered(state, action: PayloadAction<FilterType>) {
			state.currentFiltered = action.payload
		},

		setFiltered(state, action: PayloadAction<Todo[]>) {
			switch (state.currentFiltered) {
				case 'all':
					return {
						...state,
						filtered: action.payload
					}

				case 'active':
					return {
						...state,
						filtered: action.payload.filter(todo => !todo.completed)
					}

				case 'completed':
					return {
						...state,
						filtered: action.payload.filter(todo => todo.completed)
					}

				default:
					return state
			}
		},

		clearCompleted(state) {
			state.todos = state.todos.filter(todo => !todo.completed)
		}
	}
})

export const {
	addTodo,
	toggleTodoCompleted,
	setCurrentFiltered,
	setFiltered,
	clearCompleted
} = todoSlice.actions
export default todoSlice.reducer
