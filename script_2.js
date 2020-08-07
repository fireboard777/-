'use strict';
// Фэйк АПИ
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue ({
    el: '#app',
    mounted: function() {
        this.filteredProducts = this.products;
    },
    data: {
        catalogUrl: '/catalogData.json',
        products: [{
                  "id_product": 123,
                  "product_name": "Чизбургер",
                  "price": 120
                },
                {
                    "id_product": 124,
                    "product_name": "Картошка фри",
                    "price": 200
                  },
                {
                  "id_product": 456,
                  "product_name": "Цезарь рол",
                  "price": 104
                },
                {
                    "id_product": 457,
                    "product_name": "Макфлури",
                    "price": 103
                  },
                {
                    "id_product": 458,
                    "product_name": "Милкшейк",
                    "price": 456
                  },    
            ],
        imgCatalog: 'http://placehold.it/250x150',//заглушка
        searchText: '',
        filteredProducts: []
        
    },

    
    methods: {
        addProduct (product) {
            console.log (product.id_product);
        },

        searchFor () {
            let text = this.searchText.toLowerCase().trim();
            
            if (text === '') {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter((el) => {
                    return el.product_name.toLowerCase().includes(text);
                });
            }
            // console.log(this.searchText);
            // console.log(this.products.length);
            
            // let findproduct = () => {
            //     console.log('start Find product');

            //     let productIsHere =  false;
            //     for (let el of this.products) {
                    
            //         if (this.searchText == el.product_name) {
            //             productIsHere = true;
            //             break;
            //         } else {
            //             productIsHere = false;;
            //         } 
                    
            //     } return productIsHere;
            // }
            // if (findproduct() == true) {
            //     console.log();
                
            //     alert('Есть такой');
            // } else {
            //     alert('НЕЕЕЕЕЕ найден');
            // }
        }
    },
})