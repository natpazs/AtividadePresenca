package com.presenca.chamada.model;

import java.util.List;

public class Aula {

    private Long id;
    private String horario;
    private String materia;
    private List<Aluno> alunos;

    public Aula(Long id, String horario, String materia, List<Aluno> alunos) {
        this.id = id;
        this.horario = horario;
        this.materia = materia;
        this.alunos = alunos;
    }

    public Long getId() {
        return id;
    }

    public String getHorario() {
        return horario;
    }

    public String getMateria() {
        return materia;
    }

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }
}