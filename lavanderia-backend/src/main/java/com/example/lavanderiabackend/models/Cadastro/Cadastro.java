package com.example.lavanderiabackend.models.Cadastro;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroModelo;
import com.example.lavanderiabackend.models.Endereco.Endereco;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"nome","sobrenome"}))
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cadastro implements UserDetails {
    @Id
    @SequenceGenerator(name = "cadastro_sequence", sequenceName = "cadastro_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cadastro_sequence")
    private Long cadastroId;
    @Column(unique = true, nullable = false)
    private String cpf;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = true)
    private String sobrenome;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String senha;
    @Column(nullable = false)
    private String telefone;
    @Column(nullable=false)
    private Papel papel;
    @ManyToOne
    @JoinColumn(name = "endereco_id", nullable = false)
    private Endereco endereco;
    

    public Cadastro(CadastroModelo modelo) {
        this.cpf = modelo.getCpf();
        this.email = modelo.getEmail();
        this.telefone = modelo.getTelefone();
        this.nome = modelo.getNome();
        this.sobrenome = modelo.getSobrenome();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.papel == Papel.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"),new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
        
    }


    @Override
    public String getPassword() {
        return this.getSenha();
    }


    @Override
    public String getUsername() {
        return this.getNome() + " " + this.getSobrenome();
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }


    @Override
    public boolean isAccountNonLocked() {
        return true;
    }


    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }


    @Override
    public boolean isEnabled() {
        return true;
    }
}
