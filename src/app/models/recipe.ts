export class Recipe {

    _id: string;
    name: string;
    description: string;
    rating: number;
    status: string;

    constructor(props: any = {}) {
        const keys = Object.keys(props);
        keys.forEach(key => this[key] = props[key]);
    }

    get id() : string {
        return this._id;
    }

}
