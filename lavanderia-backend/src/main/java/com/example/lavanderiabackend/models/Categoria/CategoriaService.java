package com.example.lavanderiabackend.models.Categoria;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Exceptions.StandardNotFoundException;
import com.example.lavanderiabackend.models.Categoria.DTO.CategoriaDTO;
import com.example.lavanderiabackend.models.Roupa.Roupa;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;
    private final ModelMapper modelMapper;

    public CategoriaService(CategoriaRepository categoriaRepository, ModelMapper modelMapper) {
        this.categoriaRepository = categoriaRepository;
        this.modelMapper = modelMapper;
    }

    public void addRoupa(Roupa roupa, String numeroCategoria) {
        Categoria categoria = categoriaRepository.findByNumero(numeroCategoria)
                .orElseThrow(() -> new StandardNotFoundException("Categoria :" + numeroCategoria + "não encontrada!"));
        categoria.addRoupa(roupa);
        categoriaRepository.save(categoria);
    }

    public void addOrUpdateCategoria(CategoriaDTO categoriaDTO) {
        Categoria categoria = categoriaRepository.findByNumero(categoriaDTO.getNumero()).orElse(new Categoria());
        Long id = categoria.getId();
        categoria = modelMapper.map(categoriaDTO, categoria.getClass());
        categoria.setId(id);
        categoriaRepository.save(categoria);
    }

    public void deleteCategoria(String numeroCategoria) {
        Categoria categoria = categoriaRepository.findByNumero(numeroCategoria)
                .orElseThrow(() -> new StandardNotFoundException("Categoria :" + numeroCategoria + "não encontrada!"));
        // Resolver possivel exceção ao deletar os filhos
        categoriaRepository.delete(categoria);
    }

    public Categoria getCategoria(String numeroCategoria) {
        Categoria categoria = categoriaRepository.findByNumero(numeroCategoria)
                .orElseThrow(() -> new StandardNotFoundException("Categoria :" + numeroCategoria + "não encontrada!"));
        return categoria;
    }

    public List<CategoriaDTO> getCategoriaList() {
        List<Categoria> categorias = categoriaRepository.findAll();
        List<CategoriaDTO> categoriaDTOs = new ArrayList<>();
        for (Categoria categoria : categorias) {
            CategoriaDTO categoriaDTO = modelMapper.map(categoria, CategoriaDTO.class);
            categoriaDTOs.add(categoriaDTO);
        }
        return categoriaDTOs;
    }

    public CategoriaDTO getCategoriaDTO(String numeroCategoria) {
        Categoria categoria = getCategoria(numeroCategoria);
        CategoriaDTO categoriaDTO = modelMapper.map(categoria, CategoriaDTO.class);
        return categoriaDTO;
    }

}
