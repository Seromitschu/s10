<template>
<div class="about padding section">
<div class="homeTitleDv opacity-80"><p class="boldText" style="font-weight: 500;">Hi, I’m Serhat 🐲</p></div><p class="normalText opacity-40">⭐ Self-taught web and app developer.</p>
<br>
<span :class="`w-3 h-3 rounded-full inline-block mr-1 ${getDiscordStatus}`"></span>
<span class="border-green-500 border-b-2 border-opacity-100 hover:border-opacity-70 normalText opacity-60">{{ getDiscordStatusDetails }}</span> - 
<br>
<span :class="`w-3 h-3 rounded-full inline-block mr-1 ${getSpotifyStatus}`"></span>
<span class="border-green-500 border-b-2 border-opacity-100 hover:border-opacity-70 normalText opacity-60">{{ getSpotifyStatusDetails }}</span>
<br>
<p class="normalText opacity-60 mt-4">I’m currently working as a web developer for <a href="https://econut.repl.co" target="_blank" class="border-gray-500 border-b-2 border-opacity-100 hover:border-opacity-70">EcoNut</a> and <a href="https://manivela-company.netlify.app" target="_blank" class="border-gray-500 border-b-2 border-opacity-100 hover:border-opacity-70">Manivela</a>.</p>
<p class="normalText opacity-60 mt-4">I’m 18 years old Self-taught web and app developer in <a href="https://www.google.com/search?q=turkey" target="_blank" class="border-gray-500 border-b-2 border-opacity-100 hover:border-opacity-70">Turkey</a>, I usually make and share open-source projects. Also share all my open-source projects on GitHub.</p>
<p class="normalText opacity-60 mt-4">If you want to know more about me, <a href="/about" class="border-gray-500 border-b-2 border-opacity-100 hover:border-opacity-70">click here</a>!</p>
</div>
</template>
  
  <script>
  export default {
    data() {
      return {
        finished: false,
        lanyard: {},
        socket: null,
      }
    },
    computed: {
      /**
       * Returns status detail as string.
       * @returns {string}
       */
      getDiscordStatusDetails() {
        const lanyard = this.lanyard
        if (!lanyard) return {}
        switch (this.lanyard.discord_status) {
          case "online":
            return "Online in Discord"
          case "idle":
            return "Online in Discord"
          case "dnd":
            return "Online in Discord"
          case "offline":
            return "Offline in Discord"
          default:
            return "Loading"
        }
      },
      /**
       * Returns spotify status detail as string.
       * @returns {string}
       */
      getSpotifyStatusDetails() {
        const lanyard = this.lanyard
        if (!lanyard) return {}
        switch (this.lanyard.listening_to_spotify ) {
          case true:
            const spotifySong = this.lanyard.spotify.song.split("(")[0]
            const spotifyArtist = this.lanyard.spotify.artist.split("(")[0]
            const SpotifyTrackId = this.lanyard.spotify.track_id
            return "Listening to " + spotifySong + " by " + spotifyArtist
          case false:
            return ""
          default:
            return ""
        }
      },
      /**
       * Returns Discord status colors.
       * @returns {string} Tailwind color classes
       */
      getDiscordStatus() {
        switch (this.lanyard.discord_status) {
          case "online":
            return "bg-green-500"
          case "idle":
            return "bg-yellow-500"
          case "dnd":
            return "bg-red-500"
          default:
            return "bg-gray-500 dark:bg-gray-200"
        }
      },

      getSpotifyStatus() {
        switch (this.lanyard.listening_to_spotify) {
          case true:
            return "bg-green-500"
          case false:
            return ""
          default:
            return ""
        }
      },
    },
    beforeDestroy() {
      this.socket?.close()
    },
    mounted() {
      /**
       * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
       */
      this.socket = new WebSocket("wss://api.lanyard.rest/socket")
      this.socket.addEventListener("open", () => {
        // Subscribe to ID
        this.socket.send(
          JSON.stringify({
            op: 2,
            d: {
              subscribe_to_id: "1147912597337804821",
            },
          })
        )
        // Send heartbeat every 30 seconds
        setInterval(() => {
          this.socket.send(
            JSON.stringify({
              op: 3,
            })
          )
        }, 30000)
      })
      this.socket.addEventListener("message", ({ data }) => {
        const { t: type, d: status } = JSON.parse(data)
        if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
          this.lanyard = status || {}
        this.finished = true
      })
    },
  }
  </script>
