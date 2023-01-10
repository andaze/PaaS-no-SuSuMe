import multiDownload from 'multi-download';

let e = new Event('submit');

const download_form = document.querySelector('.download-form');

const buttons = document.querySelectorAll('.download-button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if(button.classList.contains('with-form')) {
            download_form.dispatchEvent(e);
        }
        const files = event.target.dataset.files.split(' ');
        multiDownload(files);
    });
})