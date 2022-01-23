package com.ityugaev.bankapp.models;

import lombok.*;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

@Table(name = "Accounts")
@Entity
@Getter
@Setter
@NoArgsConstructor()
@AllArgsConstructor
public class Account extends AbstractPersistable<Integer> {

    @Basic
    @Column(name = "user_id", nullable = false)
    private long userId;

    @Basic
    @Column(name = "balance", nullable = false)
    private double balance;

}
