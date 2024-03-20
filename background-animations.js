document.addEventListener('DOMContentLoaded', function() {
	var background = document.getElementById('background');
	var numberOfMonitors = 10;

	for (var i = 0; i < numberOfMonitors; i++) {
		var monitor = document.createElement('div');
		monitor.className = 'monitor';

		var screen = document.createElement('div');
		screen.className = 'screen';

		monitor.appendChild(screen);
		background.appendChild(monitor);
	}

	var monitors = document.querySelectorAll('.monitor');
	var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

	monitors.forEach(function(monitor) {
		monitor.style.top = Math.random() * window.innerHeight / 2 + 'px';
		monitor.style.left = Math.random() * window.innerWidth + 'px';

		if (Math.random() < 0.5) {
			monitor.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
		}

		var animateMonitors = function() {
			monitor.style.top = Math.random() * window.innerHeight / 2 + 'px';
			monitor.style.left = Math.random() * window.innerWidth + 'px';

			if (Math.random() < 0.5) {
				monitor.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
			} else {
				monitor.style.transform = 'rotate(0deg)';
			}

			var screen = monitor.querySelector('.screen');
			screen.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		};

		setInterval(animateMonitors, 4000);
		animateMonitors();
	});
});