const guest = document.getElementById('guest');
const login = document.getElementById('login');

login.addEventListener('mouseover', e => {
	login.style.backgroundColor = '#6eb19e';
	login.style.textDecoration = 'underline';
});

login.addEventListener('mouseout', e => {
	login.style.backgroundColor = '#3f977e';
	login.style.textDecoration = 'none';
});

login.addEventListener('mouseover', e => {
	guest.style.visibility = 'visible';
});

login.addEventListener('mouseout', e => {
	guest.style.visibility = 'hidden';
});

guest.addEventListener('mouseover', e => {
	guest.style.visibility = 'visible';
});

guest.addEventListener('mouseout', e => {
	guest.style.visibility = 'hidden';
});

guest.addEventListener('mouseover', e => {
	login.style.backgroundColor = '#6eb19e';
});

guest.addEventListener('mouseout', e => {
	login.style.backgroundColor = '#3f977e';
});