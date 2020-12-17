CREATE TABLE users (
   user_id serial primary key,
   nome varchar not null,
   username varchar(50) unique not null,
   senha varchar(50) not null,
   created_on timestamp
);

CREATE TABLE cidade (
  cidade_id serial primary key,
  nome varchar(50) not null
);

CREATE TABLE estado (
  estado_id serial primary key,
  nome varchar(50) not null,
  sigla varchar(2) not null
);

CREATE TABLE cliente (
   cliente_id serial primary key,
   user_id int references users(user_id),
   cidade_id int references cidade(cidade_id),
   estado_id int references estado(estado_id),
   email varchar(255),
   telefone varchar(50) not null,
   enredeco varchar not null,
   cnpj varchar(18) not null,
   cpf varchar(14) not null,
   cep varchar(10)
);

CREATE TABLE cargas (
  carga_id serial primary key,
  endereco varchar(50) not null,
  altura numeric not null,
  largura numeric not null,
  comprimento numeric not null,
  valor numeric not null,
  quantidade decimal not null,
  peso numeric not null,
  tipo_carga varchar not null
);

CREATE TABLE transportadora (
  id serial primary key,
  nome varchar(50) not null,
  email varchar(50),
  telefone varchar(50),
  empresa_atual varchar not null,
  ctes_por_mes int not null,
  tipo_empresa varchar(50) not null
);

CREATE TABLE pagamentos (
  id serial primary key,
  email varchar(50),
  valor numeric not null CHECK (valor > 0),
  transportadora_id int references transportadora(id),
  carga_id int references cargas(carga_id),
  cte boolean not null
);

CREATE TABLE fornecedores (
  id serial primary key,
  nome varchar(50) not null,
  cpf varchar(14) not null,
  cnpj varchar(18) not null,
  endereco varchar not null,
  numero int not null,
  cep varchar(10) not null,
  telefone varchar not null,
  email varchar
);

CREATE TABLE ambiente (
  id serial primary key,
  nome varchar not null,
  cnpj varchar(14) not null,
  tipo_ambiente varchar(50) not null
);

CREATE TABLE empresa_transporte (
  id serial primary key,
  transportadora_id int references transportadora(id),
  ambiente_id int references ambiente(id),
  nome_social varchar,
  sigla char(3),
  nome_fantasia varchar,
  cnpj varchar(14),
  email varchar,
  inscricao_estadual numeric(9),
  enredeco varchar,
  pais varchar,
  uf char(2),
  municipio varchar,
  bairro varchar,
  complemento varchar,
  logradouro varchar,
  numero int
)

ALTER TABLE users
	ALTER COLUMN created_on set default now();

ALTER TABLE transportadora
	ALTER COLUMN ctes_por_mes TYPE VARCHAR;

ALTER TABLE ambiente
	DROP COLUMN tipo_ambiente;

ALTER TABLE empresa_transporte
	DROP COLUMN enredeco;

ALTER TABLE empresa_transporte
	ALTER COLUMN inscricao_estadual TYPE char(9);
