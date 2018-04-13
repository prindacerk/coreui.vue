import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    components: {
		AppHeader: require("../header/header.vue.html").default,
		Breadcrumb: require("../breadcrumb/breadcrumb.vue.html").default,
		SideMenu: require("../menu/side.vue.html").default,
		AsideMenu: require("../menu/aside.vue.html").default,
		AppFooter: require("../footer/footer.vue.html").default,
    }
})
export default class AppComponent extends Vue {
	$route: any;

	mounted() {
	}

	get name() {
		return this.$route.name;
	}

	get list() {
		return this.$route.matched;
	}
}