console.log("handling connect!");

$(document).ready(function() {
	$("#getLocation").click(function(){
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/"+$("#searchLocation").val(),
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				print.append("latitude = " + latitude + "/" + "longitude = " + longitude + "/" + "location = " + location);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

$(document).ready(function() {
	$("#donggang").click(function(){
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
			url : "departmentMap/datas/donggang",
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


//병원 1층 편의시설
//카페
$(document).ready(function() {
	$("#cafe").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/cafe",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">카페, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 바로 오른쪽에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//편의점
$(document).ready(function() {
	$("#conv").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/conv",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">편의점, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 바로 왼쪽에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//병원 1층 진료과
//[1.3] 신장내과
$(document).ready(function() {
	$("#Renal").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Renal",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">신장내과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
					console.log("pretty iw connect");
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});
				print.append("1층 입구에서 직진하여 우측에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[1.2] 소화기내과
$(document).ready(function() {
	$("#gastroenterology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/gastroenterology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">소화기내과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				
				print.append("1층 입구에서 직진하면 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[1.1] 내분비내과
$(document).ready(function() {
	$("#endocrine").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/endocrine",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">내분비내과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 직진하여 왼쪽 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[1.4] 혈액종양내과
$(document).ready(function() {
	$("#Hematologic").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Hematologic",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">혈액종양내과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 좌측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[1.5] 피부과
$(document).ready(function() {
	$("#Dermatology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Dermatology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">피부과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 우측으로 직진하여 신장내과 옆에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[1.6] 호흡기내과
$(document).ready(function() {
	$("#Respiratory").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Respiratory",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">호흡기내과, 1층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("1층 입구에서 우측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//2층
//[2.3] 방사선종양학과
$(document).ready(function() {
	$("#Radiological").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Radiological",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">방사선종양학과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.2] 마취통증학과
$(document).ready(function() {
	$("#Anesthesia").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Anesthesia",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">마취통증학과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 바로 우측에 위치합니다");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.1] 가정의학과
$(document).ready(function() {
	$("#Family").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Family",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">가정의학과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.4] 비뇨의학과
$(document).ready(function() {
	$("#urology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/urology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">비뇨의학과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 직진하여 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.5] 산부인과
$(document).ready(function() {
	$("#gynecology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/gynecology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">산부인과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 직진하여 성형외과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.6] 성형외과
$(document).ready(function() {
	$("#plastic").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/plastic",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">성형외과, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 직진하시면 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[2.7] MRI·CT실
$(document).ready(function() {
	$("#MRI_CT").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/CTMRI",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">MRI·CT실, 2층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("2층 엘리베이터에서 좌측으로 가시면 방사선종양학과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//3층
//[3.4] 안과
$(document).ready(function() {
	$("#Ophthalmology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Ophthalmology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">안과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서  맨끝 좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.3] 신경외과
$(document).ready(function() {
	$("#Neurosurgery").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Neurosurgery",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">신경외과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서  좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.2] 신경과
$(document).ready(function() {
	$("#Neurology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Neurology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">신경과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.1] 소아청소년과
$(document).ready(function() {
	$("#Pediatrics").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Pediatrics",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">소아청소년과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.5] 영상의학과
$(document).ready(function() {
	$("#Radiology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Radiology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">영상의학과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서 직진하여 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.6] 외과
$(document).ready(function() {
	$("#Surgery").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Surgery",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">외과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서  직진하여 이비인후과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.7] 이비인후과 
$(document).ready(function() {
	$("#Otolaryngology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Otolaryngology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">이비인후과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서 직진하여 외과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

//[3.8] 정신건강의학과
$(document).ready(function() {
	$("#Mental").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "departmentMap/datas/Mental",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">정신건강의학과, 3층';
				let iwPosition = new kakao.maps.LatLng(latitude, longitude);
				var infowindow = new kakao.maps.InfoWindow({
				    position : iwPosition, 
				    content : iwContent 
				});
				infowindow.open(map,addMarker(new kakao.maps.LatLng(latitude, longitude))); 
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				var infoTitle = document.querySelectorAll('.info-title');
				infoTitle.forEach(function(e) {
				    var w = e.offsetWidth + 10;
				    var ml = w/2;
				    e.parentElement.style.top = "37px";
				    e.parentElement.style.left = "50%";
				    e.parentElement.style.marginLeft = -ml+"px";
				    e.parentElement.style.width = w+"px";
				    e.parentElement.previousSibling.style.display = "none";
				    e.parentElement.parentElement.style.border = "0px";
				    e.parentElement.parentElement.style.background = "unset";
				});				print.append("3층 엘리베이터에서 직진 후 우측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});