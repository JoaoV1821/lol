package com.example.lavanderiabackend.models.Roupa;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Roupa.DTO.RoupaDTO;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("/api/roupa")
public class RoupaController {

    private final RoupaService roupaService;

    RoupaController(RoupaService roupaService) {
        this.roupaService = roupaService;
    }

    @GetMapping("/get/roupas")
    public List<RoupaDTO> getRoupas() {
        return roupaService.getRoupas();
    }

    @PostMapping("/get/roupa")
    public RoupaDTO getRoupa(@RequestBody NumeroWrapper numeroWrapper) {
        return roupaService.getRoupaDTO(numeroWrapper.getNumero());
    }

    @PostMapping("/update/roupa")
    public ResponseEntity<Integer> updateRoupa(@RequestBody RoupaDTO modelo) {
        roupaService.addOrUpdateRoupa(modelo);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/update/categoria")
    public ResponseEntity<Integer> updateCategoria(@RequestBody CategoriaWrapper wrapper) {
        roupaService.updateCategoria(wrapper.getNumeroRoupa(), wrapper.getNumeroCategoria());
        return ResponseEntity.ok(200);
    }

}

@Getter
@Setter
class NumeroWrapper {
    public String numero;
}

@Getter
@Setter
class CategoriaWrapper {
    public String numeroCategoria;
    public String numeroRoupa;
}