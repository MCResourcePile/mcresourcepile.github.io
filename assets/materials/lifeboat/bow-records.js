window.onload = function() {
    var source = document.getElementById("records-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        records: [
			    {
                "map": "100 Rooms",
                "slug": "100_rooms",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "101 Pumpkins",
                "slug": "101_pumpkins",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "101 Rooms TDM",
                "slug": "101_rooms_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "101 Rooms",
                "slug": "101_rooms",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Tommy_", "player_uuid": "c5e385b8-4ceb-4368-8929-b32f3dea3201", "distance": "48", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "43", "evidence": ""}],
                "record_third": [{"player_name": "samalexbilly", "player_uuid": "5707b36e-b99a-4b7e-aa86-fdffbc764f3f", "distance": "41", "evidence": ""}]
            },
            {
                "map": "4K",
                "slug": "4k",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "9th Law",
                "slug": "9th_law",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "106", "evidence": ""}],
                "record_second": [{"player_name": "TheErnestox", "player_uuid": "ac8f36cf-2cf9-46fa-ac1b-53ea810a80d1", "distance": "59", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "A New Day",
                "slug": "a_new_day",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "Kadaric", "player_uuid": "e901c09f-e139-4246-9a66-e04123bd74d8", "distance": "107", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "107", "evidence": ""}]
            },
            {
                "map": "AaerHoHoHos",
                "slug": "aaerhohohos",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "87", "evidence": ""}],
                "record_second": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "58", "evidence": ""}],
                "record_third": [{"player_name": "xiWINKYix13", "player_uuid": "de31cfd3-6509-4a45-8727-aca9fcca436f", "distance": "49", "evidence": ""}]
            },
            {
                "map": "Aaeros",
                "slug": "aaeros",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Lamster", "player_uuid": "b213dddd-28e6-4c22-afa1-da9e62c594e6", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "ChillerFrost", "player_uuid": "f62b53d6-a39f-4da9-b790-ff599f0d25ab", "distance": "66", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Abaddon",
                "slug": "abaddon",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Abandoned Zoo",
                "slug": "abandoned_zoo",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "kraat", "player_uuid": "82b77cbf-8b1b-4902-8eb6-34b65dcefa43", "distance": "81", "evidence": ""}],
                "record_second": [{"player_name": "Hypetastic", "player_uuid": "27e6dd0d-595a-4881-882d-cc35151d7d21", "distance": "79", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "79", "evidence": ""}]
            },
            {
                "map": "Abudor : Christmas",
                "slug": "abudor___christmas",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "OnlyChristian", "player_uuid": "62476b3f-ec97-419d-bbe0-d4431ec82f5c", "distance": "23", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Abudor II",
                "slug": "abudor_ii",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "23", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Abudor",
                "slug": "abudor",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "79", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "Helver", "player_uuid": "1195b912-4869-4dfd-929a-bb2b344f9b1d", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Abudracula",
                "slug": "abudracula",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "61", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "53", "evidence": ""}]
            },
            {
                "map": "Abysm: Blitz",
                "slug": "abysm__blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Academy",
                "slug": "academy",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "66", "evidence": ""}],
                "record_third": [{"player_name": "SuperKy1e", "player_uuid": "b71f92bf-20eb-4d57-8315-6be148bdc246", "distance": "50", "evidence": ""}]
            },
            {
                "map": "Aerobellum",
                "slug": "aerobellum",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aerst Grove",
                "slug": "aerst_grove",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "23", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aerugo",
                "slug": "aerugo",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aeruhohoho",
                "slug": "aeruhohoho",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "21", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "After the War",
                "slug": "after_the_war",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "33", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "After the War",
                "slug": "after_the_war",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "33", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Airship Aces",
                "slug": "airship_aces",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "67", "evidence": ""}],
                "record_second": [{"player_name": "Syvoxo", "player_uuid": "1c2664be-01ce-4be4-ac1c-a4dcc64b80c7", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Airship Ascendance",
                "slug": "airship_ascendance",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Airship Battle",
                "slug": "airship_battle",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Syvoxo", "player_uuid": "1c2664be-01ce-4be4-ac1c-a4dcc64b80c7", "distance": "77", "evidence": ""}],
                "record_second": [{"player_name": "CIPato", "player_uuid": "396229db-3e91-415f-be44-8bacc9fcbc9f", "distance": "52", "evidence": ""}],
                "record_third": [{"player_name": "Hivlik", "player_uuid": "2a419ea9-a120-4f97-a2b0-ae5e22a0c3fd", "distance": "50", "evidence": ""}]
            },
            {
                "map": "Amazon",
                "slug": "amazon",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Amazon",
                "slug": "amazon",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "An Overcast Christmas",
                "slug": "an_overcast_christmas",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "49", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}]
            },
            {
                "map": "Anathema",
                "slug": "anathema",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Anathema",
                "slug": "anathema",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aniirnit",
                "slug": "aniirnit",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Antiquis",
                "slug": "antiquis",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "wolfyrules101", "player_uuid": "887a2c15-263e-4b95-8f8f-ce6665e8d850", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "84", "evidence": ""}],
                "record_third": [{"player_name": "_Bunnies", "player_uuid": "1cc7c321-f7f3-42c2-a260-3c9b65aca235", "distance": "83", "evidence": ""}]
            },
            {
                "map": "Aqua Zero",
                "slug": "aqua_zero",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Arachnea",
                "slug": "arachnea",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "44", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "30", "evidence": ""}]
            },
            {
                "map": "Arbaro Blitz",
                "slug": "arbaro_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Arbaro Blitzmas",
                "slug": "arbaro_blitzmas",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "ArBOOro Blitz",
                "slug": "arbooro_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Arcane Sanctuary",
                "slug": "arcane_sanctuary",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Arctic Dusk",
                "slug": "arctic_dusk",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Argon",
                "slug": "argon",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "HS__", "player_uuid": "b0541794-6387-4ebe-bdd1-86a1c09b5584", "distance": "60", "evidence": ""}],
                "record_second": [{"player_name": "HiMyNameIsAlex", "player_uuid": "822ef0dc-19f2-4ddb-9ee3-daf96c606985", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "Imkohlie", "player_uuid": "b1cc64a7-92a0-4960-9a2e-74d62bc90396", "distance": "42", "evidence": ""}]
            },
            {
                "map": "Arid Crossroads",
                "slug": "arid_crossroads",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Plean", "player_uuid": "931c2fd7-c324-461d-bfa6-e3967f45d063", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "112", "evidence": ""}],
                "record_third": [{"player_name": "7777Alex7777", "player_uuid": "ff0baff7-b957-490a-bd7b-83d72bc3ffa9", "distance": "112", "evidence": ""}]
            },
            {
                "map": "Arx Rage",
                "slug": "arx_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Simonaro", "player_uuid": "bbd68526-bb64-4de6-a725-9a4b917fb905", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Arx TDM",
                "slug": "arx_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ascension",
                "slug": "ascension",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Assault",
                "slug": "assault",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tulaaa", "player_uuid": "50c309d3-ef28-47a2-af9a-0279c36a83a1", "distance": "105", "evidence": ""}],
                "record_second": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "65", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "55", "evidence": ""}]
            },
            {
                "map": "Assault",
                "slug": "assault",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "35", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Astro",
                "slug": "astro",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "178", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "156", "evidence": ""}],
                "record_third": [{"player_name": "Clifford", "player_uuid": "9edcaf0c-63e1-4b50-82bc-6f01874a3067", "distance": "106", "evidence": ""}]
            },
            {
                "map": "AstroGEN",
                "slug": "astrogen",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Crazy_", "player_uuid": "a9f11454-beac-4cc3-a138-1780802c8794", "distance": "71", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "46", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Asura",
                "slug": "asura",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Atlantis",
                "slug": "atlantis",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "32", "evidence": ""}]
            },
            {
                "map": "Atom",
                "slug": "atom",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Atromix",
                "slug": "atromix",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Eillom", "player_uuid": "7bba53ae-de87-482d-b37c-3d1d7d9518dd", "distance": "109", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "94", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "92", "evidence": ""}]
            },
            {
                "map": "Aureola CTF",
                "slug": "aureola_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aureola Rage",
                "slug": "aureola_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "26", "evidence": ""}],
                "record_second": [{"player_name": "chapszz", "player_uuid": "9c670caa-bc00-4920-b3e2-d24ad8a8c9c5", "distance": "11", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aureola",
                "slug": "aureola",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "35", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "34", "evidence": ""}]
            },
            {
                "map": "Aurimar Rift",
                "slug": "aurimar_rift",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Autunno",
                "slug": "autunno",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Avalanche Mini",
                "slug": "avalanche_mini",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Avalanche",
                "slug": "avalanche",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "111", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "86", "evidence": ""}],
                "record_third": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "81", "evidence": ""}]
            },
            {
                "map": "Avalon Funland",
                "slug": "avalon_funland",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "138", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "129", "evidence": ""}],
                "record_third": [{"player_name": "Wastroll", "player_uuid": "f1fe818c-41ff-494d-8465-a9273b6a1d44", "distance": "126", "evidence": ""}]
            },
            {
                "map": "Azonarr",
                "slug": "azonarr",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "77", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Aztecatti",
                "slug": "aztecatti",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "40", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "37", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Babylon",
                "slug": "babylon",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "59", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "50", "evidence": ""}]
            },
            {
                "map": "Balloon Archipelago",
                "slug": "balloon_archipelago",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Imkohlie", "player_uuid": "b1cc64a7-92a0-4960-9a2e-74d62bc90396", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "82", "evidence": ""}],
                "record_third": [{"player_name": "Eillom", "player_uuid": "7bba53ae-de87-482d-b37c-3d1d7d9518dd", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Balloons DTM Christmas",
                "slug": "balloons_dtm_christmas",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "", "distance": "101", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BalloonsDTM Halloween",
                "slug": "balloonsdtm_halloween",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BalloonsDTM",
                "slug": "balloonsdtm",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "78", "evidence": ""}],
                "record_third": [{"player_name": "R3mix", "player_uuid": "5b4f3d12-9432-440a-b08a-063d3a6980ef", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Bam-BOO Valley",
                "slug": "bam_boo_valley",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "RealCrazyCreeps", "player_uuid": "5b25f6bc-44d8-47a7-ab52-f985ed309758", "distance": "54", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bamboo Valley II",
                "slug": "bamboo_valley_ii",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "49", "evidence": ""}],
                "record_third": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "46", "evidence": ""}]
            },
            {
                "map": "Bamboo Valley III",
                "slug": "bamboo_valley_iii",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "vaneslair", "player_uuid": "5498fe2d-aa1f-4e84-a830-be965ef95252", "distance": "76", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "66", "evidence": ""}]
            },
            {
                "map": "Bamboo Valley",
                "slug": "bamboo_valley",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "TheNecromancer13", "player_uuid": "f432ae99-d8c2-41e0-a25f-31c151958bea", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "98", "evidence": ""}],
                "record_third": [{"player_name": "pandaboy", "player_uuid": "41a15b96-f034-4d94-a671-bea4b5f130f5", "distance": "91", "evidence": ""}]
            },
            {
                "map": "Banana Split",
                "slug": "banana_split",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "TheBestXperia", "player_uuid": "b192acdf-f89b-4469-8ede-df2a78cae87a", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "Helios", "player_uuid": "13347b12-ac8c-4eea-957d-9a00e17662b3", "distance": "79", "evidence": ""}],
                "record_third": [{"player_name": "Helver", "player_uuid": "1195b912-4869-4dfd-929a-bb2b344f9b1d", "distance": "74", "evidence": ""}]
            },
            {
                "map": "Baroque Gardens",
                "slug": "baroque_gardens",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bastion",
                "slug": "bastion",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "103", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica CTF - Experiment 1",
                "slug": "battle_ecliptica_ctf___experiment_1",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "Itz_micyFire_PvP", "player_uuid": "4ee7a4e8-38e6-4583-967d-99f909f04161", "distance": "29", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica CTF",
                "slug": "battle_ecliptica_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "38", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica II : TE",
                "slug": "battle_ecliptica_ii___te",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hypetastic", "player_uuid": "27e6dd0d-595a-4881-882d-cc35151d7d21", "distance": "83", "evidence": ""}],
                "record_second": [{"player_name": "KuseiPro12", "player_uuid": "d6666a36-a303-4081-9b75-85eff1301a34", "distance": "69", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica II TE : Blitz",
                "slug": "battle_ecliptica_ii_te___blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "105", "evidence": ""}],
                "record_second": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "94", "evidence": ""}],
                "record_third": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "78", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica II",
                "slug": "battle_ecliptica_ii",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "119", "evidence": ""}],
                "record_second": [{"player_name": "superlo", "player_uuid": "b4ba782f-f261-41c8-9631-4095eada0db4", "distance": "107", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "105", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica III",
                "slug": "battle_ecliptica_iii",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "111", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "102", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica",
                "slug": "battle_ecliptica",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle of Krehm",
                "slug": "battle_of_krehm",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "119", "evidence": ""}],
                "record_third": [{"player_name": "f89", "player_uuid": "03236737-c1f8-429c-83df-24b537365f5a", "distance": "75", "evidence": ""}]
            },
            {
                "map": "Battle of Lyndanisse Blitz",
                "slug": "battle_of_lyndanisse_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle of Lyndanisse",
                "slug": "battle_of_lyndanisse",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "CIPato", "player_uuid": "396229db-3e91-415f-be44-8bacc9fcbc9f", "distance": "103", "evidence": ""}],
                "record_second": [{"player_name": "Imkohlie", "player_uuid": "b1cc64a7-92a0-4960-9a2e-74d62bc90396", "distance": "95", "evidence": ""}],
                "record_third": [{"player_name": "Eillom", "player_uuid": "7bba53ae-de87-482d-b37c-3d1d7d9518dd", "distance": "86", "evidence": ""}]
            },
            {
                "map": "Battle of Lyndanisse: Snowmen ",
                "slug": "battle_of_lyndanisse__snowmen_",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "razerater", "player_uuid": "d25e9ac5-8fa0-4ad0-a934-31535509ba1f", "distance": "39", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle of Tenjin 2",
                "slug": "battle_of_tenjin_2",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "karl5hawk", "player_uuid": "7824a465-ab13-4f60-9c5b-4c8fef2bfdda", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle of Tenjin III",
                "slug": "battle_of_tenjin_iii",
                "tags": [{"dtc": true, "tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "102", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Battle of Tenjin",
                "slug": "battle_of_tenjin",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "102", "evidence": ""}],
                "record_second": [{"player_name": "_IQ", "player_uuid": "6fe9c9fe-b2dd-448c-b9f4-42b2f8c14836", "distance": "75", "evidence": ""}],
                "record_third": [{"player_name": "Hivlik", "player_uuid": "2a419ea9-a120-4f97-a2b0-ae5e22a0c3fd", "distance": "70", "evidence": ""}]
            },
            {
                "map": "Beacon",
                "slug": "beacon",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Belcrest",
                "slug": "belcrest",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "67", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Below Zero",
                "slug": "below_zero",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "35", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bessemer's Process",
                "slug": "bessemer_s_process",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bill's Town",
                "slug": "bill_s_town",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BipBeta Halloween",
                "slug": "bipbeta_halloween",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "18", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "9", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BipBetaMC InvisiRAGE",
                "slug": "bipbetamc_invisirage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BipBetaMC TDM",
                "slug": "bipbetamc_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "Spintown", "player_uuid": "bbcafea0-53cf-4d29-9dd9-27f383d02faa", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "21", "evidence": ""}]
            },
            {
                "map": "BipBetaMC",
                "slug": "bipbetamc",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "HiMyNameIsAlex", "player_uuid": "822ef0dc-19f2-4ddb-9ee3-daf96c606985", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "crazyb", "player_uuid": "12382af8-0811-4644-984e-4b16ac248f0e", "distance": "31", "evidence": ""}]
            },
            {
                "map": "Black Gold",
                "slug": "black_gold",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bliss Rage",
                "slug": "bliss_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "BaconBooty", "player_uuid": "79262f9e-8bae-47af-8634-54d38ac7df4c", "distance": "114", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "114", "evidence": ""}]
            },
            {
                "map": "Bliss",
                "slug": "bliss",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "ApplePies", "player_uuid": "4faf501d-f965-4f07-887e-24cd66a4f7b0", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "69", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "66", "evidence": ""}]
            },
            {
                "map": "Blitzkrieg TDM",
                "slug": "blitzkrieg_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "89", "evidence": ""}],
                "record_second": [{"player_name": "Domimola", "player_uuid": "1725642f-a488-4f70-b3b5-900851ec8ad3", "distance": "55", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "53", "evidence": ""}]
            },
            {
                "map": "Blitzkrieg",
                "slug": "blitzkrieg",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "llwydz", "player_uuid": "76aaae9b-8566-4624-9fcf-199172e5285a", "distance": "99", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "74", "evidence": ""}],
                "record_third": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Blitzkrieg: CTF",
                "slug": "blitzkrieg__ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BlitzMiners",
                "slug": "blitzminers",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Blizz Christmas",
                "slug": "blizz_christmas",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "94", "evidence": ""}],
                "record_second": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "Wmelon", "player_uuid": "6e54a412-29ef-4575-a4e2-b49b4d9a3874", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Blizzard",
                "slug": "blizzard",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "BlockBlock",
                "slug": "blockblock",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "77", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "72", "evidence": ""}]
            },
            {
                "map": "BlockRAGE",
                "slug": "blockrage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "92:", "evidence": ""}],
                "record_second": [{"player_name": "SkyZoneHD", "player_uuid": "e580d48a-9ca6-4987-b3de-d2141e13e308", "distance": "92", "evidence": ""}],
                "record_third": [{"player_name": "_DooM", "player_uuid": "ddfd4065-cb39-4b89-9567-e2279d0c9c86", "distance": "82", "evidence": ""}]
            },
            {
                "map": "Blocks CTW",
                "slug": "blocks_ctw",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "LeFanceistBottom", "player_uuid": "f6ec0cb5-38a3-4e4b-a9aa-47d9aa4ab02a", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "FluctDark", "player_uuid": "14bf7174-1caf-4511-a6b1-d6c28642ed4e", "distance": "47", "evidence": ""}],
                "record_third": [{"player_name": "FastHits", "player_uuid": "3d1f253f-7899-4a3c-8366-f54106871d6a", "distance": "36", "evidence": ""}]
            },
            {
                "map": "Blocks DTC",
                "slug": "blocks_dtc",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Chupaa", "player_uuid": "b5fb4dc3-d7ae-4a0f-ad15-1e8247582a90", "distance": "147", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "142", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "116", "evidence": ""}]
            },
            {
                "map": "Blocks DTD",
                "slug": "blocks_dtd",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "140", "evidence": ""}],
                "record_second": [{"player_name": "lgmatias", "player_uuid": "7dcb1605-a641-4f6f-99ef-ea04278b6f7c", "distance": "138", "evidence": ""}],
                "record_third": [{"player_name": "Strangey", "player_uuid": "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06", "distance": "135", "evidence": ""}]
            },
            {
                "map": "Blocks II",
                "slug": "blocks_ii",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "DivineWolv", "player_uuid": "fcc883e6-a618-40e3-b602-1a56ff6c62b4", "distance": "106", "evidence": ""}],
                "record_second": [{"player_name": "Noisy_", "player_uuid": "7dfac6e9-c773-49e4-a18c-13e56586f725", "distance": "86", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "81", "evidence": ""}]
            },
            {
                "map": "Blocks",
                "slug": "blocks",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "41", "evidence": ""}]
            },
            {
                "map": "Blocks",
                "slug": "blocks",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "41", "evidence": ""}]
            },
            {
                "map": "Blossom",
                "slug": "blossom",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Boom",
                "slug": "boom",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Lamster", "player_uuid": "b213dddd-28e6-4c22-afa1-da9e62c594e6", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "53", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "43", "evidence": ""}]
            },
            {
                "map": "BoomBox",
                "slug": "boombox",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Fede", "player_uuid": "ffcbeed2-e75c-499a-a30d-328f4d44d2c7", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "100", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "94", "evidence": ""}]
            },
            {
                "map": "BoomBoxBigger",
                "slug": "boomboxbigger",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "YungRuan", "player_uuid": "7a4a1d25-ffe8-40ce-b20f-8c3c1d874fa3", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "47", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Boulevard",
                "slug": "boulevard",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Spintown", "player_uuid": "bbcafea0-53cf-4d29-9dd9-27f383d02faa", "distance": "80", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bouncy Stadium",
                "slug": "bouncy_stadium",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "130", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "30", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Bridge Over Troubled Water",
                "slug": "bridge_over_troubled_water",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "201", "evidence": ""}],
                "record_second": [{"player_name": "Helver", "player_uuid": "1195b912-4869-4dfd-929a-bb2b344f9b1d", "distance": "138", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "137", "evidence": ""}]
            },
            {
                "map": "Broken Unity",
                "slug": "broken_unity",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "PeanutWrath", "player_uuid": "45946ae7-7947-473c-a2f9-0a0059157eb8", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "xsilentt", "player_uuid": "1f04d4e4-8294-4895-a9ba-0cd6e458106e", "distance": "70", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "61", "evidence": ""}]
            },
            {
                "map": "Bunny Burrow",
                "slug": "bunny_burrow",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "BTKing", "player_uuid": "53af1e46-7424-485b-97de-7bf8d854a2aa", "distance": "2", "evidence": "https://i.imgur.com/PMsVQxk.png"}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
	    {
                "map": "Buried Down",
                "slug": "buried_down",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },	
            {
                "map": "BVC",
                "slug": "bvc",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "naslomka", "player_uuid": "d19f8fcb-b52f-4181-85ce-6034da1b81f9", "distance": "103", "evidence": ""}],
                "record_second": [{"player_name": "pulbos", "player_uuid": "ba6d0091-b63a-4b22-8751-1432865b95a1", "distance": "101", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "99", "evidence": ""}]
            },
            {
                "map": "Cabin Fever II",
                "slug": "cabin_fever_ii",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cabin Fever",
                "slug": "cabin_fever",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cacti Panic",
                "slug": "cacti_panic",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cairo Blitz",
                "slug": "cairo_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cairo TDM",
                "slug": "cairo_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cake Wars 3",
                "slug": "cake_wars_3",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cake Wars",
                "slug": "cake_wars",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "_IQ", "player_uuid": "6fe9c9fe-b2dd-448c-b9f4-42b2f8c14836", "distance": "190", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "52", "evidence": ""}],
                "record_third": [{"player_name": "cgode", "player_uuid": "f4bd4ab0-9880-4123-9cc0-0ff79c3e3f0c", "distance": "51", "evidence": ""}]
            },
            {
                "map": "Callorbus",
                "slug": "callorbus",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Candy Cane Valley",
                "slug": "candy_cane_valley",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "CannonCube",
                "slug": "cannoncube",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "CannonQuad",
                "slug": "cannonquad",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Canopy",
                "slug": "canopy",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "135", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "131", "evidence": ""}],
                "record_third": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "126", "evidence": ""}]
            },
            {
                "map": "Cardinal",
                "slug": "cardinal",
                "tags": [{"dtm": true, "koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cargo",
                "slug": "cargo",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "132", "evidence": ""}],
                "record_second": [{"player_name": "TheBestXperia", "player_uuid": "b192acdf-f89b-4469-8ede-df2a78cae87a", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "Qwuiblington", "player_uuid": "a6955518-97b8-4c1d-8e76-e641b8f8822c", "distance": "105", "evidence": ""}]
            },
            {
                "map": "Cat's Cradle",
                "slug": "cat_s_cradle",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Stevie_Noob", "player_uuid": "f09ed2b9-f6c3-412e-836f-7fe35e0526b7", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "36", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Catacomb",
                "slug": "catacomb",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "38", "evidence": ""}],
                "record_second": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "CatalystCP",
                "slug": "catalystcp",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "43", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "32", "evidence": ""}]
            },
            {
                "map": "CatalystMC Blitz",
                "slug": "catalystmc_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "CatalystMC",
                "slug": "catalystmc",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cathedral 0.2",
                "slug": "cathedral_0_2",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cathedral EndeRAGE",
                "slug": "cathedral_enderage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cathedral",
                "slug": "cathedral",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cavum",
                "slug": "cavum",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cemetery",
                "slug": "cemetery",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cemetery",
                "slug": "cemetery",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Chemical Reaction",
                "slug": "chemical_reaction",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Chicken Run!",
                "slug": "chicken_run_",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Chocolate Diamonds CTF",
                "slug": "chocolate_diamonds_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Christmas Eve",
                "slug": "christmas_eve",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Circus CTW",
                "slug": "circus_ctw",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "f89", "player_uuid": "03236737-c1f8-429c-83df-24b537365f5a", "distance": "48", "evidence": ""}]
            },
            {
                "map": "Circus DTC",
                "slug": "circus_dtc",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Gaporigo", "player_uuid": "f5b8ca35-c3b4-4f69-8f1c-74314f2ebd2e", "distance": "108", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "90", "evidence": ""}],
                "record_third": [{"player_name": "tRONALDdUMP_69", "player_uuid": "9ab8f217-3208-47aa-a782-c978ca61bccd", "distance": "71", "evidence": ""}]
            },
            {
                "map": "Circus TDM",
                "slug": "circus_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Citadel",
                "slug": "citadel",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "107", "evidence": ""}],
                "record_second": [{"player_name": "rlgc", "player_uuid": "0ad56d6a-7ac5-456c-9ce3-3b974b11d3da", "distance": "78", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Classic Flame",
                "slug": "classic_flame",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Classic Flame",
                "slug": "classic_flame",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Clay Castles",
                "slug": "clay_castles",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cloud Nine",
                "slug": "cloud_nine",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "TheErnestox", "player_uuid": "ac8f36cf-2cf9-46fa-ac1b-53ea810a80d1", "distance": "86", "evidence": ""}],
                "record_third": [{"player_name": "CoconutCove", "player_uuid": "623f6f73-db58-4f0d-acbd-25e421b7e2df", "distance": "82", "evidence": ""}]
            },
            {
                "map": "Clover",
                "slug": "clover",
                "tags": [{"ctw": true, "dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Coastline",
                "slug": "coastline",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Disproof", "player_uuid": "1d14f451-c8f0-4e02-a387-1ea808f8b5b3", "distance": "121", "evidence": ""}],
                "record_second": [{"player_name": "DivineWolf", "player_uuid": "eb52a88b-8ddf-4f21-98d2-fccb0a5e11f2", "distance": "119", "evidence": ""}],
                "record_third": [{"player_name": "chiefwiggums13", "player_uuid": "0d2d2c96-e851-4a20-ad03-127322d3a9bf", "distance": "117", "evidence": ""}]
            },
            {
                "map": "Concourse",
                "slug": "concourse",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "55", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Coniferous Forest",
                "slug": "coniferous_forest",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Corrupted Kingdoms",
                "slug": "corrupted_kingdoms",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "_IQ", "player_uuid": "6fe9c9fe-b2dd-448c-b9f4-42b2f8c14836", "distance": "130", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "113", "evidence": ""}],
                "record_third": [{"player_name": "Team_Noobs", "player_uuid": "daff5e97-55b8-4a21-baf2-f3563d64ffff", "distance": "96", "evidence": ""}]
            },
            {
                "map": "cos(tnt)",
                "slug": "cos_tnt_",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Rahuul", "player_uuid": "ca8ec5cd-4b2d-45d0-a90c-1c8a336db6ae", "distance": "130", "evidence": ""}],
                "record_second": [{"player_name": "Rax123", "player_uuid": "743bff39-4eec-4622-9c33-581154d37123", "distance": "95", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "84", "evidence": ""}]
            },
            {
                "map": "CotBot",
                "slug": "cotbot",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "37", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Crater of Secrets",
                "slug": "crater_of_secrets",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Crossfire",
                "slug": "crossfire",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "specialness", "player_uuid": "7d79c7cd-ca47-484a-86ad-ad93fe71b13f", "distance": "159", "evidence": ""}],
                "record_second": [{"player_name": "iPho_", "player_uuid": "4bda0bb3-83ce-4ff8-9cce-0e9a2f71e698", "distance": "188", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "188", "evidence": ""}]
            },
            {
                "map": "Cruor Castle Blitz",
                "slug": "cruor_castle_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "csc(tnt)",
                "slug": "csc_tnt_",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "31", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Cubed",
                "slug": "cubed",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "CubedTDM",
                "slug": "cubedtdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "BaconBooty", "player_uuid": "79262f9e-8bae-47af-8634-54d38ac7df4c", "distance": "26", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DATAbase",
                "slug": "database",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DATAbasin",
                "slug": "databasin",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "146", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "145", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "121", "evidence": ""}]
            },
            {
                "map": "DATAcenter",
                "slug": "datacenter",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "60", "evidence": ""}],
                "record_second": [{"player_name": "Brownbadger", "player_uuid": "046e572b-5e0c-44e5-951c-69b041ac31b1", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "56", "evidence": ""}]
            },
            {
                "map": "Datastation 2.0",
                "slug": "datastation_2_0",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DATAstation",
                "slug": "datastation",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "dragonstomper64", "player_uuid": "6863869b-4b8c-4445-b778-a8e016775ae4", "distance": "116", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "116", "evidence": ""}]
            },
            {
                "map": "Dead Heat",
                "slug": "dead_heat",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dead Town",
                "slug": "dead_town",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "LArrowHead", "player_uuid": "a4266139-34f3-46c5-a730-f8828376a15a", "distance": "109", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "78", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "69", "evidence": ""}]
            },
            {
                "map": "Deadwater Chills",
                "slug": "deadwater_chills",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DeadWater Docks",
                "slug": "deadwater_docks",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DeadWater Pirate's Grotto",
                "slug": "deadwater_pirate_s_grotto",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Deadwater Spooks",
                "slug": "deadwater_spooks",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Deepwind Jungle",
                "slug": "deepwind_jungle",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "TwerkOut", "player_uuid": "4a2bff4d-c90d-4769-868b-9a7062dcc69e", "distance": "95", "evidence": ""}],
                "record_third": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Demense",
                "slug": "demense",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Deschutes",
                "slug": "deschutes",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "YouGotSniped", "player_uuid": "ec2ef0d7-de48-4429-82cf-54e3b28bd948", "distance": "112", "evidence": ""}],
                "record_second": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "109", "evidence": ""}],
                "record_third": [{"player_name": "Nitrile", "player_uuid": "f8050a4a-e7af-4e37-8624-a0a507163ea5", "distance": "108", "evidence": ""}]
            },
            {
                "map": "Desert Cataract",
                "slug": "desert_cataract",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Jtrowe_", "player_uuid": "c75f4921-c144-42fd-bedf-a4e0c2b33386", "distance": "113", "evidence": ""}],
                "record_second": [{"player_name": "Vobaseball12", "player_uuid": "2e0d2afb-de58-4222-a95a-ad8ebfce1ee3", "distance": "102", "evidence": ""}],
                "record_third": [{"player_name": "Hfisk", "player_uuid": "d64a15ce-24a7-4f53-bcd6-e24b1592bf26", "distance": "99", "evidence": ""}]
            },
            {
                "map": "Desert Sanctuary",
                "slug": "desert_sanctuary",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "petranhoses", "player_uuid": "0ba4c67b-9945-4c4f-9eef-8b5b4cd6ca69", "distance": "115", "evidence": ""}],
                "record_second": [{"player_name": "Tulaaa", "player_uuid": "50c309d3-ef28-47a2-af9a-0279c36a83a1", "distance": "72", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Desert Trouble",
                "slug": "desert_trouble",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Deserted",
                "slug": "deserted",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Deserted",
                "slug": "deserted",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Desolated",
                "slug": "desolated",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Desolated",
                "slug": "desolated",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Diablo",
                "slug": "diablo",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "1", "evidence": ""}]
            },
            {
                "map": "Directrix with Gunz",
                "slug": "directrix_with_gunz",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Strangey", "player_uuid": "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06", "distance": "164", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Directrix",
                "slug": "directrix",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "GreatWallOfTrump", "player_uuid": "97307a17-8869-4138-b573-5ce4cc050974", "distance": "137", "evidence": ""}],
                "record_second": [{"player_name": "Tulaaa", "player_uuid": "50c309d3-ef28-47a2-af9a-0279c36a83a1", "distance": "132", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "124", "evidence": ""}]
            },
            {
                "map": "Discipline",
                "slug": "discipline",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Wmelon", "player_uuid": "6e54a412-29ef-4575-a4e2-b49b4d9a3874", "distance": "84", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "71", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "59", "evidence": ""}]
            },
            {
                "map": "Diversity",
                "slug": "diversity",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Divided",
                "slug": "divided",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "DK Crossovers DTE",
                "slug": "dk_crossovers_dte",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "83", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Drandlion",
                "slug": "drandlion",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "73", "evidence": ""}],
                "record_second": [{"player_name": "Creephunter", "player_uuid": "95763a18-eb88-44e7-8a10-780acffceae8", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Drow's Crevice Blitz",
                "slug": "drow_s_crevice_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Drow's Crevice II",
                "slug": "drow_s_crevice_ii",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "21", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Drow's Crevice UHC",
                "slug": "drow_s_crevice_uhc",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dry Gulch",
                "slug": "dry_gulch",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "30", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dry Wound",
                "slug": "dry_wound",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "atelophobia", "player_uuid": "d4ad99aa-966e-496a-8ac5-9d920cb96618", "distance": "108", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "101", "evidence": ""}],
                "record_third": [{"player_name": "Babalooba", "player_uuid": "304484f5-c690-4b11-b6d6-3354381425b0", "distance": "98", "evidence": ""}]
            },
            {
                "map": "Dust Blitz",
                "slug": "dust_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dust CTF",
                "slug": "dust_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "36", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dust",
                "slug": "dust",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "66", "evidence": ""}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Dwyer Hill",
                "slug": "dwyer_hill",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "57", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "56", "evidence": ""}]
            },
            {
                "map": "DynaboOo",
                "slug": "dynabooo",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "LordSonicXD", "player_uuid": "321832c5-2ee7-4fdc-b111-ce31b16ae4a9", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "46", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Dynamo",
                "slug": "dynamo",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "IvanYolo_", "player_uuid": "f4d9831b-f0f0-4d46-be63-dafd1a6afed7", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "amactus", "player_uuid": "715769c5-8c4c-4489-bdf8-f9cee2b2ae8a", "distance": "113", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "88", "evidence": ""}]
            },
            {
                "map": "Eldritch",
                "slug": "eldritch",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Sbongkh", "player_uuid": "ecbc58c1-ae7f-45c4-945c-cb3ab3e104cc", "distance": "61", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "13", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Eldritch",
                "slug": "eldritch",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Sbongkh", "player_uuid": "ecbc58c1-ae7f-45c4-945c-cb3ab3e104cc", "distance": "61", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "13", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Emerald Canopy",
                "slug": "emerald_canopy",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Empire in Ruins",
                "slug": "empire_in_ruins",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Z3R0", "player_uuid": "7b8d9672-34db-4b4b-85f6-a45a485691f9", "distance": "6", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Empire",
                "slug": "empire",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "130", "evidence": ""}],
                "record_second": [{"player_name": "NeeqYT", "player_uuid": "62a2fa3c-97c4-403c-961f-9e7acfdf3b57", "distance": "106", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "101", "evidence": ""}]
            },
            {
                "map": "Enchanted Woods",
                "slug": "enchanted_woods",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ender Blast",
                "slug": "ender_blast",
                "tags": [{"ctw": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "78", "evidence": ""}],
                "record_second": [{"player_name": "Helver", "player_uuid": "1195b912-4869-4dfd-929a-bb2b344f9b1d", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "24", "evidence": ""}]
            },
            {
                "map": "Ends Way",
                "slug": "ends_way",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ends Way",
                "slug": "ends_way",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Equinox",
                "slug": "equinox",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "74", "evidence": ""}],
                "record_second": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "60", "evidence": ""}]
            },
            {
                "map": "Escensio",
                "slug": "escensio",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "29", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Exitium",
                "slug": "exitium",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Facility TE ",
                "slug": "facility_te_",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "49", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Facility",
                "slug": "facility",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "Blazikken", "player_uuid": "d39daf19-dce2-49d6-9877-98eef7c1e0b8", "distance": "49", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Fairy Tales 2: A Tale or Two",
                "slug": "fairy_tales_2__a_tale_or_two",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Stevie_Noob", "player_uuid": "f09ed2b9-f6c3-412e-836f-7fe35e0526b7", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "116", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "106", "evidence": ""}]
            },
            {
                "map": "Fairyland",
                "slug": "fairyland",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "30", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fairyland",
                "slug": "fairyland",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "30", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fallen Courtyard",
                "slug": "fallen_courtyard",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "55", "evidence": ""}],
                "record_third": [{"player_name": "Creephunter", "player_uuid": "95763a18-eb88-44e7-8a10-780acffceae8", "distance": "53", "evidence": ""}]
            },
            {
                "map": "Fallen Debris",
                "slug": "fallen_debris",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fallen Empire",
                "slug": "fallen_empire",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Eggyyyy", "player_uuid": "e4b99cb2-9d7a-49a5-9743-f5b107d21053", "distance": "105", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "96", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fallencrests 2",
                "slug": "fallencrests_2",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "76", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "68", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fallencrests Halloween",
                "slug": "fallencrests_halloween",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "TheLukitass10", "player_uuid": "22cf9ca7-566c-42b6-b219-c44ef015d5ad", "distance": "31", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fallencrests",
                "slug": "fallencrests",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "64", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Feative Relapse",
                "slug": "feative_relapse",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Festive Venice",
                "slug": "festive_venice",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "Wmelon", "player_uuid": "6e54a412-29ef-4575-a4e2-b49b4d9a3874", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "39", "evidence": ""}]
            },
            {
                "map": "Flag Run",
                "slug": "flag_run",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "76", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Flexure",
                "slug": "flexure",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Folina",
                "slug": "folina",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Forbidden Paradise",
                "slug": "forbidden_paradise",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fort Beverstone",
                "slug": "fort_beverstone",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fort Wars",
                "slug": "fort_wars",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Jon_fam", "player_uuid": "112d0cc8-51c0-48ff-948b-6551eaa33ae6", "distance": "63", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fortress Battles",
                "slug": "fortress_battles",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapatepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "68", "evidence": ""}],
                "record_third": [{"player_name": "Nemesis_", "player_uuid": "acbe8312-dabc-4977-80ec-82c337b6ce72", "distance": "55", "evidence": ""}]
            },
            {
                "map": "Fourchette",
                "slug": "fourchette",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Fox' Strife",
                "slug": "fox__strife",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "125", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Foxtrot TDM",
                "slug": "foxtrot_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "kevinkoz123", "player_uuid": "6e6f0d56-6f2f-4735-904f-26ca7328bee3", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Foxtrot",
                "slug": "foxtrot",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "116", "evidence": ""}],
                "record_second": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "103", "evidence": ""}],
                "record_third": [{"player_name": "Nitrile", "player_uuid": "f8050a4a-e7af-4e37-8624-a0a507163ea5", "distance": "101", "evidence": ""}]
            },
            {
                "map": "Fractal Descent",
                "slug": "fractal_descent",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "124", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "119", "evidence": ""}],
                "record_third": [{"player_name": "Nemesis_", "player_uuid": "acbe8312-dabc-4977-80ec-82c337b6ce72", "distance": "63", "evidence": ""}]
            },
            {
                "map": "Frozen Palace",
                "slug": "frozen_palace",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "36", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "34", "evidence": ""}]
            },
            {
                "map": "Frozen Palace",
                "slug": "frozen_palace",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "36", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "34", "evidence": ""}]
            },
            {
                "map": "Full Salvo",
                "slug": "full_salvo",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "StoCoBoLo", "player_uuid": "48cac8bd-0cde-4e33-8c50-78b3dd6bec8e", "distance": "44", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Funerea",
                "slug": "funerea",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Galactic War",
                "slug": "galactic_war",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Gang Wars: Strike",
                "slug": "gang_wars__strike",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "94", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ghostwind Mountain",
                "slug": "ghostwind_mountain",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Glacial Canyon",
                "slug": "glacial_canyon",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Glacial Conquest",
                "slug": "glacial_conquest",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Glacial Impact 2",
                "slug": "glacial_impact_2",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Glacial Impact",
                "slug": "glacial_impact",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "MajesticStar", "player_uuid": "f1f37216-bfa4-47b1-b36e-3c8ec8ee7aa4", "distance": "33", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "13", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Glacioantrum",
                "slug": "glacioantrum",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Golden Drought II",
                "slug": "golden_drought_ii",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "94", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "79", "evidence": ""}],
                "record_third": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "67", "evidence": ""}]
            },
            {
                "map": "Golden Drought III",
                "slug": "golden_drought_iii",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "171", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "138", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "105", "evidence": ""}]
            },
            {
                "map": "Golden Drought IV",
                "slug": "golden_drought_iv",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "lowkeyAlting", "player_uuid": "b06fb221-e8a6-4c84-96c8-9ac4a0fd1b51", "distance": "33", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Golden Drought",
                "slug": "golden_drought",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Disproof", "player_uuid": "1d14f451-c8f0-4e02-a387-1ea808f8b5b3", "distance": "123", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "115", "evidence": ""}]
            },
            {
                "map": "Gone Camping",
                "slug": "gone_camping",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "27", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Gooseberry",
                "slug": "gooseberry",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "87", "evidence": ""}],
                "record_second": [{"player_name": "llwydz", "player_uuid": "76aaae9b-8566-4624-9fcf-199172e5285a", "distance": "85", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "83", "evidence": ""}]
            },
            {
                "map": "Grassy Knoll",
                "slug": "grassy_knoll",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Grassy Knoll",
                "slug": "grassy_knoll",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Gravestone",
                "slug": "gravestone",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "89", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "89", "evidence": ""}],
                "record_third": [{"player_name": "pokemaster15243", "player_uuid": "5ae375d1-d5f1-4cfd-94f4-814b8ea4d047", "distance": "82", "evidence": ""}]
            },
            {
                "map": "Graveyard",
                "slug": "graveyard",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Greed",
                "slug": "greed",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "beanbutt", "player_uuid": "ca2306d1-1198-4d46-8c44-a82f5b3c8a4e", "distance": "21", "evidence": ""}],
                "record_third": [{"player_name": "Ianfreeperson", "player_uuid": "40e202e5-f58c-4c22-a6cf-58c492f71ae4", "distance": "8", "evidence": ""}]
            },
            {
                "map": "Green Hill Zone",
                "slug": "green_hill_zone",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Illuminat1master", "player_uuid": "36cb446d-21a3-413e-a909-89be067f9eae", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "66", "evidence": ""}],
                "record_third": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Gridlock 2",
                "slug": "gridlock_2",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "46", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "17", "evidence": ""}]
            },
            {
                "map": "Grimsnes",
                "slug": "grimsnes",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "89", "evidence": ""}],
                "record_second": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "55", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Grub",
                "slug": "grub",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hadron",
                "slug": "hadron",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "RaulMN", "player_uuid": "78c5cc53-ef75-4d88-ba8b-91982b4918cb", "distance": "73", "evidence": ""}],
                "record_second": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "DoctorNyanpasu", "player_uuid": "fe699f4e-08b6-4510-8326-808291708ea3", "distance": "59", "evidence": ""}]
            },
            {
                "map": "Hallow Side",
                "slug": "hallow_side",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "91", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hallowed Harb",
                "slug": "hallowed_harb",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "7", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hallowed Relapse - UHSpooky",
                "slug": "hallowed_relapse___uhspooky",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Halloween Train",
                "slug": "halloween_train",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "RealCrazyCreeps", "player_uuid": "5b25f6bc-44d8-47a7-ab52-f985ed309758", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "Lasse54210", "player_uuid": "0caa6216-70e0-408b-be4b-7a95778a48dd", "distance": "68", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "48", "evidence": ""}]
            },
            {
                "map": "Hand of God",
                "slug": "hand_of_god",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hangar",
                "slug": "hangar",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "FireRatz", "player_uuid": "44558e95-7714-45b8-8d02-3558f83fb1c2", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Joop_", "player_uuid": "749a93da-573b-4952-bdb9-75f808079a6b", "distance": "71", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hanging Garden",
                "slug": "hanging_garden",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Harb Blitz",
                "slug": "harb_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Brownbadger", "player_uuid": "046e572b-5e0c-44e5-951c-69b041ac31b1", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "U_I", "player_uuid": "6b369f74-f865-435d-812c-81f167373c3b", "distance": "25", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Harb CTF",
                "slug": "harb_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Harb",
                "slug": "harb",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "70", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "66", "evidence": ""}]
            },
            {
                "map": "Hardened Path",
                "slug": "hardened_path",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hardened Path",
                "slug": "hardened_path",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Haunted Blocks",
                "slug": "haunted_blocks",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "54", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Haunted Rings",
                "slug": "haunted_rings",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Z3R0", "player_uuid": "7b8d9672-34db-4b4b-85f6-a45a485691f9", "distance": "23", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Havoc",
                "slug": "havoc",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Holiday Blocks",
                "slug": "holiday_blocks",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "54", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Horizon",
                "slug": "horizon",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "HorizonDTM",
                "slug": "horizondtm",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "28", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hot Dam Mini",
                "slug": "hot_dam_mini",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "74", "evidence": ""}],
                "record_third": [{"player_name": "DanComms", "player_uuid": "26bf0268-8cff-4c82-99dc-862716d5b20e", "distance": "66", "evidence": ""}]
            },
            {
                "map": "Hot Dam",
                "slug": "hot_dam",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "266", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "117", "evidence": ""}]
            },
            {
                "map": "Hydrolock II",
                "slug": "hydrolock_ii",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Hydrolock",
                "slug": "hydrolock",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "87", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}],
                "record_third": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "61", "evidence": ""}]
            },
            {
                "map": "Hyral Skylands",
                "slug": "hyral_skylands",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "IceBliss",
                "slug": "icebliss",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Icebound",
                "slug": "icebound",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "75", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "62", "evidence": ""}]
            },
            {
                "map": "Icescar",
                "slug": "icescar",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Icy Peaks Blitz",
                "slug": "icy_peaks_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "GhostKiller612", "player_uuid": "b26dd03a-dc9a-4dae-ba57-9cefe8ae878e", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Icy Peaks TDM",
                "slug": "icy_peaks_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "plazmastorm", "player_uuid": "66c094c0-aa9c-44c8-b792-42bd4cbdc243", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ieats Hall",
                "slug": "ieats_hall",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "62", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Immitis RAGE",
                "slug": "immitis_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "lowkeyAlting", "player_uuid": "b06fb221-e8a6-4c84-96c8-9ac4a0fd1b51", "distance": "35", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Immitis",
                "slug": "immitis",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "109", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "107", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "99", "evidence": ""}]
            },
            {
                "map": "Immortal",
                "slug": "immortal",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Industrial Citadel",
                "slug": "industrial_citadel",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Industry",
                "slug": "industry",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Infernal Shadow",
                "slug": "infernal_shadow",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "107", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "104", "evidence": ""}],
                "record_third": [{"player_name": "Feeeeeer", "player_uuid": "732088bd-7419-4b50-9c09-9148c547df46", "distance": "99", "evidence": ""}]
            },
            {
                "map": "Infinite Horror",
                "slug": "infinite_horror",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "101", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Infinite",
                "slug": "infinite",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "111", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "109", "evidence": ""}]
            },
            {
                "map": "Inheritance",
                "slug": "inheritance",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "65", "evidence": ""}],
                "record_second": [{"player_name": "Sbongkh", "player_uuid": "ecbc58c1-ae7f-45c4-945c-cb3ab3e104cc", "distance": "62", "evidence": ""}],
                "record_third": [{"player_name": "_Tim", "player_uuid": "a8161449-9d21-4684-9d85-e8cce6664ed8", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Interitus",
                "slug": "interitus",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "83", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "65", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "57", "evidence": ""}]
            },
            {
                "map": "Into the Jack o' Lantern",
                "slug": "into_the_jack_o__lantern",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "25", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Into the Jungle",
                "slug": "into_the_jungle",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "HiMyNameIsAlex", "player_uuid": "822ef0dc-19f2-4ddb-9ee3-daf96c606985", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "72", "evidence": ""}],
                "record_third": [{"player_name": "kzf", "player_uuid": "3b08b71d9a864ac7ae4f090a3d4c8413", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Ion",
                "slug": "ion",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Iris DTC",
                "slug": "iris_dtc",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "114", "evidence": ""}],
                "record_third": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "80", "evidence": ""}]
            },
            {
                "map": "Iris DTM",
                "slug": "iris_dtm",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "78", "evidence": ""}],
                "record_second": [{"player_name": "mukmuk3DSpoder", "player_uuid": "19710326-0522-4484-a0b7-a0ddfed251b1", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "N3XT_M3CH_P0W3R", "player_uuid": "746b9c96-ac56-4ea8-bcf4-bab2ba9c4858", "distance": "33", "evidence": ""}]
            },
            {
                "map": "Irongate Harbor",
                "slug": "irongate_harbor",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "ukital", "player_uuid": "171b4297-a99c-444b-bc24-8eb78ec184e1", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "96", "evidence": ""}],
                "record_third": [{"player_name": "Hoodie_Ninja53", "player_uuid": "1e162367-a18f-41b7-a2a0-a096bd914fa4", "distance": "71", "evidence": ""}]
            },
            {
                "map": "Java",
                "slug": "java",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Jungle Beat",
                "slug": "jungle_beat",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "132", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "126", "evidence": ""}],
                "record_third": [{"player_name": "BTKing", "player_uuid": "53af1e46-7424-485b-97de-7bf8d854a2aa", "distance": "80", "evidence": ""}]
            },
            {
                "map": "Jungle Spook",
                "slug": "jungle_spook",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Justice",
                "slug": "justice",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "106", "evidence": ""}],
                "record_second": [{"player_name": "_Bunnies", "player_uuid": "1cc7c321-f7f3-42c2-a260-3c9b65aca235", "distance": "81", "evidence": ""}],
                "record_third": [{"player_name": "petranhoses", "player_uuid": "0ba4c67b-9945-4c4f-9eef-8b5b4cd6ca69", "distance": "73", "evidence": ""}]
            },
            {
                "map": "K\u00ef",
                "slug": "k_",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "102", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "88", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "68", "evidence": ""}]
            },
            {
                "map": "Khaba",
                "slug": "khaba",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "90", "evidence": ""}],
                "record_second": [{"player_name": "swanshady", "player_uuid": "453375db-788e-4a0d-96b3-ce4d13ad87d2", "distance": "79", "evidence": ""}],
                "record_third": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "70", "evidence": ""}]
            },
            {
                "map": "Kings and Queens",
                "slug": "kings_and_queens",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Koi",
                "slug": "koi",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "115", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "91", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "58", "evidence": ""}]
            },
            {
                "map": "Kozicu",
                "slug": "kozicu",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "28", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Kytriak",
                "slug": "kytriak",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "gloomp", "player_uuid": "9ee0a4b4-7727-45d0-9aee-1a794e23b641", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lava Dew",
                "slug": "lava_dew",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Alexander56910", "player_uuid": "7fadfc98-3249-4bf2-8316-38a023d51124", "distance": "78", "evidence": ""}],
                "record_second": [{"player_name": "ErickAug", "player_uuid": "6f24ee5b-eea9-4d35-bdd2-207da7fa7e25", "distance": "58", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "41", "evidence": ""}]
            },
            {
                "map": "Lemuria",
                "slug": "lemuria",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Les",
                "slug": "les",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Levels",
                "slug": "levels",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "49", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lights Out",
                "slug": "lights_out",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "Wmelon", "player_uuid": "6e54a412-29ef-4575-a4e2-b49b4d9a3874", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Lilypad",
                "slug": "lilypad",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Limbo II",
                "slug": "limbo_ii",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "30", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Limbo",
                "slug": "limbo",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Limivorous",
                "slug": "limivorous",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "33", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lost Path",
                "slug": "lost_path",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lost Woods",
                "slug": "lost_woods",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lost World FFA",
                "slug": "lost_world_ffa",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lost World: CTF",
                "slug": "lost_world__ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "124", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "117", "evidence": ""}],
                "record_third": [{"player_name": "CephalonNujax", "player_uuid": "b1dcaf92-df64-4d79-a74b-663eaef16c44", "distance": "112", "evidence": ""}]
            },
            {
                "map": "Lost World: CTP",
                "slug": "lost_world__ctp",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "125", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "103", "evidence": ""}]
            },
            {
                "map": "Loyalty",
                "slug": "loyalty",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lunar Coliseum Blitz",
                "slug": "lunar_coliseum_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "34", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Lunar Coliseum",
                "slug": "lunar_coliseum",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "96", "evidence": ""}],
                "record_second": [{"player_name": "Dephixe", "player_uuid": "024dc790-2c0b-4639-b360-f3a36dc53028", "distance": "70", "evidence": ""}],
                "record_third": [{"player_name": "PBRMinecraft", "player_uuid": "06a7ea5e-fbc1-4828-99e5-2bace2a4e146", "distance": "66", "evidence": ""}]
            },
            {
                "map": "Lush",
                "slug": "lush",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Rjven", "player_uuid": "4713ca23-4d93-4df9-b505-ac3960b9a1ea", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "66", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "32", "evidence": ""}]
            },
            {
                "map": "Magnolia Creek",
                "slug": "magnolia_creek",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "124", "evidence": ""}],
                "record_second": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "122", "evidence": ""}],
                "record_third": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "121", "evidence": ""}]
            },
            {
                "map": "Mansion",
                "slug": "mansion",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Mansion",
                "slug": "mansion",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Marketplace",
                "slug": "marketplace",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Mayan Apocalypse",
                "slug": "mayan_apocalypse",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "96", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "49", "evidence": ""}],
                "record_third": [{"player_name": "ErickAug", "player_uuid": "6f24ee5b-eea9-4d35-bdd2-207da7fa7e25", "distance": "49", "evidence": ""}]
            },
            {
                "map": "Medieval Warfare DTE",
                "slug": "medieval_warfare_dte",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "105", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Medieval Warfare",
                "slug": "medieval_warfare",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "136", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "131", "evidence": ""}],
                "record_third": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "119", "evidence": ""}]
            },
            {
                "map": "Melody",
                "slug": "melody",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Merry Drought",
                "slug": "merry_drought",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "23", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Metallicus",
                "slug": "metallicus",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "4KNerd", "player_uuid": "fd49fdb8-1552-46aa-a413-3945d3b5f8bc", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Midnight Train",
                "slug": "midnight_train",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "lgmatias", "player_uuid": "7dcb1605-a641-4f6f-99ef-ea04278b6f7c", "distance": "313", "evidence": ""}],
                "record_second": [{"player_name": "MajesticStar", "player_uuid": "f1f37216-bfa4-47b1-b36e-3c8ec8ee7aa4", "distance": "273", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "269", "evidence": ""}]
            },
            {
                "map": "Mini Drought",
                "slug": "mini_drought",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Modern Cityscape",
                "slug": "modern_cityscape",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Oyubook", "player_uuid": "0cb4e1d5-f319-433a-990d-5eb605a2f3e9", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "71", "evidence": ""}],
                "record_third": [{"player_name": "Darkooo", "player_uuid": "e50f0c68-2f9a-438a-8a99-72b5ecb1cb8a", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Molendinis",
                "slug": "molendinis",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Kadaric", "player_uuid": "e901c09f-e139-4246-9a66-e04123bd74d8", "distance": "65", "evidence": ""}],
                "record_second": [{"player_name": "toroka", "player_uuid": "31b1f6e9-432d-43ff-b214-51fa78eb90d3", "distance": "62", "evidence": ""}],
                "record_third": [{"player_name": "Joop_", "player_uuid": "749a93da-573b-4952-bdb9-75f808079a6b", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Molten Crevasse",
                "slug": "molten_crevasse",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Molten Crevasse",
                "slug": "molten_crevasse",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Monument Valley",
                "slug": "monument_valley",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "103", "evidence": ""}],
                "record_second": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "81", "evidence": ""}],
                "record_third": [{"player_name": "Crazy_", "player_uuid": "a9f11454-beac-4cc3-a138-1780802c8794", "distance": "70", "evidence": ""}]
            },
            {
                "map": "Moonlight Summit",
                "slug": "moonlight_summit",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "29", "evidence": ""}],
                "record_second": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "2", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Mortal Jungle",
                "slug": "mortal_jungle",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Multiny",
                "slug": "multiny",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "99", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Mushroom Gorge",
                "slug": "mushroom_gorge",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "99", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "86", "evidence": ""}],
                "record_third": [{"player_name": "timoru", "player_uuid": "709e9cdb-77c9-4cab-b272-2500326fca89", "distance": "84", "evidence": ""}]
            },
            {
                "map": "Mushrooms of Oblivion",
                "slug": "mushrooms_of_oblivion",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "63", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "37", "evidence": ""}]
            },
            {
                "map": "Mystic Gully",
                "slug": "mystic_gully",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Mystic Point",
                "slug": "mystic_point",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "113", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "59", "evidence": ""}],
                "record_third": [{"player_name": "MajorMcDonalds", "player_uuid": "a53b7c56-ddc6-4fcb-a121-9a3829aabc28", "distance": "48", "evidence": ""}]
            },
            {
                "map": "Necro",
                "slug": "necro",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Network TDM",
                "slug": "network_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Network",
                "slug": "network",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "NextGen",
                "slug": "nextgen",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "90", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Nightlife TDM",
                "slug": "nightlife_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "43", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Nightlife",
                "slug": "nightlife",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "61", "evidence": ""}],
                "record_third": [{"player_name": "Syvoxo", "player_uuid": "1c2664be01ce4be4ac1ca4dcc64b80c7", "distance": "61", "evidence": ""}]
            },
            {
                "map": "Nightsail",
                "slug": "nightsail",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "109", "evidence": ""}],
                "record_third": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "79", "evidence": ""}]
            },
            {
                "map": "Nivalis",
                "slug": "nivalis",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "timoru", "player_uuid": "709e9cdb-77c9-4cab-b272-2500326fca89", "distance": "77", "evidence": ""}],
                "record_third": [{"player_name": "_IQ", "player_uuid": "6fe9c9fe-b2dd-448c-b9f4-42b2f8c14836", "distance": "72", "evidence": ""}]
            },
            {
                "map": "No Man's Land",
                "slug": "no_man_s_land",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "Team_Noobs", "player_uuid": "daff5e97-55b8-4a21-baf2-f3563d64ffff", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "25", "evidence": ""}]
            },
            {
                "map": "No Return",
                "slug": "no_return",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "latiku", "player_uuid": "60177c3c-8c10-41c1-959c-1c0744d299e3", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "81", "evidence": ""}],
                "record_third": [{"player_name": "Joshua", "player_uuid": "d51c89fd-d043-4a2c-8548-7393389d9595", "distance": "74", "evidence": ""}]
            },
            {
                "map": "Northern Mounts",
                "slug": "northern_mounts",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Northlands",
                "slug": "northlands",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "110", "evidence": ""}],
                "record_second": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Nostalgia",
                "slug": "nostalgia",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "22", "evidence": ""}],
                "record_second": [{"player_name": "Imkohlie", "player_uuid": "b1cc64a7-92a0-4960-9a2e-74d62bc90396", "distance": "21", "evidence": ""}],
                "record_third": [{"player_name": "ChillerFrost", "player_uuid": "f62b53d6-a39f-4da9-b790-ff599f0d25ab", "distance": "16", "evidence": ""}]
            },
            {
                "map": "Nostalgia",
                "slug": "nostalgia",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "22", "evidence": ""}],
                "record_second": [{"player_name": "Imkohlie", "player_uuid": "b1cc64a7-92a0-4960-9a2e-74d62bc90396", "distance": "21", "evidence": ""}],
                "record_third": [{"player_name": "ChillerFrost", "player_uuid": "f62b53d6-a39f-4da9-b790-ff599f0d25ab", "distance": "16", "evidence": ""}]
            },
            {
                "map": "Nostaliga TDM",
                "slug": "nostaliga_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "26", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Nuclear Halloween",
                "slug": "nuclear_halloween",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Nuclear Winter",
                "slug": "nuclear_winter",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "_Tim", "player_uuid": "a8161449-9d21-4684-9d85-e8cce6664ed8", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "61", "evidence": ""}]
            },
            {
                "map": "Nucleus",
                "slug": "nucleus",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "Plean", "player_uuid": "931c2fd7-c324-461d-bfa6-e3967f45d063", "distance": "26", "evidence": ""}]
            },
            {
                "map": "Oaken Meadow",
                "slug": "oaken_meadow",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "ApplePies", "player_uuid": "4faf501d-f965-4f07-887e-24cd66a4f7b0", "distance": "58", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Oakspell",
                "slug": "oakspell",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Oculo",
                "slug": "oculo",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "Glalie", "player_uuid": "c64ff44d-0bc3-44c9-a611-e872903c6152", "distance": "0", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Osage",
                "slug": "osage",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Osage",
                "slug": "osage",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ouroboros",
                "slug": "ouroboros",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Overgrown Blitz",
                "slug": "overgrown_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Overgrown Rage",
                "slug": "overgrown_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Oxide",
                "slug": "oxide",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Ozone Blitz",
                "slug": "ozone_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ozone RAGE",
                "slug": "ozone_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ozone",
                "slug": "ozone",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Morsinius", "player_uuid": "bd06fdef-cca7-4890-a80f-58edde92d507", "distance": "191", "evidence": ""}],
                "record_second": [{"player_name": "Joshua", "player_uuid": "d51c89fd-d043-4a2c-8548-7393389d9595", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "60", "evidence": ""}]
            },
            {
                "map": "Palace CTF",
                "slug": "palace_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "64", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Palude",
                "slug": "palude",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pandemonium",
                "slug": "pandemonium",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "123", "evidence": ""}],
                "record_second": [{"player_name": "Leperito", "player_uuid": "92d08243-d1a9-4159-bdee-cce5e717d2a3", "distance": "51", "evidence": ""}],
                "record_third": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "42", "evidence": ""}]
            },
            {
                "map": "Parabola",
                "slug": "parabola",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Paradise Isle",
                "slug": "paradise_isle",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Paradiso",
                "slug": "paradiso",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Parralax",
                "slug": "parralax",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "58", "evidence": ""}],
                "record_third": [{"player_name": "Baseballshane", "player_uuid": "dc07596f-1846-4177-913c-4375b15583ef", "distance": "38", "evidence": ""}]
            },
            {
                "map": "Pebble Beach",
                "slug": "pebble_beach",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "56", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Permeac",
                "slug": "permeac",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Persisto",
                "slug": "persisto",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "68", "evidence": ""}],
                "record_third": [{"player_name": "Plean", "player_uuid": "931c2fd7-c324-461d-bfa6-e3967f45d063", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Perspookysto",
                "slug": "perspookysto",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "87", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pharaoh's Catacombs",
                "slug": "pharaoh_s_catacombs",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "60", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "56", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "47", "evidence": ""}]
            },
            {
                "map": "Pine Cove",
                "slug": "pine_cove",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pipe Factory",
                "slug": "pipe_factory",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Baseballshane", "player_uuid": "dc07596f-1846-4177-913c-4375b15583ef", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "43", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pirates Den",
                "slug": "pirates_den",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "39", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Piston KotH",
                "slug": "piston_koth",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "ginie1", "player_uuid": "cf094b7c-bdfe-4299-84a9-8d8b05259e33", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "58", "evidence": ""}],
                "record_third": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "53", "evidence": ""}]
            },
            {
                "map": "PixelMix",
                "slug": "pixelmix",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "144", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "129", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Placid Spring",
                "slug": "placid_spring",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "PersonajeAnonimo", "player_uuid": "a804cde1-1fe8-4155-8549-89563f4935e0", "distance": "90", "evidence": ""}],
                "record_third": [{"player_name": "CheckTheMic", "player_uuid": "38d2c9e3-f111-4bd4-ad80-9567fa63f3e9", "distance": "62", "evidence": ""}]
            },
            {
                "map": "Plus Side",
                "slug": "plus_side",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "121", "evidence": ""}],
                "record_second": [{"player_name": "EsNoBueno", "player_uuid": "8aed002f-26b7-4714-a89f-f55e2380d509", "distance": "119", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "116", "evidence": ""}]
            },
            {
                "map": "Pontifex",
                "slug": "pontifex",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Portal",
                "slug": "portal",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Precipice",
                "slug": "precipice",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pride",
                "slug": "pride",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "61", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Proelium",
                "slug": "proelium",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "120", "evidence": ""}],
                "record_second": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "117", "evidence": ""}],
                "record_third": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "116", "evidence": ""}]
            },
            {
                "map": "Prototype",
                "slug": "prototype",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "14", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Prototype",
                "slug": "prototype",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "14", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pseudo",
                "slug": "pseudo",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pseudo",
                "slug": "pseudo",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Pursuit of Happiness",
                "slug": "pursuit_of_happiness",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "164", "evidence": ""}],
                "record_second": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "126", "evidence": ""}],
                "record_third": [{"player_name": "Sneaaky", "player_uuid": "6383935a-af6b-4303-b02a-dafb5ce2aa76", "distance": "104", "evidence": ""}]
            },
            {
                "map": "QuakeCTF",
                "slug": "quakectf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Quartz Mine",
                "slug": "quartz_mine",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "48", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "11", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Quartz Mine",
                "slug": "quartz_mine",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "48", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "11", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Quatuor",
                "slug": "quatuor",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Quautor",
                "slug": "quautor",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "MajorMcDonalds", "player_uuid": "a53b7c56-ddc6-4fcb-a121-9a3829aabc28", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "Basikk", "player_uuid": "7de4af71-73c0-46bc-b9af-f1eca98e4370", "distance": "36", "evidence": ""}],
                "record_third": [{"player_name": "ParaPenguin", "player_uuid": "44df6b20-168f-4389-b7ac-434518207c2f", "distance": "30", "evidence": ""}]
            },
            {
                "map": "Quavilla",
                "slug": "quavilla",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Hockey_", "player_uuid": "625b72d4-65b7-4089-9273-060bd25ff1ab", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "ApplePies", "player_uuid": "4faf501d-f965-4f07-887e-24cd66a4f7b0", "distance": "62", "evidence": ""}],
                "record_third": [{"player_name": "mspotter", "player_uuid": "e69d382a-8425-455d-bdf1-ad8b0761f5fe", "distance": "61", "evidence": ""}]
            },
            {
                "map": "Race for Victory 2",
                "slug": "race_for_victory_2",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "119", "evidence": ""}],
                "record_second": [{"player_name": "CoconutCove", "player_uuid": "623f6f73-db58-4f0d-acbd-25e421b7e2df", "distance": "118", "evidence": ""}],
                "record_third": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "118", "evidence": ""}]
            },
            {
                "map": "Race for Victory 3",
                "slug": "race_for_victory_3",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "110", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "108", "evidence": ""}]
            },
            {
                "map": "Race for Victory",
                "slug": "race_for_victory",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "latiku", "player_uuid": "60177c3c-8c10-41c1-959c-1c0744d299e3", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "106", "evidence": ""}]
            },
            {
                "map": "Race Through the Forest",
                "slug": "race_through_the_forest",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Radiant Castles: Rage ",
                "slug": "radiant_castles__rage_",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "99", "evidence": ""}],
                "record_second": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "97", "evidence": ""}],
                "record_third": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "96", "evidence": ""}]
            },
            {
                "map": "Rage Maze",
                "slug": "rage_maze",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Rage Quit",
                "slug": "rage_quit",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "HiMyNameIsAlex", "player_uuid": "822ef0dc-19f2-4ddb-9ee3-daf96c606985", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "Preloom", "player_uuid": "72fcc87a-2443-4b93-890d-d11dbb10f851", "distance": "115", "evidence": ""}],
                "record_third": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "115", "evidence": ""}]
            },
            {
                "map": "Rampart",
                "slug": "rampart",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "48", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ranger Outpost",
                "slug": "ranger_outpost",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Relapse : UHC",
                "slug": "relapse___uhc",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "27", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Remnant Souls",
                "slug": "remnant_souls",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "59", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "58", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "48", "evidence": ""}]
            },
            {
                "map": "Retaliation 2",
                "slug": "retaliation_2",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "91", "evidence": ""}],
                "record_third": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "75", "evidence": ""}]
            },
            {
                "map": "Retaliation",
                "slug": "retaliation",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "113", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "100", "evidence": ""}],
                "record_third": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "88", "evidence": ""}]
            },
            {
                "map": "Retro Christmas",
                "slug": "retro_christmas",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro Christmas",
                "slug": "retro_christmas",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro FFA",
                "slug": "retro_ffa",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro FFA",
                "slug": "retro_ffa",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro Halloween",
                "slug": "retro_halloween",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro Halloween",
                "slug": "retro_halloween",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro",
                "slug": "retro",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Retro",
                "slug": "retro",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Revenge TE",
                "slug": "revenge_te",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "81", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Rift II",
                "slug": "rift_ii",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Rift",
                "slug": "rift",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ring Race",
                "slug": "ring_race",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "113", "evidence": ""}],
                "record_second": [{"player_name": "Lamster", "player_uuid": "b213dddd-28e6-4c22-afa1-da9e62c594e6", "distance": "112", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "103", "evidence": ""}]
            },
            {
                "map": "Ringround",
                "slug": "ringround",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Riverside",
                "slug": "riverside",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "137", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "108", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
				"map": "Roar",
                "slug": "roar",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "BTKing", "player_uuid": "53af1e46-7424-485b-97de-7bf8d854a2aa", "distance": "55", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
			{
                "map": "Royal Garden CTW",
                "slug": "royal_garden_ctw",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "113", "evidence": ""}],
                "record_second": [{"player_name": "Spintown", "player_uuid": "bbcafea0-53cf-4d29-9dd9-27f383d02faa", "distance": "99", "evidence": ""}],
                "record_third": [{"player_name": "Rahuul", "player_uuid": "ca8ec5cd-4b2d-45d0-a90c-1c8a336db6ae", "distance": "78", "evidence": ""}]
            },
            {
                "map": "Royal Garden DTC",
                "slug": "royal_garden_dtc",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Royal Garden",
                "slug": "royal_garden",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Royal Garden",
                "slug": "royal_garden",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Runes of Ruin",
                "slug": "runes_of_ruin",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Safehouse",
                "slug": "safehouse",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "SamplesDTM",
                "slug": "samplesdtm",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "97", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "71", "evidence": ""}]
            },
            {
                "map": "Sand Wall",
                "slug": "sand_wall",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "43", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sand Wars",
                "slug": "sand_wars",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Capyv", "player_uuid": "a95b325d-b3c8-4714-8049-fdcf604cfa7c", "distance": "256", "evidence": ""}],
                "record_second": [{"player_name": "Rjven", "player_uuid": "4713ca23-4d93-4df9-b505-ac3960b9a1ea", "distance": "255", "evidence": ""}],
                "record_third": [{"player_name": "Mister_DaDo", "player_uuid": "2d691bae-42a5-4373-a89c-4f60ff689b81", "distance": "249", "evidence": ""}]
            },
            {
                "map": "Sandbox",
                "slug": "sandbox",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "Dyego", "player_uuid": "6803fe69-0905-47d1-ae04-8e3c4b648499", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Sands of Life",
                "slug": "sands_of_life",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sandstone Temples",
                "slug": "sandstone_temples",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "98", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "94", "evidence": ""}],
                "record_third": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "85", "evidence": ""}]
            },
            {
                "map": "Scala",
                "slug": "scala",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Scareliegra",
                "slug": "scareliegra",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Scareros",
                "slug": "scareros",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "65", "evidence": ""}],
                "record_second": [{"player_name": "ErickAug", "player_uuid": "6f24ee5b-eea9-4d35-bdd2-207da7fa7e25", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Scorched Grove",
                "slug": "scorched_grove",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Astralio", "player_uuid": "0fa816b3-2416-40b8-b66a-5817bce21b50", "distance": "101", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "72", "evidence": ""}],
                "record_third": [{"player_name": "MajesticStar", "player_uuid": "f1f37216-bfa4-47b1-b36e-3c8ec8ee7aa4", "distance": "56", "evidence": ""}]
            },
            {
                "map": "Scrap Mettle",
                "slug": "scrap_mettle",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "CampLazloRocks1", "player_uuid": "572cd040-7022-499f-a858-910da98e58c5", "distance": "71", "evidence": ""}],
                "record_second": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "54", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Seckuded Islands",
                "slug": "seckuded_islands",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Secluded Caverns",
                "slug": "secluded_caverns",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "67", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "52", "evidence": ""}],
                "record_third": [{"player_name": "HevensKnight", "player_uuid": "72dce1aa-8de6-46e7-a2ac-a930943ee0d7", "distance": "34", "evidence": ""}]
            },
            {
                "map": "Secluded Lakes",
                "slug": "secluded_lakes",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "54", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Secluded Oasis",
                "slug": "secluded_oasis",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "57", "evidence": ""}],
                "record_second": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "21", "evidence": ""}],
                "record_third": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "21", "evidence": ""}]
            },
            {
                "map": "Secluded Palace",
                "slug": "secluded_palace",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "69", "evidence": ""}],
                "record_second": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "68", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Selenius",
                "slug": "selenius",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sequential",
                "slug": "sequential",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "126", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Shave Santa",
                "slug": "shave_santa",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "88", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "86", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Shave",
                "slug": "shave",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "35", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Shock Wave",
                "slug": "shock_wave",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Shrine",
                "slug": "shrine",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Shroom Trip",
                "slug": "shroom_trip",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "79", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "67", "evidence": ""}],
                "record_third": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "56", "evidence": ""}]
            },
            {
                "map": "Siloe",
                "slug": "siloe",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sinuous : Mono",
                "slug": "sinuous___mono",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sinuous",
                "slug": "sinuous",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "31", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sky Traffic 2",
                "slug": "sky_traffic_2",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "34", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sky Traffic",
                "slug": "sky_traffic",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Hpt", "player_uuid": "9b74ca98-08bb-41f5-9442-7fcbf82e2b92", "distance": "169", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "136", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "134", "evidence": ""}]
            },
            {
                "map": "Skyfall",
                "slug": "skyfall",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sleeping Tale",
                "slug": "sleeping_tale",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Smog",
                "slug": "smog",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "183", "evidence": ""}],
                "record_second": [{"player_name": "cgode", "player_uuid": "f4bd4ab0-9880-4123-9cc0-0ff79c3e3f0c", "distance": "46", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Snow Globe",
                "slug": "snow_globe",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Dumpling", "player_uuid": "2719fe11-9a96-4c86-a4b8-6c69c26c8294", "distance": "4", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Snow",
                "slug": "snow",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "68", "evidence": ""}],
                "record_second": [{"player_name": "Wmelon", "player_uuid": "6e54a412-29ef-4575-a4e2-b49b4d9a3874", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "54", "evidence": ""}]
            },
            {
                "map": "Snowy Wars Christmas",
                "slug": "snowy_wars_christmas",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "Disproof", "player_uuid": "1d14f451-c8f0-4e02-a387-1ea808f8b5b3", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Snowy Wars CTF",
                "slug": "snowy_wars_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Snowy Wars Halloween",
                "slug": "snowy_wars_halloween",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Daesc", "player_uuid": "822098d6-9da5-40a0-88ae-2b197c949a59", "distance": "110", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "47", "evidence": ""}],
                "record_third": [{"player_name": "", "p62f3cd20-c78d-4810-8a00-c5ecb0636783layer_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Snowy Wars",
                "slug": "snowy_wars",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "luigishadow2", "player_uuid": "ff4918fc-977d-4209-b3be-05ccc4f83d23", "distance": "123", "evidence": ""}],
                "record_second": [{"player_name": "Auyen", "player_uuid": "798ed563-b9f1-4dd4-888d-63de222df4d1", "distance": "116", "evidence": ""}],
                "record_third": [{"player_name": "lyzha", "player_uuid": "8fc13d1e-f419-4a4a-9e7b-2936b296b8b0", "distance": "112", "evidence": ""}]
            },
            {
                "map": "Solitude",
                "slug": "solitude",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "SolitudeMC",
                "slug": "solitudemc",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "TheBestXperia", "player_uuid": "b192acdf-f89b-4469-8ede-df2a78cae87a", "distance": "108", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "106", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "97", "evidence": ""}]
            },
            {
                "map": "Sore Teeth",
                "slug": "sore_teeth",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "55", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Soviet Chills",
                "slug": "soviet_chills",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Soviet Mills",
                "slug": "soviet_mills",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "126", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "125", "evidence": ""}],
                "record_third": [{"player_name": "Razeker", "player_uuid": "3b1c279f-1c95-4bf7-81ce-6d9f542336e4", "distance": "101", "evidence": ""}]
            },
            {
                "map": "Spaceship Battles Halloween",
                "slug": "ssb_halloween",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "62", "evidence": ""}],
                "record_second": [{"player_name": "RealCrazyCreeps", "player_uuid": "5b25f6bc-44d8-47a7-ab52-f985ed309758", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "31", "evidence": ""}]
            },
            {
                "map": "Spaceship Battles II",
                "slug": "spaceship_battles_ii",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Spaceship Battles",
                "slug": "spaceship_battles",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Nidho0gg", "player_uuid": "f34625ab-8f27-4cb5-8424-671fa82d4033", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "Cascoid", "player_uuid": "ad3111ab-627d-4860-86d9-93a34542db09", "distance": "102", "evidence": ""}],
                "record_third": [{"player_name": "mspotter", "player_uuid": "e69d382a-8425-455d-bdf1-ad8b0761f5fe", "distance": "81", "evidence": ""}]
            },
            {
                "map": "Splinter",
                "slug": "splinter",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "39", "evidence": ""}],
                "record_second": [{"player_name": "Roko", "player_uuid": "41373965-b60a-40d5-8fad-72e61d951ea2", "distance": "30", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "4", "evidence": ""}]
            },
            {
                "map": "Splinter",
                "slug": "splinter",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Ain360", "player_uuid": "af2a85ea-05fd-4c2a-b604-9a0449f80c62", "distance": "39", "evidence": ""}],
                "record_second": [{"player_name": "Roko", "player_uuid": "41373965-b60a-40d5-8fad-72e61d951ea2", "distance": "30", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "4", "evidence": ""}]
            },
            {
                "map": "Spooky Lyndanisse",
                "slug": "spooky_lyndanisse",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "22", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Spooky Smog",
                "slug": "spooky_smog",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Stampede",
                "slug": "stampede",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "52", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "45", "evidence": ""}]
            },
            {
                "map": "State of Decay II",
                "slug": "state_of_decay_ii",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "62", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "47", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "38", "evidence": ""}]
            },
            {
                "map": "State of Decay",
                "slug": "state_of_decay",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Storm",
                "slug": "storm",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "DivineWolv", "player_uuid": "fcc883e6-a618-40e3-b602-1a56ff6c62b4", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "89", "evidence": ""}],
                "record_third": [{"player_name": "Timotheeee", "player_uuid": "8f9344cf-7367-4e28-9f24-5c66422f28c9", "distance": "47", "evidence": ""}]
            },
            {
                "map": "Streamline",
                "slug": "streamline",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "88", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "85", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "81", "evidence": ""}]
            },
            {
                "map": "Strike",
                "slug": "strike",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Strongbow",
                "slug": "strongbow",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Sugar Rush",
                "slug": "sugar_rush",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "58", "evidence": ""}],
                "record_second": [{"player_name": "InfiniteChaos", "player_uuid": "e2489303-a0c0-40ec-adb7-b3d49530a828", "distance": "34", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "32", "evidence": ""}]
            },
            {
                "map": "Sunburn",
                "slug": "sunburn",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "MajorMcDonalds", "player_uuid": "a53b7c56-ddc6-4fcb-a121-9a3829aabc28", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "Hypetastic", "player_uuid": "27e6dd0d-595a-4881-882d-cc35151d7d21", "distance": "42", "evidence": ""}]
            },
            {
                "map": "Sunrise Over Lava",
                "slug": "sunrise_over_lava",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Name", "player_uuid": "fa90ba90-9446-4141-83c5-6b31487112c3", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "89", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "22", "evidence": ""}]
            },
            {
                "map": "Sunrise Over Paradise",
                "slug": "sunrise_over_paradise",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Babalooba", "player_uuid": "304484f5-c690-4b11-b6d6-3354381425b0", "distance": "109", "evidence": ""}],
                "record_second": [{"player_name": "Typys", "player_uuid": "c9381e4a-5cfe-4776-9ff9-dc0903f07723", "distance": "109", "evidence": ""}],
                "record_third": [{"player_name": "MCKing", "player_uuid": "f6b87410-4b45-4d3d-85a3-d713d58ed24e", "distance": "108", "evidence": ""}]
            },
            {
                "map": "SuperCUBE",
                "slug": "supercube",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "93", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "57", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "17", "evidence": ""}]
            },
            {
                "map": "SuperHALLOW",
                "slug": "superhallow",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "dragonstomper64", "player_uuid": "6863869b-4b8c-4445-b778-a8e016775ae4", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "59", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "58", "evidence": ""}]
            },
            {
                "map": "SuperPRISM",
                "slug": "superprism",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "67", "evidence": ""}],
                "record_second": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "66", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Swamped",
                "slug": "swamped",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Swarthmoor",
                "slug": "swarthmoor",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "94", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "90", "evidence": ""}],
                "record_third": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "89", "evidence": ""}]
            },
            {
                "map": "Sweet Tooth",
                "slug": "sweet_tooth",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "115", "evidence": ""}],
                "record_third": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "111", "evidence": ""}]
            },
            {
                "map": "Sylvan",
                "slug": "sylvan",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "TheGunningAlien", "player_uuid": "68ccf685-679a-4abc-a920-fd1d9004779b", "distance": "117", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "70", "evidence": ""}],
                "record_third": [{"player_name": "Brownbadger", "player_uuid": "046e572b-5e0c-44e5-951c-69b041ac31b1", "distance": "43", "evidence": ""}]
            },
            {
                "map": "Synergy",
                "slug": "synergy",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "T\u00f5",
                "slug": "t_",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tanker TNT",
                "slug": "tanker_tnt",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tanker",
                "slug": "tanker",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tatakai",
                "slug": "tatakai",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Vesta", "player_uuid": "8408ccf1-f68c-47f3-bff0-d0e52128a368", "distance": "64", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tebulas",
                "slug": "tebulas",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Mikky", "player_uuid": "a294ac40-6d04-43b8-a8c7-c22abcd2f2f8", "distance": "90", "evidence": ""}],
                "record_second": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "89", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "88", "evidence": ""}]
            },
            {
                "map": "Tempest",
                "slug": "tempest",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Temple Run",
                "slug": "temple_run",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "107", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "41", "evidence": ""}]
            },
            {
                "map": "Temple Valley",
                "slug": "temple_valley",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "luigicar11", "player_uuid": "7197a433-76ea-41a6-9b6b-ab0518504ed0", "distance": "43", "evidence": ""}]
            },
            {
                "map": "Tenebrous",
                "slug": "tenebrous",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "104", "evidence": ""}],
                "record_second": [{"player_name": "Jeremy_Wade", "player_uuid": "ffffec3a-728a-485a-af6e-374e86883939", "distance": "101", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "95", "evidence": ""}]
            },
            {
                "map": "Tetrad",
                "slug": "tetrad",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Edeeen", "player_uuid": "27841252-a673-4c16-9acf-49e936871ac5", "distance": "81", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "TF2 Badlands",
                "slug": "tf2_badlands",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}]
            },
            {
                "map": "TF2: Badlands CTF",
                "slug": "tf2__badlands_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "4", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The 4th Law",
                "slug": "the_4th_law",
                "tags": [{"ctw": true, "dtc": true}],
                "record_first": [{"player_name": "LeFanceistBottom", "player_uuid": "f6ec0cb5-38a3-4e4b-a9aa-47d9aa4ab02a", "distance": "74", "evidence": ""}],
                "record_second": [{"player_name": "Saimonti", "player_uuid": "30c45154-f25f-45b0-a96b-7301edb7e78c", "distance": "51", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "47", "evidence": ""}]
            },
            {
                "map": "The 6th Law",
                "slug": "the_6th_law",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "90", "evidence": ""}],
                "record_third": [{"player_name": "pae", "player_uuid": "de7fd781-faad-4fcd-930c-dd9812b7af27", "distance": "88", "evidence": ""}]
            },
            {
                "map": "The 8th Law",
                "slug": "the_8th_law",
                "tags": [{"ctw": true, "dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "71", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Archives",
                "slug": "the_archives",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "40", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Arena Blitz",
                "slug": "the_arena_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "41", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Arena",
                "slug": "the_arena",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "47", "evidence": ""}]
            },
            {
                "map": "The Complex CTF",
                "slug": "the_complex_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Complex Rage",
                "slug": "the_complex_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "MaximkaFeeD", "player_uuid": "301ba4d7-6773-413c-9f65-2d57a736352b", "distance": "83", "evidence": ""}],
                "record_second": [{"player_name": "Creephunter", "player_uuid": "95763a18-eb88-44e7-8a10-780acffceae8", "distance": "43", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Complex",
                "slug": "the_complex",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The End Rage",
                "slug": "the_end_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "98", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "97", "evidence": ""}],
                "record_third": [{"player_name": "Someonehelpme", "player_uuid": "2a78d401-9bfe-4472-bb3e-fb131348a861", "distance": "91", "evidence": ""}]
            },
            {
                "map": "The Factory",
                "slug": "the_factory",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "53", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Fenland CTF",
                "slug": "the_fenland_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Fenland",
                "slug": "the_fenland",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "115", "evidence": ""}],
                "record_second": [{"player_name": "Leap_", "player_uuid": "d76d221b-49fc-4e14-98ab-e545548b9473", "distance": "93", "evidence": ""}],
                "record_third": [{"player_name": "CannonGod", "player_uuid": "64987359-ae70-4270-928c-47fe7aca233f", "distance": "93", "evidence": ""}]
            },
            {
                "map": "The Gloom",
                "slug": "the_gloom",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Gloom",
                "slug": "the_gloom",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Grove",
                "slug": "the_grove",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "63", "evidence": ""}],
                "record_second": [{"player_name": "Crazy_", "player_uuid": "a9f11454-beac-4cc3-a138-1780802c8794", "distance": "62", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "56", "evidence": ""}]
            },
            {
                "map": "The High Road",
                "slug": "the_high_road",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "34", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Hill",
                "slug": "the_hill",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Rax123", "player_uuid": "743bff39-4eec-4622-9c33-581154d37123", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "Bruin", "player_uuid": "e32a2bda-f0f9-486f-b44a-5e0985ea99dd", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "The Last Sunset",
                "slug": "the_last_sunset",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Skool_77", "player_uuid": "513f7639-db3e-482d-92cd-e0a8da711a6b", "distance": "88", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Lesunia", "player_uuid": "f52002bd-7a86-49fe-ac8e-c2fe0a4a424d", "distance": "72", "evidence": ""}]
            },
            {
                "map": "The Nile",
                "slug": "the_nile",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "156", "evidence": ""}],
                "record_second": [{"player_name": "DivineWolv", "player_uuid": "fcc883e6-a618-40e3-b602-1a56ff6c62b4", "distance": "154", "evidence": ""}],
                "record_third": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "150", "evidence": ""}]
            },
            {
                "map": "The Scorched Grove",
                "slug": "the_scorched_grove",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "TheCore",
                "slug": "thecore",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tired",
                "slug": "tired",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "112", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "110", "evidence": ""}],
                "record_third": [{"player_name": "Brekou", "player_uuid": "b3e651a0-ab36-4be3-87a4-d1fd66d05a86", "distance": "94", "evidence": ""}]
            },
            {
                "map": "Titan",
                "slug": "titan",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "TNT Spleef",
                "slug": "tnt_spleef",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Total War",
                "slug": "total_war",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "145", "evidence": ""}],
                "record_second": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "1", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Totally War II",
                "slug": "totally_war_ii",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "56", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Tower Sight",
                "slug": "tower_sight",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Treamwood Valley",
                "slug": "treamwood_valley",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Treasure Town",
                "slug": "treasure_town",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Tree of Life",
                "slug": "tree_of_life",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "134", "evidence": ""}],
                "record_second": [{"player_name": "corpusH", "player_uuid": "0cf8367d-e768-4a54-a0b9-6feed20952f5", "distance": "69", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "51", "evidence": ""}]
            },
            {
                "map": "Treeline",
                "slug": "treeline",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Trench Warfare 2",
                "slug": "trench_warfare_2",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "w7co", "player_uuid": "22d53ba4-27c0-4f3c-a60a-8abd88a0005d", "distance": "100", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "73", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Trinity",
                "slug": "trinity",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "92", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Turf Wars",
                "slug": "turf_wars",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "DiamondAx", "player_uuid": "3143b9d9-cea7-465f-97fc-8de59fbbb3a4", "distance": "184", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "125", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "119", "evidence": ""}]
            },
            {
                "map": "Twilight Zone",
                "slug": "twilight_zone",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Twilight Zone",
                "slug": "twilight_zone",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Ivysaur", "player_uuid": "fa2bfea8-904d-467b-9c69-8ba12068f526", "distance": "26", "evidence": ""}],
                "record_second": [{"player_name": "dminer78", "player_uuid": "3b239cbd-bbf0-411b-abda-2885f3b17386", "distance": "21", "evidence": ""}],
                "record_third": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "19", "evidence": ""}]
            },
            {
                "map": "Twisted",
                "slug": "twisted",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Atragon", "player_uuid": "a2bad288-3157-4e0a-b818-6d3441d52c13", "distance": "143", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "139", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "70", "evidence": ""}]
            },
            {
                "map": "Twisted",
                "slug": "twisted",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Sheith", "player_uuid": "33ad4d5c-3d69-4802-87b3-908a104632a1", "distance": "62", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "44", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Twisted",
                "slug": "twisted",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Sheith", "player_uuid": "33ad4d5c-3d69-4802-87b3-908a104632a1", "distance": "62", "evidence": ""}],
                "record_second": [{"player_name": "Without_Regret", "player_uuid": "1935c8bf-3fdc-44d6-b358-85a7206ad8ac", "distance": "44", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Two Castles",
                "slug": "two_castles",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Two Tier",
                "slug": "two_tier",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Thomblr", "player_uuid": "e48ff578-bc29-4be6-993e-acb1f9b71f90", "distance": "124", "evidence": ""}],
                "record_second": [{"player_name": "Pisciowski", "player_uuid": "6b5f2e26-3539-4a31-af56-5e893ee01430", "distance": "113", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "112", "evidence": ""}]
            },
            {
                "map": "Two Trees",
                "slug": "two_trees",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "30", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "U-Boat",
                "slug": "u_boat",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "UBoat K\u00f6nig",
                "slug": "uboat_k_nig",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "67", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ubos CTF",
                "slug": "ubos_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "65", "evidence": ""}],
                "record_second": [{"player_name": "Yoyo_", "player_uuid": "07fa10c6-f564-4630-861e-fe134ae27527", "distance": "10", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Undead Heat",
                "slug": "undead_heat",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Underpass",
                "slug": "underpass",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Urban Jungle",
                "slug": "urban_jungle",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Clifford", "player_uuid": "9edcaf0c-63e1-4b50-82bc-6f01874a3067", "distance": "187", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "63", "evidence": ""}],
                "record_third": [{"player_name": "_Bruno", "player_uuid": "407e1a8f-02e9-45c2-8234-2ecba58d7ed5", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Utopia",
                "slug": "utopia",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "boticraft", "player_uuid": "00335294-e240-40a4-97d5-7ba04ca3f3e8", "distance": "122", "evidence": ""}],
                "record_second": [{"player_name": "Helver", "player_uuid": "1195b912-4869-4dfd-929a-bb2b344f9b1d", "distance": "120", "evidence": ""}],
                "record_third": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "79", "evidence": ""}]
            },
            {
                "map": "Valley of the Dead",
                "slug": "valley_of_the_dead",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "48", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "44", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "43", "evidence": ""}]
            },
            {
                "map": "Vengeance",
                "slug": "vengeance",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "24", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "11", "evidence": ""}]
            },
            {
                "map": "Vengeance",
                "slug": "vengeance",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "42", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "24", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "11", "evidence": ""}]
            },
            {
                "map": "Venice Blitz",
                "slug": "venice_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "49", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Venice TDM",
                "slug": "venice_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Gilzor", "player_uuid": "ee429a54-c8e3-4b80-91ab-4dd363d5cf23", "distance": "111", "evidence": ""}],
                "record_second": [{"player_name": "Krenzinator", "player_uuid": "ff869512-1dbf-47f2-b0a0-3e4b0ef095d5", "distance": "92", "evidence": ""}],
                "record_third": [{"player_name": "Vesta", "player_uuid": "8408ccf1-f68c-47f3-bff0-d0e52128a368", "distance": "91", "evidence": ""}]
            },
            {
                "map": "Vertical Shift",
                "slug": "vertical_shift",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Ville Estus",
                "slug": "ville_estus",
                "tags": [{"koth": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Vinebay",
                "slug": "vinebay",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "98", "evidence": ""}],
                "record_second": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "88", "evidence": ""}],
                "record_third": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "58", "evidence": ""}]
            },
            {
                "map": "Viridun Blitz",
                "slug": "viridun_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Babalooba", "player_uuid": "304484f5-c690-4b11-b6d6-3354381425b0", "distance": "71", "evidence": ""}],
                "record_second": [{"player_name": "zofran4", "player_uuid": "3c74f92c-8e6a-4517-a546-1f06fc076424", "distance": "53", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Viridun CTF",
                "slug": "viridun_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "99", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Viridun FFA",
                "slug": "viridun_ffa",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "58", "evidence": ""}],
                "record_second": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "53", "evidence": ""}],
                "record_third": [{"player_name": "BTKing", "player_uuid": "53af1e46-7424-485b-97de-7bf8d854a2aa", "distance": "42", "evidence": ""}]
            },
            {
                "map": "Viridun PearlBow RAGE",
                "slug": "viridun_pearlbow_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Viridun RAGE",
                "slug": "viridun_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Strangey", "player_uuid": "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06", "distance": "126", "evidence": ""}],
                "record_second": [{"player_name": "Reshif", "player_uuid": "459fd919-0d58-401a-9601-6cab1eb721ab", "distance": "122", "evidence": ""}],
                "record_third": [{"player_name": "Spintown", "player_uuid": "bbcafea0-53cf-4d29-9dd9-27f383d02faa", "distance": "108", "evidence": ""}]
            },
            {
                "map": "Viridun",
                "slug": "viridun",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "120", "evidence": ""}],
                "record_second": [{"player_name": "Deathstylus", "player_uuid": "a232aa94-dced-401e-b914-38ebee22981f", "distance": "113", "evidence": ""}],
                "record_third": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "98", "evidence": ""}]
            },
            {
                "map": "Warlock CTF",
                "slug": "warlock_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "41", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Warlock",
                "slug": "warlock",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "log9000", "player_uuid": "60e281bf-c8bc-4376-b9fb-3d204887a4d7", "distance": "88", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "76", "evidence": ""}],
                "record_third": [{"player_name": "LeFanceistBottom", "player_uuid": "f6ec0cb5-38a3-4e4b-a9aa-47d9aa4ab02a", "distance": "54", "evidence": ""}]
            },
            {
                "map": "Watery Grave 2",
                "slug": "watery_grave_2",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Watery Grave",
                "slug": "watery_grave",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "TheDJValen_MLG", "player_uuid": "0f2cc55d-a727-4e67-b4b7-5b8de8ad41ab", "distance": "15", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Weeping Shadows",
                "slug": "weeping_shadows",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "44", "evidence": ""}],
                "record_second": [{"player_name": "Sheith", "player_uuid": "33ad4d5c-3d69-4802-87b3-908a104632a1", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Weeping Shadows",
                "slug": "weeping_shadows",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "44", "evidence": ""}],
                "record_second": [{"player_name": "Sheith", "player_uuid": "33ad4d5c-3d69-4802-87b3-908a104632a1", "distance": "41", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Weirwood",
                "slug": "weirwood",
                "tags": [{"ffa": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "52", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Whirlpool",
                "slug": "whirlpool",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "ChillerFrost", "player_uuid": "f62b53d6-a39f-4da9-b790-ff599f0d25ab", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Whirlpool",
                "slug": "whirlpool",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Utsuho", "player_uuid": "d6a1fd40-7d66-4180-a6d7-47f1ba6e14ee", "distance": "50", "evidence": ""}],
                "record_second": [{"player_name": "ChillerFrost", "player_uuid": "f62b53d6-a39f-4da9-b790-ff599f0d25ab", "distance": "50", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Whiteout",
                "slug": "whiteout",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wildwood Crevice",
                "slug": "wildwood_crevice",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "46", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "40", "evidence": ""}],
                "record_third": [{"player_name": "grani", "player_uuid": "21dc6a97-4abb-4e36-90d5-179fd1fc3a58", "distance": "37", "evidence": ""}]
            },
            {
                "map": "Wilson's Hill",
                "slug": "wilson_s_hill",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wilson's Hill",
                "slug": "wilson_s_hill",
                "tags": [{"gs": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "47", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wind Waker",
                "slug": "wind_waker",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "32", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Winterhold",
                "slug": "winterhold",
                "tags": [{"dtc": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wintery Cabin",
                "slug": "wintery_cabin",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wit's End",
                "slug": "wit_s_end",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "Kansas", "player_uuid": "28d4ee82-e54e-4fe4-a652-b1c533dca500", "distance": "111", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Woodwork Harbor",
                "slug": "woodwork_harbor",
                "tags": [{"dtc": true, "dtm": true}],
                "record_first": [{"player_name": "Disproof", "player_uuid": "1d14f451-c8f0-4e02-a387-1ea808f8b5b3", "distance": "136", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "121", "evidence": ""}],
                "record_third": [{"player_name": "Crazy_", "player_uuid": "a9f11454-beac-4cc3-a138-1780802c8794", "distance": "57", "evidence": ""}]
            },
            {
                "map": "Wool Square",
                "slug": "wool_square",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Woolirium",
                "slug": "woolirium",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "manelp3", "player_uuid": "9b14a333-4548-45b6-a6f4-91927340407d", "distance": "129", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "91", "evidence": ""}],
                "record_third": [{"player_name": "Azzy", "player_uuid": "7acb07b6-1d45-4557-b370-694d02c8947a", "distance": "86", "evidence": ""}]
            },
            {
                "map": "Wooly Woods RAGE",
                "slug": "wooly_woods_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "_Bunnies", "player_uuid": "1cc7c321-f7f3-42c2-a260-3c9b65aca235", "distance": "138", "evidence": ""}],
                "record_second": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "137", "evidence": ""}],
                "record_third": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "128", "evidence": ""}]
            },
            {
                "map": "Wooly Woods",
                "slug": "wooly_woods",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "SedatedSnail", "player_uuid": "316947f1-34fd-46d5-9a38-ef0665f32636", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "zSmoke7_", "player_uuid": "08f2f035-bac3-4247-a737-f70eef9b68f4", "distance": "76", "evidence": ""}],
                "record_third": [{"player_name": "FireRatz", "player_uuid": "44558e95-7714-45b8-8d02-3558f83fb1c2", "distance": "74", "evidence": ""}]
            },
            {
                "map": "Wrath Altar",
                "slug": "wrath_altar",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Wrath Altar",
                "slug": "wrath_altar",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "lowkeyAlting", "player_uuid": "b06fb221-e8a6-4c84-96c8-9ac4a0fd1b51", "distance": "116", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "111", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "94", "evidence": ""}]
            },
            {
                "map": "Wrath Tor RAGE",
                "slug": "wrath_tor_rage",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "51", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
                "record_third": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "40", "evidence": ""}]
            },
            {
                "map": "Ximorta",
                "slug": "ximorta",
                "tags": [{"dtm": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "68", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
	    {
                "map": "Xion",
                "slug": "xion",
                "tags": [{"ctw": true}],
                "record_first": [{"player_name": "BTKing", "player_uuid": "53af1e46-7424-485b-97de-7bf8d854a2aa", "distance": "20", "evidence": "https://i.imgur.com/rS9tD98.png"}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Xyth CTF",
                "slug": "xyth_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "67", "evidence": ""}],
                "record_third": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "65", "evidence": ""}]
            },
            {
                "map": "Yggdrasil",
                "slug": "yggdrasil",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Hoodovah", "player_uuid": "bd029cbe-ec66-48cb-8760-6509c1607328", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "Aggro_Box", "player_uuid": "6ca6c994-bdfa-45e5-bb16-42681a1ff4a8", "distance": "48", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Yukon",
                "slug": "yukon",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Yule Blitz",
                "slug": "yule_blitz",
                "tags": [{"blitz": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "14", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            },
            {
                "map": "Yule TDM",
                "slug": "yule_tdm",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "74", "evidence": ""}],
                "record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "38", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "8", "evidence": ""}]
            },
            {
                "map": "Zen",
                "slug": "zen",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "70", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "60", "evidence": ""}],
                "record_third": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "59", "evidence": ""}]
            },
            {
                "map": "Zoo",
                "slug": "zoo",
                "tags": [{"tdm": true}],
                "record_first": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_second": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}],
                "record_third": [{"player_name": "", "player_uuid": "", "distance": "", "evidence": ""}]
            }
		]
    };
    var output = template(data);
    document.getElementById("records-output").innerHTML = output;
}
