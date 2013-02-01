$(function () {
  $('.completeButton').click(function (completed) {
  	console.log(completed.target.id);
    $.post("/orders/complete", {1:completed.target.id}, function(response){
    		console.log(response);
    		$('li#'+completed.target.id).remove();
    	});
    });
    return false;
});