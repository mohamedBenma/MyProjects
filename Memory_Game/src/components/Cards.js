import React, { useState} from 'react';
import Game from './Game';
import Swal from 'sweetalert2'
let CARDS = [
    { name: "cochon", id: "1", twinFind: false, src1: "./images/cochon.jpg", src: "./images/logo192.png" },
    { name: "cochon", id: "2", twinFind: false, src1: "./images/cochon.jpg", src: "./images/logo192.png" },
    { name: "zebre", id: "3", twinFind: false, src1: "./images/zebre.jpg", src: "./images/logo192.png" },
    { name: "zebre", id: "4", twinFind: false, src1: "./images/zebre.jpg", src: "./images/logo192.png" },
    { name: "renard", id: "5", twinFind: false, src1: "./images/renard.jpg", src: "./images/logo192.png" },
    { name: "renard", id: "6", twinFind: false, src1: "./images/renard.jpg", src: "./images/logo192.png" },
    { name: "perroquet", id: "7", twinFind: false, src1: "./images/perroquet.jpg", src: "./images/logo192.png" },
    { name: "perroquet", id: "8", twinFind: false, src1: "./images/perroquet.jpg", src: "./images/logo192.png" },
    { name: "tigre", id: "9", twinFind: false, src1: "./images/tigre.jpg", src: "./images/logo192.png" },
    { name: "tigre", id: "10", twinFind: false, src1: "./images/tigre.jpg", src: "./images/logo192.png" },
    { name: "cheval", id: "11", twinFind: false, src1: "./images/cheval.jpg", src: "./images/logo192.png" },
    { name: "cheval", id: "12", twinFind: false, src1: "./images/cheval.jpg", src: "./images/logo192.png" }


];
const Cards = () => {
    const copyCards = CARDS.slice(0, CARDS.length)
    const [animals, setAnimals] = useState([]);
    const [cards, setCards] = useState(0);
    const [cardsNbr, setCardsNbr] = useState(0);
    const [buttonStart, setButtonStart] = useState("Start Game");
    const [imagesClicked, imagesClickedSet] = useState([]);
    const [timer, setTimer] = useState(40);

    const startGame = (e) => {

        e.preventDefault();
        const a = shuffleArray(copyCards)
        if (buttonStart === "Start Game") {

            console.log("we start the game!")
            setButtonStart("Restart")
            setAnimals(a);
            setCards(cards + 1)
            console.log(cards);
        }
        else {
            if (cardsNbr === CARDS.length) {
                setCardsNbr(0)
                resetGame()
                console.log(animals)
                setAnimals(shuffleArray(a));
            }
            else {
                resetBeforeEndOfGame();
                setAnimals(shuffleArray(a));
            }

        }
    }
    const resetBeforeEndOfGame = () => {
        const srcAnimal = "./logo192.png"
        animals.map((card, index) => {
            if (card.src !== srcAnimal) {
                changeSrcImg(card.id);
            }
        })
        setCardsNbr(0)

    }

    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    const handleChangeNbrCards = (e) => {
        setCardsNbr(e.target.Value);
        console.log(cardsNbr)
    }
    const changeSrcImg = (idnbr) => {
        console.log("changeSrcImg");
        const pos = animals.map(i => i.id).indexOf(idnbr);
        const a = animals[pos].src1;
        animals[pos].src1 = animals[pos].src;
        animals[pos].src = a;
    }
    const verifyNbrTwins = () => {
        let cpt = 0;
        animals.map((animal, index) => {
            if (animal.twinFind) {
                cpt += 1;
            }
        })
        console.log(cpt / 2);
        return cpt / 2;
    }
    const resetGame = () => {
        animals.map((card, index) => {
            changeSrcImg(card.id);
            card.twinFind = false;
        })
    }
    const resetImagesClicked = (tab) => {
        const idImage1 = tab[0].id;
        const idImage2 = tab[1].id;
        changeSrcImg(idImage1);
        changeSrcImg(idImage2);
        console.log(tab[0]);
        console.log(tab[1]);
        console.log(animals)

    }
    const verifyCards = (tab) => {
        console.log(tab.length)
        imagesClickedSet([])
        if (tab[0].src === tab[1].src) {
            console.log(tab[0].src);
            console.log(tab[1].src);
            tab[0].twinFind = tab[1].twinFind = true;
            console.log("find twins")
            setCardsNbr(cardsNbr + 1)
            if (verifyNbrTwins() === animals.length / 2) {
                setTimeout(function () {
                    alert('Partie Terminée,Bien Joué','success');
                }, 500)

                /* resetGame(); */

            }
            return true;
        }
        else {
            resetImagesClicked(tab)

        }
    }
    const updateTimer = () => {
        console.log(timer)
        setTimer(timer - 1)
    }
    const alert=(title,issue)=>{
        Swal.fire({
            position: 'meduim-end',
            icon: 'success',
            title: title,
            showConfirmButton: issue,
            timer: 1500
          })
    }

    return (
        <div>
            <div className='buttons'><button onClick={startGame.bind(this)}>{buttonStart}</button><button>Score: {cardsNbr}</button></div>

            <div className='box'>
                {
                    animals.map((card, index) =>
                        <Game key={index} card={card} nbrCards={cardsNbr} setCardsNbr={setCardsNbr} cardsNbr={cardsNbr} imagesClicked={imagesClicked} imagesClickedSet={imagesClickedSet} verifyCards={verifyCards} animals={animals} setAnimals={setAnimals} changeSrcImg={changeSrcImg} resetGame={resetGame} resetImagesClicked={resetImagesClicked} timer={timer} setTimer={setTimer} updateTimer={updateTimer} />
                    )}
            </div>
        </div>
    )

};
export default Cards;
