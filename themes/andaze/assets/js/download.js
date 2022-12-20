import multiDownload from 'multi-download';

const buttons = document.querySelectorAll('.download-button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        const files = event.target.dataset.files.split(' ');
        multiDownload(files);
    });
})