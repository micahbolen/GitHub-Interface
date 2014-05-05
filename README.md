An interface that allows a user to type a GitHub organization name into a textbox (e.g. 'redjack') and displays a list of linkable public repos for that organization. The interface uses the [GitHub REST API](https://developer.github.com/v3/repos/#list-organization-repositories) to retrieve the data. 

Instructions
------------
Fork and download this repo.  Serve the contents of the `build` directory from an HTTP server.

Note: By default, the API requests are unauthenticated which means a rate limit of 60 requests/hour is enforced (authenticated requests allow you to make up to 5,000 requests per hour).  This means that the default configuration of this app will stop working for an hour after you've made your 60th request.

Tech
----
-  AngularJS
-  Restangular
-  Grunt
-  Bower
-  Yeoman
