import express from 'express';
import serviceRouter from './serviceRouters.mjs';
const router = express.Router();

router.post('/', serviceRouter);

router.get('/', (req, res) => {
  res.render('check_auth');
});
router.get('/login', (req, res) => {
  res.render('login_page');
});
router.get('/sign-up', (req, res) => {
  res.render('sign_up')
})
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
router.get('/book-requests', (req, res) => {
  res.render('book_requests');
});

export default router;
