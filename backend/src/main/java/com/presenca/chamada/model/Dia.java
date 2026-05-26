package com.presenca.chamada.model;

import java.util.List;

public class Dia {

    private String nome;
    private List<Aula> aulas;

    public Dia(String nome, List<Aula> aulas) {
        this.nome = nome;
        this.aulas = aulas;
    }

    public String getNome() {
        return nome;
    }

    public List<Aula> getAulas() {
        return aulas;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setAulas(List<Aula> aulas) {
        this.aulas = aulas;
    }
}
