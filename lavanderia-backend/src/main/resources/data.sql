INSERT INTO endereco VALUES(
    9999,'cep','cidade','complemento','logradouro','1234567'
) ON CONFLICT (endereco_id)
DO NOTHING;


INSERT INTO cadastro VALUES(
    9999,'99999999','user','usuario',1,'user',' ','9999-9999',9999
) ON CONFLICT (cadastro_id)
DO NOTHING;