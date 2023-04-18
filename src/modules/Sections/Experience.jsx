import React, {useState} from 'react'
import './experience.scss'
import Section from "../../components/Section/Section"
import List from "../../shared/ui/myUI/List/List"
import {AddressSmall} from "../../shared/assets/svg/icons"
import Datalize from "../../shared/assets/svg/logo/Datalize"
import {classNames} from "../../shared/libs/classNames"
import Accordion from "../../shared/ui/myUI/Accordion/Accordion"
import FlexBox from "../../shared/ui/myUI/FlexBox/FlexBox"


function Experience() {
	const [showId, setShowId] = useState(0)
	const experience = [
		{
			name: "Datalize", role: "Frontend Developer", address: "Minsk, Belarus", time: "Aug 2022 - Present", Logo: Datalize, active: true,
			listDescr: ["Partial, Project work", "Develop custom Admin Panel", "Develop web-sites and Apps", "Develop module functionality", "SEO, WPO", "Debugging"]
		},
		{
			name: "Datalize", role: "Frontend Developer", address: "Minsk, Belarus", time: "Jul 2020 - Aug 2022", Logo: Datalize, active: false,
			listDescr: ["Lorem Ipsum", "Text", "Text", "Texting", "Debugging"]
		}
	]

	const onShowHandler = (id) => {
		if (id === showId) {
			setShowId(-1)
		} else {
			setShowId(id)
		}
	}
	return (
		<Section title="Experience">
			<FlexBox className="section__wrapper" direction="column" Tag="ul">
				{experience.map(({name, role, address, time, Logo, active, listDescr}, i) =>
					<FlexBox className="block experience__block" key={i} onClick={() => onShowHandler(i)} >
						<FlexBox className="block__header">
							<FlexBox className="block__left">
								<Logo className='block__img experience__img' alt='image' />
								<div className="block__company">
									<p className='block__role'>{role}</p>
									<p className='block__name'>{name}</p>
								</div>
							</FlexBox>

							<FlexBox className="block__right" direction="column">
								<p className={classNames('block__time experience__time', {active})}>{time}</p>
								<p className='block__address'><AddressSmall />{address}</p>
							</FlexBox>

						</FlexBox>

						<div className="block__accordion">
							<Accordion show={showId === i} controlled={true}>
								<ul className="experience__list">
									{listDescr.map((text, i) =>
										<li key={i} className="experience__list-item">{text}</li>
									)}
								</ul>
							</Accordion>
							<button className={classNames("arrow", {"arrow_up": showId === i, "arrow_bottom": !(showId === i)})}></button>
						</div>

					</FlexBox>

				)}

			</FlexBox>

		</Section>
	)
}

export default Experience