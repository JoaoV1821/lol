package com.example.lavanderiabackend.models.Endereco.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class EnderecoModelo {
    public String cep;
    public String logradouro;
    public String complemento;
    public String numero;
    public String cidade;
}
