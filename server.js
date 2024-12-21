const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true}));

mongoose.connect('mongodb+src://v01d:puiQNMy3fUkvJra7@test-db.dxurd.mongodb.net/?retryWrites=true&w=majority&appName=')
useNewUrlParse:true,
useU