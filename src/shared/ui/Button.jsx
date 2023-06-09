import React from 'react'

function Button({className, onClick, children}) {
	return (
		<button className={className || 'btn'} onClick={onClick}>{children}</button>
	)
}

export default Button