# requested client ip details

### Install the package

NPM

```bash
npm install @sarequl/client-ip-details
```

Yarn

```
yarn add @sarequl/client-ip-details
```

### example

```js
const express = require('express');
const { getIpDetails } = require('@sarequl/client-ip-details');
const app = express();

app.get('/', async (req, res) => {
	const details = await getIpDetails(req);
	console.log(details);
	res.send('your message');
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
```
