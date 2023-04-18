import React from 'react'
import {classNames} from "../../../libs/classNames"
import './flexbox.scss'

function FlexBox({className, Tag = "div", direction = 'row', children, ...props}) {
	let styles = direction === 'column' ? 'flex_column' : 'flex'
	return (
		<Tag className={classNames(styles, className)} {...props}>
			{children}
		</Tag>
	)
}

export default FlexBox