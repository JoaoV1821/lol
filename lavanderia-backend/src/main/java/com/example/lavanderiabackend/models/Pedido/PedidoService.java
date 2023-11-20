package com.example.lavanderiabackend.models.Pedido;

import java.util.List;
import java.time.LocalDate;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.Exceptions.StandardNotFoundException;
import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;
import com.example.lavanderiabackend.models.Carrinho.Carrinho;
import com.example.lavanderiabackend.models.Carrinho.CarrinhoRepository;
import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoBody;
import com.example.lavanderiabackend.models.Pedido.DTO.PedidoInfo;
import com.example.lavanderiabackend.models.Roupa.Roupa;
import com.example.lavanderiabackend.models.Roupa.RoupaService;
import jakarta.transaction.Transactional;

@Service
public class PedidoService {

    public final PedidoRepository pedidoRepository;
    public final CarrinhoRepository carrinhoRepository;
    public final RoupaService roupaService;
    public final ModelMapper modelMapper;

    private final CadastroRepository cadastroRepository;
    // private final CadastroService cadastroService;

    @Autowired
    PedidoService(PedidoRepository pedidoRepository, ModelMapper modelMapper,
            CarrinhoRepository carrinhoRepository,
            CadastroRepository cadastroRepository,
            RoupaService roupaService) {
        this.pedidoRepository = pedidoRepository;
        this.modelMapper = modelMapper;
        this.carrinhoRepository = carrinhoRepository;
        this.roupaService = roupaService;
        this.cadastroRepository = cadastroRepository;
    }

