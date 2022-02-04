
async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export const wsConnection = new WebSocket("ws:http://localhost:3000/styles");

wsConnection.onopen = function() {
    alert("Соединение установлено.");
};

wsConnection.onclose = function(event) {
    if (event.wasClean) {
        alert('Соединение закрыто чисто');
    } else {
        alert('Обрыв соединения'); // например, "убит" процесс сервера
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
};

wsConnection.onerror = function(error) {
    alert("Ошибка " + error.message);
};

export const wsSend = function(data) {
// readyState - true, если есть подключение
    if(!wsConnection.readyState){
        setTimeout(function (){
            wsSend(data);
        },100);
    } else {
        wsConnection.send(data);
    }
};


export {getResource};