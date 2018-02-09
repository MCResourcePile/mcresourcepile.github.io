ResourcePile
================

ResourcePile is a community project which aims to provide various collections of resources for users with backgrounds in Overcast and similar networks. This is an ever evolving project with new content being added every few days, and we welcome anyone who wishes to contribute.

 - **:european_castle: Maps:** Collections of publicly available maps with downloads generously provided by their authors
 - **:art: Contests:** Records for map making contests ran by various networks
 - **:trophy: Tournaments:** Records for tournaments ran by various networks and the community
 - **:bar_chart: Statistics:** Assorted achievements and history statistics from past networks
 - **:bookmark_tabs: Wiki:** A project in collaboration with the Stratus Addon Team

Contributing
-----------------

The website source is maintained in the `source` branch and **will be automatically built and then deployed** to the `master` branch where it will become live. It is vital that you run tests before pushing or submitting a pull request ([building the page](#building-the-page)).
Refer to the [references](https://mcresourcepile.github.io/admin/references/maps) to learn how to contribute to various parts of the website.

To contribute to the Stratus Addon Project wiki, please go to the [`addon-project`](https://github.com/MCResourcePile/addon-project) repository.

Building the page
-----------------

- Install [npm](https://www.npmjs.com/get-npm)
- Run `npm install -g grunt-cli` to install grunt globally
- Run `npm install` from this project folder to install all dependencies
- Run `grunt` to compile the page
- The output will be in the `out/` folder

Testing the site offline (optional):

- Run `npm install -g local-web-server`
- Run `ws` from the `out/` directory to start a webserver on localhost
- Visit http://127.0.0.1:8000/index.html to test. You will manually have to add `.html` behind the URL every time you click a link.
