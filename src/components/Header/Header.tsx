import React, { FC } from 'react';
import st from './Header.module.scss';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import HeaderLang from './HeaderLang';
import HeaderMobileMenu from './HeaderMobileMenu';
import { ILayoutComponentProps } from '../../types/layout';
import { useAppSelector } from '../../hooks/redux';

const Header: FC<ILayoutComponentProps> = ({ scrollStep }) => {
	const isMobile = useAppSelector(state => state.content.mediaQuery.isMobile);
	return (
		<header className={st.wrapper + ` ${scrollStep > 0 ? st.scrolled : ''}`}>
			<div className={st.field}>
				<Link href='/'>
					<a>
						<img className={st.logo}
							src={`/assets/images/svg/logo${scrollStep > 0 || isMobile ? '-mini' : ''}.svg`}
							alt='logo' />
					</a>
				</Link>
				{isMobile ? <HeaderMobileMenu scrollStep={scrollStep} /> : <HeaderNav />}
				<HeaderLang scrollStep={scrollStep} />
			</div>
		</header>
	)
}

export default Header;