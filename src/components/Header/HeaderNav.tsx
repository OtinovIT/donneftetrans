import React from 'react';
import st from './HeaderNav.module.scss';
import Link from 'next/link';
import translate from '../../i18n/translate';
import header from '../../i18n/helpers/header.json';

const HeaderNav = () => {
	const { links } = header;
	return (
		<nav className={st.nav}>
			{links.map((link, i) => {
				return (
					<Link key={i} href={link.href}>
						<a className={st.link}>
							{translate(`header-link.${link.id}`, link.defaultMessage)}
						</a>
					</Link>
				);
			})}
		</nav>
	)
}

export default HeaderNav;

