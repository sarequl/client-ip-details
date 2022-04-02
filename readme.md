# requested client ip details

### Install the package

npm

```bash
npm install @sarequl/client-ip-details
```

yarn

```
yarn add @sarequl/client-ip-details
```

### example with expressjs

```js
const express = require('express');
const { getIpDetails, getCustomIpDetails } = require('@sarequl/client-ip-details');
const app = express();

app.get('/', async (req, res) => {
	// to get ip details of who requested to the server.
	const details = await getIpDetails(req);
	//
	console.log(details);
	res.send('your message');
});

app.get('/custom', async (req, res) => {
	// to get certain ip details, pass the IP address on the function.
	const details = await getCustomIpDetails('24.48.0.1');
	//
	console.log(details);
	res.send('your message');
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
```

### response

```json
{
	"status": "success",
	"continent": "North America",
	"continentCode": "NA",
	"country": "Canada",
	"countryCode": "CA",
	"region": "QC",
	"regionName": "Quebec",
	"city": "Montreal",
	"district": "",
	"zip": "H3G",
	"lat": 45.4995,
	"lon": -73.5848,
	"timezone": "America/Toronto",
	"offset": -14400,
	"currency": "CAD",
	"isp": "Le Groupe Videotron Ltee",
	"org": "Videotron Ltee",
	"as": "AS5769 Videotron Telecom Ltee",
	"asname": "VIDEOTRON",
	"reverse": "modemcable001.0-48-24.mc.videotron.ca",
	"mobile": false,
	"proxy": false,
	"hosting": false,
	"query": "24.48.0.1"
}
```

### Note

Client ip detection from request does not work on localhost.
