<template>
	<li class="nav-item dropdown right no-caret">
		<a class="nav-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<img src="/images/avatars/6.jpg" alt="admin@coreui" class="img-avatar">
		</a>
		<div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
			<div class="dropdown-header text-center"><strong>Account</strong></div>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">{{itemsCount}}</span></a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">{{itemsCount}}</span></a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">{{itemsCount}}</span></a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">{{itemsCount}}</span></a>

			<div class="dropdown-header text-center"><strong>Settings</strong></div>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-user"></i> Profile</a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-wrench"></i> Settings</a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-usd"></i> Payments<span class="badge badge-secondary">{{itemsCount}}</span></a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">{{itemsCount}}</span></a>

			<div role="separator" class="dropdown-divider"></div>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-shield"></i> Lock Account</a>
			<a role="menuitem" class="dropdown-item" href="#" target="_self"><i class="fa fa-lock"></i> Logout</a>
		</div>
	</li>
</template>

<script src="./header.user.ts"></script>