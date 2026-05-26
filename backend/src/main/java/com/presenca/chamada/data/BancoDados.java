package com.presenca.chamada.data;

import com.presenca.chamada.model.Aluno;
import com.presenca.chamada.model.Aula;
import com.presenca.chamada.model.Dia;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BancoDados {

    public static List<Aluno> alunosPadrao = Arrays.asList(
            new Aluno(1L, "Ana Santos"),
            new Aluno(2L, "Bruno Lima"),
            new Aluno(3L, "Carla Moura"),
            new Aluno(4L, "Diego Silva"),
            new Aluno(5L, "Ela Costa")
    );

    public static List<Dia> cronograma = new ArrayList<>(
            Arrays.asList(

                    new Dia("Segunda-feira", Arrays.asList(
                            new Aula(1L, "19:10", "Nuvem e Cloud 1", alunosPadrao),
                            new Aula(2L, "20:10", "Engenharia de Software", alunosPadrao)
                    )),

                    new Dia("Terça-feira", Arrays.asList(
                            new Aula(3L, "19:10", "Algoritmos", alunosPadrao)
                    )),

                    new Dia("Quarta-feira", Arrays.asList(
                            new Aula(4L, "19:10", "Banco de Dados", alunosPadrao)
                    )),

                    new Dia("Quinta-feira", Arrays.asList(
                            new Aula(5L, "19:10", "Desenho Técnico", alunosPadrao)
                    )),

                    new Dia("Sexta-feira", Arrays.asList(
                            new Aula(6L, "19:10", "Ética e Sociedade", alunosPadrao)
                    ))
            )
    );
}