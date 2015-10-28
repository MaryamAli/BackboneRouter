

function detailTemplate(data) {
  

  return `
  <div>
    <h2>Contact</h2>
    <div>${data.Name}</div>
    <div>${data.Email}</div>
    <div>${data.Phone}</div>
    <div>${data.Address}</div>
    <div><img src="${data.Pics}"></div>
  </div>`;
}

export default detailTemplate;