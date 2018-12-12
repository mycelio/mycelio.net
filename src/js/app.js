import fullpage from 'fullpage.js';


new fullpage('#fullpage', {
	licenseKey: process.env.FULLPAGE_LICENSE,
	navigation: false,
	navigationPosition: 'left',
	autoScrolling: false
});

//methods
// fullpage_api.setAllowScrolling(false);