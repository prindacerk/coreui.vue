import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
    components: {
		HeaderLayout: require("../header/header.vue.html").default,
		SideMenuLayout: require("../menu/side.vue.html").default,
		AsideMenuLayout: require("../menu/aside.vue.html").default,
		FooterLayout: require("../footer/footer.vue.html").default,
    }
})
export default class AppComponent extends Vue {
}