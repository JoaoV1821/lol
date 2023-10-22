package com.example.lavanderiabackend.models.Cadastro;

import java.util.Random;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;
import com.example.lavanderiabackend.models.Endereco.EnderecoService;

@Service
public class CadastroService {

    public CadastroRepository cadastroRepository;
    public ModelMapper modelMapper;
    public EnderecoService enderecoService;

    @Autowired
    CadastroService(CadastroRepository cadastroRepository, ModelMapper modelMapper,
            EnderecoService enderecoService) {
        this.cadastroRepository = cadastroRepository;
        this.modelMapper = modelMapper;
        this.enderecoService = enderecoService;
    }

    public void saveCadastro(CadastroModelo modelo) {
        Cadastro cadastro = new Cadastro(modelo);
        Random random = new Random();
        String idRandom = String.format("%04d", random.nextInt(10000));
        cadastro.setSenha(cadastro.getEmail() + idRandom);
        cadastro.setPapel(Papeis.USER);
        enderecoService.addCadastros(modelo.getEndereco(), List.of(cadastro));
    }

    public void updateCadastro(CadastroModelo modelo) {
        Cadastro cadastro = cadastroRepository.findByCpf(modelo.getCpf());
        Long id = cadastro.getCadastroId();
        String senha = cadastro.getSenha();
        if (cadastro != null) {
            cadastro = modelMapper.map(modelo, cadastro.getClass());
            cadastro.setCadastroId(id);
            cadastro.setSenha(senha);
            cadastro.setEndereco(enderecoService.getEndereco(modelo.getEndereco()));
            cadastroRepository.save(cadastro);
        }
    }

    public void deleteCadastro(String cpf) {
        Cadastro cadastro = cadastroRepository.findByCpf(cpf);
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
            return modelo;
        }
        return null;
    }

}
