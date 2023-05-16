<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%request.setCharacterEncoding("utf-8");%>
<meta charset="utf-8" />
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9e59e38aea07e8af3f0d4652fa425483"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<div id="map" style="width:60%;height:700px;"></div>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        console.log("lat = " + lat);
        console.log("lon = " + lon);
            
      }, function(error) {
          // 위치 정보를 가져오지 못할 경우 기본 위치로 설정합니다.
          var defaultPosition = new kakao.maps.LatLng(33.450701, 126.570667),
              message = 'geolocation을 사용할 수 없어요..';

          displayMarker(defaultPosition, message);
        },
        { enableHighAccuracy: true }
      );
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}

$(document).ready(function() {
	$("#star").click(function(){
		function addMarker(position) {
		    // 마커를 생성합니다
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    // 마커가 지도 위에 표시되도록 설정합니다
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "testpage/datas/star",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("latitude = " + latitude + "/" + "longitude = " + longitude + "/" + "location = " + location);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});
function hideMarkers() {
	marker.setMap(null);
}
</script>

<input type="text" id="searchLocation"><br>
<input type="button" id="getLocation" value="찾기"><br>
<div id="print"></div>
<br>
<button onclick="hideMarkers()">마커 지우기</button>
<br>
<input type="button" id="star" value="스타벅스">
<input type="button" id="donggang" value="동강병원">

<input type="button" id="Renal" value="신장내과">
<input type="button" id="gastroenterology" value="소화기내과">
<input type="button" id="endocrine" value="내분비내과">
<input type="button" id="Hematologic" value="혈액종양내과">
<input type="button" id="Dermatology" value="피부과">
<input type="button" id="Respiratory" value="호흡기내과">
<input type="button" id="cardiology" value="심장내과">
<input type="button" id="Radiological" value="방사선종양학과">
<input type="button" id="Anesthesia" value="마취통증학과">
<input type="button" id="Family" value="가정의학과">
<input type="button" id="urology" value="비뇨의학과">
<input type="button" id="gynecology" value="산부인과">
<input type="button" id="plastic" value="성형외과">
<input type="button" id="Ophthalmology" value="안과">
<input type="button" id="Neurosurgery" value="신경외과">
<input type="button" id="Neurology" value="신경과">
<input type="button" id="Pediatrics" value="소아청소년과">
<input type="button" id="Radiology" value="영상의학과">
<input type="button" id="Surgery" value="외과">
<input type="button" id="Otolaryngology" value="이비인후과">
<input type="button" id="Mental" value="정신건강의학과">


<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="resources/handledata.js"></script>
</body>
</html>