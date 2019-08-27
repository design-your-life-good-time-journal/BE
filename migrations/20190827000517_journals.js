
exports.up = function(knex, Promise) {
    return knex.schema.createTable('journals', journals =>{
        journals.increments();
 
        journals.post('post', 128);

        journals.datetime('date');
 
        journals.boolean('status');

        journals.integer('personId')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
 
    })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('journals');
 };