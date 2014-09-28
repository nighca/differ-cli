var Q = require('q');
var fs = require('fs');
var path = require('path');
var differ = require('./differ');

var readFile = function(path, encoding) {
    var deferred = Q.defer();
    fs.readFile(path, encoding || "utf-8", function (error, text) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(text);
        }
    });
    return deferred.promise;
};

var diffFiles = function(p1, p2){
    Q.all(
        [p1, p2].
        map(function(p){
            return path.resolve(p);
        }).
        map(function(p){
            return readFile(p)
        })
    ).then(function(files){
        console.log(differ(files[0], files[1]));
    });
};

module.exports = diffFiles;