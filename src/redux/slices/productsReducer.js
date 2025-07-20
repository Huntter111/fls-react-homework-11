import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../api/productsNames'

const initialState = {
	original: products,
	sorted: products,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.original = [...state.original, action.payload]
		},
		searchProduct: (state, action) => {
			const searchTerm = action.payload.toLowerCase()
			state.sorted = searchTerm
				? state.original.filter((product) =>
						product.toLowerCase().includes(searchTerm),
				  )
				: state.original
		},
	},
})

export const { addProduct, searchProduct } = productsSlice.actions

export default productsSlice.reducer
