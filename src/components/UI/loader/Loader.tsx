import React, { FC } from 'react';
import st from './Loader.module.scss';

const Loader: FC = () => {
	return (
		<div className={st.wrapper}>
			<div className={st.box}>
				<div className={st.loader}>
					<span><i /></span>
				</div>
			</div>
		</div>
	)
}

export default Loader;
