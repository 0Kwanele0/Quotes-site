

const btn = document.getElementById("button")
const qoute = document.getElementById("qoute")
const person = document.getElementById("person")


    
const quotesObject = [{
    q:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    p: "Winston S. Churchill"},
    {q:"It is better to fail in originality than to succeed in imitation.",
    p: "Herman Melville"},
    {q:"The road to success and the road to failure are almost exactly the same.",
    p: "Colin R. Davis"},
    {q:"Success usually comes to those who are too busy to be looking for it.",
    p: "Henry David Thoreau"},
    {q:"Opportunities don't happen. You create them.",
    p: "Chris Grosser"},
    {q:"Don't be afraid to give up the good to go for the great.",
    p: "John D. Rockefeller"},
    {q:"I find that the harder I work, the more luck I seem to have.",
    p: "Thomas Jefferson"},
    {q:"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    p: "Jim Rohn"},
    {q:"Try not to become a man of success. Rather become a man of value.",
    p: "Albert Einstein"},
    {q:"Never give in except to convictions of honor and good sense.",
    p: "Winston Churchill"},
    {q:"Stop chasing the money and start chasing the passion.",
    p: "Tony Hsieh"},
    {q:"Success is walking from failure to failure with no loss of enthusiasm.",
    p: "Winston Churchill"}
]


choosen = Math.floor((Math.random()*quotesObject.length))  

qoute.innerText = quotesObject[choosen].q
person.innerText = quotesObject[choosen].p  

btn.addEventListener('click', ()=>{
    choosen = Math.floor((Math.random()*quotesObject.length))  
    qoute.innerText = quotesObject[choosen].q
    person.innerText = quotesObject[choosen].p 

})