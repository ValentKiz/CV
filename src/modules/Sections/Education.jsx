import React from 'react'
import {Udemy, University} from "../../shared/assets/svg/icons"

import Block from "../../components/Section/Block"
import Section from "../../components/Section/Section"
import FlexBox from "../../shared/ui/myUI/FlexBox/FlexBox"

function Education() {
	const education = [
		{name: "Udemy", descr: "WEB-developer", time: 2022, Logo: Udemy},
		{name: "Udemy", descr: "JavaScript + React", time: 2022, Logo: Udemy},
		{name: "BSEU", descr: "Bachelor of Logistics and Economics", time: 2016, Logo: University}
	]

	return (
		<Section title="Education">
			<FlexBox className="section__wrapper education__wrapper" Tag="ul">
				{education.map((block, i) =>
					<Block key={i} {...block} className="education__block" />
				)
				}
			</FlexBox>

		</Section>
	)
}

export default Education