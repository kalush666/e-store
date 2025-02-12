package org.example.estore.Backend.Repository;

import org.example.estore.Backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<User,Long> {
    boolean existsByEmail(String email);
    Optional<User> findUserByEmail(String email);
    Optional<User> findById(Long id);
}
