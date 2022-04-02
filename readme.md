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
	const details = await getCustomIpDetails('24.48.0.1?');
	//
	console.log(details);
	res.send('your message');
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
```

### Note

Client ip detection from request does not work on localhost.
