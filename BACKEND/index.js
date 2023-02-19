const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const connectionDB = require('./db/db')
connectionDB()
const port = process.env.PORT;
const usersRoutes = require('./routes/users.routes');
const routeLogin = require('./routes/login.routes');
const homeRoutes = require('./routes/home.routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/homes', homeRoutes);

app.use('/login', routeLogin);

app.listen(port, () => console.log(`Server on port ${port}`));