document.addEventListener('DOMContentLoaded', () => {
    const birthdayCount = document.createElement('h1');
    const caption = document.createElement('h2');
    const today = new Date();
    const endDate = new Date(2021, 06, 3, 0, 0, 0);
    const difference = endDate - today;
    const days =  parseInt(difference / (1000 * 3600 * 24));
    birthdayCount.innerHTML = days;
    caption.innerHTML = 'days to go!';
    if(days === 0) {
        birthdayCount.innerHTML = '';
        caption.innerHTML = 'Happy Birthday Saanvi!';
    }
    document.body.appendChild(birthdayCount);
    document.body.appendChild(caption);
});