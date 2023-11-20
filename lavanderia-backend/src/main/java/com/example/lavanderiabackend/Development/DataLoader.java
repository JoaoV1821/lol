package com.example.lavanderiabackend.Development;

import java.time.LocalDate;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import com.example.lavanderiabackend.models.Cadastro.Cadastro;
import com.example.lavanderiabackend.models.Cadastro.CadastroService;
import com.example.lavanderiabackend.models.Cadastro.Papel;
import com.example.lavanderiabackend.models.Cadastro.DTO.CadastroDTO;
import com.example.lavanderiabackend.models.Carrinho.DTOS.CarrinhoDTO;
import com.example.lavanderiabackend.models.Categoria.CategoriaService;
import com.example.lavanderiabackend.models.Categoria.DTO.CategoriaDTO;
import com.example.lavanderiabackend.models.Endereco.DTO.EnderecoModelo;
import com.example.lavanderiabackend.models.Pedido.PedidoService;
import com.example.lavanderiabackend.models.Roupa.RoupaService;
import com.example.lavanderiabackend.models.Roupa.DTO.RoupaDTO;
import jakarta.transaction.Transactional;

@Component
@Transactional
public class DataLoader implements ApplicationRunner {

        private final CadastroService cadastroService;
        private final RoupaService roupaService;
        private final CategoriaService categoriaService;

        public DataLoader(CadastroService cadastroService, RoupaService roupaService,
                        CategoriaService categoriaService, PedidoService pedidoService) {
                this.cadastroService = cadastroService;
                this.roupaService = roupaService;
                this.categoriaService = categoriaService;
        }

