class Counter {
 
   constructor(iniziale,minimo,massimo,passo) {
       this.value=Number(iniziale) || 0
       this.max=Number(massimo) || null
       this.min=Number(minimo) || null
       this.pass=Number(passo) || 1
       //console.log(this.value,this.max,this.min,this.pass)
       if(this.max !=null && this.value>this.max){
           this.value=this.max
           throw new Error('initial è maggiore di max')
       }else if(minimo !=null && this.value<this.min){
           this.value=this.min
           throw new Error('initial è minore di min') 
       }
    }

    increment() {
        if(this.max == null || this.value<this.max){
            this.value+=this.pass
        }
    }

    decrement() {
        if(this.min == null || this.value>this.min){
            this.value-=this.pass
        }
    }
    
}

export default Counter //indispensabile per esportare la classe/modulo all'esterno
