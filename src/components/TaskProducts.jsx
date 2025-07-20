import { useDeferredValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, searchProduct } from '../redux/slices/productsReducer'

const TaskProducts = () => {
	const [productSearch, setSearchProduct] = useState('')
	const [product, setProduct] = useState('')
	const products = useSelector((state) => state.products.sorted)
	const deferredText = useDeferredValue(productSearch)
	const dispatch = useDispatch()

	function handleSearchProduct(e) {
		const searchValue = e.target.value
		setSearchProduct(searchValue)
	}
	function handleAddProduct(prod) {
		if (prod.trim() === '') return
		dispatch(addProduct(prod))
		dispatch(searchProduct(deferredText))
		setProduct('')
	}
	useEffect(() => {
		dispatch(searchProduct(deferredText))
	}, [deferredText, dispatch])
	return (
		<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl drop-shadow-sm">
			<h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
				Продукти
			</h1>

			<div className="flex flex-col sm:flex-row gap-4 mb-6">
				<div className="flex-1">
					<label
						htmlFor="search"
						className="block mb-1 font-medium text-gray-700"
					>
						🔍 Пошук за назвою:
					</label>
					<input
						id="search"
						name="search"
						type="text"
						placeholder="Пошук за назвою"
						value={productSearch}
						onChange={handleSearchProduct}
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
					/>
				</div>

				<div className="flex-1">
					<label
						htmlFor="addProduct"
						className="block mb-1 font-medium text-gray-700"
					>
						➕ Додати продукт:
					</label>
					<div className="flex gap-2">
						<input
							id="addProduct"
							name="addProduct"
							type="text"
							placeholder="Новий продукт"
							value={product}
							onChange={(e) => setProduct(e.target.value)}
							className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
						/>
						<button
							onClick={() => handleAddProduct(product)}
							className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition hover:cursor-pointer"
						>
							Додати
						</button>
					</div>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-4">📋 Список продуктів:</h2>
				{products.length > 0 ? (
					<ul className="space-y-2">
						{products.map((product, i) => (
							<li
								key={i}
								className="px-4 py-2 border border-gray-200 rounded-md bg-gray-50"
							>
								{product}
							</li>
						))}
					</ul>
				) : (
					<p className="text-gray-500 italic">
						Немає продуктів для відображення.
					</p>
				)}
			</div>
		</div>
	)
}

export default TaskProducts
