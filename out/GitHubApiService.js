"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var options = {
    headers: {
        'User-Agent': 'request'
    }
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (userName, callback) {
        request.get('https://api.github.com/users/' + userName, options, function (error, response, body) {
            var git_user = new User_1.User(JSON.parse(body));
            callback(git_user);
        });
    };
    GitHubApiService.prototype.getRepos = function (userName, callback) {
        request.get('https://api.github.com/users/' + userName + '/repos', options, function (error, response, body) {
            var RepoJSON;
            RepoJSON = JSON.parse(body);
            var repoArray = [];
            RepoJSON.forEach(function (elem) {
                repoArray.push(new Repo_1.Repo(elem));
            });
            callback(repoArray);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
