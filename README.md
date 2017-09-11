README 

Deloitte Technical Test:

This website has been implemented with Bootstrap4 (even if still is in alpha version 4 at the moment), and ReactJS, and has been checked
with the following Web Browser: Chrome (Version 60.0.3112.113).

(In order to make sure that the requirements are met we should verify that the content is still the same on all the other Web Browsers)
 
The App is going to hold all the components from the website. 

We set some data of the state of the component by using componentWillMount method. Before the first render method is called, the data
will be initialized. If there was a backend service, or a database from where we need to pull some data, the componentwillMount method
will be the place to fetch this data.

There are still some features to be implemented (expanders and the modals) but I had no time. 
I will keep developing this code to get everything set up.
Implementation should be modular to reuse the modal component with all the images that have the expander property set to true.

We used React to gather the components and be able to reuse them.

It would be good as well, to use react-router to redirect from project to project and provide more features to the website.
However, we start implementing the core features or core functionalities to get a MVP (minimum viable product).


