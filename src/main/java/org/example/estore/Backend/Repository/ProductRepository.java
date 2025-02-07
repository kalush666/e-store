package org.example.estore.Backend.Repository;

import org.example.estore.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    boolean existsByProductName(String productName);
    Optional<Product> findProductByProductName(String productName);
}
