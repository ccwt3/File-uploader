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

//* ---------------------------------

const foldersForm = document.querySelector(".sidebar__folders");

foldersForm.addEventListener("click", async (event) => {
  const button = event.target;

  if (button.tagName === "BUTTON" && button.className === "folder__button") {
    window.location.href = `/folder/${button.value}`;
  } else if (button.tagName === "BUTTON" && button.className === "dropdown__button") {
    foldersForm.action = `/?action=${button.value}&folder=${button.dataset.folderid}`;
  } else if (button.tagName === "BUTTON" && button.className === "sidebar__dropbtn") {
    const dropMenu = document.querySelector(`.data_${button.dataset.drop_id}`);
    dropMenu.classList.toggle("dropdown_active")
  }
});