const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const port = process.env.PORT

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => console.log(`Server on port ${port}`));