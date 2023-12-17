const database = require('./js/database');
const db = require('./js/dbFunctions');
const inquiries = require('./js/inquiries');

// inquiries.mainPrompt();


let roleList = async function(){
    let [roles,  _] = await db.query(`SELECT title FROM role`)
    for (let i = 0; i < roles.length; i++ ){
        console.log(Object.values(roles[i]));
    }
}

roleList();