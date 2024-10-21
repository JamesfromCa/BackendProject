const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactsRoutes = require('./routes/contacts');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

const mongoURI = 'mongodb://127.0.0.1:27017/Skeleton';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {

  res.json({ message: "Welcome to DressStore application." });
});
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});