import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import translate from '../../../i18n/translate';
import st from './Modal.module.scss';
interface IModal {
	content: any;
	setisModal: Dispatch<SetStateAction<boolean>>;
}

interface InitialObj { [id: string]: string }

const Modal: FC<IModal> = ({ content, setisModal }) => {
	const [fields, setFields] = useState({});
	const [isLoading, setLoading] = useState(false);

	const getInitialObj = (): InitialObj => {
		const initialObj = {};
		content.fields.forEach(field => initialObj[field.id] = '');
		return initialObj;
	}

	const send = (): void => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000)
	};

	const inputType = (id: string): string => {
		switch (id) {
			case 'mail': return 'email';
			case 'password': return 'password';
			default: return;
		}
	}

	useEffect(() => {
		if (!Object.keys(fields).length) setFields(getInitialObj());
	})

	return (
		<div className={st.wrapper}>
			<div>
				<button onClick={() => setisModal(false)} className={st.close}>&#10006;</button>
				<div className={st.heading}>
					<span />
					<h2>Request Form</h2>
				</div>
				<div className={st.body}>
					{content.fields.map((field, i) => {
						const { id, label, icon } = field;
						return (
							<div key={i}>
								<span style={{ backgroundImage: `url(/assets/images/svg/${icon || 'request-custom.svg'})` }} />
								<input onChange={e => setFields({ ...fields, [id]: e.target.value })} id={id} type={inputType(id)} />
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
