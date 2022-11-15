const app = Vue.createApp({
    data(){
        return {
            description : 'lorem ipsim',
            url : 'http://google.com',
            active_bg : 'text-teal-600',
            onSale : false,
            products :[
                {id:1, name:'sari', price:200, qty:10, img:'https://static-01.daraz.com.bd/p/2e9044411270240597d1d6941f6de263.jpg'},
                {id:2, name:'shirt', price:500, qty : 50 , img:'https://static-01.daraz.com.bd/p/2e9044411270240597d1d6941f6de263.jpg'}
            ],
            cart : 0,
            totalPrice : 0
        }
    },
    methods: {
        increment(id){
            this.cart++;

            this.products.find(item => item.id === id).qty--

            this.totalPrice += this.products.find(item => item.id === id).price

        }
    },
})