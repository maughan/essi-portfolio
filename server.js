import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('build'))

app.listen(port, err => {
  if(err) throw err;
    console.log('server started')
})