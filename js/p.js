$(document).ready(function() {
	$(".thumb").bind("click", function(event) {
		var conId = $(this).attr("id") + "Con";
		$(".imgDiv>div").hide();
		$("#" + conId).show();
		
		$(".thumb").removeClass("active");
		$(this).addClass("active");
	});
});