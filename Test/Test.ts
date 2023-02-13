


type Operation = "suma" | "resta" | "division" 
type Result = number | string | undefined
const Calculator = (a:number,b:number,op:Operation):Result=>{

    if(op==="suma") return a+b
    if(op==="resta") return a-b
    if(op==="division"){
        if (b===0) return "No podemos dividir"
        return a/b

    }
}

console.log( Calculator(2,2,"resta"))