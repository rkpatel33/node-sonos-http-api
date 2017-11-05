# Rishi notes

http://rishis-macbook-pro-2.local:5005/

# Rooms
LivingRoom
DiningRoom
Patio
Bathroom
Bedroom

## Setup
http://localhost:5005/
http://localhost:5005/zones
http://localhost:5005/favorites
http://localhost:5005/preset/demo
http://localhost:5005/preset/demo_nocomments

## Volume
http://localhost:5005/livingroom/volume/15
http://localhost:5005/volume/15
http://localhost:5005/living room/volume/+1

$.post('http://Rishis-MacBook-Pro-2.local:5005/livingroom/volume/10')
curl -X GET  http://Rishis-MacBook-Pro-2.local:5005/livingroom/volume/10

## Presets
http://localhost:5005/preset/demo


# Text to speech

Google
/[Room name]/say/[phrase][/[language_code]][/[announce volume]]
http://localhost:5005/LivingRoom/say/Hello Rishi/en-au/10
http://localhost:5005/sayall/Hello Rishi/en-au/10

# Favorites
http://localhost:5005/living room/favorite/[favorite name]
http://localhost:5005/Living Room/favorite/CocoRosie Radio


# Music services
http://localhost:5005/LivingRoom/spotify/now/spotify:track:4LI1ykYGFCcXPWkrpcU7hn

*** did not work ***
http://localhost:5005/RoomName/pandora/play/{station name}
http://localhost:5005/RoomName/pandora/play/Dark End Of The Street Radio


# Search
Service options: apple, spotify, deezer, elite, library
Type options for apple, spotify, deezer, and elite: album, song, station, playlist
Search terms for song for all services: artist name, song title, artist name + song title

http://localhost:5005/RoomName/musicsearch/{service}/{type}/{search term}
http://localhost:5005/LivingRoom/musicsearch/spotify/song/Tommorrow

# Playlist

http://localhost:5005/Dining Room/playlist/{myplaylist}


http://localhost:5005/zones/
http://localhost:5005/pauseall/
http://localhost:5005/resumeall/

http://localhost:5005/Living Room/playlist/
http://localhost:5005/Living Room/favorite/
http://localhost:5005/Living Room/favorite/KCRW
http://localhost:5005/Living Room/favorite/CocoRosie Radio
http://localhost:5005/Living Room/favorite/CocoRosie Radio
http://localhost:5005/living room/favorite/[favorite name]


