document.addEventListener("DOMContentLoaded", function criarMenu() { 
    
    // rastreia os elementos <body> <div id=referencia> e <footer>, para injeção de script
    let elbody = window.document.getElementsByTagName('body');
    let elconteudo = window.document.getElementById('conteudo');
    let elfooter = window.document.getElementById('rodape');

    // cria header e insere antes da DIV #conteudo 
    let elheader = document.createElement('header');           
    elconteudo.parentNode.insertBefore(elheader, elconteudo);
    elconteudo.style.margin = 'auto';
    elheader.style.padding =  '0px 0px 20px 0px';
    elheader.style.backgroundImage = 'linear-gradient(to top, black, var(--cor-3))'; // trocar gray por 
    elheader.style.color = 'gray';
    elheader.style.textAlign = 'center';
    
    // cria p1 e insere no header 
    let elheaderp1 = document.createElement('p');              
    elheaderp1.textContent = 'POLÍCIA CIVIL DO ESTADO DE SANTA CATARINA';
    elheader.appendChild(elheaderp1);
    elheaderp1.style.fontWeight = 'bolder';
    elheaderp1.style.color = 'var(--cor-5)';

    
    // cria p2 e insere no header 
    let elheaderp2 = document.createElement('p');               
    elheaderp2.textContent = 'DPCo/Fron de São Lourenço do Oeste';
    elheader.appendChild(elheaderp2);
    elheaderp2.style.fontWeight = 'bold';
    elheaderp2.style.color = 'gray';

    // cria DIV #menulateral e insere antes da DIV conteudo
    let elmenulateral = document.createElement('div');           
    elmenulateral.id = 'menulateral';
    // insere DIV logo após o HEADER
    elheader.parentNode.insertBefore(elmenulateral, elheader.nextSibling);  
    elmenulateral.style.backgroundImage = 'linear-gradient(to bottom, black, var(--cor-3)'; //trocar gray por var(--cor-3))
    elmenulateral.style.margin = '0px';
    elmenulateral.style.padding = '0px';
    elmenulateral.style.float = 'left';
    elmenulateral.style.width = '115px';
    elmenulateral.style.height = '500px';
    elmenulateral.style.border = '10px solid black';
    elmenulateral.style.borderRadius = '0px 0px 15px';
    elmenulateral.style.boxShadow = 'inset 3px 3px 10px 10px black';

    // cia IMG do logo PCSC e insere na DIV #MENULATERAL
    let elpcsc = document.createElement('img');      
    elmenulateral.appendChild(elpcsc);
    elpcsc.src = 'icones/logpcsc.png';
    elpcsc.alt = 'Logo PCSC';
    elpcsc.width = '95';
    elpcsc.height = '115';
    elpcsc.style.float = 'top';
    elpcsc.style.paddingLeft = '15px';

    // cria link e botao para página de REQUISIÇÃO BANCOS
    let ellinkbanco = document.createElement('a'); 
    let elbotaobanco = document.createElement('button');
    let elimgbank = document.createElement('img');
    let elh3bank = document.createElement('h3');
    elmenulateral.appendChild(ellinkbanco);
    ellinkbanco.appendChild(elbotaobanco);
    elbotaobanco.appendChild(elimgbank);
    elbotaobanco.appendChild(elh3bank);
    ellinkbanco.href = 'index.html';
    elbotaobanco.className = 'botaolink';
    elh3bank.className = 'nomelink';
    elimgbank.src = 'icones/bank.png';
    elimgbank.alt = 'GERADOR DE OFICIO PARA BANCOS';
    elimgbank.width = '60';
    elh3bank.textContent = 'REQUISIÇÃO PARA BANCOS';

    // cria link e botao para página de REQUISIÇÃO PARA OPERADORAS
    let ellinkopera = document.createElement('a'); 
    let elbotaoopera = document.createElement('button');
    let elimgtower = document.createElement('img');
    let elh3opera = document.createElement('h3');
    elmenulateral.appendChild(ellinkopera);
    ellinkopera.appendChild(elbotaoopera);
    elbotaoopera.appendChild(elimgtower);
    elbotaoopera.appendChild(elh3opera);
    ellinkopera.href = 'opera.html';
    elbotaoopera.className = 'botaolink';
    elh3opera.className = 'nomelink';
    elimgtower.src = 'icones/tower.png';
    elimgtower.width = '40';
    elimgtower.height = '60';
    elimgtower.alt = 'GERADOR DE OFICIO PARA OPERADORAS DE TELEFONIA';
    elh3opera.textContent = 'REQUISIÇÃO PARA OPERADORAS';
    
    // PADRONIZAR BOTOES do MENU - Seleciona todos os elementos <button> com a classe "botaolink" 
    let botoes = document.querySelectorAll(".botaolink");   
    botoes.forEach(x => {                         // Itera sobre os elementos <BUTTON> e muda estilos CSS
        x.style.width = '100px';
        x.style.height = '140px';
        x.style.backgroundImage = 'linear-gradient(to bottom, black, var(--cor-3))'; // trocar gray por var(--cor-3))
        x.style.boxShadow = 'inset 1px 1px 10px 5px black';
        x.style.marginLeft = '10px';
        x.style.marginTop = '20px';
        x.style.transition = '0.4s';

        /*
        .botaolink:hover {
            height: 160px;
            box-shadow: 3px 3px 15px 2px white;
        }  */
    });


    // PADRONIZAR BOTOES do MENU - Seleciona todos os H3 que nomeiam os botoes - classe "nomelink" 
    let nomelinks = document.querySelectorAll(".nomelink");    
    nomelinks.forEach(x => {                         // Itera sobre os elementos e muda estilos CSS
        x.style.color = 'var(--cor-5)';       // troar por ;
        x.style.fontSize = '0.8em';
    });

    // Cria elementos do <footer>  Link para sugestôes e DATA DA ÚLTIMA ATUALIZAÇÂO
    let elsugestoes = document.createElement('a');
    elsugestoes.href = 'https://docs.google.com/spreadsheets/d/18J7v1jp0gUWQrGLB41MPKwgaOwpfW_763MsNvpkcBfs/edit?usp=sharing';
    elsugestoes.textContent = 'LINK PARA SUGESTÕES / ATUALIZAÇÃO';
    elfooter.appendChild(elsugestoes);

    let elatualizacao = document.createElement('em');
    elatualizacao.innerText = "\nAtualizado em: 10/08/2023 (Stang)";
    elfooter.appendChild(elatualizacao);

    // configura CSS do rodape
    elfooter.style.textAlign = 'center';
    elfooter.style.padding = '0px 0px 20px 0px';
    elsugestoes.style.padding = '2px';
    elsugestoes.style.textDecoration = 'none';
    elsugestoes.style.fontSize = '0.9em';
    elsugestoes.style.transition = '0.5s';
    elatualizacao.style.color = 'rgb(59, 59, 59)';
    elatualizacao.style.fontSize = '0.9em';


    /*
    footer > a:hover {
        font-size: 1em;
        position: relative;
        color: rgb(167, 11, 167);
    }
    
    */



});
