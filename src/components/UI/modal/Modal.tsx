import React, { FC, useState } from 'react';
import st from './Modal.module.scss';

const content = {
	title: "",
	fields: [
		{ id: "name", label: "Full Name", icon: "request-username.svg" },
		{ id: "phone", label: "Phone Number", icon: "request-phone.svg" },
		{ id: "mail", label: "E-Mail", icon: "request-mail.svg" },
		{ id: "request", label: "Request", icon: "request-text.svg" },
	]
}

const Modal: FC = () => {
	const [fields, setFields] = useState({});
	return (
		<div className={st.wrapper}>
			<div>
				<div className={st.heading}></div>
				<div className={st.body}>
					<div>
						<span style={{ backgroundImage: `url(/assets/images/svg/request-username.svg)` }} />
						<input value="" id="name" type="text" />
						<label htmlFor="name">Full Name</label>
					</div>
					<div>
						<span style={{ backgroundImage: `url(/assets/images/svg/request-phone.svg)` }} />
						<input value="" id="phone" type="text" />
						<label htmlFor="phone">Phone Number</label>
					</div>
					<div>
						<span style={{ backgroundImage: `url(/assets/images/svg/request-mail.svg)` }} />
						<input value="" id="mail" type="text" />
						<label htmlFor="mail">E-Mail</label>
					</div>
					<div>
						<span style={{ backgroundImage: `url(/assets/images/svg/request-text.svg)` }} />
						<input value="SSSS" id="request" type="text" />
						<label htmlFor="request">Request</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;
