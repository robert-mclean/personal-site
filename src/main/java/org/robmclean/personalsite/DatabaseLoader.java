package org.robmclean.personalsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class DatabaseLoader implements CommandLineRunner {
    private final PostRepository repository;

    @Autowired
    public DatabaseLoader(PostRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Post("Test Content"));
    }
}
