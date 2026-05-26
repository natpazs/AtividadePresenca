package com.presenca.chamada.controller;

import com.presenca.chamada.model.Professor;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/professores")
@CrossOrigin("*")
public class ProfessorController {

    private List<Professor> professores =
            new ArrayList<>();

    public ProfessorController() {

        professores.add(

                new Professor(
                        1L,
                        "Caíque Cruz",
                        "prof@gmail.com",
                        "1234"
                )

        );

    }

    @PostMapping("/login")
    public String login(
            @RequestBody Professor professor
    ) {

        for (Professor p : professores) {

            if (
                    p.getEmail().equals(professor.getEmail())
                            &&
                            p.getSenha().equals(professor.getSenha())
            ) {

                return "Login realizado com sucesso!";

            }

        }

        return "Email ou senha inválidos!";
    }

}