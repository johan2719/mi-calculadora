const txtopcion1 = document.getElementById("ope1")
const txtoperacion = document.getElementById("operacion")
const txtopcion2= document.getElementById("ope2")
const btncalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")

btncalcular.addEventListener("click", calcular)

function calcular(){
    const operacion = txtoperacion.value
    const ope1 = parseFloat (txtopcion1.value)
    const ope2 = parseFloat(txtopcion2.value)

    if((operacion== "+" || operacion == "-" || operacion == "*"||operacion == "/" ) && !isNaN(ope1) && !isNaN(ope2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = ope1 + ope2
                break;
                case "-":
                    resultado = ope1 - ope2
                    break;  
                    case "*":
                        resultado = ope1 * ope2
                        break;  

                        case "/":
                            resultado = ope1 / ope2
                            break 
            
      

        }
        presultado.innerText = resultado



    }else{
    presultado.innerText="operacion imposible"
    }
}