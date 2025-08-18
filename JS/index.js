const addBookmark = (url) => {
    const container = document.getElementById('bookMarkContainer');
    const div = document.createElement('div')
    div.classList.add('w-9/12', 'mx-auto')
    // const id = `item${i}`
    // div.id = id
    div.innerHTML = `
   <div class="flex p-2 mt-1 border rounded justify-between">
   <div>
   <p class="url" id="urlText">${url}</p>
   </div>
   <div>
   <button class="update btn btn-accent">Edit</button>
   <button class="delete btn btn-error">Delete</button>
   </div>
   </div>
   `
    // Delete way - 1
    //    <button onClick = "deleteUrl('${id}')" class="btn btn-error">Delete</button>
    
    container.appendChild(div)
    document.getElementById('inputUrl').value = ""
    deleteByQuerySelector(div)
    updateUrl(div)
    
}

// Delete Way - 1
// let counter = 1;
// document.getElementById('addBtn').addEventListener("click", () => {
//     const url = document.getElementById('inputUrl').value;
//     addBookmark(url, counter)
//     counter++;
// })

document.getElementById('addBtn').addEventListener("click", () => {
    const url = document.getElementById('inputUrl').value;
    if (isUrlValid(url)) {
        addBookmark(url)
    }
    else {
        alert("Wrong URL!!!")
    }
})

const deleteByQuerySelector = (item) => {
    item.querySelector('.delete').addEventListener('click', (event) => {
        item.remove()
    })
}

const deleteUrl = (containerId) => {
    // way - 1
    // document.getElementById(containerId).innerHTML = ""

    // way-2
    const parent = document.getElementById(containerId)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const updateUrl = (item) => {
    const url = item.querySelector('.url')
    const updateBtn = item.querySelector('.update')
    console.log(url, updateBtn)

    updateBtn.addEventListener('click', () => {
        let newUrl = prompt("Edit the URL:", url.innerHTML)
        if (isUrlValid(newUrl)) {
            url.innerHTML = newUrl
        }
        else {
            alert("Wrong URL!!!")
        }
    })
}

function isUrlValid(url) {
    const pattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return pattern.test(url);
}