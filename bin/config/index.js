module.exports = {
	npmUrl: 'https://registry.npmjs.org/create-strve',
	promptTypeList: [
		{
			type: 'list',
			message: 'Please select the template type to pull:',
			name: 'type',
			choices: [
				{
					name: 'create-strve',
					value: {
						url: 'https://github.com/maomincoding/viteStrve.git',
						gitName: 'viteStrve',
						val: 'viteStrve',
					},
				},
			],
		},
	],
};
