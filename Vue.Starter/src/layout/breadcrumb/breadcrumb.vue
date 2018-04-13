<template>
	<ol class="breadcrumb">
		<li class="breadcrumb-item" :key="index" v-for="(item, index) in list">
			<span class="active" v-if="isLast(index)">{{ showName(item) }}</span>
			<router-link :to="item" v-else>{{ showName(item) }}</router-link>
		</li>
	</ol>
</template>

<script src="./breadcrumb.ts"></script>