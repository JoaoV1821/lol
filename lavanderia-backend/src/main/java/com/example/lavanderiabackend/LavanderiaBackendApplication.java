package com.example.lavanderiabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Controller
public class LavanderiaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(LavanderiaBackendApplication.class, args);

	}

}

@RestController
class testeConexao {
	@GetMapping("api/")
	public String base() {
		return "";
	}
}