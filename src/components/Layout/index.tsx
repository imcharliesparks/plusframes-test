import * as React from 'react'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => (
	<>
		{/* <Header /> */}
		<main>{children}</main>
		{/* <Footer /> */}
	</>
)

export default Layout
