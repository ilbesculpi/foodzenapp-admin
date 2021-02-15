import { Recipe } from "src/app/models";

const recipes: Recipe[] = [
    new Recipe({
        _id: 'a',
        name: 'Recipe A',
        description: 'Lorem ipsum',
        rating: 0,
        status: 'approved'
    }),
    new Recipe({
        _id: 'b',
        name: 'Recipe B',
        description: 'Lorem ipsum',
        rating: 0,
        status: 'approved'
    })
];

export const fixtures = {
    recipes
};
