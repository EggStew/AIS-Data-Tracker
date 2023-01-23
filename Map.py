import folium
import requests

# Get AIS data for a specific ship from aisstream.io
ship_mmsi = "235070403"
url = f"https://aisstream.io/api/vessels/{ship_mmsi}/positions"
response = requests.get(url)
ais_data = response.json()

# Create a map centered on the ship's last known location
m = folium.Map(location=[ais_data[-1]['lat'], ais_data[-1]['lon']], zoom_start=12)

# Add a marker for the ship's last known location
folium.Marker([ais_data[-1]['lat'], ais_data[-1]['lon']], popup="Ship Location").add_to(m)
 
# Add a line showing the ship's movement over time
positions = [[row['lat'], row['lon']] for row in ais_data]
folium.PolyLine(positions, color='red', weight=2.5, opacity=1).add_to(m)

# Display the map
m