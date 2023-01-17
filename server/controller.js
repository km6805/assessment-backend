module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you.", "A smile is your personal welcome mat.", "A lifetime friend shall soon be made.", "All your hard work will soon pay off.", "Every flower blooms in its own sweet time."];
  
        // choose random fortunes
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
  
        res.status(200).send(randomFortune);
}
} 
