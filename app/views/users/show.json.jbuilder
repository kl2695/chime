json.extract! @user, :id, :username

json.playlists @playlists do |playlist|
  json.partial! "api/playlists/playlist", playlist: playlist
end

json.tracks @tracks do |track|
  json.partial! "api/tracks/track", track: track
end