import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    components: {
		AppHeader: require("../header/header.vue").default,
		Breadcrumb: require("../breadcrumb/breadcrumb.vue").default,
		SideMenu: require("../menu/side.vue").default,
		AsideMenu: require("../menu/aside.vue").default,
		AppFooter: require("../footer/footer.vue").default,
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