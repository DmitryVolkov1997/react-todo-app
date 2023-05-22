import React, {useEffect} from 'react'
import styles from 'index.sass'
import {Layout} from 'layout'
import {TodoCreator, TodoList} from 'components'
import {Box, Button, Container, Text, useColorMode, useMediaQuery} from '@chakra-ui/react'
import {useAppDispatch, useAppSelector} from 'hooks'
import {clearCompleted, setCurrentFiltered, setFiltered} from 'store/slices/todoSlice'

export const HomePage = () => {
	const {colorMode} = useColorMode()
	const dispatch = useAppDispatch()
	const {currentFiltered: name, todos} = useAppSelector(state => state.todos)
	const [isLargerThan692] = useMediaQuery('(min-width: 800px)')

	const totalCompleted = todos.reduce((acc, el) => {
		if (!el.completed) {
			return acc + 1
		}

		return acc
	}, 0)

	useEffect(() => {
		dispatch(setFiltered(todos))
	}, [todos, name])


	return (
		<Layout>
			<Container maxW="3xl" m="0 auto" px="30px">
				<Box
					boxShadow="md"
					p="6"
					rounded="md"
					position="relative"
					top="-100px"
					background={colorMode === 'light' ? 'white' : 'gray.800'}

				>
					<TodoCreator/>
					<TodoList/>
					<Box
						display="flex"
						alignItems={isLargerThan692 ? "center" : "left"}
						flexDirection={isLargerThan692 ? 'row' : 'column'}
						justifyContent={isLargerThan692 ? 'left' : 'space-between'}
						mt="20px"
						gap="20px"
					>
						<Text
							fontWeight="500"
							color="teal.600"
						>
							{totalCompleted} items left
						</Text>

						<Box
							display="flex"
							columnGap="10px">
							<Button
								colorScheme="teal"
								variant={name === 'all' ? 'solid' : 'ghost'}
								onClick={() => dispatch(setCurrentFiltered('all'))}
							>
								All
							</Button>

							<Button
								colorScheme="teal"
								variant={name === 'active' ? 'solid' : 'ghost'}
								onClick={() => dispatch(setCurrentFiltered('active'))}
							>
								Active
							</Button>

							<Button
								colorScheme="teal"
								variant={name === 'completed' ? 'solid' : 'ghost'}
								onClick={() => dispatch(setCurrentFiltered('completed'))}
							>
								Completed
							</Button>
						</Box
						>

						<Button
							colorScheme="teal"
							variant="ghost"
							onClick={() => dispatch(clearCompleted())}
						>
							Clear Completed
						</Button>
					</Box>
				</Box>

			</Container>
		</Layout>
	)
}

