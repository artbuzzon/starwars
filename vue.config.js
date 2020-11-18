module.exports = {
	css: {
		requireModuleExtension: false,
		loaderOptions: {
			css: {
				modules: {
					localIdentName: '[hash:base64:5]'
				},
				localsConvention: 'camelCaseOnly'
			}
		}
	}
};