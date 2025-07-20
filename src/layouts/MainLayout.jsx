import { Outlet } from 'react-router'
import MainNavbar from './MainNavbar'

const MainLayout = () => {
	return (
		<div>
			<MainNavbar />
			<main className="my-8">
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
