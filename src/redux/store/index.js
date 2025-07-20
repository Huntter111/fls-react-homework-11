import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter'
import productsReducer from '../slices/productsReducer'
import postsReducer from '../slices/postsReducer'

export default configureStore({
	reducer: {
		counter: counterReducer,
		products: productsReducer,
		posts: postsReducer,
	},
})
