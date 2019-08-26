'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments('id')
      table.string('nome', 60).notNullable()
      table.string('cpf', 11).notNullable()
      table.string('telefone', 14).nullable()
      table.string('endereco', 120).nullable()
      table.string('cidade', 20).nullable()
      table.string('estado', 20).nullable()
      table.integer('auth_id').references('id').inTable('auth')
      table.timestamps()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
