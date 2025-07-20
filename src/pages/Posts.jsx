import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, resetErrorPostById } from '../redux/slices/postsReducer'
import Loader from '../components/Loader'
import SearchPost from '../components/SearchPost'

const Posts = () => {
	const dispatch = useDispatch()

	const { posts, loadingPosts, error } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(resetErrorPostById())
		dispatch(fetchPosts())
	}, [dispatch])

	if (loadingPosts) {
		return (
			<div className="min-h-[80vh] flex items-center gap-4 flex-col justify-center bg-gray-100 text-gray-700 text-xl">
				<Loader />
				<div>Завантаження постів...</div>
			</div>
		)
	}
	if (error) {
		return (
			<div className="min-h-[80vh] flex items-center justify-center bg-red-100 text-red-700 text-xl">
				Помилка: {error}
			</div>
		)
	}
	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
			<SearchPost />
			<h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
				Список Постів
			</h2>

			<ul className="w-full max-w-3xl space-y-4">
				{posts.map((post) => (
					<li
						key={post.id}
						className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow"
					>
						<strong>{post.id}.</strong>{' '}
						<strong className="text-lg text-gray-800">{post.title}</strong>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
