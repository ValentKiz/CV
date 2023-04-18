import React from 'react'
import './Main.scss'

import About from "../Sections/About"
import Education from "../Sections/Education"
import Skills from "../Sections/Skills"
import Tools from "../Sections/Tools"
import Experience from "../Sections/Experience"
import Portfolio from "../Sections/Portfolio"



function Main() {

	return (
		<main className="main">
			<About />
			<Experience />
			<Skills />
			<Tools />
			<Education />
			<Portfolio />
		</main>
	)
}

export default Main