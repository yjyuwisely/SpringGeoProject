package aaa.bbb.model;

public class RestModel {
	
	private String latitude;
	private String longitude;
	private String location;
	@Override
	public String toString() {
		return "RestModel [latitude=" + latitude + ", longitude=" + longitude + ", location=" + location + "]";
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

}
