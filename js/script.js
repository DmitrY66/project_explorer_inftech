const sectionTop = document.querySelector('.section-top');
const ulAsideLeft = document.querySelector('.ul-aside-left');
const asideRightContent = document.querySelector('.aside-right-content');
const modalFolder = document.querySelector('.modal-folder');
const modalDeleteFolder = document.querySelector('.modal-delete-folder');
const modalRenameFolder = document.querySelector('.modal-rename-folder');
const modalUploadFile = document.querySelector('.modal-upload-file');
const modalDownloadFile = document.querySelector('.modal-download-file');
const modDownlFile = document.getElementById('mod-downl-file');


const createFolder = () => {
  let inputCreateValue = modalFolder.children[0].children[1].value;

  if (inputCreateValue != '') {
    const ulCreatFold = document.createElement('a');
    ulCreatFold.id = inputCreateValue.replace(/\s/g, '');
    ulCreatFold.innerHTML = `
    <img src="./img/folder2.png" width="22px" height="auto" alt="">
    <ul>${inputCreateValue}</ul>
    `;
    ulAsideLeft.appendChild(ulCreatFold);
  }

  modalFolder.style.cssText = `
    left: -100%;
  `;
};

const deleteFolder = () => {
  let inputDeleteValue = modalDeleteFolder.children[0].children[1].value;

  inputDeleteValue = inputDeleteValue.replace(/\s/g, '');

  if (inputDeleteValue != '' && document.getElementById(inputDeleteValue)) {
    let deletedFolder = document.getElementById(inputDeleteValue);
    deletedFolder.remove();
  }

  modalDeleteFolder.style.cssText = `
    left: -100%;
  `;
};

const renameFolder = () => {
  let inputRenameValue = modalRenameFolder.children[0].children[1].value;
  let inputRename2Value = modalRenameFolder.children[0].children[3].value;

  inputRenameValue = inputRenameValue.replace(/\s/g, '');

  if (inputRenameValue != ''
    && inputRename2Value != ''
    && document.getElementById(inputRenameValue)) {
    let renamedFolder = document.getElementById(inputRenameValue);
    renamedFolder.children[1].textContent = `${inputRename2Value}`;
    renamedFolder.id = inputRename2Value.replace(/\s/g, '');
  }

  modalRenameFolder.style.cssText = `
    right: -100%;
  `;
};

const uploadFile = () => {
  if (document.querySelector('.preview')) {
    const preiew = document.querySelector('.preview');
    preiew.innerHTML = '';
  }
  modalUploadFile.style.cssText = `
    left: -100%;
  `;
};


let dir1_files = ['doc-icon.png', 'empty.docx', 'empty.pdf', 'empty.txt', 'folder1.png', 'folder2.png', 'html-icon.png', 'icon-a.png', 'icon-b.png', 'icon-c.png', 'icon-d.png'];

let dir2_files = ['icon-e.png', 'icon-f.png', 'icon-g.png', 'icon-h.png', 'icon-i.png', 'js-icon.png', 'pdf-icon.png', 'php-icon.png', 'text-icon.png', 'text-icon.psd', 'txt-icon.png'];


const createDir = (arrayFiles) => {
  const modDownlFile = document.getElementById('mod-downl-file');
  let dirName = modDownlFile.value;

  let dirTitle = document.createElement('h4');
  dirTitle.textContent = modDownlFile.value;
  asideRightContent.appendChild(dirTitle);

  arrayFiles.forEach(elem => {
    let link = document.createElement('li');
    link.className = "dir-fail";
    link.innerHTML = `<a href="/${dirName}/${elem}" download="">скачать ${elem}</a>`
    asideRightContent.appendChild(link);
  })
}


sectionTop.addEventListener('click', (e) => {
  const target = e.target;

  if (target.id == 'create-folder') {
    modalFolder.style.cssText = `
      left: 0;
    `;
    modalDeleteFolder.style.cssText = `
      left: -100%%;
    `;
    modalRenameFolder.style.cssText = `
      right: -100%;
    `;
    modalUploadFile.style.cssText = `
      left: -100%;
    `;
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }

  if (target.id == 'button-mod-fold') {
    createFolder();
  }

  if (target.id == 'delete-folder') {
    modalDeleteFolder.style.cssText = `
      left: 10%;
    `;
    modalRenameFolder.style.cssText = `
      right: -100%;
    `;
    modalUploadFile.style.cssText = `
      left: -100%;
    `;
    modalFolder.style.cssText = `
      left: -100%;
    `;
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }

  if (target.id == 'button-mod-delete-fold') {
    deleteFolder();
  }

  if (target.id == 'rename-folder') {
    modalRenameFolder.style.cssText = `
      right: 0;
    `;
    modalUploadFile.style.cssText = `
      left: -100%;
    `;
    modalFolder.style.cssText = `
      left: -100%;
    `;
    modalDeleteFolder.style.cssText = `
      left: -100%;
    `;
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }

  if (target.id == 'button-mod-rename-fold') {
    renameFolder();
  }

  if (target.id == 'upload-file') {
    modalUploadFile.style.cssText = `
    left: 16%;
  `;
    modalFolder.style.cssText = `
      left: -100%;
    `;
    modalDeleteFolder.style.cssText = `
      left: -100%;
    `;
    modalRenameFolder.style.cssText = `
      right: -100;
    `;
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }

  if (target.id == 'btn-upload-file') {
    e.preventDefault();
    uploadFile();
  }


  if (target.id == 'download-file') {
    modalDownloadFile.style.cssText = `
      right: 42%;
    `;
    modalFolder.style.cssText = `
      left: -100%;
    `;
    modalDeleteFolder.style.cssText = `
      left: -100%;
    `;
    modalRenameFolder.style.cssText = `
      right: -100;
    `;
    modalUploadFile.style.cssText = `
      left: -100%;
    `;
  }


});


modDownlFile.addEventListener('change', () => {
  if(modDownlFile.value === 'dir0') {
    asideRightContent.innerHTML = '';
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }
  if(modDownlFile.value === 'dir1') {
    asideRightContent.innerHTML = '';
    createDir(dir1_files);
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }
  if(modDownlFile.value === 'dir2') {
    asideRightContent.innerHTML = '';
    createDir(dir2_files);
    modalDownloadFile.style.cssText = `
      right: -100%;
    `;
  }
});
