export default class DogBreed{
    name: string;
    colors: string[];
    constructor(name: string, ...colors: string[]){
        this.name = name;
        this.colors = colors;
    }
}