$(document).ready(main);

var contador=1;

function main(){
    $('.boton2').click(function(){
     
        //$('.header__nav').toggle();
        if(contador!=1){
            $('.header__nav').animate({
                left:'-100%'
            });
            contador=1;
        }
        
    });
    $(".boton1").click(function(){
        //$('.header__nav').toggle();
        if(contador==1){
            $('.header__nav').animate({
                left:'0'
            });
            contador=0;
        }
    })
};
/*
var menu= document.getElementsByClassName('header__nav');
var mBar2= document.getElementsByClassName('boton2');
var mBar1= document.getElementsByClassName('menu1');

function ocultarMenu(){

    menu.style.display= 'none';
}

mBar2[0].addEventListener('click', ocultarMenu);*/