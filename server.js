import express from 'express';
import path from 'path';
const app = express();
const port = 3000;


app.use(express.static('build'));

app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")))

app.listen(port, err => {
  if(err) throw err;
    console.log('server started')
})