class TicketManager {
  eventos;
  #_precioBaseDeGanancia = 0.15;
  static ultimoId = 0;
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }
  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    TicketManager.ultimoId++;
    const evento = {
      nombre,
      lugar,
      precio: precio * this.#_precioBaseDeGanancia,
      capacidad,
      fecha,
      id: TicketManager.ultimoId,
      participantes: [],
    };
    this.eventos.push(evento);
  }
  agregarUsuario(idEvento, idUsuario) {
    if (idEvento == undefined || idUsuario == undefined) {
      throw new Error("Es importante que agregues el idevento y idusuario");
    }
    const indexEvento = this.eventos.findIndex((dato) => dato.id == idEvento);
    if (indexEvento === -1) {
      throw new Error("El evento no existe");
    }
    this.eventos[indexEvento].participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const eventoOriginal = this.eventos.find(
      (evento) => evento.id === idEvento
    );
    return {
      ...eventoOriginal,
      id: idEvento,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
    };
  }
}

const ticketManager = new TicketManager();
ticketManager.agregarEvento("Final del mundial", "Qatar", 10000);
ticketManager.agregarEvento("Playa Grande", "Mardel", 100);
ticketManager.agregarUsuario(2, "Ricardo Martinez");

console.log(ticketManager.getEventos());
