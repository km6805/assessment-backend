module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Great job!", "Nice shirt!", "Your Javascript skills are stellar."];
     
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
     
        res.status(200).send(randomCompliment);
    },





    getFortune: (req, res) => {
        const fortunes = ["Every man is the architect of his own fortune.", "A great mind becomes a great fortune.", "Allow compassion to guide your decisions.","Good things come when you least expect them.","A wise man turns chance into good fortune."]
     
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
     
        res.status(200).send(randomFortunes);
    },

    getPopUp: (req, res) => {
        let url = "https://www.hdwallpaper.nu/wp-content/uploads/2015/02/maxresdefault.jpg"

        res.status(200).send(url)
    },

    putAttempt: (req, res) => {
        const str = "All users can click buttons"
        res.status(200).send(str)
    },

    postBtnExample: (req, res) => {
        const str = "Let's Post"
        res.status(200).send(str)
    },

    postNumBtn: (req, res) => {
        let { num } = req.body
        const str = `${num}`
        res.status(200).send(str)
    }
}