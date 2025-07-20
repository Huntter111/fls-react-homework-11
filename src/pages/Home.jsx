import { Link } from 'react-router'
import frontRoutes from '../router/frontRoutes'

const Home = () => {
	return (
		<div className="min-h-screen bg-gray-100 py-6 px-4 sm:py-10 flex flex-col items-center">
			<h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-blue-700">
				Навчальні Завдання
			</h1>

			<div className="w-full max-w-4xl space-y-6 sm:space-y-8">
				{/* Завдання 1 */}
				<div className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
					<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
						Задача 1. Список з фільтрацією
					</h2>
					<p className="text-gray-600 mb-4 text-sm sm:text-base">
						Завдання: Створити список товарів. Має бути можливість додавання
						нового товару та фільтрації товарів за назвою (може бути одна
						сторінка, а можна додавання товарів зробити на окремій сторінці).
					</p>
					<Link
						to={frontRoutes.pages.products}
						className="inline-block bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
					>
						Перейти
					</Link>
				</div>

				{/* Завдання 2 */}
				<div className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
					<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
						Задача 2. Список постів з API (createAsyncThunk)
					</h2>
					<p className="text-gray-600 mb-4 text-sm sm:text-base">
						Завдання: Завантажити список постів з публічного API
						(https://jsonplaceholder.typicode.com/posts) та відобразити їхні
						заголовки. Додати індикатор завантаження та повідомлення про
						помилку. Використати: createAsyncThunk для отримання масиву даних.
					</p>
					<Link
						to={frontRoutes.pages.posts}
						className="inline-block bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
					>
						Перейти
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
