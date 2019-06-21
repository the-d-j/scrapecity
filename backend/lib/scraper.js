import axios from 'axios';
import cheerio from 'cheerio';
import db from './db'

async function getHTML(url = 'https://twitter.com/wesbos') {
  // const html = 'cool';
  const { data: html } = await axios.get(url);
  // console.log(data); 

  return html;
}

async function getTwitterFollowers() {
  const twUsername = 'wesbos';
  const twHTML = `https://twitter.com/${twUsername}`;
  // console.log(await getHTML('https://twitter.com/wesbos/'));
  // getTwitterFollowers(await getHTML('https://twitter.com/wesbos/'));
  const html = await getHTML(twHTML);

  // load up cheerio
  const $ = cheerio.load(html);
  // const span = $('.ProfileNav-value');
  const span = $('[data-nav="followers"] .ProfileNav-value');
  // console.log(span.html());

  // console.log(span.data('count')); 
  const twCount = span.data('count'); // gives exact follower count
  return twCount;
}

async function getIGFollowers() {
  const igUsername = 'wesbos';
  const html = `https://instagram.com/${igUsername}/?__a=1`;

  const { data } = await axios.get(html);
  // console.log(data.graphql.user.edge_followed_by.count);
  const igCount = data.graphql.user.edge_followed_by.count;

  return igCount;
}

async function runCron() {
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
  console.log(`You have ${twCount} Twitter followers and ${igCount} Instagram followers`);

  db.get('twitter')
    .push({
      date: Date.now(),
      count: twCount,
    })
    .write();

  db.get('instagram')
    .push({
      date: Date.now(),
      count: igCount,
    })
    .write()
    
  // res.json({igCount, twCount});
  console.log('Done!');
}

export { getHTML, getTwitterFollowers, getIGFollowers, runCron };
