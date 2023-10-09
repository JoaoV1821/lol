package com.example.lavanderiabackend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.lavanderiabackend.models.Cadastro.CadastroRepository;

@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    CadastroRepository cadastroRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return cadastroRepository.findByEmail(username);
    }
}
