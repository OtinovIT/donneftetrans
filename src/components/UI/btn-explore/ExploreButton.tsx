import React, { CSSProperties, FC } from 'react';
import translate from '../../../i18n/translate';
import st from './ExploreButton.module.scss';

interface IExploreButton {
	href: string;
	style?: CSSProperties;
}

const ExploreButton: FC<IExploreButton> = ({ style, href }) => {
	return (
		<a onClick={() => console.log('sdf')} style={{ ...style }} className={st.button}>
			<i />
			<span>
				{translate('btn-explore', 'explore')}
			</span>
		</a>
	)
}

export default ExploreButton;