import Link from 'next/link';
import React, { FC, useState } from 'react';
import translate from '../../i18n/translate';
import BurgerButton from '../UI/btn-burger/BurgerButton';
import st from './HeaderMobileMenu.module.scss';
import header from '../../i18n/helpers/header.json';
import { ILayoutComponentProps } from '../../types/layout';
import { IHeader } from '../../types/header';

const HeaderMobileMenu: FC<ILayoutComponentProps> = ({ scrollStep }) => {
	const [isOpen, setisOpen] = useState(false);
	const { links }: IHeader = header;

	return (
		<div className={st.wrapper}>
			<BurgerButton
				isOpen={isOpen}
				setisOpen={setisOpen}
				scrollStep={scrollStep}
			/>
			{isOpen && <div className={st.list}
				style={{
					top: scrollStep > 0 ? 'var(--header-mobile-height)' : 'var(--header-height)',
					height: scrollStep > 0 ? 'calc(100vh - var(--header-mobile-height)' : 'calc(100vh - var(--header-height))'
				}}>
				<nav>
					{links.map((link, i) => {
						return (
							<div key={i}
								className={st.link}>
								<Link href={link.href}>
									<a onClick={() => setisOpen(false)}>
										{translate(`header-link.${link.id}`, link.defaultMessage)}
									</a>
								</Link>
							</div>
						);
					})}
				</nav>
			</div>}
		</div>
	)
}

export default HeaderMobileMenu;