const connection = require('./connection');

const orm = {

  selectAll() {//get all burgers
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM burgers';
      connection.query(query, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  },

  insertOne(burger) {//add new burger
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO burgers SET ?';
      connection.query(query, burger, (err) => {
        if (err) reject(err);
        resolve('New burger added!');
      });
    });
  },

  updateOne(id) {//modify existing burger data
    return new Promise((resolve, reject) => {
      const query = 'UPDATE burgers SET devoured = true WHERE id= ?';
      connection.query(query, [id], (err) => {
        if(err) reject(err);
        resolve('Burger status updated!');
      });
    });
  }

};

module.exports = orm;
