let list = document.getElementById('table-body')

//TABLE

fetch('http://localhost:5000/api/tasks')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

    const vari = data.map((item) => {
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
      deleteButton.className = 'border-0 bg-white'
      deleteButton.type = 'submit'

      const imageDeleteButton = document.createElement('img')
      imageDeleteButton.src = 'imagens/delete.svg'
      imageDeleteButton.className = 'del-img'


      deleteButton.addEventListener('click', async (event) => {
        var clickedElement = event.target;
        if (clickedElement.classList.contains('del-img')){
          var taskId = item.id
          console.log(taskId)
        } else {
          console.log('not ok',clickedElement)
        }

        const init = {
          method: 'DELETE', 
          headers: {
            "Content-Type" : 'application/json'
          },
        }
        //chamar API
        const response = await fetch('http://localhost:5000/api/tasks/'+taskId, init)

        window.location.reload()
  
        console.log('sucesso')
    
      })

      article.append(description)
      article.append(createdat)
      article.append(duedate)
      article.append(status)
      article.append(taskList)
      article.append(edit)
      article.append(deleteTask)
      edit.append(editButton)
      deleteTask.append(deleteButton)
      editButton.append(imageEditButton)
      deleteButton.append(imageDeleteButton)
      list.append(article)

    })

   

    })
    .catch(error => console.log(error))

    
    // deleteButton.addEventListener('click', async (event) => {
    //   event.preventDefault()
    //   const init = {
    //     method: 'DELETE', 
    //     headers: {
    //       "Content-Type" : 'application/json'
    //     },
    //   }
    //   //chamar API
    //   const response = await fetch('http://localhost:5000/api/tasks/43065bdb-4c14-432d-91f2-ce8d707a4543', init)

    //   console.log('sucesso')
  
    // })