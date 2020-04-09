import {createServer} from 'http';
import {express} from 'express';
import {compression} from 'compression';
import {morgan} from 'morgan';
import {path} from 'path';

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const app = express();
const dev = app.get('env') !== "production"

if (!dev) {
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

const server = createServer(app);

server.listen(PORT, err => {
  if(err) throw err;
    console.log('server started')
})