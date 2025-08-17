const addBookmark = (url, i) => {
    const container = document.getElementById('bookMarkContainer');
    const div = document.createElement('div')
    div.classList.add('w-9/12', 'mx-auto')
    const id = `item${i}`
    div.id = id
    div.innerHTML = `
   <div class="flex p-2 mt-1 border rounded justify-between">
   <div>
   <p id="urlText">${url}</p>
   </div>
   <div>
   <button onClick = "updateUrl('${url}')" class="btn btn-accent">Edit</button>
   <button onClick = "deleteUrl('${id}')" class="btn btn-error">Delete</button>
   </div>
   </div>
   `
    container.appendChild(div)
    document.getElementById('inputUrl').value = ""
}
let counter = 1;
document.getElementById('addBtn').addEventListener("click", () => {
    const url = document.getElementById('inputUrl').value;
    addBookmark(url, counter)
    counter++;
})

// const deleteSingleUrl = () => {
//     document.getElementById('bookMarkContainer').addEventListener('click', (event)=> {
//         event.target.parentNode.removeChild(event.target)
//     })
// }

const deleteUrl = (containerId) => {
    console.log(containerId)
        document.getElementById(containerId).innerHTML = ""
}

const updateUrl = (url) => {
    document.getElementById('editBox').value = url
    document.getElementById('my_modal_5').showModal()
    document.getElementById('updateButton').addEventListener('click', () => {
        document.getElementById('urlText').innerText = document.getElementById('editBox').value
    })
}