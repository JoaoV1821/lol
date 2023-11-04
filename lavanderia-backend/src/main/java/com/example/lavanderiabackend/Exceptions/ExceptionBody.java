package com.example.lavanderiabackend.Exceptions;

import java.io.Serializable;
import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ExceptionBody implements Serializable{
    private Instant timestamp;
    private Integer status;
    private String error;
    private String message;
    private String path;
}
