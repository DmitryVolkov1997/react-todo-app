import React, {ReactNode} from 'react'
import {Box} from '@chakra-ui/react'
import {Header} from 'layout'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
		</>
	)
}

