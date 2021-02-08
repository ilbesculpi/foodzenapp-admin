import { Recipe } from "src/app/models";

const recipes: Recipe[] = [
    {
        name: 'Recipe A',
        description: 'Lorem ipsum',
        rating: 0,
        status: 'approved'
    },
    {
        name: 'Recipe B',
        description: 'Lorem ipsum',
        rating: 0,
        status: 'approved'
    }
];

export const fixtures = {
    recipes
};
