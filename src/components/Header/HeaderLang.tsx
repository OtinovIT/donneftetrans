import React, { FC, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useHover from '../../hooks/useHover';
import { LOCALES } from '../../i18n';
import { ContentActions } from '../../store/reducers/contentReducer';
import { ILayoutComponentProps } from '../../types/layout';
import st from './HeaderLang.module.scss';

const HeaderLang: FC<ILayoutComponentProps> = ({ scrollStep }) => {
	const ref = useRef();
	const isHovering = useHover(ref);
	const dispatch = useAppDispatch();
	const currentLanguage = useAppSelector(state => state.content.currentLang);
	const [cookies, setCookie] = useCookies(['language']);

	const changeLanguage = (lang: string): void => {
		setCookie('language', lang);
		dispatch(ContentActions.setLanguage(lang));
	}
	return (
		<div ref={ref} className={st.wrapper}>
			<button className={st.toggle}>
				<span></span>
				<span></span>
			</button>
			<div className={st.languages + ` ${isHovering ? st.visible : ''}`}
				style={{ top: scrollStep > 0 ? '40px' : '70px' }}>
				<div>
					{Object.keys(LOCALES).map((lang, i) => {
						return (
							<button className={lang === currentLanguage ? st.current : ''}
								onClick={() => changeLanguage(lang)}
								key={i}
							>
								{lang.substring(0, 2)}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default HeaderLang;