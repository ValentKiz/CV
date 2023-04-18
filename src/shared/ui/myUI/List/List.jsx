import React from 'react'
import ListItem from './ListItem'
import './List.scss'
import {classNames} from "../../../libs/classNames"

function List({Tag = "ul", title, items, className = "", titleClass = "", itemsClass = "", children = ""}) {
	return (
		<Tag
			// className={styles}
			// className={`list${className ? ` ${className}` : ''}`}
			className={classNames('list', className)}
		>
			{title ? <h3 className={classNames("list__title", titleClass)}>{title}</h3> : null}
			{children ?
				children
				:
				items.map((item, i) =>
					<ListItem key={i} {...item} className={itemsClass} />
				)
			}

		</Tag>
	)
}

export default List