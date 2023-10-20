const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: 'mentee',
      attributes: {
        name: 'NamDV',
      },
    },
  });
});

app.get('/namdv', (req, res) => {
  res.status(200).json({
    data: {
      id: '1',
      type: 'mentee',
      attributes: {
        name: 'NamDV',
        class: 'C13',
      },
    },
  });
});

const port = +process.env.PORT || 4001;
app.listen(port, () => {
  console.log('App is running at port ', port);
});
