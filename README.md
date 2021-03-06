## JustGiving Charity Donations Challenge

Hello, this is my code for the challenge.
The production version can be found on https://justgivingchallenge.herokuapp.com/.

Going into this task, I had a fairly clear idea of what needed to be done, and how I would achieve it.
As we have two main api routes for both the charity information and it's donations, logically I planned to have 2 main cards, one for each route and it's data.

First I used create-react-app to get a good kickstart on the project. I created the very basic containers for the initial components, and pushed to Heroku. To have a production build of React for the site, I used a simple Heroku buildpack, found here https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack. After each push to Github, I would also push to Heroku, to make sure both development and production versions where working in the same manner. Throughout the code I have left additional comments explaining what I have used/am doing.

Naturally I wanted to then see some real data in my components. I set up 2 basic action creators for fetching the charity's information and it's donations. In this challenge I'm only fetching from one charity, but obviously it would be fairly easy to implement an index page showing numerous charities, whose charityIds could be passed to the action creator when clicked, and having actual show pages for each.
The actions are then passed to their different reducers and then we combine reducers, and the application level state is updated (in our redux store).
We can then easily map this state to props on our main card container. The donations and charity data are then being passed to both our cards (functional components) as props.

At this stage, once we have access to our basic json data, and it's displaying correctly and has responsive sizing, we can then dive deeper into the design. For this project I have used styled-components, a fantastic module which I find to be the best solution for styling in React.
From then I simply positioned things where I thought they looked best, added some box-shadowing, border-radius, opacity/hover effects etc. Of course there is also the React spinner, which is displayed before the data is fetched, to let the user know something is actually happening. I have noticed at times the data taking a rather long time to load, which I guess is just the speed of the api's server.
Once loaded, the content fades in using React spring, an easy to use animation library. 

I have also used jest and Enzyme for some basic React testing, using snapshots. I'm currently finding the best method for testing props. 

I hope you like what I've made!
