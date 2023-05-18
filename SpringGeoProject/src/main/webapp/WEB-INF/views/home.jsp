<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%
request.setCharacterEncoding("utf-8");
%>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>울산 그린 병원</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<!-- Custom Google font-->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
	rel="stylesheet" />
<!-- SweetAlert2 CSS -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.css">
<!-- Bootstrap icons-->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="resources/css/styles.css" rel="stylesheet" />
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<!-- Navigation-->
<jsp:include page="nav.jsp" flush="false" />
<style>
.centered-div {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<!-- Contents -->
<body class="d-flex flex-column h-100 flex-shrink-0 BgImage">
	<div data-aos="fade-right">
		<div class="container p-3">
			<div class="row gx-5 align-items-center">
				<div class="col-xxl-7">

					<div class="centered-div">
						<div id="map" style="width: 300px; height: 300px;"></div>
					</div>
					<div class="centered-div">
						<p class="gap-3 lead rounded text-dark fs-6 fw-light"
							style="width: 300px; text-shadow: 1px 1px 1px white; background-color: rgba(255, 255, 255, 0.5);">
							현재 사용자 위치를 기준으로 선택한 병원 내 진료 부서 및 편의시설로 가는 길을 안내하는 가이드입니다.</p>
					</div>
					<div
						class="text-center InternetIssue gap-3 d-sm-flex justify-content-sm-center Sans ">
						<a href="testpage"
							class="bg-gradient-primary-to-secondary btn btn-lg fs-4 fw-bolder mt-0"><span></span>
							<span></span> <span></span> <span></span>병원 내 길찾기 가이드</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Bootstrap core JS-->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.10/dist/sweetalert2.min.js"></script>
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	<script>
		AOS.init();
	</script>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="resources/handledata.js"></script>
	<!-- Kakao Map API -->
	<script type="text/javascript"
		src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9e59e38aea07e8af3f0d4652fa425483"></script>
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
            message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다
        
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
</body>
</html>