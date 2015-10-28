

function proccessData(data) {
  return data.map(function (item) {
    return `
      // <li>${item.title}</li>
      <div class='contact-list-item' data-contact-id="${item.objectId}">
      <img src="${item.Pics}">
      <p>${item.Name}</p>
     
      </div>
    `;
  }).join('');
}

function contactListTemplate (data) {
  return `
    
    <h2>Contact Details</h2>
    <div>${proccessData(data)}</div>
    


  `;
}



export default contactListTemplate;
 // li class='contact-list-item' data-contact-id="${item.objectId}"