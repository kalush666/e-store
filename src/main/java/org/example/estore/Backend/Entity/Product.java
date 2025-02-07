package org.example.estore.Backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imageURL;
    private String description;
    private double price;

    public Product(String name, String imageURL, String description, double price) {
        this.name = name;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    public Product() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}