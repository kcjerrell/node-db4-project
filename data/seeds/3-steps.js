
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, step_instructions: 'Fill a coctail shaker with ice.'},
        { recipe_id: 1, step_number: 2, step_instructions: 'Pour in Tequila, Triple Sec, and Lime Juice - then shake it up.'},
        { recipe_id: 1, step_number: 3, step_instructions: 'Rub the lemon wedge along the rim of a glass, then dip it in salt'},
        { recipe_id: 1, step_number: 4, step_instructions: 'Pour in all the delicious alcohols AND DRINK UP'},
        { recipe_id: 2, step_number: 1, step_instructions: 'Put the stuff together'},
        { recipe_id: 2, step_number: 2, step_instructions: 'Cook it'},
        { recipe_id: 2, step_number: 3, step_instructions: 'It\'s good amirite?'},
      ]);
    });
};
