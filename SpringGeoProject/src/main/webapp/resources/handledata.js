/**
 * 
 */
console.log("handling connect!");


$(document).ready(function() {
	$("#getLocation").click(function(){
		$.ajax({
			type : "GET",
			url : "testpage/datas/"+$("#searchLocation").val(),
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
			url : "testpage/datas/donggang",
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
			url : "testpage/datas/Renal",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				let iwContent = '<span class="info-title">Hello World!';
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
				print.append("신장내과는 1층 입구에서 직진하여 우측에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/gastroenterology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("소화기내과는 1층 입구에서 직진하면 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/endocrine",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("내분비내과는 1층 입구에서 직진하여 왼쪽 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Hematologic",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("혈액종양내과는 1층 입구에서 좌측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Dermatology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("피부과는 1층 입구에서 우측으로 직진하여 신장내과 옆에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Respiratory",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("호흡기내과는 1층 입구에서 우측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

$(document).ready(function() {
	$("#cardiology").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "testpage/datas/cardiology",
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
			url : "testpage/datas/Radiological",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("방사선종양학과는 2층 엘리베이터에서 좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Anesthesia",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("마취통증학과는 2층 엘리베이터에서 바로 우측에 위치합니다");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Family",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("가정의학과는 2층 엘리베이터에서 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/urology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("비뇨의학과는 2층 엘리베이터에서 직진하여 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/gynecology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("산부인과는 2층 엘리베이터에서 직진하여 성형외과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/plastic",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("성형외과는 2층 엘리베이터에서 직진하시면 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/CTMRI",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("MRI CT는 2층 엘리베이터에서 좌측으로 가시면 방사선종양학과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Ophthalmology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("안과는 3층 엘리베이터에서  맨끝 좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Neurosurgery",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("신경외과는 3층 엘리베이터에서  좌측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Neurology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("신경과는 3층 엘리베이터에서 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Pediatrics",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("소아청소년과는 3층 엘리베이터에서 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Radiology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("영상의학과는 3층 엘리베이터에서 직진하여 맨 끝 우측에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Surgery",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("외과는 3층엘리베이터에서  직진하여 이비인후과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Otolaryngology",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("이비인후과는 3층 엘리베이터에서 직진하여 외과 옆에 있습니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/Mental",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("정신건강의학과는 3층 엘리베이터에서 직진 후 우측 맨 끝에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

$(document).ready(function() {
	$("#caffe").click(function(){
		function addMarker(position) {
		    var marker = new kakao.maps.Marker({
		        position: position		        
		    });
		    marker.setMap(map);
		    map.setCenter(position);
		}
		$.ajax({
			type : "GET",
			url : "testpage/datas/cafe",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("카페는 1층 입구에서 바로 오른쪽에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});

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
			url : "testpage/datas/conv",
			dataType : "json",
			success : function(data){
				console.log("success data is = " + data);
				let print = $("#print");
				print.empty();
				let latitude=data.latitude;
				let longitude=data.longitude;
				let location=data.location;
				addMarker(new kakao.maps.LatLng(latitude, longitude));
				print.append("편의점은 1층 입구에서 바로 왼쪽에 위치합니다.");
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});