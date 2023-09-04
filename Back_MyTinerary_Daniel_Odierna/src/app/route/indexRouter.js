import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
   res.json({
      status: 'Welcome to MyTinerary Server!'
   });
});

export default indexRouter;