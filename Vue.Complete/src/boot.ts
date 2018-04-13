import Vue from "vue";
import AppRouter from "./routes";
import AppToastr from "./plugins/toastr";

Vue.use(AppToastr);

var vm = new Vue({
	el: "#app-root",
	router: AppRouter,
	render: h => h(require("./layout/app/app.vue").default),
});