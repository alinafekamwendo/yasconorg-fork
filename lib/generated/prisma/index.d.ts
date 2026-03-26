
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CmsUser
 * 
 */
export type CmsUser = $Result.DefaultSelection<Prisma.$CmsUserPayload>
/**
 * Model CmsSession
 * 
 */
export type CmsSession = $Result.DefaultSelection<Prisma.$CmsSessionPayload>
/**
 * Model CmsContent
 * 
 */
export type CmsContent = $Result.DefaultSelection<Prisma.$CmsContentPayload>
/**
 * Model CmsAnnouncement
 * 
 */
export type CmsAnnouncement = $Result.DefaultSelection<Prisma.$CmsAnnouncementPayload>
/**
 * Model CmsNews
 * 
 */
export type CmsNews = $Result.DefaultSelection<Prisma.$CmsNewsPayload>
/**
 * Model CmsPressBreifing
 * 
 */
export type CmsPressBreifing = $Result.DefaultSelection<Prisma.$CmsPressBreifingPayload>
/**
 * Model CmsVideo
 * 
 */
export type CmsVideo = $Result.DefaultSelection<Prisma.$CmsVideoPayload>
/**
 * Model CmsBlog
 * 
 */
export type CmsBlog = $Result.DefaultSelection<Prisma.$CmsBlogPayload>
/**
 * Model CmsTeamMember
 * 
 */
export type CmsTeamMember = $Result.DefaultSelection<Prisma.$CmsTeamMemberPayload>
/**
 * Model CmsMediaItem
 * 
 */
export type CmsMediaItem = $Result.DefaultSelection<Prisma.$CmsMediaItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CmsRole: {
  super_admin: 'super_admin',
  regional_admin: 'regional_admin'
};

export type CmsRole = (typeof CmsRole)[keyof typeof CmsRole]


export const CmsRegion: {
  national: 'national',
  northern: 'northern',
  central: 'central',
  southern: 'southern',
  eastern: 'eastern'
};

export type CmsRegion = (typeof CmsRegion)[keyof typeof CmsRegion]


export const CmsLevel: {
  national: 'national',
  regional: 'regional'
};

export type CmsLevel = (typeof CmsLevel)[keyof typeof CmsLevel]


export const CmsContentType: {
  blog: 'blog',
  news: 'news',
  announcement: 'announcement',
  press_briefing: 'press_briefing',
  video: 'video'
};

export type CmsContentType = (typeof CmsContentType)[keyof typeof CmsContentType]


export const CmsCategory: {
  news: 'news',
  impact: 'impact',
  press_release: 'press_release',
  announcement: 'announcement',
  video: 'video',
  blog: 'blog'
};

export type CmsCategory = (typeof CmsCategory)[keyof typeof CmsCategory]


export const PublishStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]


export const CmsTeamType: {
  management: 'management',
  board: 'board'
};

export type CmsTeamType = (typeof CmsTeamType)[keyof typeof CmsTeamType]


export const CmsMediaType: {
  gallery: 'gallery',
  document: 'document'
};

export type CmsMediaType = (typeof CmsMediaType)[keyof typeof CmsMediaType]

}

export type CmsRole = $Enums.CmsRole

export const CmsRole: typeof $Enums.CmsRole

export type CmsRegion = $Enums.CmsRegion

export const CmsRegion: typeof $Enums.CmsRegion

export type CmsLevel = $Enums.CmsLevel

export const CmsLevel: typeof $Enums.CmsLevel

export type CmsContentType = $Enums.CmsContentType

export const CmsContentType: typeof $Enums.CmsContentType

export type CmsCategory = $Enums.CmsCategory

export const CmsCategory: typeof $Enums.CmsCategory

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

export type CmsTeamType = $Enums.CmsTeamType

export const CmsTeamType: typeof $Enums.CmsTeamType

export type CmsMediaType = $Enums.CmsMediaType

