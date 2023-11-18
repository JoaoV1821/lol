package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {

    Optional<UserDetails> findFirstByEmailAndSenha(String email, String senha);

    Optional<Cadastro> findByEmail(String nome);

    Optional<Cadastro> findByCpf(String cpf);

    void deleteByCpf(String cpf);

    void deleteByEmailAndSenha(String email, String senha);

    List<Cadastro> findByPerfil(Papel perfil);

}
