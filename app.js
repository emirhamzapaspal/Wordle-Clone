import { WORDS } from './words.js';

const Title = document.getElementById("endTitle");

let won = false;
let canErase = true;
let selectedCharacter = 1;
let wordEndNum = 6;
let entered = false;
const words = WORDS;
let selectedWord = `${words[Math.floor(Math.random() * 5757)]}`.toUpperCase();

console.log(selectedWord);

export function key(char){
    if(selectedCharacter != wordEndNum && won == false){
        const selectedBox = document.getElementById(`box${selectedCharacter}`);
        selectedBox.textContent = char;
        canErase = true;
        selectedCharacter++;
    }
    else if(entered && won == false){
        const selectedBox = document.getElementById(`box${selectedCharacter}`);
        selectedBox.textContent = char;
        canErase = false;
        wordEndNum += 5;
        selectedCharacter++;
        entered = false;
    }
}
export function enter(){
    if(selectedCharacter == wordEndNum){

        let wNum1 = wordEndNum - 5;
        let wNum2 = wordEndNum - 4;
        let wNum3 = wordEndNum - 3;
        let wNum4 = wordEndNum - 2;
        let wNum5 = wordEndNum - 1;

        let selectedWordNum1 = selectedWord.charAt(0);
        let selectedWordNum2 = selectedWord.charAt(1);
        let selectedWordNum3 = selectedWord.charAt(2);
        let selectedWordNum4 = selectedWord.charAt(3);
        let selectedWordNum5 = selectedWord.charAt(4);

        let wordNum1 = document.getElementById(`box${wNum1}`);
        let wordNum2 = document.getElementById(`box${wNum2}`);
        let wordNum3 = document.getElementById(`box${wNum3}`);
        let wordNum4 = document.getElementById(`box${wNum4}`);
        let wordNum5 = document.getElementById(`box${wNum5}`);

        let UserWord = `${wordNum1.textContent + wordNum2.textContent + wordNum3.textContent + wordNum4.textContent + wordNum5.textContent}`;

        let checkUserWord = UserWord.toLowerCase();

        if(words.includes(checkUserWord)){
            entered = true;
            canErase = false
            if(selectedWord === UserWord){
                wordNum1.style.backgroundColor = "lightgreen";
                wordNum2.style.backgroundColor = "lightgreen";
                wordNum3.style.backgroundColor = "lightgreen";
                wordNum4.style.backgroundColor = "lightgreen";
                wordNum5.style.backgroundColor = "lightgreen";
                Title.textContent = `You Won!! The Word Was ${selectedWord}`;
                Title.style.fontSize = "3em";
                won = true;
            }
            else{
                if(selectedWordNum1 == wordNum1.textContent){
                    wordNum1.style.backgroundColor = "lightgreen";
                }
                else if(selectedWord.includes(wordNum1.textContent)){
                    wordNum1.style.backgroundColor = "yellow";
                }
                else{
                    document.getElementById(`${wordNum1.textContent}`).style.backgroundColor = "gray";
                }
                if(selectedWordNum2 == wordNum2.textContent){
                    wordNum2.style.backgroundColor = "lightgreen";
                }
                else if(selectedWord.includes(wordNum2.textContent)){
                    wordNum2.style.backgroundColor = "yellow";
                }  
                else{
                    document.getElementById(`${wordNum2.textContent}`).style.backgroundColor = "gray";
                }      
                if(selectedWordNum3 == wordNum3.textContent){
                    wordNum3.style.backgroundColor = "lightgreen";
                }
                else if(selectedWord.includes(wordNum3.textContent)){
                    wordNum3.style.backgroundColor = "yellow";
                }
                else{
                    document.getElementById(`${wordNum3.textContent}`).style.backgroundColor = "gray";
                }
                if(selectedWordNum4 == wordNum4.textContent){
                    wordNum4.style.backgroundColor = "lightgreen";
                }
                else if(selectedWord.includes(wordNum4.textContent)){
                    wordNum4.style.backgroundColor = "yellow";
                }
                else{
                    document.getElementById(`${wordNum4.textContent}`).style.backgroundColor = "gray";
                }      
                if(selectedWordNum5 == wordNum5.textContent){
                    wordNum5.style.backgroundColor = "lightgreen";
                }
                else if(selectedWord.includes(wordNum5.textContent)){
                    wordNum5.style.backgroundColor = "yellow";
                }
                else{
                    document.getElementById(`${wordNum5.textContent}`).style.backgroundColor = "gray";
                }
                if(wordEndNum == 31){
                    console.log(wordEndNum);
                    Title.textContent = `The Word Was ${selectedWord}`;
                }
            }
        }
        else{
            Title.textContent = `The Word İs Not Founded On The Word List`;
            setTimeout(() => { Title.textContent = " " }, 2000);
        }
    }
}
export function erase(){
if(selectedCharacter == 6 && selectedCharacter < wordEndNum || selectedCharacter == 11 && selectedCharacter < wordEndNum || selectedCharacter == 16 && selectedCharacter < wordEndNum || selectedCharacter == 21 && selectedCharacter < wordEndNum || selectedCharacter == 26 && selectedCharacter < wordEndNum || selectedCharacter == 31 && selectedCharacter < wordEndNum){
    canErase = false
}
    if(canErase && selectedCharacter > 1){
        const erasedBox = document.getElementById(`box${selectedCharacter - 1}`);
        erasedBox.textContent = " ";
        selectedCharacter--;
    }
}