import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { sleep } from '../../utils'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
// Асинхронна функція
export const fetchPosts = createAsyncThunk(
	'posts/fetchPosts',
	async (_, thunkAPI) => {
		await sleep(1000)
		try {
			const response = await axios.get(`${BASE_URL}/posts`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
)
export const fetchPostById = createAsyncThunk(
	'posts/fetchPostById',
	async (postId, thunkAPI) => {
		await sleep(700)
		try {
			const response = await axios.get(`${BASE_URL}/posts/${postId}`)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
)

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loadingPosts: false,
		error: null,
		postById: null,
		loadingPostsById: false,
		errorPostById: null,
	},
	reducers: {
		resetPostById: (state) => {
			state.postById = null
		},
		resetErrorPostById: (state) => {
			state.errorPostById = null
		},
	},
	extraReducers: (builder) => {
		builder
			//Fetch all posts
			.addCase(fetchPosts.pending, (state) => {
				state.loadingPosts = true
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.loadingPosts = false
				state.posts = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.loadingPosts = false
				state.error = action.payload
			})
			// Fetch post by Id
			.addCase(fetchPostById.pending, (state) => {
				state.loadingPostsById = true
				state.errorPostById = null
			})
			.addCase(fetchPostById.fulfilled, (state, action) => {
				state.loadingPostsById = false
				state.postById = action.payload
			})
			.addCase(fetchPostById.rejected, (state, action) => {
				state.loadingPostsById = false
				state.errorPostById = action.payload
			})
	},
})

export const { resetPostById, resetErrorPostById } = postsSlice.actions
export default postsSlice.reducer
