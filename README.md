## JustGiving Charity Donations Challenge

Hello, this is my code for the challenge.
The production version can be found on (https://justgivingchallenge.herokuapp.com/).

Going into this task, I had a fairly clear idea of what needed to be done, and how I would achieve it.
As we have two main api routes for both the charity information and it's donations, logically I planned to have 2 main cards, one for each route and it's data.

First I used create-react-app to get a good kickstart on the project. I created the very basic containers for the initial components, and pushed to Heroku. To have a production build of React for the site, I used a simple Heroku buildpack, found here (https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack). After each push to Github, I would also push to Heroku, to make sure both development and production versions where working in the same manner.

Naturally I wanted to then see some real data in my components. I set up 2 basic action creators for fetching the charity's information and it's donations. In this challenge I'm only fetching from one charity, but obviously it would be fairly easy to implement an index page showing numerous charities, whose charityIds could be passed to the action creator when clicked, and having actual show pages for each.
The actions are then passed to their different reducers and then we combine reducers, and the application level state is updated (in our redux store).
We can then easily map this state to props on our main card container. The donations and charity data are then being passed to both our cards (functional components) as props.

At this stage, once we have access to our basic json data, and it's displaying correctly and has responsive sizing, we can then dive deeper into the design. For this project I have used styled-components, a fantastic module which I find to be the best solution for styling in React.
From then I simply positioned things where I thought they looked best, added some box-shadowing, border-radius, opacity/hover effects and a few other things. Although I'm not a fan of the typeface, I decided to use Roboto, which is used on the JustGiving landing page.

I hope you like what I've made!
