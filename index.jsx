const express = require('express');
const { mongo } = require('mongoose');
const app = express();
const port = 8050;

mongoose.connect('mongodb://localhost:27017/User-data')
.then(() => {
  console.log('Connected to MongoDB');
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/api/data', (req, res)=>{
    res.send('data recevied');
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
const userSchema =new mongoose.Schema({
  firstName:{ type: String, required: true },
  lastName:{ type: String, required: true },
  email:{ type: String, required: true, unique: true }
})
const User = mongoose.model('User', userSchema);
