'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments('id')
      table.string('nome', 30).notNullable()
      table.time('horario').nullable()
      table.date('data_planejada').notNullable()
      table.integer('animal_id').references('id').inTable('animals')
      table.integer('animal_vaccines_id').references('id').inTable('animals_vaccines')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