        @Override
        public void run(ApplicationArguments args) throws Exception {

                EnderecoModelo enderecoModelo = new EnderecoModelo("99999", "logradouro", "complemento", "123",
                                "cidade");
                CadastroDTO cadastroModelo = new CadastroDTO("727.713.780-94", "nome sobrenome", "admin@admin.com",
                                "admin",
                                enderecoModelo, "999-999", Papel.ADMIN, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo);

                CadastroDTO funcionario = new CadastroDTO("889.980.330-70", "funcionario1", "func@func.com", "func",
                                enderecoModelo, "999-888", Papel.FUNCIONARIO, LocalDate.now());
                cadastroService.saveCadastro(funcionario);

                CadastroDTO cliente = new CadastroDTO("160.447.470-00", "cliente1", "cli@cli.com", "cli",
                                enderecoModelo,
                                "888-888", Papel.USER, LocalDate.now());
                cadastroService.saveCadastro(cliente);
                CategoriaDTO[] categorias = {
                                new CategoriaDTO("0001", "Bermudas e shorts"),
                                new CategoriaDTO("0002", "Blusas"),
                                new CategoriaDTO("0003", "Calça"),
                                new CategoriaDTO("0004", "Calçados"),
                                new CategoriaDTO("0005", "Camisa/outros"),
                                new CategoriaDTO("0006", "Casaco/jaqueta"),
                                new CategoriaDTO("0007", "Couro"),
                                new CategoriaDTO("0008", "Praia"),
                                new CategoriaDTO("0009", "Roupas Intimas"),
                                new CategoriaDTO("0010", "Esportes"),
                                new CategoriaDTO("0011", "Social Masculino"),
                                new CategoriaDTO("0012", "Vestido"),
                };
                for (CategoriaDTO categoriaDTO : categorias) {
                        categoriaService.addOrUpdateCategoria(categoriaDTO);
                }

                EnderecoModelo enderecoModelo2 = new EnderecoModelo("99999", "logradouro", "complemento", "123",
                                "cidade");
                CadastroDTO cadastroModelo2 = new CadastroDTO("149.259.570-58", "Mário", "mario@mario.com", "mario",
                                enderecoModelo2, "999-999", Papel.FUNCIONARIO, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo2);
                CadastroDTO cadastroModelo3 = new CadastroDTO("826.501.050-89", "Maria", "maria@maria.com", "maria",
                                enderecoModelo2, "999-999", Papel.FUNCIONARIO, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo3);

                CadastroDTO cadastroModelo4 = new CadastroDTO("171.109.690-37", "João", "joao@joao.com", "joao",
                                enderecoModelo2, "999-999", Papel.USER, LocalDate.now());
                // this.authenticationController.register()
                cadastroService.saveCadastro(cadastroModelo4);
                CadastroDTO cadastroModelo5 = new CadastroDTO("922.505.930-27", "José", "jose@jose.com", "jose",
                                enderecoModelo2, "999-999", Papel.USER, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo5);
                CadastroDTO cadastroModelo6 = new CadastroDTO("808.334.710-82", "Joana", "joana@joana.com", "joana",
                                enderecoModelo2, "999-999", Papel.USER, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo6);
                CadastroDTO cadastroModelo7 = new CadastroDTO("743.513.810-00", "Joaquina", "joaquina@joaquina.com",
                                "joaquina",
                                enderecoModelo2, "999-999", Papel.USER, LocalDate.now());
                cadastroService.saveCadastro(cadastroModelo7);
                RoupaDTO[] roupas = {
                                new RoupaDTO("0001", "Bermuda especial", 20.0, "0001", (long) 2),
                                new RoupaDTO("0002", "Bermuda simples", 15.0, "0001", (long) 2),
                                new RoupaDTO("0003", "Batina", 39.0, "0002", (long) 2),
                                new RoupaDTO("0004", "Blusa de moleton", 25.0, "0002", (long) 1),
                                new RoupaDTO("0005", "Blusa especial", 28.0, "0002", (long) 2),
                                new RoupaDTO("0006", "Blusa regata especial", 22.0, "0002", (long) 2),
                                new RoupaDTO("0007", "Blusa regata simples", 20.0, "0002", (long) 1),
                                new RoupaDTO("0008", "Blusa simples", 19.0, "0002", (long) 1),
                                new RoupaDTO("0009", "Colete simples", 26.00, "0002", (long) 3),
                                new RoupaDTO("0010", "Calça jeans", 16.00, "0003", (long) 2),
                                new RoupaDTO("0011", "Calça social", 18.0, "0003", (long) 2),
                                new RoupaDTO("0012", "Macacão", 42.0, "0003", (long) 4),
                                new RoupaDTO("0013", "Macacão especial", 58.0, "0003", (long) 5),
                                new RoupaDTO("0014", "Calça especial(seda/linho)", 33.0, "0003", (long) 3),
                                new RoupaDTO("0015", "Sapato", 46.0, "0004", (long) 2),
                                new RoupaDTO("0016", "Tenis especial", 56.0, "0004", (long) 2),
                                new RoupaDTO("0017", "Tenis simples", 47.0, "0004", (long) 2),
                                new RoupaDTO("0018", "Camisa especial", 21.0, "0005", (long) 2),
                                new RoupaDTO("0019", "Camisa polo curta", 13.0, "0005", (long) 1),
                                new RoupaDTO("0020", "Camisa polo longa", 14.0, "0005", (long) 1),
                                new RoupaDTO("0021", "Camisa social", 16.0, "0005", (long) 2),
                                new RoupaDTO("0022", "Camiseta manga curta", 13.0, "0005", (long) 2),
                                new RoupaDTO("0023", "Camiseta manga longa ", 14.0, "0005", (long) 2),
                                new RoupaDTO("0024", "Jaleco", 23.0, "0005", (long) 3),
                                new RoupaDTO("0025", "Casaco premium", 140.0, "0006", (long) 4),
                                new RoupaDTO("0026", "Jaqueta com forro", 72.0, "0006", (long) 4),
                                new RoupaDTO("0027", "Jaqueta simples sem forro", 46.0, "0006", (long) 3),
                                new RoupaDTO("0028", "Casaco curto", 52.0, "0006", (long) 3),
                                new RoupaDTO("0029", "Sobretudo simples", 67.0, "0006", (long) 4),
                                new RoupaDTO("0030", "Bermuda de couro", 119.0, "0007", (long) 3),
                                new RoupaDTO("0031", "Calça de couro", 160.0, "0007", (long) 3),
                                new RoupaDTO("0032", "Camisa manga curta couro", 120.0, "0007", (long) 2),
                                new RoupaDTO("0033", "Camisa manga longa couro", 120.0, "0007", (long) 2),
                                new RoupaDTO("0034", "Casaco couro", 160.0, "0007", (long) 4),
                                new RoupaDTO("0035", "Jaqueta de couro", 160.0, "0007", (long) 4),
                                new RoupaDTO("0036", "Sobretudo couro", 280.0, "0007", (long) 5),
                                new RoupaDTO("0037", "Jaqueta premium de couro", 240.0, "0007", (long) 4),
                                new RoupaDTO("0038", "Colete todo em couro", 120.0, "0007", (long) 5),
                                new RoupaDTO("0039", "Biquini", 13.0, "0008", (long) 2),
                                new RoupaDTO("0040", "Maiô", 11.0, "0008", (long) 2),
                                new RoupaDTO("0041", "Calcinha", 7.0, "0009", (long) 1),
                                new RoupaDTO("0042", "Camisola", 34.0, "0009", (long) 2),
                                new RoupaDTO("0043", "Corpete simples", 19.0, "0009", (long) 2),
                                new RoupaDTO("0044", "Cueca", 5.0, "0009", (long) 1),
                                new RoupaDTO("0045", "Meia", 4.0, "0009", (long) 1),
                                new RoupaDTO("0046", "Pijama blusa", 14.0, "0009", (long) 2),
                                new RoupaDTO("0047", "Pijama calça", 14.0, "0009", (long) 3),
                                new RoupaDTO("0048", "Sutiã", 7.0, "0009", (long) 1), // 63 / 90
                                new RoupaDTO("0049", "Kimono blusa", 17.0, "0010", (long) 3),
                                new RoupaDTO("0050", "Kimono calça", 16.0, "0010", (long) 3),
                                new RoupaDTO("0051", "Jaqueta motociclismo", 89.0, "0010", (long) 4),
                                new RoupaDTO("0052", "Macacão", 98.0, "0010", (long) 4),
                                new RoupaDTO("0053", "Blazer/paleto", 26.0, "0011", (long) 2),
                                new RoupaDTO("0054", "Brazer/paleto especial(seda/veludo)", 42.0, "0011", (long) 3),
                                new RoupaDTO("0055", "Terno completo", 45.0, "0011", (long) 5),
                                new RoupaDTO("0056", "Vestido curto", 65.0, "0012", (long) 3),
                                new RoupaDTO("0057", "Vestido longo", 140.0, "0012", (long) 3),
                                new RoupaDTO("0058", "Vestido de noiva", 280.0, "0012", (long) 5),
                                new RoupaDTO("0059", "Vestido longuete", 85.0, "0012", (long) 4),
                };

                for (RoupaDTO roupa : roupas) {
                        roupaService.addOrUpdateRoupa(roupa);
                }
                //// 171.109.690-37 922.505.930-27 808.334.710-82 743.513.810-00
                Cadastro cadastro = this.cadastroService.getCadastroEntity("171.109.690-37");
                List<CarrinhoDTO> carrinhos = new ArrayList<>();
                carrinhos.add(new CarrinhoDTO("0001", 2.0));
                carrinhos.add(new CarrinhoDTO("0002", 2.0));
                List<CarrinhoDTO> carrinhos2 = new ArrayList<>();
                carrinhos2.add(new CarrinhoDTO("0002", 3.0));
                carrinhos2.add(new CarrinhoDTO("0001", 4.0));
                List<CarrinhoDTO> carrinhos3 = new ArrayList<>();
                carrinhos3.add(new CarrinhoDTO("0004", 7.0));
                carrinhos3.add(new CarrinhoDTO("0005", 2.0));
                List<CarrinhoDTO> carrinhos4 = new ArrayList<>();
                carrinhos4.add(new CarrinhoDTO("0011", 1.0));
                carrinhos4.add(new CarrinhoDTO("0012", 2.0));
                carrinhos4.add(new CarrinhoDTO("0002", 2.0));
                List<CarrinhoDTO> carrinhos5 = new ArrayList<>();
                carrinhos5.add(new CarrinhoDTO("0003", 4.0));
                carrinhos5.add(new CarrinhoDTO("0008", 10.0));
                List<CarrinhoDTO> carrinhos6 = new ArrayList<>();
                carrinhos6.add(new CarrinhoDTO("0009", 1.0));
                carrinhos6.add(new CarrinhoDTO("0003", 1.0));
                List<CarrinhoDTO> carrinhos7 = new ArrayList<>();
                carrinhos7.add(new CarrinhoDTO("0005", 3.0));
                carrinhos7.add(new CarrinhoDTO("0006", 4.0));
                List<CarrinhoDTO> carrinhos8 = new ArrayList<>();
                carrinhos8.add(new CarrinhoDTO("0008", 2.0));
                carrinhos8.add(new CarrinhoDTO("0002", 2.0));
                List<CarrinhoDTO> carrinhos9 = new ArrayList<>();
                carrinhos9.add(new CarrinhoDTO("0012", 3.0));
                carrinhos9.add(new CarrinhoDTO("0013", 1.0));

                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos, "EM ABERTO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos2, "EM ABERTO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos3, "EM ABERTO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos4, "REJEITADO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos5, "CANCELADO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos6, "RECOLHIDOS");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos7, "RECOLHIDOS");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos8, "FINALIZADO");
                // this.cadastroService.addPedidoWithStatus(cadastro, carrinhos9, "FINALIZADO");

        }

}
