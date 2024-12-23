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
// Create a Mongoose model (schema)
const User = mongoose.model('User', {
    collectionname: String,
    name: String,
    memoryname: String,
    date: String,
    time: String,
    description: String
});
// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
// Serve the HTML form
app.get('/', (req, res) => {
res.sendFile(__dirname + '/home.html');
});
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/collections', (req, res) => {
    res.sendFile(__dirname + '/collections.html');
});
app.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
});
app.get('/cards1', (req, res) => {
    res.sendFile(__dirname + '/cards1.html');
});
app.get('/cards2', (req, res) => {
    res.sendFile(__dirname + '/cards2.html');
});
app.get('/cards3', (req, res) => {
    res.sendFile(__dirname + '/cards3.html');
});
app.get('/cards4', (req, res) => {
    res.sendFile(__dirname + '/cards4.html');
});
app.get('/displayall', (req, res) => {
    res.sendFile(__dirname + '/displayall.html');
});
app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/delete.html');
});
app.get('/deleteall', (req, res) => {
    res.sendFile(__dirname + '/deleteall.html');
});
app.get('/display', (req, res) => {
    res.sendFile(__dirname + '/display.html');
});
app.get('/update', (req, res) => {
    res.sendFile(__dirname + '/update.html');
});
app.get('/operations', (req, res) => {
    res.sendFile(__dirname + '/operations.html');
});
// Handle form submission
app.post('/submit', (req, res) => {
const { collectionname, name, memoryname, date, time, description  } = req.body;
// Create a new User document and save it to MongoDB
const user = new User({ collectionname, name, memoryname, date, time, description });
user.save()
.then(() => {
res.send(`<html>
<head>
<meta charset="UTF-8">
        <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
        <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
        <style>
              body {
                  background-color: #f2f2f2; /* Pleasant background color */
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
              }

              header {
                  background-color: #333; /* Header background color */
                  color: #fff;
                  text-align: center;
                  padding: 20px;
              }

              h1 {
                  margin: 0;
              }

              .container {
                  max-width: 450px;
                  margin: 20px auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              table {
                  width: 100%;
                  border-collapse: collapse;
              }

              table, th, td {
                  border: 1px solid #ddd;
              }

              th, td {
                  padding: 10px;
                  text-align: left;
              }

              th {
                  background-color: #333;
                  color: #fff;
              }

              tr:nth-child(even) {
                  background-color: #f2f2f2;
              }

              tr:nth-child(odd) {
                  background-color: #fff;
              }
              button a
              {
                  width: 200%;
                  margin-left: -20px;
                  margin-top: -20px;
                  margin-bottom: -20px;
                  margin-right: -20px;
                  background: #333;
                  color: #fff;
                  border: none;
                  padding: 10px;
                  border-radius: 5px;
              }
          </style>
          </head>
<body align="center">
    <h1>Your Memory has been Saved..!!.</h1><br><br>
    <div class="img1"><img src="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697640996/Project/done_tdp1ma.png"></img><br><br></img1>
    <button><a href="/collections">Done</a></button>
</body>
</html>
`);
})
.catch((err) => {
console.error(err);
res.status(500).send('Error saving data to MongoDB.');
});
});
app.post('/displayall', (req, res) => {
    User.find({}, (err, records) => {
      if (err) {
        res.send('Error fetching records');
      } else {
        res.send(`
        <html>
        <head>
          <meta charset="UTF-8">
          <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
          <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
          <style>
              body {
                  background-color: #f2f2f2; /* Pleasant background color */
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
              }

              header {
                  background-color: #333; /* Header background color */
                  color: #fff;
                  text-align: center;
                  padding: 20px;
              }

              h1 {
                  margin: 0;
              }

              .container {
                  max-width: 450px;
                  margin: 20px auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              table {
                  width: 100%;
                  border-collapse: collapse;
              }

              table, th, td {
                  border: 1px solid #ddd;
              }

              th, td {
                  padding: 10px;
                  text-align: left;
              }

              th {
                  background-color: #333;
                  color: #fff;
              }

              tr:nth-child(even) {
                  background-color: #f2f2f2;
              }

              tr:nth-child(odd) {
                  background-color: #fff;
              }
              button a
              {
                  width: 200%;
                  margin-left: -20px;
                  margin-top: -20px;
                  margin-bottom: -20px;
                  margin-right: -20px;
                  background: #333;
                  color: #fff;
                  border: none;
                  padding: 10px;
                  border-radius: 5px;
              }
          </style>
        </head>
        <body align="center">
          <h1>All Your Memories</h1>
          <table align="center" border="2" cellpadding="3" cellspacing="6">
            <thead>
                <tr>
                    <th>Collection Name</th>
                    <th>Name</th>
                    <th>Memory Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Desription of the Memory</th>
                </tr>
            </thead>
            <tbody>
            ${records.map(record => `
              <tr> 
                <td>${record.collectionname}</td>  
                <td>${record.name}</td>
                <td>${record.memoryname}</td>  
                <td>${record.date}</td>  
                <td>${record.time}</td>  
                <td>${record.description}</td>
              </tr>
            `).join('')}
            </tbody>
          </table>
          <br><br>
          <br>
          <button><a href="/operations">Done</a></button>
        </body>
      </html>
        `);
      }
    });
  });
