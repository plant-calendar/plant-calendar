const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
// const db = require('./db')
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // compression middleware
  app.use(compression());

  // app.use('/auth', require('./auth'))
  // app.use('/api', require('./api'));

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use((req: any, res: any, next: any) => {
    if (path.extname(req.path).length) {
      console.log(
        'this is the req path that is giving us problems: ',
        req.path
      );
      const err = new Error('Not found');
      // @ts-ignore
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  app.use((err: any, req: any, res: any, next: any) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

async function bootApp() {
  await createApp();
  await startListening();
}

bootApp();