    public PedidoBody getPedido(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
                .orElseThrow(
                        () -> new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        return new PedidoBody(pedido);
    }

    public PedidoBody getPedido(Cadastro cadastro, String numeroPedido) {
        List<Pedido> pedidos = pedidoRepository.findByCadastro(cadastro);
        for (Pedido pedido : pedidos) {
            if (pedido.getNumero() == Long.parseLong(numeroPedido)) {
                PedidoBody pedidoBody = new PedidoBody(pedido);
                return pedidoBody;
            }
        }
        throw new StandardNotFoundException("Pedido de numero" + numeroPedido + " não encontrado!");
    }

    public List<PedidoBody> getPedidoList(String dataInicial, String dataPrazo, String status) {
        List<PedidoBody> pedidos = new ArrayList<PedidoBody>();
        if (dataInicial == null && dataPrazo == null && status == null) {
            for (Pedido pedido : pedidoRepository.findAll()) {
                pedidos.add(new PedidoBody(pedido));
            }
        } else if (dataInicial != null && dataPrazo == null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            for (Pedido pedido : pedidoRepository.findAllByInitialDate(ini)) {
                pedidos.add(new PedidoBody(pedido));
            }
        } else if (dataPrazo != null || dataInicial != null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            LocalDate prazo = LocalDate.parse(dataPrazo);
            for (Pedido pedido : pedidoRepository.findAllByDate(ini, prazo)) {
                pedidos.add(new PedidoBody(pedido));
            }
        } else if (status != null && dataInicial == null && dataPrazo == null) {
            String statusUpperCase = status.toUpperCase();
            for (Pedido pedido : pedidoRepository.findAllByStatus(statusUpperCase)) {
                pedidos.add(new PedidoBody(pedido));
            }
        }
        return pedidos;
    }

    public Double getReceita(String data1, String data2) {
        List<Pedido> pedidos = new ArrayList<>();
        if (checkNull(data1) && checkNull(data2)) {
            pedidos = pedidoRepository.findAll();
        } else if (checkNull(data1)) {
            pedidos = pedidoRepository.findAllByFinalDate(LocalDate.parse(data2));
        } else if (checkNull(data2)) {
            pedidos = pedidoRepository.findAllByInitialDate(LocalDate.parse(data1));
        } else {
            pedidos = pedidoRepository.findAllByDate(LocalDate.parse(data1), LocalDate.parse(data2));
        }
        return this.calculaReceita(pedidos);
    }

    private Boolean checkNull(String value) {

        return value == " " || value == null || value == "" || value == "''" ||
                value.isEmpty() || value.isBlank();
    }

    private Double calculaReceita(List<Pedido> pedidos) {
        Double total = 0.0;
        for (Pedido pedido : pedidos) {
            total += pedido.getTotal();
        }
        return total;
    }

    public List<PedidoInfo> getPedidoInfoList(String dataInicial, String dataPrazo) {
        List<PedidoInfo> modelos = new ArrayList<PedidoInfo>();
        if (dataInicial == null && dataPrazo == null) {
            for (Pedido pedido : pedidoRepository.findAll()) {
                modelos.add(new PedidoInfo(pedido));
            }
        } else if (dataInicial != null && dataPrazo == null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            for (Pedido pedido : pedidoRepository.findAllByInitialDate(ini)) {
                modelos.add(new PedidoInfo(pedido));
            }
        } else if (dataPrazo != null && dataInicial != null) {
            LocalDate ini = LocalDate.parse(dataInicial);
            LocalDate prazo = LocalDate.parse(dataPrazo);
            for (Pedido pedido : pedidoRepository.findAllByDate(ini, prazo)) {
                modelos.add(new PedidoInfo(pedido));
            }
        }
        return modelos;
    }

    public PedidoInfo getPedidoInfo(Long numero_pedido) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
                .orElseThrow(
                        () -> new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        return new PedidoInfo(pedido);
    }

    public void updatePedido(Long numero_pedido, PedidoBody body) {
        Pedido pedido = pedidoRepository.findByNumero(numero_pedido)
                .orElseThrow(
                        () -> new StandardNotFoundException("Pedido de numero :" + numero_pedido + "não encontrado!"));
        pedido = modelMapper.map(body, pedido.getClass());
        pedidoRepository.save(pedido);
    }

    public void updateStatus(Long numero_pedido, String status, String cpf) {
        Cadastro cadastro = cadastroRepository.findByCpf(cpf).orElse(null);
        Pedido pedidoEscolhido = null;
        if (cadastro != null) {
            List<Pedido> pedidos = cadastro.getPedidos();
            for (Pedido pedido : pedidos) {
                if (pedido.numero == numero_pedido) {
                    pedidoEscolhido = pedido;
                    break;
                }
            }
            if (pedidoEscolhido != null) {
                pedidoEscolhido.setStatus(status);
                pedidoRepository.save(pedidoEscolhido);
                cadastro.setPedidos(pedidos);
                cadastroRepository.save(cadastro);
            }
        }
    }

    public Cadastro updatePedido(Cadastro cadastro, PedidoBody body, String numero_pedido) {
        List<Pedido> pedidos = cadastro.getPedidos();
        for (Pedido pedido : pedidos) {
            if (pedido.numero == Long.parseLong(numero_pedido)) {
                pedido = modelMapper.map(body, pedido.getClass());
                pedidoRepository.save(pedido);
            }
        }
        cadastro.setPedidos(pedidos);
        return cadastro;
    }

    public List<PedidoBody> getPedidoList(Cadastro cadastro) {
        List<Pedido> pedidos = cadastro.getPedidos();
        List<PedidoBody> bodies = new ArrayList<>();
        for (Pedido pedido : pedidos) {
            PedidoBody body = new PedidoBody(pedido);
            bodies.add(body);
        }
        return bodies;
    }

    public List<PedidoBody> getPedidoListWithStatus(Cadastro cadastro, String status) {
        List<Pedido> pedidos = cadastro.getPedidos();
        List<PedidoBody> bodies = new ArrayList<>();
        for (Pedido pedido : pedidos) {
            if (pedido.getStatus().equalsIgnoreCase(status)) {
                PedidoBody body = new PedidoBody(pedido);
                bodies.add(body);
            }
        }
        return bodies;
    }

    public Cadastro addPedido(Cadastro cadastro, List<CarrinhoDTO> carrinhosDTO) {
        Long numeroPedido = cadastro.getLastestPedido() + 1;
        LocalDate data = LocalDate.now();
        long prazo = 0;
        String status = "EM ABERTO";
        Double total = 0.0;
        Pedido pedido = new Pedido(null, numeroPedido, data, null, 0.0, status, new ArrayList<>(), cadastro);
        if (cadastro.getPedidos() != null)
            cadastro.getPedidos().add(pedido);
        else
            cadastro.setPedidos(new ArrayList<Pedido>());
        for (CarrinhoDTO carrinhoDTO : carrinhosDTO) {
            Roupa roupa = roupaService.getRoupa(carrinhoDTO.getNumeroRoupa());
            Carrinho carrinho = new Carrinho(pedido, roupa, carrinhoDTO.getQuantidade());
            pedido.addCarrinho(carrinho);
            total += (roupa.getValor() * carrinhoDTO.getQuantidade());
            prazo = roupa.getTempoDeLavagem() > prazo ? roupa.getTempoDeLavagem() : prazo;
        }
        pedido.setTotal(total);
        pedido.setPrazo(data.plusDays(prazo));
        pedido = pedidoRepository.save(pedido);
        for (Carrinho carrinho : pedido.getCarrinhos()) {
            carrinhoRepository.save(carrinho);
        }
        return cadastro;
    }

    public Cadastro addPedidoWithStatus(Cadastro cadastro, List<CarrinhoDTO> carrinhosDTO, String status) {
        Long numeroPedido = cadastro.getLastestPedido() + 1;
        LocalDate data = LocalDate.now();
        long prazo = 0;
        Double total = 0.0;
        Pedido pedido = new Pedido(null, numeroPedido, data, null, 0.0, status, new ArrayList<>(), cadastro);
        if (cadastro.getPedidos() != null)
            cadastro.getPedidos().add(pedido);
        else
            cadastro.setPedidos(new ArrayList<Pedido>());
        for (CarrinhoDTO carrinhoDTO : carrinhosDTO) {
            Roupa roupa = roupaService.getRoupa(carrinhoDTO.getNumeroRoupa());
            Carrinho carrinho = new Carrinho(pedido, roupa, carrinhoDTO.getQuantidade());
            pedido.addCarrinho(carrinho);
            total += (roupa.getValor() * carrinhoDTO.getQuantidade());
            prazo = roupa.getTempoDeLavagem() > prazo ? roupa.getTempoDeLavagem() : prazo;
        }
        pedido.setTotal(total);
        pedido.setPrazo(data.plusDays(prazo));
        pedido = pedidoRepository.save(pedido);
        for (Carrinho carrinho : pedido.getCarrinhos()) {
            carrinhoRepository.save(carrinho);
        }
        return cadastro;
    }

    public Cadastro updatePedidoStatus(Cadastro cadastro, String status, Long numeroPedido) {
        List<Pedido> pedidos = cadastro.getPedidos();
        for (Pedido pedido : pedidos) {
            if (pedido.getNumero().equals(numeroPedido)) {
                pedido.setStatus(status);
                pedidoRepository.save(pedido);
            }
        }
        return cadastro;
    }

    @Transactional
    public Cadastro deletePedido(Cadastro usuario, String numero_pedido) {
        List<Pedido> pedidos = usuario.getPedidos();
        for (Pedido pedido : pedidos) {
            if (pedido.numero == Long.parseLong(numero_pedido)) {
                pedidos.remove(pedido);
                pedidoRepository.delete(pedido);
            }
        }
        usuario.setPedidos(pedidos);
        return usuario;
    }
}