app.post('/display', (req, res) => {
    const name = req.body.name;
    // Use Mongoose to find the specific record by its ID
    User.findOne({ name: name }, (err, user) => {
      if (err) {
        res.send('Error finding Memory');
      } else if (!user) {
        res.send('Memory not found');
      } else {
        res.send(`
        <html>
        <head>
        <meta charset="UTF-8">
        <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
        <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
        <style>
              body {
                  background-color: #f2f2f2; /* Pleasant background color */
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
              }

              header {
                  background-color: #333; /* Header background color */
                  color: #fff;
                  text-align: center;
                  padding: 20px;
              }

              h1 {
                  margin: 0;
              }

              .container {
                  max-width: 450px;
                  margin: 20px auto;
                  padding: 20px;
                  background-color: #fff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              table {
                  width: 100%;
                  border-collapse: collapse;
              }

              table, th, td {
                  border: 1px solid #ddd;
              }

              th, td {
                  padding: 10px;
                  text-align: left;
              }

              th {
                  background-color: #333;
                  color: #fff;
              }

              tr:nth-child(even) {
                  background-color: #f2f2f2;
              }

              tr:nth-child(odd) {
                  background-color: #fff;
              }
              button a
              {
                  width: 200%;
                  margin-left: -20px;
                  margin-top: -20px;
                  margin-bottom: -20px;
                  margin-right: -20px;
                  background: #333;
                  color: #fff;
                  border: none;
                  padding: 10px;
                  border-radius: 5px;
              }
          </style>
        </head>
        <body align="center">
          <h1>Recollect your Memory</h1>
          <table border="2" align="center" cellspacing="6" cellpaddin="6">
            <tr>
                <th>Fields</th>
                <th>Value</th>
            </tr>
            <tr>
              <td>Collection Name</td>
              <td>${user.collectionname}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>${user.name}</td>
            </tr>
            <tr>
              <td>Memory Name</td>
              <td>${user.memoryname}</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>${user.date}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>${user.time}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>${user.description}</td>
            </tr>
          </table><br>
          <button><a href="/operations">Done</a></button>
        </body>
      </html>
        `);
      }
    });
  });
