var arFileName = ["gameSadari","gameJebi","gameDice","gameRussian","gameBottle"];

// 게임 리스트 생성
var arTitle = ["사다리타기","제비뽑기","주사위대결","러시안룰렛","병돌리기"];
var arCount = ["2인 - 8인","2인 - 8인","2인","2인, 3인, 6인","2인 - 8인"];
var arKill = ["여러명","여러명","한명","한명","한명"];
var arMission = ["자유","통과/꽝","낮은 합계","통과/꽝","지목"];
var arColor = ["red","orange","yellow","green","magenta"];
for (var i = 0; i< arTitle.length; i++){
    var gameList="" +
        "            <div class=\"card card-style\">\n" +
        "                <div class=\"content\">\n" +
        "                    <div class=\"row mb-0\">\n" +
        "                        <div class=\"col-8\">\n" +
        "                            <h3 class=\"mb-2\">"+arTitle[i]+"</h3>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-4\">\n" +
        "                            <a href=\"#\" data-menu=\"menu-"+arFileName[i]+"\" class=\"btn btn-full btn-s font-600 font-12 rounded-m gradient-"+arColor[i]+"\">시작</a>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-10\">\n" +
        "                            <span class=\"badge bg-"+arColor[i]+"-dark pm-1\">"+arCount[i]+"</span><span class=\"badge pm-2\">벌칙 : "+arKill[i]+" · "+arMission[i]+"</span>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    $("#tab-1").append(gameList);
}
// 배정 리스트 생성
var arTitle2 = ["팀 나누기","토너먼트 대진표 만들기"];
var arSummary = ["팀원 수와 전체 인원의 이름을 입력하면 자동으로 팀을 배정해줍니다.",
    "참가할 인원들의 이름을 입력하면 자동으로 대진표를 만들어줍니다."];
var arCount2 = ["4인 - 16인","4인, 8인, 16인"];
var arColor2 = ["brown","dark"];
for(var i = 0; i < arTitle2.length; i++) {
    var castList = "" +
        "           <div class=\"card card-style\">\n" +
        "                <div class=\"content\">\n" +
        "                    <h2>"+arTitle2[i]+"</h2>\n" +
        "                    <h5 class=\"font-11 opacity-30 line-height-s mb-3\">"+arSummary[i]+"</h5>\n" +
        "                    <div class=\"row mb-0\">\n" +
        "                        <div class=\"col-8\">\n" +
        "                            <span class=\"badge bg-"+arColor2[i]+"-dark pm1\">"+arCount2[i]+"</span>\n" +
        "                        </div>\n" +
        "                        <div class=\"col-4\">\n" +
        "                            <a href=\"#\" class=\"btn btn-full btn-s font-600 font-12 rounded-m gradient-"+arColor2[i]+"\">시작</a>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    $("#tab-2").append(castList);
}

// 인원수 선택 리스트 생성
var arrCountNum = [[2,3,4,5,6,7,8],[2,3,4,5,6,7,8],[2],[2,3,6],[2,3,4,5,6,7,8]];

for(var i=0; i<arFileName.length;i++){
    var menuOption = "";
    for(var j=0; j<arrCountNum[i].length;j++){
        menuOption += "                <a href=\""+arFileName[i]+".html?cnt="+arrCountNum[i][j]+"\"><span>"+arrCountNum[i][j]+"명</span><i class=\"fa fa-angle-right\"></i></a>\n";
    }
    var countList =
        "<div id=\"menu-"+arFileName[i]+"\"\n" +
        "         class=\"menu menu-box-modal rounded-m\"\n" +
        "         data-menu-height=\""+(100+(arrCountNum[i].length)*50)+"\"\n" +
        "         data-menu-width=\"300\">\n" +
        "        <div class=\"menu-title\">\n" +
        "            <h1 class=\"font-24\">참가인원</h1>\n" +
        "            <a href=\"#\" class=\"close-menu\"><i class=\"fa fa-times-circle\"></i></a>\n" +
        "        </div>\n" +
        "        <div class=\"mr-3 ml-3 mt-3\">\n" +
        "            <div class=\"list-group list-custom-small\">\n" + menuOption +
        "            </div>\n" +
        "            <div class=\"clear\"></div>\n" +
        "        </div>\n" +
        "    </div>";
    $("#page").append(countList);
}

