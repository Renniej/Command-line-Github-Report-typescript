export class Repo{

    constructor(repo : any){
        this.name = repo.name;
        this.description = repo.description
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }


    name:string;
    description: string;
    url : string;
    size : number;
    forkCount : number;
   
}