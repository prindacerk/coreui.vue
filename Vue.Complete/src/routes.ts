import Vue from "vue";
import VueRouter from "vue-router";

Vue.use((VueRouter) as any);

/*const routes = [
	{ path: "/", name: "Home", component: require("./components/home/home.vue").default },
	{ path: "/counter", name: "Counter", component: require("./components/counter/counter.vue").default },
	{ path: "/fetchdata", name: "Fetch", component: require("./components/fetchdata/fetchdata.vue").default },
	{ path: "/todos", name: "Todos", component: require("./components/todos/todos.vue").default },
	{ path: "/toast", name: "Toast", component: require("./components/toast/toast.vue").default },
];*/

const router = new VueRouter({
	mode: "history",
	linkActiveClass: "open active",
	routes: [
		{
			path: "/",
			name: "Home",
			component: require("./components/home/home.vue").default,
			children: [],
		},
		{
			path: "/counter",
			name: "Counter",
			component: require("./components/counter/counter.vue").default,
			children: [],
		},
		{
			path: "/fetchdata",
			name: "Fetch",
			component: require("./components/fetchdata/fetchdata.vue").default,
			children: [],
		},
		{
			path: "/todos",
			name: "Todos",
			component: require("./components/todos/todos.vue").default,
			children: [],
		},
		{
			path: "/styles",
			name: "Styles",
			redirect: "/",
			component: require("./layout/styles.vue").default,
			children: [
				{
					path: "colors",
					name: "Colors",
					component: require("./components/styles/color/color.vue").default,
				},
				{
					path: "typography",
					name: "Typography",
					component: require("./components/styles/typo/typo.vue").default,
				},
			],
		},
		{
			path: "/theme",
			name: "Theme",
			redirect: "/",
			component: require("./layout/theme.vue").default,
			children: [
				{
					path: "buttons",
					name: "Buttons",
					component: require("./components/theme/button/button.vue").default,
				},
				{
					path: "switches",
					name: "Switches",
					component: require("./components/theme/switch/switch.vue").default,
				},
				{
					path: "charts",
					name: "Charts",
					component: require("./components/theme/chart/chart.vue").default,
				},
				{
					path: "forms",
					name: "Forms",
					component: require("./components/theme/form/form.vue").default,
				},
				{
					path: "icons",
					name: "Icons",
					component: require("./components/theme/icon/icon.vue").default,
				},
				{
					path: "toastr",
					name: "Toastr",
					component: require("./components/theme/toastr/toast.vue").default,
				},
				{
					path: "widgets",
					name: "Widgets",
					component: require("./components/theme/widget/widget.vue").default,
				},
			],
		},

		/*{
			path: "/theme/toastr",
			name: "Toastr",
			component: require("./components/toast/toast.vue").default,
			children: [],
		},*/
	]
});

export default router;