package com.example.lavanderiabackend.Carrinho;

import java.io.Serializable;
import java.util.Objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarrinhoId implements Serializable {
    public Long roupa;
    public Long pedido;

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
