ResourcePile
================

ResourcePile is a community project worked on by many people that wish to improve the experience of users playing on Minecraft networks.

 - **StatTrack** is the longest going project and currently runs on 2 networks. It tracks various statistics such as longest bow shots or website stats.
 - **MapStack** is a collection of publicly available maps so players can download them and play with their friends on their own servers. The project is currently running on 2 networks.


Building the page
-----------------

- Install npm
- Run `npm install -g grunt-cli` to install grunt globally
- Run `npm install` from this project folder to install all dependencies
- Run `grunt` to compile the page
- The output will be in the `out/` folder

Testing the site offline (optional):

- Run `npm install -g local-web-server`
- Run `ws` from the `out/` directory to start a webserver on localhost
- Visit http://127.0.0.1:8000/index.html to test. You will manually have to add `.html` behind the URL every time you click a link.
