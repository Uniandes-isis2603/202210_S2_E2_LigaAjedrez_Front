import { Partida } from "./partida";

export class PartidaDetail extends Partida {
  jugada: Array<Jugada>;
  jugador: Array<Jugador>;
  comentario: Array<Comentario>;

  constructor(
    id: number,
    torneo: Torneo,
    apertura: Apertura,
    resultado: string,
    jugada: Array<Jugada>,
    jugador: Array<Jugador>,
    comentario: Array<Comentario>
    ) {
      super(id, torneo, apertura, resultado);
      this.jugada = jugada;
      this.jugador = jugador;
      this.comentario = comentario;
  }
}