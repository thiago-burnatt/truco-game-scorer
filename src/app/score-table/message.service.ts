export class MessageService {

  scoreEleven(player: string): string {
    return player + ' está na mão de onze!';
  }

  winningMessage(player: string): string {
    return player + ' venceu a partida!';
  }

  drawMessage(): string {
    return 'Jogo empatado em 11 a 11;'
  }

  emptyMessage(): string {
    return '';
  }

}
