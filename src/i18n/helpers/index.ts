interface IMainBlock {
	href: string;
	icon: string;
	image: string;
}

export const HMainBlock: IMainBlock[] = [
	{
		href: "",
		icon: "tech-icon-1.svg",
		image: "service-1.jpg"
	},
	{
		href: "",
		icon: "tech-icon-2.svg",
		image: "service-2.jpg"
	},
	{
		href: "",
		icon: "tech-icon-3.svg",
		image: "service-3.jpg"
	},
	{
		href: "",
		icon: "tech-icon-4.svg",
		image: "service-4.jpg"
	}
]

interface IField {
	id: string;
	order: number;
	icon?: string;
	required?: boolean;
}

interface IRequest {
	[type: string]: {
		mail: string;
		fields: IField[];
	}
}

export const HRequests: IRequest = {
	contact: {
		mail: "vreal.idea@gmail.com",
		fields: [
			{ id: "name", order: 1, icon: "request-username.svg" },
			{ id: "phone", order: 2, icon: "request-phone.svg", required: false },
			{ id: "mail", order: 3, icon: "request-mail.svg" },
			{ id: "request", order: 4, icon: "request-text.svg" }
		]
	},
	rate: {
		mail: "vreal.idea@gmail.com",
		fields: [
			{ id: "name", order: 1, icon: "request-username.svg" },
			{ id: "phone", order: 2, icon: "request-phone.svg", required: false },
			{ id: "mail", order: 3, icon: "request-mail.svg" },
			{ id: "request", order: 4, icon: "request-text.svg" },
			{ id: "cargo", order: 5 },
			{ id: "quantity", order: 6 },
			{ id: "loading", order: 7 },
			{ id: "discharging", order: 8 }
		]
	}
}
