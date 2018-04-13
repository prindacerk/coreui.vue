<template>
	<header class="app-header navbar">
		<button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
			<span class="navbar-toggler-icon"></span>
		</button>
		<a class="navbar-brand" to="#"></a>
		<button class="navbar-toggler sidebar-toggler d-md-down-none mr-auto" type="button" @click="sidebarToggle">
			<span class="navbar-toggler-icon"></span>
		</button>
		<button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
			<span class="navbar-toggler-icon"></span>
		</button>
	</header>
</template>

<script src="./header.ts"></script>