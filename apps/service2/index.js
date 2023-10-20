const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: 'mentor',
      attributes: {
        name: 'HaiDV',
      },
    },
  });
});
const port = +process.env.PORT || 4002;
app.listen(port, () => {
  console.log('App is running at port ', port);
});
