package com.ityugaev.bankapp.models;

import lombok.*;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name = "Amount")
@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Amount extends AbstractPersistable<Integer> {

    @Basic
    @Column(name = "amount", nullable = false)
    private double amount;
}
