package org.example.estore.Backend.Entity;

import jakarta.persistence.*;

import java.awt.*;

@Entity
Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imageURL;
    private String description;

    public Product(String name, String imageURL, String description) {
        this.name = name;
        this.imageURL = imageURL;
        this.description = description;
    }


}
