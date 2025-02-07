package org.example.estore.Backend.Repository;

import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    boolean existsByProductName(String productName);
    Optional<Product> findProductByProductName(String productName);
}
