package aaa.bbb.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aaa.bbb.model.RestModel;
import aaa.bbb.service.RestService;

@RestController
@RequestMapping
public class RestContoller {
	private static final Logger logger = LoggerFactory.getLogger(RestContoller.class);
	
	@Autowired
	RestService restserv;
	
	@GetMapping("departmentMap/datas/{location}")
	public RestModel findLocation(@PathVariable String location) {
		logger.info("location is = {}", location);
		return restserv.location(location);
		
	}
	
	//웹이라도 현위치 띄우기

}
