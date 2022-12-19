import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/main.scss'
import MainLayout from '../src/components/Main.layout';
import { I18nProvider } from '../src/i18n';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { CookiesProvider } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../src/hooks/redux';
import { Cookies } from 'react-cookie';
import { ContentActions } from '../src/store/reducers/contentReducer';
import { useMediaQuery } from 'react-responsive';

type IAppWrapperProps = Pick<AppProps, "Component" | "pageProps">;

function AppWrapper({ Component, pageProps }: IAppWrapperProps) {
	const dispatch = useAppDispatch();
	const currentMQ = useAppSelector(state => state.content.mediaQuery);
	const isLoading = useAppSelector(state => state.content.loading);
	const cookies = new Cookies().get('language');
	const isMobile = useMediaQuery({ query: '(max-width: 870px)' });
	const isLaptop = useMediaQuery({ query: '(max-width: 1366px)' });

	useEffect(() => {
		if (cookies) dispatch(ContentActions.setLanguage(cookies));
		dispatch(ContentActions.setLoading(false));
	})

	useEffect(() => {
		dispatch(ContentActions.setMediaQuery({
			...currentMQ,
			isMobile: isMobile,
			isLaptop: isLaptop
		}));
	}, [isLoading])

	useEffect(() => {
		dispatch(ContentActions.setMediaQuery({ ...currentMQ, isMobile: isMobile }));
	}, [isMobile])

	useEffect(() => {
		dispatch(ContentActions.setMediaQuery({ ...currentMQ, isLaptop: isLaptop }));
	}, [isLaptop])

	if (isLoading) return

	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	)
}

const MyApp = ({ Component, pageProps }: IAppWrapperProps) => {
	return (
		<Provider store={store}>
			<CookiesProvider>
				<I18nProvider>
					<AppWrapper Component={Component} pageProps={pageProps} />
				</I18nProvider>
			</CookiesProvider>
		</Provider>
	)
}

export default MyApp;
