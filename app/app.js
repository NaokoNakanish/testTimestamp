import Vue from "nativescript-vue";
import Home from "./components/Home";

// Eddyさんの参照　https://github.com/EddyVerbruggen/nativescript-plugin-firebase#usage
var firebase = require("@nativescript/firebase").firebase;

firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
