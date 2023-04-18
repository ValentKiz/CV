import React from 'react'

function Figma({colored = "false", ...props}) {
	if (colored) {
		return (
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 81.92 122.88"
				xmlSpace="preserve"
				{...props}
			>
				<g>
					<path fill="#0ACF83" d="M20.48,122.88c11.3,0,20.48-9.17,20.48-20.48V81.92H20.48C9.18,81.92,0,91.09,0,102.4 C0,113.71,9.18,122.88,20.48,122.88L20.48,122.88L20.48,122.88z" />
					<path fill="#A259FF" d="M0,61.44c0-11.3,9.18-20.48,20.48-20.48h20.48v40.96H20.48C9.18,81.92,0,72.75,0,61.44L0,61.44L0,61.44z" />
					<path fill="#F24E1E" d="M0,20.48C0,9.18,9.18,0,20.48,0h20.48v40.96H20.48C9.18,40.96,0,31.79,0,20.48L0,20.48z" />
					<path fill="#FF7262" d="M40.96,0h20.48c11.3,0,20.48,9.18,20.48,20.48c0,11.31-9.17,20.48-20.48,20.48H40.96V0L40.96,0z" />
					<path fill="#1ABCFE" d="M81.92,61.44c0,11.31-9.17,20.48-20.48,20.48c-11.31,0-20.48-9.17-20.48-20.48c0-11.3,9.17-20.48,20.48-20.48 C72.75,40.96,81.92,50.14,81.92,61.44L81.92,61.44z" />
				</g>
			</svg >
		)
	} else {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				{...props}
			// class="feather feather-figma"
			>
				<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
				<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
				<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
				<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
				<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
			</svg>
		)
	}
}

export default Figma