const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import routes
const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.static('public'));

// connect to db
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));
  

// middleware
app.use(express.json());
// route middlewares
app.use('/api/user', authRoute);


app.get('/', (req, res) =>{
  return res.redirect('index.html');
}).listen(9000, () =>  console.log("Conncect at port: 9000"));