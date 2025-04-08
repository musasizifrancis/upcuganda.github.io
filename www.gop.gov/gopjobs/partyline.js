$(function(){
	 $("input[data-trigger='step-next']").click(function(){
		$("div[data-step='"+$(this).data("step-current")+"']").children().not("h3").slideUp();
		$("div[data-step='"+$(this).data("step-current")+"']").addClass("lighter");
		$("div[data-step='"+$(this).data("step-next")+"']").removeClass("lighter");
		$("div[data-step='"+$(this).data("step-next")+"']").toggleClass("collapsed");
	 });
	 $(".dashboard-summary.collapsable:not(.disabled) h3").click(function(){	 
  	  $(this).parent().toggleClass("lighter");	
	 });
	 $("[data-trigger='first-step']").click(function(){
		$("#data").show();
		$("[data-trigger='first-step']").slideUp();
		$.scrollTo("#data");
		return false; 
	 });
	 $("input[name='q_role']").change(function(){
		 
	 });
	 $("select[name='q_current']").change(function(){
		 if($(this).val()!=""){
			$("tr[data-group='currentrole']").show();			 
		 }else{
			$("select[name='q_current_role']").val("");
			$("tr[data-group='currentrole']").hide();
		 }
	 });
	 $("input[name='q_role']").change(function(){
	   var role_len = $("input[name='q_role']:checked").length;
	   if(role_len == 3){
	     $("input[name='q_role']:not(:checked)").attr("disabled","true");
		 $("input[name='q_role']:not(:checked)").parent().addClass("lighter");
	   }else{
	     $("input[name='q_role']:not(:checked)").removeAttr("disabled");
		 $("input[name='q_role']:not(:checked)").parent().removeClass("lighter");
	   }
	 });
	 $("input[name='q_issue']").change(function(){
	   var iss_len = $("input[name='q_issue']:checked").length;
	   if(iss_len == 4){
	     $("input[name='q_issue']:not(:checked)").attr("disabled","true");
		 $("input[name='q_issue']:not(:checked)").parent().addClass("lighter");
	   }else{
	     $("input[name='q_issue']:not(:checked)").removeAttr("disabled");
		 $("input[name='q_issue']:not(:checked)").parent().removeClass("lighter");
	   }
	 });
	 $(".add-state").click(function(){
		$(this).before('<div><select name="q_state" class="short" style="margin-top:10px;"><option value="">Select...</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="MP">Northern Mariana Islands</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select></div>'); 
		if($("select[name='q_state']").length == 4){
		  $(".add-state").hide();	
		}
	 });
	 $("form#data").submit(function(){
		$(".form-validation").hide();
		var role_total = $("form#data input[name='q_role']:checked").length;
	 	if(!validateEmail($("form#data input[name='q_pemail']").val()) && !validateEmail($("form#data input[name='q_hemail']").val()) ){
		  form_err_raise('email');
		  return false;
		}else if($("form#data select[name='q_edu_level']").val() == ""){
		  form_err_raise('edu');
		  return false;
		}else if(role_total < 1){
		  form_err_raise('role');
		  return false;
		}else{
		  pl_loadmodal("form-loading");
		  return;
		}
	 });
});
  function form_err_raise(error){
	if(error == "email"){
	  var error_text = "Please provide at least one valid email address."	
	  $("div[data-step='1']").removeClass("lighter").removeClass("collapsed").children('table').show();
	  $.scrollTo($(".dashboard-summary.collapsable.full[data-step='1']"),200);
	}else if(error == "role"){
	  var error_text = "Please select at least one desired role."
	  $("div[data-step='3']").removeClass("lighter").removeClass("collapsed").children('table').show();
	  $.scrollTo($(".dashboard-summary.collapsable.full[data-step='3']"),200);
	}else if(error == "edu"){
	  $("div[data-step='2']").removeClass("lighter").removeClass("collapsed").children('table').show();
	  var error_text = "Please select your highest level of education achieved."
	  $.scrollTo($(".dashboard-summary.collapsable.full[data-step='2']"),200);
	}
    $(".form-validation[data-validate='"+error+"']").fadeIn();
	$("#form-error-validation-text").text(error_text);
	pl_loadmodal("error-validation");
	$("form#data input[type=submit]").val("Upload Resume & Finish").attr("disabled",false);
  }
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }