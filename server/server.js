const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then ( () => {
    console.log('DB Connected');
})
.catch((err) =>{
    console.log(err);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});