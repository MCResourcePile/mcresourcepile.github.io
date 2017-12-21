You are now able to authenticate your GitHub account with our website allowing you to increase your map download limit from approximately 7 maps an hour all the way up to 700+ maps an hour! While this is much greater than the amount of maps we currently have in our collections, it means that you will no longer have to wait an hour for rate limits to reset or download entire repositories from GitHub to have access to the maps you want. Below are the steps you must take in order to authenticate your downloads.

1. Go to our [preferences page](https://mcresourcepile.github.io/admin/preferences) and click on `Generate Access Token`
2. Click `Authorize MCResourcePile`
3. Open the `access_token` file which was downloaded with a text editor
4. Copy the string of numbers and letters following `access_token=` (this will be 40 characters long)
5. Paste the token into the access token field on our [preferences page](https://mcresourcepile.github.io/admin/preferences) and click save

If you didn't get the `access_token` file, try clicking `Generate Access Token` again. Once you've done that you will see an <span class="label label-success map-label">Authenticated</span> badge on any map page.
