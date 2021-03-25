## write files originally copied from stack abuse at 
## https://stackabuse.com/writing-files-using-python/

## read files originally copied from stack abuse at 
## https://stackabuse.com/reading-files-with-python/

def writeOutput(line):
    appendFilehandle = open('clean_history.log','a')
    appendFilehandle.write(line)
    appendFilehandle.close()

# define the name of the file to read from
filename = "working_history_daily.log"

# open the file for reading
readFilehandle = open(filename, 'r')
while True:
    # read a single line
    line = readFilehandle.readline()
    if not line:
        break
    # # cleanup file so clean 24 hour blocks have been recorded
    if("03/18/2021" in line and "00" in line and "error" not in line and "Checksum" not in line and "DHT" not in line and "buffer" not in line):
        writeOutput(line)
    
# close the pointer to that file
readFilehandle.close()