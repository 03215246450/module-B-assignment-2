let arr = [
    {
        brand: "Samsung",
        model: "A30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Samsung",
        model: "A20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb"
    },
    {
        brand: "Vivo",
        model: "Y20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb"
    },
    {
        brand: "Vivo",
        model: "Y15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb"
    },
    {
        brand: "Motorola",
        model: "123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb"
    },
    {
        brand: "Iphone",
        model: "12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
    {
        brand: "Iphone",
        model: "X",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb"
    },
]




let inp = document.getElementById("input")
let dropdown = document.getElementById("dropdown")


function mobilelist() {
    let inpval = document.getElementById("input").value.toLowerCase();
    let dropdown = document.getElementById("dropdown").value;

    let arrfilter = arr.filter((mobile) => {
        let mobileProperty = mobile[dropdown].toLowerCase();
        return mobileProperty.includes(inpval);
    });

    let divlist = document.getElementById("divlist");
    divlist.innerHTML = "";

    if (arrfilter.length === 0) {
        divlist.innerHTML = "<p>this is not in our Mobile list</p>";
    } else {
        for (let i = 0; i < arrfilter.length; i++) {
            let mobile = arrfilter[i];
            let detail = document.createElement("div");
            detail.innerHTML = `
              <p>Brand: ${mobile.brand}</p>
              <p>Model: ${mobile.model}</p>
              <p>Price: ${mobile.price}</p>
              <p>Camera: ${mobile.camera}</p>
              <p>RAM: ${mobile.ram}</p>
              <p>ROM: ${mobile.rom}</p>
            
            `;
            divlist.appendChild(detail);
        }
    }
}
