$(document).ready(function () {

    function mostrarPresentacionIngles() {
        var datos = "<div id='contenedor-ingles'>\n\
                    <p id='ingles-titulo-principal' class='ingles-titulo'>PRESENTATION</p>\n\
                    <br/>\n\
                    <p class='ingles-titulo'>About us</p>\n\
                    <p class='ingles-contenido'>\n\
                        Taronja Games is an online shop dedicated to commercialize video games in a physical format \n\
                        and offers online information services about this sector of computer entertainment systems.\n\
                        Our philosophy is to offer the best service to our customers by offering the best products \n\
                        at the best prices and with the best and latest information of the gamer world.\n\
                        <br/><br/>\n\
                        In our web, you have access to the new releases of best titles of more important companies of video games distribution, \n\
                        comfortably from your home, to quickly and easilly way.\n\
                    </p>\n\
                    <br/><br/>\n\
                    <p class='ingles-titulo'>News</p>\n\
                    <p class='ingles-contenido'>\n\
                        In the section dedicated to news, you can have access to the most updated information in the videogames world, \n\
                        in all its sections, concerning new incorporations of video games, accesories, etc. to the market, video games platforms, \n\
                        news to the development companies of software, the last technologies and new fields of investigation of hardware and software architectures, events, etc.\n\
                        <br/>\n\
                        You can choose the way that you prefer to see the information; if you have time and you want to enjoy calmly all news and  curiosities of the gamer universe, \n\
                        you can see all contents without filters, but if you do not have much time or you are only interested in all things regarding a specific platform, \n\
                        you can easily choose the option or options that you are more interested.\n\
                    </p>\n\
                    <br/><br/>\n\
                    <p class='ingles-titulo'>Ranking</p>\n\
                    <p class='ingles-contenido'>\n\
                        In our web, you have one interesting section that you can see which video games that are the most successful among gamers. \n\
                        Thus, if you need some help to know what are the most popular titles that you can be thinking of buying, you have a basis to take a good decision.\n\
                        <br/>\n\
                        As in the rest of the contents of our website, you can customize, with many options, how you want to see the information that interests you. \n\
                        This way you will see the ranking of video games, video consoles, accessories, etc. using the criteria that you like, \n\
                        whether directly by title or platform or price, etc.\n\
                    </p>\n\
                    <br/><br/>\n\
                    <p class='ingles-titulo'>Customers and users service</p>\n\
                    <p class='ingles-contenido'>\n\
                        Our customers can shop comfortable and easily from home in a few clicks of mouse. \n\
                        The only requirement is that they are registered on our website and have been logged at the moment of purchase. \n\
                        To make the payment, our customers will have the possibility of choose various payment methods: making a bank transfer, \n\
                        directly making a deposit in our account and through PayPal payment gangway and too, if they prefer, \n\
                        we also offer the possibility to pay when receiving the order, through COD system (Cash on Delivery). \n\
                        Besides, all of these services offer the best guarantee; if you are not satisfied with the product, you will have a space of time \n\
                        to make your return and we will refund the full amount of the order.\n\
                        <br/><br/>\n\
                        The users registered on our website will be able to access a lot of information and much more. \n\
                        They will receive periodically in your email, without having to do anything for your part, our newsletter, \n\
                        where they will find the latest sector information, latest releases of the market, special offers and promotions \n\
                        of exclusive products for our customers, interviews with relevant persons of field of software development \n\
                        and all the information on the evolution of new technologies applicable to the gamer world, etc.\n\
                    </p>";

        $("#articulos").html(datos);
    }

    $("#icono-english").click(mostrarPresentacionIngles);
});



