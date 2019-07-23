var names = {
    "mitchiii_": "manager",
    "Crazy_": "manager",
    "Matic0B": "manager",
    "BTKing": "manager",
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
    "Epicness": "associate",
    "amactus": "associate"
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
    "EpicnessGithub": "Epicness",
    "Christian": "Epicness",
}

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
