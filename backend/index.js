import express from 'express';
import cors from 'cors';
import { getHTML, getTwitterFollowers, getIGFollowers } from './lib/scraper';
import './lib/cron';
import db from './lib/db';

const app = express();
app.use(cors());

// console.log(db);

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!');
  
  const twCount = await getTwitterFollowers();
  const igCount = await getIGFollowers();
  
  res.json({igCount, twCount});  
});

app.get('/data', async(req, res, next) => {
  // get the scrape data
  // const twitter = db.get('twitter').value();

  // returns everything in db.json
  const everything = db.value();
  
  // respond with json
  // res.json(twitter);
  res.json(everything);

})
const listener = app.listen(2093, deets => { 
  console.log(`Example app running on port ${listener.address().port}`)
});