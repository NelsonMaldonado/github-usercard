/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const mainAppend = document.querySelector(".cards");

function getUserGit(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      console.log(res);
      const userCard = gitCardMaker(res.data);
      console.log(userCard);
      mainAppend.appendChild(userCard);
    })
    .catch((err) => {
      console.error(err);
    });
}

// getUserGit("tetondan");
// getUserGit("NelsonMaldonado");
// getUserGit("dustinmyers");
// getUserGit("justsml");
// getUserGit("luishrd");
// getUserGit("bigknell");
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function gitCardMaker({
  avatar_url,
  name,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divCardInfo = document.createElement("div");
  divCardInfo.classList.add("card-info");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("src", `${avatar_url}`);

  const h3Name = document.createElement("h3");
  h3Name.classList.add("name");
  h3Name.textContent = `${name}`;

  const pUserName = document.createElement("p");
  pUserName.classList.add("username");
  pUserName.textContent = `${name}`;

  const pLocation = document.createElement("p");
  pLocation.textContent = `${location}`;

  const pProfile = document.createElement("p");
  pProfile.textContent = "Profile:";

  const aHref = document.createElement("a");
  aHref.setAttribute("href", `${html_url}`);
  aHref.textContent = `${html_url}`;

  const pFollowers = document.createElement("p");
  pFollowers.textContent = `Followers: ${followers}`;

  const pFollowing = document.createElement("p");
  pFollowing.textContent = `Following: ${following}`;

  const pBio = document.createElement("p");
  pBio.textContent = `Bio: ${bio}`;
  // Append
  divCard.appendChild(imgCard);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(h3Name);
  divCardInfo.appendChild(pUserName);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  pProfile.appendChild(aHref);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);

  return divCard;
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// function getGitUser(userName){
//   axios.get(`https://api.github.com/users/${userName}`)
//   .then(res=>{
//     console.log(res.data);
//   })
//   .catch(err =>{
//     console.log(err);
//   })
// }

const followersArr = [
  "NelsonMaldonado",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArr.forEach((item) => {
  getUserGit(item);
});

// followersArr.map(follower =>{
//   getGitUser(follower);
// })
