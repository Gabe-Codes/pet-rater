const editToggle = document.getElementById('editToggle');
const edit = document.getElementById('edit');
edit.style.display = 'none';

editToggle.addEventListener('click', e => {
	if (edit.style.display === 'none') edit.style.display = 'block';
	else edit.style.display = 'none';
});
