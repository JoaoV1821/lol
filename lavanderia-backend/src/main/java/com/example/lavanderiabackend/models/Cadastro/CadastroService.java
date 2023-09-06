package com.example.lavanderiabackend.models.Cadastro;

import java.util.Random;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;
import com.example.lavanderiabackend.models.Endereco.Endereco;
import com.example.lavanderiabackend.models.Endereco.EnderecoRepository;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;

@Service
public class CadastroService {

    public CadastroRepository cadastroRepository;
    public EnderecoRepository enderecoRepository;
    public ModelMapper modelMapper;

    @Autowired
    CadastroService(CadastroRepository cadastroRepository, ModelMapper modelMapper,
            EnderecoRepository enderecoRepository) {
        this.cadastroRepository = cadastroRepository;
        this.modelMapper = modelMapper;
        this.enderecoRepository = enderecoRepository;
    }

    public void saveCadastro(CadastroModelo modelo) {

        Cadastro cadastro = new Cadastro(modelo);
        Endereco endereco = checkIfEnderecoExists(modelo.endereco);
        Random random = new Random();

        String idRandom = String.format("%04d", random.nextInt(10000));

        cadastro.endereco = endereco;
        cadastro.setSenha(cadastro.getEmail() + idRandom);

        cadastroRepository.save(cadastro);
    }

    public void updateCadastro(CadastroModelo modelo) {
        Cadastro cadastro = cadastroRepository.findByCpf(modelo.cpf);
        Long id = cadastro.cadastroId;
        String senha = cadastro.senha;
        if (cadastro != null) {
            cadastro = modelMapper.map(modelo, cadastro.getClass());
            cadastro.setCadastroId(id);
            cadastro.setSenha(senha);
            cadastro.setEndereco(checkIfEnderecoExists(modelo.endereco));
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

    private Endereco checkIfEnderecoExists(EnderecoModelo enderecoModelo) {
        Endereco endereco = modelMapper.map(enderecoModelo, Endereco.class);
        Endereco resultado = enderecoRepository.findUniqueEndereco(endereco.cep, endereco.logradouro,
                endereco.complemento,
                endereco.numero, endereco.cidade);

        if (resultado == null) {
            endereco = enderecoRepository.save(endereco);
        } else {
            endereco = resultado;
        }
        return endereco;
    }

}
