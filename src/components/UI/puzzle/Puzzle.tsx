import React, { FC, useEffect, useRef } from 'react';
import useHover from '../../../hooks/useHover';
import st from './Puzzle.module.scss';

const Puzzle: FC = () => {
	const ref = useRef();
	const isHovering = useHover(ref);

	return (
		<div className={st.wrapper}>
			<div className={st.background}>
				<div style={{
					backgroundImage: 'url(/assets/images/pages/main-grey.jpg)',
				}} />
				<div style={{
					backgroundImage: 'url(/assets/images/pages/main-color.jpg)',
					opacity: isHovering ? 0.5 : 0
				}} />
			</div>
			{/* <div ref={ref} className={st.puzzle}>
				<div className={st.part}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550">
						<path d="M423,276.8a77,77,0,0,0,112.46,66.56A10,10,0,0,1,550,352.27V550H352.27a10,10,0,0,1-8.91-14.52,77,77,0,1,0-136.81-.18,10,10,0,0,1-8.81,14.7H0V0H550V197.74a10,10,0,0,1-14.7,8.81A77,77,0,0,0,423,276.8Z" />
					</svg>
					<div>
						<span style={{
							backgroundImage: 'url(/assets/images/svg/tech-icon-2.svg)'
						}} />
						<h2>Cargo Transportation</h2>
						<p>Development of the Stowage Plans, Sequencies of Loading Plans, Reinforcement Plans, Stability & Strength calculations of vessel during HLOCT operations, Strength calculation of fastenings, etc.</p>
					</div>
				</div>
				<div className={st.part}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677 677">
						<path d="M0,273.2a77,77,0,0,1,112.46-66.56A10,10,0,0,0,127,197.73V0H677V550H479.27a10,10,0,0,0-8.91,14.52,76.85,76.85,0,0,1,8.58,38.62c-1.56,39.19-35.94,73-75.14,73.84A77,77,0,0,1,333.55,564.7a10,10,0,0,0-8.81-14.7H127V352.26a10,10,0,0,0-14.7-8.81A77,77,0,0,1,0,273.2Z" />
					</svg>
					<div>фывфыв</div>
				</div>
				<div className={st.part}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677 677">
						<path d="M0,273.2a77,77,0,0,1,112.46-66.56A10,10,0,0,0,127,197.73V0H677V550H479.27a10,10,0,0,0-8.91,14.52,76.85,76.85,0,0,1,8.58,38.62c-1.56,39.19-35.94,73-75.14,73.84A77,77,0,0,1,333.55,564.7a10,10,0,0,0-8.81-14.7H127V352.26a10,10,0,0,0-14.7-8.81A77,77,0,0,1,0,273.2Z" />
					</svg>
					<div>фывфыв</div>
				</div>
				<div className={st.part}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550">
						<path d="M423,276.8a77,77,0,0,0,112.46,66.56A10,10,0,0,1,550,352.27V550H352.27a10,10,0,0,1-8.91-14.52,77,77,0,1,0-136.81-.18,10,10,0,0,1-8.81,14.7H0V0H550V197.74a10,10,0,0,1-14.7,8.81A77,77,0,0,0,423,276.8Z" />
					</svg>
					<div>фывфыв</div>
				</div>
			</div> */}
		</div>
	)
}

export default Puzzle;
