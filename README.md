# WIP
## Scraper for IG and Twitter
### Uses: node, axios, cheerio, ems, express, lowdb, node-cron
#### Borrowed from and inspired by Wes Bos

Current state (20 Jun 2019):
 - Obtains number of followers for a user from both sites
 - Runs Express server
 - Saves data to db using lowdb (and saves to json file)
 - Runs every minute 24/7 using cron job via node-cron