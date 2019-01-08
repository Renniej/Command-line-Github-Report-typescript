import * as request from 'request';
import { User } from './User';

export class GitHubApiService{

        getUserInfo(userName : string){

            let options : any = {
                headers: {
                    'User-Agent' : 'request'
                }
            }
            request.get('https://api.github.com/users/' + userName, options, function(error: any, response : any, body : any){


               let git_user = new User(JSON.parse(body));
                console.log(git_user);
            });
        }

        getRepos(){

        }

}