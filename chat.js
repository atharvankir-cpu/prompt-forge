function addMessage(text,type){

    const msg = document.createElement("div");

    msg.className = "message " + type;

    msg.textContent = text;

    document
        .getElementById("chat-box")
        .appendChild(msg);
}

function sendMessage(){

    const input =
        document.getElementById("prompt");

    const text =
        input.value.trim();

    if(!text) return;

    addMessage(text,"user");

    input.value="";

    setTimeout(()=>{

        addMessage(
            "PromptForge AI backend not connected yet.",
            "bot"
        );

    },1000);
}
