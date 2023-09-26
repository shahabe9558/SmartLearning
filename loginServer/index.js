const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;


const connectdb = require('./config/database');
connectdb();

// json file parse or body parsser
app.use(express.json());

const signRoutes = require('./routes/User');

app.use('/api/v1', signRoutes);


app.listen(PORT, () => {
   console.log(`Server started running at port ${PORT}`);
});

app.get('/', (req, res) =>{
  res.send("Everthing working in the home page");
});