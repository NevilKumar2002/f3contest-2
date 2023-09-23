const signUpForm = document.getElementById("signup-form");

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirm_password").value;

  if (password != confirmpassword) {
    alert("Please make sure passwords should be same");
  }

  if (password === confirmpassword) {
    const accessToken = generateAccessToken();

    alert("Sign up successful");
    localStorage.setItem("name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("Acess Token", accessToken);
     profilePage();
   
     
  }
});

function generateAccessToken() {
  const tokenArray = new Uint8Array(16);
  window.crypto.getRandomValues(tokenArray);
  return Array.from(tokenArray, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
  
}


const container1 = document.getElementById("container-1");
const signup = document.getElementById("signup-container");

function profilePage(){

// const logout = document.getElementById("logout-btn");
  let name1 = localStorage.getItem("name");
  let email1 = localStorage.getItem("Email");
  let password1 = localStorage.getItem("Password");
  let Token = localStorage.getItem("Acess Token");
  console.log(name1, email1, password1, Token);
  container1.style.display = "none";

 
    let ProfilePage = document.createElement("div");
    ProfilePage.className = "signup-container";
    ProfilePage.innerHTML = `<h3>Sign Up Sucessful</h3>
        <div class="container-2">
            <h2 class="profile-heading">Profile</h2>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="profile-image" class="profile-image">
            <p class="profile-heading">Full Name:${name1}</p>
            <p class="profile-heading">Email: ${email1}</p>
            <p class="profile-heading">Password :${password1}</p>
            <p class="profile-heading">Token :${Token}</p>
            <button class="profile-button" id="logout-btn" onclick="back()">Log Out</button>
    
        </div>`;

    signup.append(ProfilePage);
   
}



function back(){

  localStorage.removeItem("name");
   localStorage.removeItem("Email");
   localStorage.removeItem("Password");
   localStorage.removeItem("Acess Token");
   signup.style.display="none";
   container1.style.display="block";
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("confirm_password").value="";
     console.log("deletion sucessful")
}
  


