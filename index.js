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
        border: 1px solid #9C3D54 !important;
        border-radius: 4px !important;
        padding: 0.1em 0.2em !important;
        margin: 0 0.2em !important;
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #E2703A  !important;
        background-color: #310B0B !important;
        font-family:inherit !important;
        font-size:0.8em !important;
        color: #EEB76B !important;
    

        

        ` ;
        div.innerHTML = className;
        return div
    }
    generateShortcuts() {
        document.addEventListener("keydown", (e) => {


            this.keyCode = e.key.toLocaleLowerCase();

            if (e.ctrlKey && e.altKey && this.keyCode) {
                e.preventDefault();

                this.getIndex = this.generateList.indexOf(this.keyCode.toUpperCase());

                console.log(this.getIndex, this.keyCode);

                document.querySelectorAll(`.${this.link}`)[this.getIndex].click();

            }

        })
    }






}


let googleHeading = new Shortcut("LC20lb");
googleHeading.query();
googleHeading.generateShortcuts();


