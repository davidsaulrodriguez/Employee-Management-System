/**
 * * This will automatically prepopulate the 'ems_db' database with sample data for testing and use with this application. 
 */

const dotenv = require('dotenv').config();
const Importer = require('mysql-import');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const importer = new Importer({host, user, password, database});

importer.onProgress(progress=>{
  let percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import('./sample-data/sample-data.sql').then(() => {
  let files_imported = importer.getImported(); 
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err => {
  console.log(err);
});
