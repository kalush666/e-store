package org.example.estore.Backend.Repository;

import org.example.estore.Backend.Entity.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<Cart, Long> {

    Optional<Cart> findById(Long id);
}
