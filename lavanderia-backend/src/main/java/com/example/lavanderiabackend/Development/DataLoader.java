package com.example.lavanderiabackend.Development;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.lavanderiabackend.models.Cadastro.CadastroService;
import com.example.lavanderiabackend.models.Cadastro.Papel;
import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;

import jakarta.transaction.Transactional;


@Component
@Transactional
public class DataLoader implements ApplicationRunner {

    private final CadastroService cadastroService;

    public DataLoader(CadastroService cadastroService){
        this.cadastroService = cadastroService;
    }
    

    @Override
    public void run(ApplicationArguments args) throws Exception {
        
        EnderecoModelo enderecoModelo = new EnderecoModelo("99999", "logradouro", "complemento", "123", "cidade");
        CadastroDTO cadastroModelo = new CadastroDTO("99999", "nome sobrenome","admin", "admin", enderecoModelo, "999-999", Papel.ADMIN);
        cadastroService.saveCadastro(cadastroModelo);

        
    }
    

}
