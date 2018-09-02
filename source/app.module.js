'use strict';

var scratcherUI = angular.module('scratcherUI', ['ngMaterial', 'ngMessages']);

angular.module('scratcherUI')
    .controller('scratcherUIController', function ($scope, $http) {

    console.log('controller init..');

    var pageTheme = {
        background: 'awesomeImage.png',
        color: 'green'
    };

    var quizConfig = {
        question: 'What is your favorite color?',
        answers: [
            { answer: "Blue?", route: 'wrong', doAction: function() { console.log('user choose blue');}},
            { answer: "Red?", route: 'correct', doAction: function() { console.log('user choose red');}},
            { answer: "Pink?", route: 'laugh', doAction: function() { console.log('user choose pink');}},
        ]
    };

    var server = '35.165.87.111';
    var endpoint = '/api/v1/data';

    var pageLoadData = {
        owner: 'unt',
        campaign:'quiz',
        value: 'pageload'
    };

    $scope.currentData = pageLoadData;
    $scope.pageTheme = pageTheme;
    $scope.quizConfig = quizConfig;

    $scope.postData = function(endpoint, payload){
        $http.post(endpoint, payload).then(function(result){
            console.log('result:', result);
        }, function(error){
            console.log('error:', error);
        })
    };
});