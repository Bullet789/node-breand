const productsController = {

    getProducts : (req, res) => {
        res.json('Hello world')},
    getProductsById : (req, res) => {
        res.json(`нет 21`)},
    postProducts : (req, res) => {
        res.json('вайъ не получилось')},
    deleteProducts : (req, res) => {
        res.json(`удали юзера с ID `)
    }

}

module.exports = productsController





