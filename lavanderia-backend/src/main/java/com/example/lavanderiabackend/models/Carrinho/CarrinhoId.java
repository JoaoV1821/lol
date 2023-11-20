package com.example.lavanderiabackend.models.Carrinho;

import java.io.Serializable;
import java.util.Objects;

import jakarta.annotation.Generated;
import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class CarrinhoId implements Serializable {

    public Long roupa = (long) 0;
    public Long pedido = (long) 0;

    @Override
    public int hashCode() {
        return Objects.hash(roupa, pedido);
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this)
            return true;
        if (!(obj instanceof CarrinhoId))
            return false;
        CarrinhoId cd = (CarrinhoId) obj;
        return cd.roupa.equals(this.roupa) && cd.pedido.equals(this.pedido);
    }

}
