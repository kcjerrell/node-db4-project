
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        { step_id: , ingredient_id: },
        { step_id: , ingredient_id: },
        { step_id: , ingredient_id: },
        { step_id: , ingredient_id: },
        { step_id: , ingredient_id: },
        { step_id: , ingredient_id: },
      ]);
    });
};
