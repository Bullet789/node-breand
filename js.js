[
    {
        name : 'samsung',
        price : 100000,
    },
    {
        name : 'сертефикат о вакцинации',
        price : 10000,
    },
    {
        name : 'шапка невидимка',
        price : 2500
    },
    {
        name : 'над пропастью во ржи',
        price : 8
    }
],

[
    {
        name : 'не твое дело',
        price : 'не твое дело 1ад 1е',
    },
    {
        name : 'ва д1авала са кочар',
        price : 'валла т1аьхьар вер волшам вац хьо',
    },
    {
        name : 'ладно',
        price : 'х1у дийр ду хьун'
    }
],

db.books.insertMany(
    [{
        name: 'богатый папа и бедный папа',
        price: 1000,
        amount: 100,
        rating: 5,
        genreId: ObjectId("633d9f4988f164ed28ee273d")
    },
    {
        name: 'моя борьба',
        price: 10000,
        amount: 1,
        rating: 5,
        genreId: ObjectId("633d9f4988f164ed28ee273c")
        
    },
    {
        name: 'секрет успеха в обоих мирах',
        price: 1500,
        amount: 1000,
        rating: 5,
        genreId: ObjectId("633d9f4988f164ed28ee273d")
    },
    {
        name: 'автомеханик',
        price: 500,
        amount: 1000,
        rating: 2,
        genreId: ObjectId("633d9f4988f164ed28ee273d")
    },
    {
        name: 'мыслить',
        price: 300,
        amount: 10000,
        rating: 4,
        genreId: ObjectId("633d9f4988f164ed28ee273c")
    },
    {
        name: 'разум',
        price: 1500,
        amount: 10000,
        rating: 4,
        genreId: ObjectId("633d9f4988f164ed28ee273d")
    }
]
)