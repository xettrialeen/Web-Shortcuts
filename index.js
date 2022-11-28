class Shortcut {

    constructor(linkName) {
        this.link = linkName;
        this.getIndex;
        this.allIndex = [];
        this.generateList = ["A", "B", "C", "D", "E", "F", "G",
            "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        this.keyCode;
    }

    query() {
        // setting every a link to target into new page
        document.querySelectorAll('a').forEach((aResults) => {
            if (aResults.hasAttribute("target") && aResults.getAttribute("target") === "_blank") {

            } else {
                aResults.setAttribute("target", "_blank");
            }

        })

        document.querySelectorAll(`.${this.link}`).forEach((retrievedData, index) => {
            // console.log(retrievedData);

            this.allIndex.push(retrievedData);

            retrievedData.append(this.styling(`CTRL + Alt + ${this.generateList[index]}`))
            // generating random list
            // document.querySelectorAll(`.${this.link}`)[index].innerHtml += `CTRL + ${this.generateList[index]}`;




        });
    }

    styling(className) {

        let div = document.createElement("button");
        div.className = "Haribijok"
        div.style = `
        display: inline-block !important;
        border: none !important;
        outline:none !important;
        border-radius: 4px !important;
        padding: 0.1em 0.2em !important;
        margin: 0 0.2em !important;
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #434242  !important;
        background-color: #222222 !important;
        font-family:inherit !important;
        font-size:16px !important;
        color: #F3EFE0 !important;
        font-weight:bold !important;
    

        

        ` ;
        div.innerHTML = className;
        return div
    }
    generateShortcuts() {
        document.addEventListener("keydown", (e) => {


            try {
                this.keyCode = e.key.toLocaleLowerCase();

                if (e.ctrlKey && e.altKey && this.keyCode) {
                    e.preventDefault();

                    this.getIndex = this.generateList.indexOf(this.keyCode.toUpperCase());

                    console.log(this.getIndex, this.keyCode);

                    document.querySelectorAll(`.${this.link}`)[this.getIndex].parentElement.click();

                }
            } catch (error) {
                console.log(error);
            }

        })
    }






}


let googleHeading = new Shortcut("LC20lb");
googleHeading.query();
googleHeading.generateShortcuts();


// have finished google shortcut keys

// lets create a class which blackllists sites
const options = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Key': '26db254d00c48cc2ddfd049278b161f31c9ebfb135379553685243e55c9b67a016ec269c7f1acf80'
    },
 
};

const querystring= {
    'ipAddress': '118.25.6.39',
    'maxAgeInDays': '90'
}
fetch("https://api.abuseipdb.com/api/v2/check/",{
    method:'GET',
    headers:{
        key: '26db254d00c48cc2ddfd049278b161f31c9ebfb135379553685243e55c9b67a016ec269c7f1acf80',
        Accept: 'application/json'
      
    },
 
    Cache: 'default'
})