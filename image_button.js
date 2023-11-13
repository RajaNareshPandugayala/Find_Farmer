// Get references to the buttons and the image/message elements
const start01Button = document.querySelector('.start01_image_button');
const start02Button = document.querySelector('.start02_image_button');
const start03Button = document.querySelector('.start03_image_button');

const start01Image = document.querySelector('.start01_image');
const start02Image = document.querySelector('.start02_image');
const start03Image = document.querySelector('.start03_image');

const start01Message = document.querySelector('.start01_image_massage');
const start02Message = document.querySelector('.start02_image_massage');
const start03Message = document.querySelector('.start03_image_massage');


start01Image.style.display = 'block';
start01Message.style.display = 'block';
start02Image.style.display = 'none';
start02Message.style.display = 'none';
start03Image.style.display = 'none';
start03Message.style.display = 'none';

start01Button.style.backgroundColor = '#54BCBD';
start01Button.style.color = '#54BCBD';
start01Button.style.border = '2px solid #54BCBD';


// Add click event listeners to the buttons
start01Button.addEventListener('click', () => {
    start01Image.style.display = 'block';
    start01Message.style.display = 'block';
    start02Image.style.display = 'none';
    start02Message.style.display = 'none';
    start03Image.style.display = 'none';
    start03Message.style.display = 'none';

    start01Button.style.backgroundColor = '#54BCBD';
    start01Button.style.color = '#54BCBD';
    start01Button.style.border = '2px solid #54BCBD';
    start02Button.style.backgroundColor = 'gray';
    start02Button.style.color = 'gray';
    start02Button.style.border = '2px solid gray';
    start03Button.style.backgroundColor = 'gray';
    start03Button.style.color = 'gray';
    start03Button.style.border = '2px solid gray';
});

start02Button.addEventListener('click', () => {
    start01Image.style.display = 'none';
    start01Message.style.display = 'none';
    start02Image.style.display = 'block';
    start02Message.style.display = 'block';
    start03Image.style.display = 'none';
    start03Message.style.display = 'none';

    start01Button.style.backgroundColor = 'gray';
    start01Button.style.color = 'gray';
    start01Button.style.border = '2px solid gray';
    start02Button.style.backgroundColor = '#54BCBD';
    start02Button.style.color = '#54BCBD';
    start02Button.style.border = '2px solid #54BCBD';
    start03Button.style.backgroundColor = 'gray';
    start03Button.style.color = 'gray';
    start03Button.style.border = '2px solid gray';
});

start03Button.addEventListener('click', () => {
    start01Image.style.display = 'none';
    start01Message.style.display = 'none';
    start02Image.style.display = 'none';
    start02Message.style.display = 'none';
    start03Image.style.display = 'block';
    start03Message.style.display = 'block';


    start01Button.style.backgroundColor = 'gray';
    start01Button.style.color = 'gray';
    start01Button.style.border = '2px solid gray';
    start02Button.style.backgroundColor = 'gray';
    start02Button.style.color = 'gray';
    start02Button.style.border = '2px solid gray';
    start03Button.style.backgroundColor = '#54BCBD';
    start03Button.style.color = '#54BCBD';
    start03Button.style.border = '2px solid #54BCBD';

});
