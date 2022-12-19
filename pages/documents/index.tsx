import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import st from './index.module.scss';
import { IAboutProps } from '../../src/types/pages/about';
import content from '../../src/i18n/pages/documents.json';
import { useAppSelector } from '../../src/hooks/redux';

const Documents: NextPage = ({ content }: IAboutProps) => {
	const lang = useAppSelector(state => state.content.i18n);
	const loc = content[lang];
	return (
		<div className={st.wrapper}>
			<h1>{loc.title}</h1>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			content
		}
	}
}

export default Documents;