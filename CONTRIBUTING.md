# Contributing to ResourcePile
- How to contribute to [StatTrack](#contributions-to-stattrack).
- How to contribute to [MapStack](#contributions-to-mapstack).
- A list of [Map Tags](#map-tags).
- Adding [update posts](#updates).

**All edits must be made under the [`source`](https://github.com/MCResourcePile/MCResourcePile.github.io/tree/source) branch, not the `master` branch!**

-----

##Contributions to StatTrack

All records for StatTrack bow records are stored within a json file called `bow.json`. The `bow.html` file does **not** need to be edited.

* Overcast Network bow records: [`src/data/stattrack/overcast/bow.json`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/source/src/data/stattrack/overcast/bow.json)
* Avicus Network bow records: [`src/data/stattrack/avicus/bow.json`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/source/src/data/stattrack/avicus/bow.json)

Below is an example of how the records for the map `Abandoned Zoo` will look inside of this file.
```json
{
    "map": "Abandoned Zoo",
    "slug": "abandoned_zoo",
    "tags": [ {"tdm": true} ],
    "record_first": [ { "player_name": "KratosMC_", "player_uuid": "82b77cbf-8b1b-4902-8eb6-34b65dcefa43", "distance": "81", "evidence": ""} ],
    "record_second": [ { "player_name": "Hypetastic", "player_uuid": "27e6dd0d-595a-4881-882d-cc35151d7d21", "distance": "79", "evidence": ""} ],
    "record_third": [ { "player_name": "snatimal", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "63", "evidence": ""} ],
},
```

|Attribute|Description|
|---|---|
|`"map": ""`|The map's display name|
|`"slug": ""`|The auto-generated identification string given to the map by the network. This is used to link the map back to its information back on the respective network. This slug can be found in the last part of the URL when viewing the map page. Eg. `https://oc.tc/maps/abandoned_zoo`|
|`"tags": []`|Descriptive tags given to the map to define game modes, sub game types, seasonal events and tournament editions. A full list of avaliable tags can be found [here](#map-tags).|
|`"record_first": []`|Details for the player holding the top record|
|`"record_second": []`|Details for the player holding the second place record|
|`"record_third": []`|Details for the player holding the third place record|
|`"player_name": ""`|The player's current display name|
|`"player_uuid": ""`|The player's UUID, which can be found by using https://mcuuid.net/|
|`"distance": ""`|The record distance|
|`"evidence": ""`|Additional evidence of the record which will be displayed next to the record. This is not required, but it encouraged that you link evidence with each new record.|

-----

##Contributions to MapStack

All maps listed on MapStack are stored within a json file called `network.json`. The `overcast.html` or `avicus.html` file in the mapstack folder does **not** need to be edited.

* Overcast Network map listing: [`src/data/mapstack/overcast.json`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/source/src/data/mapstack/overcast.json)
* Avicus Network map listing: [`src/data/mapstack/avicus.json`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/source/src/data/mapstack/avicus.json)

Below is an example of how the map `Abandoned Zoo` will look inside of this file.
```json
{
    "map": "Abandoned Zoo",
    "slug": "abandoned_zoo",
    "authors": [
        {"player_name": "Solo_Runner", "player_uuid": "2fa85349-2276-4850-b7b5-d18c4f4c8376"}
    ],
    "tags": [ {"tdm": true} ],
    "discussion": "https://oc.tc/forums/topics/51ddcd17af7fb0d4b2003633",
    "official": true,
    "commercial": false,
    "download": true,
    "xml": true,
    "cardinal": false,
},
```

|Attribute|Description|Default|
|---|---|---|
|`"map": ""`|The map's display name|
|`"slug": ""`|The auto-generated identification string given to the map by the network. This is used to link the map back to its information back on the respective network. This slug can be found in the last part of the URL when viewing the map page. Eg. `https://oc.tc/maps/abandoned_zoo`|
|`"authors": ""`|The creator(s) of the map. There can be multiple authors. `player_name:` is the player's current name. `player_uuid:` is the player's uuid, which can be found using https://mcuuid.net/|
|`"tags": []`|Descriptive tags given to the map to define game modes, sub game types, seasonal events and tournament editions. A full list of avaliable tags can be found [here](#map-tags)|
|`"private":`|Sets the map to private, disabling all the links. This shouldn't really ever be used|`false`|
|`"discussion": ""`|The link of the map's discussion thread. Should be left blank if there isn't one|No link|
|`"official":`|If the map was in the official Overcast Network maps repository|`true`|
|`"sourced":`|If the map download was retrieved from the map's discussion thread|`false`|
|`"commercial":`|Defaults to true and gives the map a [CC BY-SA](https://creativecommons.org/licenses/by-sa/3.0/legalcode) license. If the map author does not want the map used for commercial purposes, set this to false and the map will be given a [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode) license instead|`true`|
|`"download":`|Specify if the map has a download. Maps that do not have a download will not be displayed on the map listing|`true`|
|`"xml":`|Specify if the map has an XML file. All maps should have an XML File|`true`|
|`"cardinal":`|Specify if the map works with [CardinalPGM](https://github.com/twizmwazin/CardinalPGM)|`false`|

-----

###Map Tags

|Tag|Notes|Tag Reference|
|---|---|---|
Arcade || `"arcade": true`  
Blitz | Any map that uses the blitz module, not just classic blitz maps (Overcast Network only) | `"blitz": true`  
Capture Points | Hills that need to be captured to win, don't award points | `"cp": true`  
Capture the Flag || `"ctf": true`  
Capture the Wool || `"ctw": true`  
Destroy the Core || `"dtc": true`  
Destroy the Monument || `"dtm": true`  
Free-for-all || `"ffa": true`  
Frenzy | (Avicus Network only) | `"frenzy": true`  
Ghost Squadron || `"gs": true`  
King of the Hill | Hills that award points when captured | `"koth": true`  
Micro | (Overcast Network only) | `"micro": true`  
RAGE || `"rage": true`  
Ranked Edition | (Overcast Network only) | `"ranked": true`  
Race for Wool | (Overcast Network only) | `"rfw": true`  
Skywars || `"skywars": true`   
Survival Games | (Overcast Network only) | `"sg": true`  
Team Deathmatch || `"tdm": true`  
TNT || `"tnt": true`
Tournament Edition || `"te": true`  
Seasonal Edition | Christmas, Halloween, etc.. | `"season": ""`  
Other gamemode or sub-gamemode | Eg. Juggernaut gamemode from Overcast's arcade | `"other": ""`

-----

##Updates

Updates are displayed on the [updates](https://mcresourcepile.github.io/updates) page of the ResourcePile website providing visters with recent additions or important announcements in regards to maps or other developments related to ResourcePile. You will be editing the file listed below to add new update posts.

* Update posts data: [`src/data/updates.json`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/source/src/data/updates.json)

Below is an example of a single post.
```json
{
    "heading": "Welcome to ResourcePile",
    "id": "welcome",
    "important": true,
    "date": "02-01-2017",
    "content": "Welcome to ResourcePile, a community driven project with contributors from Overcast Network and Avicus Network groups.",
    "buttons": [
        {"details": "Our Staff", "url": "https://mcresourcepile.github.io/contact"},
        {"details": "GitHub", "url": "https://github.com/MCResourcePile"}
    ]
},
```

|Attribute|Description|Default|
|---|---|---|
|`"heading": ""`|The post's title|
|`"id": ""`|The post's unique ID|
|`"important":`|If the post should be more visible, gives the post a green 'glow'|`false`|
|`"date": ""`|The date in which the post was written, **must** be formatted at MM-DD-YYYY, eg. `01-29-2017`|
|`"content": ""`|The main post content, accepts HTML elements|
|`"buttons": []`|Attribute containing button information (posts do not require buttons)|
|`"details": ""`|The button's display text|`Learn More`|
|`"url": ""`|The URL which the button leads to|
