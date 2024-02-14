let socket = io();

const messages = document.getElementById('messages');
const input = document.getElementById('input')
const connec_btn = document.getElementById('connect')
const button = document.getElementById('snd_button')
const disconnect_btn = document.getElementById('disconnect')

connec_btn.addEventListener('click', ()=>{
    socket = io();
})

button.addEventListener('click', ()=>{
    socket.emit('createMesasage', input.value)
})

disconnect_btn.addEventListener('click', ()=>{
    socket.disconnect()
})

socket.on('boardcast', (msg)=>{
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
})

