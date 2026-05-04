const express = require('express');
const app = express();
const port = 8050;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/api/data', (req, res)=>{
    res.send('data recevied');
})
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});