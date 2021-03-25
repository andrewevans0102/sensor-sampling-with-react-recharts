# this program was originally copied from the tutorial at
# https://learn.adafruit.com/dht-humidity-sensing-on-raspberry-pi-with-gdocs-logging/python-setup

import time
import board
import adafruit_dht
import logging
 
# Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT22(board.D20)

# logging
logging.basicConfig(filename='/home/pi/history_daily.log',format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p', level=logging.INFO)

try:
    # Print the values to the serial port
    temperature_c = dhtDevice.temperature
    temperature_f = temperature_c * (9 / 5) + 32
    humidity = dhtDevice.humidity
    output = "Temp: {:.1f} F / {:.1f} C    Humidity: {}% ".format(temperature_f, temperature_c, humidity)
    logging.info(output)
except Exception as error:
    logging.info("error occured")
    logging.info(error)
