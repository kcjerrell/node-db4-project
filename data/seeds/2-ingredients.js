
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'Tequila' },                       //1
        { ingredient_name: 'Triple Sec' },
        { ingredient_name: 'Lime Juice (sweetened)' },
        { ingredient_name: 'Lemon Wedge' },                    //4
        { ingredient_name: 'Salt' },
        { ingredient_name: 'Ice, Cubed' },
        { ingredient_name: 'Beef, Ground' },                  //7
        { ingredient_name: 'Jalapenos, Chopped' },
        { ingredient_name: 'Onion Soup Mix' },
        { ingredient_name: 'Bacon, Cooked, Sliced' },                 //10
        { ingredient_name: 'Pineapple, Tidbits' },
        { ingredient_name: 'General Tso Sauce' },
        { ingredient_name: 'Red Onion, Sliced' },             //13
        { ingredient_name: 'Hamburger Buns' },
        { ingredient_name: 'Bacon, Cooked, Chopped'}
      ]);
    });
};
