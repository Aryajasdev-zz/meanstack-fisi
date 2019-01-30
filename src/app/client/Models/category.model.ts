export class category{
    public id : String;
    public name: String;
    public description : String;
    public imagePath : String;

    constructor(id: string, name : string, description: string, imagePath : string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}