const toggleBtn = document.getElementById('editToggle');
const form = document.getElementById('edit');

form.style.display = 'none';

toggleBtn &&
	toggleBtn.addEventListener('click', e => {
		console.log(form)
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else form.style.display = 'none';
	});
