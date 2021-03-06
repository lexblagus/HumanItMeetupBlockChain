/*
00 Cover
01 Index
02 History
03 Blockchain overview
	03.01 Blocks & chains
	03.02 User device
	03.03 Network
04 Opportunities / Business graph
	05.01 Rastreability (Manufacturing / supply chain)
	05.02 PEP
	05.03 Social network
	05.04 Card riding
	05.05 Source code
	...Certificado de curso (Tales)
	...Gaming

Refs
https://surge.sh/
https://www.youtube.com/watch?v=_160oMzblY8&t=1s
https://www2.deloitte.com/content/dam/Deloitte/ch/Documents/innovation/ch-en-innovation-blockchain-revolution.pdf
https://101blockchains.com/top-blockchain-projects-ideas/

https://originstamp.com/blog/what-is-blockchain-based-timestamping/
*/

const contents = [
	{
		path: "Cover",
		title: "Cover",
		image: "",
		refs: {
			"Surge": "https://surge.sh/",
		},
	},
	{
		path: "Index",
		title: "Index",
		image: "",
	},
	{
		path: "History",
		title: "History",
		image: "",
	},
	{
		path: "Technology",
		title: "Technology",
		refs: {
			"Blockchain 101 on YouTube": "https://www.youtube.com/watch?v=_160oMzblY8&t=1s",
		},
		contents: [
			{
				path: "BlocksAndChains",
				title: "Blocks & chains",
				image: "",
			},
			{
				path: "UserDevice",
				title: "User device",
				image: "",
			},
			{
				path: "Network",
				title: "Network",
				image: "",
			},
		],
	},
	{
		path: "Opportunities",
		title: "Opportunities",
		refs: {
			"Deloitte white paper": "https://www2.deloitte.com/content/dam/Deloitte/ch/Documents/innovation/ch-en-innovation-blockchain-revolution.pdf",
			"Top Blockchain Project Ideas": "https://101blockchains.com/top-blockchain-projects-ideas/",
		},
		contents: [
			{
				path: "%E2%80%A6_…1",
				title: "Rastreability (Manufacturing / supply chain)",
				image: "",
			},
			{
				path: "%E2%80%A6_…2",
				title: "PEP",
				image: "",
			},
			{
				path: "%E2%80%A6_…3",
				title: "Social network",
				image: "",
			},
			{
				path: "%E2%80%A6_…4",
				title: " Card riding",
				image: "",
			},
			{
				path: "%E2%80%A6_…5",
				title: "Source code",
				image: "",
			},
			{
				path: "%E2%80%A6_…6",
				title: "Certificado de curso (Tales)",
				image: "",
			},
			{
				path: "%E2%80%A6_…7",
				title: "Gaming",
				image: "",
			},
		],
	},
];

export default contents;
