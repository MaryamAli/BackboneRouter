

function proccessData(data) {
  return data.map(function (item) {
    return `
      // <li>${item.title}</li>
      <div class='contact-list-item' data-contact-id="${item.objectId}">
      <img src="${item.Pics}">
      <p>{item.Name}</p>
     
      </div>
    `;
  }).join('');
}

function contactListTemplate (data) {
  return `
    
    <h2>Contact Details</h2>
    <ul>${proccessData(data)}</ul>
    


  `;
}



export default contactListTemplate;
 // li class='contact-list-item' data-contact-id="${item.objectId}"