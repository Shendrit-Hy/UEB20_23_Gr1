function ifLogIn() {
  if (localStorage.getItem('logged')){
    const signButton = document.getElementById('signup-and-login')
    const logout = document.getElementById('logout')
    const signName = document.getElementById('name-of-user')
    signName.innerHTML = localStorage.getItem('userName')
    signButton.style.display = 'none';
    logout.style.display = 'flex'
  }
  else{
    const logout = document.getElementById('logout')
    logout.style.display = 'none'
    console.log("Asdasdasd")
  }
}

function signOut(){
  localStorage.removeItem('logged')
  window.location.href = 'home.html'
}

