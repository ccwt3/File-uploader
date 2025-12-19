const createFolder = document.querySelector(".dashboard__create_folder_form");
const openCreate = document.querySelector(".dashboard--create");
const closeCreate = document.querySelector(".dashboard__close_create_form");

const uploadFolder = document.querySelector(".dashboard__upload_form");
const openUpload = document.querySelector(".dashboard--upload");
const closeUpload = document.querySelector(".dashboard__close_upload_form");

openCreate.addEventListener("click", () => {
  createFolder.showModal();
});

closeCreate.addEventListener("click", () => {
  createFolder.close();
});

openUpload.addEventListener("click", () => {
  uploadFolder.showModal();
});

closeUpload.addEventListener("click", () => {
  uploadFolder.close();
});
