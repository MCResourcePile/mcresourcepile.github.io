ResourcePile
================

ResourcePile is a community project worked on by many people that wish to improve the experience of users playing on Minecraft networks.

 - **Maps** - Collection of publicly available maps from networks such as Overcast and Avicus.
 - **League Records** - Records of tournaments ran by PvP networks and the community.
 - **Statistics** - Tracking various statistics from multiple networks such as bow records, objective leaderboards and more.

Read the [documentation](https://mcresourcepile.github.io/admin/docs/maps) to learn how to contribute to various parts of the website.


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
