require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const subscriberRouter = require('./routes/subscribers');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to MongoDB local database.'));

app.use(express.json());
app.use('/subscribers', subscriberRouter);

serverPort = 3000;
app.listen(serverPort, () => console.log('Server started.'));