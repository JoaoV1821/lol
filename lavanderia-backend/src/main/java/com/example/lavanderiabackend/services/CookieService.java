package com.example.lavanderiabackend.services;

import org.springframework.stereotype.Service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class CookieService {
    public  void create(HttpServletResponse httpServletResponse , String name , String value, Boolean secure,
    Integer maxAge , String domain){
        Cookie cookie = new Cookie(name, value);
        cookie.setSecure(secure);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(maxAge);
        cookie.setPath("/");
        cookie.setDomain(domain);
        httpServletResponse.addCookie(cookie);
    }

    public  void clear(HttpServletResponse httpServletResponse,String name){
        Cookie cookie = new Cookie(name, null);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setDomain("localhost");
        cookie.setMaxAge(1);
        httpServletResponse.addCookie(cookie);
    }
}
