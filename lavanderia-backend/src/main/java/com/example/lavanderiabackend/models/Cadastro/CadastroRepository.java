package com.example.lavanderiabackend.models.Cadastro;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import io.micrometer.common.lang.Nullable;


@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {

    @Nullable
    UserDetails findFirstByEmailAndSenha(String email, String senha);

    UserDetails findByEmail(String nome);

    @Nullable
    Cadastro findByCpf(String cpf);

    void deleteByCpf(String cpf);

    void deleteByEmailAndSenha(String email, String senha);

}
