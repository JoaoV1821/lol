package com.example.lavanderiabackend.Cadastro;

import java.util.Random;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Cadastro.DTO.CadastroModelo;

@Service
public class CadastroService {

    public CadastroRepository cadastroRepository;

    @Autowired
    CadastroService(CadastroRepository cadastroRepository) {
        this.cadastroRepository = cadastroRepository;
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
        if (cadastro != null) {
            BeanUtils.copyProperties(modelo, cadastro);
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
            BeanUtils.copyProperties(cadastro, modelo);
            modelos.add(modelo);
        }
        return modelos;
    }

    public CadastroModelo getCadastro(String cpf) {
        JSONObject jsonObject = new JSONObject(cpf);
        cpf = jsonObject.get("cpf").toString();
        Cadastro cadastro = cadastroRepository.findByCpf(cpf);
        CadastroModelo modelo = new CadastroModelo();
        if (cadastro != null) {
            BeanUtils.copyProperties(cadastro, modelo);
        }
        return modelo;
    }
}
