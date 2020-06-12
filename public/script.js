/* eslint-disable camelcase */
// when we load page (DOMContentLoaded)...

let star
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('rating_spans') !== null) {
    star = document.querySelectorAll('input')

    const user_id = document.getElementById('rating_spans').getAttribute('data-user-id')
    const movie_id = document.getElementById('rating_spans').getAttribute('data-movie-id')
    const serverUrl = 'http://localhost:3000/rating'
    const method = 'POST'
    const headers = { 'Content-Type': 'application/json' }

    //  user_id ,movie_id and value
    for (let i = 0; i < star.length; i++) {
      star[i].addEventListener('click', (e) => {
        console.log(e.target)
        let rate = e.target.getAttribute('value')
        //  sending data
        fetch(serverUrl, {
          method,
          headers,
          body: JSON.stringify({ user_id, movie_id, rate }),
        }).then(() => {
          window.location.reload()
        })
      })
    }
  }
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  const getVal = (sel) => {
    for (let i = 0; i < sel.length; i++) {
      if (sel[i].value === true) return sel[i].value
    }
  }

  const inputsearch = document.getElementById('search')
  const searchBtn = document.getElementById('search-btn')
  // const select = document.getElementById('select')

  inputsearch.addEventListener('keyup', (e) => {
    searchBtn.setAttribute('href', `/searchresults?title=${e.target.value}`)
  })
  // select.addEventListener('change', (e) => {
  //   let selectVal = getVal(select)
  //   console.log(selectVal)

  //   // searchBtn.setAttribute('href', `/searchresults?title=${inputsearch.value}&genre=${selectVal}`)
  // })
})
