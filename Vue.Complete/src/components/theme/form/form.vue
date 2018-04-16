<style src="./form.scss"></style>

<template>
	<div class="animated fadeIn">
		<div class="row">
			<div class="col-sm-6">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Credit Card</strong> <small>Form</small>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-sm-12">
									<div class="form-group">
										<label for="name">Name</label>
										<input type="text" class="form-control" id="name" placeholder="Enter your name">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="form-group">
										<label for="ccnumber">Credit Card Number</label>
										<input type="text" class="form-control" id="ccnumber" placeholder="0000 0000 0000 0000">
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-4">
									<div class="form-group">
										<label for="month1">Month</label>
										<select class="form-control" id="month1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label for="year1">Year</label>
										<select class="form-control" id="year1">
											<option>2014</option>
											<option>2015</option>
											<option>2016</option>
											<option>2017</option>
											<option>2018</option>
											<option>2019</option>
											<option>2020</option>
											<option>2021</option>
											<option>2022</option>
											<option>2023</option>
											<option>2024</option>
											<option>2025</option>
										</select>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label for="cvv">CVV/CVC</label>
										<input type="text" class="form-control" id="cvv" placeholder="123">
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-6">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Company</strong> <small>Form</small>
						</div>
						<div class="card-body">
							<div class="form-group">
								<label for="company">Company</label>
								<input type="text" class="form-control" id="company" placeholder="Enter your company name">
							</div>
							<div class="form-group">
								<label for="vat">VAT</label>
								<input type="text" class="form-control" id="vat" placeholder="PL1234567890">
							</div>
							<div class="form-group">
								<label for="street">Street</label>
								<input type="text" class="form-control" id="street" placeholder="Enter street name">
							</div>

							<div class="row">
								<div class="col-sm-8">
									<div class="form-group">
										<label for="city">City</label>
										<input type="text" class="form-control" id="city" placeholder="Enter your city">
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label for="postal-code">Postal Code</label>
										<input type="text" class="form-control" id="postal-code" placeholder="Postal Code">
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="country">Country</label>
								<input type="text" class="form-control" id="country" placeholder="Country name">
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Basic Form</strong> Elements
						</div>
						<div class="card-body">
							<div class="form-group row">
								<label for="basicName" class="col-sm-3 col-form-label">Enter your name</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" id="basicName" aria-describedby="basicNameDescription" placeholder="Full Name">
									<small id="basicNameDescription" class="form-text text-muted">
										Let us know your full name.
									</small>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicStatic" class="col-sm-3 col-form-label">Static</label>
								<div class="col-sm-9">
									<input type="text" readonly class="form-control-plaintext" id="basicStatic" value="Username">
								</div>
							</div>
							<div class="form-group row">
								<label for="basicText" class="col-sm-3 col-form-label">Text Input</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" id="basicText" aria-describedby="basicTextDescription" placeholder="Text">
									<small id="basicTextDescription" class="form-text text-muted">
										This is a help text
									</small>
								</div>
							</div>
							<div class="form-group row">
								<label for="date" class="col-sm-3 col-form-label">Date</label>
								<div class="col-sm-9">
									<input type="date" class="form-control" id="date">
								</div>
							</div>
							<div class="form-group row">
								<label for="basicEmail" class="col-sm-3 col-form-label">Enter your name</label>
								<div class="col-sm-9">
									<input type="email" class="form-control" id="basicEmail" aria-describedby="basicEmailDescription" placeholder="Enter your email">
									<small id="basicEmailDescription" class="form-text text-muted">
										Please enter your email
									</small>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicPassword" class="col-sm-3 col-form-label">Password Input</label>
								<div class="col-sm-9">
									<input type="password" class="form-control" id="basicPassword" aria-describedby="basicPasswordDescription" placeholder="Enter your password">
									<small id="basicPasswordDescription" class="form-text text-muted">
										Please enter a complex password
									</small>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicInputDisabled" class="col-sm-3 col-form-label">Disabled Input</label>
								<div class="col-sm-9">
									<input type="text" readonly class="form-control-plaintext" id="basicInputDisabled" placeholder="Disabled" disabled>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicTextarea" class="col-sm-3 col-form-label">Textarea</label>
								<div class="col-sm-9">
									<textarea class="form-control" id="basicTextarea" rows="9" placeholder="Content.."></textarea>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicSelect" class="col-sm-3 col-form-label">Select</label>
								<div class="col-sm-9">
									<select class="form-control" id="basicSelect">
										<option value="" selected>Please select</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicSelectLg" class="col-sm-3 col-form-label">Select large</label>
								<div class="col-sm-9">
									<select class="form-control form-control-lg" id="basicSelectLg">
										<option value="" selected>Please select</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicSelectSm" class="col-sm-3 col-form-label">Select small</label>
								<div class="col-sm-9">
									<select class="form-control form-control-sm" id="basicSelectSm">
										<option value="" selected>Please select</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
								<label for="basicSelectDisabled" class="col-sm-3 col-form-label">Disabled select</label>
								<div class="col-sm-9">
									<select class="form-control" id="basicSelectDisabled" disabled>
										<option value="" selected>Please select</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label for="basicMultiSelect">Example multiple select</label>
								<div class="col-sm-9">
									<select multiple class="form-control" id="basicMultiSelect">
										<option value="" selected>Please select</option>
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4" disabled>Option 4 (Disabled)</option>
										<option value="5">Option 5</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<label for="basicRadios">Radios</label>
								<div class="col-sm-9">
									<div class="form-check">
										<input class="form-check-input" type="radio" name="basicRadios" id="basicRadios1" value="1" checked>
										<label class="form-check-label" for="basicRadios1">
											Option 1
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="basicRadios" id="basicRadios2" value="2">
										<label class="form-check-label" for="basicRadios2">
											Option 2
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="basicRadios" id="basicRadios3" value="3">
										<label class="form-check-label" for="basicRadios3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicInlineRadios">Inline radios</label>
								<div class="col-sm-9">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="basicInlineRadios" id="basicInlineRadios1" value="1" checked>
										<label class="form-check-label" for="basicInlineRadios1">
											Option 1
										</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="basicInlineRadios" id="basicInlineRadios2" value="2">
										<label class="form-check-label" for="basicInlineRadios2">
											Option 2
										</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="basicInlineRadios" id="basicInlineRadios3" value="3">
										<label class="form-check-label" for="basicInlineRadios3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicCheckboxes">Checkboxes</label>
								<div class="col-sm-9">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" name="basicCheckboxes" id="basicCheckboxes1" value="1" checked>
										<label class="form-check-label" for="basicCheckboxes1">
											Option 1
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" name="basicCheckboxes" id="basicCheckboxes2" value="2">
										<label class="form-check-label" for="basicCheckboxes2">
											Option 2
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" name="basicCheckboxes" id="basicCheckboxes3" value="3">
										<label class="form-check-label" for="basicCheckboxes3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicInlineCheckboxes">Inline checkboxes</label>
								<div class="col-sm-9">
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" name="basicInlineCheckboxes" id="basicInlineCheckboxes1" value="1" checked>
										<label class="form-check-label" for="basicInlineCheckboxes1">
											Option 1
										</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" name="basicInlineCheckboxes" id="basicInlineCheckboxes2" value="2">
										<label class="form-check-label" for="basicInlineCheckboxes2">
											Option 2
										</label>
									</div>
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="checkbox" name="basicInlineCheckboxes" id="basicInlineCheckboxes3" value="3">
										<label class="form-check-label" for="basicInlineCheckboxes3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicRadiosCustom">Radios - custom</label>
								<div class="col-sm-9">
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" name="basicRadiosCustom" id="basicRadiosCustom1" value="1" checked>
										<label class="custom-control-label" for="basicRadiosCustom1">
											Option 1
										</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" name="basicRadiosCustom" id="basicRadiosCustom2" value="2">
										<label class="custom-control-label" for="basicRadiosCustom2">
											Option 2
										</label>
									</div>
									<div class="custom-control custom-radio">
										<input class="custom-control-input" type="radio" name="basicRadiosCustom" id="basicRadiosCustom3" value="3">
										<label class="custom-control-label" for="basicRadiosCustom3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicInlineRadiosCustom">Inline radios - custom</label>
								<div class="col-sm-9">
									<div class="custom-control custom-radio custom-control-inline">
										<input class="custom-control-input" type="radio" name="basicInlineRadiosCustom" id="basicInlineRadiosCustom1" value="1" checked>
										<label class="custom-control-label" for="basicInlineRadiosCustom1">
											Option 1
										</label>
									</div>
									<div class="custom-control custom-radio custom-control-inline">
										<input class="custom-control-input" type="radio" name="basicInlineRadiosCustom" id="basicInlineRadiosCustom2" value="2">
										<label class="custom-control-label" for="basicInlineRadiosCustom2">
											Option 2
										</label>
									</div>
									<div class="custom-control custom-radio custom-control-inline">
										<input class="custom-control-input" type="radio" name="basicInlineRadiosCustom" id="basicInlineRadiosCustom3" value="3">
										<label class="custom-control-label" for="basicInlineRadiosCustom3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicCheckboxesCustom">Checkboxes - custom</label>
								<div class="col-sm-9">
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" name="basicCheckboxesCustom" id="basicCheckboxesCustom1" value="1" checked>
										<label class="custom-control-label" for="basicCheckboxesCustom1">
											Option 1
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" name="basicCheckboxesCustom" id="basicCheckboxesCustom2" value="2">
										<label class="custom-control-label" for="basicCheckboxesCustom2">
											Option 2
										</label>
									</div>
									<div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" name="basicCheckboxesCustom" id="basicCheckboxesCustom3" value="3">
										<label class="custom-control-label" for="basicCheckboxesCustom3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="basicInlineCheckboxesCustom">Inline checkboxes</label>
								<div class="col-sm-9">
									<div class="custom-control custom-checkbox custom-control-inline">
										<input class="custom-control-input" type="checkbox" name="basicInlineCheckboxesCustom" id="basicInlineCheckboxesCustom1" value="1" checked>
										<label class="custom-control-label" for="basicInlineCheckboxesCustom1">
											Option 1
										</label>
									</div>
									<div class="custom-control custom-checkbox custom-control-inline">
										<input class="custom-control-input" type="checkbox" name="basicInlineCheckboxesCustom" id="basicInlineCheckboxesCustom2" value="2">
										<label class="custom-control-label" for="basicInlineCheckboxesCustom2">
											Option 2
										</label>
									</div>
									<div class="custom-control custom-checkbox custom-control-inline">
										<input class="custom-control-input" type="checkbox" name="basicInlineCheckboxesCustom" id="basicInlineCheckboxesCustom3" value="3">
										<label class="custom-control-label" for="basicInlineCheckboxesCustom3">
											Option 3
										</label>
									</div>
								</div>
							</div>
							<div class="form-group">
								<label for="fileInput">File input</label>
								<div>
									<div class="custom-file">
										<input type="file" class="custom-file-input" id="fileInput" multiple>
										<label class="custom-file-label" for="fileInput">Choose file</label>
									</div>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>

			<div class="col-md-6">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Normal</strong> Form
						</div>
						<div class="card-body">
							<div class="form-group">
								<label for="normalEmail">Email</label>
								<input type="email" class="form-control" id="normalEmail" aria-describedby="normalEmailDescription" placeholder="Enter Email.." required>
								<small id="normalEmailDescription" class="form-text text-muted">
									Please enter your email.
								</small>
							</div>

							<div class="form-group">
								<label for="normalPass">Password</label>
								<input type="password" class="form-control" id="normalPass" aria-describedby="normalPassDescription" placeholder="Enter Password.." required>
								<small id="normalPassDescription" class="form-text text-muted">
									Please enter your password.
								</small>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>

				<form>
					<div class="card">
						<div class="card-header">
							<strong>Horizontal</strong> Form
						</div>
						<div class="card-body">
							<div class="form-group row">
								<label for="horizEmail" class="col-sm-2 col-form-label">Email</label>
								<div class="col-sm-10">
									<input type="email" class="form-control" id="horizEmail" aria-describedby="horizEmailDescription" placeholder="Enter Email..">
									<small id="horizEmailDescription" class="form-text text-muted">
										Please enter your email.
									</small>
								</div>
							</div>
							<div class="form-group row">
								<label for="horizPass" class="col-sm-2 col-form-label">Password</label>
								<div class="col-sm-10">
									<input type="password" class="form-control" id="horizPass" aria-describedby="horizPassDescription" placeholder="Enter Password..">
									<small id="horizPassDescription" class="form-text text-muted">
										Please enter your password.
									</small>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>

				<form>
					<div class="card">
						<div class="card-header">
							<strong>Inline</strong> Form
						</div>
						<div class="card-body form-inline">
							<div class="form-group mx-sm-3 mb-2">
								<label class="mr-sm-2" for="inlineInput1">Name: </label>
								<input type="text" class="form-control" id="inlineInput1" placeholder="Jane Doe">
							</div>
							<div class="form-group mx-sm-3 mb-2">
								<label class="mr-sm-2" for="inlineInput2">Email: </label>
								<input type="email" class="form-control" id="inlineInput2" placeholder="jane.doe@example.com">
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>

				<form>
					<div class="card">
						<div class="card-header">
							Input <strong>Grid</strong>
						</div>
						<div class="card-body">
							<div class="row form-group">
								<div class="col-sm-3">
									<input type="text" class="form-control" placeholder=".col-sm-3">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-4">
									<input type="text" class="form-control" placeholder=".col-sm-4">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-5">
									<input type="text" class="form-control" placeholder=".col-sm-5">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-6">
									<input type="text" class="form-control" placeholder=".col-sm-6">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-7">
									<input type="text" class="form-control" placeholder=".col-sm-7">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-8">
									<input type="text" class="form-control" placeholder=".col-sm-8">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder=".col-sm-9">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-10">
									<input type="text" class="form-control" placeholder=".col-sm-10">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-11">
									<input type="text" class="form-control" placeholder=".col-sm-11">
								</div>
							</div>
							<div class="row form-group">
								<div class="col-sm-12">
									<input type="text" class="form-control" placeholder=".col-sm-12">
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-user"></i> Login</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>

				<form>
					<div class="card">
						<div class="card-header">
							Input <strong>Sizes</strong>
						</div>
						<div class="card-body">
							<div class="form-group row">
								<label for="smInput" class="col-sm-2 col-form-label">Small input</label>
								<div class="col-sm-10">
									<input type="text" class="form-control form-control-sm" id="smInput" placeholder=".form-control-sm">
								</div>
							</div>
							<div class="form-group row">
								<label for="defaultInput" class="col-sm-2 col-form-label">Default input</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="defaultInput" placeholder="Default input">
								</div>
							</div>
							<div class="form-group row">
								<label for="lgInput" class="col-sm-2 col-form-label">Large input</label>
								<div class="col-sm-10">
									<input type="text" class="form-control form-control-lg" id="lgInput" placeholder=".form-control-lg">
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-primary"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<form novalidate>
					<div class="card">
						<div class="card-header">
							<strong>Validation feedback</strong> Form
						</div>
						<div class="card-body">
							<div class="form-group">
								<label for="inputIsValid">Input is valid</label>
								<input type="text" class="form-control is-valid" id="inputIsValid">
								<div class="valid-feedback">
									Input is valid.
								</div>
							</div>
							<div class="form-group">
								<label for="inputIsInvalid">Input is invalid</label>
								<input type="text" class="form-control is-invalid" id="inputIsInvalid">
								<div class="invalid-feedback">
									Please provide a valid information.
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-12 col-md-6">
				<form class="was-validated" novalidate>
					<div class="card">
						<div class="card-header">
							<strong>Validation feedback</strong> Form
						</div>
						<div class="card-body">
							<div class="form-group">
								<label for="inputSuccess">Non-required input</label>
								<input type="text" class="form-control" id="inputSuccess">
								<div class="valid-feedback">
									Input is valid.
								</div>
							</div>
							<div class="form-group">
								<label for="inputError">Required input</label>
								<input type="text" class="form-control" id="inputError" required>
								<div class="valid-feedback">
									Input provided.
								</div>
								<div class="invalid-feedback">
									Please provide a valid information.
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Icon/Text</strong> Groups
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-group-user"><i class="fa fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-group-user">
							</div>

							<div class="input-group mb-3">
								<input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-group-email">
								<div class="input-group-append">
									<span class="input-group-text" id="basic-group-email"><i class="fa fa-envelope-o"></i></span>
								</div>
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-euro"></i></span>
								</div>
								<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
								<div class="input-group-append">
									<span class="input-group-text">.00</span>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Buttons</strong> Groups
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<button class="btn btn-outline-primary" type="button"><i class="fa fa-search"></i> Search</button>
								</div>
								<input type="text" class="form-control" placeholder="Username" aria-label="Username">
							</div>

							<div class="input-group mb-3">
								<input type="email" class="form-control" placeholder="Email" aria-label="Email">
								<div class="input-group-append">
									<button class="btn btn-outline-primary" type="button"><i class="fa fa-dot-circle-o"></i> Submit</button>
								</div>
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<button class="btn btn-outline-primary" type="button"><i class="fa fa-facebook"></i></button>
								</div>
								<input type="text" class="form-control" placeholder="Email" aria-label="Email">
								<div class="input-group-append">
									<button class="btn btn-outline-primary" type="button"><i class="fa fa-twitter"></i></button>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							<strong>Dropdowns</strong> Groups
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<div role="separator" class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Separated link</a>
										<a class="dropdown-item" href="#" disabled>Disabled action</a>
									</div>
								</div>
								<input type="text" class="form-control" placeholder="Username" aria-label="Username">
							</div>

							<div class="input-group mb-3">
								<input type="email" class="form-control" placeholder="Email" aria-label="Email">
								<div class="input-group-append">
									<button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<div role="separator" class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Separated link</a>
										<a class="dropdown-item" href="#" disabled>Disabled action</a>
									</div>
								</div>
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<button type="button" class="btn btn-outline-primary">Split</button>
									<button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<div role="separator" class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Separated link</a>
										<a class="dropdown-item" href="#" disabled>Disabled action</a>
									</div>
								</div>
								<input type="text" class="form-control" placeholder="..." aria-label="...">
								<div class="input-group-append">
									<button class="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="#">Action</a>
										<a class="dropdown-item" href="#">Another action</a>
										<a class="dropdown-item" href="#">Something else here</a>
										<div role="separator" class="dropdown-divider"></div>
										<a class="dropdown-item" href="#">Separated link</a>
										<a class="dropdown-item" href="#" disabled>Disabled action</a>
									</div>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							Example Form
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text">Username</span>
								</div>
								<input type="text" class="form-control" placeholder="Username" aria-label="Username">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-user"></i></span>
								</div>
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text">Email</span>
								</div>
								<input type="email" class="form-control" placeholder="Email" aria-label="Email">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-envelope"></i></span>
								</div>
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text">Password</span>
								</div>
								<input type="password" class="form-control" aria-label="Password" placeholder="Enter Password..">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-asterisk"></i></span>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							Example Form
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<input type="text" class="form-control" placeholder="Username" aria-label="Username">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-user"></i></span>
								</div>
							</div>

							<div class="input-group mb-3">
								<input type="email" class="form-control" placeholder="Email" aria-label="Email">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-envelope"></i></span>
								</div>
							</div>

							<div class="input-group mb-3">
								<input type="password" class="form-control" aria-label="Password" placeholder="Enter Password..">
								<div class="input-group-append">
									<span class="input-group-text"><i class="fa fa-asterisk"></i></span>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-sm-4">
				<form>
					<div class="card">
						<div class="card-header">
							Example Form
						</div>
						<div class="card-body">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-user"></i></span>
								</div>
								<input type="text" class="form-control" placeholder="Username" aria-label="Username">
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-envelope"></i></span>
								</div>
								<input type="email" class="form-control" placeholder="Email" aria-label="Email">
							</div>

							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><i class="fa fa-asterisk"></i></span>
								</div>
								<input type="password" class="form-control" aria-label="Password" placeholder="Enter Password..">
							</div>
						</div>
						<div class="card-footer">
							<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Submit</button>
							<button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Reset</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="card">
			<div class="card-header">
				<i class="fa fa-edit"></i> Form Elements
				<div class="card-actions">
					<a href="#" class="btn btn-setting"><i class="icon-settings"></i></a>
					<a class="btn btn-minimize" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
						<i class="fa"></i>
					</a>
					<a href="#" class="btn btn-close"><i class="icon-close"></i></a>
				</div>
			</div>
			<div id="collapseExample" class="collapse show">
				<div class="card-body">
					<div class="form-group">
						<label for="elementsEmail">Prepended text</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
							</div>
							<input type="email" id="elementsEmail" class="form-control" placeholder="Email" aria-label="Email">
						</div>
						<small class="form-text text-muted">
							Here's some help text
						</small>
					</div>
					<div class="form-group">
						<label for="elementsAppend">Appended text</label>
						<div class="input-group">
							<input type="text" id="elementsAppend" class="form-control" aria-label="Amount (to the nearest dollar)">
							<div class="input-group-append">
								<span class="input-group-text">.00</span>
							</div>
						</div>
						<small class="form-text text-muted">
							Here's some help text
						</small>
					</div>
					<div class="form-group">
						<label for="elementsPrependAppend">Append and prepend</label>
						<div class="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fa fa-euro"></i></span>
							</div>
							<input type="text" id="elementsPrependAppend" class="form-control" aria-label="Amount (to the nearest dollar)">
							<div class="input-group-append">
								<span class="input-group-text">.00</span>
							</div>
						</div>
						<small class="form-text text-muted">
							Here's some help text
						</small>
					</div>
					<div class="form-group">
						<label for="elementsAppendButton">Append with button</label>
						<div class="input-group">
							<input type="text" id="elementsAppendButton" class="form-control" aria-label="">
							<div class="input-group-append">
								<button class="btn btn-outline-primary" type="button">Go!</button>
							</div>
						</div>
						<small class="form-text text-muted">
							Here's some help text
						</small>
					</div>
					<div class="form-group">
						<label for="elementsTwoButtons">Two-buttons append</label>
						<div class="input-group">
							<input type="text" id="elementsTwoButtons" class="form-control" aria-label="">
							<div class="input-group-append">
								<button class="btn btn-outline-primary" type="button">Search</button>
								<button class="btn btn-outline-danger" type="button">Options</button>
							</div>
						</div>
						<small class="form-text text-muted">
							Here's some help text
						</small>
					</div>
				</div>
				<div class="card-footer">
					<button type="submit" class="btn btn-sm btn-success"><i class="fa fa-dot-circle-o"></i> Save changes</button>
					<button type="button" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./form.ts"></script>