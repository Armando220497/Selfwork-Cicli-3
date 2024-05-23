let bevanda;
let messaggio = "Scegli una bevanda: \n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra";

while (true) {
    bevanda = prompt(messaggio);

    if (bevanda == 1) {
        console.log("È stata selezionata l'acqua");
        break;
    } else if (bevanda == 2) {
        console.log("È stata selezionata la Coca Cola");
        break;
    } else if (bevanda == 3) {
        console.log("È stata selezionata la birra");
        break;
    } else {
        messaggio = "Scelta non valida. Per favore, scegli una delle bevande presenti:\n 1 - Acqua \n 2 - Coca Cola \n 3 - Birra";
    }
}
