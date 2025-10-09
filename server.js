const express = require('express');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

const app = express();
app.use(express.json());
app.use(express.static('.')); // Serve static files like index.html

app.listen(3000, () => {
    console.log('Server running on port 3000');
});