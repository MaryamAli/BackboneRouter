

function individualDetailTemplate(data) {
  

  return `
  <div class="indivDetails">
    <h2>Contact Info</h2>
    //Name
    <div><i class="fa fa-male"></i>${data.Name}</div>
    // Email
    <div><i class="fa fa-envelope-o"></i>${data.Email}</div>
    // Phone
    <div><i class="fa fa-mobile"></i>${data.Phone}</div>
    // Address
    <div><i class="fa fa-map-marker"></i>${data.Address}</div>
    <div><img class="indivPic" src="${data.Pics}"></div>
  </div>
  `;
}

export default individualDetailTemplate;