var BasePage = require("../../shared/BasePage");
var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
var view = require("ui/core/view");
var topmost = require("ui/frame").topmost;
var LoginPage = function () { };
LoginPage.prototype = new BasePage();
LoginPage.prototype.constructor = LoginPage;
var frameModule = require("ui/frame");

var Page;
var email;
var activeUser;

LoginPage.prototype.navigateTo = function (args) {
    Page = args.object;
};

//SMI: Allows the user to sign up for the app
LoginPage.prototype.signUp = function () {
    console.log("In Signup");
    activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
        alert("User logged in. Log out first")
    }
    else {
        email = LoginPage.prototype.pageObject.getViewById("email").text;
        pw = LoginPage.prototype.pageObject.getViewById("pw").text;
        if (email != "") {
            //TASK 2.1: ADD CODE FOR SIGNUP.

            /* 
                 .then(function (user) {
                     //Register for live service
                     registerForLiveService(user);
                     console.log("Succesful signup!");
                     var dataStore = Kinvey.DataStore.collection('DemoBrandingData', Kinvey.DataStoreType.Network);
                     var subscription = dataStore.find()
                         .subscribe(function (entities) {
                             console.log(entities);
                         }, function (error) {
                             console.log(error);
                         }, function () {
                             console.log('finished pulling home data');
                         });
                     topmost().navigate("pages/home/home");
                 })
                 .catch(function (error) {
                     alert("Failure to signup!")
                     console.log("error");
                 }); */
        }
        else {
            console.log("Email/Pass cannot be blank");
        }

    }
}
LoginPage.prototype.signIn = function (args) {
    var sender = args.object;
    var parent = sender.parent;
    email = view.getViewById(parent, "email").text;
    pw = view.getViewById(parent, "pw").text;
    //SMI: Check for active user
    var activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
        alert("User logged in. Log out first")
    } else {
        //TASK 2.2: LOG THE USER IN

        /*  .then(function (user) {
             //console.log(user);
             registerForLiveService(user);

         })
         .catch(function (error) {
             console.log(error);
         }); */
    }
};
LoginPage.prototype.logout = function (args) {
    var activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
        console.log("There is an active user")
    }
    //TASK 2.3: LOG THE USER OUT
    /*  .then(function () {
         console.log("User Logged out");
         unRegisterFromLiveService(activeUser);
     })
     .catch(function (error) {
         console.log(error.message);
     }); */
}

LoginPage.prototype.signInMIC = function (args) {
    console.log('signInMIC');
    var activeUser = Kinvey.User.getActiveUser();
    if (activeUser) {
        alert("User logged in. Log out first")
    }
    else {
        //TASK 2.4: SIGN IN WITH MOBILE IDENTITY CONNECT
        /*  .then(function (user) {
             //console.log(user);
             registerForLiveService(user);
             topmost().navigate("pages/home/home");
         }).catch(function (error) {
             console.log(error);
         });  */
    }
}

function registerForLiveService(user) {
    //Task 4.2 : REGISTER THE USER FOR LIVE SERVICE

    /* .then(() => {
        console.log("Registered for live service");
        topmost().navigate("pages/home/home");
    })
    .catch(err => {
        alert("Error registering for live service");
    }); */
}

function unRegisterFromLiveService(user) {
    user.unregisterFromLiveService()
        .then(function () {
            console.log("Unregistered from Live Service")
        })
        .catch(function (err) {
            console.log("There was an error unregistering from live service")
        });
}

module.exports = new LoginPage();