import winston from 'winston';

const {createLogger, format, transports} = winston;
const {combine, printf, timestamp, colorize} = format;
/**
 * Ejemplo basico de Logging usando Winston
 * Aca solo imprimimos en consola
 * con format podemos agregarle info extra (ej el timestamp) o definir como va a ser la salida
 * Tambien podemos imprimir la salida en el formato que querramos
 */

function getMonthName(day: number) {
  let miFecha = new Date();
  if (0 <= day && day < 12) {
    miFecha.setMonth(day);
    return new Intl.DateTimeFormat('es-ES', {month: 'long'}).format(miFecha);
  } else {
    return null;
  }
}

// const day = new Date().valueOf() - (24 * 60 * 60 * 1000);
const day = new Date().getDate();
const month: number = new Date().getMonth();
const monthName = getMonthName(month);

const logConfiguration = {
  level: 'info',
  from: day - 1,
  until: day,
  format: combine(
    timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    colorize(),
    printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
  ),
  transports: [new transports.File({filename: `./logs/${monthName}/${day}.log`, level: 'debug'}),
  new transports.Console({level: 'info'})],
};

export const logger = createLogger(logConfiguration);
