$(document).ready(function(){
			p = $('.blackout')
$('.recent-table>tbody>tr>td, .list-games__table>tbody>tr>td').click(function() {
    p.css({'opacity':'1', 'visibility':'visible'})
})
p.click(function(event) {
    e = event || window.event
    if (e.target == this) {
        $(p).css({'opacity':'0', 'visibility':'hidden'})
    }
})
$('.popup__close').click(function() {
    p.css({'opacity':'0', 'visibility':'hidden'})
})
		});

$(function(){
	$('th').click(function(){
		$(this).parent().nextUntil('tr:has(th)').toggle(500);
	});
});
