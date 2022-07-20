(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProduct(id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }
    
    class Mailer {

        private masterEmail: string = 'puntocodepy@gmail.com';
    
        sendEmail(emailList:string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', emailList, template);
        }
    
    }


    class Cart{
        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }



    class ProductBloc {

        private productService: ProductService;
        private mailer:Mailer;

        constructor(productService:ProductService, mailer:Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['prueba@mail.com'], "to-clients");
        }
    
    
    }



    const productService:ProductService = new ProductService();
    const mailer:Mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cart = new Cart();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cart.addToCart(10);








})();