//        window.alert('hello world!');
console.log('hello world');


var scoreObj = {
    kor: 50,
    math : 60
}

// 함수
function sayHello() {
    console.log('HELLO~~!');
}

function sayHello3(greet) {
    greet();
}

// 익명함수
var sayHello2 = function () {
    console.log('HELLO2!!!');
};

// 함수 호출 (call, invoke, apply(적용))
sayHello();

sayHello2();

sayHello3(sayHello2);

// 가장 많이 쓰는 형태 코드
sayHello3(function () {
   console.log("안녕하세요~~~~~");
});


//1. DOM 객체 핸들링 --> 화면을 동적으로 바꾸는것
//프로그래밍 순서
//1. 대상이 되는 태그(엘레먼드, DOM객체)를 찾는다
//2. 조작한다.

// *************  basic JavaScript ***************
// document.querySelector('.jumbotron h1').innerHTML = '안녕하세요';
//
// //2. 이벤트 처리
// function btnClicked() {
//     document.querySelector('.jumbotron h1').innerHTML = 'Ni hao~!';
// }
// ****************************************************

$(document).ready(function () {

    var testObj = {
        lastName: 'jung',
        age: '26'
    };
    // localStorage.setItem('item', JSON.stringify(testObj));
    //
    // localStorage.setItem('lastName', 'jung');
    // localStorage.setItem('age', '13');

    $('.jumbotron h1').text('안녕하세요');

    var liStr = '<li>data</li>';
    $('div.jumbotron a').on('click', function () {
        $.get("http://api.github.com/users", function (res) {
            var theTag = $('#list');
            for(var item in res){
                theTag.append($(liStr.replace('data', res[item].login)))
            }
        });
    })

    // body > div.jumbotron > div > p:nth-child(3)
    // 1. <p> 태그 selecting
    var pTag = $('body').find('div.jumbotron').find('div').find('p')
        .first().next();

    console.log(pTag);
    
    var newTag = $('<a class="btn btn-primary btn-lg" href="#" role="button">더 알아보기 &raquo;</a>');
    
    pTag.append(newTag);

    $(pTag).on('click', function () {
        $('#target').text('상세보기');
    });

    $(pTag.parent()).on('click','a:last', function () {
        $('#target').text('view details >>');
    });

    // ********** EVENT 처리 ************
    // TEST1
    // $('div.container').find('.row').find('div').first().find('p').last().find('a')
    //     .on('click', function () {
    //         // window.alert('hi');
    //         // $('div.container').find('.row').find('div').first().find('p').first().hide();
    //         $('div.container').find('.row').find('div').first().find('p').first().toggle();
    //     });

    // TEST2
    $('div.container').find('.row').find('div').first().find('p').last().find('a')
        .on('click', function () {
            // window.alert('hi');
            // $('div.container').find('.row').find('div').first().find('p').first().hide();
            $(this).parent().prev().toggle();

            // console.log(JSON.parse(localStorage.getItem('item')).lastName);
            // alert(localStorage.getItem('lastName'));
        });
    
});

// function btnClicked() {
//     $('#target').text('상세보기');
// }


// #yWelMid > div.yWelNowBook > div.nowBookArea > div:nth-child(2) > ul > li:nth-child(3) > div > p.goods_name > a

// $('#yWelMid').find('div.yWelNowBook')
//     .find('div.nowBookArea')
//     .find('div').first().next()
//     .find('ul').find('li')
//     .first().next().next()
//     .find('div')
//     .find('p.goods_name')
//     .first('a');

//

