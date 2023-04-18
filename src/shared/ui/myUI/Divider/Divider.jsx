import React from 'react'
import {classNames} from "../../../libs/classNames";
import './Divider.scss'

function Divider({vertical = false, withRound = false, size = 0, className = ""}) {
	return (
		<div className={classNames('divider', {'divider_vertical': vertical, 'divider_with-round': withRound, ["divider_size_" + size]: size, className})}>

		</div>
	)
}

export default Divider