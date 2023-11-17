package com.example.lavanderiabackend.services.Validation;

public class CPFValidator {
    public static boolean isCpfValid(String cpf) {

        cpf = cpf.replaceAll("[^0-9]", "");

        if (cpf.length() != 11) {
            return false;
        }

        // Verifique se todos os dígitos são iguais
        if (cpf.matches("(\\d)\\1{10}")) {
            return false;
        }

        int primeiroDigitoRaw = Character.getNumericValue(cpf.charAt(9));
        int segundoDigitoRaw = Character.getNumericValue(cpf.charAt(10));

        // Primeiro dígito verificador
        int soma = 0;
        for (int i = 0; i < 9; i++) {
            int digito = Character.getNumericValue(cpf.charAt(i));
            soma += digito * (10 - i);
        }
        int primeiroDigito = 11 - (soma % 11);

        if (primeiroDigito >= 10) {
            primeiroDigito = 0;
        }

        if (primeiroDigitoRaw != primeiroDigito) {
            return false;
        }

        // Segundo dígito verificador
        soma = 0;
        for (int i = 0; i < 10; i++) {
            int digito = Character.getNumericValue(cpf.charAt(i));
            soma += digito * (11 - i);
        }
        int segundoDigito = 11 - (soma % 11);

        if (segundoDigito >= 10) {
            segundoDigito = 0;
        }

        if (segundoDigitoRaw != segundoDigito) {
            return false;
        }

        return true;
    }
}