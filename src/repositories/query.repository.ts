import {DefaultCrudRepository} from '@loopback/repository';
import {Query, QueryRelations} from '../models';
import {QueryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QueryRepository extends DefaultCrudRepository<
  Query,
  typeof Query.prototype.id,
  QueryRelations
> {
  constructor(
    @inject('datasources.query') dataSource: QueryDataSource,
  ) {
    super(Query, dataSource);
  }
}
