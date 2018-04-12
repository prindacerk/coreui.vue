import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class BreadcrumbComponent extends Vue {
	@Prop({ required: true })
	list: any[];

	isLast(index: number) {
		//console.log(index);
		return index === this.list.length - 1;
	}

	showName(item: any) {
		//console.log(item);
		if (item.meta && item.meta.label) {
			item = item.meta && item.meta.label;
		}
		if (item.name) {
			item = item.name;
		}
		return item;
	}
}