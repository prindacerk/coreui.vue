import Vue from "vue";
import VueRouter from "vue-router";

Vue.use((VueRouter) as any);

/*const routes = [
	{ path: "/", name: "Home", component: require("./components/home/home.vue.html").default },
	{ path: "/counter", name: "Counter", component: require("./components/counter/counter.vue.html").default },
	{ path: "/fetchdata", name: "Fetch", component: require("./components/fetchdata/fetchdata.vue.html").default },
	{ path: "/todos", name: "Todos", component: require("./components/todos/todos.vue.html").default },
	{ path: "/toast", name: "Toast", component: require("./components/toast/toast.vue.html").default },
];*/

const router = new VueRouter({
	mode: "hash",
	linkActiveClass: "open active",
	routes: [
		{
			path: "/",
			name: "Home",
			component: require("./components/home/home.vue.html").default,
			children: [],
		},
		{
			path: "/counter",
			name: "Counter",
			component: require("./components/counter/counter.vue.html").default,
			children: [],
		},
		{
			path: "/fetchdata",
			name: "Fetch",
			component: require("./components/fetchdata/fetchdata.vue.html").default,
			children: [],
		},
		{
			path: "/todos",
			name: "Todos",
			component: require("./components/todos/todos.vue.html").default,
			children: [],
		},
		{
			path: "/toast",
			name: "Toast",
			component: require("./components/toast/toast.vue.html").default,
			children: [],
		},
	]
});

export default router;