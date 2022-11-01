const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
 response.status(200).json({
   message: 'Hello Docker',
 });
});

app.listen(PORT, () => {
 console.log(`Server is up on localhost:${PORT}`);
});