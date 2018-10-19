/**
 * imports
 * start
 */

const express = require('express');

 /**
  * imports
  * End
  */

  var app = express();

  app.get('/', (req, res) => {
      res.status(404)
        .send({
          message: 'Page Not Found.',
          name: 'Todo App v1.0'
      });
  });

  app.get('/users', (req, res)=> {
      res.status(200)
      .send([{
        name: 'Dracula',
        age: '100M'
      },
      {
        name: 'Draganta',
        age: '10K'
      },
      {
        name: 'Diablo',
        age: '10M'
      }]);
  });

  app.listen(3000);

  module.exports= {
      app
  };