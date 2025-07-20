import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import frontRoutes from './frontRoutes'
import Posts from '../pages/Posts'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'

export const routes = [
	{
		element: <MainLayout />,
		children: [
			{
				path: frontRoutes.pages.home,
				element: <Home />,
				handle: {
					title: 'Home',
				},
			},
			{
				path: frontRoutes.pages.products,
				element: <Products />,
				handle: {
					title: 'Products',
				},
			},
			{
				path: frontRoutes.pages.posts,
				element: <Posts />,
				handle: {
					title: 'Posts',
				},
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]
const router = createBrowserRouter(routes)
export default router
