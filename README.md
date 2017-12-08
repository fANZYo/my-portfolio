# My portfolio
It's time for me to build my portfolio.

## Ideology
Everything should be less than one click away at all time.

## CSS approach

This project uses [SASS](http://sass-lang.com/) for CSS compilation. Common styles can be found in `src/sass` and everything else is split into components. 

The `src/sass` folder contains the color scheme, fonts and breakpoint sizes sass files which are included in the the react components allwing changes to be made in one place for the whole site.

## Technologies
  * **React**:
  Even though the website won't have much re-rendering it will be good practice.
  * **Express**:
  For API calls on the projects page and blogpost page as well as a small custom CMS.

## Scripts
  * `npm start`: Will start the development server as well as `node-sass-chokidar --watch --recursive`.
  * `npm run build`: Will build the app for production.
  * `npm run eject`: Will eject from `create-react-app`.

## Wireframing
Inspiration: [Yevgeniy Brikman](https://www.ybrikman.com/projects/), [IBM DeveloperWorks](https://www.ibm.com/developerworks/)

| ![Landing page](https://i.imgur.com/G6YxH5M.png?1) | ![Project page](https://i.imgur.com/0IpZcif.png?1) | ![Skills page](https://i.imgur.com/6dMwibT.png?1) | ![Blogpost page](https://i.imgur.com/Q0xU7xI.png?1) |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |

### Landing page
Simple page with a heading, a subline explaining what I do, a CTA to the projects page, a navigation menu and a list of contact options.

### Project page
This page will be rendered on the server from a JSON file containing a list of projects and details about them. It will include a filter to narrow the list down by technology.

I will likely make this page static later when I have a solid list of projects I've worked on.

### Skills page
This is where I will talk about what I can do, the tools I use and where I'm headed.

### Blogpost page
Will dynamically pull a list of my posts from [Medium.com](https://medium.com) using: `http://medium.com/@williamiehl?format=json` and render them.
