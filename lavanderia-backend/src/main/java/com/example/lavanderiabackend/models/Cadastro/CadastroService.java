package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.lavanderiabackend.Exceptions.InvalidFieldException;
import com.example.lavanderiabackend.Exceptions.UserNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;
import com.example.lavanderiabackend.models.Endereco.EnderecoService;
import com.example.lavanderiabackend.models.Pedido.PedidoService;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.services.Validation.CPFValidator;
import com.example.lavanderiabackend.services.Validation.EmailValidator;

@Service
public class CadastroService {

    public CadastroRepository cadastroRepository;
    public ModelMapper modelMapper;
    public EnderecoService enderecoService;
    public PedidoService pedidoService;

    @Autowired
    CadastroService(CadastroRepository cadastroRepository, ModelMapper modelMapper,
            EnderecoService enderecoService, PedidoService pedidoService) {
        this.cadastroRepository = cadastroRepository;
        this.modelMapper = modelMapper;
        this.enderecoService = enderecoService;
        this.pedidoService = pedidoService;
    }

    public void saveCadastro(CadastroDTO modelo) {
        if (cadastroRepository.findByCpf(modelo.getCpf()).isPresent()) {
            updateCadastro(modelo);
            return;
        }
        Cadastro cadastro = new Cadastro(modelo);
        if (!CPFValidator.isCpfValid(modelo.getCpf()))
            throw new InvalidFieldException("Campo Cpf inválido!", "cpf");
        if (!EmailValidator.isEmailValid(modelo.getEmail()))
            throw new InvalidFieldException("Campo Email inválido!", "email");
        String encryptedPassword = new BCryptPasswordEncoder().encode(modelo.getSenha());
        cadastro.setSenha(encryptedPassword);
        enderecoService.addCadastros(modelo.getEndereco(), List.of(cadastro));
    }

    public void updateCadastro(CadastroDTO modelo) {
        Cadastro cadastro = cadastroRepository.findByCpf(modelo.getCpf())
                .orElseThrow(() -> new UserNotFoundException("Usuario não encontrado :" + modelo.getNome()));
        if (!CPFValidator.isCpfValid(modelo.getCpf()))
            throw new InvalidFieldException("Campo Cpf inválido!", "cpf");
        if (!EmailValidator.isEmailValid(modelo.getEmail()))
            throw new InvalidFieldException("Campo Email inválido!", "email");
        Long id = cadastro.getCadastroId();
        cadastro = modelMapper.map(modelo, cadastro.getClass());
        cadastro.setCadastroId(id);
        cadastro.setEndereco(enderecoService.getEndereco(modelo.getEndereco()));
        cadastroRepository.save(cadastro);
    }

    public void deleteCadastro(String cpf) {
        Cadastro cadastro = cadastroRepository.findByCpf(cpf)
                .orElseThrow(() -> new UserNotFoundException("Usuario com cpf : " + cpf + "não encontrado"));
        if (!CPFValidator.isCpfValid(cpf))
            throw new InvalidFieldException("Campo Cpf inválido!", "cpf");
        cadastroRepository.delete(cadastro);
    }

    public List<CadastroDTO> getCadastroList() {
        List<CadastroDTO> modelos = new ArrayList<CadastroDTO>();
        List<Cadastro> cadastros = cadastroRepository.findAll();
        for (Cadastro cadastro : cadastros) {
            CadastroDTO modelo = new CadastroDTO();
            modelo = modelMapper.map(cadastro, modelo.getClass());
            modelos.add(modelo);
        }
        return modelos;
    }

    public CadastroDTO getCadastro(String cpf) {

        if (!CPFValidator.isCpfValid(cpf))
            throw new InvalidFieldException("Campo Cpf inválido!", "cpf");
        Cadastro cadastro = cadastroRepository.findByCpf(cpf)
                .orElseThrow(() -> new UserNotFoundException("Usuario não encontrado"));
        CadastroDTO modelo = new CadastroDTO();
        modelo = modelMapper.map(cadastro, modelo.getClass());
        return modelo;
    }

    public CadastroDTO getUsuarioLogado() {
        Cadastro cadastro = getLoggedUser();
        CadastroDTO cadastroModelo = modelMapper.map(cadastro, CadastroDTO.class);
        return cadastroModelo;
    }

    private Cadastro getLoggedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Cadastro cadastro = cadastroRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UserNotFoundException("Usuario não encontrado" + userDetails.getUsername()));
        return cadastro;
    }

    public List<PedidoBody> getListaPedidos() {
        Cadastro cadastro = getCadastroFromToken();
        return pedidoService.getPedidoList(cadastro);
    }

    public void addPedido(List<CarrinhoDTO> carrinhos) {
        Cadastro cadastro = getCadastroFromToken();
        cadastro = this.pedidoService.addPedido(cadastro, carrinhos);
        cadastroRepository.save(cadastro);
    }

    public void deletarPedido(String numero_pedido) {
        Cadastro cadastro = getCadastroFromToken();
        cadastro = this.pedidoService.deletePedido(cadastro, numero_pedido);
        cadastroRepository.save(cadastro);
    }

    public void updatePedido(PedidoBody modelo, String numero_pedido) {
        Cadastro cadastro = getCadastroFromToken();
        cadastro = this.pedidoService.updatePedido(cadastro, modelo, numero_pedido);
        cadastroRepository.save(cadastro);
    }

    public void updatePedidoStatus(String status, String numeroPedido) {
        Cadastro cadastro = getCadastroFromToken();
        cadastro = this.pedidoService.updatePedidoStatus(cadastro, status, Long.parseLong(numeroPedido));
        cadastroRepository.save(cadastro);
    }

    private Cadastro getCadastroFromToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Cadastro cadastro = cadastroRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UserNotFoundException("Usuario não existe!"));
        return cadastro;
    }

}
