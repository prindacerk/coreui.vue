<style src="./side.scss"></style>

<template>
	<div class="sidebar">
		<nav class="sidebar-nav">
			<div slot="header"></div>
			<ul class="nav nav-pills flex-column">
				<li class="nav-item">
					<router-link to="/" :exact="true" class="nav-link">
						<i class="fa fa-home" aria-hidden="true"></i> Home
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/counter" class="nav-link">
						<i class="fa fa-university" aria-hidden="true"></i> Counter
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/fetchdata" class="nav-link">
						<i class="fa fa-th-list" aria-hidden="true"></i> Fetch data
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/todos" class="nav-link">
						<i class="fa fa-list-alt" aria-hidden="true"></i> TODO list
					</router-link>
				</li>
			</ul>

			<!--<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
				<span>Styles</span>
				<a class="d-flex align-items-center text-muted" href="#"></a>
			</h6>-->

			<ul class="nav nav-pills flex-column">
				<li class="nav-title">Styles</li>

				<li class="nav-item">
					<router-link to="/styles/colors" class="nav-link">
						<i class="fa fa-tint" aria-hidden="true"></i> Colors
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/styles/typography" class="nav-link">
						<i class="fa fa-pencil" aria-hidden="true"></i> Typography
					</router-link>
				</li>
			</ul>

			<!--<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
				<span>Theme Components</span>
				<a class="d-flex align-items-center text-muted" href="#"></a>
			</h6>-->

			<ul class="nav nav-pills flex-column">
				<li class="nav-title">Theme Components</li>

				<li class="nav-item">
					<router-link to="/theme/buttons" class="nav-link">
						<i class="fa fa-pencil" aria-hidden="true"></i> Buttons
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/switches" class="nav-link">
						<i class="fa fa-pencil" aria-hidden="true"></i> Switches
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/charts" class="nav-link">
						<i class="fa fa-tint" aria-hidden="true"></i> Charts
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/forms" class="nav-link">
						<i class="fa fa-tint" aria-hidden="true"></i> Forms
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/icons" class="nav-link">
						<i class="fa fa-tint" aria-hidden="true"></i> Icons
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/toastr" class="nav-link">
						<i class="fa fa-list-alt" aria-hidden="true"></i> Toastr
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/theme/widgets" class="nav-link">
						<i class="fa fa-tint" aria-hidden="true"></i> Widgets
					</router-link>
				</li>
			</ul>
		</nav>
		<div></div>
		<button class="sidebar-minimizer" type="button" @click="sidebarMinimize();brandMinimize()"></button>
	</div>
</template>

<script src="./side.ts"></script>