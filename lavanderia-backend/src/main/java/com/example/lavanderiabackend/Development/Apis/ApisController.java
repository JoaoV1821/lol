package com.example.lavanderiabackend.Development.Apis;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApisController {

    @Autowired
    ApisService apisService;

    @GetMapping("/api/dev/getEndpoints")
    public List<String> getEndpoints() {
        return apisService.findGetEndpoints();
    }

    @GetMapping("/api/dev/getPostEndpoints")
    public ResponseEntity<?> getPostEndpoints() {
        return ResponseEntity.ok(apisService.findPostEndpoints().toString());
    }

}
