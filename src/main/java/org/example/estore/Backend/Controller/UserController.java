package org.example.estore.Backend.Controller;

import org.example.estore.Backend.Entity.User;
import org.example.estore.Backend.Exceptions.EmailAlreadyTakenException;
import org.example.estore.Backend.Exceptions.InvalidCredentialsException;
import org.example.estore.Backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return service.signUp(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.login(user);
    }

    @GetMapping("/test")
    public Map<String, String> test() {
        return Map.of("message", "Controller is working!");
    }

    @ExceptionHandler(EmailAlreadyTakenException.class)
    public ResponseEntity<String> handleEmailAlreadyTaken(EmailAlreadyTakenException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<String> handleInvalidCredentials(InvalidCredentialsException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
    }
}