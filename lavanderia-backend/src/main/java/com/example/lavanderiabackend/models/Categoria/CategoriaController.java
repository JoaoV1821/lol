package com.example.lavanderiabackend.models.Categoria;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lavanderiabackend.models.Categoria.DTO.CategoriaDTO;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {

    private final CategoriaService categoriaService;

    CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping("/get/categorias")
    public List<CategoriaDTO> getCategorias() {
        return categoriaService.getCategoriaList();
    }
}
