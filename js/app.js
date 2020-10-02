const indc = () => {

    const wait = document.querySelector("#wait").style.color
    const scroll = document.querySelector("#scroll").style.color

    document.querySelector("#wait").style.display = "inline";
    document.querySelector("#scroll").style.display = "none";

    setTimeout(change, 9350);

    function change() {
        document.querySelector("#scroll").style.display = "inline";
        document.querySelector("#wait").style.display = "none";
    }


}

indc()

const wait = () => {
    document.querySelector("#waitError").style.top = "5%";
    document.querySelector("#waitError").style.opacity = "1";
    document.querySelector("#waitError").style.display = "flex";
    setTimeout(waitError, 2000);
    function waitError() {
        document.querySelector("#waitError").style.display = "flex";
        document.querySelector("#waitError").style.top = "-5%";
        document.querySelector("#waitError").style.opacity = "0";
    }
}