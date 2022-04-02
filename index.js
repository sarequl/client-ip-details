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
		const url = `http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`;
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

const getCustomIpDetails = async ip => {
	return ipDetails(ip);
};
module.exports = { getIpDetails, getCustomIpDetails };
