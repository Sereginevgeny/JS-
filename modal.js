const modals = () => {
	function bindModal(trigger, modal, close) {
		trigger.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}
			/// открытие окна
			modal.style.display = "block";
			document.body.style.overflow = "hidden";
		});
			/// закрытие окна
		close.addEventListener('click', () => {
			modal.style.display = "none";
			document.body.style.overflow = "";
		});

		/// Закрытие модального окна нажатием на любую область вне окна
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}, time);
	}

	const triggerBtn = document.querySelector('.xxx'), // Кнопка
			modalWindow = document.querySelector('.xxxx'), // Окно 
			closeWindow = document.querySelector('.xxxxx'); // Кнопка закрытия

	bindModal(triggerBtn, modalWindow, closeWindow);
	showModalByTime('.xx', 10000);
};