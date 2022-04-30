class Tabelas{
    //construtor
    init(conexao){
        console.log("Banco conectado com sucesso!")
    }

    criaDespesas(){   //Criacao de tabela Despesas
        sql = 'CREATE TABLE despesas' + 
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL)'

        this.conexao.query(sql)
    }

    criaCarteira(){     //Criacao de tabela Carteira
        sql = 'create table carteira'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'saldo double not null,'+
            'limite double not null,'+
            'nome varchar(20) not null,'+
            'primary key(id));'
        this.conexao.query(sql)     
        // curl -d "id_pk=1&descricao=tabela carteira&saldo=2000&limite=3000&nome=Nubank" http://localhost:3000/carteira
    }

    criaCategoria(){       //Criacao de tabela Categoria
        sql = 'create table categoria'+
            '(id integer not null auto_increment,'+
            'nome varchar(20) not null,'+
            'descricao varchar(200),'+
            'primary key(id));'
            this.conexao.queri(sql)
        // curl -d "id_pk=1&nome=Eletrodomesticos&descricao=designado para compra de eletrodomesticos" http://localhost:3000/categoria    
    }


    criaLogin(){        //Criacao de tabela Login
        sql = 'create table login'+
            '(id integer not null auto_increment,'+
            'email varchar(25) not null,'+
            'senha varchar(15) not null,'+
            'primary key(id));'
            this.conexao.query(sql)
        // curl -d "id_pk=1 &  " http://localhost:3000/login   

    }

    criaLancamento(){   //Criacao de tabela Lancamento
        sql = 'create table lancamento'+
            '(id integer not null auto_increment,'+
            'descricao varchar(200),'+
            'valor double not null,'+
            'dataL date not null,'+
            'tipo integer,'+
            'id_carteira integer not null,'+
            'id_categoria integer not null,'+
            'primary key(id),'+
            'foreign key(id_carteira) references carteira (id),'+
            'foreign key(id_categoria) references categoria (id));'
            this.conexao.query(sql)

            //curl -d "id_pk=1&descricao=teste comando&valor=29.9&data=2022-04-25&tipo=d&carteira_fk=1&categoria_fk=2" http://localhost:3000/lancamento
    }
}
module.exports = new Tabelas