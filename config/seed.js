var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/tStudy-api", function (err, database) {
  if(err) throw err;

  database.db('tStudy-api').collection('timeslips', function (err, collection) {
    collection.drop();
    collection.insertMany(
      [
        {
          language: 'Sinatra',
          description: 'Project exploring web development through the sinatra framework',
          url: 'http://sinatrarb.com/documentation.html',
          completed: false,
          created_date: Date.now() - 800,
          total_time: 142820,
        },
        {
          language: 'Ruby', 
          description: 'Udacity Nano Degree, exploring the fundamentals of writing and reading from a database using the ruby language',
          completed: false,
          created_date: Date.now() - 700,
          total_time: 29243698,
        },
        {
          language: 'PostGreSQL', 
          description: 'Launch School online web developer traning school, Programming and Back-end Development section 180 SQL and Relational Databases',
          url: 'https://www.postgresql.org/docs/',
          completed: false,
          created_date: Date.now() - 600,
          total_time: 492822349,
        },
        {
          language: 'Node.js', 
          description: 'Complete Web Developer Bootcamp course, taught by former Galvanize Bootcamp instructor Colt Steele covering the fundamentals of web development including html, css, javaScript, jQuery, Node.js, MongoDb, mongoose',
          completed: false,
          created_date: Date.now() - 500,
          total_time: 1999399876,
        },
        {
          language: 'React', 
          description: 'The Advanded Web Developer Bootcamp Udemy course, created by Rithm Bootcamp in San Francisco exploring modern frontend technologies including React, Node, ES6 and D3',
          url: 'https://reactjs.org/docs/hello-world.html',
          completed: false,
          created_date: Date.now() - 400,
          total_time: 122839239,
        },
        {
          language: 'JavaScript', 
          description: 'You Don"t Know JavaScript book series, Scope and Closures Chapter 5',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          completed: false,
          created_date: Date.now() - 300,
          total_time: 652839,
        },
      ]
    );
    console.log('Seeding complete!  press ctr-c to exit');
  });
});
