/*
	recipes
		recipe_name
		created_at

	ingredients
		name

	steps
		step_number
		step_instructions
		fk: recipe

	step-ingredients
		fk: steps
		fk: ingredients
		quantity
*/


exports.up = async function (knex) {
	await knex.schema
		.createTable('recipes', table => {
			table.increments('recipe_id')
			table.string('recipe_name', 80).notNullable().unique()
			table.datetime('created_at').defaultTo(knex.fn.now())
		})
		.createTable('ingredients', table => {
			table.increments('ingredient_id')
			table.string('ingredient_name', 80).notNullable().unique()
		})
		.createTable('steps', table => {
			table.increments('step_id')
			table.integer('recipe_id').unsigned().notNullable()
				.references('recipe_id').inTable('recipes')
			table.integer('step_number').unsigned().notNullable()
			table.string('step_instructions').notNullable()
			table.unique(["recipe_id", "step_number"])
		})
		.createTable('step_ingredients', table => {
			table.increments('step_ingredients_id')
			table.integer('ingredient_id').unsigned().notNullable()
				.references('ingredient_id').inTable('ingredient')
			table.integer('step_id').unsigned().notNullable()
				.references('step_id').inTable('steps')
			table.string('quantity')
		})
};

exports.down = async function (knex) {
	await knex.schema
		.dropTableIfExists('step_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes')
};
