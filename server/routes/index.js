const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const ApolloServer = require("apollo-server-express")
router.use('/api', apiRoutes);

const { 
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [

    process.env.NODE_ENV === 'production' ?
      ApolloServerPluginLandingPageProductionDefault({ footer: false }) :
      ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ]
});


// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
