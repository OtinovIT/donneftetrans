import React, { FC, useEffect, useRef, useState } from 'react';
import useHover from '../../../hooks/useHover';
import st from './CustomerRequest.module.scss';
import { Hover3D } from '../../UI/classes/hover3d';
import translate from '../../../i18n/translate';
import { useAppSelector } from '../../../hooks/redux';
import { IRequest } from '../../../types/pages/main';
import Portal from '../../../HOC/Portal';

const CustomerRequest: FC<{ content: IRequest[] }> = ({ content }) => {
	const [isActive, setisActive] = useState(false);
	const [isRequestModal, setisRequestModal] = useState(false);
	const isLaptop = useAppSelector(state => state.content.mediaQuery.isLaptop);
	const ref = useRef();
	const isHovering = useHover(ref);
	let hover3D = null;

	const parallax = (e: MouseEvent) => {
		document.querySelectorAll('[data-speed]').forEach((layer: HTMLDivElement) => {
			const speed = Number(layer.getAttribute('data-speed'));
			const x = e.pageX * speed / 100;
			const y = e.pageY * speed / 100;
			layer.style.backgroundPosition = `${x}px ${y - 40}px`
		});
	};

	useEffect(() => {
		document.addEventListener('mousemove', e => parallax(e));
		return () => document.removeEventListener('mousemove', e => parallax(e));
	});

	useEffect(() => {
		hover3D = isHovering && !isLaptop ? new Hover3D('#card') : null;
	}, [isHovering, isLaptop])

	const defaultMessages = {
		'request-main.title': 'Asking us a question is very easy. Just click on the button and select the request you need.',
		'btn-request.rate': 'Rate Request',
		'btn-request.contact': 'Contact Request',
		'btn-request.title': 'Request'
	}

	return (<>
		<Portal selector="#portal">
			<div>asdaddsda</div>
		</Portal>
		<div className={st.wrapper + `${isActive ? ' ' + st.active : ''}`}>
			<div className={st.bg}>
				<img src='/assets/images/pages/request-bg.jpg' alt='background 1' />
				<div />
				<div data-speed={1} />
			</div>
			<h2>{translate('btn-request.title', defaultMessages['btn-request.title'])}</h2>
			<div id='card'>
				<div ref={ref} className={st.card}>
					<h2>{translate('request-main.title', defaultMessages['request-main.title'])}</h2>
					<button onClick={() => setisActive(!isActive)} className={st.start}>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
								<path d="M33 8.21a2 2 0 0 0 .68 2.79 17.88 17.88 0 1 1-17.78.25 2 2 0 0 0 .61-2.81 2 2 0 0 0-2.66-.6 21.85 21.85 0 1 0 21.77-.3 2 2 0 0 0-2.62.67Z" />
								<rect width="3.97" height="17.21" x="23.01" y="1.5" rx="1.82" />
							</svg>
						</span>
					</button>
					<span>
						<span />
						<span />
					</span>
					<div className={st.firstReq}>
						<button onClick={() => setisRequestModal(true)}>
							{translate('btn-request.rate', defaultMessages['btn-request.rate'])}
						</button>
						<span />
					</div>
					<div className={st.secondReq}>
						<button onClick={() => setisRequestModal(true)}>
							{translate('btn-request.contact', defaultMessages['btn-request.contact'])}
						</button>
						<span />
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default CustomerRequest;
