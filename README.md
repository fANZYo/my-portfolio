# My portfolio
It's time for me to build my portfolio.

### Ideology
Everything should be less than one click away at all time.

### Technologies
The website should showcase my current level so i've decided to use:

  * **React**:
  Even though the website won't have much re-rendering it will be good practice.
  * **Node.js**:
  I'm planning on doing server-side rendering on some of the pages such as the blogpost page using [Medium.com](https://medium.com) API as well as building a small JSON based CMS.

I'm still undecided whether to use plain css/sass or a library like [Material-ui](http://www.material-ui.com) and whether to use express or not.

### Wireframing
Inspiration: [Yevgeniy Brikman](https://www.ybrikman.com/projects/), [IBM DeveloperWorks](https://www.ibm.com/developerworks/)

![Landing page](https://i.imgur.com/G6YxH5M.png?1)
![Project page](https://i.imgur.com/0IpZcif.png?1)
![Skills page](https://i.imgur.com/6dMwibT.png?1)
![Blogpost page](https://i.imgur.com/Q0xU7xI.png?1)

#### Landing page
Simple page with a heading, a subline explaining what I do, a CTA to the projects page, a navigation menu and a list of contact options.

#### Project page
This page will be rendered on the server from a JSON file containing a list of projects and details about them. It will include a filter to narrow the list down by technology.

I will likely make this page static later when I have a solid list of projects I've worked on.

#### Skills page
This is where I will talk about what I can do, the tools I use and where I'm headed.

#### Blogpost page
Will dynamically pull a list of my posts from [Medium.com](https://medium.com) using: `http://medium.com/@user?format=json` and render them from the server.
