package com.Server.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity // Tells the system we care about this
@Table(name = "scores")
public class Scores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  scores_id;
    private String name;
    private int score;

    public Scores() {} // Default constructor

    public Scores(int scores_id, String name, int score) {
        this.scores_id = scores_id;
        this.name = name;
        this.score = score;
    }
// Standard Getters and Setters
    public int getScores_id() {
        return scores_id;
    }

    public void setScores_id(int scores_id) {
        this.scores_id = scores_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Scores scores = (Scores) o;
        return scores_id == scores.scores_id && score == scores.score && Objects.equals(name, scores.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(scores_id, name, score);
    }

    @Override
    public String toString() {
        return "Scores{" +
                "scores_id=" + scores_id +
                ", name='" + name + '\'' +
                ", score=" + score +
                '}';
    }
}
