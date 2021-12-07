print("hello")

import json
import re

in_aljazeera_not_in_map = []
in_map_not_in_aljazeera = []
with open('world-110m.json', 'r+') as f:
    data = json.load(f)
    countries = data["objects"]["ne_110m_admin_0_countries"]["geometries"]
    # print(len(countries))
    counter_match = 0

    with open('aljazeera_data.txt') as f:
        aljazeera = f.read()
        for country in countries:
            print(country["properties"]["NAME"])
            country = country["properties"]
            if country["NAME"] in aljazeera or country["ABBREV"].replace('.', '') in aljazeera or country["NAME_LONG"] in aljazeera:
                counter_match += 1
            else:
                print(country["NAME"])
                in_map_not_in_aljazeera.append(country["NAME"])

    print(in_map_not_in_aljazeera)
    print("num matched: ", counter_match)
            # print(d);

print("-------------------------------------------------------------")
with open('aljazeera_data.txt') as f:
    lines = f.readlines()
    alj_country_counter = 0
    num_countries = 0

    with open('world-110m.json', 'r+') as f:
        data = json.load(f)
        map_countries = data["objects"]["ne_110m_admin_0_countries"]["geometries"]
        # print(len(countries))
        # for d in countries:
            # print(d["properties"]["NAME"])

        country_index = 0
        country_editing = {}
        counter_match = 0
        found = False
        ptn = r'[^A-Za-z0-9]+'
        for line in lines:
            if not line.isspace():
                line = line.strip()
                # This is the country name
                if alj_country_counter % 5 == 0:
                    breakdown = line.split(' ', 1)
                    aljazeera_country_name = re.sub(ptn, '', breakdown[1])
                    flag = breakdown[0]

                    # find country in json file
                    found = False
                    for index, country in enumerate(map_countries):
                        country = country["properties"]
                        if re.sub(ptn, '', country["NAME"]) == aljazeera_country_name or re.sub(ptn, '', country["ABBREV"]) == aljazeera_country_name or re.sub(ptn, '', country["NAME_LONG"]) == aljazeera_country_name:
                            counter_match += 1
                            country_index = index
                            found = True
                            break

                    if found:
                        country_editing = map_countries[country_index]["properties"]
                        # print(country_editing["NAME"])
                        # print(aljazeera_country_name)
                    else :
                        in_aljazeera_not_in_map.append(aljazeera_country_name)
                        # print(aljazeera_country_name)
                    num_countries += 1
                    alj_country_counter = 0

                # End deforestation
                if found:
                    if alj_country_counter == 1:
                        country_editing["END_DEFOREST"] = line
                        # print("End deforestation: " + line)
                    # Net zero target date
                    elif alj_country_counter == 2:
                        country_editing["NET_ZERO_TARGET_DATE"] = line
                        # print("Net zero target date: " + line)
                    # Quit coal
                    elif alj_country_counter == 3:
                        country_editing["QUIT_COAL"] = line
                        # print("Quit coal: " + line)
                    # Cut methane emissions
                    elif alj_country_counter == 4:
                        country_editing["CUT_METHANE"] = line
                        # print("Cut methane emissions: " + line)
                else:
                    print(aljazeera_country_name)

                alj_country_counter += 1
        print("Number of countries in aljazeera database: ", num_countries)
        print("Number of countries matched from geomap: ", counter_match)
        # print(in_aljazeera_not_in_map)

        # Write to new json file
        new_file = open("test.json", "w")
        json.dump(data, new_file)

intersect = [value for value in in_aljazeera_not_in_map if value in in_map_not_in_aljazeera]
# print(intersect)
