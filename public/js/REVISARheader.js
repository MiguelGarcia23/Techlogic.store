(function () {

    /* Objeto con las propiedades */
    let propHeader = {

        header: document.getElementById('main-header'),
        position: window.pageYOffset
    }
    

    /* Objeto con los métodos */
    let methodHeader = {

        inicio: () => {

            window.addEventListener('scroll', methodHeader.changeHeader)
            
        },
        
        changeHeader: () => {

            propHeader.position= window.pageYOffset;

            if (propHeader.position > 0) {

                propHeader.header.style.backgroundColor = 'black';
                

                
                
            } else {
                
                propHeader.header.style.backgroundColor = 'transparent';
                
                
                

            }

        }
    }

    methodHeader.inicio()

}())
