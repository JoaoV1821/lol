package com.example.lavanderiabackend.Development.Apis;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

@Controller
@Configuration
public class ApiPageController {

    @GetMapping("/api/index")
    public String getApiPage() {
        return "api.html";
    }

    // @GetMapping("/api")
    // //public String getPage() {
    // return "api.html";
    // }

    @Bean
    public ClassLoaderTemplateResolver emailTemplateResolver() {
        ClassLoaderTemplateResolver emailTemplateResolver = new ClassLoaderTemplateResolver();
        emailTemplateResolver.setPrefix("public/");
        emailTemplateResolver.setSuffix(".html");
        emailTemplateResolver.setTemplateMode(TemplateMode.HTML);
        emailTemplateResolver.setCharacterEncoding("UTF-8");
        emailTemplateResolver.setOrder(0);
        emailTemplateResolver.setCheckExistence(true);

        return emailTemplateResolver;
    }
}
