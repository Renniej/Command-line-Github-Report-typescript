"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash = __importStar(require("lodash"));
var GitHubApiService_1 = require("./GitHubApiService");
var GitHubApi = new GitHubApiService_1.GitHubApiService();
if (process.argv.length < 3) {
    console.log("Error, no username was passed as an argument");
}
else {
    var username_1 = process.argv[2];
    GitHubApi.getUserInfo(username_1, function (user) {
        GitHubApi.getRepos(username_1, function (repos) {
            var sortedRepos = lodash.sortBy(repos, [function (repo) {
                    return repo.forkCount * -1; //sort from largest to lowest
                }]);
            var filteredRepos = lodash.take(sortedRepos, 5); //First 5 elements
            user.repos = filteredRepos; //Combine repos
            console.log(user);
        });
    });
}
