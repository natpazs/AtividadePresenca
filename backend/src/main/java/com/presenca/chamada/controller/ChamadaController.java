package com.presenca.chamada.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/chamada")
public class ChamadaController {

    @PostMapping("/salvar")
    public String salvarHistorico(
            @RequestBody Map<String, Object> dados
    ) {

        System.out.println(dados);

        return "Histórico salvo no Spring Boot!";
    }

}
