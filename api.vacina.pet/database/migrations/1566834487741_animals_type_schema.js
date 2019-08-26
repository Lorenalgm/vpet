'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalsTypeSchema extends Schema {
  up () {
    this.create('animals_types', (table) => {
      table.increments('id')
      table.string('nome', 20)
      table.string('especie', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('animals_types')
  }
}

module.exports = AnimalsTypeSchema
