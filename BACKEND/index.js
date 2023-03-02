const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path')
const morgan = require('morgan');
dotenv.config();
const connectionDB = require('./db/db')
connectionDB()
const port = process.env.PORT;
const usersRoutes = require('./routes/users.routes');
const routeLogin = require('./routes/login.routes');
const homeRoutes = require('./routes/home.routes');

const routerPets = require('./routes/pet.routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
app.use(multer({storage}).single('image'))

app.use('/users', usersRoutes);
app.use('/homes', homeRoutes);

app.use('/pets', routerPets);
app.use('/login', routeLogin);

app.listen(port, () => console.log(`Server on port ${port}`));