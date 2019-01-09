import * as lodash from 'lodash';
import { GitHubApiService } from './GitHubApiService';
import { User } from './User';
import { Repo } from './Repo'

var GitHubApi = new GitHubApiService();


if (process.argv.length < 3) {
    console.log("Error, no username was passed as an argument");
}
else {

    let username = process.argv[2];


    GitHubApi.getUserInfo(username, function (user: User) { //Get user Info first



        GitHubApi.getRepos(username, function (repos: Repo[]) { //Then get repos that are linked to that user

            let sortedRepos = lodash.sortBy(repos, [function (repo: any) {

                return repo.forkCount * -1; //sort from largest to lowest


            }])


            let filteredRepos = lodash.take(sortedRepos, 5); //First 5 elements

            user.repos = filteredRepos; //Combine repos
            console.log(user);



        })



    });
}

