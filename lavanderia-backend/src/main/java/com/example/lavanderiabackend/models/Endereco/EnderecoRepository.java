package com.example.lavanderiabackend.models.Endereco;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

    @Query("SELECT e FROM Endereco e WHERE e.cep = :cep AND e.logradouro = :logradouro AND e.complemento =" +
            ":complemento AND e.numero = :numero AND e.cidade = :cidade")
    Endereco findUniqueEndereco(@Param("cep") String cep, @Param("logradouro") String logradouro,
            @Param("complemento") String complemento,
            @Param("numero") String numero, @Param("cidade") String cidade);

}
