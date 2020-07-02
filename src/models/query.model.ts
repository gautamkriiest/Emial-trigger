import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Query extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
  })
  Address?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Query>) {
    super(data);
  }
}

export interface QueryRelations {
  // describe navigational properties here
}

export type QueryWithRelations = Query & QueryRelations;
