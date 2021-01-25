/**
 * TODO: Write the code needed to automatically create the database and tables required for this application. 
 */

const dotenv = require('dotenv').config();
const Importer = require('mysql-import');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const importer = new Importer({host, user, password});

importer.onProgress(progress=>{
  let percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import('EMS_DB.sql').then(() => {
  let files_imported = importer.getImported(); 
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err => {
  console.log(err);
});
