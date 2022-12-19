import os, sys, json, requests
from optparse import OptionParser

def get_username(uuid):
    api = "https://api.ashcon.app/mojang/v2/user/"
    r = requests.get(api + uuid)
    if "username" in r.json():
        return r.json()["username"]

def main(directory, uuids_file, options):
    output = {"uuids": {}}

    previous_output = uuids_file
    if os.path.exists(previous_output):
        with open(previous_output, "r") as f:
            json_data = f.read()
        output = json.loads(json_data)

    uuids = []

    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.lower().endswith((".json")):
                filename = f
                f = os.path.join(root, f)
                with open(f, "r") as f:
                    json_data = f.read()
                data = json.loads(json_data)
                if "data" in data:
                    print("Searching for UUIDs in " + filename, flush=True)
                    maps = data["data"]["maps"]
                    for map in maps:
                        for author in map["authors"]:
                            if "uuid" in author and author["uuid"].replace("-", "") not in uuids:
                                uuids.append(author["uuid"].replace("-", ""))
    count = str(len(uuids))
    print(count + " UUIDS found\n", flush=True)

    names = dict()
    #uuids = uuids[0:8]

    for i, uuid in enumerate(uuids):
        if uuid not in output["uuids"] or options.force:
            print("Fetching username for " + uuid + " (" + str(i+1) + " of " + count + ")", flush=True)
            username = get_username(uuid)
            if username:
                output["uuids"].update({uuid: username})

    with open(uuids_file, "w") as out:
        json.dump(output, out, indent=4)

if __name__ == "__main__":
    usage = "usage: %prog <dir> <uuids file>"
    parser = OptionParser(usage = usage)
    parser.add_option("-f", "--force", dest="force", help="force a refresh of all uuids even if they are known", default=False, action="store_true")
    (options, args) = parser.parse_args()

    if len(sys.argv) == 1:
        parser.error("No directory specified")

    directory = sys.argv[1]
    directory = os.path.normpath(directory)
    uuids_file = sys.argv[2]
    uuids_file = os.path.normpath(uuids_file)
    if not os.path.exists(directory):
        parser.error("No such directory as " + directory)
    if not os.path.exists(uuids_file):
        parser.error("No such file as " + uuids_file)

    main(directory, uuids_file, options)

    sys.exit(0)
