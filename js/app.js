// Variáveis
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
 
const regra1 = new RegExp('^[%*+\/]');
const regra2 = new RegExp('[*-\/+.%]{2}');

// Visor da calculadora
let realTimeScreenValue = []

// Limpar
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Função anexada a todos os botões
buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // Se o botão clicado não é o botão de apagar
        if (!btn.id.match('erase')) {
            // Mostrar o valor do botão pressionado
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            //Caso ja tenha clickado em igual e depois clickou em outro botão
            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";



            //Não deixa digitar algum caracter no começo
            if(regra1.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();
                currentInput.innerHTML = realTimeScreenValue.join('');
            }
            //Não deixa digitar caracteres multiplos em seguida
            if(regra2.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();
                currentInput.innerHTML = realTimeScreenValue.join('');

            }

            // Executar e mostrar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }


        }

        // Quando o evento for um botão de apagar
        if (btn.id.match('erase')) {
            //Caso ja tenha clickado em igual e depois clickou em outro botão
            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";

            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // Ao clicar em igual
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // Previnir erro de undefined
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})
