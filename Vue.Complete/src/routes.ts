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
	mode: "hash",
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
			path: "/toast",
			name: "Toast",
			component: require("./components/toast/toast.vue").default,
			children: [],
		},
	]
});

export default router;