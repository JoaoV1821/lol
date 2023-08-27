package com.example.lavanderiabackend.Cadastro;

import java.util.Random;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Cadastro.DTO.CadastroModelo;

@Service
public class CadastroService {

    public CadastroRepository cadastroRepository;

    public ModelMapper modelMapper;

    @Autowired
    CadastroService(CadastroRepository cadastroRepository, ModelMapper modelMapper) {
        this.cadastroRepository = cadastroRepository;
        this.modelMapper = modelMapper;
    }

    public void saveCadastro(CadastroModelo modelo) {
        Random random = new Random();
        String idRandom = String.format("%04d", random.nextInt(10000));
        Cadastro cadastro = new Cadastro(modelo);
        cadastro.setSenha(cadastro.getEmail() + idRandom);
        cadastroRepository.save(cadastro);
    }

    public void updateCadastro(CadastroModelo modelo) {
        Cadastro cadastro = cadastroRepository.findByCpf(modelo.cpf);
        Long id = cadastro.cadastroId;
        String senha = cadastro.senha;
        if (cadastro != null) {
            cadastro = modelMapper.map(modelo, cadastro.getClass());
            cadastro.cadastroId = id;
            cadastro.senha = senha;
            cadastroRepository.save(cadastro);
        }
    }

    public void deleteCadastro(CadastroModelo modelo) {
        Cadastro cadastro = cadastroRepository.findByCpf(modelo.cpf);
        if (cadastro != null) {
            cadastroRepository.delete(cadastro);
        }
    }

    public List<CadastroModelo> getCadastroList() {
        List<CadastroModelo> modelos = new ArrayList<CadastroModelo>();
        List<Cadastro> cadastros = cadastroRepository.findAll();
        for (Cadastro cadastro : cadastros) {
            CadastroModelo modelo = new CadastroModelo();
            modelo = modelMapper.map(cadastro, modelo.getClass());
            modelos.add(modelo);
        }

        return modelos;
    }

    public CadastroModelo getCadastro(String cpf) {
        Cadastro cadastro = cadastroRepository.findByCpf(cpf);
        CadastroModelo modelo = new CadastroModelo();
        if (cadastro != null) {
            modelo = modelMapper.map(cadastro, modelo.getClass());
        }
        return modelo;
    }
}
