import React from 'react'
import {classNames} from "../../shared/libs/classNames"
import './Block.scss'
function Block({Logo, name, descr, time, className}) {
	return (
		<div className={classNames("block", className)}>
			<div className="block__logo">
				<Logo className='block__img' alt='image' />
				<p className="block__name">{name}</p>
				<div></div>
			</div>
			{descr && <p className="block__descr">{descr}</p>}
			{time && <p className="block__time">{time}</p>}
		</div>
	)
}

export default Block