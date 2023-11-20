package com.example.lavanderiabackend.models.Cadastro;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

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
import com.example.lavanderiabackend.models.Cadastro.DTO.TopCadastroDTO;
import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;
import com.example.lavanderiabackend.models.Endereco.EnderecoService;
import com.example.lavanderiabackend.models.Pedido.PedidoService;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.services.Validation.CPFValidator;
import com.example.lavanderiabackend.services.Validation.EmailValidator;
import com.example.lavanderiabackend.services.Validation.Validator;

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

    public List<CadastroDTO> getFuncionarios() {
        List<Cadastro> cadastros = cadastroRepository.findByPerfil(Papel.FUNCIONARIO);
        List<CadastroDTO> cadastroDTOs = new ArrayList<>();
        for (Cadastro cadastro : cadastros) {
            CadastroDTO cadastroDTO = modelMapper.map(cadastro, CadastroDTO.class);
            cadastroDTOs.add(cadastroDTO);
        }
        return cadastroDTOs;
    }

    public List<CadastroDTO> getClientes() {
        List<Cadastro> cadastros = cadastroRepository.findByPerfil(Papel.USER);
        List<CadastroDTO> cadastroDTOs = new ArrayList<>();
        for (Cadastro cadastro : cadastros) {
            CadastroDTO cadastroDTO = modelMapper.map(cadastro, CadastroDTO.class);
            cadastroDTOs.add(cadastroDTO);
        }
        return cadastroDTOs;
    }

    public PedidoBody getPedido(String numeroPedido) {
        Cadastro cadastro = getLoggedUser();
        PedidoBody pedidoBody = pedidoService.getPedido(cadastro, numeroPedido);
        return pedidoBody;
    }

    public void saveCadastro(CadastroDTO modelo) {
        if (cadastroRepository.findByCpf(modelo.getCpf()).isPresent()) {
            // updateCadastro(modelo);
            return;
        }
        if (cadastroRepository.findByEmail(modelo.getEmail()).isPresent()) {
            return;
        }
        Cadastro cadastro = new Cadastro(modelo);
        Validator.validateCadastro(modelo);
        String encryptedPassword = new BCryptPasswordEncoder().encode(modelo.getSenha());
        cadastro.setSenha(encryptedPassword);
        enderecoService.addCadastros(modelo.getEndereco(), List.of(cadastro));
    }

    public List<TopCadastroDTO> getTopCadastros() {
        List<Cadastro> cadastros = cadastroRepository.findByPerfil(Papel.USER);
        List<TopCadastroDTO> topCadastroDTOs = new ArrayList<>();
        int index = 1;
        Collections.sort(cadastros);
        for (Cadastro cadastro : cadastros) {
            TopCadastroDTO cadastroDTO = new TopCadastroDTO();
            cadastroDTO.setNome(cadastro.getNome());
            cadastroDTO.setNumber(index);
            cadastroDTO.setQtd(cadastro.getNumberOfPedidos());
            cadastroDTO.setReceita(cadastro.getReceita());
            topCadastroDTOs.add(cadastroDTO);
            index++;
        }
        return topCadastroDTOs;
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
        if (cadastro != null) {
            CadastroDTO cadastroModelo = modelMapper.map(cadastro, CadastroDTO.class);
            return cadastroModelo;
        }
        return null;
    }

    private Cadastro getLoggedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        try {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Cadastro cadastro = cadastroRepository.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new UserNotFoundException("Usuario não encontrado" + userDetails.getUsername()));
            return cadastro;
        } catch (Exception e) {
            return null;
        }

    }

    public List<PedidoBody> getListaPedidos() {
        Cadastro cadastro = getCadastroFromToken();
        return pedidoService.getPedidoList(cadastro);
    }

    public List<PedidoBody> getListaPedidosWithStatus(String status) {
        Cadastro cadastro = getCadastroFromToken();
        return pedidoService.getPedidoListWithStatus(cadastro, status);
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
        try {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Cadastro cadastro = cadastroRepository.findByEmail(userDetails.getUsername())
                    .orElseThrow(() -> new UserNotFoundException("Usuario não existe!"));
            return cadastro;
        } catch (Exception e) {
            throw new UserNotFoundException("Usuario não existe!");
        }
    }

}
