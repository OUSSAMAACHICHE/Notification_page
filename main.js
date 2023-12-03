// Dom element
let notifications = document.querySelectorAll('.notification');


// loop through all notifications
notifications.forEach(notify => {

	notify.addEventListener('click', (e) => {
		// remove active class from notification
		e.currentTarget.classList.remove('active');
		// remmove red dot notification
		e.currentTarget.querySelector('.red-dot').style.display = 'none';
		// trigger notification count function
		ntfCount();
	})
})
function ntfCount() {

	let countNtf = document.querySelectorAll('.active').length;

	document.getElementById('notify-count').textContent = countNtf;

}
ntfCount();

// mark all as read
document.getElementById('all-read').addEventListener('click', function() {
	notifications.forEach(ntf => {
		ntf.classList.remove('active');
		ntf.querySelector('.red-dot').style.display = 'none';

		ntfCount();
	})
})