package org.example.estore.Repository;

import org.example.estore.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository
        extends JpaRepository<User,Long> {

    Optional<User> findUserByEmail(String email);
}
