window.onload = function() {
    var source = document.getElementById("records-template").innerHTML;
    var template = Handlebars.compile(source);
    var data = {
        records: [
			{
				"map": "4K",
				"slug": "4k",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "46", "evidence": ""}],
				"record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}]
			},
			{
				"map": "Abysm: Blitz",
				"slug": "abysm__blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "47", "evidence": ""}]
			},
			{
				"map": "Aerugo",
				"slug": "aerugo",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Aqua Zero",
				"slug": "aqua_zero",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Arbaro Blitz",
				"slug": "arbaro_blitz",
				"tags": [{"blitz": true}]
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
				"map": "Battle of Lyndanisse Blitz",
				"slug": "battle_of_lyndanisse_blitz",
				"tags": [{"blitz": true}]
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
				"map": "BlitzMiners",
				"slug": "blitzminers",
				"tags": [{"blitz": true}]
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
				"map": "Cacti Panic",
				"slug": "cacti_panic",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Cairo Blitz",
				"slug": "cairo_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Cake Wars 3",
				"slug": "cake_wars_3",
				"tags": [{"blitz": true}]
			},
			{
				"map": "CannonQuad",
				"slug": "cannonquad",
				"tags": [{"blitz": true}]
			},
			{
				"map": "CatalystMC Blitz",
				"slug": "catalystmc_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Chicken Run!",
				"slug": "chicken_run_",
				"tags": [{"blitz": true}]
			},
			{
				"map": "CotBot",
				"slug": "cotbot",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "51", "evidence": ""}],
				"record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "37", "evidence": ""}]
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
				"tags": [{"blitz": true}]
			},
			{
				"map": "Dead Heat",
				"slug": "dead_heat",
				"tags": [{"blitz": true}]
			},
			{
				"map": "DeadWater Pirate's Grotto",
				"slug": "deadwater_pirate_s_grotto",
				"tags": [{"blitz": true}]
			},
			{
				"map": "DeadWater Docks",
				"slug": "deadwater_docks",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Drow's Crevice Blitz",
				"slug": "drow_s_crevice_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Drow's Crevice UHC",
				"slug": "drow_s_crevice_uhc",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Dry Gulch",
				"slug": "dry_gulch",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "30", "evidence": ""}]
			},
			{
				"map": "Dust Blitz",
				"slug": "dust_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Flexure",
				"slug": "flexure",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Forbidden Paradise",
				"slug": "forbidden_paradise",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "46", "evidence": ""}]
			},
			{
				"map": "Harb Blitz",
				"slug": "harb_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Brownbadger", "player_uuid": "046e572b-5e0c-44e5-951c-69b041ac31b1", "distance": "37", "evidence": ""}],
				"record_second": [{"player_name": "U_I", "player_uuid": "6b369f74-f865-435d-812c-81f167373c3b", "distance": "25", "evidence": ""}]
			},
			{
				"map": "Horizon",
				"slug": "horizon",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Icy Peaks Blitz",
				"slug": "icy_peaks_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
				"record_second": [{"player_name": "GhostKiller612", "player_uuid": "b26dd03a-dc9a-4dae-ba57-9cefe8ae878e", "distance": "45", "evidence": ""}]
			},
			{
				"map": "Industrial Citadel",
				"slug": "industrial_citadel",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Industry",
				"slug": "industry",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Lost Woods",
				"slug": "lost_woods",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Lunar Coliseum Blitz",
				"slug": "lunar_coliseum_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "34", "evidence": ""}]
			},
			{
				"map": "Melody",
				"slug": "melody",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Metallicus",
				"slug": "metallicus",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "4KNerd", "player_uuid": "fd49fdb8-1552-46aa-a413-3945d3b5f8bc", "distance": "46", "evidence": ""}],
				"__record_second__": [{"player_name": "EndangeredKoala", "player_uuid": "ebcb9401-ea2d-4f81-b393-a44a232c14dc", "distance": "32", "evidence": ""}]
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
				"map": "No Return",
				"slug": "no_return",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "latiku", "player_uuid": "60177c3c-8c10-41c1-959c-1c0744d299e3", "distance": "100", "evidence": ""}],
				"record_second": [{"player_name": "Ny_", "player_uuid": "a43135a4-d7b9-49ab-ac8d-a16bb2513c8d", "distance": "81", "evidence": ""}],
				"record_third": [{"player_name": "Joshua", "player_uuid": "d51c89fd-d043-4a2c-8548-7393389d9595", "distance": "74", "evidence": ""}]
			},
			{
				"map": "Osage",
				"slug": "osage",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Overgrown Blitz",
				"slug": "overgrown_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Osage",
				"slug": "osage",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "56", "evidence": ""}]
			},
			{
				"map": "Ozone Blitz",
				"slug": "ozone_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Quatuor",
				"slug": "quatuor",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Pebble Beach",
				"slug": "pebble_beach",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "57", "evidence": ""}],
				"record_second": [{"player_name": "SailorMojo", "player_uuid": "a53ab2da-36ed-4886-ac2a-49696de4622f", "distance": "56", "evidence": ""}]
			},
			{
				"map": "Relapse : UHC",
				"slug": "relapse___uhc",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "27", "evidence": ""}]
			},
			{
				"map": "Seckuded Islands",
				"slug": "seckuded_islands",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Secluded Lakes",
				"slug": "secluded_lakes",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "54", "evidence": ""}]
			},
			{
				"map": "Skyfall",
				"slug": "skyfall",
				"tags": [{"blitz": true}]
			},
			{
				"map": "TNT Spleef",
				"slug": "tnt_spleef",
				"tags": [{"blitz": true}]
			},
			{
				"map": "The Arena Blitz",
				"slug": "the_arena_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "41", "evidence": ""}]
			},
			{
				"map": "The Complex",
				"slug": "the_complex",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Treeline",
				"slug": "treeline",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Twilight Zone",
				"slug": "twilight_zone",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Venice Blitz",
				"slug": "venice_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "49", "evidence": ""}]
			},
			{
				"map": "Vertical Shift",
				"slug": "vertical_shift",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Viridun Blitz",
				"slug": "viridun_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Babalooba", "player_uuid": "304484f5-c690-4b11-b6d6-3354381425b0", "distance": "71", "evidence": ""}],
				"record_second": [{"player_name": "zofran4", "player_uuid": "3c74f92c-8e6a-4517-a546-1f06fc076424", "distance": "53", "evidence": ""}]
			},
			{
				"map": "Wind Waker",
				"slug": "wind_waker",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "45", "evidence": ""}],
				"record_second": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "32", "evidence": ""}]
			},
			{
				"map": "ArBOOro Blitz",
				"slug": "arbooro_blitz",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Deadwater Spooks",
				"slug": "deadwater_spooks",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Hallowed Relapse - UHSpooky",
				"slug": "hallowed_relapse___uhspooky",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Scareliegra",
				"slug": "scareliegra",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Undead Heat",
				"slug": "undead_heat",
				"tags": [{"blitz": true}]
			},
			{
				"map": "Aeruhohoho",
				"slug": "aeruhohoho",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "21", "evidence": ""}]
			},
			{
				"map": "Arbaro Blitzmas",
				"slug": "arbaro_blitzmas",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "snatter", "player_uuid": "b843e63b-4d8c-4606-b6da-08b3ed8534d1", "distance": "37", "evidence": ""}]
			},
			{
				"map": "Yule Blitz",
				"slug": "yule_blitz",
				"tags": [{"blitz": true}],
				"record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "14", "evidence": ""}]
			},
			{
                "map": "100 Rooms",
                "slug": "100_rooms",
                "tags": [{"rage": true}]
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
                "record_first": [{"player_name": "Simonaro", "player_uuid": "bbd68526-bb64-4de6-a725-9a4b917fb905", "distance": "52", "evidence": ""}]
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
                "map": "Aureola Rage",
                "slug": "aureola_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "26", "evidence": ""}],
                "record_second": [{"player_name": "chapszz", "player_uuid": "9c670caa-bc00-4920-b3e2-d24ad8a8c9c5", "distance": "11", "evidence": ""}]
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
                "map": "Bliss Rage",
                "slug": "bliss_rage",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "118", "evidence": ""}],
                "record_second": [{"player_name": "BaconBooty", "player_uuid": "79262f9e-8bae-47af-8634-54d38ac7df4c", "distance": "114", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "114", "evidence": ""}]
            },
            {
                "map": "Blossom",
                "slug": "blossom",
                "tags": [{"rage": true}]
            },
            {
                "map": "Bouncy Stadium",
                "slug": "bouncy_stadium",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "130", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "30", "evidence": ""}]
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
                "map": "Cubed",
                "slug": "cubed",
                "tags": [{"rage": true}]
            },
            {
                "map": "Dead Town",
                "slug": "dead_town",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "LArrowDead", "player_uuid": "----", "distance": "109", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "78", "evidence": ""}],
                "record_third": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "69", "evidence": ""}]
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
                "map": "Drandlion",
                "slug": "drandlion",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "73", "evidence": ""}],
                "record_second": [{"player_name": "Creephunter", "player_uuid": "95763a18-eb88-44e7-8a10-780acffceae8", "distance": "42", "evidence": ""}]
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
                "map": "Fallen Courtyard",
                "slug": "fallen_courtyard",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Pham", "player_uuid": "22d0bb68-2215-4394-a05a-b5db73c5bcac", "distance": "56", "evidence": ""}],
                "record_second": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "55", "evidence": ""}],
                "record_third": [{"player_name": "Creephunter", "player_uuid": "95763a18-eb88-44e7-8a10-780acffceae8", "distance": "53", "evidence": ""}]
            },
            {
                "map": "Fallen Empire",
                "slug": "fallen_empire",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Eggyyyy", "player_uuid": "e4b99cb2-9d7a-49a5-9743-f5b107d21053", "distance": "105", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "96", "evidence": ""}]
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
                "map": "Gone Camping",
                "slug": "gone_camping",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "27", "evidence": ""}]
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
                "map": "Gravestone",
                "slug": "gravestone",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "89", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "89", "evidence": ""}],
                "record_third": [{"player_name": "pokemaster15243", "player_uuid": "5ae375d1-d5f1-4cfd-94f4-814b8ea4d047", "distance": "82", "evidence": ""}]
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
                "map": "Hanging Garden",
                "slug": "hanging_garden",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "51", "evidence": ""}]
            },
            {
                "map": "Hand of God",
                "slug": "hand_of_god",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "52", "evidence": ""}]
            },
            {
                "map": "Ieats Hall",
                "slug": "ieats_hall",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "62", "evidence": ""}]
            },
            {
                "map": "Immortal",
                "slug": "immortal",
                "tags": [{"rage": true}]
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
                "map": "Into the Jungle",
                "slug": "into_the_jungle",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "HiMyNameIsAlex", "player_uuid": "822ef0dc-19f2-4ddb-9ee3-daf96c606985", "distance": "95", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "72", "evidence": ""}],
                "record_third": [{"player_name": "kzf", "player_uuid": "3b08b71d9a864ac7ae4f090a3d4c8413", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Java",
                "slug": "java",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "45", "evidence": ""}]
            },
            {
                "map": "Kozicu",
                "slug": "kozicu",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "28", "evidence": ""}]
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
                "map": "Mushrooms of Oblivion",
                "slug": "mushrooms_of_oblivion",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "63", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "42", "evidence": ""}],
                "record_third": [{"player_name": "SheriffSoco", "player_uuid": "6e347123-c684-4d7e-996c-44d4924ff172", "distance": "37", "evidence": ""}]
            },
            {
                "map": "Network",
                "slug": "network",
                "tags": [{"rage": true}]
            },
            {
                "map": "Oculo",
                "slug": "oculo",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "vandal", "player_uuid": "b91f17e5-afc3-4482-9bbd-141b26e0f630", "distance": "37", "evidence": ""}],
                "record_second": [{"player_name": "Glalie", "player_uuid": "c64ff44d-0bc3-44c9-a611-e872903c6152", "distance": "0", "evidence": ""}]
            },
            {
                "map": "Overgrown Rage",
                "slug": "overgrown_rage",
                "tags": [{"rage": true}]
            },
            {
                "map": "Palude",
                "slug": "palude",
                "tags": [{"rage": true}]
            },
            {
                "map": "Permeac",
                "slug": "permeac",
                "tags": [{"rage": true}]
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
                "map": "Pride",
                "slug": "pride",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "75", "evidence": ""}],
                "record_second": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "61", "evidence": ""}]
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
                "map": "Quavilla",
                "slug": "quavilla",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Hockey_", "player_uuid": "625b72d4-65b7-4089-9273-060bd25ff1ab", "distance": "66", "evidence": ""}],
                "record_second": [{"player_name": "ApplePies", "player_uuid": "4faf501d-f965-4f07-887e-24cd66a4f7b0", "distance": "62", "evidence": ""}],
                "record_third": [{"player_name": "mspotter", "player_uuid": "e69d382a-8425-455d-bdf1-ad8b0761f5fe", "distance": "61", "evidence": ""}]
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
                "tags": [{"rage": true}]
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
                "map": "Sandstone Temples",
                "slug": "sandstone_temples",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "98", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "94", "evidence": ""}],
                "record_third": [{"player_name": "Everdeen_", "player_uuid": "200752a6-19c6-47d4-bb59-d5ae22e76e47", "distance": "85", "evidence": ""}]
            },
            {
                "map": "Sand Wall",
                "slug": "sand_wall",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "43", "evidence": ""}]
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
                "map": "Snow Globe",
                "slug": "snow_globe",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Dumpling", "player_uuid": "2719fe11-9a96-4c86-a4b8-6c69c26c8294", "distance": "4", "evidence": ""}]
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
                "map": "The 6th Law",
                "slug": "the_6th_law",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "91", "evidence": ""}],
                "record_second": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "90", "evidence": ""}],
                "record_third": [{"player_name": "pae", "player_uuid": "de7fd781-faad-4fcd-930c-dd9812b7af27", "distance": "88", "evidence": ""}]
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
                "map": "Trinity",
                "slug": "trinity",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "92", "evidence": ""}]
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
                "map": "Yukon",
                "slug": "yukon",
                "tags": [{"rage": true}]
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
                "map": "101 Pumpkins",
                "slug": "101_pumpkins",
                "tags": [{"rage": true}]
            },
            {
                "map": "BipBeta Halloween",
                "slug": "bipbeta_halloween",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "18", "evidence": ""}],
                "record_second": [{"player_name": "Lucaslyoko", "player_uuid": "8b2d7971-7348-4438-9efe-6d6ecf2be972", "distance": "9", "evidence": ""}]
            },
            {
                "map": "Hallow Side",
                "slug": "hallow_side",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "pulbos2", "player_uuid": "ab8a0c0e-f609-417c-9b07-ceacf2320cbe", "distance": "114", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "91", "evidence": ""}]
            },
            {
                "map": "Infinite Horror",
                "slug": "infinite_horror",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "101", "evidence": ""}]
            },
            {
                "map": "Into the Jack o' Lantern",
                "slug": "into_the_jack_o__lantern",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "25", "evidence": ""}]
            },
            {
                "map": "Sore Teeth",
                "slug": "sore_teeth",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "55", "evidence": ""}]
            },
            {
                "map": "Christmas Eve",
                "slug": "christmas_eve",
                "tags": [{"rage": true}],
                "record_first": [{"player_name": "Administrators", "player_uuid": "ae9d6074-bb27-4bbe-97ce-2d446f307a24", "distance": "70", "evidence": ""}]
            },
            {
                "map": "Deadwater Chills",
                "slug": "deadwater_chills",
                "tags": [{"rage": true}]
            },
            {
                "map": "Feative Relapse",
                "slug": "feative_relapse",
                "tags": [{"rage": true}]
            },
            {
                "map": "Anathema",
                "slug": "anathema",
                "tags": [{"ctf": true}]
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
                "map": "Aureola CTF",
                "slug": "aureola_ctf",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Battle Ecliptica CTF",
                "slug": "battle_ecliptica_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "38", "evidence": ""}]
            },
            {
                "map": "Battle Ecliptica CTF - Experiment 1",
                "slug": "battle_ecliptica_ctf___experiment_1",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "82", "evidence": ""}],
                "record_second": [{"player_name": "Itz_micyFire_PvP", "player_uuid": "4ee7a4e8-38e6-4583-967d-99f909f04161", "distance": "29", "evidence": ""}]
            },
            {
                "map": "Bill's Town",
                "slug": "bill_s_town",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Blitzkrieg: CTF",
                "slug": "blitzkrieg__ctf",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Cabin Fever II",
                "slug": "cabin_fever_ii",
                "tags": [{"ctf": true}]
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
                "map": "Chocolate Diamonds CTF",
                "slug": "chocolate_diamonds_ctf",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Concourse",
                "slug": "concourse",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "55", "evidence": ""}]
            },
            {
                "map": "Coniferous Forest",
                "slug": "coniferous_forest",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Desert Sanctuary",
                "slug": "desert_sanctuary",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "petranhoses", "player_uuid": "0ba4c67b-9945-4c4f-9eef-8b5b4cd6ca69", "distance": "115", "evidence": ""}],
                "record_second": [{"player_name": "Tulaaa", "player_uuid": "50c309d3-ef28-47a2-af9a-0279c36a83a1", "distance": "72", "evidence": ""}]
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
                "map": "Directrix with Gunz",
                "slug": "directrix_with_gunz",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Strangey", "player_uuid": "621b2aa8-4e5f-4ed8-bd36-0ae2f8952a06", "distance": "164", "evidence": ""}]
            },
            {
                "map": "Divided",
                "slug": "divided",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "59", "evidence": ""}]
            },
            {
                "map": "Dust CTF",
                "slug": "dust_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "36", "evidence": ""}]
            },
            {
                "map": "Flag Run",
                "slug": "flag_run",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "76", "evidence": ""}]
            },
            {
                "map": "Harb CTF",
                "slug": "harb_ctf",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Grub",
                "slug": "grub",
                "tags": [{"ctf": true}]
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
                "map": "Koi",
                "slug": "koi",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "115", "evidence": ""}],
                "record_second": [{"player_name": "xCand", "player_uuid": "a37e4da3-1c6c-4dc9-b085-63783406a963", "distance": "91", "evidence": ""}],
                "record_third": [{"player_name": "MeMyselfAndGhost", "player_uuid": "745bd516-ca42-4cad-a5d0-6da5b62af900", "distance": "58", "evidence": ""}]
            },
            {
                "map": "Les",
                "slug": "les",
                "tags": [{"ctf": true}]
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
                "map": "Palace CTF",
                "slug": "palace_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "64", "evidence": ""}]
            },
            {
                "map": "QuakeCTF",
                "slug": "quakectf",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Safehouse",
                "slug": "safehouse",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Shrine",
                "slug": "shrine",
                "tags": [{"ctf": true}]
            },
            {
                "map": "Snowy Wars CTF",
                "slug": "snowy_wars_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "85", "evidence": ""}]
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
                "map": "TF2: Badlands CTF",
                "slug": "tf2__badlands_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "TheKittyCat_", "player_uuid": "053b574d-2fa7-40d6-bfec-a1cefeda0da1", "distance": "4", "evidence": ""}]
            },
            {
                "map": "The Complex CTF",
                "slug": "the_complex_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "97", "evidence": ""}]
            },
            {
                "map": "The Fenland CTF",
                "slug": "the_fenland_ctf",
                "tags": [{"ctf": true}]
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
                "map": "The Last Sunset",
                "slug": "the_last_sunset",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Skool_77", "player_uuid": "513f7639-db3e-482d-92cd-e0a8da711a6b", "distance": "88", "evidence": ""}],
                "record_second": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "72", "evidence": ""}],
                "record_second": [{"player_name": "Lesunia", "player_uuid": "f52002bd-7a86-49fe-ac8e-c2fe0a4a424d", "distance": "72", "evidence": ""}]
            },
            {
                "map": "Ubos CTF",
                "slug": "ubos_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Tapetepato", "player_uuid": "62f3cd20-c78d-4810-8a00-c5ecb0636783", "distance": "65", "evidence": ""}],
                "record_second": [{"player_name": "Yoyo_", "player_uuid": "07fa10c6-f564-4630-861e-fe134ae27527", "distance": "10", "evidence": ""}]
            },
            {
                "map": "Viridun CTF",
                "slug": "viridun_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "99", "evidence": ""}]
            },
            {
                "map": "Warlock CTF",
                "slug": "warlock_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "41", "evidence": ""}]
            },
            {
                "map": "Xyth CTF",
                "slug": "xyth_ctf",
                "tags": [{"ctf": true}],
                "record_first": [{"player_name": "Jexel", "player_uuid": "9225421c-3c09-4d97-bb80-f6a77c1f360b", "distance": "97", "evidence": ""}],
                "record_second": [{"player_name": "Nyco", "player_uuid": "fc57a05b-8344-4592-9817-3817780f194e", "distance": "67", "evidence": ""}],
                "record_third": [{"player_name": "NerdifiedGames", "player_uuid": "5f267306-27e4-4e95-9ddb-e717687685e9", "distance": "65", "evidence": ""}]
            }
		]
    };
    var output = template(data);
    document.getElementById("records-output").innerHTML = output;
}
