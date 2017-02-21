import $ from 'jquery';
import Backbone from 'backbone';

//--------------------------------------------------------------------------
//TASK :  Create form validation based on the criteria asked below.
//        
//        For inputs that don't meet the criteria, you will need 
//        to apply a class of 'MG-bg_fail'
//
//        For inputs that are valid, you will apply a class of 'MG-bg_success'
//--------------------------------------------------------------------------

const FormView = Backbone.View.extend({
	el: '#app-container',
	events: {
		"submit #form-newuser" : "handleFormSubmit"
	},
	
	handleFormSubmit: function(evt){
		alert("/???/")
		evt.preventDefault()
		console.log('form submitted!')
	},

	
	
	_buildHtmlTemplate:function(){
		let htmlStr = `
		<h2>Form</h2>
		<form class="MG-grid MG-form-group" id="form-newuser">
		`
	   // (1) User name cannot be blank and must contain no spaces
		// ---------------------------------------
		htmlStr += `
			<div class="MG-md-6-of-12 MG-form-group__field">
				<label>Username</label>
				<input type="password" placeholder="Password"/>
				<p class="flash-msg MG-bg_fail ">Password cannot be blank</p>
			</div>
			<div class="MG-sm-12-of-12"><hr/></div>
		`
	   
		// (2) Password should match other password
		// ---------------------------------------
		htmlStr += `
			<div class="MG-md-6-of-12 MG-form-group__field">
				<label>Password</label>
				<input type="password" placeholder="Password"/>
				<p class="flash-msg MG-bg_success">YESSS</p>	
			</div>
			<div class="MG-md-6-of-12 MG-form-group__field">
				<label>Confirm Password</label>
				<input type="password" placeholder="Confirm Password"/>
			</div>
			<div class="MG-sm-12-of-12"><hr/></div>

		 `
	   
		// (3) Should be a number (no alphabetic characters)
		// ---------------------------------------
		htmlStr += `
			<div class="MG-md-6-of-12 MG-form-group__field">
				<label>Targeted Salary</label>
				<input type="text" placeholder="Password"/>
				<p class="flash-msg MG-bg_fail">Input field must contain a number</p>	
			</div>
		`

		
		// (4) One of the options should be selected
		// ---------------------------------------
		htmlStr += `
			<div class="MG-md-6-of-12 MG-form-group__field">
				<label>Your Gender</label>
				<label class="gendr" ><input type="radio" name="gender" value="male" class="MG-radio"/> Male</label>
				<label class="gendr" ><input type="radio" name="gender" value="female" class="MG-radio"/> Female</label>
				<label class="gendr" ><input type="radio" name="gender" value="other" class="MG-radio"/> Other</label>
				<p class="flash-msg MG-bg_success">YESSS</p>	
			</div>
			<div class="MG-sm-12-of-12"><hr/></div>
		`

		// (5) Clear all values on the form inputs if user clicks the .btn_reset button 
		// ---------------------------------------
		htmlStr += `
			<div class="MG-md-6-of-12 MG-form-group__field">
				<h6><input type="checkbox" name="termsAccepted" class="MG-checkbox"/> I confirm that I agree to the terms outlined above </h6>
				<p class="flash-msg MG-bg_success">YESSS</p>	
				<button class="MG-btn_primary" type="submit">Submit</button> 
				<button class="MG-btn_sm btn_reset">Reset</button>
			</div>
			
		</form>`
		return htmlStr
	},
	render: function(){
		this.el.innerHTML = this._buildHtmlTemplate();
	}
})

let formView = new FormView();
formView.render();