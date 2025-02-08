package org.example.estore.Backend.Service;

import org.example.estore.Backend.Entity.Product;
import org.example.estore.Backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts(){
        return repository.findAll();
    }



}
