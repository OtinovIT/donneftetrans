import React, { FC, useEffect, useRef, useState } from "react";
import st from './Footer.module.scss';
import footer from '../../i18n/helpers/footer.json';
import translate from "../../i18n/translate";
import FooterDescription from "./FooterDescription";
import { ILayoutComponentProps } from "../../types/layout";
import { CSSTransition } from 'react-transition-group';
import { useIntl } from "react-intl";
import { IFooter } from "../../types/footer";

const Footer: FC<ILayoutComponentProps> = ({ scrollStep }) => {
	const [isDescription, setisDescription] = useState(false);
	const [descContent, setdescContent] = useState({});
	const [isScroll, setisScroll] = useState(false);
	const [isBlocks, setisBlocks] = useState(false);
	const { blocks, copyright }: IFooter = footer;
	const refs = useRef<HTMLDivElement[]>([]);
	const intl = useIntl();

	useEffect(() => {
		if (isDescription) setisDescription(false);
	}, [scrollStep])

	useEffect(() => {
		setisScroll(document.body.offsetHeight > window.innerHeight);
		setisBlocks(scrollStep > 0 || !isScroll);
	})

	return (
		<div className={st.wrapper}>
			<div className={st.section}>
				<div className={st.blocks + `${isDescription ? ' ' + st.active : ''}`}>
					{blocks.map((block, i) => {
						const { id, icon } = block;
						const tip = intl.formatMessage({ id: `footer-${id}.title` });
						return (
							<CSSTransition key={i} in={isBlocks}
								timeout={800}
								mountOnEnter
								unmountOnExit
								classNames={{
									enter: st.enter,
									enterDone: st.enterDone,
								}}
							>
								<div className={st.block} data-type={id}
									ref={e => refs.current[i] = e}
									data-tip={tip}
									onClick={() => {
										setdescContent({ ...block, isDescription: isDescription });
										setisDescription(true);
									}}
								>
									<span style={{
										backgroundImage: `url(/assets/images/svg/footer-${icon})`
									}} />
								</div>
							</CSSTransition>)
					})}
				</div>
				<div className={st.copyright}>
					<p>&#169; {translate(`footer-block.${copyright.id}`, copyright.defaultMessage)}</p>
				</div>
			</div>
			<FooterDescription isDescription={isDescription}
				setisDescription={setisDescription}
				descContent={descContent}
			/>
		</div >
	)
}

export default Footer;