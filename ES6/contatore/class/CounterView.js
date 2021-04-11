import Counter from "./Counter.js"

class CounterView {


    constructor(selector){

        const el= document.querySelector(selector)
        
        // funziona come un if se title è null prende un valore predefinito
        this.title =el.dataset.title || 'Contatore' 

        this.initial =parseInt(el.dataset.initial) || 0
        this.minimo =parseInt(el.dataset.min) || null
        this.massimo =parseInt(el.dataset.max) || null
        this.pass = parseInt(el.dataset.pass) || 1

        // alt+96 `
        el.innerHTML = `<div class="name">${this.title}</div>
                        <button class="btn-less">-</button>
                        <span class="display">${this.initial}</span>
                        <button class="btn-add">+</button>`
        
        this.name = el.querySelector('.name')
        this.addBtn = el.querySelector('.btn-add')
        this.lessBtn = el.querySelector('.btn-less')
        this.displayBtn = el.querySelector('.display')

        this.addBtn.addEventListener('click',this.addBtnHandler)
        this.lessBtn.addEventListener('click',this.lessBtnHandler)

        this.counter = new Counter(this.initial,this.minimo,this.massimo,this.pass)
    }

    addBtnHandler = () => { //usare l'arrow function permette di tenere il this della classe e non della funzione
        this.counter.increment()
        this.displayBtn.innerHTML = this.counter.value //l'innerHTML ci permette di manipolare il contenuto html dentro un determinato tag
    }

    lessBtnHandler = () => { 
        this.counter.decrement()
        this.displayBtn.innerHTML = this.counter.value
    }


}

export default CounterView