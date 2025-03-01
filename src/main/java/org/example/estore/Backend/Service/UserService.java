package org.example.estore.Backend.Service;

import org.example.estore.Backend.Entity.User;
import org.example.estore.Backend.Exceptions.EmailAlreadyTakenException;
import org.example.estore.Backend.Exceptions.InvalidCredentialsException;
import org.example.estore.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository repository,PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signUp(User user){
        Optional<User> userByEmail = repository
                .findUserByEmail(user.getEmail());
        if (userByEmail.isPresent())
            throw new EmailAlreadyTakenException("Email alredy Taken");
        return repository.save(user);
    }

    public User login(User user){
        Optional<User> userByEmail = repository
                .findUserByEmail(user.getEmail());
        if (userByEmail.isPresent() &&
                user.getPassword().equals(userByEmail.get().getPassword()))
            return userByEmail.get();
        throw new InvalidCredentialsException("invalid email or password");
    }

    public User findById(Long id){
        Optional<User> userById = repository.findById(id);
        if (userById.isPresent())
            return userById.get();
        throw new InvalidCredentialsException("invalid id");
    }
}
