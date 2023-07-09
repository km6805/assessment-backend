if (typeof window !== "undefined") {

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton")
const httpBtn = document.getElementById("httpButton")
const complimentInput = document.getElementById("complimentInput")
const complimentPostButton = document.getElementById("complimentPostButton")
const displayInput = document.getElementById("displayInput")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
     const data = res.data
     alert(data)
    });

};

fortuneBtn.addEventListener('click', getFortune)

const getHttp = () => {
    axios.get("http://localhost:4000/api/http/")
        .then(res => {
            const data = res.data
            alert(data)
        })
};

httpBtn.addEventListener('click', getHttp)

const postCompliment  =  () =>  {
    axios.post("http://localhost:4000/api/compliment/", {complimentInput: complimentInput.value})
        .then(res => {
            const data = res.data;
            displayInput.innerHTML = data;
            alert(data)
    });
}
complimentPostButton.addEventListener('click', postCompliment)

}