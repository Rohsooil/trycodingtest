import express from 'express';
const app = express();

let server = app.listen(8080, () => {
  console.log('server is running on port 8080')
});
