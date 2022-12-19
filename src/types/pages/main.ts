export interface IMainBlock {
	id: number;
	title: string;
	description: string;
	href: string;
	icon: string;
	image: string;
}

export interface IRequest {
	inputs: string[];
	address: string;
}

export interface IMainProps {
	[locale: string]: {
		title: string;
		mainBlocks: IMainBlock[];
		requests: IRequest[];
	}
}
