$(document).ready(function(){


//Boton Scrollbar header

   //EFECTOS ===========================================

        //EFECTO SCROLL BOTON LENGUAJES==================

        $('#btn-lenguajes').click(function(){

            $('html').animate({scrollTop: $('#contenedor').offset().top - 80}, 1000);

        });

        //EFECTO CAMBIO DE COLOR NAVBAR AL HACER SCROLL=============

        function navbarScroll(){
            if($(window).scrollTop() <= 10){
                $('#navbar').removeClass('activeScroll');
            }else{
                $('#navbar').addClass('activeScroll');
            }
        }


        //CUANDO LA VENTANA HAGA SCROLL O SE ACTUALICE =============
        $(window).on('scroll', navbarScroll);
        $(window).on('load', navbarScroll);


//Filtros en lenguajes


            function mostrarTodo(){
                $(".item-filtro[category='mostrar-todo'").parent().addClass('active');
            }
    
            //VERSION BUENA!
    
            $('.item-filtro').on('click', function(){
    
                var filtros_btns = $('.item').children();
                var filtro_btn = $(this);
                var tarjetas = $('.lenguajes').children();
    
    
                for(var o = 0; o < filtros_btns.length; o++){
                    if(filtros_btns[o].getAttribute('category') == filtro_btn.attr('category')){
                        filtro_btn.parent().addClass('active');
                    }else{
                        filtros_btns[o].parentNode.className = 'item';
                    }
                }
    
                for(var i = 0; i < tarjetas.length; i++){
    
                    //EL INDEX OF PUEDE FUNCIONAR, PERO HAY QUE DARLE UNA VUELTA. POR AHORA
                    // ES UN MAPA CON CHINCHETAS.
                
                    if(filtro_btn.attr('category') == 'mostrar-todo'){

                        tarjetas[i].style.display = 'inline-block';
                        
                    }else if(tarjetas[i].getAttribute('category').indexOf(filtro_btn.attr('category'))  == -1 && filtro_btn.parent().hasClass('active')){

                        tarjetas[i].style.display = 'none';
    
                        
                    }else{

                        tarjetas[i].style.display = 'inline-block';
                        console.log(tarjetas[i]);
    
                    }
    
                }

        });


        $(window).on('load', mostrarTodo);



    //Modal Pop-up


    //El codigo esta mal hecho, funciona a medias ya que hay un problema con el $(window).on('click), ya que le estamos especificando el modal[0] y deberia ser el modal que se muestra
    //dependiendo del lenguaje que hemos escogido.

    $('.tarjeta').on('click', function(){


        var modals = $('.modal-item');

        for(var i = 0; i <= modals.length; i++){

            if( $(this).hasClass('html') && modals[i].getAttribute('class').indexOf('html') > 0){
                modals[i].parentNode.style.display = 'block';
                $('html')[0].style.overflow = 'hidden';
            }

            if( $(this).hasClass('css') && modals[i].getAttribute('class').indexOf('css') > 0){
                modals[i].parentNode.style.display = 'block';
                $('html')[0].style.overflow = 'hidden';
            }

            if( $(this).hasClass('js') && modals[i].getAttribute('class').indexOf('js') > 0){
                modals[i].parentNode.style.display = 'block';
                $('html')[0].style.overflow = 'hidden';
            }

            if( $(this).hasClass('jquery') && modals[i].getAttribute('class').indexOf('jquery') > 0){
                modals[i].parentNode.style.display = 'block';
                $('html')[0].style.overflow = 'hidden';
            }

        }

    });

    $('.modal').on('click', function(e){


        if($(this)[0] == e.target){
            $(this).css('display', 'none');
            $('html')[0].style.overflow = 'auto';
        }

        

    });


    // var = document.writeeroakewlrkea

    // modal.addEventListener('click', function(){

    // })



});