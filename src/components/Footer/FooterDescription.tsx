import React, { FC } from "react";
import st from './FooterDescription.module.scss';
import translate from "../../i18n/translate";
import { CSSTransition } from 'react-transition-group';
import { IFooterBlock } from "../../types/footer";

interface IDescription {
	descContent: IFooterBlock | Record<string, never>;
	isDescription: boolean;
	setisDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

const FooterDescription: FC<IDescription> = ({ descContent, isDescription, setisDescription }) => {
	const { id, defaultMessage, icon } = descContent;
	return (
		<CSSTransition in={isDescription}
			timeout={400}
			mountOnEnter
			unmountOnExit
			classNames={{
				enter: st.enter,
				enterDone: st.enterDone,
			}}
		>
			<div data-type={id} className={st.card}>
				<span style={{
					backgroundImage: `url(/assets/images/svg/footer-${icon})`
				}} />
				<p>{translate(`footer-block.${id}`, defaultMessage)}</p>
				<button onClick={() => setisDescription(false)}>&#x2716;</button>
			</div>
		</CSSTransition>
	)
}

export default FooterDescription;