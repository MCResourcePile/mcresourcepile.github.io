window.onload = function() {
    var source = document.getElementById("records-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        records: [ {
            map: "Actrix",
            slug: "actrix",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Ancient Lake",
            slug: "ancient-lake",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Illegal Office",
            slug: "illegal-office",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Mirage",
            slug: "mirage",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Raptors",
            slug: "raptors",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Scizor",
            slug: "scizor",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, {
            map: "Zao",
            slug: "zao",
            game_mode: "TDM",
            record_first: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_second: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
            record_third: [ { player_name: "", player_uuid: "", distance: "", evidence: ""} ],
        }, ],
    };
    var output = template(data);
    document.getElementById("records-output").innerHTML = output;
}
