package org.example.estore.Backend.Service;

import org.example.estore.Backend.Entity.Cart;
import org.example.estore.Backend.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {
    private final CartRepository repository;

    @Autowired
    public CartService(CartRepository repository) {
        this.repository = repository;
    }

    public Cart getCartById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Cart> getAllCarts() {
        return repository.findAll();
    }

    public Cart getCartByUserId(Long userId) {
        return repository.findByUserId(userId).orElse(null);
    }

    public void saveCart(Cart cart) {
        repository.save(cart);
    }

    public Cart createCart(Long userId) {
        Cart newCart = new Cart();
        newCart.setUserId(userId);
        newCart.setProducts(new ArrayList<>());
        return repository.save(newCart);
    }
}
