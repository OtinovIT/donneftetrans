import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import content from '../src/i18n/pages/index.json';
import st from './index.module.scss';
import { IMainProps } from '../src/types/pages/main';
import { useAppSelector } from '../src/hooks/redux';
import MainBlock from '../src/components/Pages/main-block/MainBlock';
import Loader from '../src/components/UI/loader/Loader';
import ServicesBlock from '../src/components/Pages/service-block/ServicesBlock';
import CustomerRequest from '../src/components/Pages/customer-request/CustomerRequest';

const Home: NextPage = ({ content }: IMainProps) => {
	const lang = useAppSelector(state => state.content.i18n);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	})

	if (isLoading) return <Loader />

	return (
		<>
			<MainBlock content={content[lang]} />
			<ServicesBlock content={content[lang].mainBlocks} />
			<CustomerRequest content={content[lang].requests} />
		</>
	)
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			content
		},
	};
};