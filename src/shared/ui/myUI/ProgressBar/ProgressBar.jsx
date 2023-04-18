import React from 'react'
import {classNames} from "../../../libs/classNames"
import './ProgressBar.scss'

function ProgressBar({level, className, filledClass}) {
	return (
		<div className={classNames("progress", className)}>
			<div className={classNames("progress_filled", filledClass)} style={{width: level}}></div>
		</div>
	)
}

export default ProgressBar