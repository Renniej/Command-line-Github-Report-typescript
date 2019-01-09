import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';


const options : any = {
    headers: {
        'User-Agent' : 'request'
    }
}


export class GitHubApiService{


   

        getUserInfo(userName : string, callback: (user : User) => any){

          
            request.get('https://api.github.com/users/' + userName, options, function(error: any, response : any, body : any){


               let git_user = new User(JSON.parse(body));
                callback(git_user);
            });
        }

        getRepos(userName: string,  callback: (repos : Repo[]) => any){

            request.get('https://api.github.com/users/' + userName + '/repos', options, function(error: any, response : any, body : any){


            let RepoJSON : any;
                RepoJSON = JSON.parse(body);
                
            let repoArray : Repo[] = [];


                RepoJSON.forEach(function(elem : any){

                    
                    repoArray.push(new Repo(elem));

                })

                callback(repoArray);




            })



        }
}