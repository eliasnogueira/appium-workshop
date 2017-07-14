var restify = require('restify');

function Contato(id, nome, email, idade, restricao) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.idade = idade;
    this.restricao = restricao;
}

var contato1 = new Contato(1, "João", "joao@gmail.com", 46, false)
var contato2 = new Contato(2, "Maria", "maria@gmail.com", 21, false);
var contato3 = new Contato(3, "José", "jose@gmail.com", 18, true);

var contatos = [
    contato1, contato2, contato3
];

function getLastID() {
    return contatos[contatos.length -1].id;
}

// DONE
function getAllContacts(request, response, next) {
    var data = {
        contatos: contatos
    };
    response.send(JSON.parse(JSON.stringify(data)));
}


function getContactByID(request, response, next) {
    var id = request.params['id'];
    var encontrou = false;
    
    for (var i = 0, tamanho = contatos.length; i < tamanho; i++) {
        if (id == contatos[i].id) {
            response.send(JSON.parse(JSON.stringify(contatos[i])));
            encontrou = true;
            break;
        }
    }
    
    if (!encontrou) {
        var erro = {status:"erro", mensagem: "Registro não encontrado"};
        response.send(JSON.parse(JSON.stringify(erro)));
    }
}


function createContact(request, response, next) {
    var body = request.body;
    
    var contato_new = new Contato(
        getLastID() + 1,
        body.nome,
        body.email,
        body.idade,
        body.restricao
    );
    
    var data = {
        status: "sucesso",
        contato: contato_new
    };
    contatos.push(contato_new);
    
    response.send(201, JSON.parse(JSON.stringify(data)));
}


function updateContact(request, response, next) {
    var id = request.params['id'];
    var encontrou = false;
    var contatoRetornada;
    
    var body = request.body;
    
    for (var i = 0, tamanho = contatos.length; i < tamanho; i++) {
        if (id == contatos[i].id) {
            encontrou = true;
            contatoRetornado = contatos[i];
            break;
        }
    }
    
    if (encontrou) {
        
        if (body.nome != null) {
            contatoRetornado.nome = body.nome;
        }

        if (body.email != null) {
            contatoRetornado.email = body.email;
        }

        if (body.idade != null) {
            contatoRetornado.idade = body.idade;
        }

        if (body.restricao != null) {
            contatoRetornado.nome = body.restricao;
        }
        
        var data = {
            status: "sucesso",
            contato: contatoRetornado
        };
        
        response.send(JSON.parse(JSON.stringify(data)));
        
    } else {
        var data = {
            status: "erro",
            mensagem: "Registro não encontrado"
        };
        response.send(JSON.parse(JSON.stringify(data)));
    }
}

function deleteContact(request, response, next) {
    var id = request.params['id'];
    var encontrou = false;
    var contato;
    
    for (var i = 0, tamanho = contatos.length; i < tamanho; i++) {
        if (id == contatos[i].id) {
            encontrou = true;
            contato = contatos[i];
            contatos.splice(i, 1);
            break;
        }
    }
    
    if (encontrou) {
        var data = {
            status: "sucesso",
            mensagem: "Registro removido",
            contato: contato
        };
        response.send(202, JSON.parse(JSON.stringify(data)));
    } else {
        var data = {
            status: "erro",
            mensagem: "Registro não encontrado"
        };
        response.send(204, JSON.parse(JSON.stringify(data)));
    }
}

var app = restify.createServer();
app.use(restify.bodyParser());

app.get('/api/v1/contact', getAllContacts);
app.get('/api/v1/contact/:id', getContactByID);
app.post('/api/v1/contact', createContact);
app.put('/api/v1/contact/:id', updateContact);
app.del('/api/v1/contact/:id', deleteContact);

app.listen(3000, function() {
  console.log('%s escutando em %s', app.name, app.url);    
});