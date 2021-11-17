export abstract class UseCase<Type, Params> {
  abstract execute(params: Params): Type;
}

export class NoParams {}
