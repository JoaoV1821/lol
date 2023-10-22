package com.example.lavanderiabackend.models.Roupa;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.models.Categoria.Categoria;
import com.example.lavanderiabackend.models.Categoria.CategoriaRepository;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaCategoria;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaModelo;

@Service
public class RoupaService {

    RoupaRepository roupaRepository;
    CategoriaRepository categoriaRepository;
    ModelMapper modelMapper;

    @Autowired
    RoupaService(RoupaRepository roupaRepository, ModelMapper modelMapper, CategoriaRepository categoriaRepository) {
        this.roupaRepository = roupaRepository;
        this.modelMapper = modelMapper;
        this.categoriaRepository = categoriaRepository;
    }

    public List<RoupaCategoria> getRoupaList() {
        List<Roupa> roupas = roupaRepository.findAll();
        List<RoupaCategoria> modelos = new ArrayList<RoupaCategoria>();
        for (Roupa roupa : roupas) {
            modelos.add(new RoupaCategoria(roupa));
        }
        return modelos;
    }

    public RoupaCategoria getRoupa(String numero_roupa) {
        Roupa roupa = roupaRepository.findByNumero(numero_roupa);
        RoupaCategoria modelo = new RoupaCategoria();
        if (roupa != null) {
            modelo = new RoupaCategoria(roupa);
            return modelo;
        }
        return null;
    }

    public void addRoupa(RoupaCategoria modelo) {
        Roupa roupa = new Roupa();
        roupa = modelMapper.map(modelo, roupa.getClass());

    }

    public void updateRoupa(RoupaModelo modelo) {
        Roupa roupa = roupaRepository.findByNumero(modelo.numero);
        if (roupa != null) {
            roupa = modelMapper.map(modelo, roupa.getClass());
            roupaRepository.save(roupa);
        }
    }

    public void updateCategoria(String numero_roupa, String numero_categoria) {
        Roupa roupa = roupaRepository.findByNumero(numero_roupa);
        Categoria categoria = categoriaRepository.findByNumero(numero_categoria);
        roupa.categoria = categoria;
        roupaRepository.save(roupa);
    }
}
