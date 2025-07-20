import { Link } from 'react-router'

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
			<h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
			<h2 className="text-2xl font-semibold mb-2">Сторінку не знайдено</h2>
			<p className="text-lg mb-6 text-center max-w-md">
				Вибачте, ми не змогли знайти сторінку, яку ви шукаєте.
			</p>
			<Link
				to="/"
				className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition-colors"
			>
				На головну
			</Link>
		</div>
	)
}

export default NotFound
