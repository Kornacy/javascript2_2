(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const cw1_one = document.getElementById('cw1_one')
  const select = document.getElementById('select')
  const cw1_post = document.getElementById('cw1_post')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.textContent = "Loading...";
    setTimeout(() => {  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = "<ul>" + array.map(item => `<li>${item.title}<br>${item.body}</li>`).join('') + "</ul>";
      })
      }, 500);
  })
  cw1_one.addEventListener("click", function () {
    var selectedValue = select.value;
    answer.textContent = "Loading...";
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/' + selectedValue, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        answer.innerHTML = "<ul><li>" + data.title + "<br>" + data.body + "</li></ul>";
      })
      }, 500);
  })
  cw1_post.addEventListener("click", function () {
    const postData = {
      title: 'example title',
      body: 'example body example body example body',
      userId: 1
    };
    answer.textContent = "Processing...";
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        answer.innerHTML = "Dodano nowy post o ID = " + data.id;
      }
      ), 500;
    });
  })

  cw2.addEventListener("click", function () {
    answer.textContent = "Loading...";
    setTimeout(() => {  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = "<div class='post'>" + array.map(item => `<h3>${item.title}</h3><p>${item.body}</p>`).join('') + "</div>";
      })
      }, 500);
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
