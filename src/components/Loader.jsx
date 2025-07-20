import s from './Loader.module.css'
// normal loader width = 75, size = 4, small Loader width = 25, size = 4

const Loader = ({ size = 'normal' }) => {
	const config = {
		small: { width: 25, dotSize: 4 },
		normal: { width: 75, dotSize: 8 },
	}
	const { width, dotSize } = config[size]

	return (
		<div
			className={s.loader}
			style={{ '--dot-width': `${width}px`, '--dot-size': `${dotSize}px` }}
		></div>
	)
}

export default Loader
