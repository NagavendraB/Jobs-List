import express from 'express';
import {jobs} from './api-response';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`HeyJobs app listening on port ${port}`);
});

app.get("/jobs/", (req, res) => {
  res.status(200).send(jobs);
});