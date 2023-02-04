let form = document.getElementById('form-body')

//FORM
    
const section = document.createElement('section')
section.className = 'd-flex flex-column justify-content-center pe-5'
section.id = 'section-form'

//TITLE
const titleContainer = document.createElement('div')
titleContainer.id = 'titleContainer'
titleContainer.className = 'titulo d-flex flex-column align-items-center'

const title = document.createElement('h2')
title.id = 'title-form'
title.className = 'pt-2 pb-2 ms-5'
title.innerHTML = 'New Task Creation'

//FIRST ROW
const firstRowContainer = document.createElement('div')
firstRowContainer.className = 'd-flex justify-content-between flex-row-reverse pt-3'
firstRowContainer.id = 'firstRow'

//DUE DATE
const dateColumn = document.createElement('div')
dateColumn.className = 'col-md-3 dateCol'
dateColumn.id = 'duedateColumn'

const dueDateLabel = document.createElement('label')
dueDateLabel.id = 'dueDateLabel'
dueDateLabel.innerHTML = 'Due Date'
dueDateLabel.className = 'ps-2'

const duedateInput = document.createElement('input')
duedateInput.className = 'form-control border border-dark border-2'
duedateInput.type = 'date'
duedateInput.placeholder = 'Due Date'
duedateInput.id = 'date'

//LIST
const listColumn = document.createElement('div')
listColumn.className = 'col-md-3'
listColumn.id = 'listColumn'

const listLabel = document.createElement('label')
listLabel.id = 'listLabel'
listLabel.innerHTML = 'List'
listLabel.className = 'ps-2'

const listInput = document.createElement('input')
listInput.className = 'form-control border border-dark border-2'
listInput.type = 'text'
listInput.placeholder = 'List'
listInput.id = 'listInput'
listInput.autofocus = true

//SECOND ROW
const secondRow = document.createElement('div')
secondRow.className = 'd-flex flex-column align-items-center form-group ms-5 ps-5 me-5 pe-5 mt-4'
secondRow.id = 'secondRow'

//DESCRIPTION
const descriptionContainer = document.createElement('div')
descriptionContainer.className = 'col-8 col-md-9 ms-5 ps-5'

const descriptionLabel = document.createElement('label')
descriptionLabel.for = 'exampleFormControlTextarea1'
descriptionLabel.innerHTML = 'Description'
descriptionLabel.className = 'd-flex me-auto ps-2'

const descriptionInput = document.createElement('textarea')
descriptionInput.className = 'form-control border border-dark border-2 w-100'
descriptionInput.id = 'exampleFormControlTextarea1'
descriptionInput.rows = '3'
descriptionInput.placeholder = 'Description'

//BACK BUTTON
const backButtonContainer = document.createElement('div')
backButtonContainer.className = 'col-md-1 position-relative'
backButtonContainer.id = 'backButtonContainer'

const backButton = document.createElement('button')
backButton.id = 'backbutton'
backButton.className = 'position-absolute top-0 start-0 border-0 backButtonBg'
backButton.onclick = function(){window.history.back()}
backButton.value = 'Back'
backButton.type = 'button'

//SVG BACK ARROW
const imageBackButton = document.createElement('img')
imageBackButton.src = 'imagens/back-button.svg'
imageBackButton.width = 30
imageBackButton.height = 30

//MODAL DIV CONTAINER
const buttonContainer = document.createElement('div')
buttonContainer.className = 'd-flex justify-content-end  modal-button-container'

//modal button
const modalButton = document.createElement('button')
modalButton.type = 'button'
modalButton.className = 'btn btn-primary modal-button'
modalButton.setAttribute('data-bs-toggle','modal')
modalButton.setAttribute('data-bs-target','#exampleModal')
modalButton.innerHTML = 'Add Task'

//modal
const fade = document.createElement('div') 
fade.className = 'modal fade'
fade.id = 'exampleModal'
fade.setAttribute('tabindex','-1')
fade.setAttribute('aria-labelledby','exampleModalLabel')
fade.setAttribute('aria-hidden','true')

const dialog = document.createElement('div')
dialog.className = 'modal-dialog'

const content = document.createElement('div')
content.className = 'modal-content'

const header = document.createElement('div')
header.className = 'modal-header'

const modalButtonTitle = document.createElement('h5')
modalButtonTitle.className = 'modal-title'
modalButtonTitle.id = 'exampleModalLabel'
modalButtonTitle.innerHTML = 'Modal title'

const modalButtonClose = document.createElement('button')
modalButtonClose.className = 'btn-close'
modalButtonClose.type = 'button'
modalButtonClose.setAttribute('data-bs-dismiss','modal')
modalButtonClose.setAttribute('aria-label','Close')

const body = document.createElement('div')
body.className = 'modal-body'

const footer = document.createElement('div')
footer.className = 'modal-footer'

const modbuttonshut = document.createElement('button')
modbuttonshut.className = 'btn btn-secondary'
modbuttonshut.innerHTML = 'Close'
modbuttonshut.setAttribute('data-bs-dismiss','modal')
modbuttonshut.type = 'button'

const modButtonSaveChanges = document.createElement('button')
modButtonSaveChanges.className = 'btn btn-primary'
modButtonSaveChanges.innerHTML = 'Save Changes'
modButtonSaveChanges.type = 'submit'

const saveButton = document.createElement('input')
saveButton.className = 'btn btn-primary '
saveButton.type = 'submit'
saveButton.value = 'Save task'
saveButton.setAttribute('data-bs-dismiss','modal')


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const newTask = {
  duedate : new Date(duedateInput.value),
  description : descriptionInput.value,
  list : listInput.value,
  status : 'todo'
  }

  const init = {
    method: 'POST', 
    headers: {
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify(newTask)
  }
  //chamar API
  const response = await fetch('http://localhost:5000/api/task', init)

 descriptionInput.value = ''
 duedateInput.value = ''
 listInput.value = ''

})
     
section.append(firstRowContainer)
form.append(titleContainer)
titleContainer.append(title)
firstRowContainer.append(dateColumn)
dateColumn.append(dueDateLabel)
dateColumn.append(duedateInput)
firstRowContainer.append(listColumn)
listColumn.append(listLabel)
listColumn.append(listInput)
section.append(secondRow)
secondRow.append(descriptionContainer)
descriptionContainer.append(descriptionLabel)
descriptionContainer.append(descriptionInput)
buttonContainer.append(modalButton)
buttonContainer.append(fade)
fade.append(dialog)
dialog.append(content)  
content.append(header)
header.append(modalButtonTitle)
header.append(modalButtonClose)
content.append(body)
content.append(footer)
footer.append(modbuttonshut)
footer.append(saveButton)
firstRowContainer.append(backButtonContainer)
backButtonContainer.append(backButton)
backButton.append(imageBackButton)
form.append(section)
form.append(buttonContainer)

