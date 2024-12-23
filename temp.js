const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Schema = mongoose.Schema;
const app = express();
const port = process.env.PORT || 3000;
mongoose.set('strictQuery', false);
// Connect to your MongoDB instance (replace 'mongodb://localhost/mydatabase' with your MongoDB URL)
mongoose.connect('mongodb://127.0.0.1:27017/myDB', { useNewUrlParser: true, 
useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
app.use(bodyParser.urlencoded({ extended: true }));

const Credit = mongoose.model('Credit', userSchema);

app.get('/credit', (req, res) => {
    res.sendFile(__dirname + '/credit.html');
});


app.post('/credit', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new Credit({
        name: name,
        email: email,
        password: password
    });

    newUser.save((err) => {
        if (err) {
            console.error('Error inserting into MongoDB:', err);
            return res.status(500).send('Error signing up');
        }

        console.log('User inserted into MongoDB');
        console.log('Inserted User Data:', newUser);
          res.redirect('/home');
       
    });
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/credit', (req, res) => {
  res.sendFile('credit.html', { root: __dirname });
});

app.post('/credit', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
      // Check if the user exists
      const user = await Credit.findOne({ email });

      if (user) {
          // Check if the password matches
          if (user.password === password) {
            res.redirect('/index');
          } else {
            res.redirect('/cerdit');
          }
      } else {
        res.redirect('/credit');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});