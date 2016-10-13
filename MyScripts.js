(function () {
    angular.module('MyNewModule', ['ngAnimate', 'toaster']);
    var app = angular.module('MyNewModule');
    /*var app = angular.module('MyNewModule', []);
    var app2 = angular.module('MyNewModule2', ['ngAnimate', 'toaster']);
    
    app2.controller('myController', function ($scope, toaster, $window) {
       
        $scope.bar = 'Hi';

        $scope.pop = function () {
            toaster.success({ title: "title", body: "text1" });
            toaster.error("title", "text2");
            toaster.pop({ type: 'wait', title: "title", body: "text" });
            toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
            toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
            toaster.pop('wait', "title", null, null, 'template');
            toaster.pop('warning', "title", "myTemplate.html", null, 'template');
            toaster.pop('note', "title", "text");
            toaster.pop('success', "title", 'Its address is https://google.com.', 5000, 'trustedHtml', function (toaster) {
                var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
                if (match) $window.open(match[0]);
                return true;
            });
            toaster.pop('warning', "Hi ", "{template: 'myTemplateWithData.html', data: 'MyData'}", 15000, 'templateWithData');
        };

        $scope.goToLink = function (toaster) {
            var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
            if (match) $window.open(match[0]);
            return true;
        };

        $scope.clear = function () {
            toaster.clear();
        };
    });

    /*
    app.controller('CtrlTrans', ['$translate', '$scope', function($translate, $scope) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        }
    }]);

    app.config(function($translateProvider) {
        $translateProvider.translation ('en', {
            T_Button: 'Log In',
            T_Big1: 'Connect with friends and the world around you on FakeBook',
            T_Big2: 'Sign Up',
            T_Pic1: 'See photos and updates from friend in news Feed.',
            T_Pic2: "Share what's new in your life on your Timeline.",
            T_Pic3: "Find more of what you're looking for with FakeBook Search.",
            T_Small1: "It's free and always will be.",
            T_Small2: 'Why do I need to provide my birthday?',
            T_Small3: 'Email or Phone',
            T_Small4: 'Password',
            T_Small5: 'Forgot your password?',
            T_Birthday: 'Birthday',
            T_Placeholder1: 'First name',
            T_Placeholder2: 'Last name',
            T_Placeholder3: 'Mobile number or email',
            T_Placeholder4: 'Re-enter mobile number or email',
            T_Placeholder5: 'New password',
            T_Female: 'Female',
            T_Male: 'Male',
            T_Termsofuse: 'By clicking Sing Up, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.',
            T_EndPage: 'Create a Page for a celebrity, band or business'

        });
        $translateProvider.translations('es', {
            T_Button: 'Log In',
            T_Big1: 'Connect with friends and the world around you on FakeBook',
            T_Big2: 'Sign Up',
            T_Pic1: 'See photos and updates from friend in news Feed.',
            T_Pic2: "Share what's new in your life on your Timeline.",
            T_Pic3: "Find more of what you're looking for with FakeBook Search.",
            T_Small1: "It's free and always will be.",
            T_Small2: 'Why do I need to provide my birthday?',
            T_Small3: 'Email or Phone',
            T_Small4: 'Password',
            T_Small5: 'Forgot your password?',
            T_Birthday: 'Fecha de nacimiento',
            T_Placeholder1: 'First name',
            T_Placeholder2: 'Last name',
            T_Placeholder3: 'Mobile number or email',
            T_Placeholder4: 'Re-enter mobile number or email',
            T_Placeholder5: 'New password',
            T_Female: 'Female',
            T_Male: 'Male',
            T_Termsofuse: 'By clicking Sing Up, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.',
            T_EndPage: 'Create a Page for a celebrity, band or business'

        });
    });
    */

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

    app.controller('People', function () {
        this.pep = mails;
    });

    var mails = [{

    }];
    
    app.controller('NewAccount', function ($scope, toaster) {
        this.People = {};

        this.addAccount = function () {
            toaster.success("Welcome!!! " + this.People.First, "Please, Sing In");
            mails.push(this.People);
            this.People = {};
            $scope.SingUpForm.$setPristine();
        }
    });
    var accountinf = [];
})();