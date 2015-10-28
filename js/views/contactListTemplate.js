

function processData(data) {
  return data.map(function (item) {
    return `
      
      <div class='detail-list-item' data-detail-id="${item.objectId}">
      <p>${item.Name}</p>
     <img src="${item.Pics}">
      </div>
    `
    // console.log(this);
  }).join('');
}

function contactListTemplate (data) {
  return `
    
    <h2>Contact Details</h2>
    <div>${processData(data)}</div>
    


  `;
}



export default contactListTemplate;
 // li class='contact-list-item' data-contact-id="${item.objectId}"