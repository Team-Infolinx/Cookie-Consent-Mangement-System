package com.Infolinx.cookie_consent_management_system;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CookieConsentManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(CookieConsentManagementSystemApplication.class, args);
	}
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
