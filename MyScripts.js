(function () {
    var app = angular.module('MyNewModule', []);
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

    var mails = [
    ];

    app.controller('NewAccount', function () {
        this.People = {};

        this.addAccount = function () {
            mails.push(this.People);
            this.People = {};
        }
    });
    var accountinf = [];
})();
