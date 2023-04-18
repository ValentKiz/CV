import React from 'react'
import './skills.scss'
import Divider from "../../shared/ui/myUI/Divider/Divider"

import {ReactLogo} from "../../shared/assets/svg/icons"
import Section from "../../components/Section/Section"
import FlexBox from "../../shared/ui/myUI/FlexBox/FlexBox"
import GridBox from "../../shared/ui/myUI/GridBox/GridBox"

function Skills() {
	return (
		<Section title="Skills">
			<FlexBox className="section__header">
				<div className="section__subicon section__subicon_development"></div>
				<h3 className="section__subtitle">Development</h3>
			</FlexBox>

			<GridBox className="skills__grid" gridArea={true} childClass="skills__block" Tag="ul">


				<FlexBox className="skills__react"><p>React JS</p><ReactLogo animated={true} className="skills__logo" /></FlexBox>

				<FlexBox Tag="ul" test={true} className="skills__wrapper">
					<p>HTML</p>
					<Divider vertical={true} />
					<p>CSS</p>
					<Divider vertical={true} />
					<p>JS</p>
				</FlexBox>

				<FlexBox Tag="ul" className="skills__wrapper skills__design">
					<p>Adaptive</p>
					<Divider vertical={true} />
					<div>
						<p>Semantic</p>
						<Divider className='skills__wrapper-divider' />
						<p>Cross-browser</p>
					</div>
					<Divider vertical={true} />
					<p>Responsive</p>
				</FlexBox>

				<FlexBox Tag="ul" className="skills__wrapper">
					<li>Redux</li>
					<Divider vertical={true} />
					<li>MobX</li>
				</FlexBox>

				<p>API and Databases</p>

				<FlexBox className="skills__list" direction="column" Tag="ul">
					<li>Flex / Grid</li>
					<li>SCSS</li>
					<li>SASS</li>
				</FlexBox>


				<p>Bootstrap, Jquery, NextJS, etc</p>


				<FlexBox className="skills__list" direction="column" Tag="ul">
					<li>Git</li>
					<li>GitHub</li>
					<li>Gulp</li>
					<li>Webpack</li>
					<li><span className="line-through">CRA</span></li>
					<li><strong className="strong">Vite</strong></li>
				</FlexBox>


				<p>Application testing</p>

				<FlexBox Tag="ul" className="skills__wrapper">
					<li>Node.js</li>
					<Divider vertical={true} />
					<li>Express</li>
					<Divider vertical={true} />
					<li>Sequelize</li>
					<Divider vertical={true} />
					<li>PostgreSQL</li>
				</FlexBox>


			</GridBox>
		</Section>
	)
}

export default Skills