app.post('/delete', (req, res) => {
    const recordId = req.body.name;
    // Use Mongoose to delete the record by its ID using deleteOne
    User.deleteOne({name: recordId }, (err) => {
      if (err) {
        res.send('Error deleting record');
      } else {
        res.send(`<html>
        <head>
        <meta charset="UTF-8">
        <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
        <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
        <style>
            body {
                background-color: #f2f2f2; /* Pleasant background color */
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }

            header {
                background-color: #333; /* Header background color */
                color: #fff;
                text-align: center;
                padding: 20px;
            }

            h1 {
                margin: 0;
            }

            .container {
                max-width: 450px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            table, th, td {
                border: 1px solid #ddd;
            }

            th, td {
                padding: 10px;
                text-align: left;
            }

            th {
                background-color: #333;
                color: #fff;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            tr:nth-child(odd) {
                background-color: #fff;
            }
            button a
            {
                width: 200%;
                margin-left: -20px;
                margin-top: -20px;
                margin-bottom: -20px;
                margin-right: -20px;
                background: #333;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 5px;
            }
        </style>
        </head>
  <body align="center">
  <h1>Memory Deleted.</h1><br>
  <button><a href="/operations">Done</a></button>
  </body>
  </html>`);
      }
    });
  });
app.post('/deleteall', (req, res) => {
    const recordId = req.body.name;
    // Use Mongoose to delete the record by its ID using deleteOne
    User.remove({}, (err) => {
      if (err) {
        res.send('Error deleting record');
      } else {
        res.send(`<html>
        <head>
        <meta charset="UTF-8">
        <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
        <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
        <style>
            body {
                background-color: #f2f2f2; /* Pleasant background color */
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }

            header {
                background-color: #333; /* Header background color */
                color: #fff;
                text-align: center;
                padding: 20px;
            }

            h1 {
                margin: 0;
            }

            .container {
                max-width: 450px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            table, th, td {
                border: 1px solid #ddd;
            }

            th, td {
                padding: 10px;
                text-align: left;
            }

            th {
                background-color: #333;
                color: #fff;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            tr:nth-child(odd) {
                background-color: #fff;
            }
            button a
            {
                width: 200%;
                margin-left: -20px;
                margin-top: -20px;
                margin-bottom: -20px;
                margin-right: -20px;
                background: #333;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 5px;
            }
        </style>
        </head>
  <body align="center">
  <h1>All your Memories Deleted.</h1><br>
  <button><a href="/operations">Done</a></button>
  </body>
  </html>`);
      }
    });
  });
app.post('/update', (req, res) => {
    const name = req.body.name;
    const newdescription = req.body.newdescription;
    const newdate = req.body.newdate;
    const newtime =req.body.newtime;
  
    // Use Mongoose to update the record by its ID using updateOne
    User.updateOne({name: name }, {description: newdescription, date: newdate, time: newtime }, (err) => {
      if (err) {
        res.send('Error updating your Memory');
      } else {
        res.send(`<html>
        <head>
        <meta charset="UTF-8">
        <title>  𝕊 ℙ 𝔸 ℝ 𝕂 𝕀 𝔽 𝕐  </title>
        <link rel="icon" href="https://res.cloudinary.com/dutmq6rr3/image/upload/v1697610198/Project/Logo_1_u5n1gr.jpg">
        <style>
            body {
                background-color: #f2f2f2; /* Pleasant background color */
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }

            header {
                background-color: #333; /* Header background color */
                color: #fff;
                text-align: center;
                padding: 20px;
            }

            h1 {
                margin: 0;
            }

            .container {
                max-width: 450px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            table {
                width: 100%;
                border-collapse: collapse;
            }

            table, th, td {
                border: 1px solid #ddd;
            }

            th, td {
                padding: 10px;
                text-align: left;
            }

            th {
                background-color: #333;
                color: #fff;
            }

            tr:nth-child(even) {
                background-color: #f2f2f2;
            }

            tr:nth-child(odd) {
                background-color: #fff;
            }
            button a
            {
                width: 200%;
                margin-left: -20px;
                margin-top: -20px;
                margin-bottom: -20px;
                margin-right: -20px;
                background: #333;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 5px;
            }
        </style>
        </head>
  <body align="center">
  <h1>Memory Updated Successfully.</h1><br>
  <button><a href="/operations">Done</a></button>
  </body>
  </html>`);
      }
    });
  });
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });