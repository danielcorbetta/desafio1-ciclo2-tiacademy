window.onload = ()=> {
    let frutas = [
        {descricao:'Maçã',preco:1.50}, //0
        {descricao:'Banana',preco:2.98}, //1
        {descricao:'Melancia',preco:5.44}, //2
        {descricao:'Jabuticaba',preco:3.20}, //3
        {descricao:'Laranja',preco:2.30}, //4
        {descricao:'Mamão',preco:1.35} //5
    ]
    const listaFrutasKitanda = document.querySelector('#listaProdutos'); 
    const listaCestaDoCliente = document.querySelector('#cestaDoCliente');
    // Gerar lista dinâmica
    (()=> {
        for (let produtos of frutas ){
            const li = document.createElement('li');
            for (let listaFrutas in produtos){
                if (listaFrutas=='preco'){
                    listaFrutasKitanda.appendChild(li).setAttribute('data-preco',produtos[listaFrutas]);
                }else {
                    listaFrutasKitanda.appendChild(li).textContent = `${produtos[listaFrutas]}`;
                }
            }
        }
    })();
    // Adição de produtos ao carrinho e total da compra
    const listaFrutasKitandaEvento = document.querySelectorAll('#listaProdutos');
    const totalCesta = document.querySelector('#mostraTotalCompra');
    let somaTotal = 0;
    listaFrutasKitandaEvento.forEach((listaCesta)=>{
        listaCesta.addEventListener('click',(elemento)=>{
            const li = document.createElement('li');
            listaCestaDoCliente.appendChild(li).textContent = elemento.target.textContent;
            listaCestaDoCliente.appendChild(li).setAttribute('data-preco',elemento.target.dataset.preco);
            somaTotal += Number(elemento.target.dataset.preco);
            totalCesta.value = somaTotal.toFixed(2);
        });
    });
}