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
				print.append("latitude = " + latitude + "/" + "longitude = " + longitude + "/" + "location = " + location);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown){
            	console.log("조회 실패." + XMLHttpRequest + textStatus + errorThrown);
            	console.log("searchLocation.val() is = " + $("#searchLocation").val());
			}
		});
	});
});