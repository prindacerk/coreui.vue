import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class SideMenuComponent extends Vue {
	navItems: any[];

	handleClick(e: any) {
		e.preventDefault();
		e.target.parentElement.classList.toggle("open");
	}

	sidebarMinimize() {
		document.body.classList.toggle("sidebar-minimized");
	};
	brandMinimize() {
		document.body.classList.toggle("brand-minimized");
	};
}