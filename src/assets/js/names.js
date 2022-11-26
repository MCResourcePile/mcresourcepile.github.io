var names = {
    "mitchiii_": "manager",
    "Crazy_": "manager",
    "Matic0B": "manager",
    "BTKing": "collaborator",
    "freundTech": "developer",
    "triplezko": "developer",
    "ViceTechnicolor": "developer",
    "nixter1029": "developer",
    "Nanu": "collaborator",
    "_3Each": "collaborator",
    "AranoixStark": "collaborator",
    "99250": "collaborator",
    "Proddyy": "collaborator",
    "Lucaslyoko": "collaborator",
}

var alternate = {
    "mitchts": "mitchiii_",
    "CrazyisCreeps": "Crazy_",
    "BTKingly": "BTKing",
    "NanuSci": "Nanu",
    "Palmidence": "ViceTechnicolor",
    "3Each": "_3Each",
    "Starkman123": "AranoixStark",
    "Numberz99": "99250",
    "Prodigy4532": "Proddyy",
}

// uuids for updates page
var uuids = {
    "f690a591-348b-482e-a18d-7779d0c0a28c": "mitchiii_",
    "a9f11454-beac-4cc3-a138-1780802c8794": "Crazy_",
    "48924ea3-3aad-4e16-838c-368d8d9e0a25": "Matic0B",
    "9929437a-9b7d-4d7a-b05d-e22fe93ac042": "triplezko"
}

// highlight authors names for revisions page
function highlightAuthors() {
    $('a#commitAuthor').each(function() {
        var author = $(this).text();
        if (names[author]) {
            $(this).addClass('position-' + names[author]);
        } else if (author = alternate[author]) {
            $(this).addClass('position-' + names[author]);
        }
    });
}

// convert UUIDs to names for updates page
function convertUUIDs() {
    $('a#author-name').each(function() {
        var author = $(this).text();
        if (uuids[author]) {
            var name = uuids[author];
            $(this).text(name);
            $(this).addClass('position-' + names[name]);
        } else {
            $(this).text("Unknown Author");
        }
    });
}
