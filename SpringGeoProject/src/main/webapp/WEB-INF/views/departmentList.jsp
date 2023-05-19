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
<title>진료과 및 편의시설 선택하기</title>
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

<body>
	<form action="/departmentMap" method="post">
		<div data-aos="fade-right" data-aos-offset="300"
			data-aos-easing="ease-in-sine">
			<div class="container col-xl-8 card  border-0">

				<table class="mb-3">

					<tr>
						<td class="fw-bold">
							<h1 class="container col-xl-8 text-left ps-4">
								<span class="text-gradient d-inline fw-bolder fs-3">진료부서</span>
							</h1>
						</td>
					</tr>
					<!-- 1층 -->
					<tr>
						<td class="fw-bold">
							<h1 class="container col-xl-8 text-left ps-4">
								<span class=" d-inline fw-bolder fs-5">1층</span>
							</h1>
						</td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="endocrine"
							value="내분비내과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0">
							<input type="submit" name="location" id="Respiratory"
							value="호흡기내과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location"
							id="gastroenterology" value="소화기내과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="Renal" value="신장내과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Hematologic"
							value="혈액종양내과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="Dermatology"
							value="피부과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
						<td>
					</tr>
					<!-- 2층 -->
					<tr>
						<td class="fw-bold">
							<h1 class="container col-xl-8 text-left ps-4">
								<span class=" d-inline fw-bolder fs-5">2층</span>
							</h1>
						</td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Family"
							value="가정의학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0">
							<input type="submit" name="location" id="department" value="방사선종양학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Anesthesia"
							value="마취통증학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="urology" value="비뇨의학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="gynecology"
							value="산부인과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="plastic" value="성형외과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="MRI_CT"
							value="MRI CT"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<!-- 3층 -->
					<tr>
						<td class="fw-bold">
							<h1 class="container col-xl-8 text-left ps-4">
								<span class=" d-inline fw-bolder fs-5">3층</span>
							</h1>
						</td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Ophthalmology"
							value="안과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0">
							<input type="submit" name="location" id="Radiology"
							value="영상의학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2 mt-0"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location"
							id="Otolaryngology" value="이비인후과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="Surgery" value="외과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Pediatrics"
							value="소아청소년과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="Neurology" value="신경과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="Neurosurgery"
							value="신경외과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="Mental"
							value="정신건강의학과"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>
					<!-- 편의시설 -->
					<tr>
						<td class=" fw-bold">
							<h1 class="container col-xl-8 text-left ps-4 pt-3">
								<span class="text-gradient d-inline fw-bolder fs-3">편의시설</span>
							</h1>
						</td>
					</tr>
					<tr class="text-center">
						<td><input type="submit" name="location" id="conv"
							value="편의점"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2">
							<input type="submit" name="location" id="cafe" value="카페"
							class="btn-1 bg-gradient-primary-to-secondary btn btn-primary d-inline-block col-lg-3 col-5 fw-bolder fs-6 m-2"></td>
					</tr>

				</table>
			</div>
		</div>
	</form>
	<script type="text/javascript"
		src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9e59e38aea07e8af3f0d4652fa425483"></script>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="resources/handledata.js"></script>
	<!-- Bootstrap core JS-->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
	<script>
		AOS.init();
	</script>
</body>
</html>

<!-- <input type="text" id="searchLocation"><br>
<input type="button" id="getLocation" value="찾기"><br>
<div id="print"></div>
<br>
<button onclick="hideMarkers()">마커 지우기</button>
<br>
<input type="button" id="star" value="스타벅스">
<input type="button" id="donggang" value="동강병원"> -->