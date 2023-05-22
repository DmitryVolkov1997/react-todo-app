import {Box, Button, Container, useColorMode} from '@chakra-ui/react'
import React, {DetailedHTMLProps, HTMLAttributes} from 'react'
import styles from './Header.module.sass'
import cn from 'classnames'
import {Link} from 'react-router-dom'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
}

export const Header = ({className, ...props}: HeaderProps) => {
	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<Box
			as="header"
			className={cn(styles.header, className, {
				[styles.dark]: colorMode === 'dark',
				[styles.light]: colorMode === 'light'
			})}
			{...props}
		>
			<Container
				maxW="3xl"
				m="0 auto"
			>
				<Box className={styles.headerRow}>
					<Link to="/" className={styles.headerLogo}>todo</Link>

					<Button
						background={'transparent'} _hover={{background: 'transparent'}}
						onClick={toggleColorMode}
					>
						{colorMode === 'light' ? (
							<MoonIcon
								fontSize={40}
								color="white"
							/>
						) : (
							<SunIcon
								fontSize={40}
								color="white"
							/>
						)}
					</Button>
				</Box>
			</Container>
		</Box>
	)
}

