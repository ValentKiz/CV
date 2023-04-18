import React from 'react'
import Divider from "../../shared/ui/myUI/Divider/Divider"
import './Section.scss'

function Section({title, children}) {
	return (
		<section className="section">
			<Divider vertical={true} withRound={true} size={2} />
			<div className="section__info">
				<h2 className="section__title">{title}</h2>
				{children}
			</div>
		</section>
	)
}

export default Section