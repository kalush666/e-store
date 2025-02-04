package org.example.estore.Backend.Exceptions;

public class EmailAlreadyTakenException extends RuntimeException{
    public EmailAlreadyTakenException(String message) {
        super(message);
    }
}
