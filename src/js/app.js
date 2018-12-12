import fullpage from 'fullpage.js';


new fullpage('#fullpage', {
	licenseKey: process.env.FULLPAGE_LICENSE,
	navigation: true,
	navigationPosition: 'left',
	autoScrolling: true
});

//methods
// fullpage_api.setAllowScrolling(false);