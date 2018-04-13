<template>
	<div id="app-root" class="app">
		<app-header />
		
		<div class="app-body">
			<side-menu />

			<main class="main">
				<breadcrumb :list="list" />

				<div class="container-fluid">
					<router-view />
				</div>
			</main>

			<aside-menu />
		</div>

		<app-footer />
	</div>
</template>

<script src="./app.ts"></script>
