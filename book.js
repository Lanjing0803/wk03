const express = require('express')
const indexRouter = require('./routes/index');
const app = express()
const port = 3000
var handlebars = require('express-handlebars').create();
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');
const bodyParser = require('body-parser');
/* GET home page. */
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);


// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.send('<h1>404 - Not Found</h1>')
  })
  
// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})


app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))



  