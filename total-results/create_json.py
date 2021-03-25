import json

data = {"results": []}

# define the name of the file to read from
filename = "clean_history.log"

# open the file for reading
readFilehandle = open(filename, 'r')
while True:
    # read a single line
    line = readFilehandle.readline()
    if not line:
        break
    # 0          1        2  3     4    5 6 7    8    9         10
    # 03/21/2021 11:59:01 PM Temp: 71.2 F / 21.8 C    Humidity: 40.1% 
    whitespaceArray = line.split()
    print(whitespaceArray)
    value = {
        'day': whitespaceArray[0],
        'time': whitespaceArray[1],
        'temp': whitespaceArray[4],
        'humidity': whitespaceArray[10].replace("%", "")
    }
    data["results"].append(value)
    
# close the pointer to that file
readFilehandle.close()

with open('TOTAL_RESULTS.json', 'w') as outfile:
    json.dump(data, outfile)