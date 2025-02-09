package org.example.estore.Backend.Controller;

import org.example.estore.Backend.Entity.Cart;
import org.example.estore.Backend.Service.CartService;
import org.example.estore.Backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CartController {

    private final CartService service;

    @Autowired
    public CartController(CartService service) {
        this.service = service;
    }

    @GetMapping("/getcartbyid")
    public Cart getCartById(Long id) {
        return service.getCartById(id);
    }

    @GetMapping("/getallcarts")
    public List<Cart> getAllCarts() {
        return service.getAllCarts();
    }
}
