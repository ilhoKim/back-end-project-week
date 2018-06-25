const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const userRouter = require('./users/userRouter');
const noteRouter = require('./notes/noteRouter');

mongoose
    .connect('mongodb://localhost/backendDB')
    .then(() => console.log('\n=== Connected to DB ===\n'))
    .catch(error => console.log('\n!!! Error connecting to DB !!!\n', error))

server.use(express.json());
server.use(cors);
server.use(helmet);

server.use('/api/user', userRouter);
server.use('/api/note', noteRouter);

const port = process.env.PORT || 5005;
server.listen(port, () => {
  console.log(`*** Server up and running on ${port} ***`);
});