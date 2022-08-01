<template>
  <div class="h-screen relative">
    <h1 class="text-xl text-red-500">Testing tailwind!</h1>
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import leaflet from "leaflet";
import { onMounted } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    let map;
    onMounted(() => {
      //init map
      map = leaflet.map("map").setView([52.1672, -1.8419], 8);

      /// ADD TILE LAYER
      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_API_KEY}`,
          {
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.VUE_APP_API_KEY,
          }
        )
        .addTo(map);
    });
  },
};
</script>
