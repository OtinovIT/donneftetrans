import React, { FC, useRef } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import useHover from '../../../hooks/useHover';
import HeadingMain from '../heading-main/HeadingMain';
import MainBlockService from './MainBlockService';
import st from './MainBlock.module.scss';
import { IMainProps } from '../../../types/pages/main';

import bg_1 from '../../../../public/assets/images/pages/main-grey.jpg';
import bg_2 from '../../../../public/assets/images/pages/main-color.jpg';

const MainBlock: FC<IMainProps> = ({ content }) => {
	const isLaptop = useAppSelector(state => state.content.mediaQuery.isLaptop)
	const ref = useRef();
	const isHovering = useHover(ref);
	const { title, mainBlocks } = content;

	return (
		<div className={st.wrapper}>
			{!isLaptop && <div className={st.heading}>
				<HeadingMain title={title} />
				<span>&#129045; HOVER</span>
			</div>}
			<div className={st.background}>
				<div style={{
					backgroundImage: `url(${bg_1.src})`,
				}} />
				<div style={{
					backgroundImage: `url(${bg_2.src})`,
					opacity: isLaptop ? 0.5 : isHovering ? 0.5 : 0
				}} />
			</div>
			<div ref={ref} className={st.box}>
				<MainBlockService blocks={mainBlocks} />
			</div>
		</div>
	)
}

export default MainBlock;
