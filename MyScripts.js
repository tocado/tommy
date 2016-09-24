(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'See photos and updates from friends in News Feed.',
            image: 'https://scontent.fgig1-1.fna.fbcdn.net/t39.2365-6/851565_602269956474188_918638970_n.png',
        },
        {
            name: "Share what's new in your life on your Timeline.",
            image: 'https://scontent.fgig1-1.fna.fbcdn.net/t39.2365-6/851585_216271631855613_2121533625_n.png',
        },
        {
            name: "Find more of what you're looking for with Facebook Search.",
            image: 'https://scontent.fgig1-1.fna.fbcdn.net/t39.2365-6/851558_160351450817973_1678868765_n.png',
        }
    ];
})();
