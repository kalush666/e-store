package org.example.estore.Service;

import org.example.estore.Entity.User;
import org.example.estore.Exceptions.EmailAlreadyTakenException;
import org.example.estore.Exceptions.InvalidCredentialsException;
import org.example.estore.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
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
}
