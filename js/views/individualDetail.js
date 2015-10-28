

function individualDetailTemplate(data) {
  

  return `
  <div>
    <h2>Contact Info</h2>
    <div>${data.Name}</div>
    <div>${data.Email}</div>
    <div>${data.Phone}</div>
    <div>${data.Address}</div>
    <div><img src="${data.Pics}"></div>
  </div>
  `;
}

export default individualDetailTemplate;