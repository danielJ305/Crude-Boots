
$(".color-btn").each(function () {
    $(this).on('change', function (evt) {
        updateProductView(evt.target.id, evt.target.checked);
    });
});
$(".size-btn").each(function () {
    $(this).on('change', function (evt) {
        updateProductView(evt.target.id, evt.target.checked);
    });
});


let i = 0;

function updateProductView(categoryName, bVisible) {
    var dataSelectorVal = "";
    switch (categoryName) {
        case "colorbrown":
            dataSelectorVal = "div.price_sec[color*='brown']";
            break;
        case "colorblack":
            dataSelectorVal = "div.price_sec[color*='black']";
            break;
        case "coloroxblood":
            dataSelectorVal = "div.price_sec[color*='oxblood']";
            break;
        case "colorgray":
            dataSelectorVal = "div.price_sec[color*='gray']";
            break;
        case "colortonal":
            dataSelectorVal = "div.price_sec[color*='tonal']";
            break;
        case "size8":
            dataSelectorVal = "div.price_sec[size*='8']";
            break;
        case "size9":
            dataSelectorVal = "div.price_sec[size*='9']";
            break;
        case "size10":
            dataSelectorVal = "div.price_sec[size*='10']";
            break;
        case "size11":
            dataSelectorVal = "div.price_sec[size*='11']";
            break;
        case "size12":
            dataSelectorVal = "div.price_sec[size*='12']";
            break;
    }
    let colorRegex = /color/;
    let colorVal = "";
    if (dataSelectorVal.match(colorRegex)) {
        // console.log(dataSelectorVal.match(colorRegex));
        colorVal = dataSelectorVal;
    }
    let sizeRegex = /size/;
    let sizeVal = "";
    if (dataSelectorVal.match(sizeRegex)) {
        // console.log(dataSelectorVal.match(sizeRegex));
        sizeVal = dataSelectorVal;
    }
    


    if (i === 0) {
        if ($(`input#${categoryName}`).has("[checked='checked']")) {
            console.log('y');
            $('div.boot').each(function () {
                $(this).css('display', 'none');
            });
        }
        i++;
    }
    if ($(`#${categoryName}`).has(sizeVal) && $(`#${categoryName}`).has(colorVal)) {
        console.log($(`#${categoryName}`));
    }
    $('div.boot').has(dataSelectorVal).css('display', bVisible ? "" : "none");
};
