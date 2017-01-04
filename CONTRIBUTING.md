##Contributions to StatTrack

All records for StatTrack bow records are stored within a javascript file called `bow-records.js` which is located in the materials folder under each of the network's individual sectons. The `bow.html` file does **not** need to be edited.

* Lifeboat PC bow records: [`lifeboat/materials/bow-records.js`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/master/stattrack/lifeboat/materials/bow-records.js)
* Avicus Network bow records: [`avicus/materials/bow-records.js`](https://github.com/MCResourcePile/MCResourcePile.github.io/blob/master/stattrack/avicus/materials/bow-records.js)

Below is an example of how the records for the map `Abandoned Zoo` will look inside of this file. 
```
{
    map: "Abandoned Zoo",
    slug: "abandoned_zoo",
    tags: [ {tdm: true} ],
    record_first: [ { player_name: "KratosMC_", player_uuid: "82b77cbf-8b1b-4902-8eb6-34b65dcefa43", distance: "81", evidence: ""} ],
    record_second: [ { player_name: "Hypetastic", player_uuid: "27e6dd0d-595a-4881-882d-cc35151d7d21", distance: "79", evidence: ""} ],
    record_third: [ { player_name: "snatimal", player_uuid: "b843e63b-4d8c-4606-b6da-08b3ed8534d1", distance: "63", evidence: ""} ],
},
```

|Attribute|Description|
|---|---|
|`map: ""`|The map's display name|
|`slug: ""`|The auto-generated identification string given to the map by the network. This is used to link the map back to its information back on the respective network. This slug can be found in the last part of the URL when viewing the map page. Eg. `https://oc.tc/maps/abandoned_zoo`|
|`tags: []`|Descriptive tags given to the map to define game modes, sub game types, seasonal events and tournament editions. A full list of avaliable tags can be found [here](#map-tags).|
|`record_first: []`|Details for the player holding the top record|
|`record_second: []`|Details for the player holding the second place record|
|`record_third: []`|Details for the player holding the third place record|
|`player_name: ""`|The player's current display name|
|`player_uuid: ""`|The player's UUID, which can be found by using https://mcuuid.net/|
|`distance: ""`|The record distance|
|`evidence: ""`|Additional evidence of the record which will be displayed next to the record. This is not required, but it encouraged that you link evidence with each new record.|

###Map Tags

|Tag|Notes|Tag Reference|
|---|---|---|
Arcade || `arcade: true`   
Blitz | Any map that uses the blitz module, not just classic blitz maps (Lifeboat PC only) | `blitz: true`  
Capture Points | Hills that need to be captured to win, don't award points | `cp: true`  
Capture the Flag || `ctf: true`  
Capture the Wool || `ctw: true`  
Destroy the Core || `dtc: true`  
Destroy the Monument || `dtm: true`  
Free-for-all || `ffa: true`  
Frenzy | (Avicus Network only) | `frenzy: true`  
Ghost Squadron || `gs: true`  
King of the Hill | Hills that award points when captured | `koth: true`  
Micro | (Lifeboat PC only) | `mirco: true`  
Mixed gamemodes || `mixed: true`  
RAGE || `rage: ture`  
Ranked Edition | (Lifeboat PC only) | `ranked: true`  
Race for Wool | (Lifeboat PC only) | `rfw: true`  
Skywars || `skywars: true`   
Survival Games | (Lifeboat PC only) | `sg: true`  
Team Deathmatch || `tdm: true`  
Tournament Edition || `te: true`  
Seasonal Edition | Christmas, Halloween, etc.. | `season: ""`  
Other gamemode or sub-gamemode | Juggernaut gamemode from Lifeboat's arcade for example | `other: ""`
