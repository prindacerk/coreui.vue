import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class HeaderUserComponent extends Vue {
	itemsCount: number = 0;

	data() {
		return {
			itemsCount: 42
		};
	}

	mounted() {
	}
}