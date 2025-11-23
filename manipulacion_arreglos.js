let verduras = ["espinaca","zanahoria","lechuga","brocoli"]

verduras.push("repollo")

verduras.pop()

verduras.unshift("tomate")

verduras.shift()

// console.log(verduras.length)

// for (let i = 0; i< verduras.length;i++)
//     {   
//         console.log(i,verduras[i])
//     }

for (let comida of verduras)
    {
        console.log(comida)
    }
