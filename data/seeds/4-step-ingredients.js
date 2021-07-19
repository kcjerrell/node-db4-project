
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        { step_id: 1, ingredient_id: 6, },
        { step_id: 2, ingredient_id: 1, quantity: "Half of a lat"},
        { step_id: 2, ingredient_id: 2, quantity: "A third of a lot"},
        { step_id: 2, ingredient_id: 3, quantity: "1"},
        { step_id: 3, ingredient_id: 4, },
        { step_id: 3, ingredient_id: 5, },
        { step_id: 4, ingredient_id: 6, },
        { step_id: 5, ingredient_id: 7, quantity: "1 lb" },
        { step_id: 5, ingredient_id: 8, quantity: "2"},
        { step_id: 5, ingredient_id: 9, quantity: "1/4 packet"},
        { step_id: 5, ingredient_id: 15, quantity: "2 slices"},
        { step_id: 7, ingredient_id: 10, quantity: "4 slices"},
        { step_id: 7, ingredient_id: 11, quantity: "1 small can"},
        { step_id: 7, ingredient_id: 12, },
        { step_id: 7, ingredient_id: 13, quantity: "1/3"},
        { step_id: 7, ingredient_id: 14, quantity: "4"},
      ]);
    });
};
