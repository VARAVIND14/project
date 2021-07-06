module.exports.home = function(req, res){
    return res.render('home',{
        title: "Yo Baby, I am the Title!"
    });
}