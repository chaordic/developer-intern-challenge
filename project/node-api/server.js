const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//inicia o app
const app = express();
app.use(express.json());
app.use(cors());
//inicia database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

require('./src/models/Url');


//rotas
app.use('/', require('./src/routes'));
app.listen(3001);