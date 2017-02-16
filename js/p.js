$(document).ready(function() {
	$(".thumb").bind("click", function(event) {
		var conId = $(this).attr("id") + "Con";
		$(".imgDiv>div").hide();
		$("#" + conId).show();
		
		$(".thumb").removeClass("active");
		$(this).addClass("active");
	});
	
	bindClickDmVideo();
});

function bindClickDmVideo() {
	$("#dmVideo").bind("click", function(event) {
		var url = "/txt/";

		// 开始Ajax请求
		$.post(url, {
			jsonData : null
		}, function(data) {
		});
	});
}