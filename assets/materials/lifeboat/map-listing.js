window.onload = function() {
    var source = document.getElementById("maps-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        // CC licenses that are currently accepted: BY_SA: true, BY_NC_SA: true
        maps: [ {
            map: "Agrostid",
            slug: "agrostid",
            path: "CTW/Standard/Agrostid/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "rockymine", player_uuid: "fe3608b7-d105-4029-8800-34b3147065b6"}
            ],
            tags: [ {ctw: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Brisked",
            slug: "brisked",
            path: "KOTH/Standard/Brisked/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/54dc84b25f35b92ecc0005c1",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Ces",
            slug: "ces",
            path: "DTM/Standard/Ces/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Clayish",
            slug: "clayish",
            path: "Skywars/Clayish/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Creep Slap: Christmas",
            slug: "creep_slap_christmas",
            path: "Arcade/Creep%20Slap-Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "AtlasGames", player_uuid: "e79fbdc9-627e-4dac-97a6-81a3046220d7"}
            ],
            tags: [ {arcade: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Crenel",
            slug: "crenel",
            path: "TDM/Standard/Crenel/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Crenel Halloween",
            slug: "crenel_halloween",
            path: "TDM/Halloween/Crenel%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Fracture",
            slug: "fracture",
            path: "KOTH/Standard/Fracture/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {koth: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Gift",
            slug: "gift",
            path: "Skywars/Gift/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Grad",
            slug: "grad",
            path: "TDM/Standard/Grad/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Gridlock 2",
            slug: "gridlock_2",
            path: "CTW/Standard/Gridlock%20II/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "MapleMint", player_uuid: "04105de3-ecd4-4879-af0c-929715728070"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"}
            ],
            tags: [ {ctw: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Ice Pond",
            slug: "icey",
            path: "Blitz/Rage/Christmas/Icey/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "eza1", player_uuid: "b492b6da-65a6-4eda-92d4-1f010af3c265"}
            ],
            tags: [ {blitz: true, rage: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Infection: Grad",
            slug: "infection_grad",
            path: "Arcade/Infection/Grad%20Infection/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {tdm: true, other: "Infection"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Les",
            slug: "les",
            path: "CTF/Standard/Les/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Leyst",
            slug: "leyst",
            path: "Skywars/Leyst/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Net",
            slug: "net",
            path: "Skywars/Net",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Pavage",
            slug: "pavage",
            path: "DTM/Standard/Pavage/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "Bamby_", player_uuid: "ec80a24a-4e83-4049-8e1d-77abad67e8f3"},
                {player_name: "lowkeyAlting", player_uuid: "b06fb221-e8a6-4c84-96c8-9ac4a0fd1b51"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"}
            ],
            tags: [ {dtm: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro",
            slug: "retro",
            path: "Blitz/GS/Standard/Retro/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro: FFA",
            slug: "retro_ffa",
            path: "Blitz/GS/Standard/Retro%20FFA/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, ffa: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro Christmas",
            slug: "retro_christmas",
            path: "Blitz/GS/Christmas/Retro%20Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Retro Halloween",
            slug: "retro_halloween",
            path: "Blitz/GS/Halloween/Retro%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {gs: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Rooted Frontier",
            slug: "rooted_frontier",
            path: "Blitz/Classic/Standard/Rooted%20Fontier/",
            authors: [
                {player_name: "mitchiii_", player_uuid: "f690a591-348b-482e-a18d-7779d0c0a28c"}
            ],
            tags: [ {blitz: true} ],
            discussion: "https://oc.tc/forums/topics/58296360c296351f4f00001d",
            BY_NC_SA: true,
            download: true,
            xml: true,
            cardinal: false,
        }, {
            map: "Saaneckh",
            slug: "saaneckh",
            path: "FFA/Saaneckh/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ffa: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Safehouse",
            slug: "safehouse",
            path: "CTF/Standard/Safehouse/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {ctf: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Snowish",
            slug: "snowish",
            path: "Skywars/Snowish/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"}
            ],
            tags: [ {skywars: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "Solitude",
            slug: "solitude",
            path: "DTC/Standard/Solitude/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"},
                {player_name: "Stirnubuks", player_uuid: "d4d9add2-3890-4150-b565-806385cea8e8"},
                {player_name: "Arzanex", player_uuid: "62b6d081-8df8-4c09-aa15-71141ca7df76"},
                {player_name: "Baggards", player_uuid: "15101f54-cdbc-4cb2-8ed7-51e876824b71"}
            ],
            tags: [ {dtc: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC",
            slug: "solitudemc",
            path: "DTC/Standard/SolitudeMC/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC Christmas",
            slug: "solitudemc_christmas",
            path: "DTC/Christmas/SolitudeMC%20Christmas/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true, season: "Christmas"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, {
            map: "SolitudeMC Halloween",
            slug: "solitudemc_halloween",
            path: "DTC/Halloween/SolitudeMC%20Halloween/",
            authors: [
                {player_name: "Matic0B", player_uuid: "48924ea3-3aad-4e16-838c-368d8d9e0a25"},
                {player_name: "iLifting", player_uuid: "82d03646-d1a1-4383-a533-9509b130f751"}
            ],
            tags: [ {dtc: true, season: "Halloween"} ],
            discussion: "",
            BY_NC_SA: true,
            download: false,
            xml: true,
            cardinal: false,
        }, ],
    };
    var output = template(data);
    document.getElementById("maps-output").innerHTML = output;
}
