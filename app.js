var text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sint maxime rerum, magnam iusto ratione qui earum, repellendus dolores eum, voluptatum illum est repellat quae quas eligendi quaerat laboriosam! Ab?     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sint maxime rerum, magnam iusto ratione qui earum, repellendus dolores eum, voluptatum illum est repellat quae quas eligendi quaerat laboriosam! Ab? amet consectetur adipisicing elit. Beatae sint maxime rerum, magnam iusto ratione qui earum, repellendus dolores eum, voluptatum illum est repellat quae quas eligendi quaerat laboriosam! Ab?     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sint maxime rerum, magnam iusto ratione qui earum, repellendus dolores eum, voluptatum illum est repellat quae quas eligendi quaerat laboriosam! Ab?'
var text100 = text.slice(0,100)
var btn = document.getElementById('btn')
var span = document.getElementById('span')


function see() {
    if(btn.innerHTML == 'see less'){
        span.innerText = text100
        btn.innerHTML = 'see more'
    } 
    else{
      span.innerText = text
      btn.innerHTML = 'see less'
    }
}


