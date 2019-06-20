import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url = 'https://twitter.com/wesbos') {
  // const html = 'cool';
  const { data: html } = await axios.get(url);
  // console.log(data); 

  return html;
}

async function getTwitterFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  // const span = $('.ProfileNav-value');
  const span = $('[data-nav="followers"] .ProfileNav-value');
  // console.log(span.html());

  // console.log(span.data('count')); 
  const twCount = span.data('count'); // gives exact follower count
  return twCount;
}

async function getIGFollowers(username = 'wesbos') {
  const { data } = await axios.get(`https://instagram.com/${username}/?__a=1`);
  // console.log(data.graphql.user.edge_followed_by.count);
  const igCount = data.graphql.user.edge_followed_by.count;

  return igCount;
}

export { getHTML, getTwitterFollowers, getIGFollowers };
