const express = require('express');
const app = express();

app.use(bodyParser);

app.listen (8080, () => {
    console.log('Server has been started on 8080!');
})


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));


app.use('./api/sessions', require('./api/sessions'));
app.use('./api/theaters', require('./api/theaters'));
app.use('./api/users', require('./api/users'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});