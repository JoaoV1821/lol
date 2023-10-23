package com.example.lavanderiabackend.models.Endereco.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnderecoModelo {
    public String cep;
    public String endereco;
    public String complemento;
    public String numero;
    public String cidade;
}
