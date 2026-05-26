package com.presenca.chamada.controller;

import com.presenca.chamada.data.BancoDados;
import com.presenca.chamada.model.Dia;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AulaController {

    @GetMapping("/")
    public String home() {
        return "Sistema funcionando!";
    }

    @GetMapping("/aulas")
    public List<Dia> listarAulas() {
        return BancoDados.cronograma;
    }
}