class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home');
    }
}

//Tạo ra instance SiteController ra ngoài khi được gọi
module.exports = new SiteController();
