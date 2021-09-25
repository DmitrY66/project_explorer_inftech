// const modalUploadFile = document.querySelector('.modal-upload-file');
const inputUploadFile = document.getElementById('input-upload-file');
const btnUploadOpen = document.getElementById('btn-upload-open');
const btnUploadFile = document.getElementById('btn-upload-file');

const preiew = document.createElement('div');
preiew.classList.add('preview');
modalUploadFile.appendChild(preiew);

const upload = () => {
  let files = [];

  const triggerInput = () => inputUploadFile.click();
  btnUploadOpen.addEventListener('click', (e) => {
    e.preventDefault();
    triggerInput();
  });

  const changeHandler = (e) => {
    if (!e.target.files.length) {
      return
    }

    files = Array.from(e.target.files);

    preiew.innerHTML = '';

    files.forEach(file => {

      const reader = new FileReader();

      reader.onload = (ev) => {

        // console.log('files: ', file.type);
        // console.log(ev);
        // console.log(ev.target.result);

        if (file.type.match('image')) {
          preiew.insertAdjacentHTML('afterbegin', `
            <div class="preview-img">
            <div class="preview-remove">&times;</div>
            <img src="${ev.target.result}" alt="" />
            </div>
          `);
        } else {
          preiew.insertAdjacentHTML('afterbegin', `
            <div class="preview-img">
            <div class="preview-remove">&times;</div>
            <img src="./img/text-icon.png" alt="" />
            </div>
          `);
        }

        const previewRemove = document.querySelector('.preview-remove');
        previewRemove.addEventListener('click', () => {
          preiew.innerHTML = '';
        });

      };

      reader.readAsDataURL(file);
    })
  };

  inputUploadFile.addEventListener('change', changeHandler);
}
upload();
