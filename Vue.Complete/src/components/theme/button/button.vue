<template>
	<div class="animated fadeIn">
		<div class="row">
			<div class="col-md-6">
				<div class="card">
					<div class="card-header">
						<strong>Options</strong>
					</div>
					<div class="card-body">
						<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
						<button class="btn btn-primary">Primary</button>
						<!-- Secondary, outline button -->
						<button class="btn btn-secondary">Secondary</button>
						<!-- Indicates a successful or positive action -->
						<button class="btn btn-success">Success</button>
						<!-- Indicates caution should be taken with this action -->
						<button class="btn btn-warning">Warning</button>
						<!-- Indicates a dangerous or potentially negative action -->
						<button class="btn btn-danger">Danger</button>
						<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
						<button class="btn btn-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>With Icons</strong>
					</div>
					<div class="card-body">
						<button class="btn btn-primary"><i class="fa fa-star"></i>&nbsp; Primary</button>
						<button class="btn btn-secondary"><i class="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
						<button class="btn btn-success"><i class="fa fa-magic"></i>&nbsp; Success</button>
						<button class="btn btn-warning"><i class="fa fa-map-marker"></i>&nbsp; Warning</button>
						<button class="btn btn-danger"><i class="fa fa-rss"></i>&nbsp; Danger</button>
						<button class="btn btn-link"><i class="fa fa-link"></i>&nbsp; Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-primary">Primary</button>
						<button class="btn btn-lg btn-secondary">Secondary</button>
						<button class="btn btn-lg btn-success">Success</button>
						<button class="btn btn-lg btn-warning">Warning</button>
						<button class="btn btn-lg btn-danger">Danger</button>
						<button class="btn btn-lg btn-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-sm btn-primary">Primary</button>
						<button class="btn btn-sm btn-secondary">Secondary</button>
						<button class="btn btn-sm btn-success">Success</button>
						<button class="btn btn-sm btn-warning">Warning</button>
						<button class="btn btn-sm btn-danger">Danger</button>
						<button class="btn btn-sm btn-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-primary" disabled>Primary</button>
						<button class="btn btn-lg btn-secondary" disabled>Secondary</button>
						<button class="btn btn-lg btn-success" disabled>Success</button>
						<button class="btn btn-lg btn-warning" disabled>Warning</button>
						<button class="btn btn-lg btn-danger" disabled>Danger</button>
						<button class="btn btn-lg btn-link" disabled>Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-primary active">Primary</button>
						<button class="btn btn-secondary active">Secondary</button>
						<button class="btn btn-success active">Success</button>
						<button class="btn btn-warning active">Warning</button>
						<button class="btn btn-danger active">Danger</button>
						<button class="btn btn-link active">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-primary" aria-pressed="true">Primary</button>
						<button class="btn btn-secondary" aria-pressed="true">Secondary</button>
						<button class="btn btn-success" aria-pressed="true">Success</button>
						<button class="btn btn-warning" aria-pressed="true">Warning</button>
						<button class="btn btn-danger" aria-pressed="true">Danger</button>
						<button class="btn btn-link" aria-pressed="true">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Toggle pressed state</strong>
					</div>
					<div class="card-body">
						<button class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Primary</button>
						<button class="btn btn-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">Secondary</button>
						<button class="btn btn-success" data-toggle="button" aria-pressed="false" autocomplete="off">Success</button>
						<button class="btn btn-warning" data-toggle="button" aria-pressed="false" autocomplete="off">Warning</button>
						<button class="btn btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Danger</button>
						<button class="btn btn-link" data-toggle="button" aria-pressed="false" autocomplete="off">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-block btn-primary">Primary</button>
						<button class="btn btn-lg btn-block btn-secondary">Secondary</button>
						<button class="btn btn-lg btn-block btn-success">Success</button>
						<button class="btn btn-lg btn-block btn-warning">Warning</button>
						<button class="btn btn-lg btn-block btn-danger">Danger</button>
						<button class="btn btn-lg btn-block btn-link">Link</button>
					</div>
				</div>
			</div><!--/.col-->
			<div md="6">
				<div class="card">
					<div class="card-header">
						<strong>Options</strong>
					</div>
					<div class="card-body">
						<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
						<button class="btn btn-outline-primary">Primary</button>
						<!-- Secondary, outline button -->
						<button class="btn btn-outline-secondary">Secondary</button>
						<!-- Indicates a successful or positive action -->
						<button class="btn btn-outline-success">Success</button>
						<!-- Indicates caution should be taken with this action -->
						<button class="btn btn-outline-warning">Warning</button>
						<!-- Indicates a dangerous or potentially negative action -->
						<button class="btn btn-outline-danger">Danger</button>
						<button class="btn btn-outline-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>With Icons</strong>
					</div>
					<div class="card-body">
						<button class="btn btn-outline-primary"><i class="fa fa-star"></i>&nbsp; Primary</button>
						<button class="btn btn-outline-secondary"><i class="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
						<button class="btn btn-outline-success"><i class="fa fa-magic"></i>&nbsp; Success</button>
						<button class="btn btn-outline-warning"><i class="fa fa-map-marker"></i>&nbsp; Warning</button>
						<button class="btn btn-outline-danger"><i class="fa fa-rss"></i>&nbsp; Danger</button>
						<button class="btn btn-outline-link"><i class="fa fa-link"></i>&nbsp; Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Size Large</strong> <small>Add this <code>size="lg"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-outline-primary">Primary</button>
						<button class="btn btn-lg btn-outline-secondary">Secondary</button>
						<button class="btn btn-lg btn-outline-success">Success</button>
						<button class="btn btn-lg btn-outline-warning">Warning</button>
						<button class="btn btn-lg btn-outline-danger">Danger</button>
						<button class="btn btn-lg btn-outline-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Size Small</strong> <small>Add this <code>size="sm"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-sm btn-outline-primary">Primary</button>
						<button class="btn btn-sm btn-outline-secondary">Secondary</button>
						<button class="btn btn-sm btn-outline-success">Success</button>
						<button class="btn btn-sm btn-outline-warning">Warning</button>
						<button class="btn btn-sm btn-outline-danger">Danger</button>
						<button class="btn btn-sm btn-outline-link">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Disabled state</strong> <small>Add this <code>:disabled="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-outline-primary" disabled>Primary</button>
						<button class="btn btn-lg btn-outline-secondary" disabled>Secondary</button>
						<button class="btn btn-lg btn-outline-success" disabled>Success</button>
						<button class="btn btn-lg btn-outline-warning" disabled>Warning</button>
						<button class="btn btn-lg btn-outline-danger" disabled>Danger</button>
						<button class="btn btn-lg btn-outline-link" disabled>Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Active state</strong> <small>Add this <code>:active="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-outline-primary active">Primary</button>
						<button class="btn btn-outline-secondary active">Secondary</button>
						<button class="btn btn-outline-success active">Success</button>
						<button class="btn btn-outline-warning active">Warning</button>
						<button class="btn btn-outline-danger active">Danger</button>
						<button class="btn btn-outline-link active">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Pressed state</strong> <small>Add this <code>:pressed="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-outline-primary" aria-pressed="true">Primary</button>
						<button class="btn btn-outline-secondary" aria-pressed="true">Secondary</button>
						<button class="btn btn-outline-success" aria-pressed="true">Success</button>
						<button class="btn btn-outline-warning" aria-pressed="true">Warning</button>
						<button class="btn btn-outline-danger" aria-pressed="true">Danger</button>
						<button class="btn btn-outline-link" aria-pressed="true">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Toggle pressed state</strong>
					</div>
					<div class="card-body">
						<button class="btn btn-outline-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Primary</button>
						<button class="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">Secondary</button>
						<button class="btn btn-outline-success" data-toggle="button" aria-pressed="false" autocomplete="off">Success</button>
						<button class="btn btn-outline-warning" data-toggle="button" aria-pressed="false" autocomplete="off">Warning</button>
						<button class="btn btn-outline-danger" data-toggle="button" aria-pressed="false" autocomplete="off">Danger</button>
						<button class="btn btn-outline-link" data-toggle="button" aria-pressed="false" autocomplete="off">Link</button>
					</div>
				</div>

				<div class="card">
					<div class="card-header">
						<strong>Block Level Buttons</strong> <small>Add this <code>:block="true"</code></small>
					</div>
					<div class="card-body">
						<button class="btn btn-lg btn-block btn-outline-primary">Primary</button>
						<button class="btn btn-lg btn-block btn-outline-secondary">Secondary</button>
						<button class="btn btn-lg btn-block btn-outline-success">Success</button>
						<button class="btn btn-lg btn-block btn-outline-warning">Warning</button>
						<button class="btn btn-lg btn-block btn-outline-danger">Danger</button>
						<button class="btn btn-lg btn-block btn-outline-link">Link</button>
					</div>
				</div>
			</div><!--/.col-->
		</div><!--/.row-->
	</div>
</template>

<script src="./button.ts"></script>