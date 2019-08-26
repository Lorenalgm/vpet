'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClinicsSchema extends Schema {
  up () {
    this.create('clinics', (table) => {
      table.increments('id')
      table.string('nome', 60).notNullable()
      table.string('endereco', 60).nullable()
      table.string('email', 30).notNullable()
      table.string('telefone', 14).notNullable()
      table.string('facebook').nullable()
      table.string('cidade', 20).nullable()
      table.string('estado', 20).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clinics')
  }
}

module.exports = ClinicsSchema
