let list = document.getElementById('table-body')
/*list.innerHTML = "OI"
const test = document.createElement('div')
test.id = 'teste-id'
list.append(test)
*/

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
      createdat.innerHTML = item.createdat

      const duedate = document.createElement('td')
      duedate.id = 'task-deadline'
      duedate.innerHTML = item.duedate

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

      const imageEditButton = document.createElement('img')
      imageEditButton.src = 'edit.svg'
      
      const deleteTask = document.createElement('td')
      deleteTask.id = 'task-delete'

      const deleteButton = document.createElement('button')
      deleteButton.id = 'delete-button'

      const imageDeleteButton = document.createElement('img')
      imageDeleteButton.src = 'delete.png'

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
    console.log('variavel',vari)
    })
    .catch(error => console.log(error))

    //BUTTON
    var url = "file:///C:/Users/marce/OneDrive/Documentos/projects/todo-list-front/form.html";
    var btn = document.querySelector("#btn");
    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
    btn.addEventListener('click', function() {
      openInNewTab(url);
    });