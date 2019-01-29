// const CLIENT_ID = '24967591843-vas4eir4ifacr6lrevm0sgs2ht6oqmde.apps.googleusercontent.com';
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
// const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

// const authorizeButton = document.getElementById('authorize-button');
// const signoutButton = document.getElementById('signoutout-button');
// const content = document.getElementById('content');
// const channelForm = document.getElementById('channel-form');
// const channelInput = document.getElementById('channel-Input');
// const videoContainer = document.getElementById('video-container');

// const defaultChannel = 'IGNentertainment';

// // Loading auth2 library
// function handleClientLoad() {
//     gapi.load('client:auth2', initClient); 
// }

// // Initializes API Client Library
// // Sets up client listeners as well
// function initClient() {
//     gapi.client.init({
//         discoveryDocs: DISCOVERY_DOCS,
//         clientId: CLIENT_ID,
//         scope:SCOPES
//     }).then(() => {
//         gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
//         updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//         authorizeButton.onclick = handleAuthClick;
//         signoutButton.onclick = handleSignoutClick;
//     });
// }

// // Update the UI sign-in state change on browser
// function updateSigninStatus(isSignedIn) {
//     if (isSignedIn) {
//         authorizeButton.style.display = 'none';
//         signoutButton.style.display = 'block';
//         content.style.display = 'block';
//         videoContainer.style.display = 'block';
//         getChannel(defaultChannel);
//     } else {
//         authorizeButton.style.display = 'block';
//         signoutButton.style.display = 'none';
//         content.style.display = 'block';
//         videoContainer.style.display = 'block';
//     }
// }

// // Handles login information
// function handleAuthClick() {
// gapi.auth2.getAuthInstance().signIn();
// }

// // Handles logout information
// function handleSignoutClick() {
// gapi.auth2.getAuthInstance().signOut();
// }

// function getChannel(channel) {
//     console.log(channel);
// }