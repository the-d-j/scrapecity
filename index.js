import { getHTML, getTwitterFollowers, getIGFollowers } from './lib/scraper';

// console.log(getHTML());

async function go() {
  // console.log(await getHTML('https://twitter.com/wesbos/'));
  // getTwitterFollowers(await getHTML('https://twitter.com/wesbos/'));
  const html = await getHTML('https://twitter.com/wesbos');
  const twCount = await getTwitterFollowers(html);
  // console.log(twCount); // returns a Promise b/c it's a sync fn
  // console.log(await twCount);
  console.log(`You have ${twCount} Twitter followers`);

  const igCount = await getIGFollowers('wesbos');
  console.log(`You have ${igCount} Instagram followers`);
}

go();
