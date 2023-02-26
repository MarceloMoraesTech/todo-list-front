//TABLE BODY
let list = document.getElementById('table-body')


const responseTasks = fetch('http://localhost:5000/api/tasks')
    .then((res) => res.json())
    .then((data) => {
        var tasks = data
        console.log('tasks',tasks)

//DUEDATE FILTER
const filter = document.getElementById('duedate-filter')

const imagefilterButton = document.createElement('img')
imagefilterButton.src = 'imagens/filter.svg'
imagefilterButton.className = ' svg-config'


const filterButton = document.createElement('button')
filterButton.id = 'filter-button'
filterButton.className = 'border-0 ms-2 bg-white'


  
    const vari = tasks.map((item) => {
      const article = document.createElement('tr')
      article.id = 'table-row'

      const description = document.createElement('td')
      description.id = 'task-description'
      description.innerHTML = item.description

      const createdat = document.createElement('td')
      createdat.id = 'task-creation-date'
      createdat.innerHTML = new Date (item.createdat).toLocaleDateString('pt-br')

      const duedate = document.createElement('td')
      duedate.id = 'task-deadline'
      duedate.innerHTML = new Date (item.duedate).toLocaleDateString('pt-br')

      const status = document.createElement('td')
      status.id = 'task-status'
      status.innerHTML = item.status

      const taskList = document.createElement('td')
      taskList.id = 'task-list'
      taskList.innerHTML = item.list
      
      const edit = document.createElement('td')
      edit.id = 'task-edit'

      const editButton = document.createElement('button')
      editButton.id = 'edit-button'
      editButton.className = 'border-0 bg-white'

      const imageEditButton = document.createElement('img')
      imageEditButton.src = 'imagens/edit.svg'
      
      const deleteTask = document.createElement('td')
      deleteTask.id = 'task-delete'

      const deleteButton = document.createElement('button')
      deleteButton.id = 'delete-button'
      deleteButton.className = 'btn border-0 bg-white'
      deleteButton.type = 'button'
      deleteButton.setAttribute('data-bs-toggle','modal')
      deleteButton.setAttribute('data-bs-target','#exampleModal')

      const imageDeleteButton = document.createElement('img')
      imageDeleteButton.src = 'imagens/delete.svg'
      imageDeleteButton.className = 'del-img'

      //MODAL DIV CONTAINER
      const buttonContainer = document.createElement('div')
      buttonContainer.className = 'd-flex justify-content-end  modal-button-container'

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
      content.className = 'modal-content backButtonBg'

      const header = document.createElement('div')
      header.className = 'modal-header border-0'

      const modalButtonTitle = document.createElement('h5')
      modalButtonTitle.className = 'modal-title'
      modalButtonTitle.id = 'exampleModalLabel'
      modalButtonTitle.innerHTML = 'Are you sure you want to delete this task'

      const modalButtonClose = document.createElement('button')
      modalButtonClose.className = 'btn-close'
      modalButtonClose.type = 'button'
      modalButtonClose.setAttribute('data-bs-dismiss','modal')
      modalButtonClose.setAttribute('aria-label','Close')

      const body = document.createElement('div')
      body.className = 'modal-body'

      const footer = document.createElement('div')
      footer.className = 'modal-footer border-0'

      const modbuttonshut = document.createElement('button')
      modbuttonshut.className = 'btn btn-secondary'
      modbuttonshut.innerHTML = 'Cancel'
      modbuttonshut.setAttribute('data-bs-dismiss','modal')
      modbuttonshut.type = 'button'


      const taskDeleteButton = document.createElement('input')
      taskDeleteButton.className = 'btn btn-danger '
      taskDeleteButton.type = 'submit'
      taskDeleteButton.value = 'Delete'
      taskDeleteButton.setAttribute('data-bs-dismiss','modal')


        taskDeleteButton.addEventListener('click', async (event)=>{
          try {     
            console.log('http://localhost:5000/api/tasks/'+item.id)
            const init = {
              method: 'DELETE', 
              headers: {
                "Content-Type" : 'application/json'
              },
            }    
            const response = await fetch('http://localhost:5000/api/tasks/'+item.id, init)
            console.log('PASSOU POR AQUI',response,event)
            window.location.reload()
          } catch (error) { console.log('ERROR-DELETE',error)}

        })
      
      article.append(description)
      article.append(createdat)
      article.append(duedate)
      article.append(status)
      article.append(taskList)
      article.append(edit)
      edit.append(editButton)
      deleteTask.append(deleteButton)
      editButton.append(imageEditButton)
      deleteButton.append(imageDeleteButton)
      list.append(article)
      article.append(buttonContainer)
      buttonContainer.append(deleteTask)
      filter.append(filterButton)
      filterButton.append(imagefilterButton)
      
      //MODAL
      buttonContainer.append(fade)
      fade.append(dialog)
      dialog.append(content)  
      content.append(header)
      header.append(modalButtonTitle)
      header.append(modalButtonClose)
      content.append(body)
      content.append(footer)
      footer.append(modbuttonshut)
      footer.append(taskDeleteButton)

    })

    })