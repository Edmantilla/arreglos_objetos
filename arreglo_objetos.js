let computador , celular , consola

let inventario = [computador={procesador:"intel core i7",ram:"64 gb",sistema:"microsoft"},celular={procesador:"snapdragon 8 gen 2",ram:"12 gb",sistema:"android"},consola={procesador:"8 nucleos",ram:"RDNA 2",sistema:"microsoft"}]

for (let propiedad of inventario)
    {
        console.log(propiedad.procesador)
    }
