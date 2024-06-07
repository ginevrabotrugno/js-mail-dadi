// 1.Chiedi all’utente la sua email, 
// 1a.inserisci l'input che sarà la costante email
const userEmail= document.getElementById("user_input").value
const buttonAccedi = document.getElementById("accedi");

buttonAccedi.addEventListener("click",
    function() {
        // 2.controlla che sia nella lista di chi può accedere, 
        // 2a.creare lista di chi può accedere
        const accessList = ["mariorossi@mail.it", "luciabianchi@mail.it", "marcoverdi@mail.it", "giulianeri@mail.com"];

        let access= "!! ACCESSO NEGATO !!"

        // 2b.confrontare il valore della costante con gli elementi della lista
        for (let i = 0; i < accessList.length; i++) {
    
            const accessGranted = accessList[i];
            console.log("Accesso Garantito: ", accessGranted);
        
            if (userEmail === accessGranted) {
                
                access = "!! ACCESSO GARANTITO !!"
                
            } 
        }
        document.getElementById("access").innerHTML = access;
    }
)


    

    



// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

const buttonLancia = document.getElementById("lancia");

buttonLancia.addEventListener ("click",

    function () {

        const userPlay = Math.floor(Math. random()*6) + 1;
        document.getElementById("user_play").innerHTML = userPlay;

        const computerPlay = Math.floor(Math. random()*6) + 1;
        document.getElementById("computer_play").innerHTML = computerPlay;

        // Stabilire il vincitore, in base a chi fa il punteggio più alto.

        if (userPlay > computerPlay) {
            document.querySelector(".winner").innerHTML = "!! HAI VINTO !!";
            
        } else if (computerPlay > userPlay) {
            document.querySelector(".winner").innerHTML = "!! HAI PERSO !!";
        }

    }
)





// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”