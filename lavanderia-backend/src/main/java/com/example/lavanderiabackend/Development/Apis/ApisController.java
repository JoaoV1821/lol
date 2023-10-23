package com.example.lavanderiabackend.Development.Apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class ApisController {

    @Autowired
    ApisService apisService;

    @GetMapping("/dev/getEndpoints")
    public List<String> getEndpoints() {
        return apisService.findGetEndpoints();
    }

    @GetMapping("/dev/getPostEndpoints")
    public ResponseEntity<?> getPostEndpoints() {
        return ResponseEntity.ok(apisService.findPostEndpoints().toString());
    }
}
