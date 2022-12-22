import Image from 'next/image';
import React, { FC } from 'react';
import translate from '../../../i18n/translate';
import { IMainBlock } from '../../../types/pages/main';
import { HMainBlock } from '../../../i18n/helpers/index';
import st from './ServicesBlock.module.scss';
import ServiceIcon from '../../UI/service-icon/ServiceIcon';
import { useAppSelector } from '../../../hooks/redux';

const ServicesBlock: FC<{ content: IMainBlock[] }> = ({ content }) => {
	const isMobile = useAppSelector(state => state.content.mediaQuery.isMobile);

	return (
		<div className={st.wrapper}>
			<h2>{translate('main-services', 'Services')}</h2>
			<div className={st.services}>
				{content.map((service, i) => {
					const { title, description } = service;
					const { icon, image } = HMainBlock[i];
					return (
						<div key={i} className={st.service}>
							<div>
								{i === 0 ? <h1>{title}</h1> : <h2>{title}</h2>}
								<p>{description}</p>
								<ServiceIcon icon={icon} />
								{isMobile && <div className={st.image}>
									<Image src={`/assets/images/pages/${image}`}
										width={270}
										height={270 * 1.5}
										loading='lazy'
									/>
								</div>}
							</div>
							{!isMobile && <div className={st.image}>
								<Image src={`/assets/images/pages/${image}`}
									width={346}
									height={346 * 1.5}
									loading='lazy'
								/>
							</div>}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ServicesBlock;
