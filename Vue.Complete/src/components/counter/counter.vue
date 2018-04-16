<template>
	<div class="animated fadeIn">
		<div class="card">
			<div class="card-header">
				<h4>Counter</h4>
			</div>
			<div class="card-body">
				<p>This is a simple example of a Vue.js component.</p>

				<p>Current count: <strong>{{ currentcount }}</strong></p>

				<button type="button" class="btn btn-outline-secondary" @click="incrementCounter">Increment</button>
			</div>
		</div>
	</div>
</template>

<script src="./counter.ts"></script>
