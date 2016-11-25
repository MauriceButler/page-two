function gottoPage2() {
    var page2Link = document.querySelector('a[aria-label$="Page 2"]');

    if (page2Link) {
        page2Link.click();
    }
}

setInterval(gottoPage2, 10);
