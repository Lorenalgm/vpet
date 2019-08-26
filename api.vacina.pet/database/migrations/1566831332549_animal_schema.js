'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalSchema extends Schema {
  up () {
    this.create('animals', (table) => {
      table.increments('id')
      table.string('nome', 20).notNullable()
      table.date('data_nascimento').nullable()
      table.date('data_adocao').notNullable()
      table.string('raca', 20).nullable()
      table.string('cor', 20).nullable()
      table.string('pelagem', 10).nullable()
      table.string('porte', 10).nullable()
      table.integer('owner_id').references('id').inTable('owners')
      table.integer('animal_type_id').references('id').inTable('animals_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('animals')
  }
}

module.exports = AnimalSchema
