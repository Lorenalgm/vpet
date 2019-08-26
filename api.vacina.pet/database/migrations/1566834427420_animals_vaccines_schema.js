'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalsVaccinesSchema extends Schema {
  up () {
    this.create('animals_vaccines', (table) => {
      table.increments('id')
      table.date('data_vacinacao').notNullable()
      table.integer('animal_id').notNullable().references('id').inTable('animals')
      table.integer('clinica_id').references('id').inTable('clinics')
      table.integer('vacina_id').references('id').inTable('vaccines')
      table.integer('event_id').references('id').inTable('events')
      table.timestamps()
    })
  }

  down () {
    this.drop('animals_vaccines')
  }
}

module.exports = AnimalsVaccinesSchema
