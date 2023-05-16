package aaa.bbb.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aaa.bbb.mapper.RestMapper;
import aaa.bbb.model.RestModel;

@Service
public class RestServiceImpl implements RestService {
	private static final Logger logger = LoggerFactory.getLogger(RestServiceImpl.class);
	
	@Autowired
	RestMapper restmap;

	@Override
	public RestModel location(String location) {
		RestModel datas = new RestModel();
		logger.info("RestServiceImpl location is = {}", location);
		logger.info("RestServiceImpl datas is = {}", datas);
		return restmap.location(location);
	}

}
