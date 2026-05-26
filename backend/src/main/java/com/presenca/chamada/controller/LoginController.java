package com.presenca.chamada.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @PostMapping
    public String login(
            @RequestParam String email,
            @RequestParam String senha
    ) {

        if(email.equals("prof@gmail.com")
                && senha.equals("1234")) {

            return "Login válido";
        }

        return "Login inválido";
    }
}