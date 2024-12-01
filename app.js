const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/applications', applicationRoutes);

module.exports = app;
