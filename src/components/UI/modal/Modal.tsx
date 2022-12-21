import React, { FC, useEffect, useState } from 'react';
import translate from '../../../i18n/translate';
import st from './Modal.module.scss';

interface IFields {
	id: string;
	label: string;
	icon?: string | 'request-custom.svg';
}

const content = [
	{ id: "name", label: "Full Name", icon: "request-username.svg" },
	{ id: "phone", label: "Phone Number", icon: "request-phone.svg" },
	{ id: "mail", label: "E-Mail", icon: "request-mail.svg" },
	{ id: "request", label: "Request", icon: "request-text.svg" },
]

const Modal: FC = () => {
	const [fields, setFields] = useState({});
	const [isLoading, setLoading] = useState(false);

	const getInitialObj = () => {
		const initialObj = {};
		content.forEach(field => initialObj[field.id] = '');
		return initialObj;
	}

	const setValue = (id: string, value: any) => {
		setFields({ ...fields, id: value });
	};
	const send = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000)
		console.log(fields);
	};

	useEffect(() => {
		if (!Object.keys(fields).length) setFields(getInitialObj());
	})

	return (
		<div className={st.wrapper}>
			<div>
				<div className={st.heading}>
					<h2>Request Form</h2>
				</div>
				<div className={st.body}>
					{content.map((field, i) => {
						const { id, label, icon } = field;
						return (
							<div key={i}>
								<span style={{ backgroundImage: `url(/assets/images/svg/${icon || 'request-username.svg'})` }} />
								<input onChange={e => setFields({ ...fields, [id]: e.target.value })} id={id} type="text" />
								<label className={st.label + ` ${fields[id] ? st.not_empty : ''}`} htmlFor={id}>{label}</label>
							</div>
						)
					})}
				</div>
				<button disabled={isLoading} onClick={send} className={st.send + `${isLoading ? ' ' + st.disabled : ''}`}>
					<span style={{ backgroundImage: `url(/assets/images/svg/${isLoading ? 'request-loader.svg' : 'request-send.svg'}` }} />
					<div>{translate('btn-request.send', 'Send')}</div>
				</button>
			</div>
		</div>
	)
}

export default Modal;
