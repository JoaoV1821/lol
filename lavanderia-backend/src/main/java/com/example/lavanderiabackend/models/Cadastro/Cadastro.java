package com.example.lavanderiabackend.models.Cadastro;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Endereco.Endereco;
import com.example.lavanderiabackend.models.Pedido.Pedido;
import com.example.lavanderiabackend.services.Authentication.DTO.UserDTO;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
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
    @Column(nullable = false)
    private Papel perfil;
    @Column(nullable = false)
    private LocalDate dataNascimento;
    @ManyToOne
    @JoinColumn(name = "endereco_id", nullable = false)
    private Endereco endereco;
    @OneToMany(mappedBy = "cadastro", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Pedido> pedidos;

    public Cadastro(CadastroDTO modelo) {

        String listaNomes[] = modelo.getNome().split(" ");
        this.nome = listaNomes[0];
        this.sobrenome = String.join("", listaNomes);
        this.cpf = modelo.getCpf();
        this.email = modelo.getEmail();
        this.telefone = modelo.getTelefone();
        this.perfil = modelo.getPerfil();
        this.dataNascimento = modelo.getDataNasc();
    }

    public Cadastro(UserDTO user) {
        String listaNomes[] = user.getNome().split(" ");
        this.cpf = user.getCpf();
        this.email = user.getEmail();
        this.nome = listaNomes[0];
        listaNomes[0] = "";
        this.sobrenome = String.join("", listaNomes);
        this.telefone = user.getTelefone();
        this.dataNascimento = LocalDate.parse(user.getDataNasc());
    }

    public int getNumberOfPedidos() {
        return this.pedidos.size();
    }

    public double getReceita() {
        Double total = 0.0;
        for (Pedido pedido : this.pedidos) {
            total += pedido.getTotal();
        }
        return total;
    }

    public void addPedido(Pedido pedido) {
        this.pedidos = this.pedidos != null ? this.pedidos : new ArrayList<>();
        this.pedidos.add(pedido);
        pedido.setCadastro(this);
    }

    public Long getLastestPedido() {
        if (this.pedidos == null || (this.pedidos.isEmpty())) {
            return Long.valueOf(0);
        } else {
            return Collections.max(pedidos).getNumero();
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.perfil == Papel.ADMIN)
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));

    }

    @Override
    public String getPassword() {
        return this.getSenha();
    }

    @Override
    public String getUsername() {
        return this.getEmail();
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
