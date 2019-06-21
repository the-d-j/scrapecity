# WIP
## Scraper for IG and Twitter
### Uses: node, axios, cheerio, ems, express, lowdb, node-cron
#### Borrowed from and inspired by Wes Bos

Current state:
 - Obtains number of followers for a user from both sites
 - Runs Express server
 - Saves data to db using lowdb (and saves to json file)
 - Runs every minute 24/7 using cron job via node-cron
 - Has a basic front-end using React and Hooks
 - Front-end displays number of followers with how long ago the data was scraped via date-fns