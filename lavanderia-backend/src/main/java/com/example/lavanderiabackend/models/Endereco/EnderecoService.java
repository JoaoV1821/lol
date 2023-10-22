package com.example.lavanderiabackend.models.Endereco;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;

@Service
public class EnderecoService {

    EnderecoRepository enderecoRepository;
    ModelMapper modelMapper;

    @Autowired
    EnderecoService(EnderecoRepository enderecoRepository, ModelMapper modelMapper) {
        this.enderecoRepository = enderecoRepository;
        this.modelMapper = modelMapper;
    }

    public void addCadastros(EnderecoModelo enderecoModelo, List<Cadastro> cadastros) {
        Endereco endereco = findOrCreateEndereco(enderecoModelo);
        for (Cadastro cadastro : cadastros) {
            endereco.addCadastro(cadastro);
        }
        endereco.cadastros.get(0).setEndereco(endereco);
        enderecoRepository.save(endereco);
    }

    public void deleteCadastro(Endereco enderecoModelo, Cadastro cadastro) {
        Endereco endereco = enderecoRepository.findUniqueEndereco(enderecoModelo.cep, enderecoModelo.logradouro,
                enderecoModelo.complemento, enderecoModelo.numero, enderecoModelo.cidade);
        if (endereco != null) {
            endereco.removeCadastro(cadastro);
            enderecoRepository.save(endereco);
        }
    }

    public Endereco getEndereco(EnderecoModelo enderecoModelo) {
        return findOrCreateEndereco(enderecoModelo);

    }

    private Endereco findOrCreateEndereco(EnderecoModelo enderecoModelo) {
        Endereco endereco = modelMapper.map(enderecoModelo, Endereco.class);
        Endereco resultado = enderecoRepository.findUniqueEndereco(endereco.cep, endereco.logradouro,
                endereco.complemento,
                endereco.numero, endereco.cidade);
        if (resultado == null)
            resultado = enderecoRepository.save(endereco);
        return resultado;
    }

}
