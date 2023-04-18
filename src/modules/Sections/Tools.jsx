import React from 'react'
import './tools.scss'
import {Chrome, Figma, Firefox, GitHub, Opera, Photoshop, Safari, StackOverflow, VSCode} from "../../shared/assets/svg/icons"
import Section from "../../components/Section/Section"
import FlexBox from "../../shared/ui/myUI/FlexBox/FlexBox"

function Tools() {
	const tools = [
		{descr: "Figma", Logo: Figma, colored: true},
		{descr: "Photoshop", Logo: Photoshop},
		{descr: "VSCode", Logo: VSCode},
		{descr: "GitHub", Logo: GitHub, colored: true},
		{descr: "Stack", Logo: StackOverflow},
		{descr: "Chrome", Logo: Chrome},
		{descr: "Firefox", Logo: Firefox},
		{descr: "Opera", Logo: Opera},
		{descr: "Safari", Logo: Safari},
		// {descr: "Wordpress", Logo: Safari},
	]

	return (
		<Section title="Tools">
			<FlexBox className="section__wrapper" Tag="ul">
				{tools.map(({descr, Logo, ...tool}, i) =>
					<li className="block" key={i}>
						<div className="tools__logo">
							<Logo className='block__img' alt={descr + ' image'} {...tool} />
						</div>
						<p className="block__descr">{descr}</p>
					</li>
				)}
			</FlexBox>

		</Section>
	)
}

export default Tools