const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy, 
  findById, 
  remove, 
  update,
  findProjectsByUserId
};

function find() {
  return db('users').select('id', 'firstname','lastname','date')};

function findBy(filter) {
  return db('users').where(filter);
};

function add(user) {
  return db('users')
    .insert(user, 'id');
};

function findById(id) {
  return db('users')
    .where({ id })
    .select('name', 'about')
    .first();
};

async function findProjectsByUserId(id) {
  const journals = await db('journals').where({ user_id: id });
  console.log(journals)
  return journals;
}

function remove(id) {
  return db('users')
    .where({ id })
    .first()
    .delete();
};

function update(user, id) {
  return db('users')
    .where({ id })
    .update(user);
}