export const CmsMediaType: typeof $Enums.CmsMediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CmsUsers
 * const cmsUsers = await prisma.cmsUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CmsUsers
   * const cmsUsers = await prisma.cmsUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cmsUser`: Exposes CRUD operations for the **CmsUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsUsers
    * const cmsUsers = await prisma.cmsUser.findMany()
    * ```
    */
  get cmsUser(): Prisma.CmsUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsSession`: Exposes CRUD operations for the **CmsSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsSessions
    * const cmsSessions = await prisma.cmsSession.findMany()
    * ```
    */
  get cmsSession(): Prisma.CmsSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsContent`: Exposes CRUD operations for the **CmsContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsContents
    * const cmsContents = await prisma.cmsContent.findMany()
    * ```
    */
  get cmsContent(): Prisma.CmsContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsAnnouncement`: Exposes CRUD operations for the **CmsAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsAnnouncements
    * const cmsAnnouncements = await prisma.cmsAnnouncement.findMany()
    * ```
    */
  get cmsAnnouncement(): Prisma.CmsAnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsNews`: Exposes CRUD operations for the **CmsNews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsNews
    * const cmsNews = await prisma.cmsNews.findMany()
    * ```
    */
  get cmsNews(): Prisma.CmsNewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsPressBreifing`: Exposes CRUD operations for the **CmsPressBreifing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsPressBreifings
    * const cmsPressBreifings = await prisma.cmsPressBreifing.findMany()
    * ```
    */
  get cmsPressBreifing(): Prisma.CmsPressBreifingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsVideo`: Exposes CRUD operations for the **CmsVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsVideos
    * const cmsVideos = await prisma.cmsVideo.findMany()
    * ```
    */
  get cmsVideo(): Prisma.CmsVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsBlog`: Exposes CRUD operations for the **CmsBlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsBlogs
    * const cmsBlogs = await prisma.cmsBlog.findMany()
    * ```
    */
  get cmsBlog(): Prisma.CmsBlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsTeamMember`: Exposes CRUD operations for the **CmsTeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsTeamMembers
    * const cmsTeamMembers = await prisma.cmsTeamMember.findMany()
    * ```
    */
  get cmsTeamMember(): Prisma.CmsTeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmsMediaItem`: Exposes CRUD operations for the **CmsMediaItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmsMediaItems
    * const cmsMediaItems = await prisma.cmsMediaItem.findMany()
    * ```
    */
  get cmsMediaItem(): Prisma.CmsMediaItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CmsUser: 'CmsUser',
    CmsSession: 'CmsSession',
    CmsContent: 'CmsContent',
    CmsAnnouncement: 'CmsAnnouncement',
    CmsNews: 'CmsNews',
    CmsPressBreifing: 'CmsPressBreifing',
    CmsVideo: 'CmsVideo',
    CmsBlog: 'CmsBlog',
    CmsTeamMember: 'CmsTeamMember',
    CmsMediaItem: 'CmsMediaItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cmsUser" | "cmsSession" | "cmsContent" | "cmsAnnouncement" | "cmsNews" | "cmsPressBreifing" | "cmsVideo" | "cmsBlog" | "cmsTeamMember" | "cmsMediaItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CmsUser: {
        payload: Prisma.$CmsUserPayload<ExtArgs>
        fields: Prisma.CmsUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          findFirst: {
            args: Prisma.CmsUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          findMany: {
            args: Prisma.CmsUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>[]
          }
          create: {
            args: Prisma.CmsUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          createMany: {
            args: Prisma.CmsUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>[]
          }
          delete: {
            args: Prisma.CmsUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          update: {
            args: Prisma.CmsUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          deleteMany: {
            args: Prisma.CmsUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>[]
          }
          upsert: {
            args: Prisma.CmsUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsUserPayload>
          }
          aggregate: {
            args: Prisma.CmsUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsUser>
          }
          groupBy: {
            args: Prisma.CmsUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsUserCountArgs<ExtArgs>
            result: $Utils.Optional<CmsUserCountAggregateOutputType> | number
          }
        }
      }
      CmsSession: {
        payload: Prisma.$CmsSessionPayload<ExtArgs>
        fields: Prisma.CmsSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          findFirst: {
            args: Prisma.CmsSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          findMany: {
            args: Prisma.CmsSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>[]
          }
          create: {
            args: Prisma.CmsSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          createMany: {
            args: Prisma.CmsSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>[]
          }
          delete: {
            args: Prisma.CmsSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          update: {
            args: Prisma.CmsSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          deleteMany: {
            args: Prisma.CmsSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>[]
          }
          upsert: {
            args: Prisma.CmsSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsSessionPayload>
          }
          aggregate: {
            args: Prisma.CmsSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsSession>
          }
          groupBy: {
            args: Prisma.CmsSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CmsSessionCountAggregateOutputType> | number
          }
        }
      }
      CmsContent: {
        payload: Prisma.$CmsContentPayload<ExtArgs>
        fields: Prisma.CmsContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          findFirst: {
            args: Prisma.CmsContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          findMany: {
            args: Prisma.CmsContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>[]
          }
          create: {
            args: Prisma.CmsContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          createMany: {
            args: Prisma.CmsContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>[]
          }
          delete: {
            args: Prisma.CmsContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          update: {
            args: Prisma.CmsContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          deleteMany: {
            args: Prisma.CmsContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>[]
          }
          upsert: {
            args: Prisma.CmsContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsContentPayload>
          }
          aggregate: {
            args: Prisma.CmsContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsContent>
          }
          groupBy: {
            args: Prisma.CmsContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsContentCountArgs<ExtArgs>
            result: $Utils.Optional<CmsContentCountAggregateOutputType> | number
          }
        }
      }
      CmsAnnouncement: {
        payload: Prisma.$CmsAnnouncementPayload<ExtArgs>
        fields: Prisma.CmsAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.CmsAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          findMany: {
            args: Prisma.CmsAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>[]
          }
          create: {
            args: Prisma.CmsAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          createMany: {
            args: Prisma.CmsAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsAnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>[]
          }
          delete: {
            args: Prisma.CmsAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          update: {
            args: Prisma.CmsAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.CmsAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsAnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.CmsAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.CmsAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsAnnouncement>
          }
          groupBy: {
            args: Prisma.CmsAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsAnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<CmsAnnouncementCountAggregateOutputType> | number
          }
        }
      }
      CmsNews: {
        payload: Prisma.$CmsNewsPayload<ExtArgs>
        fields: Prisma.CmsNewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsNewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsNewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          findFirst: {
            args: Prisma.CmsNewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsNewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          findMany: {
            args: Prisma.CmsNewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>[]
          }
          create: {
            args: Prisma.CmsNewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          createMany: {
            args: Prisma.CmsNewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsNewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>[]
          }
          delete: {
            args: Prisma.CmsNewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          update: {
            args: Prisma.CmsNewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          deleteMany: {
            args: Prisma.CmsNewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsNewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsNewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>[]
          }
          upsert: {
            args: Prisma.CmsNewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsNewsPayload>
          }
          aggregate: {
            args: Prisma.CmsNewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsNews>
          }
          groupBy: {
            args: Prisma.CmsNewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsNewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsNewsCountArgs<ExtArgs>
            result: $Utils.Optional<CmsNewsCountAggregateOutputType> | number
          }
        }
      }
      CmsPressBreifing: {
        payload: Prisma.$CmsPressBreifingPayload<ExtArgs>
        fields: Prisma.CmsPressBreifingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsPressBreifingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsPressBreifingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          findFirst: {
            args: Prisma.CmsPressBreifingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsPressBreifingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          findMany: {
            args: Prisma.CmsPressBreifingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>[]
          }
          create: {
            args: Prisma.CmsPressBreifingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          createMany: {
            args: Prisma.CmsPressBreifingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsPressBreifingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>[]
          }
          delete: {
            args: Prisma.CmsPressBreifingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          update: {
            args: Prisma.CmsPressBreifingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          deleteMany: {
            args: Prisma.CmsPressBreifingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsPressBreifingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsPressBreifingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>[]
          }
          upsert: {
            args: Prisma.CmsPressBreifingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsPressBreifingPayload>
          }
          aggregate: {
            args: Prisma.CmsPressBreifingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsPressBreifing>
          }
          groupBy: {
            args: Prisma.CmsPressBreifingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsPressBreifingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsPressBreifingCountArgs<ExtArgs>
            result: $Utils.Optional<CmsPressBreifingCountAggregateOutputType> | number
          }
        }
      }
      CmsVideo: {
        payload: Prisma.$CmsVideoPayload<ExtArgs>
        fields: Prisma.CmsVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          findFirst: {
            args: Prisma.CmsVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          findMany: {
            args: Prisma.CmsVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>[]
          }
          create: {
            args: Prisma.CmsVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          createMany: {
            args: Prisma.CmsVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>[]
          }
          delete: {
            args: Prisma.CmsVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          update: {
            args: Prisma.CmsVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          deleteMany: {
            args: Prisma.CmsVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>[]
          }
          upsert: {
            args: Prisma.CmsVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsVideoPayload>
          }
          aggregate: {
            args: Prisma.CmsVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsVideo>
          }
          groupBy: {
            args: Prisma.CmsVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsVideoCountArgs<ExtArgs>
            result: $Utils.Optional<CmsVideoCountAggregateOutputType> | number
          }
        }
      }
      CmsBlog: {
        payload: Prisma.$CmsBlogPayload<ExtArgs>
        fields: Prisma.CmsBlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsBlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsBlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          findFirst: {
            args: Prisma.CmsBlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsBlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          findMany: {
            args: Prisma.CmsBlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          create: {
            args: Prisma.CmsBlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          createMany: {
            args: Prisma.CmsBlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsBlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          delete: {
            args: Prisma.CmsBlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          update: {
            args: Prisma.CmsBlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          deleteMany: {
            args: Prisma.CmsBlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsBlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsBlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>[]
          }
          upsert: {
            args: Prisma.CmsBlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsBlogPayload>
          }
          aggregate: {
            args: Prisma.CmsBlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsBlog>
          }
          groupBy: {
            args: Prisma.CmsBlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsBlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsBlogCountArgs<ExtArgs>
            result: $Utils.Optional<CmsBlogCountAggregateOutputType> | number
          }
        }
      }
      CmsTeamMember: {
        payload: Prisma.$CmsTeamMemberPayload<ExtArgs>
        fields: Prisma.CmsTeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsTeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsTeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          findFirst: {
            args: Prisma.CmsTeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsTeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          findMany: {
            args: Prisma.CmsTeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>[]
          }
          create: {
            args: Prisma.CmsTeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          createMany: {
            args: Prisma.CmsTeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsTeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>[]
          }
          delete: {
            args: Prisma.CmsTeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          update: {
            args: Prisma.CmsTeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.CmsTeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsTeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsTeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.CmsTeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsTeamMemberPayload>
          }
          aggregate: {
            args: Prisma.CmsTeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsTeamMember>
          }
          groupBy: {
            args: Prisma.CmsTeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsTeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsTeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CmsTeamMemberCountAggregateOutputType> | number
          }
        }
      }
      CmsMediaItem: {
        payload: Prisma.$CmsMediaItemPayload<ExtArgs>
        fields: Prisma.CmsMediaItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmsMediaItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmsMediaItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          findFirst: {
            args: Prisma.CmsMediaItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmsMediaItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          findMany: {
            args: Prisma.CmsMediaItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>[]
          }
          create: {
            args: Prisma.CmsMediaItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          createMany: {
            args: Prisma.CmsMediaItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmsMediaItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>[]
          }
          delete: {
            args: Prisma.CmsMediaItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          update: {
            args: Prisma.CmsMediaItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          deleteMany: {
            args: Prisma.CmsMediaItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmsMediaItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmsMediaItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>[]
          }
          upsert: {
            args: Prisma.CmsMediaItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmsMediaItemPayload>
          }
          aggregate: {
            args: Prisma.CmsMediaItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmsMediaItem>
          }
          groupBy: {
            args: Prisma.CmsMediaItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsMediaItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmsMediaItemCountArgs<ExtArgs>
            result: $Utils.Optional<CmsMediaItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cmsUser?: CmsUserOmit
    cmsSession?: CmsSessionOmit
    cmsContent?: CmsContentOmit
    cmsAnnouncement?: CmsAnnouncementOmit
    cmsNews?: CmsNewsOmit
    cmsPressBreifing?: CmsPressBreifingOmit
    cmsVideo?: CmsVideoOmit
    cmsBlog?: CmsBlogOmit
    cmsTeamMember?: CmsTeamMemberOmit
    cmsMediaItem?: CmsMediaItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CmsUserCountOutputType
   */

  export type CmsUserCountOutputType = {
    sessions: number
    createdContent: number
    updatedContent: number
    createdAnnouncements: number
    updatedAnnouncements: number
    createdNews: number
    updatedNews: number
    createdBriefings: number
    updatedBriefings: number
    createdVideos: number
    updatedVideos: number
    createdBlogs: number
    updatedBlogs: number
    createdTeams: number
    updatedTeams: number
    createdMedia: number
    updatedMedia: number
  }

  export type CmsUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | CmsUserCountOutputTypeCountSessionsArgs
    createdContent?: boolean | CmsUserCountOutputTypeCountCreatedContentArgs
    updatedContent?: boolean | CmsUserCountOutputTypeCountUpdatedContentArgs
    createdAnnouncements?: boolean | CmsUserCountOutputTypeCountCreatedAnnouncementsArgs
    updatedAnnouncements?: boolean | CmsUserCountOutputTypeCountUpdatedAnnouncementsArgs
    createdNews?: boolean | CmsUserCountOutputTypeCountCreatedNewsArgs
    updatedNews?: boolean | CmsUserCountOutputTypeCountUpdatedNewsArgs
    createdBriefings?: boolean | CmsUserCountOutputTypeCountCreatedBriefingsArgs
    updatedBriefings?: boolean | CmsUserCountOutputTypeCountUpdatedBriefingsArgs
    createdVideos?: boolean | CmsUserCountOutputTypeCountCreatedVideosArgs
    updatedVideos?: boolean | CmsUserCountOutputTypeCountUpdatedVideosArgs
    createdBlogs?: boolean | CmsUserCountOutputTypeCountCreatedBlogsArgs
    updatedBlogs?: boolean | CmsUserCountOutputTypeCountUpdatedBlogsArgs
    createdTeams?: boolean | CmsUserCountOutputTypeCountCreatedTeamsArgs
    updatedTeams?: boolean | CmsUserCountOutputTypeCountUpdatedTeamsArgs
    createdMedia?: boolean | CmsUserCountOutputTypeCountCreatedMediaArgs
    updatedMedia?: boolean | CmsUserCountOutputTypeCountUpdatedMediaArgs
  }

  // Custom InputTypes
  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUserCountOutputType
     */
    select?: CmsUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSessionWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsContentWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsContentWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAnnouncementWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAnnouncementWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsNewsWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsNewsWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedBriefingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPressBreifingWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedBriefingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPressBreifingWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsVideoWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsVideoWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsTeamMemberWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsTeamMemberWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountCreatedMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsMediaItemWhereInput
  }

  /**
   * CmsUserCountOutputType without action
   */
  export type CmsUserCountOutputTypeCountUpdatedMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsMediaItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CmsUser
   */

  export type AggregateCmsUser = {
    _count: CmsUserCountAggregateOutputType | null
    _avg: CmsUserAvgAggregateOutputType | null
    _sum: CmsUserSumAggregateOutputType | null
    _min: CmsUserMinAggregateOutputType | null
    _max: CmsUserMaxAggregateOutputType | null
  }

  export type CmsUserAvgAggregateOutputType = {
    id: number | null
  }

  export type CmsUserSumAggregateOutputType = {
    id: number | null
  }

  export type CmsUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.CmsRole | null
    region: $Enums.CmsRegion | null
    createdAt: Date | null
  }

  export type CmsUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.CmsRole | null
    region: $Enums.CmsRegion | null
    createdAt: Date | null
  }

  export type CmsUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    region: number
    createdAt: number
    _all: number
  }


  export type CmsUserAvgAggregateInputType = {
    id?: true
  }

  export type CmsUserSumAggregateInputType = {
    id?: true
  }

  export type CmsUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    region?: true
    createdAt?: true
  }

  export type CmsUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    region?: true
    createdAt?: true
  }

  export type CmsUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    region?: true
    createdAt?: true
    _all?: true
  }

  export type CmsUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsUser to aggregate.
     */
    where?: CmsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsUsers to fetch.
     */
    orderBy?: CmsUserOrderByWithRelationInput | CmsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsUsers
    **/
    _count?: true | CmsUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsUserMaxAggregateInputType
  }

  export type GetCmsUserAggregateType<T extends CmsUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsUser[P]>
      : GetScalarType<T[P], AggregateCmsUser[P]>
  }




  export type CmsUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsUserWhereInput
    orderBy?: CmsUserOrderByWithAggregationInput | CmsUserOrderByWithAggregationInput[]
    by: CmsUserScalarFieldEnum[] | CmsUserScalarFieldEnum
    having?: CmsUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsUserCountAggregateInputType | true
    _avg?: CmsUserAvgAggregateInputType
    _sum?: CmsUserSumAggregateInputType
    _min?: CmsUserMinAggregateInputType
    _max?: CmsUserMaxAggregateInputType
  }

  export type CmsUserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt: Date
    _count: CmsUserCountAggregateOutputType | null
    _avg: CmsUserAvgAggregateOutputType | null
    _sum: CmsUserSumAggregateOutputType | null
    _min: CmsUserMinAggregateOutputType | null
    _max: CmsUserMaxAggregateOutputType | null
  }

  type GetCmsUserGroupByPayload<T extends CmsUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsUserGroupByOutputType[P]>
            : GetScalarType<T[P], CmsUserGroupByOutputType[P]>
        }
      >
    >


  export type CmsUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    region?: boolean
    createdAt?: boolean
    sessions?: boolean | CmsUser$sessionsArgs<ExtArgs>
    createdContent?: boolean | CmsUser$createdContentArgs<ExtArgs>
    updatedContent?: boolean | CmsUser$updatedContentArgs<ExtArgs>
    createdAnnouncements?: boolean | CmsUser$createdAnnouncementsArgs<ExtArgs>
    updatedAnnouncements?: boolean | CmsUser$updatedAnnouncementsArgs<ExtArgs>
    createdNews?: boolean | CmsUser$createdNewsArgs<ExtArgs>
    updatedNews?: boolean | CmsUser$updatedNewsArgs<ExtArgs>
    createdBriefings?: boolean | CmsUser$createdBriefingsArgs<ExtArgs>
    updatedBriefings?: boolean | CmsUser$updatedBriefingsArgs<ExtArgs>
    createdVideos?: boolean | CmsUser$createdVideosArgs<ExtArgs>
    updatedVideos?: boolean | CmsUser$updatedVideosArgs<ExtArgs>
    createdBlogs?: boolean | CmsUser$createdBlogsArgs<ExtArgs>
    updatedBlogs?: boolean | CmsUser$updatedBlogsArgs<ExtArgs>
    createdTeams?: boolean | CmsUser$createdTeamsArgs<ExtArgs>
    updatedTeams?: boolean | CmsUser$updatedTeamsArgs<ExtArgs>
    createdMedia?: boolean | CmsUser$createdMediaArgs<ExtArgs>
    updatedMedia?: boolean | CmsUser$updatedMediaArgs<ExtArgs>
    _count?: boolean | CmsUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsUser"]>

  export type CmsUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    region?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cmsUser"]>

  export type CmsUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    region?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cmsUser"]>

  export type CmsUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    region?: boolean
    createdAt?: boolean
  }

  export type CmsUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "region" | "createdAt", ExtArgs["result"]["cmsUser"]>
  export type CmsUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | CmsUser$sessionsArgs<ExtArgs>
    createdContent?: boolean | CmsUser$createdContentArgs<ExtArgs>
    updatedContent?: boolean | CmsUser$updatedContentArgs<ExtArgs>
    createdAnnouncements?: boolean | CmsUser$createdAnnouncementsArgs<ExtArgs>
    updatedAnnouncements?: boolean | CmsUser$updatedAnnouncementsArgs<ExtArgs>
    createdNews?: boolean | CmsUser$createdNewsArgs<ExtArgs>
    updatedNews?: boolean | CmsUser$updatedNewsArgs<ExtArgs>
    createdBriefings?: boolean | CmsUser$createdBriefingsArgs<ExtArgs>
    updatedBriefings?: boolean | CmsUser$updatedBriefingsArgs<ExtArgs>
    createdVideos?: boolean | CmsUser$createdVideosArgs<ExtArgs>
    updatedVideos?: boolean | CmsUser$updatedVideosArgs<ExtArgs>
    createdBlogs?: boolean | CmsUser$createdBlogsArgs<ExtArgs>
    updatedBlogs?: boolean | CmsUser$updatedBlogsArgs<ExtArgs>
    createdTeams?: boolean | CmsUser$createdTeamsArgs<ExtArgs>
    updatedTeams?: boolean | CmsUser$updatedTeamsArgs<ExtArgs>
    createdMedia?: boolean | CmsUser$createdMediaArgs<ExtArgs>
    updatedMedia?: boolean | CmsUser$updatedMediaArgs<ExtArgs>
    _count?: boolean | CmsUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmsUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmsUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmsUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsUser"
    objects: {
      sessions: Prisma.$CmsSessionPayload<ExtArgs>[]
      createdContent: Prisma.$CmsContentPayload<ExtArgs>[]
      updatedContent: Prisma.$CmsContentPayload<ExtArgs>[]
      createdAnnouncements: Prisma.$CmsAnnouncementPayload<ExtArgs>[]
      updatedAnnouncements: Prisma.$CmsAnnouncementPayload<ExtArgs>[]
      createdNews: Prisma.$CmsNewsPayload<ExtArgs>[]
      updatedNews: Prisma.$CmsNewsPayload<ExtArgs>[]
      createdBriefings: Prisma.$CmsPressBreifingPayload<ExtArgs>[]
      updatedBriefings: Prisma.$CmsPressBreifingPayload<ExtArgs>[]
      createdVideos: Prisma.$CmsVideoPayload<ExtArgs>[]
      updatedVideos: Prisma.$CmsVideoPayload<ExtArgs>[]
      createdBlogs: Prisma.$CmsBlogPayload<ExtArgs>[]
      updatedBlogs: Prisma.$CmsBlogPayload<ExtArgs>[]
      createdTeams: Prisma.$CmsTeamMemberPayload<ExtArgs>[]
      updatedTeams: Prisma.$CmsTeamMemberPayload<ExtArgs>[]
      createdMedia: Prisma.$CmsMediaItemPayload<ExtArgs>[]
      updatedMedia: Prisma.$CmsMediaItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.CmsRole
      region: $Enums.CmsRegion
      createdAt: Date
    }, ExtArgs["result"]["cmsUser"]>
    composites: {}
  }

  type CmsUserGetPayload<S extends boolean | null | undefined | CmsUserDefaultArgs> = $Result.GetResult<Prisma.$CmsUserPayload, S>

  type CmsUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsUserCountAggregateInputType | true
    }

  export interface CmsUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsUser'], meta: { name: 'CmsUser' } }
    /**
     * Find zero or one CmsUser that matches the filter.
     * @param {CmsUserFindUniqueArgs} args - Arguments to find a CmsUser
     * @example
     * // Get one CmsUser
     * const cmsUser = await prisma.cmsUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsUserFindUniqueArgs>(args: SelectSubset<T, CmsUserFindUniqueArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsUserFindUniqueOrThrowArgs} args - Arguments to find a CmsUser
     * @example
     * // Get one CmsUser
     * const cmsUser = await prisma.cmsUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsUserFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserFindFirstArgs} args - Arguments to find a CmsUser
     * @example
     * // Get one CmsUser
     * const cmsUser = await prisma.cmsUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsUserFindFirstArgs>(args?: SelectSubset<T, CmsUserFindFirstArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserFindFirstOrThrowArgs} args - Arguments to find a CmsUser
     * @example
     * // Get one CmsUser
     * const cmsUser = await prisma.cmsUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsUserFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsUsers
     * const cmsUsers = await prisma.cmsUser.findMany()
     * 
     * // Get first 10 CmsUsers
     * const cmsUsers = await prisma.cmsUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsUserWithIdOnly = await prisma.cmsUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsUserFindManyArgs>(args?: SelectSubset<T, CmsUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsUser.
     * @param {CmsUserCreateArgs} args - Arguments to create a CmsUser.
     * @example
     * // Create one CmsUser
     * const CmsUser = await prisma.cmsUser.create({
     *   data: {
     *     // ... data to create a CmsUser
     *   }
     * })
     * 
     */
    create<T extends CmsUserCreateArgs>(args: SelectSubset<T, CmsUserCreateArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsUsers.
     * @param {CmsUserCreateManyArgs} args - Arguments to create many CmsUsers.
     * @example
     * // Create many CmsUsers
     * const cmsUser = await prisma.cmsUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsUserCreateManyArgs>(args?: SelectSubset<T, CmsUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsUsers and returns the data saved in the database.
     * @param {CmsUserCreateManyAndReturnArgs} args - Arguments to create many CmsUsers.
     * @example
     * // Create many CmsUsers
     * const cmsUser = await prisma.cmsUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsUsers and only return the `id`
     * const cmsUserWithIdOnly = await prisma.cmsUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsUserCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsUser.
     * @param {CmsUserDeleteArgs} args - Arguments to delete one CmsUser.
     * @example
     * // Delete one CmsUser
     * const CmsUser = await prisma.cmsUser.delete({
     *   where: {
     *     // ... filter to delete one CmsUser
     *   }
     * })
     * 
     */
    delete<T extends CmsUserDeleteArgs>(args: SelectSubset<T, CmsUserDeleteArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsUser.
     * @param {CmsUserUpdateArgs} args - Arguments to update one CmsUser.
     * @example
     * // Update one CmsUser
     * const cmsUser = await prisma.cmsUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsUserUpdateArgs>(args: SelectSubset<T, CmsUserUpdateArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsUsers.
     * @param {CmsUserDeleteManyArgs} args - Arguments to filter CmsUsers to delete.
     * @example
     * // Delete a few CmsUsers
     * const { count } = await prisma.cmsUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsUserDeleteManyArgs>(args?: SelectSubset<T, CmsUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsUsers
     * const cmsUser = await prisma.cmsUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsUserUpdateManyArgs>(args: SelectSubset<T, CmsUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsUsers and returns the data updated in the database.
     * @param {CmsUserUpdateManyAndReturnArgs} args - Arguments to update many CmsUsers.
     * @example
     * // Update many CmsUsers
     * const cmsUser = await prisma.cmsUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsUsers and only return the `id`
     * const cmsUserWithIdOnly = await prisma.cmsUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsUserUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsUser.
     * @param {CmsUserUpsertArgs} args - Arguments to update or create a CmsUser.
     * @example
     * // Update or create a CmsUser
     * const cmsUser = await prisma.cmsUser.upsert({
     *   create: {
     *     // ... data to create a CmsUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsUser we want to update
     *   }
     * })
     */
    upsert<T extends CmsUserUpsertArgs>(args: SelectSubset<T, CmsUserUpsertArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserCountArgs} args - Arguments to filter CmsUsers to count.
     * @example
     * // Count the number of CmsUsers
     * const count = await prisma.cmsUser.count({
     *   where: {
     *     // ... the filter for the CmsUsers we want to count
     *   }
     * })
    **/
    count<T extends CmsUserCountArgs>(
      args?: Subset<T, CmsUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsUserAggregateArgs>(args: Subset<T, CmsUserAggregateArgs>): Prisma.PrismaPromise<GetCmsUserAggregateType<T>>

    /**
     * Group by CmsUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsUserGroupByArgs['orderBy'] }
        : { orderBy?: CmsUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsUser model
   */
  readonly fields: CmsUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends CmsUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdContent<T extends CmsUser$createdContentArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedContent<T extends CmsUser$updatedContentArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdAnnouncements<T extends CmsUser$createdAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedAnnouncements<T extends CmsUser$updatedAnnouncementsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedAnnouncementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdNews<T extends CmsUser$createdNewsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdNewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedNews<T extends CmsUser$updatedNewsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedNewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBriefings<T extends CmsUser$createdBriefingsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdBriefingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedBriefings<T extends CmsUser$updatedBriefingsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedBriefingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdVideos<T extends CmsUser$createdVideosArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedVideos<T extends CmsUser$updatedVideosArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBlogs<T extends CmsUser$createdBlogsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdBlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedBlogs<T extends CmsUser$updatedBlogsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedBlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTeams<T extends CmsUser$createdTeamsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedTeams<T extends CmsUser$updatedTeamsArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedTeamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMedia<T extends CmsUser$createdMediaArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$createdMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedMedia<T extends CmsUser$updatedMediaArgs<ExtArgs> = {}>(args?: Subset<T, CmsUser$updatedMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsUser model
   */
  interface CmsUserFieldRefs {
    readonly id: FieldRef<"CmsUser", 'Int'>
    readonly name: FieldRef<"CmsUser", 'String'>
    readonly email: FieldRef<"CmsUser", 'String'>
    readonly passwordHash: FieldRef<"CmsUser", 'String'>
    readonly role: FieldRef<"CmsUser", 'CmsRole'>
    readonly region: FieldRef<"CmsUser", 'CmsRegion'>
    readonly createdAt: FieldRef<"CmsUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsUser findUnique
   */
  export type CmsUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter, which CmsUser to fetch.
     */
    where: CmsUserWhereUniqueInput
  }

  /**
   * CmsUser findUniqueOrThrow
   */
  export type CmsUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter, which CmsUser to fetch.
     */
    where: CmsUserWhereUniqueInput
  }

  /**
   * CmsUser findFirst
   */
  export type CmsUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter, which CmsUser to fetch.
     */
    where?: CmsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsUsers to fetch.
     */
    orderBy?: CmsUserOrderByWithRelationInput | CmsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsUsers.
     */
    cursor?: CmsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsUsers.
     */
    distinct?: CmsUserScalarFieldEnum | CmsUserScalarFieldEnum[]
  }

  /**
   * CmsUser findFirstOrThrow
   */
  export type CmsUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter, which CmsUser to fetch.
     */
    where?: CmsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsUsers to fetch.
     */
    orderBy?: CmsUserOrderByWithRelationInput | CmsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsUsers.
     */
    cursor?: CmsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsUsers.
     */
    distinct?: CmsUserScalarFieldEnum | CmsUserScalarFieldEnum[]
  }

  /**
   * CmsUser findMany
   */
  export type CmsUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter, which CmsUsers to fetch.
     */
    where?: CmsUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsUsers to fetch.
     */
    orderBy?: CmsUserOrderByWithRelationInput | CmsUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsUsers.
     */
    cursor?: CmsUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsUsers.
     */
    distinct?: CmsUserScalarFieldEnum | CmsUserScalarFieldEnum[]
  }

  /**
   * CmsUser create
   */
  export type CmsUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsUser.
     */
    data: XOR<CmsUserCreateInput, CmsUserUncheckedCreateInput>
  }

  /**
   * CmsUser createMany
   */
  export type CmsUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsUsers.
     */
    data: CmsUserCreateManyInput | CmsUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsUser createManyAndReturn
   */
  export type CmsUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * The data used to create many CmsUsers.
     */
    data: CmsUserCreateManyInput | CmsUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsUser update
   */
  export type CmsUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsUser.
     */
    data: XOR<CmsUserUpdateInput, CmsUserUncheckedUpdateInput>
    /**
     * Choose, which CmsUser to update.
     */
    where: CmsUserWhereUniqueInput
  }

  /**
   * CmsUser updateMany
   */
  export type CmsUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsUsers.
     */
    data: XOR<CmsUserUpdateManyMutationInput, CmsUserUncheckedUpdateManyInput>
    /**
     * Filter which CmsUsers to update
     */
    where?: CmsUserWhereInput
    /**
     * Limit how many CmsUsers to update.
     */
    limit?: number
  }

  /**
   * CmsUser updateManyAndReturn
   */
  export type CmsUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * The data used to update CmsUsers.
     */
    data: XOR<CmsUserUpdateManyMutationInput, CmsUserUncheckedUpdateManyInput>
    /**
     * Filter which CmsUsers to update
     */
    where?: CmsUserWhereInput
    /**
     * Limit how many CmsUsers to update.
     */
    limit?: number
  }

  /**
   * CmsUser upsert
   */
  export type CmsUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsUser to update in case it exists.
     */
    where: CmsUserWhereUniqueInput
    /**
     * In case the CmsUser found by the `where` argument doesn't exist, create a new CmsUser with this data.
     */
    create: XOR<CmsUserCreateInput, CmsUserUncheckedCreateInput>
    /**
     * In case the CmsUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsUserUpdateInput, CmsUserUncheckedUpdateInput>
  }

  /**
   * CmsUser delete
   */
  export type CmsUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
    /**
     * Filter which CmsUser to delete.
     */
    where: CmsUserWhereUniqueInput
  }

  /**
   * CmsUser deleteMany
   */
  export type CmsUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsUsers to delete
     */
    where?: CmsUserWhereInput
    /**
     * Limit how many CmsUsers to delete.
     */
    limit?: number
  }

  /**
   * CmsUser.sessions
   */
  export type CmsUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    where?: CmsSessionWhereInput
    orderBy?: CmsSessionOrderByWithRelationInput | CmsSessionOrderByWithRelationInput[]
    cursor?: CmsSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsSessionScalarFieldEnum | CmsSessionScalarFieldEnum[]
  }

  /**
   * CmsUser.createdContent
   */
  export type CmsUser$createdContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    where?: CmsContentWhereInput
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    cursor?: CmsContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsContentScalarFieldEnum | CmsContentScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedContent
   */
  export type CmsUser$updatedContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    where?: CmsContentWhereInput
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    cursor?: CmsContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsContentScalarFieldEnum | CmsContentScalarFieldEnum[]
  }

  /**
   * CmsUser.createdAnnouncements
   */
  export type CmsUser$createdAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    where?: CmsAnnouncementWhereInput
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    cursor?: CmsAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsAnnouncementScalarFieldEnum | CmsAnnouncementScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedAnnouncements
   */
  export type CmsUser$updatedAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    where?: CmsAnnouncementWhereInput
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    cursor?: CmsAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsAnnouncementScalarFieldEnum | CmsAnnouncementScalarFieldEnum[]
  }

  /**
   * CmsUser.createdNews
   */
  export type CmsUser$createdNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    where?: CmsNewsWhereInput
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    cursor?: CmsNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsNewsScalarFieldEnum | CmsNewsScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedNews
   */
  export type CmsUser$updatedNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    where?: CmsNewsWhereInput
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    cursor?: CmsNewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsNewsScalarFieldEnum | CmsNewsScalarFieldEnum[]
  }

  /**
   * CmsUser.createdBriefings
   */
  export type CmsUser$createdBriefingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    where?: CmsPressBreifingWhereInput
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    cursor?: CmsPressBreifingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsPressBreifingScalarFieldEnum | CmsPressBreifingScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedBriefings
   */
  export type CmsUser$updatedBriefingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    where?: CmsPressBreifingWhereInput
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    cursor?: CmsPressBreifingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsPressBreifingScalarFieldEnum | CmsPressBreifingScalarFieldEnum[]
  }

  /**
   * CmsUser.createdVideos
   */
  export type CmsUser$createdVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    where?: CmsVideoWhereInput
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    cursor?: CmsVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsVideoScalarFieldEnum | CmsVideoScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedVideos
   */
  export type CmsUser$updatedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    where?: CmsVideoWhereInput
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    cursor?: CmsVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsVideoScalarFieldEnum | CmsVideoScalarFieldEnum[]
  }

  /**
   * CmsUser.createdBlogs
   */
  export type CmsUser$createdBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    cursor?: CmsBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedBlogs
   */
  export type CmsUser$updatedBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    cursor?: CmsBlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsUser.createdTeams
   */
  export type CmsUser$createdTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    where?: CmsTeamMemberWhereInput
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    cursor?: CmsTeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsTeamMemberScalarFieldEnum | CmsTeamMemberScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedTeams
   */
  export type CmsUser$updatedTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    where?: CmsTeamMemberWhereInput
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    cursor?: CmsTeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsTeamMemberScalarFieldEnum | CmsTeamMemberScalarFieldEnum[]
  }

  /**
   * CmsUser.createdMedia
   */
  export type CmsUser$createdMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    where?: CmsMediaItemWhereInput
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    cursor?: CmsMediaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsMediaItemScalarFieldEnum | CmsMediaItemScalarFieldEnum[]
  }

  /**
   * CmsUser.updatedMedia
   */
  export type CmsUser$updatedMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    where?: CmsMediaItemWhereInput
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    cursor?: CmsMediaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmsMediaItemScalarFieldEnum | CmsMediaItemScalarFieldEnum[]
  }

  /**
   * CmsUser without action
   */
  export type CmsUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsUser
     */
    select?: CmsUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsUser
     */
    omit?: CmsUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsUserInclude<ExtArgs> | null
  }


  /**
   * Model CmsSession
   */

  export type AggregateCmsSession = {
    _count: CmsSessionCountAggregateOutputType | null
    _avg: CmsSessionAvgAggregateOutputType | null
    _sum: CmsSessionSumAggregateOutputType | null
    _min: CmsSessionMinAggregateOutputType | null
    _max: CmsSessionMaxAggregateOutputType | null
  }

  export type CmsSessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CmsSessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CmsSessionMinAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CmsSessionMaxAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CmsSessionCountAggregateOutputType = {
    id: number
    tokenHash: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type CmsSessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CmsSessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CmsSessionMinAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CmsSessionMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CmsSessionCountAggregateInputType = {
    id?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type CmsSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSession to aggregate.
     */
    where?: CmsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSessions to fetch.
     */
    orderBy?: CmsSessionOrderByWithRelationInput | CmsSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsSessions
    **/
    _count?: true | CmsSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsSessionMaxAggregateInputType
  }

  export type GetCmsSessionAggregateType<T extends CmsSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsSession[P]>
      : GetScalarType<T[P], AggregateCmsSession[P]>
  }




  export type CmsSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsSessionWhereInput
    orderBy?: CmsSessionOrderByWithAggregationInput | CmsSessionOrderByWithAggregationInput[]
    by: CmsSessionScalarFieldEnum[] | CmsSessionScalarFieldEnum
    having?: CmsSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsSessionCountAggregateInputType | true
    _avg?: CmsSessionAvgAggregateInputType
    _sum?: CmsSessionSumAggregateInputType
    _min?: CmsSessionMinAggregateInputType
    _max?: CmsSessionMaxAggregateInputType
  }

  export type CmsSessionGroupByOutputType = {
    id: number
    tokenHash: string
    userId: number
    expiresAt: Date
    createdAt: Date
    _count: CmsSessionCountAggregateOutputType | null
    _avg: CmsSessionAvgAggregateOutputType | null
    _sum: CmsSessionSumAggregateOutputType | null
    _min: CmsSessionMinAggregateOutputType | null
    _max: CmsSessionMaxAggregateOutputType | null
  }

  type GetCmsSessionGroupByPayload<T extends CmsSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CmsSessionGroupByOutputType[P]>
        }
      >
    >


  export type CmsSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSession"]>

  export type CmsSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSession"]>

  export type CmsSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsSession"]>

  export type CmsSessionSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type CmsSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["cmsSession"]>
  export type CmsSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsSession"
    objects: {
      user: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenHash: string
      userId: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["cmsSession"]>
    composites: {}
  }

  type CmsSessionGetPayload<S extends boolean | null | undefined | CmsSessionDefaultArgs> = $Result.GetResult<Prisma.$CmsSessionPayload, S>

  type CmsSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsSessionCountAggregateInputType | true
    }

  export interface CmsSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsSession'], meta: { name: 'CmsSession' } }
    /**
     * Find zero or one CmsSession that matches the filter.
     * @param {CmsSessionFindUniqueArgs} args - Arguments to find a CmsSession
     * @example
     * // Get one CmsSession
     * const cmsSession = await prisma.cmsSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsSessionFindUniqueArgs>(args: SelectSubset<T, CmsSessionFindUniqueArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsSessionFindUniqueOrThrowArgs} args - Arguments to find a CmsSession
     * @example
     * // Get one CmsSession
     * const cmsSession = await prisma.cmsSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionFindFirstArgs} args - Arguments to find a CmsSession
     * @example
     * // Get one CmsSession
     * const cmsSession = await prisma.cmsSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsSessionFindFirstArgs>(args?: SelectSubset<T, CmsSessionFindFirstArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionFindFirstOrThrowArgs} args - Arguments to find a CmsSession
     * @example
     * // Get one CmsSession
     * const cmsSession = await prisma.cmsSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsSessions
     * const cmsSessions = await prisma.cmsSession.findMany()
     * 
     * // Get first 10 CmsSessions
     * const cmsSessions = await prisma.cmsSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsSessionWithIdOnly = await prisma.cmsSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsSessionFindManyArgs>(args?: SelectSubset<T, CmsSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsSession.
     * @param {CmsSessionCreateArgs} args - Arguments to create a CmsSession.
     * @example
     * // Create one CmsSession
     * const CmsSession = await prisma.cmsSession.create({
     *   data: {
     *     // ... data to create a CmsSession
     *   }
     * })
     * 
     */
    create<T extends CmsSessionCreateArgs>(args: SelectSubset<T, CmsSessionCreateArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsSessions.
     * @param {CmsSessionCreateManyArgs} args - Arguments to create many CmsSessions.
     * @example
     * // Create many CmsSessions
     * const cmsSession = await prisma.cmsSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsSessionCreateManyArgs>(args?: SelectSubset<T, CmsSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsSessions and returns the data saved in the database.
     * @param {CmsSessionCreateManyAndReturnArgs} args - Arguments to create many CmsSessions.
     * @example
     * // Create many CmsSessions
     * const cmsSession = await prisma.cmsSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsSessions and only return the `id`
     * const cmsSessionWithIdOnly = await prisma.cmsSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsSession.
     * @param {CmsSessionDeleteArgs} args - Arguments to delete one CmsSession.
     * @example
     * // Delete one CmsSession
     * const CmsSession = await prisma.cmsSession.delete({
     *   where: {
     *     // ... filter to delete one CmsSession
     *   }
     * })
     * 
     */
    delete<T extends CmsSessionDeleteArgs>(args: SelectSubset<T, CmsSessionDeleteArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsSession.
     * @param {CmsSessionUpdateArgs} args - Arguments to update one CmsSession.
     * @example
     * // Update one CmsSession
     * const cmsSession = await prisma.cmsSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsSessionUpdateArgs>(args: SelectSubset<T, CmsSessionUpdateArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsSessions.
     * @param {CmsSessionDeleteManyArgs} args - Arguments to filter CmsSessions to delete.
     * @example
     * // Delete a few CmsSessions
     * const { count } = await prisma.cmsSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsSessionDeleteManyArgs>(args?: SelectSubset<T, CmsSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsSessions
     * const cmsSession = await prisma.cmsSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsSessionUpdateManyArgs>(args: SelectSubset<T, CmsSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsSessions and returns the data updated in the database.
     * @param {CmsSessionUpdateManyAndReturnArgs} args - Arguments to update many CmsSessions.
     * @example
     * // Update many CmsSessions
     * const cmsSession = await prisma.cmsSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsSessions and only return the `id`
     * const cmsSessionWithIdOnly = await prisma.cmsSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsSession.
     * @param {CmsSessionUpsertArgs} args - Arguments to update or create a CmsSession.
     * @example
     * // Update or create a CmsSession
     * const cmsSession = await prisma.cmsSession.upsert({
     *   create: {
     *     // ... data to create a CmsSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsSession we want to update
     *   }
     * })
     */
    upsert<T extends CmsSessionUpsertArgs>(args: SelectSubset<T, CmsSessionUpsertArgs<ExtArgs>>): Prisma__CmsSessionClient<$Result.GetResult<Prisma.$CmsSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionCountArgs} args - Arguments to filter CmsSessions to count.
     * @example
     * // Count the number of CmsSessions
     * const count = await prisma.cmsSession.count({
     *   where: {
     *     // ... the filter for the CmsSessions we want to count
     *   }
     * })
    **/
    count<T extends CmsSessionCountArgs>(
      args?: Subset<T, CmsSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsSessionAggregateArgs>(args: Subset<T, CmsSessionAggregateArgs>): Prisma.PrismaPromise<GetCmsSessionAggregateType<T>>

    /**
     * Group by CmsSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsSessionGroupByArgs['orderBy'] }
        : { orderBy?: CmsSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsSession model
   */
  readonly fields: CmsSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsSession model
   */
  interface CmsSessionFieldRefs {
    readonly id: FieldRef<"CmsSession", 'Int'>
    readonly tokenHash: FieldRef<"CmsSession", 'String'>
    readonly userId: FieldRef<"CmsSession", 'Int'>
    readonly expiresAt: FieldRef<"CmsSession", 'DateTime'>
    readonly createdAt: FieldRef<"CmsSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsSession findUnique
   */
  export type CmsSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSession to fetch.
     */
    where: CmsSessionWhereUniqueInput
  }

  /**
   * CmsSession findUniqueOrThrow
   */
  export type CmsSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSession to fetch.
     */
    where: CmsSessionWhereUniqueInput
  }

  /**
   * CmsSession findFirst
   */
  export type CmsSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSession to fetch.
     */
    where?: CmsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSessions to fetch.
     */
    orderBy?: CmsSessionOrderByWithRelationInput | CmsSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSessions.
     */
    cursor?: CmsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSessions.
     */
    distinct?: CmsSessionScalarFieldEnum | CmsSessionScalarFieldEnum[]
  }

  /**
   * CmsSession findFirstOrThrow
   */
  export type CmsSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSession to fetch.
     */
    where?: CmsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSessions to fetch.
     */
    orderBy?: CmsSessionOrderByWithRelationInput | CmsSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsSessions.
     */
    cursor?: CmsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSessions.
     */
    distinct?: CmsSessionScalarFieldEnum | CmsSessionScalarFieldEnum[]
  }

  /**
   * CmsSession findMany
   */
  export type CmsSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter, which CmsSessions to fetch.
     */
    where?: CmsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsSessions to fetch.
     */
    orderBy?: CmsSessionOrderByWithRelationInput | CmsSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsSessions.
     */
    cursor?: CmsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsSessions.
     */
    distinct?: CmsSessionScalarFieldEnum | CmsSessionScalarFieldEnum[]
  }

  /**
   * CmsSession create
   */
  export type CmsSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsSession.
     */
    data: XOR<CmsSessionCreateInput, CmsSessionUncheckedCreateInput>
  }

  /**
   * CmsSession createMany
   */
  export type CmsSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsSessions.
     */
    data: CmsSessionCreateManyInput | CmsSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsSession createManyAndReturn
   */
  export type CmsSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * The data used to create many CmsSessions.
     */
    data: CmsSessionCreateManyInput | CmsSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSession update
   */
  export type CmsSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsSession.
     */
    data: XOR<CmsSessionUpdateInput, CmsSessionUncheckedUpdateInput>
    /**
     * Choose, which CmsSession to update.
     */
    where: CmsSessionWhereUniqueInput
  }

  /**
   * CmsSession updateMany
   */
  export type CmsSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsSessions.
     */
    data: XOR<CmsSessionUpdateManyMutationInput, CmsSessionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSessions to update
     */
    where?: CmsSessionWhereInput
    /**
     * Limit how many CmsSessions to update.
     */
    limit?: number
  }

  /**
   * CmsSession updateManyAndReturn
   */
  export type CmsSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * The data used to update CmsSessions.
     */
    data: XOR<CmsSessionUpdateManyMutationInput, CmsSessionUncheckedUpdateManyInput>
    /**
     * Filter which CmsSessions to update
     */
    where?: CmsSessionWhereInput
    /**
     * Limit how many CmsSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsSession upsert
   */
  export type CmsSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsSession to update in case it exists.
     */
    where: CmsSessionWhereUniqueInput
    /**
     * In case the CmsSession found by the `where` argument doesn't exist, create a new CmsSession with this data.
     */
    create: XOR<CmsSessionCreateInput, CmsSessionUncheckedCreateInput>
    /**
     * In case the CmsSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsSessionUpdateInput, CmsSessionUncheckedUpdateInput>
  }

  /**
   * CmsSession delete
   */
  export type CmsSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
    /**
     * Filter which CmsSession to delete.
     */
    where: CmsSessionWhereUniqueInput
  }

  /**
   * CmsSession deleteMany
   */
  export type CmsSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsSessions to delete
     */
    where?: CmsSessionWhereInput
    /**
     * Limit how many CmsSessions to delete.
     */
    limit?: number
  }

  /**
   * CmsSession without action
   */
  export type CmsSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsSession
     */
    select?: CmsSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsSession
     */
    omit?: CmsSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsSessionInclude<ExtArgs> | null
  }


  /**
   * Model CmsContent
   */

  export type AggregateCmsContent = {
    _count: CmsContentCountAggregateOutputType | null
    _avg: CmsContentAvgAggregateOutputType | null
    _sum: CmsContentSumAggregateOutputType | null
    _min: CmsContentMinAggregateOutputType | null
    _max: CmsContentMaxAggregateOutputType | null
  }

  export type CmsContentAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsContentSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsContentMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    contentType: $Enums.CmsContentType | null
    category: $Enums.CmsCategory | null
    level: $Enums.CmsLevel | null
    region: $Enums.CmsRegion | null
    body: string | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsContentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    contentType: $Enums.CmsContentType | null
    category: $Enums.CmsCategory | null
    level: $Enums.CmsLevel | null
    region: $Enums.CmsRegion | null
    body: string | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsContentCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    contentType: number
    category: number
    level: number
    region: number
    body: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsContentAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsContentSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsContentMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    contentType?: true
    category?: true
    level?: true
    region?: true
    body?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsContentMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    contentType?: true
    category?: true
    level?: true
    region?: true
    body?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsContentCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    contentType?: true
    category?: true
    level?: true
    region?: true
    body?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsContent to aggregate.
     */
    where?: CmsContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsContents to fetch.
     */
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsContents
    **/
    _count?: true | CmsContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsContentMaxAggregateInputType
  }

  export type GetCmsContentAggregateType<T extends CmsContentAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsContent[P]>
      : GetScalarType<T[P], AggregateCmsContent[P]>
  }




  export type CmsContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsContentWhereInput
    orderBy?: CmsContentOrderByWithAggregationInput | CmsContentOrderByWithAggregationInput[]
    by: CmsContentScalarFieldEnum[] | CmsContentScalarFieldEnum
    having?: CmsContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsContentCountAggregateInputType | true
    _avg?: CmsContentAvgAggregateInputType
    _sum?: CmsContentSumAggregateInputType
    _min?: CmsContentMinAggregateInputType
    _max?: CmsContentMaxAggregateInputType
  }

  export type CmsContentGroupByOutputType = {
    id: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region: $Enums.CmsRegion | null
    body: string
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsContentCountAggregateOutputType | null
    _avg: CmsContentAvgAggregateOutputType | null
    _sum: CmsContentSumAggregateOutputType | null
    _min: CmsContentMinAggregateOutputType | null
    _max: CmsContentMaxAggregateOutputType | null
  }

  type GetCmsContentGroupByPayload<T extends CmsContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsContentGroupByOutputType[P]>
            : GetScalarType<T[P], CmsContentGroupByOutputType[P]>
        }
      >
    >


  export type CmsContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    contentType?: boolean
    category?: boolean
    level?: boolean
    region?: boolean
    body?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsContent"]>

  export type CmsContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    contentType?: boolean
    category?: boolean
    level?: boolean
    region?: boolean
    body?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsContent"]>

  export type CmsContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    contentType?: boolean
    category?: boolean
    level?: boolean
    region?: boolean
    body?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsContent"]>

  export type CmsContentSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    contentType?: boolean
    category?: boolean
    level?: boolean
    region?: boolean
    body?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "contentType" | "category" | "level" | "region" | "body" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsContent"]>
  export type CmsContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsContent"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      contentType: $Enums.CmsContentType
      category: $Enums.CmsCategory
      level: $Enums.CmsLevel
      region: $Enums.CmsRegion | null
      body: string
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsContent"]>
    composites: {}
  }

  type CmsContentGetPayload<S extends boolean | null | undefined | CmsContentDefaultArgs> = $Result.GetResult<Prisma.$CmsContentPayload, S>

  type CmsContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsContentCountAggregateInputType | true
    }

  export interface CmsContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsContent'], meta: { name: 'CmsContent' } }
    /**
     * Find zero or one CmsContent that matches the filter.
     * @param {CmsContentFindUniqueArgs} args - Arguments to find a CmsContent
     * @example
     * // Get one CmsContent
     * const cmsContent = await prisma.cmsContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsContentFindUniqueArgs>(args: SelectSubset<T, CmsContentFindUniqueArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsContentFindUniqueOrThrowArgs} args - Arguments to find a CmsContent
     * @example
     * // Get one CmsContent
     * const cmsContent = await prisma.cmsContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsContentFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentFindFirstArgs} args - Arguments to find a CmsContent
     * @example
     * // Get one CmsContent
     * const cmsContent = await prisma.cmsContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsContentFindFirstArgs>(args?: SelectSubset<T, CmsContentFindFirstArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentFindFirstOrThrowArgs} args - Arguments to find a CmsContent
     * @example
     * // Get one CmsContent
     * const cmsContent = await prisma.cmsContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsContentFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsContents
     * const cmsContents = await prisma.cmsContent.findMany()
     * 
     * // Get first 10 CmsContents
     * const cmsContents = await prisma.cmsContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsContentWithIdOnly = await prisma.cmsContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsContentFindManyArgs>(args?: SelectSubset<T, CmsContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsContent.
     * @param {CmsContentCreateArgs} args - Arguments to create a CmsContent.
     * @example
     * // Create one CmsContent
     * const CmsContent = await prisma.cmsContent.create({
     *   data: {
     *     // ... data to create a CmsContent
     *   }
     * })
     * 
     */
    create<T extends CmsContentCreateArgs>(args: SelectSubset<T, CmsContentCreateArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsContents.
     * @param {CmsContentCreateManyArgs} args - Arguments to create many CmsContents.
     * @example
     * // Create many CmsContents
     * const cmsContent = await prisma.cmsContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsContentCreateManyArgs>(args?: SelectSubset<T, CmsContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsContents and returns the data saved in the database.
     * @param {CmsContentCreateManyAndReturnArgs} args - Arguments to create many CmsContents.
     * @example
     * // Create many CmsContents
     * const cmsContent = await prisma.cmsContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsContents and only return the `id`
     * const cmsContentWithIdOnly = await prisma.cmsContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsContentCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsContent.
     * @param {CmsContentDeleteArgs} args - Arguments to delete one CmsContent.
     * @example
     * // Delete one CmsContent
     * const CmsContent = await prisma.cmsContent.delete({
     *   where: {
     *     // ... filter to delete one CmsContent
     *   }
     * })
     * 
     */
    delete<T extends CmsContentDeleteArgs>(args: SelectSubset<T, CmsContentDeleteArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsContent.
     * @param {CmsContentUpdateArgs} args - Arguments to update one CmsContent.
     * @example
     * // Update one CmsContent
     * const cmsContent = await prisma.cmsContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsContentUpdateArgs>(args: SelectSubset<T, CmsContentUpdateArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsContents.
     * @param {CmsContentDeleteManyArgs} args - Arguments to filter CmsContents to delete.
     * @example
     * // Delete a few CmsContents
     * const { count } = await prisma.cmsContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsContentDeleteManyArgs>(args?: SelectSubset<T, CmsContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsContents
     * const cmsContent = await prisma.cmsContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsContentUpdateManyArgs>(args: SelectSubset<T, CmsContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsContents and returns the data updated in the database.
     * @param {CmsContentUpdateManyAndReturnArgs} args - Arguments to update many CmsContents.
     * @example
     * // Update many CmsContents
     * const cmsContent = await prisma.cmsContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsContents and only return the `id`
     * const cmsContentWithIdOnly = await prisma.cmsContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsContentUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsContent.
     * @param {CmsContentUpsertArgs} args - Arguments to update or create a CmsContent.
     * @example
     * // Update or create a CmsContent
     * const cmsContent = await prisma.cmsContent.upsert({
     *   create: {
     *     // ... data to create a CmsContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsContent we want to update
     *   }
     * })
     */
    upsert<T extends CmsContentUpsertArgs>(args: SelectSubset<T, CmsContentUpsertArgs<ExtArgs>>): Prisma__CmsContentClient<$Result.GetResult<Prisma.$CmsContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentCountArgs} args - Arguments to filter CmsContents to count.
     * @example
     * // Count the number of CmsContents
     * const count = await prisma.cmsContent.count({
     *   where: {
     *     // ... the filter for the CmsContents we want to count
     *   }
     * })
    **/
    count<T extends CmsContentCountArgs>(
      args?: Subset<T, CmsContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsContentAggregateArgs>(args: Subset<T, CmsContentAggregateArgs>): Prisma.PrismaPromise<GetCmsContentAggregateType<T>>

    /**
     * Group by CmsContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsContentGroupByArgs['orderBy'] }
        : { orderBy?: CmsContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsContent model
   */
  readonly fields: CmsContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsContent model
   */
  interface CmsContentFieldRefs {
    readonly id: FieldRef<"CmsContent", 'Int'>
    readonly title: FieldRef<"CmsContent", 'String'>
    readonly slug: FieldRef<"CmsContent", 'String'>
    readonly contentType: FieldRef<"CmsContent", 'CmsContentType'>
    readonly category: FieldRef<"CmsContent", 'CmsCategory'>
    readonly level: FieldRef<"CmsContent", 'CmsLevel'>
    readonly region: FieldRef<"CmsContent", 'CmsRegion'>
    readonly body: FieldRef<"CmsContent", 'String'>
    readonly createdById: FieldRef<"CmsContent", 'Int'>
    readonly updatedById: FieldRef<"CmsContent", 'Int'>
    readonly createdAt: FieldRef<"CmsContent", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsContent findUnique
   */
  export type CmsContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter, which CmsContent to fetch.
     */
    where: CmsContentWhereUniqueInput
  }

  /**
   * CmsContent findUniqueOrThrow
   */
  export type CmsContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter, which CmsContent to fetch.
     */
    where: CmsContentWhereUniqueInput
  }

  /**
   * CmsContent findFirst
   */
  export type CmsContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter, which CmsContent to fetch.
     */
    where?: CmsContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsContents to fetch.
     */
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsContents.
     */
    cursor?: CmsContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsContents.
     */
    distinct?: CmsContentScalarFieldEnum | CmsContentScalarFieldEnum[]
  }

  /**
   * CmsContent findFirstOrThrow
   */
  export type CmsContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter, which CmsContent to fetch.
     */
    where?: CmsContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsContents to fetch.
     */
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsContents.
     */
    cursor?: CmsContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsContents.
     */
    distinct?: CmsContentScalarFieldEnum | CmsContentScalarFieldEnum[]
  }

  /**
   * CmsContent findMany
   */
  export type CmsContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter, which CmsContents to fetch.
     */
    where?: CmsContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsContents to fetch.
     */
    orderBy?: CmsContentOrderByWithRelationInput | CmsContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsContents.
     */
    cursor?: CmsContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsContents.
     */
    distinct?: CmsContentScalarFieldEnum | CmsContentScalarFieldEnum[]
  }

  /**
   * CmsContent create
   */
  export type CmsContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsContent.
     */
    data: XOR<CmsContentCreateInput, CmsContentUncheckedCreateInput>
  }

  /**
   * CmsContent createMany
   */
  export type CmsContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsContents.
     */
    data: CmsContentCreateManyInput | CmsContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsContent createManyAndReturn
   */
  export type CmsContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * The data used to create many CmsContents.
     */
    data: CmsContentCreateManyInput | CmsContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsContent update
   */
  export type CmsContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsContent.
     */
    data: XOR<CmsContentUpdateInput, CmsContentUncheckedUpdateInput>
    /**
     * Choose, which CmsContent to update.
     */
    where: CmsContentWhereUniqueInput
  }

  /**
   * CmsContent updateMany
   */
  export type CmsContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsContents.
     */
    data: XOR<CmsContentUpdateManyMutationInput, CmsContentUncheckedUpdateManyInput>
    /**
     * Filter which CmsContents to update
     */
    where?: CmsContentWhereInput
    /**
     * Limit how many CmsContents to update.
     */
    limit?: number
  }

  /**
   * CmsContent updateManyAndReturn
   */
  export type CmsContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * The data used to update CmsContents.
     */
    data: XOR<CmsContentUpdateManyMutationInput, CmsContentUncheckedUpdateManyInput>
    /**
     * Filter which CmsContents to update
     */
    where?: CmsContentWhereInput
    /**
     * Limit how many CmsContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsContent upsert
   */
  export type CmsContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsContent to update in case it exists.
     */
    where: CmsContentWhereUniqueInput
    /**
     * In case the CmsContent found by the `where` argument doesn't exist, create a new CmsContent with this data.
     */
    create: XOR<CmsContentCreateInput, CmsContentUncheckedCreateInput>
    /**
     * In case the CmsContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsContentUpdateInput, CmsContentUncheckedUpdateInput>
  }

  /**
   * CmsContent delete
   */
  export type CmsContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
    /**
     * Filter which CmsContent to delete.
     */
    where: CmsContentWhereUniqueInput
  }

  /**
   * CmsContent deleteMany
   */
  export type CmsContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsContents to delete
     */
    where?: CmsContentWhereInput
    /**
     * Limit how many CmsContents to delete.
     */
    limit?: number
  }

  /**
   * CmsContent without action
   */
  export type CmsContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsContent
     */
    select?: CmsContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsContent
     */
    omit?: CmsContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsContentInclude<ExtArgs> | null
  }


  /**
   * Model CmsAnnouncement
   */

  export type AggregateCmsAnnouncement = {
    _count: CmsAnnouncementCountAggregateOutputType | null
    _avg: CmsAnnouncementAvgAggregateOutputType | null
    _sum: CmsAnnouncementSumAggregateOutputType | null
    _min: CmsAnnouncementMinAggregateOutputType | null
    _max: CmsAnnouncementMaxAggregateOutputType | null
  }

  export type CmsAnnouncementAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsAnnouncementSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsAnnouncementMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAnnouncementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsAnnouncementCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    richContent: number
    coverImage: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsAnnouncementAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsAnnouncementSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsAnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsAnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAnnouncement to aggregate.
     */
    where?: CmsAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAnnouncements to fetch.
     */
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsAnnouncements
    **/
    _count?: true | CmsAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsAnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsAnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsAnnouncementMaxAggregateInputType
  }

  export type GetCmsAnnouncementAggregateType<T extends CmsAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsAnnouncement[P]>
      : GetScalarType<T[P], AggregateCmsAnnouncement[P]>
  }




  export type CmsAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsAnnouncementWhereInput
    orderBy?: CmsAnnouncementOrderByWithAggregationInput | CmsAnnouncementOrderByWithAggregationInput[]
    by: CmsAnnouncementScalarFieldEnum[] | CmsAnnouncementScalarFieldEnum
    having?: CmsAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsAnnouncementCountAggregateInputType | true
    _avg?: CmsAnnouncementAvgAggregateInputType
    _sum?: CmsAnnouncementSumAggregateInputType
    _min?: CmsAnnouncementMinAggregateInputType
    _max?: CmsAnnouncementMaxAggregateInputType
  }

  export type CmsAnnouncementGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage: string | null
    region: $Enums.CmsRegion
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsAnnouncementCountAggregateOutputType | null
    _avg: CmsAnnouncementAvgAggregateOutputType | null
    _sum: CmsAnnouncementSumAggregateOutputType | null
    _min: CmsAnnouncementMinAggregateOutputType | null
    _max: CmsAnnouncementMaxAggregateOutputType | null
  }

  type GetCmsAnnouncementGroupByPayload<T extends CmsAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], CmsAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type CmsAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAnnouncement"]>

  export type CmsAnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAnnouncement"]>

  export type CmsAnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsAnnouncement"]>

  export type CmsAnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsAnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "richContent" | "coverImage" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsAnnouncement"]>
  export type CmsAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsAnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsAnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsAnnouncement"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      richContent: string
      coverImage: string | null
      region: $Enums.CmsRegion
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsAnnouncement"]>
    composites: {}
  }

  type CmsAnnouncementGetPayload<S extends boolean | null | undefined | CmsAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$CmsAnnouncementPayload, S>

  type CmsAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsAnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsAnnouncementCountAggregateInputType | true
    }

  export interface CmsAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsAnnouncement'], meta: { name: 'CmsAnnouncement' } }
    /**
     * Find zero or one CmsAnnouncement that matches the filter.
     * @param {CmsAnnouncementFindUniqueArgs} args - Arguments to find a CmsAnnouncement
     * @example
     * // Get one CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsAnnouncementFindUniqueArgs>(args: SelectSubset<T, CmsAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsAnnouncement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a CmsAnnouncement
     * @example
     * // Get one CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementFindFirstArgs} args - Arguments to find a CmsAnnouncement
     * @example
     * // Get one CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsAnnouncementFindFirstArgs>(args?: SelectSubset<T, CmsAnnouncementFindFirstArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementFindFirstOrThrowArgs} args - Arguments to find a CmsAnnouncement
     * @example
     * // Get one CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsAnnouncements
     * const cmsAnnouncements = await prisma.cmsAnnouncement.findMany()
     * 
     * // Get first 10 CmsAnnouncements
     * const cmsAnnouncements = await prisma.cmsAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsAnnouncementWithIdOnly = await prisma.cmsAnnouncement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsAnnouncementFindManyArgs>(args?: SelectSubset<T, CmsAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsAnnouncement.
     * @param {CmsAnnouncementCreateArgs} args - Arguments to create a CmsAnnouncement.
     * @example
     * // Create one CmsAnnouncement
     * const CmsAnnouncement = await prisma.cmsAnnouncement.create({
     *   data: {
     *     // ... data to create a CmsAnnouncement
     *   }
     * })
     * 
     */
    create<T extends CmsAnnouncementCreateArgs>(args: SelectSubset<T, CmsAnnouncementCreateArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsAnnouncements.
     * @param {CmsAnnouncementCreateManyArgs} args - Arguments to create many CmsAnnouncements.
     * @example
     * // Create many CmsAnnouncements
     * const cmsAnnouncement = await prisma.cmsAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsAnnouncementCreateManyArgs>(args?: SelectSubset<T, CmsAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsAnnouncements and returns the data saved in the database.
     * @param {CmsAnnouncementCreateManyAndReturnArgs} args - Arguments to create many CmsAnnouncements.
     * @example
     * // Create many CmsAnnouncements
     * const cmsAnnouncement = await prisma.cmsAnnouncement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsAnnouncements and only return the `id`
     * const cmsAnnouncementWithIdOnly = await prisma.cmsAnnouncement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsAnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsAnnouncement.
     * @param {CmsAnnouncementDeleteArgs} args - Arguments to delete one CmsAnnouncement.
     * @example
     * // Delete one CmsAnnouncement
     * const CmsAnnouncement = await prisma.cmsAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one CmsAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends CmsAnnouncementDeleteArgs>(args: SelectSubset<T, CmsAnnouncementDeleteArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsAnnouncement.
     * @param {CmsAnnouncementUpdateArgs} args - Arguments to update one CmsAnnouncement.
     * @example
     * // Update one CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsAnnouncementUpdateArgs>(args: SelectSubset<T, CmsAnnouncementUpdateArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsAnnouncements.
     * @param {CmsAnnouncementDeleteManyArgs} args - Arguments to filter CmsAnnouncements to delete.
     * @example
     * // Delete a few CmsAnnouncements
     * const { count } = await prisma.cmsAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsAnnouncementDeleteManyArgs>(args?: SelectSubset<T, CmsAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsAnnouncements
     * const cmsAnnouncement = await prisma.cmsAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsAnnouncementUpdateManyArgs>(args: SelectSubset<T, CmsAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsAnnouncements and returns the data updated in the database.
     * @param {CmsAnnouncementUpdateManyAndReturnArgs} args - Arguments to update many CmsAnnouncements.
     * @example
     * // Update many CmsAnnouncements
     * const cmsAnnouncement = await prisma.cmsAnnouncement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsAnnouncements and only return the `id`
     * const cmsAnnouncementWithIdOnly = await prisma.cmsAnnouncement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsAnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsAnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsAnnouncement.
     * @param {CmsAnnouncementUpsertArgs} args - Arguments to update or create a CmsAnnouncement.
     * @example
     * // Update or create a CmsAnnouncement
     * const cmsAnnouncement = await prisma.cmsAnnouncement.upsert({
     *   create: {
     *     // ... data to create a CmsAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends CmsAnnouncementUpsertArgs>(args: SelectSubset<T, CmsAnnouncementUpsertArgs<ExtArgs>>): Prisma__CmsAnnouncementClient<$Result.GetResult<Prisma.$CmsAnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementCountArgs} args - Arguments to filter CmsAnnouncements to count.
     * @example
     * // Count the number of CmsAnnouncements
     * const count = await prisma.cmsAnnouncement.count({
     *   where: {
     *     // ... the filter for the CmsAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends CmsAnnouncementCountArgs>(
      args?: Subset<T, CmsAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsAnnouncementAggregateArgs>(args: Subset<T, CmsAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetCmsAnnouncementAggregateType<T>>

    /**
     * Group by CmsAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: CmsAnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsAnnouncement model
   */
  readonly fields: CmsAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsAnnouncement model
   */
  interface CmsAnnouncementFieldRefs {
    readonly id: FieldRef<"CmsAnnouncement", 'Int'>
    readonly title: FieldRef<"CmsAnnouncement", 'String'>
    readonly slug: FieldRef<"CmsAnnouncement", 'String'>
    readonly excerpt: FieldRef<"CmsAnnouncement", 'String'>
    readonly richContent: FieldRef<"CmsAnnouncement", 'String'>
    readonly coverImage: FieldRef<"CmsAnnouncement", 'String'>
    readonly region: FieldRef<"CmsAnnouncement", 'CmsRegion'>
    readonly status: FieldRef<"CmsAnnouncement", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsAnnouncement", 'DateTime'>
    readonly createdById: FieldRef<"CmsAnnouncement", 'Int'>
    readonly updatedById: FieldRef<"CmsAnnouncement", 'Int'>
    readonly createdAt: FieldRef<"CmsAnnouncement", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsAnnouncement findUnique
   */
  export type CmsAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which CmsAnnouncement to fetch.
     */
    where: CmsAnnouncementWhereUniqueInput
  }

  /**
   * CmsAnnouncement findUniqueOrThrow
   */
  export type CmsAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which CmsAnnouncement to fetch.
     */
    where: CmsAnnouncementWhereUniqueInput
  }

  /**
   * CmsAnnouncement findFirst
   */
  export type CmsAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which CmsAnnouncement to fetch.
     */
    where?: CmsAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAnnouncements to fetch.
     */
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAnnouncements.
     */
    cursor?: CmsAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAnnouncements.
     */
    distinct?: CmsAnnouncementScalarFieldEnum | CmsAnnouncementScalarFieldEnum[]
  }

  /**
   * CmsAnnouncement findFirstOrThrow
   */
  export type CmsAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which CmsAnnouncement to fetch.
     */
    where?: CmsAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAnnouncements to fetch.
     */
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsAnnouncements.
     */
    cursor?: CmsAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAnnouncements.
     */
    distinct?: CmsAnnouncementScalarFieldEnum | CmsAnnouncementScalarFieldEnum[]
  }

  /**
   * CmsAnnouncement findMany
   */
  export type CmsAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which CmsAnnouncements to fetch.
     */
    where?: CmsAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsAnnouncements to fetch.
     */
    orderBy?: CmsAnnouncementOrderByWithRelationInput | CmsAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsAnnouncements.
     */
    cursor?: CmsAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsAnnouncements.
     */
    distinct?: CmsAnnouncementScalarFieldEnum | CmsAnnouncementScalarFieldEnum[]
  }

  /**
   * CmsAnnouncement create
   */
  export type CmsAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsAnnouncement.
     */
    data: XOR<CmsAnnouncementCreateInput, CmsAnnouncementUncheckedCreateInput>
  }

  /**
   * CmsAnnouncement createMany
   */
  export type CmsAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsAnnouncements.
     */
    data: CmsAnnouncementCreateManyInput | CmsAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsAnnouncement createManyAndReturn
   */
  export type CmsAnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many CmsAnnouncements.
     */
    data: CmsAnnouncementCreateManyInput | CmsAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsAnnouncement update
   */
  export type CmsAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsAnnouncement.
     */
    data: XOR<CmsAnnouncementUpdateInput, CmsAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which CmsAnnouncement to update.
     */
    where: CmsAnnouncementWhereUniqueInput
  }

  /**
   * CmsAnnouncement updateMany
   */
  export type CmsAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsAnnouncements.
     */
    data: XOR<CmsAnnouncementUpdateManyMutationInput, CmsAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which CmsAnnouncements to update
     */
    where?: CmsAnnouncementWhereInput
    /**
     * Limit how many CmsAnnouncements to update.
     */
    limit?: number
  }

  /**
   * CmsAnnouncement updateManyAndReturn
   */
  export type CmsAnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update CmsAnnouncements.
     */
    data: XOR<CmsAnnouncementUpdateManyMutationInput, CmsAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which CmsAnnouncements to update
     */
    where?: CmsAnnouncementWhereInput
    /**
     * Limit how many CmsAnnouncements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsAnnouncement upsert
   */
  export type CmsAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsAnnouncement to update in case it exists.
     */
    where: CmsAnnouncementWhereUniqueInput
    /**
     * In case the CmsAnnouncement found by the `where` argument doesn't exist, create a new CmsAnnouncement with this data.
     */
    create: XOR<CmsAnnouncementCreateInput, CmsAnnouncementUncheckedCreateInput>
    /**
     * In case the CmsAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsAnnouncementUpdateInput, CmsAnnouncementUncheckedUpdateInput>
  }

  /**
   * CmsAnnouncement delete
   */
  export type CmsAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which CmsAnnouncement to delete.
     */
    where: CmsAnnouncementWhereUniqueInput
  }

  /**
   * CmsAnnouncement deleteMany
   */
  export type CmsAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsAnnouncements to delete
     */
    where?: CmsAnnouncementWhereInput
    /**
     * Limit how many CmsAnnouncements to delete.
     */
    limit?: number
  }

  /**
   * CmsAnnouncement without action
   */
  export type CmsAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsAnnouncement
     */
    select?: CmsAnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsAnnouncement
     */
    omit?: CmsAnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsAnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model CmsNews
   */

  export type AggregateCmsNews = {
    _count: CmsNewsCountAggregateOutputType | null
    _avg: CmsNewsAvgAggregateOutputType | null
    _sum: CmsNewsSumAggregateOutputType | null
    _min: CmsNewsMinAggregateOutputType | null
    _max: CmsNewsMaxAggregateOutputType | null
  }

  export type CmsNewsAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsNewsSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsNewsMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsNewsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsNewsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    richContent: number
    coverImage: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsNewsAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsNewsSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsNewsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsNewsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsNewsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsNewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsNews to aggregate.
     */
    where?: CmsNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsNews to fetch.
     */
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsNews
    **/
    _count?: true | CmsNewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsNewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsNewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsNewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsNewsMaxAggregateInputType
  }

  export type GetCmsNewsAggregateType<T extends CmsNewsAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsNews[P]>
      : GetScalarType<T[P], AggregateCmsNews[P]>
  }




  export type CmsNewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsNewsWhereInput
    orderBy?: CmsNewsOrderByWithAggregationInput | CmsNewsOrderByWithAggregationInput[]
    by: CmsNewsScalarFieldEnum[] | CmsNewsScalarFieldEnum
    having?: CmsNewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsNewsCountAggregateInputType | true
    _avg?: CmsNewsAvgAggregateInputType
    _sum?: CmsNewsSumAggregateInputType
    _min?: CmsNewsMinAggregateInputType
    _max?: CmsNewsMaxAggregateInputType
  }

  export type CmsNewsGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage: string | null
    region: $Enums.CmsRegion
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsNewsCountAggregateOutputType | null
    _avg: CmsNewsAvgAggregateOutputType | null
    _sum: CmsNewsSumAggregateOutputType | null
    _min: CmsNewsMinAggregateOutputType | null
    _max: CmsNewsMaxAggregateOutputType | null
  }

  type GetCmsNewsGroupByPayload<T extends CmsNewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsNewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsNewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsNewsGroupByOutputType[P]>
            : GetScalarType<T[P], CmsNewsGroupByOutputType[P]>
        }
      >
    >


  export type CmsNewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsNews"]>

  export type CmsNewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsNews"]>

  export type CmsNewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsNews"]>

  export type CmsNewsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsNewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "richContent" | "coverImage" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsNews"]>
  export type CmsNewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsNewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsNewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsNewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsNews"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      richContent: string
      coverImage: string | null
      region: $Enums.CmsRegion
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsNews"]>
    composites: {}
  }

  type CmsNewsGetPayload<S extends boolean | null | undefined | CmsNewsDefaultArgs> = $Result.GetResult<Prisma.$CmsNewsPayload, S>

  type CmsNewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsNewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsNewsCountAggregateInputType | true
    }

  export interface CmsNewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsNews'], meta: { name: 'CmsNews' } }
    /**
     * Find zero or one CmsNews that matches the filter.
     * @param {CmsNewsFindUniqueArgs} args - Arguments to find a CmsNews
     * @example
     * // Get one CmsNews
     * const cmsNews = await prisma.cmsNews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsNewsFindUniqueArgs>(args: SelectSubset<T, CmsNewsFindUniqueArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsNews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsNewsFindUniqueOrThrowArgs} args - Arguments to find a CmsNews
     * @example
     * // Get one CmsNews
     * const cmsNews = await prisma.cmsNews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsNewsFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsNewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsFindFirstArgs} args - Arguments to find a CmsNews
     * @example
     * // Get one CmsNews
     * const cmsNews = await prisma.cmsNews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsNewsFindFirstArgs>(args?: SelectSubset<T, CmsNewsFindFirstArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsNews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsFindFirstOrThrowArgs} args - Arguments to find a CmsNews
     * @example
     * // Get one CmsNews
     * const cmsNews = await prisma.cmsNews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsNewsFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsNewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsNews
     * const cmsNews = await prisma.cmsNews.findMany()
     * 
     * // Get first 10 CmsNews
     * const cmsNews = await prisma.cmsNews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsNewsWithIdOnly = await prisma.cmsNews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsNewsFindManyArgs>(args?: SelectSubset<T, CmsNewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsNews.
     * @param {CmsNewsCreateArgs} args - Arguments to create a CmsNews.
     * @example
     * // Create one CmsNews
     * const CmsNews = await prisma.cmsNews.create({
     *   data: {
     *     // ... data to create a CmsNews
     *   }
     * })
     * 
     */
    create<T extends CmsNewsCreateArgs>(args: SelectSubset<T, CmsNewsCreateArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsNews.
     * @param {CmsNewsCreateManyArgs} args - Arguments to create many CmsNews.
     * @example
     * // Create many CmsNews
     * const cmsNews = await prisma.cmsNews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsNewsCreateManyArgs>(args?: SelectSubset<T, CmsNewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsNews and returns the data saved in the database.
     * @param {CmsNewsCreateManyAndReturnArgs} args - Arguments to create many CmsNews.
     * @example
     * // Create many CmsNews
     * const cmsNews = await prisma.cmsNews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsNews and only return the `id`
     * const cmsNewsWithIdOnly = await prisma.cmsNews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsNewsCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsNewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsNews.
     * @param {CmsNewsDeleteArgs} args - Arguments to delete one CmsNews.
     * @example
     * // Delete one CmsNews
     * const CmsNews = await prisma.cmsNews.delete({
     *   where: {
     *     // ... filter to delete one CmsNews
     *   }
     * })
     * 
     */
    delete<T extends CmsNewsDeleteArgs>(args: SelectSubset<T, CmsNewsDeleteArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsNews.
     * @param {CmsNewsUpdateArgs} args - Arguments to update one CmsNews.
     * @example
     * // Update one CmsNews
     * const cmsNews = await prisma.cmsNews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsNewsUpdateArgs>(args: SelectSubset<T, CmsNewsUpdateArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsNews.
     * @param {CmsNewsDeleteManyArgs} args - Arguments to filter CmsNews to delete.
     * @example
     * // Delete a few CmsNews
     * const { count } = await prisma.cmsNews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsNewsDeleteManyArgs>(args?: SelectSubset<T, CmsNewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsNews
     * const cmsNews = await prisma.cmsNews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsNewsUpdateManyArgs>(args: SelectSubset<T, CmsNewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsNews and returns the data updated in the database.
     * @param {CmsNewsUpdateManyAndReturnArgs} args - Arguments to update many CmsNews.
     * @example
     * // Update many CmsNews
     * const cmsNews = await prisma.cmsNews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsNews and only return the `id`
     * const cmsNewsWithIdOnly = await prisma.cmsNews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsNewsUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsNewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsNews.
     * @param {CmsNewsUpsertArgs} args - Arguments to update or create a CmsNews.
     * @example
     * // Update or create a CmsNews
     * const cmsNews = await prisma.cmsNews.upsert({
     *   create: {
     *     // ... data to create a CmsNews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsNews we want to update
     *   }
     * })
     */
    upsert<T extends CmsNewsUpsertArgs>(args: SelectSubset<T, CmsNewsUpsertArgs<ExtArgs>>): Prisma__CmsNewsClient<$Result.GetResult<Prisma.$CmsNewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsCountArgs} args - Arguments to filter CmsNews to count.
     * @example
     * // Count the number of CmsNews
     * const count = await prisma.cmsNews.count({
     *   where: {
     *     // ... the filter for the CmsNews we want to count
     *   }
     * })
    **/
    count<T extends CmsNewsCountArgs>(
      args?: Subset<T, CmsNewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsNewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsNewsAggregateArgs>(args: Subset<T, CmsNewsAggregateArgs>): Prisma.PrismaPromise<GetCmsNewsAggregateType<T>>

    /**
     * Group by CmsNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsNewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsNewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsNewsGroupByArgs['orderBy'] }
        : { orderBy?: CmsNewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsNewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsNews model
   */
  readonly fields: CmsNewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsNews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsNewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsNews model
   */
  interface CmsNewsFieldRefs {
    readonly id: FieldRef<"CmsNews", 'Int'>
    readonly title: FieldRef<"CmsNews", 'String'>
    readonly slug: FieldRef<"CmsNews", 'String'>
    readonly excerpt: FieldRef<"CmsNews", 'String'>
    readonly richContent: FieldRef<"CmsNews", 'String'>
    readonly coverImage: FieldRef<"CmsNews", 'String'>
    readonly region: FieldRef<"CmsNews", 'CmsRegion'>
    readonly status: FieldRef<"CmsNews", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsNews", 'DateTime'>
    readonly createdById: FieldRef<"CmsNews", 'Int'>
    readonly updatedById: FieldRef<"CmsNews", 'Int'>
    readonly createdAt: FieldRef<"CmsNews", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsNews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsNews findUnique
   */
  export type CmsNewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter, which CmsNews to fetch.
     */
    where: CmsNewsWhereUniqueInput
  }

  /**
   * CmsNews findUniqueOrThrow
   */
  export type CmsNewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter, which CmsNews to fetch.
     */
    where: CmsNewsWhereUniqueInput
  }

  /**
   * CmsNews findFirst
   */
  export type CmsNewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter, which CmsNews to fetch.
     */
    where?: CmsNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsNews to fetch.
     */
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsNews.
     */
    cursor?: CmsNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsNews.
     */
    distinct?: CmsNewsScalarFieldEnum | CmsNewsScalarFieldEnum[]
  }

  /**
   * CmsNews findFirstOrThrow
   */
  export type CmsNewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter, which CmsNews to fetch.
     */
    where?: CmsNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsNews to fetch.
     */
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsNews.
     */
    cursor?: CmsNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsNews.
     */
    distinct?: CmsNewsScalarFieldEnum | CmsNewsScalarFieldEnum[]
  }

  /**
   * CmsNews findMany
   */
  export type CmsNewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter, which CmsNews to fetch.
     */
    where?: CmsNewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsNews to fetch.
     */
    orderBy?: CmsNewsOrderByWithRelationInput | CmsNewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsNews.
     */
    cursor?: CmsNewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsNews.
     */
    distinct?: CmsNewsScalarFieldEnum | CmsNewsScalarFieldEnum[]
  }

  /**
   * CmsNews create
   */
  export type CmsNewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsNews.
     */
    data: XOR<CmsNewsCreateInput, CmsNewsUncheckedCreateInput>
  }

  /**
   * CmsNews createMany
   */
  export type CmsNewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsNews.
     */
    data: CmsNewsCreateManyInput | CmsNewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsNews createManyAndReturn
   */
  export type CmsNewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * The data used to create many CmsNews.
     */
    data: CmsNewsCreateManyInput | CmsNewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsNews update
   */
  export type CmsNewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsNews.
     */
    data: XOR<CmsNewsUpdateInput, CmsNewsUncheckedUpdateInput>
    /**
     * Choose, which CmsNews to update.
     */
    where: CmsNewsWhereUniqueInput
  }

  /**
   * CmsNews updateMany
   */
  export type CmsNewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsNews.
     */
    data: XOR<CmsNewsUpdateManyMutationInput, CmsNewsUncheckedUpdateManyInput>
    /**
     * Filter which CmsNews to update
     */
    where?: CmsNewsWhereInput
    /**
     * Limit how many CmsNews to update.
     */
    limit?: number
  }

  /**
   * CmsNews updateManyAndReturn
   */
  export type CmsNewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * The data used to update CmsNews.
     */
    data: XOR<CmsNewsUpdateManyMutationInput, CmsNewsUncheckedUpdateManyInput>
    /**
     * Filter which CmsNews to update
     */
    where?: CmsNewsWhereInput
    /**
     * Limit how many CmsNews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsNews upsert
   */
  export type CmsNewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsNews to update in case it exists.
     */
    where: CmsNewsWhereUniqueInput
    /**
     * In case the CmsNews found by the `where` argument doesn't exist, create a new CmsNews with this data.
     */
    create: XOR<CmsNewsCreateInput, CmsNewsUncheckedCreateInput>
    /**
     * In case the CmsNews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsNewsUpdateInput, CmsNewsUncheckedUpdateInput>
  }

  /**
   * CmsNews delete
   */
  export type CmsNewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
    /**
     * Filter which CmsNews to delete.
     */
    where: CmsNewsWhereUniqueInput
  }

  /**
   * CmsNews deleteMany
   */
  export type CmsNewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsNews to delete
     */
    where?: CmsNewsWhereInput
    /**
     * Limit how many CmsNews to delete.
     */
    limit?: number
  }

  /**
   * CmsNews without action
   */
  export type CmsNewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsNews
     */
    select?: CmsNewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsNews
     */
    omit?: CmsNewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsNewsInclude<ExtArgs> | null
  }


  /**
   * Model CmsPressBreifing
   */

  export type AggregateCmsPressBreifing = {
    _count: CmsPressBreifingCountAggregateOutputType | null
    _avg: CmsPressBreifingAvgAggregateOutputType | null
    _sum: CmsPressBreifingSumAggregateOutputType | null
    _min: CmsPressBreifingMinAggregateOutputType | null
    _max: CmsPressBreifingMaxAggregateOutputType | null
  }

  export type CmsPressBreifingAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsPressBreifingSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsPressBreifingMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPressBreifingMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsPressBreifingCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    richContent: number
    coverImage: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsPressBreifingAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsPressBreifingSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsPressBreifingMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPressBreifingMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsPressBreifingCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsPressBreifingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPressBreifing to aggregate.
     */
    where?: CmsPressBreifingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPressBreifings to fetch.
     */
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsPressBreifingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPressBreifings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPressBreifings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsPressBreifings
    **/
    _count?: true | CmsPressBreifingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsPressBreifingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsPressBreifingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsPressBreifingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsPressBreifingMaxAggregateInputType
  }

  export type GetCmsPressBreifingAggregateType<T extends CmsPressBreifingAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsPressBreifing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsPressBreifing[P]>
      : GetScalarType<T[P], AggregateCmsPressBreifing[P]>
  }




  export type CmsPressBreifingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsPressBreifingWhereInput
    orderBy?: CmsPressBreifingOrderByWithAggregationInput | CmsPressBreifingOrderByWithAggregationInput[]
    by: CmsPressBreifingScalarFieldEnum[] | CmsPressBreifingScalarFieldEnum
    having?: CmsPressBreifingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsPressBreifingCountAggregateInputType | true
    _avg?: CmsPressBreifingAvgAggregateInputType
    _sum?: CmsPressBreifingSumAggregateInputType
    _min?: CmsPressBreifingMinAggregateInputType
    _max?: CmsPressBreifingMaxAggregateInputType
  }

  export type CmsPressBreifingGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage: string | null
    region: $Enums.CmsRegion
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsPressBreifingCountAggregateOutputType | null
    _avg: CmsPressBreifingAvgAggregateOutputType | null
    _sum: CmsPressBreifingSumAggregateOutputType | null
    _min: CmsPressBreifingMinAggregateOutputType | null
    _max: CmsPressBreifingMaxAggregateOutputType | null
  }

  type GetCmsPressBreifingGroupByPayload<T extends CmsPressBreifingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsPressBreifingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsPressBreifingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsPressBreifingGroupByOutputType[P]>
            : GetScalarType<T[P], CmsPressBreifingGroupByOutputType[P]>
        }
      >
    >


  export type CmsPressBreifingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPressBreifing"]>

  export type CmsPressBreifingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPressBreifing"]>

  export type CmsPressBreifingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsPressBreifing"]>

  export type CmsPressBreifingSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsPressBreifingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "richContent" | "coverImage" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsPressBreifing"]>
  export type CmsPressBreifingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsPressBreifingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsPressBreifingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsPressBreifingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsPressBreifing"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      richContent: string
      coverImage: string | null
      region: $Enums.CmsRegion
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsPressBreifing"]>
    composites: {}
  }

  type CmsPressBreifingGetPayload<S extends boolean | null | undefined | CmsPressBreifingDefaultArgs> = $Result.GetResult<Prisma.$CmsPressBreifingPayload, S>

  type CmsPressBreifingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsPressBreifingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsPressBreifingCountAggregateInputType | true
    }

  export interface CmsPressBreifingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsPressBreifing'], meta: { name: 'CmsPressBreifing' } }
    /**
     * Find zero or one CmsPressBreifing that matches the filter.
     * @param {CmsPressBreifingFindUniqueArgs} args - Arguments to find a CmsPressBreifing
     * @example
     * // Get one CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsPressBreifingFindUniqueArgs>(args: SelectSubset<T, CmsPressBreifingFindUniqueArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsPressBreifing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsPressBreifingFindUniqueOrThrowArgs} args - Arguments to find a CmsPressBreifing
     * @example
     * // Get one CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsPressBreifingFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsPressBreifingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPressBreifing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingFindFirstArgs} args - Arguments to find a CmsPressBreifing
     * @example
     * // Get one CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsPressBreifingFindFirstArgs>(args?: SelectSubset<T, CmsPressBreifingFindFirstArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsPressBreifing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingFindFirstOrThrowArgs} args - Arguments to find a CmsPressBreifing
     * @example
     * // Get one CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsPressBreifingFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsPressBreifingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsPressBreifings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsPressBreifings
     * const cmsPressBreifings = await prisma.cmsPressBreifing.findMany()
     * 
     * // Get first 10 CmsPressBreifings
     * const cmsPressBreifings = await prisma.cmsPressBreifing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsPressBreifingWithIdOnly = await prisma.cmsPressBreifing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsPressBreifingFindManyArgs>(args?: SelectSubset<T, CmsPressBreifingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsPressBreifing.
     * @param {CmsPressBreifingCreateArgs} args - Arguments to create a CmsPressBreifing.
     * @example
     * // Create one CmsPressBreifing
     * const CmsPressBreifing = await prisma.cmsPressBreifing.create({
     *   data: {
     *     // ... data to create a CmsPressBreifing
     *   }
     * })
     * 
     */
    create<T extends CmsPressBreifingCreateArgs>(args: SelectSubset<T, CmsPressBreifingCreateArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsPressBreifings.
     * @param {CmsPressBreifingCreateManyArgs} args - Arguments to create many CmsPressBreifings.
     * @example
     * // Create many CmsPressBreifings
     * const cmsPressBreifing = await prisma.cmsPressBreifing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsPressBreifingCreateManyArgs>(args?: SelectSubset<T, CmsPressBreifingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsPressBreifings and returns the data saved in the database.
     * @param {CmsPressBreifingCreateManyAndReturnArgs} args - Arguments to create many CmsPressBreifings.
     * @example
     * // Create many CmsPressBreifings
     * const cmsPressBreifing = await prisma.cmsPressBreifing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsPressBreifings and only return the `id`
     * const cmsPressBreifingWithIdOnly = await prisma.cmsPressBreifing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsPressBreifingCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsPressBreifingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsPressBreifing.
     * @param {CmsPressBreifingDeleteArgs} args - Arguments to delete one CmsPressBreifing.
     * @example
     * // Delete one CmsPressBreifing
     * const CmsPressBreifing = await prisma.cmsPressBreifing.delete({
     *   where: {
     *     // ... filter to delete one CmsPressBreifing
     *   }
     * })
     * 
     */
    delete<T extends CmsPressBreifingDeleteArgs>(args: SelectSubset<T, CmsPressBreifingDeleteArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsPressBreifing.
     * @param {CmsPressBreifingUpdateArgs} args - Arguments to update one CmsPressBreifing.
     * @example
     * // Update one CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsPressBreifingUpdateArgs>(args: SelectSubset<T, CmsPressBreifingUpdateArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsPressBreifings.
     * @param {CmsPressBreifingDeleteManyArgs} args - Arguments to filter CmsPressBreifings to delete.
     * @example
     * // Delete a few CmsPressBreifings
     * const { count } = await prisma.cmsPressBreifing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsPressBreifingDeleteManyArgs>(args?: SelectSubset<T, CmsPressBreifingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPressBreifings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsPressBreifings
     * const cmsPressBreifing = await prisma.cmsPressBreifing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsPressBreifingUpdateManyArgs>(args: SelectSubset<T, CmsPressBreifingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsPressBreifings and returns the data updated in the database.
     * @param {CmsPressBreifingUpdateManyAndReturnArgs} args - Arguments to update many CmsPressBreifings.
     * @example
     * // Update many CmsPressBreifings
     * const cmsPressBreifing = await prisma.cmsPressBreifing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsPressBreifings and only return the `id`
     * const cmsPressBreifingWithIdOnly = await prisma.cmsPressBreifing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsPressBreifingUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsPressBreifingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsPressBreifing.
     * @param {CmsPressBreifingUpsertArgs} args - Arguments to update or create a CmsPressBreifing.
     * @example
     * // Update or create a CmsPressBreifing
     * const cmsPressBreifing = await prisma.cmsPressBreifing.upsert({
     *   create: {
     *     // ... data to create a CmsPressBreifing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsPressBreifing we want to update
     *   }
     * })
     */
    upsert<T extends CmsPressBreifingUpsertArgs>(args: SelectSubset<T, CmsPressBreifingUpsertArgs<ExtArgs>>): Prisma__CmsPressBreifingClient<$Result.GetResult<Prisma.$CmsPressBreifingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsPressBreifings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingCountArgs} args - Arguments to filter CmsPressBreifings to count.
     * @example
     * // Count the number of CmsPressBreifings
     * const count = await prisma.cmsPressBreifing.count({
     *   where: {
     *     // ... the filter for the CmsPressBreifings we want to count
     *   }
     * })
    **/
    count<T extends CmsPressBreifingCountArgs>(
      args?: Subset<T, CmsPressBreifingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsPressBreifingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsPressBreifing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsPressBreifingAggregateArgs>(args: Subset<T, CmsPressBreifingAggregateArgs>): Prisma.PrismaPromise<GetCmsPressBreifingAggregateType<T>>

    /**
     * Group by CmsPressBreifing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsPressBreifingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsPressBreifingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsPressBreifingGroupByArgs['orderBy'] }
        : { orderBy?: CmsPressBreifingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsPressBreifingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsPressBreifingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsPressBreifing model
   */
  readonly fields: CmsPressBreifingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsPressBreifing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsPressBreifingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsPressBreifing model
   */
  interface CmsPressBreifingFieldRefs {
    readonly id: FieldRef<"CmsPressBreifing", 'Int'>
    readonly title: FieldRef<"CmsPressBreifing", 'String'>
    readonly slug: FieldRef<"CmsPressBreifing", 'String'>
    readonly excerpt: FieldRef<"CmsPressBreifing", 'String'>
    readonly richContent: FieldRef<"CmsPressBreifing", 'String'>
    readonly coverImage: FieldRef<"CmsPressBreifing", 'String'>
    readonly region: FieldRef<"CmsPressBreifing", 'CmsRegion'>
    readonly status: FieldRef<"CmsPressBreifing", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsPressBreifing", 'DateTime'>
    readonly createdById: FieldRef<"CmsPressBreifing", 'Int'>
    readonly updatedById: FieldRef<"CmsPressBreifing", 'Int'>
    readonly createdAt: FieldRef<"CmsPressBreifing", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsPressBreifing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsPressBreifing findUnique
   */
  export type CmsPressBreifingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter, which CmsPressBreifing to fetch.
     */
    where: CmsPressBreifingWhereUniqueInput
  }

  /**
   * CmsPressBreifing findUniqueOrThrow
   */
  export type CmsPressBreifingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter, which CmsPressBreifing to fetch.
     */
    where: CmsPressBreifingWhereUniqueInput
  }

  /**
   * CmsPressBreifing findFirst
   */
  export type CmsPressBreifingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter, which CmsPressBreifing to fetch.
     */
    where?: CmsPressBreifingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPressBreifings to fetch.
     */
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPressBreifings.
     */
    cursor?: CmsPressBreifingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPressBreifings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPressBreifings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPressBreifings.
     */
    distinct?: CmsPressBreifingScalarFieldEnum | CmsPressBreifingScalarFieldEnum[]
  }

  /**
   * CmsPressBreifing findFirstOrThrow
   */
  export type CmsPressBreifingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter, which CmsPressBreifing to fetch.
     */
    where?: CmsPressBreifingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPressBreifings to fetch.
     */
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsPressBreifings.
     */
    cursor?: CmsPressBreifingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPressBreifings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPressBreifings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPressBreifings.
     */
    distinct?: CmsPressBreifingScalarFieldEnum | CmsPressBreifingScalarFieldEnum[]
  }

  /**
   * CmsPressBreifing findMany
   */
  export type CmsPressBreifingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter, which CmsPressBreifings to fetch.
     */
    where?: CmsPressBreifingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsPressBreifings to fetch.
     */
    orderBy?: CmsPressBreifingOrderByWithRelationInput | CmsPressBreifingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsPressBreifings.
     */
    cursor?: CmsPressBreifingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsPressBreifings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsPressBreifings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsPressBreifings.
     */
    distinct?: CmsPressBreifingScalarFieldEnum | CmsPressBreifingScalarFieldEnum[]
  }

  /**
   * CmsPressBreifing create
   */
  export type CmsPressBreifingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsPressBreifing.
     */
    data: XOR<CmsPressBreifingCreateInput, CmsPressBreifingUncheckedCreateInput>
  }

  /**
   * CmsPressBreifing createMany
   */
  export type CmsPressBreifingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsPressBreifings.
     */
    data: CmsPressBreifingCreateManyInput | CmsPressBreifingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsPressBreifing createManyAndReturn
   */
  export type CmsPressBreifingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * The data used to create many CmsPressBreifings.
     */
    data: CmsPressBreifingCreateManyInput | CmsPressBreifingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsPressBreifing update
   */
  export type CmsPressBreifingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsPressBreifing.
     */
    data: XOR<CmsPressBreifingUpdateInput, CmsPressBreifingUncheckedUpdateInput>
    /**
     * Choose, which CmsPressBreifing to update.
     */
    where: CmsPressBreifingWhereUniqueInput
  }

  /**
   * CmsPressBreifing updateMany
   */
  export type CmsPressBreifingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsPressBreifings.
     */
    data: XOR<CmsPressBreifingUpdateManyMutationInput, CmsPressBreifingUncheckedUpdateManyInput>
    /**
     * Filter which CmsPressBreifings to update
     */
    where?: CmsPressBreifingWhereInput
    /**
     * Limit how many CmsPressBreifings to update.
     */
    limit?: number
  }

  /**
   * CmsPressBreifing updateManyAndReturn
   */
  export type CmsPressBreifingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * The data used to update CmsPressBreifings.
     */
    data: XOR<CmsPressBreifingUpdateManyMutationInput, CmsPressBreifingUncheckedUpdateManyInput>
    /**
     * Filter which CmsPressBreifings to update
     */
    where?: CmsPressBreifingWhereInput
    /**
     * Limit how many CmsPressBreifings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsPressBreifing upsert
   */
  export type CmsPressBreifingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsPressBreifing to update in case it exists.
     */
    where: CmsPressBreifingWhereUniqueInput
    /**
     * In case the CmsPressBreifing found by the `where` argument doesn't exist, create a new CmsPressBreifing with this data.
     */
    create: XOR<CmsPressBreifingCreateInput, CmsPressBreifingUncheckedCreateInput>
    /**
     * In case the CmsPressBreifing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsPressBreifingUpdateInput, CmsPressBreifingUncheckedUpdateInput>
  }

  /**
   * CmsPressBreifing delete
   */
  export type CmsPressBreifingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
    /**
     * Filter which CmsPressBreifing to delete.
     */
    where: CmsPressBreifingWhereUniqueInput
  }

  /**
   * CmsPressBreifing deleteMany
   */
  export type CmsPressBreifingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsPressBreifings to delete
     */
    where?: CmsPressBreifingWhereInput
    /**
     * Limit how many CmsPressBreifings to delete.
     */
    limit?: number
  }

  /**
   * CmsPressBreifing without action
   */
  export type CmsPressBreifingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsPressBreifing
     */
    select?: CmsPressBreifingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsPressBreifing
     */
    omit?: CmsPressBreifingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsPressBreifingInclude<ExtArgs> | null
  }


  /**
   * Model CmsVideo
   */

  export type AggregateCmsVideo = {
    _count: CmsVideoCountAggregateOutputType | null
    _avg: CmsVideoAvgAggregateOutputType | null
    _sum: CmsVideoSumAggregateOutputType | null
    _min: CmsVideoMinAggregateOutputType | null
    _max: CmsVideoMaxAggregateOutputType | null
  }

  export type CmsVideoAvgAggregateOutputType = {
    id: number | null
    videoDuration: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsVideoSumAggregateOutputType = {
    id: number | null
    videoDuration: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsVideoMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    videoUrl: string | null
    videoDuration: number | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsVideoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    videoUrl: string | null
    videoDuration: number | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsVideoCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    richContent: number
    coverImage: number
    videoUrl: number
    videoDuration: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsVideoAvgAggregateInputType = {
    id?: true
    videoDuration?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsVideoSumAggregateInputType = {
    id?: true
    videoDuration?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsVideoMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    videoUrl?: true
    videoDuration?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsVideoMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    videoUrl?: true
    videoDuration?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsVideoCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    videoUrl?: true
    videoDuration?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsVideo to aggregate.
     */
    where?: CmsVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsVideos to fetch.
     */
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsVideos
    **/
    _count?: true | CmsVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsVideoMaxAggregateInputType
  }

  export type GetCmsVideoAggregateType<T extends CmsVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsVideo[P]>
      : GetScalarType<T[P], AggregateCmsVideo[P]>
  }




  export type CmsVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsVideoWhereInput
    orderBy?: CmsVideoOrderByWithAggregationInput | CmsVideoOrderByWithAggregationInput[]
    by: CmsVideoScalarFieldEnum[] | CmsVideoScalarFieldEnum
    having?: CmsVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsVideoCountAggregateInputType | true
    _avg?: CmsVideoAvgAggregateInputType
    _sum?: CmsVideoSumAggregateInputType
    _min?: CmsVideoMinAggregateInputType
    _max?: CmsVideoMaxAggregateInputType
  }

  export type CmsVideoGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage: string | null
    videoUrl: string
    videoDuration: number | null
    region: $Enums.CmsRegion
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsVideoCountAggregateOutputType | null
    _avg: CmsVideoAvgAggregateOutputType | null
    _sum: CmsVideoSumAggregateOutputType | null
    _min: CmsVideoMinAggregateOutputType | null
    _max: CmsVideoMaxAggregateOutputType | null
  }

  type GetCmsVideoGroupByPayload<T extends CmsVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsVideoGroupByOutputType[P]>
            : GetScalarType<T[P], CmsVideoGroupByOutputType[P]>
        }
      >
    >


  export type CmsVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    videoUrl?: boolean
    videoDuration?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsVideo"]>

  export type CmsVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    videoUrl?: boolean
    videoDuration?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsVideo"]>

  export type CmsVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    videoUrl?: boolean
    videoDuration?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsVideo"]>

  export type CmsVideoSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    videoUrl?: boolean
    videoDuration?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "richContent" | "coverImage" | "videoUrl" | "videoDuration" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsVideo"]>
  export type CmsVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsVideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsVideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsVideo"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      richContent: string
      coverImage: string | null
      videoUrl: string
      videoDuration: number | null
      region: $Enums.CmsRegion
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsVideo"]>
    composites: {}
  }

  type CmsVideoGetPayload<S extends boolean | null | undefined | CmsVideoDefaultArgs> = $Result.GetResult<Prisma.$CmsVideoPayload, S>

  type CmsVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsVideoCountAggregateInputType | true
    }

  export interface CmsVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsVideo'], meta: { name: 'CmsVideo' } }
    /**
     * Find zero or one CmsVideo that matches the filter.
     * @param {CmsVideoFindUniqueArgs} args - Arguments to find a CmsVideo
     * @example
     * // Get one CmsVideo
     * const cmsVideo = await prisma.cmsVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsVideoFindUniqueArgs>(args: SelectSubset<T, CmsVideoFindUniqueArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsVideoFindUniqueOrThrowArgs} args - Arguments to find a CmsVideo
     * @example
     * // Get one CmsVideo
     * const cmsVideo = await prisma.cmsVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoFindFirstArgs} args - Arguments to find a CmsVideo
     * @example
     * // Get one CmsVideo
     * const cmsVideo = await prisma.cmsVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsVideoFindFirstArgs>(args?: SelectSubset<T, CmsVideoFindFirstArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoFindFirstOrThrowArgs} args - Arguments to find a CmsVideo
     * @example
     * // Get one CmsVideo
     * const cmsVideo = await prisma.cmsVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsVideos
     * const cmsVideos = await prisma.cmsVideo.findMany()
     * 
     * // Get first 10 CmsVideos
     * const cmsVideos = await prisma.cmsVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsVideoWithIdOnly = await prisma.cmsVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsVideoFindManyArgs>(args?: SelectSubset<T, CmsVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsVideo.
     * @param {CmsVideoCreateArgs} args - Arguments to create a CmsVideo.
     * @example
     * // Create one CmsVideo
     * const CmsVideo = await prisma.cmsVideo.create({
     *   data: {
     *     // ... data to create a CmsVideo
     *   }
     * })
     * 
     */
    create<T extends CmsVideoCreateArgs>(args: SelectSubset<T, CmsVideoCreateArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsVideos.
     * @param {CmsVideoCreateManyArgs} args - Arguments to create many CmsVideos.
     * @example
     * // Create many CmsVideos
     * const cmsVideo = await prisma.cmsVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsVideoCreateManyArgs>(args?: SelectSubset<T, CmsVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsVideos and returns the data saved in the database.
     * @param {CmsVideoCreateManyAndReturnArgs} args - Arguments to create many CmsVideos.
     * @example
     * // Create many CmsVideos
     * const cmsVideo = await prisma.cmsVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsVideos and only return the `id`
     * const cmsVideoWithIdOnly = await prisma.cmsVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsVideo.
     * @param {CmsVideoDeleteArgs} args - Arguments to delete one CmsVideo.
     * @example
     * // Delete one CmsVideo
     * const CmsVideo = await prisma.cmsVideo.delete({
     *   where: {
     *     // ... filter to delete one CmsVideo
     *   }
     * })
     * 
     */
    delete<T extends CmsVideoDeleteArgs>(args: SelectSubset<T, CmsVideoDeleteArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsVideo.
     * @param {CmsVideoUpdateArgs} args - Arguments to update one CmsVideo.
     * @example
     * // Update one CmsVideo
     * const cmsVideo = await prisma.cmsVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsVideoUpdateArgs>(args: SelectSubset<T, CmsVideoUpdateArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsVideos.
     * @param {CmsVideoDeleteManyArgs} args - Arguments to filter CmsVideos to delete.
     * @example
     * // Delete a few CmsVideos
     * const { count } = await prisma.cmsVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsVideoDeleteManyArgs>(args?: SelectSubset<T, CmsVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsVideos
     * const cmsVideo = await prisma.cmsVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsVideoUpdateManyArgs>(args: SelectSubset<T, CmsVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsVideos and returns the data updated in the database.
     * @param {CmsVideoUpdateManyAndReturnArgs} args - Arguments to update many CmsVideos.
     * @example
     * // Update many CmsVideos
     * const cmsVideo = await prisma.cmsVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsVideos and only return the `id`
     * const cmsVideoWithIdOnly = await prisma.cmsVideo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsVideo.
     * @param {CmsVideoUpsertArgs} args - Arguments to update or create a CmsVideo.
     * @example
     * // Update or create a CmsVideo
     * const cmsVideo = await prisma.cmsVideo.upsert({
     *   create: {
     *     // ... data to create a CmsVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsVideo we want to update
     *   }
     * })
     */
    upsert<T extends CmsVideoUpsertArgs>(args: SelectSubset<T, CmsVideoUpsertArgs<ExtArgs>>): Prisma__CmsVideoClient<$Result.GetResult<Prisma.$CmsVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoCountArgs} args - Arguments to filter CmsVideos to count.
     * @example
     * // Count the number of CmsVideos
     * const count = await prisma.cmsVideo.count({
     *   where: {
     *     // ... the filter for the CmsVideos we want to count
     *   }
     * })
    **/
    count<T extends CmsVideoCountArgs>(
      args?: Subset<T, CmsVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsVideoAggregateArgs>(args: Subset<T, CmsVideoAggregateArgs>): Prisma.PrismaPromise<GetCmsVideoAggregateType<T>>

    /**
     * Group by CmsVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsVideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsVideoGroupByArgs['orderBy'] }
        : { orderBy?: CmsVideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsVideo model
   */
  readonly fields: CmsVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsVideo model
   */
  interface CmsVideoFieldRefs {
    readonly id: FieldRef<"CmsVideo", 'Int'>
    readonly title: FieldRef<"CmsVideo", 'String'>
    readonly slug: FieldRef<"CmsVideo", 'String'>
    readonly excerpt: FieldRef<"CmsVideo", 'String'>
    readonly richContent: FieldRef<"CmsVideo", 'String'>
    readonly coverImage: FieldRef<"CmsVideo", 'String'>
    readonly videoUrl: FieldRef<"CmsVideo", 'String'>
    readonly videoDuration: FieldRef<"CmsVideo", 'Int'>
    readonly region: FieldRef<"CmsVideo", 'CmsRegion'>
    readonly status: FieldRef<"CmsVideo", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsVideo", 'DateTime'>
    readonly createdById: FieldRef<"CmsVideo", 'Int'>
    readonly updatedById: FieldRef<"CmsVideo", 'Int'>
    readonly createdAt: FieldRef<"CmsVideo", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsVideo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsVideo findUnique
   */
  export type CmsVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter, which CmsVideo to fetch.
     */
    where: CmsVideoWhereUniqueInput
  }

  /**
   * CmsVideo findUniqueOrThrow
   */
  export type CmsVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter, which CmsVideo to fetch.
     */
    where: CmsVideoWhereUniqueInput
  }

  /**
   * CmsVideo findFirst
   */
  export type CmsVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter, which CmsVideo to fetch.
     */
    where?: CmsVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsVideos to fetch.
     */
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsVideos.
     */
    cursor?: CmsVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsVideos.
     */
    distinct?: CmsVideoScalarFieldEnum | CmsVideoScalarFieldEnum[]
  }

  /**
   * CmsVideo findFirstOrThrow
   */
  export type CmsVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter, which CmsVideo to fetch.
     */
    where?: CmsVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsVideos to fetch.
     */
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsVideos.
     */
    cursor?: CmsVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsVideos.
     */
    distinct?: CmsVideoScalarFieldEnum | CmsVideoScalarFieldEnum[]
  }

  /**
   * CmsVideo findMany
   */
  export type CmsVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter, which CmsVideos to fetch.
     */
    where?: CmsVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsVideos to fetch.
     */
    orderBy?: CmsVideoOrderByWithRelationInput | CmsVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsVideos.
     */
    cursor?: CmsVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsVideos.
     */
    distinct?: CmsVideoScalarFieldEnum | CmsVideoScalarFieldEnum[]
  }

  /**
   * CmsVideo create
   */
  export type CmsVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsVideo.
     */
    data: XOR<CmsVideoCreateInput, CmsVideoUncheckedCreateInput>
  }

  /**
   * CmsVideo createMany
   */
  export type CmsVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsVideos.
     */
    data: CmsVideoCreateManyInput | CmsVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsVideo createManyAndReturn
   */
  export type CmsVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * The data used to create many CmsVideos.
     */
    data: CmsVideoCreateManyInput | CmsVideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsVideo update
   */
  export type CmsVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsVideo.
     */
    data: XOR<CmsVideoUpdateInput, CmsVideoUncheckedUpdateInput>
    /**
     * Choose, which CmsVideo to update.
     */
    where: CmsVideoWhereUniqueInput
  }

  /**
   * CmsVideo updateMany
   */
  export type CmsVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsVideos.
     */
    data: XOR<CmsVideoUpdateManyMutationInput, CmsVideoUncheckedUpdateManyInput>
    /**
     * Filter which CmsVideos to update
     */
    where?: CmsVideoWhereInput
    /**
     * Limit how many CmsVideos to update.
     */
    limit?: number
  }

  /**
   * CmsVideo updateManyAndReturn
   */
  export type CmsVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * The data used to update CmsVideos.
     */
    data: XOR<CmsVideoUpdateManyMutationInput, CmsVideoUncheckedUpdateManyInput>
    /**
     * Filter which CmsVideos to update
     */
    where?: CmsVideoWhereInput
    /**
     * Limit how many CmsVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsVideo upsert
   */
  export type CmsVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsVideo to update in case it exists.
     */
    where: CmsVideoWhereUniqueInput
    /**
     * In case the CmsVideo found by the `where` argument doesn't exist, create a new CmsVideo with this data.
     */
    create: XOR<CmsVideoCreateInput, CmsVideoUncheckedCreateInput>
    /**
     * In case the CmsVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsVideoUpdateInput, CmsVideoUncheckedUpdateInput>
  }

  /**
   * CmsVideo delete
   */
  export type CmsVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
    /**
     * Filter which CmsVideo to delete.
     */
    where: CmsVideoWhereUniqueInput
  }

  /**
   * CmsVideo deleteMany
   */
  export type CmsVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsVideos to delete
     */
    where?: CmsVideoWhereInput
    /**
     * Limit how many CmsVideos to delete.
     */
    limit?: number
  }

  /**
   * CmsVideo without action
   */
  export type CmsVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsVideo
     */
    select?: CmsVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsVideo
     */
    omit?: CmsVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsVideoInclude<ExtArgs> | null
  }


  /**
   * Model CmsBlog
   */

  export type AggregateCmsBlog = {
    _count: CmsBlogCountAggregateOutputType | null
    _avg: CmsBlogAvgAggregateOutputType | null
    _sum: CmsBlogSumAggregateOutputType | null
    _min: CmsBlogMinAggregateOutputType | null
    _max: CmsBlogMaxAggregateOutputType | null
  }

  export type CmsBlogAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsBlogSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsBlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsBlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    excerpt: string | null
    richContent: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsBlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    richContent: number
    coverImage: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsBlogAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsBlogSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsBlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsBlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsBlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    richContent?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsBlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBlog to aggregate.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsBlogs
    **/
    _count?: true | CmsBlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsBlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsBlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsBlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsBlogMaxAggregateInputType
  }

  export type GetCmsBlogAggregateType<T extends CmsBlogAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsBlog[P]>
      : GetScalarType<T[P], AggregateCmsBlog[P]>
  }




  export type CmsBlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsBlogWhereInput
    orderBy?: CmsBlogOrderByWithAggregationInput | CmsBlogOrderByWithAggregationInput[]
    by: CmsBlogScalarFieldEnum[] | CmsBlogScalarFieldEnum
    having?: CmsBlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsBlogCountAggregateInputType | true
    _avg?: CmsBlogAvgAggregateInputType
    _sum?: CmsBlogSumAggregateInputType
    _min?: CmsBlogMinAggregateInputType
    _max?: CmsBlogMaxAggregateInputType
  }

  export type CmsBlogGroupByOutputType = {
    id: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage: string | null
    region: $Enums.CmsRegion
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsBlogCountAggregateOutputType | null
    _avg: CmsBlogAvgAggregateOutputType | null
    _sum: CmsBlogSumAggregateOutputType | null
    _min: CmsBlogMinAggregateOutputType | null
    _max: CmsBlogMaxAggregateOutputType | null
  }

  type GetCmsBlogGroupByPayload<T extends CmsBlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsBlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsBlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsBlogGroupByOutputType[P]>
            : GetScalarType<T[P], CmsBlogGroupByOutputType[P]>
        }
      >
    >


  export type CmsBlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsBlog"]>

  export type CmsBlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    richContent?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsBlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "richContent" | "coverImage" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsBlog"]>
  export type CmsBlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsBlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsBlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsBlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsBlog"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      excerpt: string
      richContent: string
      coverImage: string | null
      region: $Enums.CmsRegion
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsBlog"]>
    composites: {}
  }

  type CmsBlogGetPayload<S extends boolean | null | undefined | CmsBlogDefaultArgs> = $Result.GetResult<Prisma.$CmsBlogPayload, S>

  type CmsBlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsBlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsBlogCountAggregateInputType | true
    }

  export interface CmsBlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsBlog'], meta: { name: 'CmsBlog' } }
    /**
     * Find zero or one CmsBlog that matches the filter.
     * @param {CmsBlogFindUniqueArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsBlogFindUniqueArgs>(args: SelectSubset<T, CmsBlogFindUniqueArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsBlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsBlogFindUniqueOrThrowArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsBlogFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsBlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindFirstArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsBlogFindFirstArgs>(args?: SelectSubset<T, CmsBlogFindFirstArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsBlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindFirstOrThrowArgs} args - Arguments to find a CmsBlog
     * @example
     * // Get one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsBlogFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsBlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsBlogs
     * const cmsBlogs = await prisma.cmsBlog.findMany()
     * 
     * // Get first 10 CmsBlogs
     * const cmsBlogs = await prisma.cmsBlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsBlogFindManyArgs>(args?: SelectSubset<T, CmsBlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsBlog.
     * @param {CmsBlogCreateArgs} args - Arguments to create a CmsBlog.
     * @example
     * // Create one CmsBlog
     * const CmsBlog = await prisma.cmsBlog.create({
     *   data: {
     *     // ... data to create a CmsBlog
     *   }
     * })
     * 
     */
    create<T extends CmsBlogCreateArgs>(args: SelectSubset<T, CmsBlogCreateArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsBlogs.
     * @param {CmsBlogCreateManyArgs} args - Arguments to create many CmsBlogs.
     * @example
     * // Create many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsBlogCreateManyArgs>(args?: SelectSubset<T, CmsBlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsBlogs and returns the data saved in the database.
     * @param {CmsBlogCreateManyAndReturnArgs} args - Arguments to create many CmsBlogs.
     * @example
     * // Create many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsBlogs and only return the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsBlogCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsBlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsBlog.
     * @param {CmsBlogDeleteArgs} args - Arguments to delete one CmsBlog.
     * @example
     * // Delete one CmsBlog
     * const CmsBlog = await prisma.cmsBlog.delete({
     *   where: {
     *     // ... filter to delete one CmsBlog
     *   }
     * })
     * 
     */
    delete<T extends CmsBlogDeleteArgs>(args: SelectSubset<T, CmsBlogDeleteArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsBlog.
     * @param {CmsBlogUpdateArgs} args - Arguments to update one CmsBlog.
     * @example
     * // Update one CmsBlog
     * const cmsBlog = await prisma.cmsBlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsBlogUpdateArgs>(args: SelectSubset<T, CmsBlogUpdateArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsBlogs.
     * @param {CmsBlogDeleteManyArgs} args - Arguments to filter CmsBlogs to delete.
     * @example
     * // Delete a few CmsBlogs
     * const { count } = await prisma.cmsBlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsBlogDeleteManyArgs>(args?: SelectSubset<T, CmsBlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsBlogUpdateManyArgs>(args: SelectSubset<T, CmsBlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsBlogs and returns the data updated in the database.
     * @param {CmsBlogUpdateManyAndReturnArgs} args - Arguments to update many CmsBlogs.
     * @example
     * // Update many CmsBlogs
     * const cmsBlog = await prisma.cmsBlog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsBlogs and only return the `id`
     * const cmsBlogWithIdOnly = await prisma.cmsBlog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsBlogUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsBlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsBlog.
     * @param {CmsBlogUpsertArgs} args - Arguments to update or create a CmsBlog.
     * @example
     * // Update or create a CmsBlog
     * const cmsBlog = await prisma.cmsBlog.upsert({
     *   create: {
     *     // ... data to create a CmsBlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsBlog we want to update
     *   }
     * })
     */
    upsert<T extends CmsBlogUpsertArgs>(args: SelectSubset<T, CmsBlogUpsertArgs<ExtArgs>>): Prisma__CmsBlogClient<$Result.GetResult<Prisma.$CmsBlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogCountArgs} args - Arguments to filter CmsBlogs to count.
     * @example
     * // Count the number of CmsBlogs
     * const count = await prisma.cmsBlog.count({
     *   where: {
     *     // ... the filter for the CmsBlogs we want to count
     *   }
     * })
    **/
    count<T extends CmsBlogCountArgs>(
      args?: Subset<T, CmsBlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsBlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsBlogAggregateArgs>(args: Subset<T, CmsBlogAggregateArgs>): Prisma.PrismaPromise<GetCmsBlogAggregateType<T>>

    /**
     * Group by CmsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsBlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsBlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsBlogGroupByArgs['orderBy'] }
        : { orderBy?: CmsBlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsBlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsBlog model
   */
  readonly fields: CmsBlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsBlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsBlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsBlog model
   */
  interface CmsBlogFieldRefs {
    readonly id: FieldRef<"CmsBlog", 'Int'>
    readonly title: FieldRef<"CmsBlog", 'String'>
    readonly slug: FieldRef<"CmsBlog", 'String'>
    readonly excerpt: FieldRef<"CmsBlog", 'String'>
    readonly richContent: FieldRef<"CmsBlog", 'String'>
    readonly coverImage: FieldRef<"CmsBlog", 'String'>
    readonly region: FieldRef<"CmsBlog", 'CmsRegion'>
    readonly status: FieldRef<"CmsBlog", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsBlog", 'DateTime'>
    readonly createdById: FieldRef<"CmsBlog", 'Int'>
    readonly updatedById: FieldRef<"CmsBlog", 'Int'>
    readonly createdAt: FieldRef<"CmsBlog", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsBlog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsBlog findUnique
   */
  export type CmsBlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog findUniqueOrThrow
   */
  export type CmsBlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog findFirst
   */
  export type CmsBlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog findFirstOrThrow
   */
  export type CmsBlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlog to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog findMany
   */
  export type CmsBlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter, which CmsBlogs to fetch.
     */
    where?: CmsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsBlogs to fetch.
     */
    orderBy?: CmsBlogOrderByWithRelationInput | CmsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsBlogs.
     */
    cursor?: CmsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsBlogs.
     */
    distinct?: CmsBlogScalarFieldEnum | CmsBlogScalarFieldEnum[]
  }

  /**
   * CmsBlog create
   */
  export type CmsBlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsBlog.
     */
    data: XOR<CmsBlogCreateInput, CmsBlogUncheckedCreateInput>
  }

  /**
   * CmsBlog createMany
   */
  export type CmsBlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsBlogs.
     */
    data: CmsBlogCreateManyInput | CmsBlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsBlog createManyAndReturn
   */
  export type CmsBlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * The data used to create many CmsBlogs.
     */
    data: CmsBlogCreateManyInput | CmsBlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsBlog update
   */
  export type CmsBlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsBlog.
     */
    data: XOR<CmsBlogUpdateInput, CmsBlogUncheckedUpdateInput>
    /**
     * Choose, which CmsBlog to update.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog updateMany
   */
  export type CmsBlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsBlogs.
     */
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyInput>
    /**
     * Filter which CmsBlogs to update
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to update.
     */
    limit?: number
  }

  /**
   * CmsBlog updateManyAndReturn
   */
  export type CmsBlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * The data used to update CmsBlogs.
     */
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyInput>
    /**
     * Filter which CmsBlogs to update
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsBlog upsert
   */
  export type CmsBlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsBlog to update in case it exists.
     */
    where: CmsBlogWhereUniqueInput
    /**
     * In case the CmsBlog found by the `where` argument doesn't exist, create a new CmsBlog with this data.
     */
    create: XOR<CmsBlogCreateInput, CmsBlogUncheckedCreateInput>
    /**
     * In case the CmsBlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsBlogUpdateInput, CmsBlogUncheckedUpdateInput>
  }

  /**
   * CmsBlog delete
   */
  export type CmsBlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
    /**
     * Filter which CmsBlog to delete.
     */
    where: CmsBlogWhereUniqueInput
  }

  /**
   * CmsBlog deleteMany
   */
  export type CmsBlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsBlogs to delete
     */
    where?: CmsBlogWhereInput
    /**
     * Limit how many CmsBlogs to delete.
     */
    limit?: number
  }

  /**
   * CmsBlog without action
   */
  export type CmsBlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsBlog
     */
    select?: CmsBlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsBlog
     */
    omit?: CmsBlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsBlogInclude<ExtArgs> | null
  }


  /**
   * Model CmsTeamMember
   */

  export type AggregateCmsTeamMember = {
    _count: CmsTeamMemberCountAggregateOutputType | null
    _avg: CmsTeamMemberAvgAggregateOutputType | null
    _sum: CmsTeamMemberSumAggregateOutputType | null
    _min: CmsTeamMemberMinAggregateOutputType | null
    _max: CmsTeamMemberMaxAggregateOutputType | null
  }

  export type CmsTeamMemberAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsTeamMemberSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsTeamMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    role: string | null
    joined: string | null
    avatar: string | null
    focus: string | null
    teamType: $Enums.CmsTeamType | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsTeamMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    role: string | null
    joined: string | null
    avatar: string | null
    focus: string | null
    teamType: $Enums.CmsTeamType | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsTeamMemberCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    role: number
    joined: number
    avatar: number
    focus: number
    teamType: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsTeamMemberAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsTeamMemberSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsTeamMemberMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    role?: true
    joined?: true
    avatar?: true
    focus?: true
    teamType?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsTeamMemberMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    role?: true
    joined?: true
    avatar?: true
    focus?: true
    teamType?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsTeamMemberCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    role?: true
    joined?: true
    avatar?: true
    focus?: true
    teamType?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsTeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsTeamMember to aggregate.
     */
    where?: CmsTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTeamMembers to fetch.
     */
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsTeamMembers
    **/
    _count?: true | CmsTeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsTeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsTeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsTeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsTeamMemberMaxAggregateInputType
  }

  export type GetCmsTeamMemberAggregateType<T extends CmsTeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsTeamMember[P]>
      : GetScalarType<T[P], AggregateCmsTeamMember[P]>
  }




  export type CmsTeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsTeamMemberWhereInput
    orderBy?: CmsTeamMemberOrderByWithAggregationInput | CmsTeamMemberOrderByWithAggregationInput[]
    by: CmsTeamMemberScalarFieldEnum[] | CmsTeamMemberScalarFieldEnum
    having?: CmsTeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsTeamMemberCountAggregateInputType | true
    _avg?: CmsTeamMemberAvgAggregateInputType
    _sum?: CmsTeamMemberSumAggregateInputType
    _min?: CmsTeamMemberMinAggregateInputType
    _max?: CmsTeamMemberMaxAggregateInputType
  }

  export type CmsTeamMemberGroupByOutputType = {
    id: number
    name: string
    slug: string
    role: string
    joined: string | null
    avatar: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsTeamMemberCountAggregateOutputType | null
    _avg: CmsTeamMemberAvgAggregateOutputType | null
    _sum: CmsTeamMemberSumAggregateOutputType | null
    _min: CmsTeamMemberMinAggregateOutputType | null
    _max: CmsTeamMemberMaxAggregateOutputType | null
  }

  type GetCmsTeamMemberGroupByPayload<T extends CmsTeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsTeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsTeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsTeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CmsTeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type CmsTeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    role?: boolean
    joined?: boolean
    avatar?: boolean
    focus?: boolean
    teamType?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsTeamMember"]>

  export type CmsTeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    role?: boolean
    joined?: boolean
    avatar?: boolean
    focus?: boolean
    teamType?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsTeamMember"]>

  export type CmsTeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    role?: boolean
    joined?: boolean
    avatar?: boolean
    focus?: boolean
    teamType?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsTeamMember"]>

  export type CmsTeamMemberSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    role?: boolean
    joined?: boolean
    avatar?: boolean
    focus?: boolean
    teamType?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsTeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "role" | "joined" | "avatar" | "focus" | "teamType" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsTeamMember"]>
  export type CmsTeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsTeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsTeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsTeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsTeamMember"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      role: string
      joined: string | null
      avatar: string | null
      focus: string
      teamType: $Enums.CmsTeamType
      region: $Enums.CmsRegion | null
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsTeamMember"]>
    composites: {}
  }

  type CmsTeamMemberGetPayload<S extends boolean | null | undefined | CmsTeamMemberDefaultArgs> = $Result.GetResult<Prisma.$CmsTeamMemberPayload, S>

  type CmsTeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsTeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsTeamMemberCountAggregateInputType | true
    }

  export interface CmsTeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsTeamMember'], meta: { name: 'CmsTeamMember' } }
    /**
     * Find zero or one CmsTeamMember that matches the filter.
     * @param {CmsTeamMemberFindUniqueArgs} args - Arguments to find a CmsTeamMember
     * @example
     * // Get one CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsTeamMemberFindUniqueArgs>(args: SelectSubset<T, CmsTeamMemberFindUniqueArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsTeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsTeamMemberFindUniqueOrThrowArgs} args - Arguments to find a CmsTeamMember
     * @example
     * // Get one CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsTeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsTeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsTeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberFindFirstArgs} args - Arguments to find a CmsTeamMember
     * @example
     * // Get one CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsTeamMemberFindFirstArgs>(args?: SelectSubset<T, CmsTeamMemberFindFirstArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsTeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberFindFirstOrThrowArgs} args - Arguments to find a CmsTeamMember
     * @example
     * // Get one CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsTeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsTeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsTeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsTeamMembers
     * const cmsTeamMembers = await prisma.cmsTeamMember.findMany()
     * 
     * // Get first 10 CmsTeamMembers
     * const cmsTeamMembers = await prisma.cmsTeamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsTeamMemberWithIdOnly = await prisma.cmsTeamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsTeamMemberFindManyArgs>(args?: SelectSubset<T, CmsTeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsTeamMember.
     * @param {CmsTeamMemberCreateArgs} args - Arguments to create a CmsTeamMember.
     * @example
     * // Create one CmsTeamMember
     * const CmsTeamMember = await prisma.cmsTeamMember.create({
     *   data: {
     *     // ... data to create a CmsTeamMember
     *   }
     * })
     * 
     */
    create<T extends CmsTeamMemberCreateArgs>(args: SelectSubset<T, CmsTeamMemberCreateArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsTeamMembers.
     * @param {CmsTeamMemberCreateManyArgs} args - Arguments to create many CmsTeamMembers.
     * @example
     * // Create many CmsTeamMembers
     * const cmsTeamMember = await prisma.cmsTeamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsTeamMemberCreateManyArgs>(args?: SelectSubset<T, CmsTeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsTeamMembers and returns the data saved in the database.
     * @param {CmsTeamMemberCreateManyAndReturnArgs} args - Arguments to create many CmsTeamMembers.
     * @example
     * // Create many CmsTeamMembers
     * const cmsTeamMember = await prisma.cmsTeamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsTeamMembers and only return the `id`
     * const cmsTeamMemberWithIdOnly = await prisma.cmsTeamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsTeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsTeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsTeamMember.
     * @param {CmsTeamMemberDeleteArgs} args - Arguments to delete one CmsTeamMember.
     * @example
     * // Delete one CmsTeamMember
     * const CmsTeamMember = await prisma.cmsTeamMember.delete({
     *   where: {
     *     // ... filter to delete one CmsTeamMember
     *   }
     * })
     * 
     */
    delete<T extends CmsTeamMemberDeleteArgs>(args: SelectSubset<T, CmsTeamMemberDeleteArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsTeamMember.
     * @param {CmsTeamMemberUpdateArgs} args - Arguments to update one CmsTeamMember.
     * @example
     * // Update one CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsTeamMemberUpdateArgs>(args: SelectSubset<T, CmsTeamMemberUpdateArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsTeamMembers.
     * @param {CmsTeamMemberDeleteManyArgs} args - Arguments to filter CmsTeamMembers to delete.
     * @example
     * // Delete a few CmsTeamMembers
     * const { count } = await prisma.cmsTeamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsTeamMemberDeleteManyArgs>(args?: SelectSubset<T, CmsTeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsTeamMembers
     * const cmsTeamMember = await prisma.cmsTeamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsTeamMemberUpdateManyArgs>(args: SelectSubset<T, CmsTeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsTeamMembers and returns the data updated in the database.
     * @param {CmsTeamMemberUpdateManyAndReturnArgs} args - Arguments to update many CmsTeamMembers.
     * @example
     * // Update many CmsTeamMembers
     * const cmsTeamMember = await prisma.cmsTeamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsTeamMembers and only return the `id`
     * const cmsTeamMemberWithIdOnly = await prisma.cmsTeamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsTeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsTeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsTeamMember.
     * @param {CmsTeamMemberUpsertArgs} args - Arguments to update or create a CmsTeamMember.
     * @example
     * // Update or create a CmsTeamMember
     * const cmsTeamMember = await prisma.cmsTeamMember.upsert({
     *   create: {
     *     // ... data to create a CmsTeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsTeamMember we want to update
     *   }
     * })
     */
    upsert<T extends CmsTeamMemberUpsertArgs>(args: SelectSubset<T, CmsTeamMemberUpsertArgs<ExtArgs>>): Prisma__CmsTeamMemberClient<$Result.GetResult<Prisma.$CmsTeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsTeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberCountArgs} args - Arguments to filter CmsTeamMembers to count.
     * @example
     * // Count the number of CmsTeamMembers
     * const count = await prisma.cmsTeamMember.count({
     *   where: {
     *     // ... the filter for the CmsTeamMembers we want to count
     *   }
     * })
    **/
    count<T extends CmsTeamMemberCountArgs>(
      args?: Subset<T, CmsTeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsTeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsTeamMemberAggregateArgs>(args: Subset<T, CmsTeamMemberAggregateArgs>): Prisma.PrismaPromise<GetCmsTeamMemberAggregateType<T>>

    /**
     * Group by CmsTeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsTeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsTeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsTeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: CmsTeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsTeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsTeamMember model
   */
  readonly fields: CmsTeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsTeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsTeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsTeamMember model
   */
  interface CmsTeamMemberFieldRefs {
    readonly id: FieldRef<"CmsTeamMember", 'Int'>
    readonly name: FieldRef<"CmsTeamMember", 'String'>
    readonly slug: FieldRef<"CmsTeamMember", 'String'>
    readonly role: FieldRef<"CmsTeamMember", 'String'>
    readonly joined: FieldRef<"CmsTeamMember", 'String'>
    readonly avatar: FieldRef<"CmsTeamMember", 'String'>
    readonly focus: FieldRef<"CmsTeamMember", 'String'>
    readonly teamType: FieldRef<"CmsTeamMember", 'CmsTeamType'>
    readonly region: FieldRef<"CmsTeamMember", 'CmsRegion'>
    readonly status: FieldRef<"CmsTeamMember", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsTeamMember", 'DateTime'>
    readonly createdById: FieldRef<"CmsTeamMember", 'Int'>
    readonly updatedById: FieldRef<"CmsTeamMember", 'Int'>
    readonly createdAt: FieldRef<"CmsTeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsTeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsTeamMember findUnique
   */
  export type CmsTeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which CmsTeamMember to fetch.
     */
    where: CmsTeamMemberWhereUniqueInput
  }

  /**
   * CmsTeamMember findUniqueOrThrow
   */
  export type CmsTeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which CmsTeamMember to fetch.
     */
    where: CmsTeamMemberWhereUniqueInput
  }

  /**
   * CmsTeamMember findFirst
   */
  export type CmsTeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which CmsTeamMember to fetch.
     */
    where?: CmsTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTeamMembers to fetch.
     */
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsTeamMembers.
     */
    cursor?: CmsTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTeamMembers.
     */
    distinct?: CmsTeamMemberScalarFieldEnum | CmsTeamMemberScalarFieldEnum[]
  }

  /**
   * CmsTeamMember findFirstOrThrow
   */
  export type CmsTeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which CmsTeamMember to fetch.
     */
    where?: CmsTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTeamMembers to fetch.
     */
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsTeamMembers.
     */
    cursor?: CmsTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTeamMembers.
     */
    distinct?: CmsTeamMemberScalarFieldEnum | CmsTeamMemberScalarFieldEnum[]
  }

  /**
   * CmsTeamMember findMany
   */
  export type CmsTeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which CmsTeamMembers to fetch.
     */
    where?: CmsTeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsTeamMembers to fetch.
     */
    orderBy?: CmsTeamMemberOrderByWithRelationInput | CmsTeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsTeamMembers.
     */
    cursor?: CmsTeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsTeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsTeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsTeamMembers.
     */
    distinct?: CmsTeamMemberScalarFieldEnum | CmsTeamMemberScalarFieldEnum[]
  }

  /**
   * CmsTeamMember create
   */
  export type CmsTeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsTeamMember.
     */
    data: XOR<CmsTeamMemberCreateInput, CmsTeamMemberUncheckedCreateInput>
  }

  /**
   * CmsTeamMember createMany
   */
  export type CmsTeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsTeamMembers.
     */
    data: CmsTeamMemberCreateManyInput | CmsTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsTeamMember createManyAndReturn
   */
  export type CmsTeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CmsTeamMembers.
     */
    data: CmsTeamMemberCreateManyInput | CmsTeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsTeamMember update
   */
  export type CmsTeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsTeamMember.
     */
    data: XOR<CmsTeamMemberUpdateInput, CmsTeamMemberUncheckedUpdateInput>
    /**
     * Choose, which CmsTeamMember to update.
     */
    where: CmsTeamMemberWhereUniqueInput
  }

  /**
   * CmsTeamMember updateMany
   */
  export type CmsTeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsTeamMembers.
     */
    data: XOR<CmsTeamMemberUpdateManyMutationInput, CmsTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which CmsTeamMembers to update
     */
    where?: CmsTeamMemberWhereInput
    /**
     * Limit how many CmsTeamMembers to update.
     */
    limit?: number
  }

  /**
   * CmsTeamMember updateManyAndReturn
   */
  export type CmsTeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update CmsTeamMembers.
     */
    data: XOR<CmsTeamMemberUpdateManyMutationInput, CmsTeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which CmsTeamMembers to update
     */
    where?: CmsTeamMemberWhereInput
    /**
     * Limit how many CmsTeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsTeamMember upsert
   */
  export type CmsTeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsTeamMember to update in case it exists.
     */
    where: CmsTeamMemberWhereUniqueInput
    /**
     * In case the CmsTeamMember found by the `where` argument doesn't exist, create a new CmsTeamMember with this data.
     */
    create: XOR<CmsTeamMemberCreateInput, CmsTeamMemberUncheckedCreateInput>
    /**
     * In case the CmsTeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsTeamMemberUpdateInput, CmsTeamMemberUncheckedUpdateInput>
  }

  /**
   * CmsTeamMember delete
   */
  export type CmsTeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
    /**
     * Filter which CmsTeamMember to delete.
     */
    where: CmsTeamMemberWhereUniqueInput
  }

  /**
   * CmsTeamMember deleteMany
   */
  export type CmsTeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsTeamMembers to delete
     */
    where?: CmsTeamMemberWhereInput
    /**
     * Limit how many CmsTeamMembers to delete.
     */
    limit?: number
  }

  /**
   * CmsTeamMember without action
   */
  export type CmsTeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsTeamMember
     */
    select?: CmsTeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsTeamMember
     */
    omit?: CmsTeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsTeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model CmsMediaItem
   */

  export type AggregateCmsMediaItem = {
    _count: CmsMediaItemCountAggregateOutputType | null
    _avg: CmsMediaItemAvgAggregateOutputType | null
    _sum: CmsMediaItemSumAggregateOutputType | null
    _min: CmsMediaItemMinAggregateOutputType | null
    _max: CmsMediaItemMaxAggregateOutputType | null
  }

  export type CmsMediaItemAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsMediaItemSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    updatedById: number | null
  }

  export type CmsMediaItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    mediaType: $Enums.CmsMediaType | null
    fileUrl: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsMediaItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
    mediaType: $Enums.CmsMediaType | null
    fileUrl: string | null
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    createdById: number | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CmsMediaItemCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    mediaType: number
    fileUrl: number
    coverImage: number
    region: number
    status: number
    publishedAt: number
    createdById: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CmsMediaItemAvgAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsMediaItemSumAggregateInputType = {
    id?: true
    createdById?: true
    updatedById?: true
  }

  export type CmsMediaItemMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    mediaType?: true
    fileUrl?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsMediaItemMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    mediaType?: true
    fileUrl?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CmsMediaItemCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    mediaType?: true
    fileUrl?: true
    coverImage?: true
    region?: true
    status?: true
    publishedAt?: true
    createdById?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CmsMediaItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsMediaItem to aggregate.
     */
    where?: CmsMediaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsMediaItems to fetch.
     */
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmsMediaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsMediaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsMediaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmsMediaItems
    **/
    _count?: true | CmsMediaItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsMediaItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsMediaItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsMediaItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsMediaItemMaxAggregateInputType
  }

  export type GetCmsMediaItemAggregateType<T extends CmsMediaItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCmsMediaItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmsMediaItem[P]>
      : GetScalarType<T[P], AggregateCmsMediaItem[P]>
  }




  export type CmsMediaItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmsMediaItemWhereInput
    orderBy?: CmsMediaItemOrderByWithAggregationInput | CmsMediaItemOrderByWithAggregationInput[]
    by: CmsMediaItemScalarFieldEnum[] | CmsMediaItemScalarFieldEnum
    having?: CmsMediaItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsMediaItemCountAggregateInputType | true
    _avg?: CmsMediaItemAvgAggregateInputType
    _sum?: CmsMediaItemSumAggregateInputType
    _min?: CmsMediaItemMinAggregateInputType
    _max?: CmsMediaItemMaxAggregateInputType
  }

  export type CmsMediaItemGroupByOutputType = {
    id: number
    title: string
    slug: string
    description: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage: string | null
    region: $Enums.CmsRegion | null
    status: $Enums.PublishStatus
    publishedAt: Date | null
    createdById: number
    updatedById: number
    createdAt: Date
    updatedAt: Date
    _count: CmsMediaItemCountAggregateOutputType | null
    _avg: CmsMediaItemAvgAggregateOutputType | null
    _sum: CmsMediaItemSumAggregateOutputType | null
    _min: CmsMediaItemMinAggregateOutputType | null
    _max: CmsMediaItemMaxAggregateOutputType | null
  }

  type GetCmsMediaItemGroupByPayload<T extends CmsMediaItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsMediaItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsMediaItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsMediaItemGroupByOutputType[P]>
            : GetScalarType<T[P], CmsMediaItemGroupByOutputType[P]>
        }
      >
    >


  export type CmsMediaItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    mediaType?: boolean
    fileUrl?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsMediaItem"]>

  export type CmsMediaItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    mediaType?: boolean
    fileUrl?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsMediaItem"]>

  export type CmsMediaItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    mediaType?: boolean
    fileUrl?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmsMediaItem"]>

  export type CmsMediaItemSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    mediaType?: boolean
    fileUrl?: boolean
    coverImage?: boolean
    region?: boolean
    status?: boolean
    publishedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CmsMediaItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "mediaType" | "fileUrl" | "coverImage" | "region" | "status" | "publishedAt" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["cmsMediaItem"]>
  export type CmsMediaItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsMediaItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }
  export type CmsMediaItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | CmsUserDefaultArgs<ExtArgs>
    updatedBy?: boolean | CmsUserDefaultArgs<ExtArgs>
  }

  export type $CmsMediaItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmsMediaItem"
    objects: {
      createdBy: Prisma.$CmsUserPayload<ExtArgs>
      updatedBy: Prisma.$CmsUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      description: string | null
      mediaType: $Enums.CmsMediaType
      fileUrl: string
      coverImage: string | null
      region: $Enums.CmsRegion | null
      status: $Enums.PublishStatus
      publishedAt: Date | null
      createdById: number
      updatedById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cmsMediaItem"]>
    composites: {}
  }

  type CmsMediaItemGetPayload<S extends boolean | null | undefined | CmsMediaItemDefaultArgs> = $Result.GetResult<Prisma.$CmsMediaItemPayload, S>

  type CmsMediaItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmsMediaItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsMediaItemCountAggregateInputType | true
    }

  export interface CmsMediaItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmsMediaItem'], meta: { name: 'CmsMediaItem' } }
    /**
     * Find zero or one CmsMediaItem that matches the filter.
     * @param {CmsMediaItemFindUniqueArgs} args - Arguments to find a CmsMediaItem
     * @example
     * // Get one CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmsMediaItemFindUniqueArgs>(args: SelectSubset<T, CmsMediaItemFindUniqueArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmsMediaItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmsMediaItemFindUniqueOrThrowArgs} args - Arguments to find a CmsMediaItem
     * @example
     * // Get one CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmsMediaItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CmsMediaItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsMediaItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemFindFirstArgs} args - Arguments to find a CmsMediaItem
     * @example
     * // Get one CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmsMediaItemFindFirstArgs>(args?: SelectSubset<T, CmsMediaItemFindFirstArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmsMediaItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemFindFirstOrThrowArgs} args - Arguments to find a CmsMediaItem
     * @example
     * // Get one CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmsMediaItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CmsMediaItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmsMediaItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmsMediaItems
     * const cmsMediaItems = await prisma.cmsMediaItem.findMany()
     * 
     * // Get first 10 CmsMediaItems
     * const cmsMediaItems = await prisma.cmsMediaItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsMediaItemWithIdOnly = await prisma.cmsMediaItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmsMediaItemFindManyArgs>(args?: SelectSubset<T, CmsMediaItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmsMediaItem.
     * @param {CmsMediaItemCreateArgs} args - Arguments to create a CmsMediaItem.
     * @example
     * // Create one CmsMediaItem
     * const CmsMediaItem = await prisma.cmsMediaItem.create({
     *   data: {
     *     // ... data to create a CmsMediaItem
     *   }
     * })
     * 
     */
    create<T extends CmsMediaItemCreateArgs>(args: SelectSubset<T, CmsMediaItemCreateArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmsMediaItems.
     * @param {CmsMediaItemCreateManyArgs} args - Arguments to create many CmsMediaItems.
     * @example
     * // Create many CmsMediaItems
     * const cmsMediaItem = await prisma.cmsMediaItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmsMediaItemCreateManyArgs>(args?: SelectSubset<T, CmsMediaItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmsMediaItems and returns the data saved in the database.
     * @param {CmsMediaItemCreateManyAndReturnArgs} args - Arguments to create many CmsMediaItems.
     * @example
     * // Create many CmsMediaItems
     * const cmsMediaItem = await prisma.cmsMediaItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmsMediaItems and only return the `id`
     * const cmsMediaItemWithIdOnly = await prisma.cmsMediaItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmsMediaItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CmsMediaItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmsMediaItem.
     * @param {CmsMediaItemDeleteArgs} args - Arguments to delete one CmsMediaItem.
     * @example
     * // Delete one CmsMediaItem
     * const CmsMediaItem = await prisma.cmsMediaItem.delete({
     *   where: {
     *     // ... filter to delete one CmsMediaItem
     *   }
     * })
     * 
     */
    delete<T extends CmsMediaItemDeleteArgs>(args: SelectSubset<T, CmsMediaItemDeleteArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmsMediaItem.
     * @param {CmsMediaItemUpdateArgs} args - Arguments to update one CmsMediaItem.
     * @example
     * // Update one CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmsMediaItemUpdateArgs>(args: SelectSubset<T, CmsMediaItemUpdateArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmsMediaItems.
     * @param {CmsMediaItemDeleteManyArgs} args - Arguments to filter CmsMediaItems to delete.
     * @example
     * // Delete a few CmsMediaItems
     * const { count } = await prisma.cmsMediaItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmsMediaItemDeleteManyArgs>(args?: SelectSubset<T, CmsMediaItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsMediaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmsMediaItems
     * const cmsMediaItem = await prisma.cmsMediaItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmsMediaItemUpdateManyArgs>(args: SelectSubset<T, CmsMediaItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmsMediaItems and returns the data updated in the database.
     * @param {CmsMediaItemUpdateManyAndReturnArgs} args - Arguments to update many CmsMediaItems.
     * @example
     * // Update many CmsMediaItems
     * const cmsMediaItem = await prisma.cmsMediaItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmsMediaItems and only return the `id`
     * const cmsMediaItemWithIdOnly = await prisma.cmsMediaItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmsMediaItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CmsMediaItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmsMediaItem.
     * @param {CmsMediaItemUpsertArgs} args - Arguments to update or create a CmsMediaItem.
     * @example
     * // Update or create a CmsMediaItem
     * const cmsMediaItem = await prisma.cmsMediaItem.upsert({
     *   create: {
     *     // ... data to create a CmsMediaItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmsMediaItem we want to update
     *   }
     * })
     */
    upsert<T extends CmsMediaItemUpsertArgs>(args: SelectSubset<T, CmsMediaItemUpsertArgs<ExtArgs>>): Prisma__CmsMediaItemClient<$Result.GetResult<Prisma.$CmsMediaItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmsMediaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemCountArgs} args - Arguments to filter CmsMediaItems to count.
     * @example
     * // Count the number of CmsMediaItems
     * const count = await prisma.cmsMediaItem.count({
     *   where: {
     *     // ... the filter for the CmsMediaItems we want to count
     *   }
     * })
    **/
    count<T extends CmsMediaItemCountArgs>(
      args?: Subset<T, CmsMediaItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsMediaItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmsMediaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CmsMediaItemAggregateArgs>(args: Subset<T, CmsMediaItemAggregateArgs>): Prisma.PrismaPromise<GetCmsMediaItemAggregateType<T>>

    /**
     * Group by CmsMediaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsMediaItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CmsMediaItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmsMediaItemGroupByArgs['orderBy'] }
        : { orderBy?: CmsMediaItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CmsMediaItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsMediaItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmsMediaItem model
   */
  readonly fields: CmsMediaItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmsMediaItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmsMediaItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends CmsUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmsUserDefaultArgs<ExtArgs>>): Prisma__CmsUserClient<$Result.GetResult<Prisma.$CmsUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmsMediaItem model
   */
  interface CmsMediaItemFieldRefs {
    readonly id: FieldRef<"CmsMediaItem", 'Int'>
    readonly title: FieldRef<"CmsMediaItem", 'String'>
    readonly slug: FieldRef<"CmsMediaItem", 'String'>
    readonly description: FieldRef<"CmsMediaItem", 'String'>
    readonly mediaType: FieldRef<"CmsMediaItem", 'CmsMediaType'>
    readonly fileUrl: FieldRef<"CmsMediaItem", 'String'>
    readonly coverImage: FieldRef<"CmsMediaItem", 'String'>
    readonly region: FieldRef<"CmsMediaItem", 'CmsRegion'>
    readonly status: FieldRef<"CmsMediaItem", 'PublishStatus'>
    readonly publishedAt: FieldRef<"CmsMediaItem", 'DateTime'>
    readonly createdById: FieldRef<"CmsMediaItem", 'Int'>
    readonly updatedById: FieldRef<"CmsMediaItem", 'Int'>
    readonly createdAt: FieldRef<"CmsMediaItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CmsMediaItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CmsMediaItem findUnique
   */
  export type CmsMediaItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter, which CmsMediaItem to fetch.
     */
    where: CmsMediaItemWhereUniqueInput
  }

  /**
   * CmsMediaItem findUniqueOrThrow
   */
  export type CmsMediaItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter, which CmsMediaItem to fetch.
     */
    where: CmsMediaItemWhereUniqueInput
  }

  /**
   * CmsMediaItem findFirst
   */
  export type CmsMediaItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter, which CmsMediaItem to fetch.
     */
    where?: CmsMediaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsMediaItems to fetch.
     */
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsMediaItems.
     */
    cursor?: CmsMediaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsMediaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsMediaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsMediaItems.
     */
    distinct?: CmsMediaItemScalarFieldEnum | CmsMediaItemScalarFieldEnum[]
  }

  /**
   * CmsMediaItem findFirstOrThrow
   */
  export type CmsMediaItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter, which CmsMediaItem to fetch.
     */
    where?: CmsMediaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsMediaItems to fetch.
     */
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmsMediaItems.
     */
    cursor?: CmsMediaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsMediaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsMediaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsMediaItems.
     */
    distinct?: CmsMediaItemScalarFieldEnum | CmsMediaItemScalarFieldEnum[]
  }

  /**
   * CmsMediaItem findMany
   */
  export type CmsMediaItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter, which CmsMediaItems to fetch.
     */
    where?: CmsMediaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmsMediaItems to fetch.
     */
    orderBy?: CmsMediaItemOrderByWithRelationInput | CmsMediaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmsMediaItems.
     */
    cursor?: CmsMediaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmsMediaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmsMediaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmsMediaItems.
     */
    distinct?: CmsMediaItemScalarFieldEnum | CmsMediaItemScalarFieldEnum[]
  }

  /**
   * CmsMediaItem create
   */
  export type CmsMediaItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CmsMediaItem.
     */
    data: XOR<CmsMediaItemCreateInput, CmsMediaItemUncheckedCreateInput>
  }

  /**
   * CmsMediaItem createMany
   */
  export type CmsMediaItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmsMediaItems.
     */
    data: CmsMediaItemCreateManyInput | CmsMediaItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmsMediaItem createManyAndReturn
   */
  export type CmsMediaItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * The data used to create many CmsMediaItems.
     */
    data: CmsMediaItemCreateManyInput | CmsMediaItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsMediaItem update
   */
  export type CmsMediaItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CmsMediaItem.
     */
    data: XOR<CmsMediaItemUpdateInput, CmsMediaItemUncheckedUpdateInput>
    /**
     * Choose, which CmsMediaItem to update.
     */
    where: CmsMediaItemWhereUniqueInput
  }

  /**
   * CmsMediaItem updateMany
   */
  export type CmsMediaItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmsMediaItems.
     */
    data: XOR<CmsMediaItemUpdateManyMutationInput, CmsMediaItemUncheckedUpdateManyInput>
    /**
     * Filter which CmsMediaItems to update
     */
    where?: CmsMediaItemWhereInput
    /**
     * Limit how many CmsMediaItems to update.
     */
    limit?: number
  }

  /**
   * CmsMediaItem updateManyAndReturn
   */
  export type CmsMediaItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * The data used to update CmsMediaItems.
     */
    data: XOR<CmsMediaItemUpdateManyMutationInput, CmsMediaItemUncheckedUpdateManyInput>
    /**
     * Filter which CmsMediaItems to update
     */
    where?: CmsMediaItemWhereInput
    /**
     * Limit how many CmsMediaItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmsMediaItem upsert
   */
  export type CmsMediaItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CmsMediaItem to update in case it exists.
     */
    where: CmsMediaItemWhereUniqueInput
    /**
     * In case the CmsMediaItem found by the `where` argument doesn't exist, create a new CmsMediaItem with this data.
     */
    create: XOR<CmsMediaItemCreateInput, CmsMediaItemUncheckedCreateInput>
    /**
     * In case the CmsMediaItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmsMediaItemUpdateInput, CmsMediaItemUncheckedUpdateInput>
  }

  /**
   * CmsMediaItem delete
   */
  export type CmsMediaItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
    /**
     * Filter which CmsMediaItem to delete.
     */
    where: CmsMediaItemWhereUniqueInput
  }

  /**
   * CmsMediaItem deleteMany
   */
  export type CmsMediaItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmsMediaItems to delete
     */
    where?: CmsMediaItemWhereInput
    /**
     * Limit how many CmsMediaItems to delete.
     */
    limit?: number
  }

  /**
   * CmsMediaItem without action
   */
  export type CmsMediaItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsMediaItem
     */
    select?: CmsMediaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmsMediaItem
     */
    omit?: CmsMediaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmsMediaItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CmsUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    region: 'region',
    createdAt: 'createdAt'
  };

  export type CmsUserScalarFieldEnum = (typeof CmsUserScalarFieldEnum)[keyof typeof CmsUserScalarFieldEnum]


  export const CmsSessionScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type CmsSessionScalarFieldEnum = (typeof CmsSessionScalarFieldEnum)[keyof typeof CmsSessionScalarFieldEnum]


  export const CmsContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    contentType: 'contentType',
    category: 'category',
    level: 'level',
    region: 'region',
    body: 'body',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsContentScalarFieldEnum = (typeof CmsContentScalarFieldEnum)[keyof typeof CmsContentScalarFieldEnum]


  export const CmsAnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    richContent: 'richContent',
    coverImage: 'coverImage',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsAnnouncementScalarFieldEnum = (typeof CmsAnnouncementScalarFieldEnum)[keyof typeof CmsAnnouncementScalarFieldEnum]


  export const CmsNewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    richContent: 'richContent',
    coverImage: 'coverImage',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsNewsScalarFieldEnum = (typeof CmsNewsScalarFieldEnum)[keyof typeof CmsNewsScalarFieldEnum]


  export const CmsPressBreifingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    richContent: 'richContent',
    coverImage: 'coverImage',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsPressBreifingScalarFieldEnum = (typeof CmsPressBreifingScalarFieldEnum)[keyof typeof CmsPressBreifingScalarFieldEnum]


  export const CmsVideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    richContent: 'richContent',
    coverImage: 'coverImage',
    videoUrl: 'videoUrl',
    videoDuration: 'videoDuration',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsVideoScalarFieldEnum = (typeof CmsVideoScalarFieldEnum)[keyof typeof CmsVideoScalarFieldEnum]


  export const CmsBlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    richContent: 'richContent',
    coverImage: 'coverImage',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsBlogScalarFieldEnum = (typeof CmsBlogScalarFieldEnum)[keyof typeof CmsBlogScalarFieldEnum]


  export const CmsTeamMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    role: 'role',
    joined: 'joined',
    avatar: 'avatar',
    focus: 'focus',
    teamType: 'teamType',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsTeamMemberScalarFieldEnum = (typeof CmsTeamMemberScalarFieldEnum)[keyof typeof CmsTeamMemberScalarFieldEnum]


  export const CmsMediaItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    mediaType: 'mediaType',
    fileUrl: 'fileUrl',
    coverImage: 'coverImage',
    region: 'region',
    status: 'status',
    publishedAt: 'publishedAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CmsMediaItemScalarFieldEnum = (typeof CmsMediaItemScalarFieldEnum)[keyof typeof CmsMediaItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CmsRole'
   */
  export type EnumCmsRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsRole'>
    


  /**
   * Reference to a field of type 'CmsRole[]'
   */
  export type ListEnumCmsRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsRole[]'>
    


  /**
   * Reference to a field of type 'CmsRegion'
   */
  export type EnumCmsRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsRegion'>
    


  /**
   * Reference to a field of type 'CmsRegion[]'
   */
  export type ListEnumCmsRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsRegion[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CmsContentType'
   */
  export type EnumCmsContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsContentType'>
    


  /**
   * Reference to a field of type 'CmsContentType[]'
   */
  export type ListEnumCmsContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsContentType[]'>
    


  /**
   * Reference to a field of type 'CmsCategory'
   */
  export type EnumCmsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsCategory'>
    


  /**
   * Reference to a field of type 'CmsCategory[]'
   */
  export type ListEnumCmsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsCategory[]'>
    


  /**
   * Reference to a field of type 'CmsLevel'
   */
  export type EnumCmsLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsLevel'>
    


  /**
   * Reference to a field of type 'CmsLevel[]'
   */
  export type ListEnumCmsLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsLevel[]'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'CmsTeamType'
   */
  export type EnumCmsTeamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsTeamType'>
    


  /**
   * Reference to a field of type 'CmsTeamType[]'
   */
  export type ListEnumCmsTeamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsTeamType[]'>
    


  /**
   * Reference to a field of type 'CmsMediaType'
   */
  export type EnumCmsMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsMediaType'>
    


  /**
   * Reference to a field of type 'CmsMediaType[]'
   */
  export type ListEnumCmsMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CmsMediaType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CmsUserWhereInput = {
    AND?: CmsUserWhereInput | CmsUserWhereInput[]
    OR?: CmsUserWhereInput[]
    NOT?: CmsUserWhereInput | CmsUserWhereInput[]
    id?: IntFilter<"CmsUser"> | number
    name?: StringFilter<"CmsUser"> | string
    email?: StringFilter<"CmsUser"> | string
    passwordHash?: StringFilter<"CmsUser"> | string
    role?: EnumCmsRoleFilter<"CmsUser"> | $Enums.CmsRole
    region?: EnumCmsRegionFilter<"CmsUser"> | $Enums.CmsRegion
    createdAt?: DateTimeFilter<"CmsUser"> | Date | string
    sessions?: CmsSessionListRelationFilter
    createdContent?: CmsContentListRelationFilter
    updatedContent?: CmsContentListRelationFilter
    createdAnnouncements?: CmsAnnouncementListRelationFilter
    updatedAnnouncements?: CmsAnnouncementListRelationFilter
    createdNews?: CmsNewsListRelationFilter
    updatedNews?: CmsNewsListRelationFilter
    createdBriefings?: CmsPressBreifingListRelationFilter
    updatedBriefings?: CmsPressBreifingListRelationFilter
    createdVideos?: CmsVideoListRelationFilter
    updatedVideos?: CmsVideoListRelationFilter
    createdBlogs?: CmsBlogListRelationFilter
    updatedBlogs?: CmsBlogListRelationFilter
    createdTeams?: CmsTeamMemberListRelationFilter
    updatedTeams?: CmsTeamMemberListRelationFilter
    createdMedia?: CmsMediaItemListRelationFilter
    updatedMedia?: CmsMediaItemListRelationFilter
  }

  export type CmsUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    sessions?: CmsSessionOrderByRelationAggregateInput
    createdContent?: CmsContentOrderByRelationAggregateInput
    updatedContent?: CmsContentOrderByRelationAggregateInput
    createdAnnouncements?: CmsAnnouncementOrderByRelationAggregateInput
    updatedAnnouncements?: CmsAnnouncementOrderByRelationAggregateInput
    createdNews?: CmsNewsOrderByRelationAggregateInput
    updatedNews?: CmsNewsOrderByRelationAggregateInput
    createdBriefings?: CmsPressBreifingOrderByRelationAggregateInput
    updatedBriefings?: CmsPressBreifingOrderByRelationAggregateInput
    createdVideos?: CmsVideoOrderByRelationAggregateInput
    updatedVideos?: CmsVideoOrderByRelationAggregateInput
    createdBlogs?: CmsBlogOrderByRelationAggregateInput
    updatedBlogs?: CmsBlogOrderByRelationAggregateInput
    createdTeams?: CmsTeamMemberOrderByRelationAggregateInput
    updatedTeams?: CmsTeamMemberOrderByRelationAggregateInput
    createdMedia?: CmsMediaItemOrderByRelationAggregateInput
    updatedMedia?: CmsMediaItemOrderByRelationAggregateInput
  }

  export type CmsUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CmsUserWhereInput | CmsUserWhereInput[]
    OR?: CmsUserWhereInput[]
    NOT?: CmsUserWhereInput | CmsUserWhereInput[]
    name?: StringFilter<"CmsUser"> | string
    passwordHash?: StringFilter<"CmsUser"> | string
    role?: EnumCmsRoleFilter<"CmsUser"> | $Enums.CmsRole
    region?: EnumCmsRegionFilter<"CmsUser"> | $Enums.CmsRegion
    createdAt?: DateTimeFilter<"CmsUser"> | Date | string
    sessions?: CmsSessionListRelationFilter
    createdContent?: CmsContentListRelationFilter
    updatedContent?: CmsContentListRelationFilter
    createdAnnouncements?: CmsAnnouncementListRelationFilter
    updatedAnnouncements?: CmsAnnouncementListRelationFilter
    createdNews?: CmsNewsListRelationFilter
    updatedNews?: CmsNewsListRelationFilter
    createdBriefings?: CmsPressBreifingListRelationFilter
    updatedBriefings?: CmsPressBreifingListRelationFilter
    createdVideos?: CmsVideoListRelationFilter
    updatedVideos?: CmsVideoListRelationFilter
    createdBlogs?: CmsBlogListRelationFilter
    updatedBlogs?: CmsBlogListRelationFilter
    createdTeams?: CmsTeamMemberListRelationFilter
    updatedTeams?: CmsTeamMemberListRelationFilter
    createdMedia?: CmsMediaItemListRelationFilter
    updatedMedia?: CmsMediaItemListRelationFilter
  }, "id" | "email">

  export type CmsUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    _count?: CmsUserCountOrderByAggregateInput
    _avg?: CmsUserAvgOrderByAggregateInput
    _max?: CmsUserMaxOrderByAggregateInput
    _min?: CmsUserMinOrderByAggregateInput
    _sum?: CmsUserSumOrderByAggregateInput
  }

  export type CmsUserScalarWhereWithAggregatesInput = {
    AND?: CmsUserScalarWhereWithAggregatesInput | CmsUserScalarWhereWithAggregatesInput[]
    OR?: CmsUserScalarWhereWithAggregatesInput[]
    NOT?: CmsUserScalarWhereWithAggregatesInput | CmsUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsUser"> | number
    name?: StringWithAggregatesFilter<"CmsUser"> | string
    email?: StringWithAggregatesFilter<"CmsUser"> | string
    passwordHash?: StringWithAggregatesFilter<"CmsUser"> | string
    role?: EnumCmsRoleWithAggregatesFilter<"CmsUser"> | $Enums.CmsRole
    region?: EnumCmsRegionWithAggregatesFilter<"CmsUser"> | $Enums.CmsRegion
    createdAt?: DateTimeWithAggregatesFilter<"CmsUser"> | Date | string
  }

  export type CmsSessionWhereInput = {
    AND?: CmsSessionWhereInput | CmsSessionWhereInput[]
    OR?: CmsSessionWhereInput[]
    NOT?: CmsSessionWhereInput | CmsSessionWhereInput[]
    id?: IntFilter<"CmsSession"> | number
    tokenHash?: StringFilter<"CmsSession"> | string
    userId?: IntFilter<"CmsSession"> | number
    expiresAt?: DateTimeFilter<"CmsSession"> | Date | string
    createdAt?: DateTimeFilter<"CmsSession"> | Date | string
    user?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsSessionOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: CmsUserOrderByWithRelationInput
  }

  export type CmsSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tokenHash?: string
    AND?: CmsSessionWhereInput | CmsSessionWhereInput[]
    OR?: CmsSessionWhereInput[]
    NOT?: CmsSessionWhereInput | CmsSessionWhereInput[]
    userId?: IntFilter<"CmsSession"> | number
    expiresAt?: DateTimeFilter<"CmsSession"> | Date | string
    createdAt?: DateTimeFilter<"CmsSession"> | Date | string
    user?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "tokenHash">

  export type CmsSessionOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: CmsSessionCountOrderByAggregateInput
    _avg?: CmsSessionAvgOrderByAggregateInput
    _max?: CmsSessionMaxOrderByAggregateInput
    _min?: CmsSessionMinOrderByAggregateInput
    _sum?: CmsSessionSumOrderByAggregateInput
  }

  export type CmsSessionScalarWhereWithAggregatesInput = {
    AND?: CmsSessionScalarWhereWithAggregatesInput | CmsSessionScalarWhereWithAggregatesInput[]
    OR?: CmsSessionScalarWhereWithAggregatesInput[]
    NOT?: CmsSessionScalarWhereWithAggregatesInput | CmsSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsSession"> | number
    tokenHash?: StringWithAggregatesFilter<"CmsSession"> | string
    userId?: IntWithAggregatesFilter<"CmsSession"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"CmsSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CmsSession"> | Date | string
  }

  export type CmsContentWhereInput = {
    AND?: CmsContentWhereInput | CmsContentWhereInput[]
    OR?: CmsContentWhereInput[]
    NOT?: CmsContentWhereInput | CmsContentWhereInput[]
    id?: IntFilter<"CmsContent"> | number
    title?: StringFilter<"CmsContent"> | string
    slug?: StringFilter<"CmsContent"> | string
    contentType?: EnumCmsContentTypeFilter<"CmsContent"> | $Enums.CmsContentType
    category?: EnumCmsCategoryFilter<"CmsContent"> | $Enums.CmsCategory
    level?: EnumCmsLevelFilter<"CmsContent"> | $Enums.CmsLevel
    region?: EnumCmsRegionNullableFilter<"CmsContent"> | $Enums.CmsRegion | null
    body?: StringFilter<"CmsContent"> | string
    createdById?: IntFilter<"CmsContent"> | number
    updatedById?: IntFilter<"CmsContent"> | number
    createdAt?: DateTimeFilter<"CmsContent"> | Date | string
    updatedAt?: DateTimeFilter<"CmsContent"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    level?: SortOrder
    region?: SortOrderInput | SortOrder
    body?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsContentWhereInput | CmsContentWhereInput[]
    OR?: CmsContentWhereInput[]
    NOT?: CmsContentWhereInput | CmsContentWhereInput[]
    title?: StringFilter<"CmsContent"> | string
    contentType?: EnumCmsContentTypeFilter<"CmsContent"> | $Enums.CmsContentType
    category?: EnumCmsCategoryFilter<"CmsContent"> | $Enums.CmsCategory
    level?: EnumCmsLevelFilter<"CmsContent"> | $Enums.CmsLevel
    region?: EnumCmsRegionNullableFilter<"CmsContent"> | $Enums.CmsRegion | null
    body?: StringFilter<"CmsContent"> | string
    createdById?: IntFilter<"CmsContent"> | number
    updatedById?: IntFilter<"CmsContent"> | number
    createdAt?: DateTimeFilter<"CmsContent"> | Date | string
    updatedAt?: DateTimeFilter<"CmsContent"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    level?: SortOrder
    region?: SortOrderInput | SortOrder
    body?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsContentCountOrderByAggregateInput
    _avg?: CmsContentAvgOrderByAggregateInput
    _max?: CmsContentMaxOrderByAggregateInput
    _min?: CmsContentMinOrderByAggregateInput
    _sum?: CmsContentSumOrderByAggregateInput
  }

  export type CmsContentScalarWhereWithAggregatesInput = {
    AND?: CmsContentScalarWhereWithAggregatesInput | CmsContentScalarWhereWithAggregatesInput[]
    OR?: CmsContentScalarWhereWithAggregatesInput[]
    NOT?: CmsContentScalarWhereWithAggregatesInput | CmsContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsContent"> | number
    title?: StringWithAggregatesFilter<"CmsContent"> | string
    slug?: StringWithAggregatesFilter<"CmsContent"> | string
    contentType?: EnumCmsContentTypeWithAggregatesFilter<"CmsContent"> | $Enums.CmsContentType
    category?: EnumCmsCategoryWithAggregatesFilter<"CmsContent"> | $Enums.CmsCategory
    level?: EnumCmsLevelWithAggregatesFilter<"CmsContent"> | $Enums.CmsLevel
    region?: EnumCmsRegionNullableWithAggregatesFilter<"CmsContent"> | $Enums.CmsRegion | null
    body?: StringWithAggregatesFilter<"CmsContent"> | string
    createdById?: IntWithAggregatesFilter<"CmsContent"> | number
    updatedById?: IntWithAggregatesFilter<"CmsContent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsContent"> | Date | string
  }

  export type CmsAnnouncementWhereInput = {
    AND?: CmsAnnouncementWhereInput | CmsAnnouncementWhereInput[]
    OR?: CmsAnnouncementWhereInput[]
    NOT?: CmsAnnouncementWhereInput | CmsAnnouncementWhereInput[]
    id?: IntFilter<"CmsAnnouncement"> | number
    title?: StringFilter<"CmsAnnouncement"> | string
    slug?: StringFilter<"CmsAnnouncement"> | string
    excerpt?: StringFilter<"CmsAnnouncement"> | string
    richContent?: StringFilter<"CmsAnnouncement"> | string
    coverImage?: StringNullableFilter<"CmsAnnouncement"> | string | null
    region?: EnumCmsRegionFilter<"CmsAnnouncement"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsAnnouncement"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsAnnouncement"> | Date | string | null
    createdById?: IntFilter<"CmsAnnouncement"> | number
    updatedById?: IntFilter<"CmsAnnouncement"> | number
    createdAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsAnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsAnnouncementWhereInput | CmsAnnouncementWhereInput[]
    OR?: CmsAnnouncementWhereInput[]
    NOT?: CmsAnnouncementWhereInput | CmsAnnouncementWhereInput[]
    title?: StringFilter<"CmsAnnouncement"> | string
    excerpt?: StringFilter<"CmsAnnouncement"> | string
    richContent?: StringFilter<"CmsAnnouncement"> | string
    coverImage?: StringNullableFilter<"CmsAnnouncement"> | string | null
    region?: EnumCmsRegionFilter<"CmsAnnouncement"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsAnnouncement"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsAnnouncement"> | Date | string | null
    createdById?: IntFilter<"CmsAnnouncement"> | number
    updatedById?: IntFilter<"CmsAnnouncement"> | number
    createdAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsAnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsAnnouncementCountOrderByAggregateInput
    _avg?: CmsAnnouncementAvgOrderByAggregateInput
    _max?: CmsAnnouncementMaxOrderByAggregateInput
    _min?: CmsAnnouncementMinOrderByAggregateInput
    _sum?: CmsAnnouncementSumOrderByAggregateInput
  }

  export type CmsAnnouncementScalarWhereWithAggregatesInput = {
    AND?: CmsAnnouncementScalarWhereWithAggregatesInput | CmsAnnouncementScalarWhereWithAggregatesInput[]
    OR?: CmsAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: CmsAnnouncementScalarWhereWithAggregatesInput | CmsAnnouncementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsAnnouncement"> | number
    title?: StringWithAggregatesFilter<"CmsAnnouncement"> | string
    slug?: StringWithAggregatesFilter<"CmsAnnouncement"> | string
    excerpt?: StringWithAggregatesFilter<"CmsAnnouncement"> | string
    richContent?: StringWithAggregatesFilter<"CmsAnnouncement"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsAnnouncement"> | string | null
    region?: EnumCmsRegionWithAggregatesFilter<"CmsAnnouncement"> | $Enums.CmsRegion
    status?: EnumPublishStatusWithAggregatesFilter<"CmsAnnouncement"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsAnnouncement"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsAnnouncement"> | number
    updatedById?: IntWithAggregatesFilter<"CmsAnnouncement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsAnnouncement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsAnnouncement"> | Date | string
  }

  export type CmsNewsWhereInput = {
    AND?: CmsNewsWhereInput | CmsNewsWhereInput[]
    OR?: CmsNewsWhereInput[]
    NOT?: CmsNewsWhereInput | CmsNewsWhereInput[]
    id?: IntFilter<"CmsNews"> | number
    title?: StringFilter<"CmsNews"> | string
    slug?: StringFilter<"CmsNews"> | string
    excerpt?: StringFilter<"CmsNews"> | string
    richContent?: StringFilter<"CmsNews"> | string
    coverImage?: StringNullableFilter<"CmsNews"> | string | null
    region?: EnumCmsRegionFilter<"CmsNews"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsNews"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsNews"> | Date | string | null
    createdById?: IntFilter<"CmsNews"> | number
    updatedById?: IntFilter<"CmsNews"> | number
    createdAt?: DateTimeFilter<"CmsNews"> | Date | string
    updatedAt?: DateTimeFilter<"CmsNews"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsNewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsNewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsNewsWhereInput | CmsNewsWhereInput[]
    OR?: CmsNewsWhereInput[]
    NOT?: CmsNewsWhereInput | CmsNewsWhereInput[]
    title?: StringFilter<"CmsNews"> | string
    excerpt?: StringFilter<"CmsNews"> | string
    richContent?: StringFilter<"CmsNews"> | string
    coverImage?: StringNullableFilter<"CmsNews"> | string | null
    region?: EnumCmsRegionFilter<"CmsNews"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsNews"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsNews"> | Date | string | null
    createdById?: IntFilter<"CmsNews"> | number
    updatedById?: IntFilter<"CmsNews"> | number
    createdAt?: DateTimeFilter<"CmsNews"> | Date | string
    updatedAt?: DateTimeFilter<"CmsNews"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsNewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsNewsCountOrderByAggregateInput
    _avg?: CmsNewsAvgOrderByAggregateInput
    _max?: CmsNewsMaxOrderByAggregateInput
    _min?: CmsNewsMinOrderByAggregateInput
    _sum?: CmsNewsSumOrderByAggregateInput
  }

  export type CmsNewsScalarWhereWithAggregatesInput = {
    AND?: CmsNewsScalarWhereWithAggregatesInput | CmsNewsScalarWhereWithAggregatesInput[]
    OR?: CmsNewsScalarWhereWithAggregatesInput[]
    NOT?: CmsNewsScalarWhereWithAggregatesInput | CmsNewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsNews"> | number
    title?: StringWithAggregatesFilter<"CmsNews"> | string
    slug?: StringWithAggregatesFilter<"CmsNews"> | string
    excerpt?: StringWithAggregatesFilter<"CmsNews"> | string
    richContent?: StringWithAggregatesFilter<"CmsNews"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsNews"> | string | null
    region?: EnumCmsRegionWithAggregatesFilter<"CmsNews"> | $Enums.CmsRegion
    status?: EnumPublishStatusWithAggregatesFilter<"CmsNews"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsNews"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsNews"> | number
    updatedById?: IntWithAggregatesFilter<"CmsNews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsNews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsNews"> | Date | string
  }

  export type CmsPressBreifingWhereInput = {
    AND?: CmsPressBreifingWhereInput | CmsPressBreifingWhereInput[]
    OR?: CmsPressBreifingWhereInput[]
    NOT?: CmsPressBreifingWhereInput | CmsPressBreifingWhereInput[]
    id?: IntFilter<"CmsPressBreifing"> | number
    title?: StringFilter<"CmsPressBreifing"> | string
    slug?: StringFilter<"CmsPressBreifing"> | string
    excerpt?: StringFilter<"CmsPressBreifing"> | string
    richContent?: StringFilter<"CmsPressBreifing"> | string
    coverImage?: StringNullableFilter<"CmsPressBreifing"> | string | null
    region?: EnumCmsRegionFilter<"CmsPressBreifing"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsPressBreifing"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsPressBreifing"> | Date | string | null
    createdById?: IntFilter<"CmsPressBreifing"> | number
    updatedById?: IntFilter<"CmsPressBreifing"> | number
    createdAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsPressBreifingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsPressBreifingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsPressBreifingWhereInput | CmsPressBreifingWhereInput[]
    OR?: CmsPressBreifingWhereInput[]
    NOT?: CmsPressBreifingWhereInput | CmsPressBreifingWhereInput[]
    title?: StringFilter<"CmsPressBreifing"> | string
    excerpt?: StringFilter<"CmsPressBreifing"> | string
    richContent?: StringFilter<"CmsPressBreifing"> | string
    coverImage?: StringNullableFilter<"CmsPressBreifing"> | string | null
    region?: EnumCmsRegionFilter<"CmsPressBreifing"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsPressBreifing"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsPressBreifing"> | Date | string | null
    createdById?: IntFilter<"CmsPressBreifing"> | number
    updatedById?: IntFilter<"CmsPressBreifing"> | number
    createdAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsPressBreifingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsPressBreifingCountOrderByAggregateInput
    _avg?: CmsPressBreifingAvgOrderByAggregateInput
    _max?: CmsPressBreifingMaxOrderByAggregateInput
    _min?: CmsPressBreifingMinOrderByAggregateInput
    _sum?: CmsPressBreifingSumOrderByAggregateInput
  }

  export type CmsPressBreifingScalarWhereWithAggregatesInput = {
    AND?: CmsPressBreifingScalarWhereWithAggregatesInput | CmsPressBreifingScalarWhereWithAggregatesInput[]
    OR?: CmsPressBreifingScalarWhereWithAggregatesInput[]
    NOT?: CmsPressBreifingScalarWhereWithAggregatesInput | CmsPressBreifingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsPressBreifing"> | number
    title?: StringWithAggregatesFilter<"CmsPressBreifing"> | string
    slug?: StringWithAggregatesFilter<"CmsPressBreifing"> | string
    excerpt?: StringWithAggregatesFilter<"CmsPressBreifing"> | string
    richContent?: StringWithAggregatesFilter<"CmsPressBreifing"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsPressBreifing"> | string | null
    region?: EnumCmsRegionWithAggregatesFilter<"CmsPressBreifing"> | $Enums.CmsRegion
    status?: EnumPublishStatusWithAggregatesFilter<"CmsPressBreifing"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsPressBreifing"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsPressBreifing"> | number
    updatedById?: IntWithAggregatesFilter<"CmsPressBreifing"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsPressBreifing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsPressBreifing"> | Date | string
  }

  export type CmsVideoWhereInput = {
    AND?: CmsVideoWhereInput | CmsVideoWhereInput[]
    OR?: CmsVideoWhereInput[]
    NOT?: CmsVideoWhereInput | CmsVideoWhereInput[]
    id?: IntFilter<"CmsVideo"> | number
    title?: StringFilter<"CmsVideo"> | string
    slug?: StringFilter<"CmsVideo"> | string
    excerpt?: StringFilter<"CmsVideo"> | string
    richContent?: StringFilter<"CmsVideo"> | string
    coverImage?: StringNullableFilter<"CmsVideo"> | string | null
    videoUrl?: StringFilter<"CmsVideo"> | string
    videoDuration?: IntNullableFilter<"CmsVideo"> | number | null
    region?: EnumCmsRegionFilter<"CmsVideo"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsVideo"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsVideo"> | Date | string | null
    createdById?: IntFilter<"CmsVideo"> | number
    updatedById?: IntFilter<"CmsVideo"> | number
    createdAt?: DateTimeFilter<"CmsVideo"> | Date | string
    updatedAt?: DateTimeFilter<"CmsVideo"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsVideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    videoDuration?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsVideoWhereInput | CmsVideoWhereInput[]
    OR?: CmsVideoWhereInput[]
    NOT?: CmsVideoWhereInput | CmsVideoWhereInput[]
    title?: StringFilter<"CmsVideo"> | string
    excerpt?: StringFilter<"CmsVideo"> | string
    richContent?: StringFilter<"CmsVideo"> | string
    coverImage?: StringNullableFilter<"CmsVideo"> | string | null
    videoUrl?: StringFilter<"CmsVideo"> | string
    videoDuration?: IntNullableFilter<"CmsVideo"> | number | null
    region?: EnumCmsRegionFilter<"CmsVideo"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsVideo"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsVideo"> | Date | string | null
    createdById?: IntFilter<"CmsVideo"> | number
    updatedById?: IntFilter<"CmsVideo"> | number
    createdAt?: DateTimeFilter<"CmsVideo"> | Date | string
    updatedAt?: DateTimeFilter<"CmsVideo"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsVideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    videoDuration?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsVideoCountOrderByAggregateInput
    _avg?: CmsVideoAvgOrderByAggregateInput
    _max?: CmsVideoMaxOrderByAggregateInput
    _min?: CmsVideoMinOrderByAggregateInput
    _sum?: CmsVideoSumOrderByAggregateInput
  }

  export type CmsVideoScalarWhereWithAggregatesInput = {
    AND?: CmsVideoScalarWhereWithAggregatesInput | CmsVideoScalarWhereWithAggregatesInput[]
    OR?: CmsVideoScalarWhereWithAggregatesInput[]
    NOT?: CmsVideoScalarWhereWithAggregatesInput | CmsVideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsVideo"> | number
    title?: StringWithAggregatesFilter<"CmsVideo"> | string
    slug?: StringWithAggregatesFilter<"CmsVideo"> | string
    excerpt?: StringWithAggregatesFilter<"CmsVideo"> | string
    richContent?: StringWithAggregatesFilter<"CmsVideo"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsVideo"> | string | null
    videoUrl?: StringWithAggregatesFilter<"CmsVideo"> | string
    videoDuration?: IntNullableWithAggregatesFilter<"CmsVideo"> | number | null
    region?: EnumCmsRegionWithAggregatesFilter<"CmsVideo"> | $Enums.CmsRegion
    status?: EnumPublishStatusWithAggregatesFilter<"CmsVideo"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsVideo"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsVideo"> | number
    updatedById?: IntWithAggregatesFilter<"CmsVideo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsVideo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsVideo"> | Date | string
  }

  export type CmsBlogWhereInput = {
    AND?: CmsBlogWhereInput | CmsBlogWhereInput[]
    OR?: CmsBlogWhereInput[]
    NOT?: CmsBlogWhereInput | CmsBlogWhereInput[]
    id?: IntFilter<"CmsBlog"> | number
    title?: StringFilter<"CmsBlog"> | string
    slug?: StringFilter<"CmsBlog"> | string
    excerpt?: StringFilter<"CmsBlog"> | string
    richContent?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    region?: EnumCmsRegionFilter<"CmsBlog"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsBlog"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    createdById?: IntFilter<"CmsBlog"> | number
    updatedById?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsBlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsBlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsBlogWhereInput | CmsBlogWhereInput[]
    OR?: CmsBlogWhereInput[]
    NOT?: CmsBlogWhereInput | CmsBlogWhereInput[]
    title?: StringFilter<"CmsBlog"> | string
    excerpt?: StringFilter<"CmsBlog"> | string
    richContent?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    region?: EnumCmsRegionFilter<"CmsBlog"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsBlog"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    createdById?: IntFilter<"CmsBlog"> | number
    updatedById?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsBlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsBlogCountOrderByAggregateInput
    _avg?: CmsBlogAvgOrderByAggregateInput
    _max?: CmsBlogMaxOrderByAggregateInput
    _min?: CmsBlogMinOrderByAggregateInput
    _sum?: CmsBlogSumOrderByAggregateInput
  }

  export type CmsBlogScalarWhereWithAggregatesInput = {
    AND?: CmsBlogScalarWhereWithAggregatesInput | CmsBlogScalarWhereWithAggregatesInput[]
    OR?: CmsBlogScalarWhereWithAggregatesInput[]
    NOT?: CmsBlogScalarWhereWithAggregatesInput | CmsBlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsBlog"> | number
    title?: StringWithAggregatesFilter<"CmsBlog"> | string
    slug?: StringWithAggregatesFilter<"CmsBlog"> | string
    excerpt?: StringWithAggregatesFilter<"CmsBlog"> | string
    richContent?: StringWithAggregatesFilter<"CmsBlog"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsBlog"> | string | null
    region?: EnumCmsRegionWithAggregatesFilter<"CmsBlog"> | $Enums.CmsRegion
    status?: EnumPublishStatusWithAggregatesFilter<"CmsBlog"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsBlog"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsBlog"> | number
    updatedById?: IntWithAggregatesFilter<"CmsBlog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsBlog"> | Date | string
  }

  export type CmsTeamMemberWhereInput = {
    AND?: CmsTeamMemberWhereInput | CmsTeamMemberWhereInput[]
    OR?: CmsTeamMemberWhereInput[]
    NOT?: CmsTeamMemberWhereInput | CmsTeamMemberWhereInput[]
    id?: IntFilter<"CmsTeamMember"> | number
    name?: StringFilter<"CmsTeamMember"> | string
    slug?: StringFilter<"CmsTeamMember"> | string
    role?: StringFilter<"CmsTeamMember"> | string
    joined?: StringNullableFilter<"CmsTeamMember"> | string | null
    avatar?: StringNullableFilter<"CmsTeamMember"> | string | null
    focus?: StringFilter<"CmsTeamMember"> | string
    teamType?: EnumCmsTeamTypeFilter<"CmsTeamMember"> | $Enums.CmsTeamType
    region?: EnumCmsRegionNullableFilter<"CmsTeamMember"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsTeamMember"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsTeamMember"> | Date | string | null
    createdById?: IntFilter<"CmsTeamMember"> | number
    updatedById?: IntFilter<"CmsTeamMember"> | number
    createdAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsTeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    role?: SortOrder
    joined?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    focus?: SortOrder
    teamType?: SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsTeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsTeamMemberWhereInput | CmsTeamMemberWhereInput[]
    OR?: CmsTeamMemberWhereInput[]
    NOT?: CmsTeamMemberWhereInput | CmsTeamMemberWhereInput[]
    name?: StringFilter<"CmsTeamMember"> | string
    role?: StringFilter<"CmsTeamMember"> | string
    joined?: StringNullableFilter<"CmsTeamMember"> | string | null
    avatar?: StringNullableFilter<"CmsTeamMember"> | string | null
    focus?: StringFilter<"CmsTeamMember"> | string
    teamType?: EnumCmsTeamTypeFilter<"CmsTeamMember"> | $Enums.CmsTeamType
    region?: EnumCmsRegionNullableFilter<"CmsTeamMember"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsTeamMember"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsTeamMember"> | Date | string | null
    createdById?: IntFilter<"CmsTeamMember"> | number
    updatedById?: IntFilter<"CmsTeamMember"> | number
    createdAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsTeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    role?: SortOrder
    joined?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    focus?: SortOrder
    teamType?: SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsTeamMemberCountOrderByAggregateInput
    _avg?: CmsTeamMemberAvgOrderByAggregateInput
    _max?: CmsTeamMemberMaxOrderByAggregateInput
    _min?: CmsTeamMemberMinOrderByAggregateInput
    _sum?: CmsTeamMemberSumOrderByAggregateInput
  }

  export type CmsTeamMemberScalarWhereWithAggregatesInput = {
    AND?: CmsTeamMemberScalarWhereWithAggregatesInput | CmsTeamMemberScalarWhereWithAggregatesInput[]
    OR?: CmsTeamMemberScalarWhereWithAggregatesInput[]
    NOT?: CmsTeamMemberScalarWhereWithAggregatesInput | CmsTeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsTeamMember"> | number
    name?: StringWithAggregatesFilter<"CmsTeamMember"> | string
    slug?: StringWithAggregatesFilter<"CmsTeamMember"> | string
    role?: StringWithAggregatesFilter<"CmsTeamMember"> | string
    joined?: StringNullableWithAggregatesFilter<"CmsTeamMember"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CmsTeamMember"> | string | null
    focus?: StringWithAggregatesFilter<"CmsTeamMember"> | string
    teamType?: EnumCmsTeamTypeWithAggregatesFilter<"CmsTeamMember"> | $Enums.CmsTeamType
    region?: EnumCmsRegionNullableWithAggregatesFilter<"CmsTeamMember"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusWithAggregatesFilter<"CmsTeamMember"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsTeamMember"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsTeamMember"> | number
    updatedById?: IntWithAggregatesFilter<"CmsTeamMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsTeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsTeamMember"> | Date | string
  }

  export type CmsMediaItemWhereInput = {
    AND?: CmsMediaItemWhereInput | CmsMediaItemWhereInput[]
    OR?: CmsMediaItemWhereInput[]
    NOT?: CmsMediaItemWhereInput | CmsMediaItemWhereInput[]
    id?: IntFilter<"CmsMediaItem"> | number
    title?: StringFilter<"CmsMediaItem"> | string
    slug?: StringFilter<"CmsMediaItem"> | string
    description?: StringNullableFilter<"CmsMediaItem"> | string | null
    mediaType?: EnumCmsMediaTypeFilter<"CmsMediaItem"> | $Enums.CmsMediaType
    fileUrl?: StringFilter<"CmsMediaItem"> | string
    coverImage?: StringNullableFilter<"CmsMediaItem"> | string | null
    region?: EnumCmsRegionNullableFilter<"CmsMediaItem"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsMediaItem"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsMediaItem"> | Date | string | null
    createdById?: IntFilter<"CmsMediaItem"> | number
    updatedById?: IntFilter<"CmsMediaItem"> | number
    createdAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
    updatedAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }

  export type CmsMediaItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    fileUrl?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: CmsUserOrderByWithRelationInput
    updatedBy?: CmsUserOrderByWithRelationInput
  }

  export type CmsMediaItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CmsMediaItemWhereInput | CmsMediaItemWhereInput[]
    OR?: CmsMediaItemWhereInput[]
    NOT?: CmsMediaItemWhereInput | CmsMediaItemWhereInput[]
    title?: StringFilter<"CmsMediaItem"> | string
    description?: StringNullableFilter<"CmsMediaItem"> | string | null
    mediaType?: EnumCmsMediaTypeFilter<"CmsMediaItem"> | $Enums.CmsMediaType
    fileUrl?: StringFilter<"CmsMediaItem"> | string
    coverImage?: StringNullableFilter<"CmsMediaItem"> | string | null
    region?: EnumCmsRegionNullableFilter<"CmsMediaItem"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsMediaItem"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsMediaItem"> | Date | string | null
    createdById?: IntFilter<"CmsMediaItem"> | number
    updatedById?: IntFilter<"CmsMediaItem"> | number
    createdAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
    updatedAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
    createdBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
    updatedBy?: XOR<CmsUserScalarRelationFilter, CmsUserWhereInput>
  }, "id" | "slug">

  export type CmsMediaItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    mediaType?: SortOrder
    fileUrl?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CmsMediaItemCountOrderByAggregateInput
    _avg?: CmsMediaItemAvgOrderByAggregateInput
    _max?: CmsMediaItemMaxOrderByAggregateInput
    _min?: CmsMediaItemMinOrderByAggregateInput
    _sum?: CmsMediaItemSumOrderByAggregateInput
  }

  export type CmsMediaItemScalarWhereWithAggregatesInput = {
    AND?: CmsMediaItemScalarWhereWithAggregatesInput | CmsMediaItemScalarWhereWithAggregatesInput[]
    OR?: CmsMediaItemScalarWhereWithAggregatesInput[]
    NOT?: CmsMediaItemScalarWhereWithAggregatesInput | CmsMediaItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CmsMediaItem"> | number
    title?: StringWithAggregatesFilter<"CmsMediaItem"> | string
    slug?: StringWithAggregatesFilter<"CmsMediaItem"> | string
    description?: StringNullableWithAggregatesFilter<"CmsMediaItem"> | string | null
    mediaType?: EnumCmsMediaTypeWithAggregatesFilter<"CmsMediaItem"> | $Enums.CmsMediaType
    fileUrl?: StringWithAggregatesFilter<"CmsMediaItem"> | string
    coverImage?: StringNullableWithAggregatesFilter<"CmsMediaItem"> | string | null
    region?: EnumCmsRegionNullableWithAggregatesFilter<"CmsMediaItem"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusWithAggregatesFilter<"CmsMediaItem"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"CmsMediaItem"> | Date | string | null
    createdById?: IntWithAggregatesFilter<"CmsMediaItem"> | number
    updatedById?: IntWithAggregatesFilter<"CmsMediaItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CmsMediaItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CmsMediaItem"> | Date | string
  }

  export type CmsUserCreateInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
  }

  export type CmsUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSessionCreateInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: CmsUserCreateNestedOneWithoutSessionsInput
  }

  export type CmsSessionUncheckedCreateInput = {
    id?: number
    tokenHash: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CmsSessionUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: CmsUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type CmsSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSessionCreateManyInput = {
    id?: number
    tokenHash: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CmsSessionUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentCreateInput = {
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedContentInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedContentInput
  }

  export type CmsContentUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsContentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedContentNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedContentNestedInput
  }

  export type CmsContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentCreateManyInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsContentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementCreateInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedAnnouncementsInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedAnnouncementsInput
  }

  export type CmsAnnouncementUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedAnnouncementsNestedInput
  }

  export type CmsAnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsCreateInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedNewsInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedNewsInput
  }

  export type CmsNewsUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedNewsNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedNewsNestedInput
  }

  export type CmsNewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingCreateInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedBriefingsInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedBriefingsInput
  }

  export type CmsPressBreifingUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedBriefingsNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedBriefingsNestedInput
  }

  export type CmsPressBreifingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoCreateInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedVideosInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedVideosInput
  }

  export type CmsVideoUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedVideosNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedVideosNestedInput
  }

  export type CmsVideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogCreateInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedBlogsInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedBlogsInput
  }

  export type CmsBlogUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedBlogsNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogCreateManyInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberCreateInput = {
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedTeamsInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedTeamsInput
  }

  export type CmsTeamMemberUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedTeamsNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedTeamsNestedInput
  }

  export type CmsTeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberCreateManyInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemCreateInput = {
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedMediaInput
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedMediaInput
  }

  export type CmsMediaItemUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedMediaNestedInput
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedMediaNestedInput
  }

  export type CmsMediaItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemCreateManyInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumCmsRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRole | EnumCmsRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRoleFilter<$PrismaModel> | $Enums.CmsRole
  }

  export type EnumCmsRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRegionFilter<$PrismaModel> | $Enums.CmsRegion
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CmsSessionListRelationFilter = {
    every?: CmsSessionWhereInput
    some?: CmsSessionWhereInput
    none?: CmsSessionWhereInput
  }

  export type CmsContentListRelationFilter = {
    every?: CmsContentWhereInput
    some?: CmsContentWhereInput
    none?: CmsContentWhereInput
  }

  export type CmsAnnouncementListRelationFilter = {
    every?: CmsAnnouncementWhereInput
    some?: CmsAnnouncementWhereInput
    none?: CmsAnnouncementWhereInput
  }

  export type CmsNewsListRelationFilter = {
    every?: CmsNewsWhereInput
    some?: CmsNewsWhereInput
    none?: CmsNewsWhereInput
  }

  export type CmsPressBreifingListRelationFilter = {
    every?: CmsPressBreifingWhereInput
    some?: CmsPressBreifingWhereInput
    none?: CmsPressBreifingWhereInput
  }

  export type CmsVideoListRelationFilter = {
    every?: CmsVideoWhereInput
    some?: CmsVideoWhereInput
    none?: CmsVideoWhereInput
  }

  export type CmsBlogListRelationFilter = {
    every?: CmsBlogWhereInput
    some?: CmsBlogWhereInput
    none?: CmsBlogWhereInput
  }

  export type CmsTeamMemberListRelationFilter = {
    every?: CmsTeamMemberWhereInput
    some?: CmsTeamMemberWhereInput
    none?: CmsTeamMemberWhereInput
  }

  export type CmsMediaItemListRelationFilter = {
    every?: CmsMediaItemWhereInput
    some?: CmsMediaItemWhereInput
    none?: CmsMediaItemWhereInput
  }

  export type CmsSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsNewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsPressBreifingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsBlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsTeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsMediaItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmsUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumCmsRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRole | EnumCmsRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRoleWithAggregatesFilter<$PrismaModel> | $Enums.CmsRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsRoleFilter<$PrismaModel>
    _max?: NestedEnumCmsRoleFilter<$PrismaModel>
  }

  export type EnumCmsRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRegionWithAggregatesFilter<$PrismaModel> | $Enums.CmsRegion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsRegionFilter<$PrismaModel>
    _max?: NestedEnumCmsRegionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CmsUserScalarRelationFilter = {
    is?: CmsUserWhereInput
    isNot?: CmsUserWhereInput
  }

  export type CmsSessionCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CmsSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsSessionMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CmsSessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumCmsContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsContentType | EnumCmsContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsContentTypeFilter<$PrismaModel> | $Enums.CmsContentType
  }

  export type EnumCmsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsCategory | EnumCmsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsCategoryFilter<$PrismaModel> | $Enums.CmsCategory
  }

  export type EnumCmsLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsLevel | EnumCmsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsLevelFilter<$PrismaModel> | $Enums.CmsLevel
  }

  export type EnumCmsRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCmsRegionNullableFilter<$PrismaModel> | $Enums.CmsRegion | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CmsContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    level?: SortOrder
    region?: SortOrder
    body?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsContentAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    level?: SortOrder
    region?: SortOrder
    body?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    contentType?: SortOrder
    category?: SortOrder
    level?: SortOrder
    region?: SortOrder
    body?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsContentSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type EnumCmsContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsContentType | EnumCmsContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsContentTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsContentTypeFilter<$PrismaModel>
  }

  export type EnumCmsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsCategory | EnumCmsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CmsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsCategoryFilter<$PrismaModel>
    _max?: NestedEnumCmsCategoryFilter<$PrismaModel>
  }

  export type EnumCmsLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsLevel | EnumCmsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsLevelWithAggregatesFilter<$PrismaModel> | $Enums.CmsLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsLevelFilter<$PrismaModel>
    _max?: NestedEnumCmsLevelFilter<$PrismaModel>
  }

  export type EnumCmsRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCmsRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.CmsRegion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCmsRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumCmsRegionNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CmsAnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsAnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsAnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CmsNewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsNewsAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsNewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsNewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsNewsSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsPressBreifingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPressBreifingAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsPressBreifingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPressBreifingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsPressBreifingSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CmsVideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    videoUrl?: SortOrder
    videoDuration?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsVideoAvgOrderByAggregateInput = {
    id?: SortOrder
    videoDuration?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    videoUrl?: SortOrder
    videoDuration?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsVideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    videoUrl?: SortOrder
    videoDuration?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsVideoSumOrderByAggregateInput = {
    id?: SortOrder
    videoDuration?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CmsBlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBlogAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsBlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    richContent?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsBlogSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type EnumCmsTeamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsTeamType | EnumCmsTeamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsTeamTypeFilter<$PrismaModel> | $Enums.CmsTeamType
  }

  export type CmsTeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    role?: SortOrder
    joined?: SortOrder
    avatar?: SortOrder
    focus?: SortOrder
    teamType?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsTeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    role?: SortOrder
    joined?: SortOrder
    avatar?: SortOrder
    focus?: SortOrder
    teamType?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    role?: SortOrder
    joined?: SortOrder
    avatar?: SortOrder
    focus?: SortOrder
    teamType?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsTeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type EnumCmsTeamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsTeamType | EnumCmsTeamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsTeamTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsTeamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsTeamTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsTeamTypeFilter<$PrismaModel>
  }

  export type EnumCmsMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsMediaType | EnumCmsMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsMediaTypeFilter<$PrismaModel> | $Enums.CmsMediaType
  }

  export type CmsMediaItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    fileUrl?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsMediaItemAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type CmsMediaItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    fileUrl?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsMediaItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    fileUrl?: SortOrder
    coverImage?: SortOrder
    region?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CmsMediaItemSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type EnumCmsMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsMediaType | EnumCmsMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsMediaTypeFilter<$PrismaModel>
  }

  export type CmsSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput> | CmsSessionCreateWithoutUserInput[] | CmsSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CmsSessionCreateOrConnectWithoutUserInput | CmsSessionCreateOrConnectWithoutUserInput[]
    createMany?: CmsSessionCreateManyUserInputEnvelope
    connect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
  }

  export type CmsContentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput> | CmsContentCreateWithoutCreatedByInput[] | CmsContentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutCreatedByInput | CmsContentCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsContentCreateManyCreatedByInputEnvelope
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
  }

  export type CmsContentCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput> | CmsContentCreateWithoutUpdatedByInput[] | CmsContentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutUpdatedByInput | CmsContentCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsContentCreateManyUpdatedByInputEnvelope
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
  }

  export type CmsAnnouncementCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput> | CmsAnnouncementCreateWithoutCreatedByInput[] | CmsAnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutCreatedByInput | CmsAnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsAnnouncementCreateManyCreatedByInputEnvelope
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
  }

  export type CmsAnnouncementCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput> | CmsAnnouncementCreateWithoutUpdatedByInput[] | CmsAnnouncementUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutUpdatedByInput | CmsAnnouncementCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsAnnouncementCreateManyUpdatedByInputEnvelope
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
  }

  export type CmsNewsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput> | CmsNewsCreateWithoutCreatedByInput[] | CmsNewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutCreatedByInput | CmsNewsCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsNewsCreateManyCreatedByInputEnvelope
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
  }

  export type CmsNewsCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput> | CmsNewsCreateWithoutUpdatedByInput[] | CmsNewsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutUpdatedByInput | CmsNewsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsNewsCreateManyUpdatedByInputEnvelope
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
  }

  export type CmsPressBreifingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput> | CmsPressBreifingCreateWithoutCreatedByInput[] | CmsPressBreifingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutCreatedByInput | CmsPressBreifingCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsPressBreifingCreateManyCreatedByInputEnvelope
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
  }

  export type CmsPressBreifingCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput> | CmsPressBreifingCreateWithoutUpdatedByInput[] | CmsPressBreifingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutUpdatedByInput | CmsPressBreifingCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsPressBreifingCreateManyUpdatedByInputEnvelope
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
  }

  export type CmsVideoCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput> | CmsVideoCreateWithoutCreatedByInput[] | CmsVideoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutCreatedByInput | CmsVideoCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsVideoCreateManyCreatedByInputEnvelope
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
  }

  export type CmsVideoCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput> | CmsVideoCreateWithoutUpdatedByInput[] | CmsVideoUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutUpdatedByInput | CmsVideoCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsVideoCreateManyUpdatedByInputEnvelope
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
  }

  export type CmsBlogCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput> | CmsBlogCreateWithoutCreatedByInput[] | CmsBlogUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCreatedByInput | CmsBlogCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsBlogCreateManyCreatedByInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsBlogCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput> | CmsBlogCreateWithoutUpdatedByInput[] | CmsBlogUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutUpdatedByInput | CmsBlogCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsBlogCreateManyUpdatedByInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsTeamMemberCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput> | CmsTeamMemberCreateWithoutCreatedByInput[] | CmsTeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutCreatedByInput | CmsTeamMemberCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsTeamMemberCreateManyCreatedByInputEnvelope
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
  }

  export type CmsTeamMemberCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput> | CmsTeamMemberCreateWithoutUpdatedByInput[] | CmsTeamMemberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutUpdatedByInput | CmsTeamMemberCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsTeamMemberCreateManyUpdatedByInputEnvelope
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
  }

  export type CmsMediaItemCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput> | CmsMediaItemCreateWithoutCreatedByInput[] | CmsMediaItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutCreatedByInput | CmsMediaItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsMediaItemCreateManyCreatedByInputEnvelope
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
  }

  export type CmsMediaItemCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput> | CmsMediaItemCreateWithoutUpdatedByInput[] | CmsMediaItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutUpdatedByInput | CmsMediaItemCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsMediaItemCreateManyUpdatedByInputEnvelope
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
  }

  export type CmsSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput> | CmsSessionCreateWithoutUserInput[] | CmsSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CmsSessionCreateOrConnectWithoutUserInput | CmsSessionCreateOrConnectWithoutUserInput[]
    createMany?: CmsSessionCreateManyUserInputEnvelope
    connect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
  }

  export type CmsContentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput> | CmsContentCreateWithoutCreatedByInput[] | CmsContentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutCreatedByInput | CmsContentCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsContentCreateManyCreatedByInputEnvelope
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
  }

  export type CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput> | CmsContentCreateWithoutUpdatedByInput[] | CmsContentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutUpdatedByInput | CmsContentCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsContentCreateManyUpdatedByInputEnvelope
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
  }

  export type CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput> | CmsAnnouncementCreateWithoutCreatedByInput[] | CmsAnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutCreatedByInput | CmsAnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsAnnouncementCreateManyCreatedByInputEnvelope
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
  }

  export type CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput> | CmsAnnouncementCreateWithoutUpdatedByInput[] | CmsAnnouncementUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutUpdatedByInput | CmsAnnouncementCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsAnnouncementCreateManyUpdatedByInputEnvelope
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
  }

  export type CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput> | CmsNewsCreateWithoutCreatedByInput[] | CmsNewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutCreatedByInput | CmsNewsCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsNewsCreateManyCreatedByInputEnvelope
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
  }

  export type CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput> | CmsNewsCreateWithoutUpdatedByInput[] | CmsNewsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutUpdatedByInput | CmsNewsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsNewsCreateManyUpdatedByInputEnvelope
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
  }

  export type CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput> | CmsPressBreifingCreateWithoutCreatedByInput[] | CmsPressBreifingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutCreatedByInput | CmsPressBreifingCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsPressBreifingCreateManyCreatedByInputEnvelope
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
  }

  export type CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput> | CmsPressBreifingCreateWithoutUpdatedByInput[] | CmsPressBreifingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutUpdatedByInput | CmsPressBreifingCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsPressBreifingCreateManyUpdatedByInputEnvelope
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
  }

  export type CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput> | CmsVideoCreateWithoutCreatedByInput[] | CmsVideoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutCreatedByInput | CmsVideoCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsVideoCreateManyCreatedByInputEnvelope
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
  }

  export type CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput> | CmsVideoCreateWithoutUpdatedByInput[] | CmsVideoUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutUpdatedByInput | CmsVideoCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsVideoCreateManyUpdatedByInputEnvelope
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
  }

  export type CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput> | CmsBlogCreateWithoutCreatedByInput[] | CmsBlogUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCreatedByInput | CmsBlogCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsBlogCreateManyCreatedByInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput> | CmsBlogCreateWithoutUpdatedByInput[] | CmsBlogUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutUpdatedByInput | CmsBlogCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsBlogCreateManyUpdatedByInputEnvelope
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
  }

  export type CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput> | CmsTeamMemberCreateWithoutCreatedByInput[] | CmsTeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutCreatedByInput | CmsTeamMemberCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsTeamMemberCreateManyCreatedByInputEnvelope
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
  }

  export type CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput> | CmsTeamMemberCreateWithoutUpdatedByInput[] | CmsTeamMemberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutUpdatedByInput | CmsTeamMemberCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsTeamMemberCreateManyUpdatedByInputEnvelope
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
  }

  export type CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput> | CmsMediaItemCreateWithoutCreatedByInput[] | CmsMediaItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutCreatedByInput | CmsMediaItemCreateOrConnectWithoutCreatedByInput[]
    createMany?: CmsMediaItemCreateManyCreatedByInputEnvelope
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
  }

  export type CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput> | CmsMediaItemCreateWithoutUpdatedByInput[] | CmsMediaItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutUpdatedByInput | CmsMediaItemCreateOrConnectWithoutUpdatedByInput[]
    createMany?: CmsMediaItemCreateManyUpdatedByInputEnvelope
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCmsRoleFieldUpdateOperationsInput = {
    set?: $Enums.CmsRole
  }

  export type EnumCmsRegionFieldUpdateOperationsInput = {
    set?: $Enums.CmsRegion
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CmsSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput> | CmsSessionCreateWithoutUserInput[] | CmsSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CmsSessionCreateOrConnectWithoutUserInput | CmsSessionCreateOrConnectWithoutUserInput[]
    upsert?: CmsSessionUpsertWithWhereUniqueWithoutUserInput | CmsSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CmsSessionCreateManyUserInputEnvelope
    set?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    disconnect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    delete?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    connect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    update?: CmsSessionUpdateWithWhereUniqueWithoutUserInput | CmsSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CmsSessionUpdateManyWithWhereWithoutUserInput | CmsSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CmsSessionScalarWhereInput | CmsSessionScalarWhereInput[]
  }

  export type CmsContentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput> | CmsContentCreateWithoutCreatedByInput[] | CmsContentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutCreatedByInput | CmsContentCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsContentUpsertWithWhereUniqueWithoutCreatedByInput | CmsContentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsContentCreateManyCreatedByInputEnvelope
    set?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    disconnect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    delete?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    update?: CmsContentUpdateWithWhereUniqueWithoutCreatedByInput | CmsContentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsContentUpdateManyWithWhereWithoutCreatedByInput | CmsContentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
  }

  export type CmsContentUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput> | CmsContentCreateWithoutUpdatedByInput[] | CmsContentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutUpdatedByInput | CmsContentCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsContentUpsertWithWhereUniqueWithoutUpdatedByInput | CmsContentUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsContentCreateManyUpdatedByInputEnvelope
    set?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    disconnect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    delete?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    update?: CmsContentUpdateWithWhereUniqueWithoutUpdatedByInput | CmsContentUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsContentUpdateManyWithWhereWithoutUpdatedByInput | CmsContentUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
  }

  export type CmsAnnouncementUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput> | CmsAnnouncementCreateWithoutCreatedByInput[] | CmsAnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutCreatedByInput | CmsAnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsAnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | CmsAnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsAnnouncementCreateManyCreatedByInputEnvelope
    set?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    disconnect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    delete?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    update?: CmsAnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | CmsAnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsAnnouncementUpdateManyWithWhereWithoutCreatedByInput | CmsAnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
  }

  export type CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput> | CmsAnnouncementCreateWithoutUpdatedByInput[] | CmsAnnouncementUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutUpdatedByInput | CmsAnnouncementCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsAnnouncementUpsertWithWhereUniqueWithoutUpdatedByInput | CmsAnnouncementUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsAnnouncementCreateManyUpdatedByInputEnvelope
    set?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    disconnect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    delete?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    update?: CmsAnnouncementUpdateWithWhereUniqueWithoutUpdatedByInput | CmsAnnouncementUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsAnnouncementUpdateManyWithWhereWithoutUpdatedByInput | CmsAnnouncementUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
  }

  export type CmsNewsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput> | CmsNewsCreateWithoutCreatedByInput[] | CmsNewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutCreatedByInput | CmsNewsCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsNewsUpsertWithWhereUniqueWithoutCreatedByInput | CmsNewsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsNewsCreateManyCreatedByInputEnvelope
    set?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    disconnect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    delete?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    update?: CmsNewsUpdateWithWhereUniqueWithoutCreatedByInput | CmsNewsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsNewsUpdateManyWithWhereWithoutCreatedByInput | CmsNewsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
  }

  export type CmsNewsUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput> | CmsNewsCreateWithoutUpdatedByInput[] | CmsNewsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutUpdatedByInput | CmsNewsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsNewsUpsertWithWhereUniqueWithoutUpdatedByInput | CmsNewsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsNewsCreateManyUpdatedByInputEnvelope
    set?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    disconnect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    delete?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    update?: CmsNewsUpdateWithWhereUniqueWithoutUpdatedByInput | CmsNewsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsNewsUpdateManyWithWhereWithoutUpdatedByInput | CmsNewsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
  }

  export type CmsPressBreifingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput> | CmsPressBreifingCreateWithoutCreatedByInput[] | CmsPressBreifingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutCreatedByInput | CmsPressBreifingCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsPressBreifingUpsertWithWhereUniqueWithoutCreatedByInput | CmsPressBreifingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsPressBreifingCreateManyCreatedByInputEnvelope
    set?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    disconnect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    delete?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    update?: CmsPressBreifingUpdateWithWhereUniqueWithoutCreatedByInput | CmsPressBreifingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsPressBreifingUpdateManyWithWhereWithoutCreatedByInput | CmsPressBreifingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
  }

  export type CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput> | CmsPressBreifingCreateWithoutUpdatedByInput[] | CmsPressBreifingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutUpdatedByInput | CmsPressBreifingCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsPressBreifingUpsertWithWhereUniqueWithoutUpdatedByInput | CmsPressBreifingUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsPressBreifingCreateManyUpdatedByInputEnvelope
    set?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    disconnect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    delete?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    update?: CmsPressBreifingUpdateWithWhereUniqueWithoutUpdatedByInput | CmsPressBreifingUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsPressBreifingUpdateManyWithWhereWithoutUpdatedByInput | CmsPressBreifingUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
  }

  export type CmsVideoUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput> | CmsVideoCreateWithoutCreatedByInput[] | CmsVideoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutCreatedByInput | CmsVideoCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsVideoUpsertWithWhereUniqueWithoutCreatedByInput | CmsVideoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsVideoCreateManyCreatedByInputEnvelope
    set?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    disconnect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    delete?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    update?: CmsVideoUpdateWithWhereUniqueWithoutCreatedByInput | CmsVideoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsVideoUpdateManyWithWhereWithoutCreatedByInput | CmsVideoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
  }

  export type CmsVideoUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput> | CmsVideoCreateWithoutUpdatedByInput[] | CmsVideoUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutUpdatedByInput | CmsVideoCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsVideoUpsertWithWhereUniqueWithoutUpdatedByInput | CmsVideoUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsVideoCreateManyUpdatedByInputEnvelope
    set?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    disconnect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    delete?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    update?: CmsVideoUpdateWithWhereUniqueWithoutUpdatedByInput | CmsVideoUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsVideoUpdateManyWithWhereWithoutUpdatedByInput | CmsVideoUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
  }

  export type CmsBlogUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput> | CmsBlogCreateWithoutCreatedByInput[] | CmsBlogUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCreatedByInput | CmsBlogCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutCreatedByInput | CmsBlogUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsBlogCreateManyCreatedByInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutCreatedByInput | CmsBlogUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutCreatedByInput | CmsBlogUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsBlogUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput> | CmsBlogCreateWithoutUpdatedByInput[] | CmsBlogUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutUpdatedByInput | CmsBlogCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutUpdatedByInput | CmsBlogUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsBlogCreateManyUpdatedByInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutUpdatedByInput | CmsBlogUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutUpdatedByInput | CmsBlogUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsTeamMemberUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput> | CmsTeamMemberCreateWithoutCreatedByInput[] | CmsTeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutCreatedByInput | CmsTeamMemberCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsTeamMemberUpsertWithWhereUniqueWithoutCreatedByInput | CmsTeamMemberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsTeamMemberCreateManyCreatedByInputEnvelope
    set?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    disconnect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    delete?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    update?: CmsTeamMemberUpdateWithWhereUniqueWithoutCreatedByInput | CmsTeamMemberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsTeamMemberUpdateManyWithWhereWithoutCreatedByInput | CmsTeamMemberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
  }

  export type CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput> | CmsTeamMemberCreateWithoutUpdatedByInput[] | CmsTeamMemberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutUpdatedByInput | CmsTeamMemberCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsTeamMemberUpsertWithWhereUniqueWithoutUpdatedByInput | CmsTeamMemberUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsTeamMemberCreateManyUpdatedByInputEnvelope
    set?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    disconnect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    delete?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    update?: CmsTeamMemberUpdateWithWhereUniqueWithoutUpdatedByInput | CmsTeamMemberUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsTeamMemberUpdateManyWithWhereWithoutUpdatedByInput | CmsTeamMemberUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
  }

  export type CmsMediaItemUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput> | CmsMediaItemCreateWithoutCreatedByInput[] | CmsMediaItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutCreatedByInput | CmsMediaItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsMediaItemUpsertWithWhereUniqueWithoutCreatedByInput | CmsMediaItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsMediaItemCreateManyCreatedByInputEnvelope
    set?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    disconnect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    delete?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    update?: CmsMediaItemUpdateWithWhereUniqueWithoutCreatedByInput | CmsMediaItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsMediaItemUpdateManyWithWhereWithoutCreatedByInput | CmsMediaItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
  }

  export type CmsMediaItemUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput> | CmsMediaItemCreateWithoutUpdatedByInput[] | CmsMediaItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutUpdatedByInput | CmsMediaItemCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsMediaItemUpsertWithWhereUniqueWithoutUpdatedByInput | CmsMediaItemUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsMediaItemCreateManyUpdatedByInputEnvelope
    set?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    disconnect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    delete?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    update?: CmsMediaItemUpdateWithWhereUniqueWithoutUpdatedByInput | CmsMediaItemUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsMediaItemUpdateManyWithWhereWithoutUpdatedByInput | CmsMediaItemUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CmsSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput> | CmsSessionCreateWithoutUserInput[] | CmsSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CmsSessionCreateOrConnectWithoutUserInput | CmsSessionCreateOrConnectWithoutUserInput[]
    upsert?: CmsSessionUpsertWithWhereUniqueWithoutUserInput | CmsSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CmsSessionCreateManyUserInputEnvelope
    set?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    disconnect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    delete?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    connect?: CmsSessionWhereUniqueInput | CmsSessionWhereUniqueInput[]
    update?: CmsSessionUpdateWithWhereUniqueWithoutUserInput | CmsSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CmsSessionUpdateManyWithWhereWithoutUserInput | CmsSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CmsSessionScalarWhereInput | CmsSessionScalarWhereInput[]
  }

  export type CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput> | CmsContentCreateWithoutCreatedByInput[] | CmsContentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutCreatedByInput | CmsContentCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsContentUpsertWithWhereUniqueWithoutCreatedByInput | CmsContentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsContentCreateManyCreatedByInputEnvelope
    set?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    disconnect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    delete?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    update?: CmsContentUpdateWithWhereUniqueWithoutCreatedByInput | CmsContentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsContentUpdateManyWithWhereWithoutCreatedByInput | CmsContentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
  }

  export type CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput> | CmsContentCreateWithoutUpdatedByInput[] | CmsContentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsContentCreateOrConnectWithoutUpdatedByInput | CmsContentCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsContentUpsertWithWhereUniqueWithoutUpdatedByInput | CmsContentUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsContentCreateManyUpdatedByInputEnvelope
    set?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    disconnect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    delete?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    connect?: CmsContentWhereUniqueInput | CmsContentWhereUniqueInput[]
    update?: CmsContentUpdateWithWhereUniqueWithoutUpdatedByInput | CmsContentUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsContentUpdateManyWithWhereWithoutUpdatedByInput | CmsContentUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
  }

  export type CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput> | CmsAnnouncementCreateWithoutCreatedByInput[] | CmsAnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutCreatedByInput | CmsAnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsAnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | CmsAnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsAnnouncementCreateManyCreatedByInputEnvelope
    set?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    disconnect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    delete?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    update?: CmsAnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | CmsAnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsAnnouncementUpdateManyWithWhereWithoutCreatedByInput | CmsAnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
  }

  export type CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput> | CmsAnnouncementCreateWithoutUpdatedByInput[] | CmsAnnouncementUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsAnnouncementCreateOrConnectWithoutUpdatedByInput | CmsAnnouncementCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsAnnouncementUpsertWithWhereUniqueWithoutUpdatedByInput | CmsAnnouncementUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsAnnouncementCreateManyUpdatedByInputEnvelope
    set?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    disconnect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    delete?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    connect?: CmsAnnouncementWhereUniqueInput | CmsAnnouncementWhereUniqueInput[]
    update?: CmsAnnouncementUpdateWithWhereUniqueWithoutUpdatedByInput | CmsAnnouncementUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsAnnouncementUpdateManyWithWhereWithoutUpdatedByInput | CmsAnnouncementUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
  }

  export type CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput> | CmsNewsCreateWithoutCreatedByInput[] | CmsNewsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutCreatedByInput | CmsNewsCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsNewsUpsertWithWhereUniqueWithoutCreatedByInput | CmsNewsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsNewsCreateManyCreatedByInputEnvelope
    set?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    disconnect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    delete?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    update?: CmsNewsUpdateWithWhereUniqueWithoutCreatedByInput | CmsNewsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsNewsUpdateManyWithWhereWithoutCreatedByInput | CmsNewsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
  }

  export type CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput> | CmsNewsCreateWithoutUpdatedByInput[] | CmsNewsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsNewsCreateOrConnectWithoutUpdatedByInput | CmsNewsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsNewsUpsertWithWhereUniqueWithoutUpdatedByInput | CmsNewsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsNewsCreateManyUpdatedByInputEnvelope
    set?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    disconnect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    delete?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    connect?: CmsNewsWhereUniqueInput | CmsNewsWhereUniqueInput[]
    update?: CmsNewsUpdateWithWhereUniqueWithoutUpdatedByInput | CmsNewsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsNewsUpdateManyWithWhereWithoutUpdatedByInput | CmsNewsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
  }

  export type CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput> | CmsPressBreifingCreateWithoutCreatedByInput[] | CmsPressBreifingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutCreatedByInput | CmsPressBreifingCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsPressBreifingUpsertWithWhereUniqueWithoutCreatedByInput | CmsPressBreifingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsPressBreifingCreateManyCreatedByInputEnvelope
    set?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    disconnect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    delete?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    update?: CmsPressBreifingUpdateWithWhereUniqueWithoutCreatedByInput | CmsPressBreifingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsPressBreifingUpdateManyWithWhereWithoutCreatedByInput | CmsPressBreifingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
  }

  export type CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput> | CmsPressBreifingCreateWithoutUpdatedByInput[] | CmsPressBreifingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsPressBreifingCreateOrConnectWithoutUpdatedByInput | CmsPressBreifingCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsPressBreifingUpsertWithWhereUniqueWithoutUpdatedByInput | CmsPressBreifingUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsPressBreifingCreateManyUpdatedByInputEnvelope
    set?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    disconnect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    delete?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    connect?: CmsPressBreifingWhereUniqueInput | CmsPressBreifingWhereUniqueInput[]
    update?: CmsPressBreifingUpdateWithWhereUniqueWithoutUpdatedByInput | CmsPressBreifingUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsPressBreifingUpdateManyWithWhereWithoutUpdatedByInput | CmsPressBreifingUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
  }

  export type CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput> | CmsVideoCreateWithoutCreatedByInput[] | CmsVideoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutCreatedByInput | CmsVideoCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsVideoUpsertWithWhereUniqueWithoutCreatedByInput | CmsVideoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsVideoCreateManyCreatedByInputEnvelope
    set?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    disconnect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    delete?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    update?: CmsVideoUpdateWithWhereUniqueWithoutCreatedByInput | CmsVideoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsVideoUpdateManyWithWhereWithoutCreatedByInput | CmsVideoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
  }

  export type CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput> | CmsVideoCreateWithoutUpdatedByInput[] | CmsVideoUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsVideoCreateOrConnectWithoutUpdatedByInput | CmsVideoCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsVideoUpsertWithWhereUniqueWithoutUpdatedByInput | CmsVideoUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsVideoCreateManyUpdatedByInputEnvelope
    set?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    disconnect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    delete?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    connect?: CmsVideoWhereUniqueInput | CmsVideoWhereUniqueInput[]
    update?: CmsVideoUpdateWithWhereUniqueWithoutUpdatedByInput | CmsVideoUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsVideoUpdateManyWithWhereWithoutUpdatedByInput | CmsVideoUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
  }

  export type CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput> | CmsBlogCreateWithoutCreatedByInput[] | CmsBlogUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutCreatedByInput | CmsBlogCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutCreatedByInput | CmsBlogUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsBlogCreateManyCreatedByInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutCreatedByInput | CmsBlogUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutCreatedByInput | CmsBlogUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput> | CmsBlogCreateWithoutUpdatedByInput[] | CmsBlogUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsBlogCreateOrConnectWithoutUpdatedByInput | CmsBlogCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsBlogUpsertWithWhereUniqueWithoutUpdatedByInput | CmsBlogUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsBlogCreateManyUpdatedByInputEnvelope
    set?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    disconnect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    delete?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    connect?: CmsBlogWhereUniqueInput | CmsBlogWhereUniqueInput[]
    update?: CmsBlogUpdateWithWhereUniqueWithoutUpdatedByInput | CmsBlogUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsBlogUpdateManyWithWhereWithoutUpdatedByInput | CmsBlogUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
  }

  export type CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput> | CmsTeamMemberCreateWithoutCreatedByInput[] | CmsTeamMemberUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutCreatedByInput | CmsTeamMemberCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsTeamMemberUpsertWithWhereUniqueWithoutCreatedByInput | CmsTeamMemberUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsTeamMemberCreateManyCreatedByInputEnvelope
    set?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    disconnect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    delete?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    update?: CmsTeamMemberUpdateWithWhereUniqueWithoutCreatedByInput | CmsTeamMemberUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsTeamMemberUpdateManyWithWhereWithoutCreatedByInput | CmsTeamMemberUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
  }

  export type CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput> | CmsTeamMemberCreateWithoutUpdatedByInput[] | CmsTeamMemberUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsTeamMemberCreateOrConnectWithoutUpdatedByInput | CmsTeamMemberCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsTeamMemberUpsertWithWhereUniqueWithoutUpdatedByInput | CmsTeamMemberUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsTeamMemberCreateManyUpdatedByInputEnvelope
    set?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    disconnect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    delete?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    connect?: CmsTeamMemberWhereUniqueInput | CmsTeamMemberWhereUniqueInput[]
    update?: CmsTeamMemberUpdateWithWhereUniqueWithoutUpdatedByInput | CmsTeamMemberUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsTeamMemberUpdateManyWithWhereWithoutUpdatedByInput | CmsTeamMemberUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
  }

  export type CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput> | CmsMediaItemCreateWithoutCreatedByInput[] | CmsMediaItemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutCreatedByInput | CmsMediaItemCreateOrConnectWithoutCreatedByInput[]
    upsert?: CmsMediaItemUpsertWithWhereUniqueWithoutCreatedByInput | CmsMediaItemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CmsMediaItemCreateManyCreatedByInputEnvelope
    set?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    disconnect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    delete?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    update?: CmsMediaItemUpdateWithWhereUniqueWithoutCreatedByInput | CmsMediaItemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CmsMediaItemUpdateManyWithWhereWithoutCreatedByInput | CmsMediaItemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
  }

  export type CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput> | CmsMediaItemCreateWithoutUpdatedByInput[] | CmsMediaItemUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: CmsMediaItemCreateOrConnectWithoutUpdatedByInput | CmsMediaItemCreateOrConnectWithoutUpdatedByInput[]
    upsert?: CmsMediaItemUpsertWithWhereUniqueWithoutUpdatedByInput | CmsMediaItemUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: CmsMediaItemCreateManyUpdatedByInputEnvelope
    set?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    disconnect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    delete?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    connect?: CmsMediaItemWhereUniqueInput | CmsMediaItemWhereUniqueInput[]
    update?: CmsMediaItemUpdateWithWhereUniqueWithoutUpdatedByInput | CmsMediaItemUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: CmsMediaItemUpdateManyWithWhereWithoutUpdatedByInput | CmsMediaItemUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
  }

  export type CmsUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CmsUserCreateWithoutSessionsInput, CmsUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutSessionsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CmsUserCreateWithoutSessionsInput, CmsUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutSessionsInput
    upsert?: CmsUserUpsertWithoutSessionsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutSessionsInput, CmsUserUpdateWithoutSessionsInput>, CmsUserUncheckedUpdateWithoutSessionsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedContentInput = {
    create?: XOR<CmsUserCreateWithoutCreatedContentInput, CmsUserUncheckedCreateWithoutCreatedContentInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedContentInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedContentInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedContentInput, CmsUserUncheckedCreateWithoutUpdatedContentInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedContentInput
    connect?: CmsUserWhereUniqueInput
  }

  export type EnumCmsContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.CmsContentType
  }

  export type EnumCmsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CmsCategory
  }

  export type EnumCmsLevelFieldUpdateOperationsInput = {
    set?: $Enums.CmsLevel
  }

  export type NullableEnumCmsRegionFieldUpdateOperationsInput = {
    set?: $Enums.CmsRegion | null
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedContentNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedContentInput, CmsUserUncheckedCreateWithoutCreatedContentInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedContentInput
    upsert?: CmsUserUpsertWithoutCreatedContentInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedContentInput, CmsUserUpdateWithoutCreatedContentInput>, CmsUserUncheckedUpdateWithoutCreatedContentInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedContentNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedContentInput, CmsUserUncheckedCreateWithoutUpdatedContentInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedContentInput
    upsert?: CmsUserUpsertWithoutUpdatedContentInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedContentInput, CmsUserUpdateWithoutUpdatedContentInput>, CmsUserUncheckedUpdateWithoutUpdatedContentInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedAnnouncementsInput = {
    create?: XOR<CmsUserCreateWithoutCreatedAnnouncementsInput, CmsUserUncheckedCreateWithoutCreatedAnnouncementsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedAnnouncementsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedAnnouncementsInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedCreateWithoutUpdatedAnnouncementsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedAnnouncementsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedAnnouncementsInput, CmsUserUncheckedCreateWithoutCreatedAnnouncementsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedAnnouncementsInput
    upsert?: CmsUserUpsertWithoutCreatedAnnouncementsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedAnnouncementsInput, CmsUserUpdateWithoutCreatedAnnouncementsInput>, CmsUserUncheckedUpdateWithoutCreatedAnnouncementsInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedAnnouncementsNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedCreateWithoutUpdatedAnnouncementsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedAnnouncementsInput
    upsert?: CmsUserUpsertWithoutUpdatedAnnouncementsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedAnnouncementsInput, CmsUserUpdateWithoutUpdatedAnnouncementsInput>, CmsUserUncheckedUpdateWithoutUpdatedAnnouncementsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedNewsInput = {
    create?: XOR<CmsUserCreateWithoutCreatedNewsInput, CmsUserUncheckedCreateWithoutCreatedNewsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedNewsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedNewsInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedNewsInput, CmsUserUncheckedCreateWithoutUpdatedNewsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedNewsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedNewsNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedNewsInput, CmsUserUncheckedCreateWithoutCreatedNewsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedNewsInput
    upsert?: CmsUserUpsertWithoutCreatedNewsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedNewsInput, CmsUserUpdateWithoutCreatedNewsInput>, CmsUserUncheckedUpdateWithoutCreatedNewsInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedNewsNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedNewsInput, CmsUserUncheckedCreateWithoutUpdatedNewsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedNewsInput
    upsert?: CmsUserUpsertWithoutUpdatedNewsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedNewsInput, CmsUserUpdateWithoutUpdatedNewsInput>, CmsUserUncheckedUpdateWithoutUpdatedNewsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedBriefingsInput = {
    create?: XOR<CmsUserCreateWithoutCreatedBriefingsInput, CmsUserUncheckedCreateWithoutCreatedBriefingsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedBriefingsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedBriefingsInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedBriefingsInput, CmsUserUncheckedCreateWithoutUpdatedBriefingsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedBriefingsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedBriefingsNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedBriefingsInput, CmsUserUncheckedCreateWithoutCreatedBriefingsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedBriefingsInput
    upsert?: CmsUserUpsertWithoutCreatedBriefingsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedBriefingsInput, CmsUserUpdateWithoutCreatedBriefingsInput>, CmsUserUncheckedUpdateWithoutCreatedBriefingsInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedBriefingsNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedBriefingsInput, CmsUserUncheckedCreateWithoutUpdatedBriefingsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedBriefingsInput
    upsert?: CmsUserUpsertWithoutUpdatedBriefingsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedBriefingsInput, CmsUserUpdateWithoutUpdatedBriefingsInput>, CmsUserUncheckedUpdateWithoutUpdatedBriefingsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedVideosInput = {
    create?: XOR<CmsUserCreateWithoutCreatedVideosInput, CmsUserUncheckedCreateWithoutCreatedVideosInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedVideosInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedVideosInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedVideosInput, CmsUserUncheckedCreateWithoutUpdatedVideosInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedVideosInput
    connect?: CmsUserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedVideosNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedVideosInput, CmsUserUncheckedCreateWithoutCreatedVideosInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedVideosInput
    upsert?: CmsUserUpsertWithoutCreatedVideosInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedVideosInput, CmsUserUpdateWithoutCreatedVideosInput>, CmsUserUncheckedUpdateWithoutCreatedVideosInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedVideosNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedVideosInput, CmsUserUncheckedCreateWithoutUpdatedVideosInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedVideosInput
    upsert?: CmsUserUpsertWithoutUpdatedVideosInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedVideosInput, CmsUserUpdateWithoutUpdatedVideosInput>, CmsUserUncheckedUpdateWithoutUpdatedVideosInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedBlogsInput = {
    create?: XOR<CmsUserCreateWithoutCreatedBlogsInput, CmsUserUncheckedCreateWithoutCreatedBlogsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedBlogsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedBlogsInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedBlogsInput, CmsUserUncheckedCreateWithoutUpdatedBlogsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedBlogsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedBlogsNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedBlogsInput, CmsUserUncheckedCreateWithoutCreatedBlogsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedBlogsInput
    upsert?: CmsUserUpsertWithoutCreatedBlogsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedBlogsInput, CmsUserUpdateWithoutCreatedBlogsInput>, CmsUserUncheckedUpdateWithoutCreatedBlogsInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedBlogsNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedBlogsInput, CmsUserUncheckedCreateWithoutUpdatedBlogsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedBlogsInput
    upsert?: CmsUserUpsertWithoutUpdatedBlogsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedBlogsInput, CmsUserUpdateWithoutUpdatedBlogsInput>, CmsUserUncheckedUpdateWithoutUpdatedBlogsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedTeamsInput = {
    create?: XOR<CmsUserCreateWithoutCreatedTeamsInput, CmsUserUncheckedCreateWithoutCreatedTeamsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedTeamsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedTeamsInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedTeamsInput, CmsUserUncheckedCreateWithoutUpdatedTeamsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedTeamsInput
    connect?: CmsUserWhereUniqueInput
  }

  export type EnumCmsTeamTypeFieldUpdateOperationsInput = {
    set?: $Enums.CmsTeamType
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedTeamsNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedTeamsInput, CmsUserUncheckedCreateWithoutCreatedTeamsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedTeamsInput
    upsert?: CmsUserUpsertWithoutCreatedTeamsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedTeamsInput, CmsUserUpdateWithoutCreatedTeamsInput>, CmsUserUncheckedUpdateWithoutCreatedTeamsInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedTeamsNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedTeamsInput, CmsUserUncheckedCreateWithoutUpdatedTeamsInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedTeamsInput
    upsert?: CmsUserUpsertWithoutUpdatedTeamsInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedTeamsInput, CmsUserUpdateWithoutUpdatedTeamsInput>, CmsUserUncheckedUpdateWithoutUpdatedTeamsInput>
  }

  export type CmsUserCreateNestedOneWithoutCreatedMediaInput = {
    create?: XOR<CmsUserCreateWithoutCreatedMediaInput, CmsUserUncheckedCreateWithoutCreatedMediaInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedMediaInput
    connect?: CmsUserWhereUniqueInput
  }

  export type CmsUserCreateNestedOneWithoutUpdatedMediaInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedMediaInput, CmsUserUncheckedCreateWithoutUpdatedMediaInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedMediaInput
    connect?: CmsUserWhereUniqueInput
  }

  export type EnumCmsMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.CmsMediaType
  }

  export type CmsUserUpdateOneRequiredWithoutCreatedMediaNestedInput = {
    create?: XOR<CmsUserCreateWithoutCreatedMediaInput, CmsUserUncheckedCreateWithoutCreatedMediaInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutCreatedMediaInput
    upsert?: CmsUserUpsertWithoutCreatedMediaInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutCreatedMediaInput, CmsUserUpdateWithoutCreatedMediaInput>, CmsUserUncheckedUpdateWithoutCreatedMediaInput>
  }

  export type CmsUserUpdateOneRequiredWithoutUpdatedMediaNestedInput = {
    create?: XOR<CmsUserCreateWithoutUpdatedMediaInput, CmsUserUncheckedCreateWithoutUpdatedMediaInput>
    connectOrCreate?: CmsUserCreateOrConnectWithoutUpdatedMediaInput
    upsert?: CmsUserUpsertWithoutUpdatedMediaInput
    connect?: CmsUserWhereUniqueInput
    update?: XOR<XOR<CmsUserUpdateToOneWithWhereWithoutUpdatedMediaInput, CmsUserUpdateWithoutUpdatedMediaInput>, CmsUserUncheckedUpdateWithoutUpdatedMediaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumCmsRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRole | EnumCmsRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRoleFilter<$PrismaModel> | $Enums.CmsRole
  }

  export type NestedEnumCmsRegionFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRegionFilter<$PrismaModel> | $Enums.CmsRegion
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumCmsRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRole | EnumCmsRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRole[] | ListEnumCmsRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRoleWithAggregatesFilter<$PrismaModel> | $Enums.CmsRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsRoleFilter<$PrismaModel>
    _max?: NestedEnumCmsRoleFilter<$PrismaModel>
  }

  export type NestedEnumCmsRegionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel>
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsRegionWithAggregatesFilter<$PrismaModel> | $Enums.CmsRegion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsRegionFilter<$PrismaModel>
    _max?: NestedEnumCmsRegionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCmsContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsContentType | EnumCmsContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsContentTypeFilter<$PrismaModel> | $Enums.CmsContentType
  }

  export type NestedEnumCmsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsCategory | EnumCmsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsCategoryFilter<$PrismaModel> | $Enums.CmsCategory
  }

  export type NestedEnumCmsLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsLevel | EnumCmsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsLevelFilter<$PrismaModel> | $Enums.CmsLevel
  }

  export type NestedEnumCmsRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCmsRegionNullableFilter<$PrismaModel> | $Enums.CmsRegion | null
  }

  export type NestedEnumCmsContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsContentType | EnumCmsContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsContentType[] | ListEnumCmsContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsContentTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumCmsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsCategory | EnumCmsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsCategory[] | ListEnumCmsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CmsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsCategoryFilter<$PrismaModel>
    _max?: NestedEnumCmsCategoryFilter<$PrismaModel>
  }

  export type NestedEnumCmsLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsLevel | EnumCmsLevelFieldRefInput<$PrismaModel>
    in?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsLevel[] | ListEnumCmsLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsLevelWithAggregatesFilter<$PrismaModel> | $Enums.CmsLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsLevelFilter<$PrismaModel>
    _max?: NestedEnumCmsLevelFilter<$PrismaModel>
  }

  export type NestedEnumCmsRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsRegion | EnumCmsRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CmsRegion[] | ListEnumCmsRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCmsRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.CmsRegion | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCmsRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumCmsRegionNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCmsTeamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsTeamType | EnumCmsTeamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsTeamTypeFilter<$PrismaModel> | $Enums.CmsTeamType
  }

  export type NestedEnumCmsTeamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsTeamType | EnumCmsTeamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsTeamType[] | ListEnumCmsTeamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsTeamTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsTeamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsTeamTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsTeamTypeFilter<$PrismaModel>
  }

  export type NestedEnumCmsMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsMediaType | EnumCmsMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsMediaTypeFilter<$PrismaModel> | $Enums.CmsMediaType
  }

  export type NestedEnumCmsMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CmsMediaType | EnumCmsMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CmsMediaType[] | ListEnumCmsMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCmsMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CmsMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCmsMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumCmsMediaTypeFilter<$PrismaModel>
  }

  export type CmsSessionCreateWithoutUserInput = {
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CmsSessionUncheckedCreateWithoutUserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CmsSessionCreateOrConnectWithoutUserInput = {
    where: CmsSessionWhereUniqueInput
    create: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput>
  }

  export type CmsSessionCreateManyUserInputEnvelope = {
    data: CmsSessionCreateManyUserInput | CmsSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CmsContentCreateWithoutCreatedByInput = {
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedContentInput
  }

  export type CmsContentUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsContentCreateOrConnectWithoutCreatedByInput = {
    where: CmsContentWhereUniqueInput
    create: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsContentCreateManyCreatedByInputEnvelope = {
    data: CmsContentCreateManyCreatedByInput | CmsContentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsContentCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedContentInput
  }

  export type CmsContentUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsContentCreateOrConnectWithoutUpdatedByInput = {
    where: CmsContentWhereUniqueInput
    create: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsContentCreateManyUpdatedByInputEnvelope = {
    data: CmsContentCreateManyUpdatedByInput | CmsContentCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsAnnouncementCreateWithoutCreatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedAnnouncementsInput
  }

  export type CmsAnnouncementUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementCreateOrConnectWithoutCreatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    create: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsAnnouncementCreateManyCreatedByInputEnvelope = {
    data: CmsAnnouncementCreateManyCreatedByInput | CmsAnnouncementCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsAnnouncementCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedAnnouncementsInput
  }

  export type CmsAnnouncementUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementCreateOrConnectWithoutUpdatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    create: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsAnnouncementCreateManyUpdatedByInputEnvelope = {
    data: CmsAnnouncementCreateManyUpdatedByInput | CmsAnnouncementCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsNewsCreateWithoutCreatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedNewsInput
  }

  export type CmsNewsUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsCreateOrConnectWithoutCreatedByInput = {
    where: CmsNewsWhereUniqueInput
    create: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsNewsCreateManyCreatedByInputEnvelope = {
    data: CmsNewsCreateManyCreatedByInput | CmsNewsCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsNewsCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedNewsInput
  }

  export type CmsNewsUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsCreateOrConnectWithoutUpdatedByInput = {
    where: CmsNewsWhereUniqueInput
    create: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsNewsCreateManyUpdatedByInputEnvelope = {
    data: CmsNewsCreateManyUpdatedByInput | CmsNewsCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsPressBreifingCreateWithoutCreatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedBriefingsInput
  }

  export type CmsPressBreifingUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingCreateOrConnectWithoutCreatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    create: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsPressBreifingCreateManyCreatedByInputEnvelope = {
    data: CmsPressBreifingCreateManyCreatedByInput | CmsPressBreifingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsPressBreifingCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedBriefingsInput
  }

  export type CmsPressBreifingUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingCreateOrConnectWithoutUpdatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    create: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsPressBreifingCreateManyUpdatedByInputEnvelope = {
    data: CmsPressBreifingCreateManyUpdatedByInput | CmsPressBreifingCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsVideoCreateWithoutCreatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedVideosInput
  }

  export type CmsVideoUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoCreateOrConnectWithoutCreatedByInput = {
    where: CmsVideoWhereUniqueInput
    create: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsVideoCreateManyCreatedByInputEnvelope = {
    data: CmsVideoCreateManyCreatedByInput | CmsVideoCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsVideoCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedVideosInput
  }

  export type CmsVideoUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoCreateOrConnectWithoutUpdatedByInput = {
    where: CmsVideoWhereUniqueInput
    create: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsVideoCreateManyUpdatedByInputEnvelope = {
    data: CmsVideoCreateManyUpdatedByInput | CmsVideoCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsBlogCreateWithoutCreatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedBlogsInput
  }

  export type CmsBlogUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogCreateOrConnectWithoutCreatedByInput = {
    where: CmsBlogWhereUniqueInput
    create: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsBlogCreateManyCreatedByInputEnvelope = {
    data: CmsBlogCreateManyCreatedByInput | CmsBlogCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsBlogCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedBlogsInput
  }

  export type CmsBlogUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogCreateOrConnectWithoutUpdatedByInput = {
    where: CmsBlogWhereUniqueInput
    create: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsBlogCreateManyUpdatedByInputEnvelope = {
    data: CmsBlogCreateManyUpdatedByInput | CmsBlogCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsTeamMemberCreateWithoutCreatedByInput = {
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedTeamsInput
  }

  export type CmsTeamMemberUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberCreateOrConnectWithoutCreatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    create: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsTeamMemberCreateManyCreatedByInputEnvelope = {
    data: CmsTeamMemberCreateManyCreatedByInput | CmsTeamMemberCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsTeamMemberCreateWithoutUpdatedByInput = {
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedTeamsInput
  }

  export type CmsTeamMemberUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberCreateOrConnectWithoutUpdatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    create: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsTeamMemberCreateManyUpdatedByInputEnvelope = {
    data: CmsTeamMemberCreateManyUpdatedByInput | CmsTeamMemberCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsMediaItemCreateWithoutCreatedByInput = {
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy: CmsUserCreateNestedOneWithoutUpdatedMediaInput
  }

  export type CmsMediaItemUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemCreateOrConnectWithoutCreatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    create: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsMediaItemCreateManyCreatedByInputEnvelope = {
    data: CmsMediaItemCreateManyCreatedByInput | CmsMediaItemCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsMediaItemCreateWithoutUpdatedByInput = {
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: CmsUserCreateNestedOneWithoutCreatedMediaInput
  }

  export type CmsMediaItemUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemCreateOrConnectWithoutUpdatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    create: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsMediaItemCreateManyUpdatedByInputEnvelope = {
    data: CmsMediaItemCreateManyUpdatedByInput | CmsMediaItemCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type CmsSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: CmsSessionWhereUniqueInput
    update: XOR<CmsSessionUpdateWithoutUserInput, CmsSessionUncheckedUpdateWithoutUserInput>
    create: XOR<CmsSessionCreateWithoutUserInput, CmsSessionUncheckedCreateWithoutUserInput>
  }

  export type CmsSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: CmsSessionWhereUniqueInput
    data: XOR<CmsSessionUpdateWithoutUserInput, CmsSessionUncheckedUpdateWithoutUserInput>
  }

  export type CmsSessionUpdateManyWithWhereWithoutUserInput = {
    where: CmsSessionScalarWhereInput
    data: XOR<CmsSessionUpdateManyMutationInput, CmsSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type CmsSessionScalarWhereInput = {
    AND?: CmsSessionScalarWhereInput | CmsSessionScalarWhereInput[]
    OR?: CmsSessionScalarWhereInput[]
    NOT?: CmsSessionScalarWhereInput | CmsSessionScalarWhereInput[]
    id?: IntFilter<"CmsSession"> | number
    tokenHash?: StringFilter<"CmsSession"> | string
    userId?: IntFilter<"CmsSession"> | number
    expiresAt?: DateTimeFilter<"CmsSession"> | Date | string
    createdAt?: DateTimeFilter<"CmsSession"> | Date | string
  }

  export type CmsContentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsContentWhereUniqueInput
    update: XOR<CmsContentUpdateWithoutCreatedByInput, CmsContentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsContentCreateWithoutCreatedByInput, CmsContentUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsContentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsContentWhereUniqueInput
    data: XOR<CmsContentUpdateWithoutCreatedByInput, CmsContentUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsContentUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsContentScalarWhereInput
    data: XOR<CmsContentUpdateManyMutationInput, CmsContentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsContentScalarWhereInput = {
    AND?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
    OR?: CmsContentScalarWhereInput[]
    NOT?: CmsContentScalarWhereInput | CmsContentScalarWhereInput[]
    id?: IntFilter<"CmsContent"> | number
    title?: StringFilter<"CmsContent"> | string
    slug?: StringFilter<"CmsContent"> | string
    contentType?: EnumCmsContentTypeFilter<"CmsContent"> | $Enums.CmsContentType
    category?: EnumCmsCategoryFilter<"CmsContent"> | $Enums.CmsCategory
    level?: EnumCmsLevelFilter<"CmsContent"> | $Enums.CmsLevel
    region?: EnumCmsRegionNullableFilter<"CmsContent"> | $Enums.CmsRegion | null
    body?: StringFilter<"CmsContent"> | string
    createdById?: IntFilter<"CmsContent"> | number
    updatedById?: IntFilter<"CmsContent"> | number
    createdAt?: DateTimeFilter<"CmsContent"> | Date | string
    updatedAt?: DateTimeFilter<"CmsContent"> | Date | string
  }

  export type CmsContentUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsContentWhereUniqueInput
    update: XOR<CmsContentUpdateWithoutUpdatedByInput, CmsContentUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsContentCreateWithoutUpdatedByInput, CmsContentUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsContentUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsContentWhereUniqueInput
    data: XOR<CmsContentUpdateWithoutUpdatedByInput, CmsContentUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsContentUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsContentScalarWhereInput
    data: XOR<CmsContentUpdateManyMutationInput, CmsContentUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsAnnouncementUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    update: XOR<CmsAnnouncementUpdateWithoutCreatedByInput, CmsAnnouncementUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsAnnouncementCreateWithoutCreatedByInput, CmsAnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsAnnouncementUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    data: XOR<CmsAnnouncementUpdateWithoutCreatedByInput, CmsAnnouncementUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsAnnouncementUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsAnnouncementScalarWhereInput
    data: XOR<CmsAnnouncementUpdateManyMutationInput, CmsAnnouncementUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsAnnouncementScalarWhereInput = {
    AND?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
    OR?: CmsAnnouncementScalarWhereInput[]
    NOT?: CmsAnnouncementScalarWhereInput | CmsAnnouncementScalarWhereInput[]
    id?: IntFilter<"CmsAnnouncement"> | number
    title?: StringFilter<"CmsAnnouncement"> | string
    slug?: StringFilter<"CmsAnnouncement"> | string
    excerpt?: StringFilter<"CmsAnnouncement"> | string
    richContent?: StringFilter<"CmsAnnouncement"> | string
    coverImage?: StringNullableFilter<"CmsAnnouncement"> | string | null
    region?: EnumCmsRegionFilter<"CmsAnnouncement"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsAnnouncement"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsAnnouncement"> | Date | string | null
    createdById?: IntFilter<"CmsAnnouncement"> | number
    updatedById?: IntFilter<"CmsAnnouncement"> | number
    createdAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
    updatedAt?: DateTimeFilter<"CmsAnnouncement"> | Date | string
  }

  export type CmsAnnouncementUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    update: XOR<CmsAnnouncementUpdateWithoutUpdatedByInput, CmsAnnouncementUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsAnnouncementCreateWithoutUpdatedByInput, CmsAnnouncementUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsAnnouncementUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsAnnouncementWhereUniqueInput
    data: XOR<CmsAnnouncementUpdateWithoutUpdatedByInput, CmsAnnouncementUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsAnnouncementUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsAnnouncementScalarWhereInput
    data: XOR<CmsAnnouncementUpdateManyMutationInput, CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsNewsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsNewsWhereUniqueInput
    update: XOR<CmsNewsUpdateWithoutCreatedByInput, CmsNewsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsNewsCreateWithoutCreatedByInput, CmsNewsUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsNewsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsNewsWhereUniqueInput
    data: XOR<CmsNewsUpdateWithoutCreatedByInput, CmsNewsUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsNewsUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsNewsScalarWhereInput
    data: XOR<CmsNewsUpdateManyMutationInput, CmsNewsUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsNewsScalarWhereInput = {
    AND?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
    OR?: CmsNewsScalarWhereInput[]
    NOT?: CmsNewsScalarWhereInput | CmsNewsScalarWhereInput[]
    id?: IntFilter<"CmsNews"> | number
    title?: StringFilter<"CmsNews"> | string
    slug?: StringFilter<"CmsNews"> | string
    excerpt?: StringFilter<"CmsNews"> | string
    richContent?: StringFilter<"CmsNews"> | string
    coverImage?: StringNullableFilter<"CmsNews"> | string | null
    region?: EnumCmsRegionFilter<"CmsNews"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsNews"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsNews"> | Date | string | null
    createdById?: IntFilter<"CmsNews"> | number
    updatedById?: IntFilter<"CmsNews"> | number
    createdAt?: DateTimeFilter<"CmsNews"> | Date | string
    updatedAt?: DateTimeFilter<"CmsNews"> | Date | string
  }

  export type CmsNewsUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsNewsWhereUniqueInput
    update: XOR<CmsNewsUpdateWithoutUpdatedByInput, CmsNewsUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsNewsCreateWithoutUpdatedByInput, CmsNewsUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsNewsUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsNewsWhereUniqueInput
    data: XOR<CmsNewsUpdateWithoutUpdatedByInput, CmsNewsUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsNewsUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsNewsScalarWhereInput
    data: XOR<CmsNewsUpdateManyMutationInput, CmsNewsUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsPressBreifingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    update: XOR<CmsPressBreifingUpdateWithoutCreatedByInput, CmsPressBreifingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsPressBreifingCreateWithoutCreatedByInput, CmsPressBreifingUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsPressBreifingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    data: XOR<CmsPressBreifingUpdateWithoutCreatedByInput, CmsPressBreifingUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsPressBreifingUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsPressBreifingScalarWhereInput
    data: XOR<CmsPressBreifingUpdateManyMutationInput, CmsPressBreifingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsPressBreifingScalarWhereInput = {
    AND?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
    OR?: CmsPressBreifingScalarWhereInput[]
    NOT?: CmsPressBreifingScalarWhereInput | CmsPressBreifingScalarWhereInput[]
    id?: IntFilter<"CmsPressBreifing"> | number
    title?: StringFilter<"CmsPressBreifing"> | string
    slug?: StringFilter<"CmsPressBreifing"> | string
    excerpt?: StringFilter<"CmsPressBreifing"> | string
    richContent?: StringFilter<"CmsPressBreifing"> | string
    coverImage?: StringNullableFilter<"CmsPressBreifing"> | string | null
    region?: EnumCmsRegionFilter<"CmsPressBreifing"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsPressBreifing"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsPressBreifing"> | Date | string | null
    createdById?: IntFilter<"CmsPressBreifing"> | number
    updatedById?: IntFilter<"CmsPressBreifing"> | number
    createdAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
    updatedAt?: DateTimeFilter<"CmsPressBreifing"> | Date | string
  }

  export type CmsPressBreifingUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    update: XOR<CmsPressBreifingUpdateWithoutUpdatedByInput, CmsPressBreifingUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsPressBreifingCreateWithoutUpdatedByInput, CmsPressBreifingUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsPressBreifingUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsPressBreifingWhereUniqueInput
    data: XOR<CmsPressBreifingUpdateWithoutUpdatedByInput, CmsPressBreifingUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsPressBreifingUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsPressBreifingScalarWhereInput
    data: XOR<CmsPressBreifingUpdateManyMutationInput, CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsVideoUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsVideoWhereUniqueInput
    update: XOR<CmsVideoUpdateWithoutCreatedByInput, CmsVideoUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsVideoCreateWithoutCreatedByInput, CmsVideoUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsVideoUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsVideoWhereUniqueInput
    data: XOR<CmsVideoUpdateWithoutCreatedByInput, CmsVideoUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsVideoUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsVideoScalarWhereInput
    data: XOR<CmsVideoUpdateManyMutationInput, CmsVideoUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsVideoScalarWhereInput = {
    AND?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
    OR?: CmsVideoScalarWhereInput[]
    NOT?: CmsVideoScalarWhereInput | CmsVideoScalarWhereInput[]
    id?: IntFilter<"CmsVideo"> | number
    title?: StringFilter<"CmsVideo"> | string
    slug?: StringFilter<"CmsVideo"> | string
    excerpt?: StringFilter<"CmsVideo"> | string
    richContent?: StringFilter<"CmsVideo"> | string
    coverImage?: StringNullableFilter<"CmsVideo"> | string | null
    videoUrl?: StringFilter<"CmsVideo"> | string
    videoDuration?: IntNullableFilter<"CmsVideo"> | number | null
    region?: EnumCmsRegionFilter<"CmsVideo"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsVideo"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsVideo"> | Date | string | null
    createdById?: IntFilter<"CmsVideo"> | number
    updatedById?: IntFilter<"CmsVideo"> | number
    createdAt?: DateTimeFilter<"CmsVideo"> | Date | string
    updatedAt?: DateTimeFilter<"CmsVideo"> | Date | string
  }

  export type CmsVideoUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsVideoWhereUniqueInput
    update: XOR<CmsVideoUpdateWithoutUpdatedByInput, CmsVideoUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsVideoCreateWithoutUpdatedByInput, CmsVideoUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsVideoUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsVideoWhereUniqueInput
    data: XOR<CmsVideoUpdateWithoutUpdatedByInput, CmsVideoUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsVideoUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsVideoScalarWhereInput
    data: XOR<CmsVideoUpdateManyMutationInput, CmsVideoUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsBlogUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsBlogWhereUniqueInput
    update: XOR<CmsBlogUpdateWithoutCreatedByInput, CmsBlogUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsBlogCreateWithoutCreatedByInput, CmsBlogUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsBlogUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsBlogWhereUniqueInput
    data: XOR<CmsBlogUpdateWithoutCreatedByInput, CmsBlogUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsBlogUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsBlogScalarWhereInput
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsBlogScalarWhereInput = {
    AND?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
    OR?: CmsBlogScalarWhereInput[]
    NOT?: CmsBlogScalarWhereInput | CmsBlogScalarWhereInput[]
    id?: IntFilter<"CmsBlog"> | number
    title?: StringFilter<"CmsBlog"> | string
    slug?: StringFilter<"CmsBlog"> | string
    excerpt?: StringFilter<"CmsBlog"> | string
    richContent?: StringFilter<"CmsBlog"> | string
    coverImage?: StringNullableFilter<"CmsBlog"> | string | null
    region?: EnumCmsRegionFilter<"CmsBlog"> | $Enums.CmsRegion
    status?: EnumPublishStatusFilter<"CmsBlog"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsBlog"> | Date | string | null
    createdById?: IntFilter<"CmsBlog"> | number
    updatedById?: IntFilter<"CmsBlog"> | number
    createdAt?: DateTimeFilter<"CmsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"CmsBlog"> | Date | string
  }

  export type CmsBlogUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsBlogWhereUniqueInput
    update: XOR<CmsBlogUpdateWithoutUpdatedByInput, CmsBlogUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsBlogCreateWithoutUpdatedByInput, CmsBlogUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsBlogUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsBlogWhereUniqueInput
    data: XOR<CmsBlogUpdateWithoutUpdatedByInput, CmsBlogUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsBlogUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsBlogScalarWhereInput
    data: XOR<CmsBlogUpdateManyMutationInput, CmsBlogUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsTeamMemberUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    update: XOR<CmsTeamMemberUpdateWithoutCreatedByInput, CmsTeamMemberUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsTeamMemberCreateWithoutCreatedByInput, CmsTeamMemberUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsTeamMemberUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    data: XOR<CmsTeamMemberUpdateWithoutCreatedByInput, CmsTeamMemberUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsTeamMemberUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsTeamMemberScalarWhereInput
    data: XOR<CmsTeamMemberUpdateManyMutationInput, CmsTeamMemberUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsTeamMemberScalarWhereInput = {
    AND?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
    OR?: CmsTeamMemberScalarWhereInput[]
    NOT?: CmsTeamMemberScalarWhereInput | CmsTeamMemberScalarWhereInput[]
    id?: IntFilter<"CmsTeamMember"> | number
    name?: StringFilter<"CmsTeamMember"> | string
    slug?: StringFilter<"CmsTeamMember"> | string
    role?: StringFilter<"CmsTeamMember"> | string
    joined?: StringNullableFilter<"CmsTeamMember"> | string | null
    avatar?: StringNullableFilter<"CmsTeamMember"> | string | null
    focus?: StringFilter<"CmsTeamMember"> | string
    teamType?: EnumCmsTeamTypeFilter<"CmsTeamMember"> | $Enums.CmsTeamType
    region?: EnumCmsRegionNullableFilter<"CmsTeamMember"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsTeamMember"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsTeamMember"> | Date | string | null
    createdById?: IntFilter<"CmsTeamMember"> | number
    updatedById?: IntFilter<"CmsTeamMember"> | number
    createdAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"CmsTeamMember"> | Date | string
  }

  export type CmsTeamMemberUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    update: XOR<CmsTeamMemberUpdateWithoutUpdatedByInput, CmsTeamMemberUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsTeamMemberCreateWithoutUpdatedByInput, CmsTeamMemberUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsTeamMemberUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsTeamMemberWhereUniqueInput
    data: XOR<CmsTeamMemberUpdateWithoutUpdatedByInput, CmsTeamMemberUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsTeamMemberUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsTeamMemberScalarWhereInput
    data: XOR<CmsTeamMemberUpdateManyMutationInput, CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsMediaItemUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    update: XOR<CmsMediaItemUpdateWithoutCreatedByInput, CmsMediaItemUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CmsMediaItemCreateWithoutCreatedByInput, CmsMediaItemUncheckedCreateWithoutCreatedByInput>
  }

  export type CmsMediaItemUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    data: XOR<CmsMediaItemUpdateWithoutCreatedByInput, CmsMediaItemUncheckedUpdateWithoutCreatedByInput>
  }

  export type CmsMediaItemUpdateManyWithWhereWithoutCreatedByInput = {
    where: CmsMediaItemScalarWhereInput
    data: XOR<CmsMediaItemUpdateManyMutationInput, CmsMediaItemUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CmsMediaItemScalarWhereInput = {
    AND?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
    OR?: CmsMediaItemScalarWhereInput[]
    NOT?: CmsMediaItemScalarWhereInput | CmsMediaItemScalarWhereInput[]
    id?: IntFilter<"CmsMediaItem"> | number
    title?: StringFilter<"CmsMediaItem"> | string
    slug?: StringFilter<"CmsMediaItem"> | string
    description?: StringNullableFilter<"CmsMediaItem"> | string | null
    mediaType?: EnumCmsMediaTypeFilter<"CmsMediaItem"> | $Enums.CmsMediaType
    fileUrl?: StringFilter<"CmsMediaItem"> | string
    coverImage?: StringNullableFilter<"CmsMediaItem"> | string | null
    region?: EnumCmsRegionNullableFilter<"CmsMediaItem"> | $Enums.CmsRegion | null
    status?: EnumPublishStatusFilter<"CmsMediaItem"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"CmsMediaItem"> | Date | string | null
    createdById?: IntFilter<"CmsMediaItem"> | number
    updatedById?: IntFilter<"CmsMediaItem"> | number
    createdAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
    updatedAt?: DateTimeFilter<"CmsMediaItem"> | Date | string
  }

  export type CmsMediaItemUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    update: XOR<CmsMediaItemUpdateWithoutUpdatedByInput, CmsMediaItemUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<CmsMediaItemCreateWithoutUpdatedByInput, CmsMediaItemUncheckedCreateWithoutUpdatedByInput>
  }

  export type CmsMediaItemUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: CmsMediaItemWhereUniqueInput
    data: XOR<CmsMediaItemUpdateWithoutUpdatedByInput, CmsMediaItemUncheckedUpdateWithoutUpdatedByInput>
  }

  export type CmsMediaItemUpdateManyWithWhereWithoutUpdatedByInput = {
    where: CmsMediaItemScalarWhereInput
    data: XOR<CmsMediaItemUpdateManyMutationInput, CmsMediaItemUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type CmsUserCreateWithoutSessionsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutSessionsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutSessionsInput, CmsUserUncheckedCreateWithoutSessionsInput>
  }

  export type CmsUserUpsertWithoutSessionsInput = {
    update: XOR<CmsUserUpdateWithoutSessionsInput, CmsUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<CmsUserCreateWithoutSessionsInput, CmsUserUncheckedCreateWithoutSessionsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutSessionsInput, CmsUserUncheckedUpdateWithoutSessionsInput>
  }

  export type CmsUserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedContentInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedContentInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedContentInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedContentInput, CmsUserUncheckedCreateWithoutCreatedContentInput>
  }

  export type CmsUserCreateWithoutUpdatedContentInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedContentInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedContentInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedContentInput, CmsUserUncheckedCreateWithoutUpdatedContentInput>
  }

  export type CmsUserUpsertWithoutCreatedContentInput = {
    update: XOR<CmsUserUpdateWithoutCreatedContentInput, CmsUserUncheckedUpdateWithoutCreatedContentInput>
    create: XOR<CmsUserCreateWithoutCreatedContentInput, CmsUserUncheckedCreateWithoutCreatedContentInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedContentInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedContentInput, CmsUserUncheckedUpdateWithoutCreatedContentInput>
  }

  export type CmsUserUpdateWithoutCreatedContentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedContentInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedContentInput, CmsUserUncheckedUpdateWithoutUpdatedContentInput>
    create: XOR<CmsUserCreateWithoutUpdatedContentInput, CmsUserUncheckedCreateWithoutUpdatedContentInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedContentInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedContentInput, CmsUserUncheckedUpdateWithoutUpdatedContentInput>
  }

  export type CmsUserUpdateWithoutUpdatedContentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedAnnouncementsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedAnnouncementsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedAnnouncementsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedAnnouncementsInput, CmsUserUncheckedCreateWithoutCreatedAnnouncementsInput>
  }

  export type CmsUserCreateWithoutUpdatedAnnouncementsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedAnnouncementsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedAnnouncementsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedCreateWithoutUpdatedAnnouncementsInput>
  }

  export type CmsUserUpsertWithoutCreatedAnnouncementsInput = {
    update: XOR<CmsUserUpdateWithoutCreatedAnnouncementsInput, CmsUserUncheckedUpdateWithoutCreatedAnnouncementsInput>
    create: XOR<CmsUserCreateWithoutCreatedAnnouncementsInput, CmsUserUncheckedCreateWithoutCreatedAnnouncementsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedAnnouncementsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedAnnouncementsInput, CmsUserUncheckedUpdateWithoutCreatedAnnouncementsInput>
  }

  export type CmsUserUpdateWithoutCreatedAnnouncementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedAnnouncementsInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedUpdateWithoutUpdatedAnnouncementsInput>
    create: XOR<CmsUserCreateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedCreateWithoutUpdatedAnnouncementsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedAnnouncementsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedAnnouncementsInput, CmsUserUncheckedUpdateWithoutUpdatedAnnouncementsInput>
  }

  export type CmsUserUpdateWithoutUpdatedAnnouncementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedNewsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedNewsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedNewsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedNewsInput, CmsUserUncheckedCreateWithoutCreatedNewsInput>
  }

  export type CmsUserCreateWithoutUpdatedNewsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedNewsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedNewsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedNewsInput, CmsUserUncheckedCreateWithoutUpdatedNewsInput>
  }

  export type CmsUserUpsertWithoutCreatedNewsInput = {
    update: XOR<CmsUserUpdateWithoutCreatedNewsInput, CmsUserUncheckedUpdateWithoutCreatedNewsInput>
    create: XOR<CmsUserCreateWithoutCreatedNewsInput, CmsUserUncheckedCreateWithoutCreatedNewsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedNewsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedNewsInput, CmsUserUncheckedUpdateWithoutCreatedNewsInput>
  }

  export type CmsUserUpdateWithoutCreatedNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedNewsInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedNewsInput, CmsUserUncheckedUpdateWithoutUpdatedNewsInput>
    create: XOR<CmsUserCreateWithoutUpdatedNewsInput, CmsUserUncheckedCreateWithoutUpdatedNewsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedNewsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedNewsInput, CmsUserUncheckedUpdateWithoutUpdatedNewsInput>
  }

  export type CmsUserUpdateWithoutUpdatedNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedBriefingsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedBriefingsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedBriefingsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedBriefingsInput, CmsUserUncheckedCreateWithoutCreatedBriefingsInput>
  }

  export type CmsUserCreateWithoutUpdatedBriefingsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedBriefingsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedBriefingsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedBriefingsInput, CmsUserUncheckedCreateWithoutUpdatedBriefingsInput>
  }

  export type CmsUserUpsertWithoutCreatedBriefingsInput = {
    update: XOR<CmsUserUpdateWithoutCreatedBriefingsInput, CmsUserUncheckedUpdateWithoutCreatedBriefingsInput>
    create: XOR<CmsUserCreateWithoutCreatedBriefingsInput, CmsUserUncheckedCreateWithoutCreatedBriefingsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedBriefingsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedBriefingsInput, CmsUserUncheckedUpdateWithoutCreatedBriefingsInput>
  }

  export type CmsUserUpdateWithoutCreatedBriefingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedBriefingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedBriefingsInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedBriefingsInput, CmsUserUncheckedUpdateWithoutUpdatedBriefingsInput>
    create: XOR<CmsUserCreateWithoutUpdatedBriefingsInput, CmsUserUncheckedCreateWithoutUpdatedBriefingsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedBriefingsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedBriefingsInput, CmsUserUncheckedUpdateWithoutUpdatedBriefingsInput>
  }

  export type CmsUserUpdateWithoutUpdatedBriefingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedBriefingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedVideosInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedVideosInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedVideosInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedVideosInput, CmsUserUncheckedCreateWithoutCreatedVideosInput>
  }

  export type CmsUserCreateWithoutUpdatedVideosInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedVideosInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedVideosInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedVideosInput, CmsUserUncheckedCreateWithoutUpdatedVideosInput>
  }

  export type CmsUserUpsertWithoutCreatedVideosInput = {
    update: XOR<CmsUserUpdateWithoutCreatedVideosInput, CmsUserUncheckedUpdateWithoutCreatedVideosInput>
    create: XOR<CmsUserCreateWithoutCreatedVideosInput, CmsUserUncheckedCreateWithoutCreatedVideosInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedVideosInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedVideosInput, CmsUserUncheckedUpdateWithoutCreatedVideosInput>
  }

  export type CmsUserUpdateWithoutCreatedVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedVideosInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedVideosInput, CmsUserUncheckedUpdateWithoutUpdatedVideosInput>
    create: XOR<CmsUserCreateWithoutUpdatedVideosInput, CmsUserUncheckedCreateWithoutUpdatedVideosInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedVideosInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedVideosInput, CmsUserUncheckedUpdateWithoutUpdatedVideosInput>
  }

  export type CmsUserUpdateWithoutUpdatedVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedBlogsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedBlogsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedBlogsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedBlogsInput, CmsUserUncheckedCreateWithoutCreatedBlogsInput>
  }

  export type CmsUserCreateWithoutUpdatedBlogsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedBlogsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedBlogsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedBlogsInput, CmsUserUncheckedCreateWithoutUpdatedBlogsInput>
  }

  export type CmsUserUpsertWithoutCreatedBlogsInput = {
    update: XOR<CmsUserUpdateWithoutCreatedBlogsInput, CmsUserUncheckedUpdateWithoutCreatedBlogsInput>
    create: XOR<CmsUserCreateWithoutCreatedBlogsInput, CmsUserUncheckedCreateWithoutCreatedBlogsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedBlogsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedBlogsInput, CmsUserUncheckedUpdateWithoutCreatedBlogsInput>
  }

  export type CmsUserUpdateWithoutCreatedBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedBlogsInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedBlogsInput, CmsUserUncheckedUpdateWithoutUpdatedBlogsInput>
    create: XOR<CmsUserCreateWithoutUpdatedBlogsInput, CmsUserUncheckedCreateWithoutUpdatedBlogsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedBlogsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedBlogsInput, CmsUserUncheckedUpdateWithoutUpdatedBlogsInput>
  }

  export type CmsUserUpdateWithoutUpdatedBlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedTeamsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedTeamsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedTeamsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedTeamsInput, CmsUserUncheckedCreateWithoutCreatedTeamsInput>
  }

  export type CmsUserCreateWithoutUpdatedTeamsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedTeamsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedTeamsInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedTeamsInput, CmsUserUncheckedCreateWithoutUpdatedTeamsInput>
  }

  export type CmsUserUpsertWithoutCreatedTeamsInput = {
    update: XOR<CmsUserUpdateWithoutCreatedTeamsInput, CmsUserUncheckedUpdateWithoutCreatedTeamsInput>
    create: XOR<CmsUserCreateWithoutCreatedTeamsInput, CmsUserUncheckedCreateWithoutCreatedTeamsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedTeamsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedTeamsInput, CmsUserUncheckedUpdateWithoutCreatedTeamsInput>
  }

  export type CmsUserUpdateWithoutCreatedTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedTeamsInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedTeamsInput, CmsUserUncheckedUpdateWithoutUpdatedTeamsInput>
    create: XOR<CmsUserCreateWithoutUpdatedTeamsInput, CmsUserUncheckedCreateWithoutUpdatedTeamsInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedTeamsInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedTeamsInput, CmsUserUncheckedUpdateWithoutUpdatedTeamsInput>
  }

  export type CmsUserUpdateWithoutUpdatedTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserCreateWithoutCreatedMediaInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    updatedMedia?: CmsMediaItemCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserUncheckedCreateWithoutCreatedMediaInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    updatedMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type CmsUserCreateOrConnectWithoutCreatedMediaInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutCreatedMediaInput, CmsUserUncheckedCreateWithoutCreatedMediaInput>
  }

  export type CmsUserCreateWithoutUpdatedMediaInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionCreateNestedManyWithoutUserInput
    createdContent?: CmsContentCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemCreateNestedManyWithoutCreatedByInput
  }

  export type CmsUserUncheckedCreateWithoutUpdatedMediaInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.CmsRole
    region: $Enums.CmsRegion
    createdAt?: Date | string
    sessions?: CmsSessionUncheckedCreateNestedManyWithoutUserInput
    createdContent?: CmsContentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedContent?: CmsContentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    updatedAnnouncements?: CmsAnnouncementUncheckedCreateNestedManyWithoutUpdatedByInput
    createdNews?: CmsNewsUncheckedCreateNestedManyWithoutCreatedByInput
    updatedNews?: CmsNewsUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBriefings?: CmsPressBreifingUncheckedCreateNestedManyWithoutUpdatedByInput
    createdVideos?: CmsVideoUncheckedCreateNestedManyWithoutCreatedByInput
    updatedVideos?: CmsVideoUncheckedCreateNestedManyWithoutUpdatedByInput
    createdBlogs?: CmsBlogUncheckedCreateNestedManyWithoutCreatedByInput
    updatedBlogs?: CmsBlogUncheckedCreateNestedManyWithoutUpdatedByInput
    createdTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutCreatedByInput
    updatedTeams?: CmsTeamMemberUncheckedCreateNestedManyWithoutUpdatedByInput
    createdMedia?: CmsMediaItemUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type CmsUserCreateOrConnectWithoutUpdatedMediaInput = {
    where: CmsUserWhereUniqueInput
    create: XOR<CmsUserCreateWithoutUpdatedMediaInput, CmsUserUncheckedCreateWithoutUpdatedMediaInput>
  }

  export type CmsUserUpsertWithoutCreatedMediaInput = {
    update: XOR<CmsUserUpdateWithoutCreatedMediaInput, CmsUserUncheckedUpdateWithoutCreatedMediaInput>
    create: XOR<CmsUserCreateWithoutCreatedMediaInput, CmsUserUncheckedCreateWithoutCreatedMediaInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutCreatedMediaInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutCreatedMediaInput, CmsUserUncheckedUpdateWithoutCreatedMediaInput>
  }

  export type CmsUserUpdateWithoutCreatedMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    updatedMedia?: CmsMediaItemUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutCreatedMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    updatedMedia?: CmsMediaItemUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type CmsUserUpsertWithoutUpdatedMediaInput = {
    update: XOR<CmsUserUpdateWithoutUpdatedMediaInput, CmsUserUncheckedUpdateWithoutUpdatedMediaInput>
    create: XOR<CmsUserCreateWithoutUpdatedMediaInput, CmsUserUncheckedCreateWithoutUpdatedMediaInput>
    where?: CmsUserWhereInput
  }

  export type CmsUserUpdateToOneWithWhereWithoutUpdatedMediaInput = {
    where?: CmsUserWhereInput
    data: XOR<CmsUserUpdateWithoutUpdatedMediaInput, CmsUserUncheckedUpdateWithoutUpdatedMediaInput>
  }

  export type CmsUserUpdateWithoutUpdatedMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUpdateManyWithoutCreatedByNestedInput
  }

  export type CmsUserUncheckedUpdateWithoutUpdatedMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumCmsRoleFieldUpdateOperationsInput | $Enums.CmsRole
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CmsSessionUncheckedUpdateManyWithoutUserNestedInput
    createdContent?: CmsContentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedContent?: CmsContentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedAnnouncements?: CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdNews?: CmsNewsUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedNews?: CmsNewsUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBriefings?: CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdVideos?: CmsVideoUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedVideos?: CmsVideoUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdBlogs?: CmsBlogUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedBlogs?: CmsBlogUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdTeams?: CmsTeamMemberUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedTeams?: CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdMedia?: CmsMediaItemUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CmsSessionCreateManyUserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CmsContentCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsContentCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    contentType: $Enums.CmsContentType
    category: $Enums.CmsCategory
    level: $Enums.CmsLevel
    region?: $Enums.CmsRegion | null
    body?: string
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsAnnouncementCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsNewsCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsPressBreifingCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsVideoCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    videoUrl: string
    videoDuration?: number | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsBlogCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    excerpt: string
    richContent: string
    coverImage?: string | null
    region: $Enums.CmsRegion
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberCreateManyCreatedByInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsTeamMemberCreateManyUpdatedByInput = {
    id?: number
    name: string
    slug: string
    role: string
    joined?: string | null
    avatar?: string | null
    focus: string
    teamType: $Enums.CmsTeamType
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemCreateManyCreatedByInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    updatedById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsMediaItemCreateManyUpdatedByInput = {
    id?: number
    title: string
    slug: string
    description?: string | null
    mediaType: $Enums.CmsMediaType
    fileUrl: string
    coverImage?: string | null
    region?: $Enums.CmsRegion | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CmsSessionUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsSessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedContentNestedInput
  }

  export type CmsContentUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedContentNestedInput
  }

  export type CmsContentUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsContentUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    contentType?: EnumCmsContentTypeFieldUpdateOperationsInput | $Enums.CmsContentType
    category?: EnumCmsCategoryFieldUpdateOperationsInput | $Enums.CmsCategory
    level?: EnumCmsLevelFieldUpdateOperationsInput | $Enums.CmsLevel
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    body?: StringFieldUpdateOperationsInput | string
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedAnnouncementsNestedInput
  }

  export type CmsAnnouncementUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedAnnouncementsNestedInput
  }

  export type CmsAnnouncementUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsAnnouncementUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedNewsNestedInput
  }

  export type CmsNewsUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedNewsNestedInput
  }

  export type CmsNewsUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsNewsUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedBriefingsNestedInput
  }

  export type CmsPressBreifingUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedBriefingsNestedInput
  }

  export type CmsPressBreifingUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsPressBreifingUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedVideosNestedInput
  }

  export type CmsVideoUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedVideosNestedInput
  }

  export type CmsVideoUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsVideoUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    videoDuration?: NullableIntFieldUpdateOperationsInput | number | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedBlogsNestedInput
  }

  export type CmsBlogUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsBlogUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: EnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedTeamsNestedInput
  }

  export type CmsTeamMemberUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberUpdateWithoutUpdatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedTeamsNestedInput
  }

  export type CmsTeamMemberUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsTeamMemberUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joined?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    focus?: StringFieldUpdateOperationsInput | string
    teamType?: EnumCmsTeamTypeFieldUpdateOperationsInput | $Enums.CmsTeamType
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: CmsUserUpdateOneRequiredWithoutUpdatedMediaNestedInput
  }

  export type CmsMediaItemUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemUpdateWithoutUpdatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: CmsUserUpdateOneRequiredWithoutCreatedMediaNestedInput
  }

  export type CmsMediaItemUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CmsMediaItemUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mediaType?: EnumCmsMediaTypeFieldUpdateOperationsInput | $Enums.CmsMediaType
    fileUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableEnumCmsRegionFieldUpdateOperationsInput | $Enums.CmsRegion | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}