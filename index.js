const requestIp = require('request-ip');
const fetch = require('node-fetch');

const ipDetect = req => {
	const clientIp = requestIp.getClientIp(req);

	if (clientIp.includes(':')) {
		return (cleanIP = clientIp.split(':')[3]);
	} else {
		return (cleanIP = clientIp);
	}
};

const ipDetails = async ip => {
	try {
		const url = `http://ip-api.com/json/${ip}`;
		const response = await fetch(url);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const getIpDetails = req => {
	const ip = ipDetect(req);
	return ipDetails(ip);
};
module.exports = { getIpDetails };
