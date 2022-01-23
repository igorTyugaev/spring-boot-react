package com.ityugaev.bankapp.models;

import lombok.*;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;

@Table(name = "Loans")
@Entity
@Getter
@Setter
@NoArgsConstructor()
@AllArgsConstructor
public class Loan extends AbstractPersistable<Integer> {

    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "sanction_amount", nullable = false)
    private double sanctionAmount;
}
