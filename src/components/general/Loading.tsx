import React from 'react'
import LoadingSpinner from './LoadingSpinner'
import styles from '../../styles/components/Loading.module.css'

// TODO: Rethink this and make it global for any async pages
const Loading = () => {
	return (
		<div className={styles.container}>
			<span className={`${styles.text} mb-3`}>Loading...</span>
			<LoadingSpinner />
		</div>
	)
}

export default Loading
