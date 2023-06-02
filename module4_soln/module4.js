function task4(){
    var arr = new Array();
    arr[0] = "Leva"
    arr[1] = "Ana"
    arr[2] = "Kale"
    arr[3] = "Roma"
    arr[4] = "Jumberi"
    arr[5] = "Sandro"
    arr[6] = "Salome"
    arr[7] = "Givi"
    arr[8] = "Cici"
    arr[9] = "Anka"
    arr[10] = "Andro"
    arr[11] = "Nini"
    arr[12] = "jemali"
    arr[13] = "jajuni";   
    helloSpeaker(arr);
    byeSpeaker(arr)
 }

 function helloSpeaker(data){
    for(var i =0;i<= data.length-1; i++){
        if(!(data[i].charAt(0) == "J" || data[i].charAt(0) == "j")){
            console.log("Hello "+ data[i])
        }
    }
 }
 function byeSpeaker(data){
    for(var i =0;i<= data.length-1; i++){
        if(data[i].charAt(0) === 'J' || data[i].charAt(0) === "j"){
            console.log("Good Bye "+ data[i])
        }
    }
 }
 task4();