package org.example.estore.Backend.Repository;

import org.example.estore.Backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository
        extends JpaRepository<User,Long> {

    Optional<User> findUserByEmail(String email);
}
