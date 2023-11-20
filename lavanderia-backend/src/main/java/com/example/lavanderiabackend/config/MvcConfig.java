package com.example.lavanderiabackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/api").setViewName("forward:/api");
        registry.addViewController("/autocadastro/{*}").setViewName("forward:/");
        registry.addViewController("/consulta-pedido/{*}").setViewName("forward:/");
        registry.addViewController("/login/{*}").setViewName("forward:/");
        registry.addViewController("/listagem/{*}").setViewName("forward:/");
        registry.addViewController("/pagina-inicial/{*}").setViewName("forward:/");
        registry.addViewController("/pedido/{*}").setViewName("forward:/");
        registry.addViewController("/roupas/{*}").setViewName("forward:/");
        registry.addViewController("/roupas/{*}").setViewName("forward:/");
        registry.addViewController("/funcionarios/{*}").setViewName("forward:/");
        registry.addViewController("/orcamento/{*}").setViewName("forward:/");
        registry.addViewController("/prop/{*}").setViewName("forward:/");
        registry.addViewController("/listagemF/{*}").setViewName("forward:/");
        registry.addViewController("/relatorios/{*}").setViewName("forward:/");
        registry.addViewController("/home/{*}").setViewName("forward:/");
        registry.addViewController("/funcionario/{*}").setViewName("forward:/");
        registry.addViewController("/funcionario/listar/{*}").setViewName("forward:/");
        registry.addViewController("funcionario/inserir/{*}").setViewName("forward:/");
        registry.addViewController("funcionario/editar/{*}").setViewName("forward:/");
        registry.addViewController("home-funcionario/{*}").setViewName("forward:/");
        //

    }
}