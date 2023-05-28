//============ HEADER ============

// ========= PERFIL DIV =======
const divPerfil = document.getElementById("perfil-icon-div");
const fade = document.querySelector("#fade");
const openmodal = document.querySelector("#open-modal");

const togglemodal = () => {
    [divPerfil, fade].forEach((el) => el.classList.toggle("hide"));
};

[openmodal, fade].forEach((el) => {
    el.addEventListener("click", () => togglemodal());
})


//=========== SIDEBAR NAVEGADOR =============
let theme = document.getElementById("theme-homepage");
let textTheme = document.getElementById("text-btn-theme");

theme.addEventListener("click", () => {
    body.classList.toggle("dark");
});

//theme.addEventListener("click", () => {
    //if(body.classList.toggle("dark")){
        //textTheme.innerHTML = "Aparência: Claro";
    //} else {
        //textTheme.innerHTML = "Aparência: Escuro";
    //};
//})

// código que faz o menu sidebar ser retratil
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle");


      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });


// Quando o menu burguer for clicado algumas seções do sidebar devem ser desabilitadas
// e ao clicar novamente devem ser re habilitadas
let burguer = document.getElementById("burguer");
let sec02 = document.getElementById("sec02-sidebar");
let sec03 = document.getElementById("sec03-sidebar");
let sec04 = document.getElementById("sec04-sidebar");
let sec05 = document.getElementById("sec05-sidebar");

burguer.addEventListener("click", () => {
    if(sidebar.classList.contains("close")){
        sec02.style.display = 'none';
        sec03.style.display = 'none';
        sec04.style.display = 'none';
        sec05.style.display = 'none';
    } else {
        sec02.style.display = 'flex';
        sec03.style.display = 'flex';
        sec04.style.display = 'flex';
        sec05.style.display = 'flex';
    }
})

// [playlists]
let expandMore = document.getElementById("expand-more");
let expandLess = document.getElementById("expand-less");
let playlist = document.getElementById("playlists");

// Habilita a seção do menu que contem as playlists
// Desabilita o botão que habilita as playlists

expandMore.addEventListener("click", () => {
    if(playlist.style.display == 'none'){
        playlist.style.display = 'block';
        expandMore.style.display = 'none';
    } else {
        playlist.style.display = 'none';
    }
});

// Desabilita a seção do menu que contem as playlist
// Habilita de volta o botão que habilita as playlists

expandLess.addEventListener("click", () => {
    if(playlist.style.display == 'block'){
        playlist.style.display = 'none';
        expandMore.style.display = 'flex';
    } else {
        playlist.style.display = 'block';
    }
});

//[channels]

let numberChannels = document.querySelectorAll('#sec03-sidebar > ul > li').length;
let botaoMoreChanel = document.getElementById("more-channel");

// este condicional verifica se ha mais de 5 botões na sessão de canais
// se houver mais de 5 bot~es, 3 canais e uma mostrar mais... habilita o botão de mostrar mais
// caso não houver mais de 5, entaõ só mostre os 3 botões de canais

if(numberChannels >= 4){
   botaoMoreChanel.style.display = 'flex';
};

let moreChannels = document.getElementById("channels-sidebar");
let botaoLessChanel = document.getElementById("less-chanel");

botaoMoreChanel.addEventListener("click", () => {
    if(moreChannels.style.display == 'none'){
        moreChannels.style.display = 'block';
        botaoMoreChanel.style.display = 'none';
    } else {
        moreChannels.style.display = 'none';
    }
});

botaoLessChanel.addEventListener("click", () => {
    if(moreChannels.style.display == 'block'){
        moreChannels.style.display = 'none';
        botaoMoreChanel.style.display = 'flex';
    } else {
        moreChannels.style.display = 'block';
    }
});


// =========== [ MAIN ] ===========

// =========== GUIA ============

const controls = document.querySelectorAll(".control");
let currentItem = 0;

const items = document.querySelectorAll(".item");
const maxItens = items.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isleft = control.classList.contains('arrow-left');

        if(isleft){
            currentItem -= 9;
        } else {
            currentItem += 9;
        };
    
        if(currentItem >= maxItens){
            currentItem = 0;
        };
    
        if(currentItem < 0){
            currentItem = maxItens - 1;
        };
    
        items.forEach(item => item.classList.remove('current-item'));
    
        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    
        console.log("control", isleft, currentItem);
    });
   
});

// ============ SHORTS =========

let shortExtra = document.getElementById("more-shorts");
let shortMoreBtn = document.getElementById("short-btn-more");
let shortLessBtn =document.getElementById("short-btn-less");

shortMoreBtn.addEventListener("click", () => {
    if(shortExtra.style.display == 'none'){
        shortExtra.style.display = 'block';
        shortMoreBtn.style.display = 'none';
    } else {
        shortExtra.style.display = 'none';
        shortMoreBtn.style.display = 'block'; 
    }
});

shortLessBtn.addEventListener("click", () => {
    if(shortExtra.style.display == 'block'){
        shortExtra.style.display = 'none';
        shortMoreBtn.style.display = 'block';
    } else {
        shortExtra.style.display = 'block';
        shortMoreBtn.style.display = 'none'; 
    }
});

let btnCloseShorts = document.getElementById("desabilitar-shorts");
let desafazerShortsBtn = document.getElementById("remake-short-btn");

let closeShort = document.getElementById("msm-close-shorts");
let sec01Short = document.getElementById("sec01-shorts");

btnCloseShorts.addEventListener("click", () => {
    if(closeShort.style.display == 'none'){
        closeShort.style.display = 'flex';
        sec01Short.style.display = 'none';
    } else {
        closeShort.style.display = 'none';
        sec01Short.style.display = 'flex';
    }
});

desafazerShortsBtn.addEventListener("click", () => {
    if(closeShort.style.display == 'flex'){
        closeShort.style.display = 'none';
        sec01Short.style.display = 'flex';
    } else {
        closeShort.style.display = 'flex';
        sec01Short.style.display = 'none';
    }
})

