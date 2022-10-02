 
let addbutton = document.querySelector('#add-book')



async function getBooks () {
    let newId = 0;
    let response = await fetch('http://localhost:3001/listBooks')
    
    let data = await response.json();
    
    data.forEach(book => {
        if (book.id > new Id) {
            newId = book.id
        }
    })

   return newId + 1;
}
  
addbutton.addEventListener('click', async () => {
  let id = await assignId(); 
})

addbutton.addEventListener('click', () => {
let dataToSend = {
    id: id,
    title:document.querySelector('#add-title').value,
    year:document.querySelector('#add-year').value,
    description:document.querySelector('#add-description').value,
    quantity:document.querySelector('#add-quantity').value,
    imageURL:document.querySelector('#add-imageURL').value,
  }
  await fetch('http://localhost:3001/listBooks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })

  document.querySelector('#add-title').value = '',
  document.querySelector('#add-year').value = '',
  document.querySelector('#add-description').value = '',
  document.querySelector('#add-quantity').value = '',
  document.querySelector('#add-imageURL').value = '',

}) 