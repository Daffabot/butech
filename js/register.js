if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/butech/service-worker.js")
    .then(function (registration) {
      // Registration was successful``
      console.log("ServiceWorker BuTech registration successful with scope: ", registration.scope);
    })
    .catch(function (err) {
      // registration failed :(
      console.log("ServiceWorker BuTech registration failed: ", err);
    });
}
