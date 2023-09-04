package com.example.lavanderiabackend.models.Cadastro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.micrometer.common.lang.Nullable;

import java.util.List;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {

    @Nullable
    Cadastro findFirstByEmailAndSenha(String email, String senha);

    @Nullable
    List<Cadastro> findByNomeAndSenha(String nome, String senha);

    @Nullable
    Cadastro findByCpf(String cpf);

    void deleteByCpf(String cpf);

    void deleteByEmailAndSenha(String email, String senha);

}
