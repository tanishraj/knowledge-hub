import express from 'express';
import { db } from './db/index.js';
import { genres } from './db/schema.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/genres', async (req, res) => {
  const result = await db.select().from(genres).all();
  res.json(result);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
