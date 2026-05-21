const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");

/* PESAN AWAL */
window.onload = () => {

  addMessage(
    "👋 Halo, saya Aira AI BUMDes Sari Mandiri. Ada yang bisa saya bantu?",
    "bot"
  );

};

/* KIRIM PESAN */
function sendMessage(){

  const text = userInput.value.trim();

  if(text === "") return;

  addMessage(text, "user");

  setTimeout(() => {

    addMessage(
      "Maaf, AI masih dalam pengembangan 😊",
      "bot"
    );

  }, 700);

  userInput.value = "";

}

/* TAMPILKAN PESAN */
function addMessage(text, sender){

  const msg = document.createElement("div");

  msg.classList.add("message");
  msg.classList.add(sender);

  msg.innerText = text;

  chatBox.appendChild(msg);

  chatBox.scrollTop = chatBox.scrollHeight;

}

/* ENTER UNTUK KIRIM */
userInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});

/* HAPUS CHAT */
function clearChat(){

  chatBox.innerHTML = "";

}
