import React from 'react'

const Loader = ({ children, loadingComponent = <p>Loading ...</p>, isLoading }) => isLoading ? loadingComponent : children

export default Loader