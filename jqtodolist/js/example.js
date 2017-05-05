(function(){
	var $todoForm=$('#todoForm'),
		$todoInput=$('#todoInput'),
		$todoCount=$('#todoCount'),
		$todoList=$('#todoList');
	// count函数需要单独列出来，因为增加和删除时都要计算数量.
	function count(){
		var len=$todoList.children().length;
		$todoCount.html(len>0?'现有'+ len + '项todo list' :' ')
	}
	$todoForm.submit(function(event) {
		event.preventDefault();//防止提交刷新
		var inputValue=$todoInput.val();
		$todoList.append('<li>'+inputValue+'<button class="delete">remove</button>'+'</li>');
		$todoInput.val(' ');
		count();
	})
	//不能使用$('.delete').click;因为渲染完成时没有该值；
	$todoList.on('click','.delete',function(e){
		$(this).parent().remove();
		count();
	})
}())