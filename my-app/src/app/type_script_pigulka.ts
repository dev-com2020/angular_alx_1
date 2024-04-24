let marka: string = "LG"
let wiek: number = 42
let wiadomosc: string = `Telewizor marki ${marka}`
let isCool: boolean = false
// var zmienna = true
let lista: number[] = [1,2,3]
let cokolwiek: any[] = ['tomek',32,false]

let und: undefined = undefined
let nu: null = null

function test():void {
    let x
}

function hello(name:string):string {
    return `Witaj ${name}` 
}

let myAdd = function(x:number,y:number):number {return x + y}
let myAddArrow = (x:number,y:number):number => x + y

console.log(hello('Tomasz'))

const PI = 3.14

type Zwierzak = 'pies'|'kot'|'chomik'

let moj_zwierzak: Zwierzak = 'pies'

enum Marki {BMW = 10,Audi,Mercedes,Fiat}
let moje_auto: Marki = Marki.BMW

enum StackIndex {
    None = 0,
    Drop = 100,
    Overlay = 1000
}

function greetMe(name: string, greeting?: string): string {
    if (!greeting) {
        greeting = 'Hej'
    }
    return greeting + " " + name
}

function greetMe2(name: string, greeting: string = 'Hejo'): string {
    return greeting + " " + name
}

function greetPeople(greeting: string, ...names: string[]): string {
    return greeting + ' ' + names.join(' oraz ') + '!'
}

console.log(greetMe('Tomasz','Dzień dobry'))
console.log(greetMe2('Tomek'))

class Car {
    private distance: number = 0

    constructor(private color: string = 'red'){
        this.color = color
    }

    drive(): string {
        return 'Jade'
    }
    get newDistance():number{
        return this.distance
    }
}

class Sedan extends Car {
    model: string = 'bmw'

    constructor(color:string, model:string){
        super(color)
        this.model = model
    }
}


function Jablko(target: Function): void {
    target.prototype.Jablko = function():void{
        console.log("Mam jabłko!")
    }
}
@Jablko
class Koszyk{}
const basket: any = new Koszyk()
basket.Jablko()