<template>
	<header class="app-header navbar">
		<a class="navbar-brand" to="#"></a>
		<button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
			<span class="navbar-toggler-icon"></span>
		</button>
		<button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
			<span class="navbar-toggler-icon"></span>
		</button>

		<ul class="navbar-nav d-md-down-none">
			<li class="nav-item px-3"><a href="#" target="_self" class="nav-link">Dashboard</a></li>
			<li class="nav-item px-3"><a href="#" target="_self" class="nav-link">Users</a></li>
			<li class="nav-item px-3"><a href="#" target="_self" class="nav-link">Settings</a></li>
		</ul>

		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a class="nav-link" href="#"><i class="icon-bell"></i> <span class="badge badge-danger badge-pill">5</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><i class="icon-list"></i></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><i class="icon-location-pin"></i></a>
			</li>
			<user-header />
		</ul>

		<button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">
			<span class="navbar-toggler-icon"></span>
		</button>
	</header>
</template>

<script src="./header.ts"></script>