document.addEventListener('DOMContentLoaded', function () {
    //Number 1
    let firstBtn = document.createElement('button');
    firstBtn.innerHTML = 'Hello there!';
    let div1 = document.getElementById('1');
    div1.appendChild(firstBtn);
    firstBtn.addEventListener('click', function () {
        alert('Hello there!');
    });

    //Number 2
    let secBtn = document.getElementById('sec-btn');
    secBtn.addEventListener('click', function () {
        let text = document.getElementById('sec-text');
        alert('General Kenobi!');
    });

    //Number 3
    let colorDiv = document.getElementById('color-change');
    colorDiv.addEventListener('mouseover', function () {
        colorDiv.style.backgroundColor = 'orange';
        colorDiv.addEventListener('mouseleave', function () {
            colorDiv.style.backgroundColor = 'black';
        });
    });

    //Number 4
    //choosing a random color//
    function makeRandomColor() {
        let colors = ['red', 'black', 'brown', 'purple', 'pink', 'blue', 'orange', 'green', 'teal', 'yellow'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    }
    let colorText = document.createElement('p');
    colorText.innerHTML = 'This text will change color when you click it. Try it out!';
    div4 = document.getElementById('4');
    div4.appendChild(colorText);
    colorText.addEventListener('click', function () {
        colorText.style.color = makeRandomColor();
    });

    //Number 5

    let thirdBtn = document.createElement('button');
    let div5 = document.getElementById('5');
    thirdBtn.innerText = 'Add Span!';
    thirdBtn.style.marginBottom = 2 + 'em';
    div5.appendChild(thirdBtn);
    let emptyDiv = document.createElement('div');
    div5.appendChild(emptyDiv);

    thirdBtn.addEventListener('click', function () {
        let span = document.createElement('span');
        span.innerText = 'Phillip Langland';
        emptyDiv.appendChild(span);
    });

    //Number 6
    let friendsList = document.getElementById('friends-list');
    let friendBtn = document.getElementById('friends-btn');
    let friends = ['Katrina', 'Walt', 'Denis', 'Hank', 'Jacob', 'Martin', 'Eric', 'Andrew', 'Hayden', 'Reagan'];
    friendBtn.addEventListener('click', function () {
        for (i = 0; i < friends.length; i++) {
            let item = document.createElement('li');
            item.innerText = friends[i];
            friendsList.appendChild(item);
        }
    });
});