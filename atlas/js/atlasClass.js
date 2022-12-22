export default class atlasClass {
    constructor(_parent, _item,  shortTofullCountry, doApi) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = Object.keys(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.coinDescription = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital;
        this.map = _item.latlng;
        this.borders = _item.borders;
        this.doApi = doApi;
      
    }
    
    render() {
        let div = document.createElement("div");
        div.className = "col-md-7 mx-auto p-4  overflow-hidden";
        div.style = "background: #515566ad;}"
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img src="${this.flag}" alt="${this.name}" class="w-50 float-end ms-4">
        <h2>${this.name}</h2>
        <div>POP: ${this.pop} </div>
        <div>Region: ${this.region}</div>
        <div>Languages: ${this.languages}</div>
        <div>Coin:  ${this.coin}, ${this.coinDescription}</div>
        <div>Capital: ${this.capital}</div>
        <div class="borders_div"></div>
       
        </div>
        
        <iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=${this.map[0]},${this.map[1]}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
       `
       
       
        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item) => {
            let a = document.createElement("a");
            a.innerHTML = await this.shortTofullCountry(item) + " ";
            a.style = "color: red; cursor: pointer; "
            borders_div.append(a);
            a.addEventListener("click", () => {
                this.doApi(a.innerHTML);
            })
        })



    }
}