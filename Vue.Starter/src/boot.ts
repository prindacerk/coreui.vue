import Vue from "vue";
import AppRouter from "./routes";

var toastr = require("toastr/toastr");
toastr.options = {
	closeButton: true,
	debug: false,
	newestOnTop: true,
	progressBar: true,
	positionClass: "toast-top-full-width",
	preventDuplicates: true,
	showDuration: "300",
	hideDuration: "1000",
	timeOut: "5000",
	extendedTimeOut: "1000",
	showEasing: "swing",
	hideEasing: "linear",
	showMethod: "fadeIn",
	hideMethod: "fadeOut"
}

var vm = new Vue({
	el: "#app-root",
	router: AppRouter,
	render: h => h(require("./layout/app/app.vue.html").default),
});