const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;


const connectdb = require('./config/database');
connectdb();

// json file parse or body parsser
app.use(express.json());
// to connect the communicate the frontend and backend part 
const cors = require('cors');
app.use(cors());


const signRoutes = require('./routes/User');

app.use('/api/v1', signRoutes);


app.listen(PORT, () => {
   console.log(`Server started running at port ${PORT}`);
});

app.get('/', (req, res) =>{
  res.send("<h1>Things are going right in home page</h1>");
});