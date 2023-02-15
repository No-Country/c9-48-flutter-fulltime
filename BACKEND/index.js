const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const connectionDB = require('./db/db')
connectionDB()
const port = process.env.PORT;
const ownersRoutes = require('./routes/owners.routes');
const caregiversRoutes = require('./routes/caregivers.routes')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/owners', ownersRoutes);
app.use('/caregivers', caregiversRoutes)

app.listen(port, () => console.log(`Server on port ${port}`));