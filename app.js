const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;
const cases = document.getElementsByClassName('case');
let player = document.getElementById('joueur');
const reset = document.getElementById('reset');

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let i = 0; i < cases.length ; i++){
    cases[i].addEventListener('mouseup',function (event){
        if(event.button === LEFT_BUTTON){
            if (this.innerHTML ===""){
                player.innerText = "c'est au tour de joueur O";
                inserText(this, 'X' ,'green')
            }
        }
        else if(event.button === RIGHT_BUTTON ){
            if (this.innerHTML ==="") {
                player.innerText = "c'est au tour de joueur X";
                inserText(this, 'O', 'red')
            }
        }
    })
}

/*
 *@param element
 *@param lettreJoueur
 *@param classCss
 */
function inserText (element, lettreJoueur, classCss) {
    element.innerText = lettreJoueur;
    element.classList.add(classCss);
    element.style.backgroundColor = "#DEDeDe"
}

reset.addEventListener('click', function (){
    reset.click();
})
