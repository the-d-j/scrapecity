import cron from 'node-cron';
import { runCron } from './scraper';

// Use corntab.com for cron formatting help

// '* * * * *' == every minute 24/7
cron.schedule('* * * * *', () => {
  console.log('RUNNING THE CRON!');
  runCron();
});