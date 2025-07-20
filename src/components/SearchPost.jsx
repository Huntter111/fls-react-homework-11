import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostById, resetPostById } from '../redux/slices/postsReducer'
import Loader from './Loader'

const SearchPost = () => {
	const { postById, loadingPostsById, errorPostById } = useSelector(
		(state) => state.posts,
	)

	const dispatch = useDispatch()
	const [searchPostById, setSearchPostById] = useState('')

	function getPostById(id) {
		dispatch(resetPostById())
		if (id.trim() !== '') dispatch(fetchPostById(id))
	}
	function handleSubmit(e) {
		e.preventDefault()
		getPostById(searchPostById)
		setSearchPostById('')
	}
	return (
		<div className="w-full max-w-xl mx-auto">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col sm:flex-row items-end gap-4 mb-8"
			>
				<label className="w-full sm:flex-1 flex flex-col text-gray-700 font-medium text-base">
					<span className="mb-1 select-none">Отримати пост за ID</span>
					<input
						value={searchPostById}
						type="number"
						inputMode="numeric"
						min="1"
						placeholder="Введіть ID поста"
						onChange={(e) => setSearchPostById(e.target.value)}
						className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
					/>
				</label>
				<button
					type="submit"
					className="w-full justify-center flex content-between sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition-colors font-semibold text-base disabled:bg-gray-500"
					disabled={loadingPostsById}
				>
					{loadingPostsById ? (
						<div className="flex gap-2">
							<span>Отримуємо...</span> <Loader size="small" />
						</div>
					) : (
						'Отримати пост'
					)}
				</button>
			</form>
			<div>
				{postById && !loadingPostsById && (
					<div className="bg-green-100 p-6 rounded-xl shadow max-w-3xl w-full mx-auto mb-8">
						<h2 className="flex justify-end">
							Post ID: <span className="font-bold">{postById.id}</span>
						</h2>
						<h3 className="text-xl font-bold mb-3 text-green-800">
							{postById.title}
						</h3>
						<p className="text-gray-700 leading-relaxed">{postById.body}</p>
					</div>
				)}
				{errorPostById && (
					<div className="font-semibold flex justify-center p-2 mb-4 text-xl">
						<span className="text-red-500">Помилка при отриманні поста</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default SearchPost
