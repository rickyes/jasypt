
interface JasyptConstructor {
  salt?: Buffer;
  iterations?: number;
}

declare class Jasypt {

  constructor(options?: JasyptConstructor);

  encrypt(message: string): string;

  decryptConfig(config: object): void;

  decrypt(encryptedMessage: string): string;

  setPassword(password: string): string;
}

export = Jasypt;
