import React, {createElement, useState} from 'react'
import {classNames} from "../../../libs/classNames"
import './Accordion.scss'

function Accordion({show, children, controlled}) {
	const [open, setOpen] = useState(false)

	const {children: elements, className, ...props} = children.props;
	if (controlled) {
		const newChild = createElement(children.type, {className: classNames('accordion', className), "aria-expanded": show, ...props}, elements)
		return (
			<>
				{newChild}
			</>
		)
	} else {
		const newChild = createElement(children.type, {className: classNames('accordion', className), "aria-expanded": open, onClick: () => setOpen(!open), ...props}, elements)

		return (
			<>
				{newChild}
				<button className="accordion__button" onClick={() => setOpen(!open)}>
					<button className={classNames("arrow", {"arrow_up": open, "arrow_bottom": !open})} ></button>
				</button>
			</>
		)
	}
}

export default Accordion