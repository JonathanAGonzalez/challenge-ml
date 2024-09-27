import express, { Request, Response } from 'express';
import cors from 'cors';
import dot from 'dotenv';

import itemsRouter from './routes/items.route';

dot.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRouter);

app.get('/healt', (req: Request, res: Response) => {
  res.json({ message: 'I am alive' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
