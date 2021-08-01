//Whatsapp flood by Sapphire Network
//https://sapphirenetwork.org


//Cole no console do navegador




function sendScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

sendScript(`Se ela tá gemendo é porque eu sou um cara legal
Se ela tá tremendo é que ela gostou do meu pau
Se ela tá gritando é que ela 'tá querendo mais
Se ela tá berrando é hora de meter por trás

Tora tora, é isso ai moleca doida
É que a moçada da minha área só para quando a bola do olho pula fora
O corpo fala tem sensor ativo
É o que me faz vivo, então se agacha e chupa a rola agora
Bye bye, não conta pro teu pai, essa é a manha da ariranha
Tu diz vem ele não vai
Igual cipreste, só compre coisa que preste, eu 'tô doidão
Eu 'tô à toa terra boa é do Nordeste

Se acalma, meu chegado que o homem já encomendou dez kilos do prensado
E tu vai ver que é do bom
Que se eu te mostro o camarão, que eu tenho lá em casa meu irmão
Tu vai dizer yeah yeah yeah yeah

Não sei porque tu chora sempre, hoje quando
O galo cantou e a nossa brenfa não chegou, corte de faca no isopor
Não sei porque eu não tava lá quando
O bicho pegou toda a minha brenfa sem pedir licença

A gritaria rindo anuncia a hora
Eu tô cansado eu vou-me embora vôo de volta pro meu lar
Volto pra casa, pra mulher e pros meus filho
Mas não largo do gatilho, essa herança é de lascar
Sendo animal preferi ser o predador
Não sei fingir não sou ator, só vou querer o que quiser
O sanfoneiro toca a música da morte
Com a minha eu abro um corte e tu sangra quanto sangue tiver

Tora tora, ela chegou era da boa, era cheirosa manga-rosa
Do jeito que os brasiliense adora adora
Fala mais baixo se dançá 'tá fudido, e aperta um comprido,
Quem aprecia comemora a tora
Vai traz que é pra eu ficar em paz
Pode até ser bom demais, só que uma fina assim não faz
Aperta um beck do tamanho desse moleque
Camarão da cabeleira dos cabra que toca reggae

Como troféu de um caçador na sua parede
Trinta e sete almas na rede eu levo pra todo lugar
É claro que morrer de tiro ninguém gosta
Então eles grudam nas minhas costas e ficam só me dando azar
Não tem problema minha cabeça 'tá tranquila
Querem briga façam fila, eu 'tô aqui e não arredo o pé
Cabra safado em dois tempo te encho de bala
Emudeço a tua fala e tu sangra quanto sangue tiver 

Script by Sapphire Network
`);