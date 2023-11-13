package com.example.lavanderiabackend.models.Roupa;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Exceptions.StandardNotFoundException;
import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Categoria.Categoria;
import com.example.lavanderiabackend.models.Categoria.CategoriaService;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaDTO;

@Service
public class RoupaService {

    public final RoupaRepository roupaRepository;
    public final CategoriaService categoriaService;
    public final ModelMapper modelMapper;

    RoupaService(RoupaRepository roupaRepository, ModelMapper modelMapper, CategoriaService categoriaService) {
        this.roupaRepository = roupaRepository;
        this.modelMapper = modelMapper;
        this.categoriaService = categoriaService;
    }

    public List<RoupaDTO> getRoupas() {
        List<Roupa> roupas = roupaRepository.findAll();
        List<RoupaDTO> modelos = new ArrayList<RoupaDTO>();
        for (Roupa roupa : roupas) {
            modelos.add(new RoupaDTO(roupa));
        }
        return modelos;
    }

    public RoupaDTO getRoupaDTO(String numeroRoupa) {
        Roupa roupa = roupaRepository.findByNumero(numeroRoupa)
                .orElseThrow(() -> new StandardNotFoundException("Roupa :" + numeroRoupa + " não encontrada!"));
        RoupaDTO modelo = new RoupaDTO();
        modelo = new RoupaDTO(roupa);
        return modelo;
    }

    public Roupa getRoupa(String numeroRoupa) {
        Roupa roupa = roupaRepository.findByNumero(numeroRoupa)
                .orElseThrow(() -> new StandardNotFoundException("Roupa :" + numeroRoupa + " não encontrada!"));
        return roupa;
    }

    public void addOrUpdateRoupa(RoupaDTO modelo) {
        Roupa roupa = roupaRepository.findByDescricao(modelo.getDescricao()).orElse(new Roupa());
        Long id = roupa.getId();
        List<Carrinho> carrinhos = roupa.getCarrinhos();
        Categoria categoria = categoriaService.getCategoria(modelo.getNumeroCategoria());
        roupa = modelMapper.map(modelo, roupa.getClass());
        roupa.setCarrinhos(carrinhos);
        roupa.setCategoria(categoria);
        roupa.setId(id);
        roupaRepository.save(roupa);
    }

    public void updateCategoria(String numeroRoupa, String numeroCategoria) {
        Roupa roupa = roupaRepository.findByNumero(numeroRoupa)
                .orElseThrow(() -> new StandardNotFoundException("Roupa :" + numeroRoupa + " não encontrada!"));

        Categoria categoria = categoriaService.getCategoria(numeroCategoria);
        roupa.setCategoria(categoria);
        roupaRepository.save(roupa);
    }

    public void deleteRoupa(String numeroRoupa) {
        Roupa roupa = roupaRepository.findByNumero(numeroRoupa)
                .orElseThrow(() -> new StandardNotFoundException("Roupa :" + numeroRoupa + " não encontrada!"));
        roupaRepository.delete(roupa);
    }

}
