

function individualDetailTemplate(data) {
  

  return `
  <div class="indivDetails">
    <h2>Contact Info</h2>
   
    
    <div><i class="fa fa-male"></i>&nbsp${data.Name}</div>
    
    <div><i class="fa fa-envelope-o"></i>&nbsp${data.Email}</div>
    
    <div><i class="fa fa-mobile"></i>&nbsp${data.Phone}</div>
   
    <div><i class="fa fa-map-marker"></i>&nbsp${data.Address}</div>
    <br>
    <div><img class="indivPic" src="${data.Pics}"></div>
  </div>
  `;
}

export default individualDetailTemplate;