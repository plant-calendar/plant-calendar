import getContextForGraphQlRequests from "./controller/context";

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const graphqlHTTP = require('express-graphql');
import db from './db';
const PORT = process.env.PORT || 3000;
const app = express();
module.exports = app;
import schema from './controller';
import configureAuth from './auth';

const configureApp = () => {
  console.log('configuring app');
  console.log('dirname', path.join(__dirname, '..', 'public'));
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // compression middleware
  app.use(compression());

  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use('/public', express.static(path.join(__dirname, '..', 'public')));

  app.use((req: any, res: any, next: any) => {
    console.log('here is something', path.join(__dirname, '..', 'public'));
    if (path.extname(req.path).length) {
      console.log(
        'this is the req path that is giving us problems: ',
        req.path,
      );
      const err = new Error('Not found');
      // @ts-ignore
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use('/graphql',  graphqlHTTP(async (req, res) => {
    console.log('trying to get context for req');
    const context = await getContextForGraphQlRequests(req);
    console.log('successfully got context for req');
    if (!context.userId || !context.googleId) {
      console.log('redirecting to login since no userId and/or no googleId');
      res.redirect('/login');
      return;
    }
    return {
      schema,
      graphiql: true,
      context,
    };
  }));

  app.use('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  app.use((err: any, req: any, res: any, next: any) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
  console.log('done configuring app');
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`),
  );
};

const syncDb = async () => {
  console.log('syncing db');
  await db.sync();
  console.log('done syncing db');
};

async function bootApp() {
    await syncDb();
    await configureAuth(app);
    await configureApp();
    await startListening();
}

bootApp();
