const chatBox = document.getElementById("chat-box");

chatBox.innerHTML += `
  <div class="message bot">
    👋 Halo, saya Aira AI BUMDes Sari Mandiri. Ada yang bisa saya bantu?
  </div>
`;

document
  .getElementById("userInput")
  .addEventListener("keypress",function(event){

    if(event.key === "Enter"){
      sendMessage();
    }

});

async function sendMessage(){

  const input = document.getElementById("userInput");

  const userText = input.value.trim();

  if(!userText) return;

  chatBox.innerHTML += `
    <div class="message user">${userText}</div>
  `;

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  try{

    const response = await fetch("/api/chat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:userText
      })
    });

    const data = await response.json();

    chatBox.innerHTML += `
      <div class="message bot">${data.reply}</div>
    `;

  }catch(error){

    chatBox.innerHTML += `
      <div class="message bot">
        Maaf, server sedang bermasalah.
      </div>
    `;

  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat(){

  chatBox.innerHTML = `
    <div class="message bot">
      👋 Chat berhasil dihapus.
    </div>
  `;
}
