function oneClicked() {
    $(".container-fluid").find('main').load("../index.html");
}

function twoClicked() {
    $(".container-fluid").find('main').load("../index2.html");
}

// body > div > div > nav > ul:nth-child(1) > li:nth-child(1) > a
function dashboardClicked() {
    $(".container-fluid").find('main')
        .load("dashboard.html").find('');
}
