package com.example.lavanderiabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
@CrossOrigin(originPatterns = "*")
public class LavanderiaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LavanderiaBackendApplication.class, args);

	}

	@GetMapping("/")
	public String index() {
		return "index";
	}
}
