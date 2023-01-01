document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementsByTagName('body')[0]

    const url = new URL(window.location.href)
    const searchParams = url.searchParams

    if (!searchParams.has('date') || !searchParams.has('name')) {
        const h2 = document.createElement('h2')
        h2.innerText = 'How to use this website?'
        const h3 = document.createElement('h3')
        const example = `${url.origin}?name=shubham&date=MM-DD${url.pathname}`
        h3.innerText = `
            ${example}
            ${example}&color=pink
        `
        document.body.appendChild(h2)
        document.body.appendChild(h3)
        return;
    }

    let date, DD, MM, name

    date = searchParams.get('date')
    DD = date.split('-')[0]
    MM = Number(date.split('-')[1]) - 1 // Month index starts from 0

    const birthdayCount = document.createElement('h1');
    const caption = document.createElement('h2');
    const today = new Date();
    const currentYear = today.getFullYear()

    let endDate = new Date(currentYear, MM, DD, 0, 0, 0);
    let difference = endDate - today

    while (difference < -(1000 * 3600 * 24)) {
        endDate = new Date(currentYear + 1, MM, DD, 0, 0, 0)
        difference = endDate - today
    }

    const days = parseInt(difference / (1000 * 3600 * 24));
    birthdayCount.innerHTML = days;

    name = searchParams.get('name')
    caption.innerHTML = `days to go ${name}!`

    if (days === 0) {
        birthdayCount.innerHTML = '';
        caption.innerHTML = `happy birthday ${name}!`;
    }

    if (searchParams.has('color')) {
        const userBackgroundColor = searchParams.get('color')
        const backgroundColor = CSS.supports('color', userBackgroundColor) ? userBackgroundColor : 'white'
        body.style.backgroundColor = backgroundColor
    }

    body.appendChild(birthdayCount);
    body.appendChild(caption);
    document.title = `${name}'s birthday countdown`

    if (searchParams.has('cleanup')) {
        history.replaceState('', '', window.location.origin);
    }
});