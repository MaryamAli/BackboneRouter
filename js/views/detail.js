

function proccessData(data) {
  return data.map(function (item) {
    return `
      <li>${item.title}</li>
    `
  }).join('');
}

function detailTemplate (data) {
  return `
  <h2>Contact Details</h2>
  <ul>${proccessData(data)}</ul>
  `;
}



export default detailTemplate;