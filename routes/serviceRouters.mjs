import express from 'express';

const serviceRouter = express.Router();

serviceRouter.post('/api/fcm/send_notification', (req, res) => {
  const { head, body, token, channel } = req.body;
  token.forEach((data) => {
    console.log(data);
  });
  res.sendStatus(200);
});
serviceRouter.post('/api/fcm/receive_notification', (req, res) => {
  const { header, body } = req.body;
  console.log(header);
  console.log(body);
  res.send(200);
});

export default serviceRouter;
