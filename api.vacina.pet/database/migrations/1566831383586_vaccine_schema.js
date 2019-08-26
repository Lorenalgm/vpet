'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VaccineSchema extends Schema {
  up () {
    this.create('vaccines', (table) => {
      table.increments('id')
      table.string('nome', 30).notNullable()
      table.string('nome_cientifico', 30).nullable()
      table.integer('idade_inicial').notNullable()
      table.integer('periodicidade').notNullable()
      table.integer('reforco').notNullable()
      table.integer('quantidade_doses').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vaccines')
  }
}

module.exports = VaccineSchema
