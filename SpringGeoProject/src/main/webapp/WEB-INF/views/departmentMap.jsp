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
<title>병원 내부 위치 안내 가이드</title>
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
<link href="resources/css/mapButton.css" rel="stylesheet" />
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
header {
	height: 10px !important;
	opacity: 0.9;
}
</style>

<!-- Contents -->
<body class="d-flex flex-column h-100 flex-shrink-0">
	<div data-aos="fade-right" data-aos-offset="300"
		data-aos-easing="ease-in-sine">
		<div class="container p-3">
			<div class="row justify-content-center align-items-center">
				<div class="col-12 col-md-8 col-lg-6 col-xxl-7 text-center">
					<div>
						<span class="DarkText-gradient d-inline fw-bolder Sans fs-5">병원
							내부 위치 안내 가이드</span>
					</div>
					<div class="centered-div ">
						<!-- 지도 -->
						<div id="map" style="width: 350px; height: 350px;"></div>
					</div>
					<div class="centered-div mt-2 text-left">
						<!-- 위치 설명 문장 -->
						<p id="print" class="gap-3 lead rounded text-dark fs-6 fw-bold">
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<table class="mb-3">
		<tr>
			<td class="fw-bold">
				<h1 class="container col-xl-8 text-left ps-4">
					<img src="resources/images/building2.png"
						style="width: 35px; height: 35px;" border="0" /> <span
						class="text-gradient d-inline fw-bolder Sans fs-3">진료부서</span>
				</h1>
			</td>
		</tr>
		<!-- 1층 -->
		<tr>
			<td class="fw-bold">
				<h1 class="container col-xl-8 text-left ps-4">
					<span class=" d-inline fw-bolder Sans fs-5" style="color: #606060">1층</span>
				</h1>
			</td>
		</tr>
		<tr class="text-center">

			<td><input type="button" id="endocrine" value="내분비내과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2 mt-0">
				<input type="button" id="Respiratory" value="호흡기내과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2 mt-0"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="gastroenterology" value="소화기내과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2">
				<input type="button" id="Renal" value="신장내과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Hematologic" value="혈액종양내과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2">
				<input type="button" id="Dermatology" value="피부과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 Sans fw-bolder fs-6 m-2">
			<td>
		</tr>
		<!-- 2층 -->
		<tr>
			<td class="fw-bold">
				<h1 class="container col-xl-8 text-left ps-4">
					<span class=" d-inline fw-bolder Sans fs-5" style="color: #606060">2층</span>
				</h1>
			</td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Family" value="가정의학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0">
				<input type="button" id="Radiological" value="방사선종양학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Anesthesia" value="마취통증학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="urology" value="비뇨의학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="gynecology" value="산부인과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="plastic" value="성형외과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="MRI_CT" value="MRI·CT실"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<!-- 3층 -->
		<tr>
			<td class="fw-bold">
				<h1 class="container col-xl-8 text-left ps-4">
					<span class=" d-inline fw-bolder Sans fs-5" style="color: #606060">3층</span>
				</h1>
			</td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Ophthalmology" value="안과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0">
				<input type="button" id="Radiology" value="영상의학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Otolaryngology" value="이비인후과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="Surgery" value="외과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Pediatrics" value="소아청소년과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="Neurology" value="신경과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="Neurosurgery" value="신경외과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="Mental" value="정신건강의학과"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
		<!-- 편의시설 -->
		<tr>
			<td class="fw-bold">
				<h1 class="container col-xl-8 text-left ps-4 pt-3">
				<img src="resources/images/cafe.png"
						style="width: 35px; height: 35px;" border="0" /> 
					<span class="text-gradient d-inline fw-bolder Sans fs-3">편의시설</span>
				</h1>
			</td>
		</tr>
		<tr class="text-center">
			<td><input type="button" id="conv" value="편의점"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
				<input type="button" id="cafe" value="카페"
				class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
		</tr>
	</table>

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
	<script src="resources/topButton.js"></script>
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
              message = 'geolocation을 사용할 수 없어요.';
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

function hideMarkers() {
	marker.setMap(null);
}

//일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
</script>
	<!-- Top Button -->
	<script>
$(function(){
  $("#gotop").hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){$("#gotop").fadeIn();}
    else{$("#gotop").fadeOut();}
  });
});
</script>
	<a href="#" id="gotop"
		style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 99999999"
		title="Top"> <img src="resources/images/topButton3.gif"
		style="width: 35px; height: 35px; margin: -10px -5px;" border="0" /></a>
</body>
</html>