import React from 'react'

function Instagram(props) {
	return (
		<svg
			width={16}
			height={17}
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				y="0.5"
				width={16}
				height={16}
				rx={8}
				fill="url(#paint0_radial_402_11927)"
			/>
			<rect
				y="0.5"
				width={16}
				height={16}
				rx={8}
				fill="url(#paint1_radial_402_11927)"
				fillOpacity="0.2"
			/>
			<path
				d="M6.33373 8.5002C6.33373 7.57972 7.07972 6.83333 8.0002 6.83333C8.92068 6.83333 9.66707 7.57972 9.66707 8.5002C9.66707 9.42068 8.92068 10.1671 8.0002 10.1671C7.07972 10.1671 6.33373 9.42068 6.33373 8.5002V8.5002ZM5.43266 8.5002C5.43266 9.91826 6.58214 11.0677 8.0002 11.0677C9.41826 11.0677 10.5677 9.91826 10.5677 8.5002C10.5677 7.08214 9.41826 5.93266 8.0002 5.93266C6.58214 5.93266 5.4327 7.08206 5.4327 8.5002H5.43266ZM10.0694 5.83085C10.0694 5.94953 10.1045 6.06555 10.1704 6.16425C10.2363 6.26295 10.33 6.33989 10.4396 6.38535C10.5492 6.43081 10.6698 6.44274 10.7863 6.41963C10.9027 6.39653 11.0096 6.33943 11.0935 6.25554C11.1775 6.17166 11.2347 6.06477 11.2579 5.94839C11.2811 5.832 11.2692 5.71135 11.2239 5.6017C11.1785 5.49204 11.1016 5.3983 11.003 5.33233C10.9043 5.26635 10.7883 5.23112 10.6697 5.23107H10.6694C10.5104 5.23114 10.3578 5.29435 10.2453 5.40681C10.1328 5.51927 10.0695 5.67178 10.0694 5.83085V5.83085ZM5.98012 12.5703C5.49262 12.5481 5.22765 12.4669 5.05156 12.3983C4.81811 12.3074 4.65155 12.1991 4.47642 12.0243C4.30129 11.8494 4.19289 11.683 4.1024 11.4495C4.03376 11.2735 3.95256 11.0085 3.9304 10.521C3.90616 9.9939 3.90132 9.83557 3.90132 8.50028C3.90132 7.16499 3.90656 7.0071 3.9304 6.4796C3.9526 5.9921 4.0344 5.72757 4.1024 5.55104C4.19329 5.31759 4.30153 5.15103 4.47642 4.9759C4.65131 4.80077 4.81771 4.69237 5.05156 4.60188C5.22757 4.53324 5.49262 4.45204 5.98012 4.42988C6.50718 4.40564 6.66551 4.4008 8.0002 4.4008C9.33489 4.4008 9.49338 4.40596 10.0209 4.42996C10.5084 4.45216 10.7729 4.53396 10.9494 4.60196C11.1829 4.69245 11.3495 4.80109 11.5246 4.97598C11.6997 5.15087 11.8077 5.31767 11.8986 5.55112C11.9672 5.72713 12.0484 5.99218 12.0706 6.47968C12.0948 7.00718 12.0997 7.16507 12.0997 8.50036C12.0997 9.83565 12.0948 9.99354 12.0706 10.521C12.0484 11.0085 11.9668 11.2735 11.8986 11.4496C11.8077 11.683 11.6995 11.8496 11.5246 12.0243C11.3497 12.1991 11.1829 12.3075 10.9494 12.3984C10.7734 12.467 10.5084 12.5482 10.0209 12.5704C9.49382 12.5946 9.33549 12.5994 8.0002 12.5994C6.66491 12.5994 6.50702 12.5946 5.98012 12.5704V12.5703ZM5.93872 3.53028C5.40642 3.55452 5.04268 3.63893 4.72503 3.76253C4.39626 3.89018 4.11756 4.06142 3.83927 4.33927C3.56098 4.61713 3.39018 4.89586 3.26253 5.22503C3.13893 5.54288 3.05452 5.90642 3.03028 6.43872C3.00564 6.97186 3 7.14231 3 8.5002C3 9.8581 3.00564 10.0285 3.03028 10.5617C3.05452 11.094 3.13893 11.4575 3.26253 11.7754C3.39018 12.1041 3.56102 12.3834 3.83927 12.6611C4.11752 12.9389 4.39586 13.1099 4.72503 13.2379C5.04328 13.3615 5.40642 13.4459 5.93872 13.4701C6.47214 13.4944 6.64231 13.5004 8.0002 13.5004C9.35809 13.5004 9.52854 13.4948 10.0617 13.4701C10.594 13.4459 10.9575 13.3615 11.2754 13.2379C11.6041 13.1099 11.8828 12.939 12.1611 12.6611C12.4394 12.3833 12.6099 12.1041 12.7379 11.7754C12.8615 11.4575 12.9463 11.094 12.9701 10.5617C12.9944 10.0281 13 9.8581 13 8.5002C13 7.14231 12.9944 6.97186 12.9701 6.43872C12.9459 5.90638 12.8615 5.54268 12.7379 5.22503C12.6099 4.89626 12.439 4.61757 12.1611 4.33927C11.8833 4.06098 11.6041 3.89018 11.2758 3.76253C10.9575 3.63893 10.594 3.55412 10.0621 3.53028C9.52886 3.50592 9.3585 3.5 8.0008 3.5C6.64311 3.5 6.47234 3.50564 5.93892 3.53028"
				fill="white"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_402_11927"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(1.0355 16.1495) scale(20.3141)"
				>
					<stop offset="0.09" stopColor="#FA8F21" />
					<stop offset="0.78" stopColor="#D82D7E" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_402_11927"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(8 16) scale(12.5)"
				>
					<stop offset="0.713542" stopColor="#8C3AAA" stopOpacity={0} />
					<stop offset={1} stopColor="#8C3AAA" />
				</radialGradient>
			</defs>
		</svg>
	)
}

export default Instagram

