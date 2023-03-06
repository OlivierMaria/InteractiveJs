const linkElement = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]')


document.querySelector('.navbar').addEventListener('dblclick', function() {
  if (linkElement.disabled) {
    
    linkElement.disabled = false
  } else {
    
    linkElement.disabled = true
  }
})