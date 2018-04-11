import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    components: {
		AppHeader: require("../header/header.vue.html").default,
		SideMenu: require("../menu/side.vue.html").default,
		AsideMenu: require("../menu/aside.vue.html").default,
		AppFooter: require("../footer/footer.vue.html").default,
    }
})
export default class AppComponent extends Vue {
}