import express from 'express';
import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  password: 'postgres',
  database: 'todo'
});

const app = express();

// req.params, req.query req.body

app.get("/lists", async (_req, res) => {
  const allLists = await pool.query('select * from lists');
  res.json(allLists.rows);
});

app.post("/lists", async (_req, res) => {
  const allLists = await pool.query('select * from lists');
  res.json(allLists.rows);
});

app.put("/lists", async (_req, res) => {
  const allLists = await pool.query('select * from lists');
  res.json(allLists.rows);
});

app.delete("/lists", async (_req, res) => {
  const allLists = await pool.query('select * from lists');
  res.json(allLists.rows);
});

app.listen(9000);
