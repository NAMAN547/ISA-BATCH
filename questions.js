

function a(){

    var str1 = "hello";

    function b(){


        console.log(str1);

        var str1 = "hello world";   
    }
    b()
}
a()