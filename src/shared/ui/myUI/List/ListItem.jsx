import React from 'react'
import FlexBox from "../FlexBox/FlexBox"
import ProgressBar from "../ProgressBar/ProgressBar"

function ListItem({name, descr, url, Logo, level}) {
	return (
		<>
			{level ?
				<FlexBox className="list__item" direction="column">
					<p className="list__name">{name} <span className="list__descr">( {descr} )</span></p>
					<ProgressBar level={level} className="list__progress" filledClass="list__progress_filled" />
				</FlexBox>
				:
				<FlexBox className="list__item">
					{Logo ?
						<div className="list__img">
							<Logo className="list__img" alt="list-item img" />
						</div>

						: null}
					<FlexBox className="list__text" direction="column"
					>
						<p className="list__name">{name}</p>
						{url ?
							<a className="list__descr" href={url}>{descr}</a>
							:
							<p className="list__descr">{descr}</p>
						}
					</FlexBox>
				</FlexBox>

			}
		</>
	)
}

export default ListItem