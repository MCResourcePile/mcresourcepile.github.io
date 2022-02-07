$(function() {
    var maps = [
        {
            map: "Deepwind Jungle",
            file: "deepwind_jungle.png",
            link: "/maps/pgm?dl=deepwind_jungle"
        },
        {
            map: "Battle of Tenjin",
            file: "battle_of_tenjin.png"
        },
        {
            map: "Paradise Isle",
            file: "paradise_isle.png"
        },
        {
            map: "Anathema CTF",
            file: "anathema_ctf.png",
            link: "/maps/overcast?dl=anathema_ctf"
        },
        {
            map: "Avalon Funland",
            file: "avalon_funland.png",
            link: "/maps/pgm?dl=avalon_funland"
        },
        {
            map: "Full Salvo",
            file: "full_salvo.png",
            link: "/maps/pgm?dl=full_salvo"
        },
        {
            map: "Palace CTF",
            file: "palace_ctf.png",
            link: "/maps/overcast?dl=palace_ctf"
        },
        {
            map: "The Complex",
            file: "the_complex.png",
            link: "/maps/overcast?dl=the_complex"
        },
        {
            map: "Twilight Zone",
            file: "twilight_zone.png",
            link: "/maps/overcast?dl=twilight_zone"
        },
        {
            map: "NextGen",
            file: "nextgen.png",
            link: "/maps/pgm?dl=nextgen"
        },
        {
            map: "Long Shot",
            file: "long_shot.png",
            link: "/maps/pgm?dl=long_shot"
        },
        {
            map: "Rallypoint Delta",
            file: "rallypoint_delta.png",
            link: "/maps/pgm?dl=rallypoint_delta"
        }
    ]
    var splash_map = maps[Math.floor(Math.random()*maps.length)]
    $(".background-splash").css({"background": "url(assets/img/splash/" + splash_map.file + ") no-repeat center fixed"})
    $(".detail-map").text(splash_map.map).attr("href", splash_map.link)
    
    var quotes = [
        "The best collection of resources for the former Overcast Network",
        "The best collection of resources for Stratus Network",
        "The best collection of resources for the former Avicus Network",
        "Check out our <a href='/maps/overcast'>Overcast Network map collection</a>!",
        "The place you go when you ask \"where do I download OCN maps?\"",
        "Hosting a large collection of competitive Minecraft PVP maps",
        "Supporting the <a href='https://discord.gg/pEEcwTk'>PGM community</a> with hundreds of public PVP maps",
        "New Overcast Network maps? Soon™",
        "&lt;objective&gt; Download all of the maps! &lt;/objective&gt",
        "&lt;objective&gt Get the longest kill distance with a bow! &lt;/objective&gt",
        "Loading Avicus Network maps repository... 52% complete",
        "Now with 100% more Rift!",
        "Check out the <a href='https://discord.gg/CvJGbrV'>Overcast Community</a> Discord server!",
        "Check out the <a href='https://discord.gg/Vxmq7Xp'>Stratus Network</a> Discord server!",
        "Check out our <a href='https://discord.gg/ygNgxKj'>Discord server</a>!",
        "Check out our <a href='/maps/pgm'>PGM map collection</a>!",
    ]
    $(".splash-subheader").html(quotes[Math.floor(Math.random()*quotes.length)])
});
