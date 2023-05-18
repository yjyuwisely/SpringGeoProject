<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%-- <%@ page import="com.obj.model.MemberVO"%> --%>
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
<title>관리자 페이지</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon"
	href="resources/images/hospital.png" />
<!-- Custom Google font-->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
	rel="stylesheet" />
<!-- Bootstrap icons-->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="resources/css/styles.css" rel="stylesheet" />
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<!-- Navigation-->
<div class="print-hide">
	<nav class="navbar navbar-expand-lg bg-white">
		<!-- <div class="container px-5"> -->
			<a class="print-hide navbar-brand LogoGradient-text Mont fs-5 px-3"
				href="/"><span class="logo-text fw-bolder">ULSAN GREEN HOSPITAL </span></a>
			<button class="navbar-toggler ms-auto" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse Sans"
				id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-1 fw-bolder">
					<li class="nav-item nav-link">진료예약</li>
					<!-- <li class="nav-item nav-link">건강정보</li> -->
					<li class="nav-item nav-link">진료파트</li>
					<!-- <li class="nav-item nav-link">나눔소통</li> -->
					<li class="nav-item nav-link">병원안내</li>
				</ul>
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder">
					<c:if test="${empty common.id and empty adminUser.id}">
						<li class="nav-item"><a href="LogIn"
							class="nav-link badge bg-gradient-primary-to-secondary text-white px-2 me-2 fs-6">로그인</a></li>
					</c:if>
					<%
						String admname = (String) session.getAttribute("name");
					%>
					<%
						String comname = (String) session.getAttribute("commonName");
					%>
					<c:choose>
						<c:when test="${not empty common.id}">
							<li class="nav-link badge  text-muted px-2 me-2 fs-6"><%=comname%>님</li>
						</c:when>
						<c:when test="${not empty adminUser.id}">
							<li class="nav-link badge  text-muted px-2 me-2 fs-6"><%=admname%>님</li>
						</c:when>
					</c:choose>
					<c:if test="${not empty common.id or not empty adminUser.id}">
						<li class="nav-item"><a href="logOut"
							class="nav-link badge bg-gradient-primary-to-secondary text-white px-2 me-2 fs-6">로그아웃</a></li>
					</c:if>
					<c:if test="${empty common.id and empty adminUser.id}">
						<li class="nav-item"><a href="SignUp"
							class="nav-link badge bg-gradient-primary-to-secondary text-white px-2 fs-6">회원가입</a></li>
					</c:if>
				</ul>
			</div>
		<!-- </div> -->
	</nav>
	<header class="print-hide"> </header>
</div>