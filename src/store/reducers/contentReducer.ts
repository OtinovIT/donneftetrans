import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// const fetchItem = async () => {
// 	const fetched = await axios.get('/api/cookies');
// 	return fetched;
// };

// export const getCookies = createAsyncThunk('cookies', async () =>
// 	fetchItem(),
// );

interface IMediaQuery {
	isLaptop: boolean | undefined;
	isMobile: boolean | undefined;
}
interface ContentState {
	currentLang: string;
	i18n: string;
	mediaQuery: IMediaQuery;
	loading: boolean;
}

const initialState: ContentState = {
	currentLang: 'ENGLISH',
	i18n: 'en',
	mediaQuery: {
		isLaptop: undefined,
		isMobile: undefined
	},
	loading: true
}

export const ContentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<string>) {
			state.currentLang = action.payload;
			state.i18n = action.payload.toLocaleLowerCase().substring(0, 2);
		},
		setMediaQuery(state, action: PayloadAction<IMediaQuery>) {
			state.mediaQuery = { ...action.payload };
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		}
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(getCookies.fulfilled, (state, action) => {
	// 		return;
	// 	});
	// },
})

export const ContentActions = ContentSlice.actions;
export default ContentSlice.reducer;