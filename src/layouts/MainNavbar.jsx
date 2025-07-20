import { NavLink } from 'react-router'
import { routes } from '../router/router'

const MainNavbar = () => {
	const rootRoute = routes[0]
	const children = rootRoute?.children || []

	return (
		<nav className="w-full bg-white shadow-md rounded-md drop-shadow-sm py-4 px-6">
			<ul className="flex gap-6 justify-center items-center">
				{children.map((child, i) => (
					<li key={i}>
						<NavLink
							to={child.path}
							className={({ isActive }) =>
								`text-lg font-medium transition-colors duration-300 ${
									isActive
										? 'text-blue-600 border-b-2 border-blue-600 pb-1'
										: 'text-gray-600 hover:text-blue-500'
								}`
							}
						>
							{child.handle?.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MainNavbar
