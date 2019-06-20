import express from 'express';
import { getHTML, getTwitterFollowers, getIGFollowers } from './lib/scraper';
// import db from './lib/db';
import './lib/cron';

const app = express();

// console.log(db);

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!!');

  const twUsername = 'wesbos';
  const igUsername = 'wesbos';
  const twHTML = `https://twitter.com/${twUsername}`;
  const igHTML = `https://instagram.com/${igUsername}/?__a=1`;

  // console.log(await getHTML('https://twitter.com/wesbos/'));
  // getTwitterFollowers(await getHTML('https://twitter.com/wesbos/'));
  const html = await getHTML(twHTML);
  const twCount = await getTwitterFollowers(html);
  // console.log(twCount); // returns a Promise b/c it's async fn
  // console.log(await twCount);
  const igCount = await getIGFollowers(igHTML);
  // console.log(`You have ${twCount} Twitter followers and ${igCount} Instagram followers`);
      
  res.json({igCount, twCount});  
});

const listener = app.listen(2093, deets => { 
  console.log(`Example app running on port ${listener.address().port}`)
});