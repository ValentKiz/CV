import React, {createElement} from 'react'
import {classNames} from "../../../libs/classNames"
import './gridbox.scss'

function GridBox({children, className, gridArea, childClass, Tag = "div", childType = "div"}) {
	return (
		<Tag className={classNames("grid", className)}>
			{children.map((child, i) => {
				const {children, className} = child.props;
				const type = Tag === "ul" ? 'li' : childType;
				// 	typeof (child.type) === 'function' ? child.type.name :
				// 		child.type;
				// console.log(child)
				// console.log(createElement(child.type, {"className": classNames(className, childClass, {["grid-item" + (i + 1)]: gridArea}), "key": {i}}, children))
				return createElement(type, {className: classNames(className, childClass, {["grid-item" + (i + 1)]: gridArea}), key: i}, child)
			})}
		</Tag>
	)
}

export default GridBox