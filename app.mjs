import express from 'express';
import router from './routes/routes.mjs';
import serviceRouter from './routes/serviceRouters.mjs';
const app = express();
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', serviceRouter)
app.use('/', router);

app.get('*', (req, res) => {
  res.render('error_page');
});
app.post('*', (req, res) => {
  res.sendStatus(404);
});
app.listen(5500, () =>{
  console.log('Server is running on http://127.0.0.1:5500');
});
