import Vue from "vue";
import { Component } from "vue-property-decorator";


@Component({
	components: {
		UserHeader: require("./header.user.vue").default,
	}
})
export default class HeaderComponent extends Vue {
	sidebarToggle(e: Event) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-hidden");
	}

	sidebarMinimize(e: Event) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-minimized");
	}

	mobileSidebarToggle(e: Event) {
		e.preventDefault();
		document.body.classList.toggle("sidebar-mobile-show");
	}

	asideToggle(e: Event) {
		e.preventDefault();
		document.body.classList.toggle("aside-menu-hidden");
	}
}