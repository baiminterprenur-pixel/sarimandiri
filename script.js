function sendMessage(){

  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chat-box");

  let text = input.value;

  if(text === "") return;

  chatBox.innerHTML += `
    <p><b>Kamu:</b> ${text}</p>
  `;

  let reply = "Maaf, saya belum memahami pertanyaan.";

  if(text.toLowerCase().includes("bumdes")){
    reply = "BUMDes Sari Mandiri membantu ekonomi masyarakat desa.";
  }

  if(text.toLowerCase().includes("halo")){
    reply = "Halo 👋 Ada yang bisa saya bantu?";
  }

  chatBox.innerHTML += `
    <p><b>Aira:</b> ${reply}</p>
  `;

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}