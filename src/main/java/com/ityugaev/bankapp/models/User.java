package com.ityugaev.bankapp.models;

import lombok.*;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

@Table(name = "Users")
@Entity
@Getter
@Setter
@NoArgsConstructor()
@AllArgsConstructor
public class User extends AbstractPersistable<Integer> {

    @Column(name = "user_name", nullable = false)
    private String name;
}
