/* eslint-disable max-classes-per-file */ /* eslint-disable no-console */ /* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable class-methods-use-this */ /* eslint-disable react/destructuring-assignment */ import '@testing-library/jest-dom/extend-expect'
// ============================================================================
// Structural Subtyping(構造的部分型)(TypeScript) と
// Nominal Subtyping(公称的部分型)(Java等) 違いについて
// ============================================================================
// 【 参考 】
// [ TypeScript: 異なる2つの型システム「公称型」と「構造的部分型」 ]( https://qiita.com/suin/items/52cf80021361168f6b0e )
// ============================================================================

/*
Java ( Nominal Subtyping ) では以下の型は別の型だが、Structural Subtyping 目線では同じとみなされる。

```java
interface Foo {  String foo(int a);}
interface Bar {  String bar(int a);}
```
Foo foo = new Bar{ ..(略).. }
Nominal Subtyping    -> X   Structural Subtyping -> O

*/

class Animal {
  public name = ''
}

class User {
  public name = ''
}
let user: User = new User()
let animal: Animal = new Animal()
user = animal // OK
animal = user // OK
type HasNameType = { name: string }
const a: HasNameType = user
const b: { name: string } = animal
type HasManyFieldType = {
  a: string
  b: string
  c: string
  d: string
  e: string
  f: string
}
type HasNameWithManyFieldType = HasNameType & HasManyFieldType
// 謎のエラーが発生const c: HasNameWithManyFieldType = {  name: 'aaaaa',  a: '',  b: '',  c: '',  d: '',  e: '',  f: 'aa'};
// [ TypeScriptの型初級 / 標準ライブラリの型 ]( https://qiita.com/uhyo/items/da21e2b3c10c8a03952f#%E6%A8%99%E6%BA%96%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E5%9E%8B )
type PartialHasManyFieldType = Partial<HasManyFieldType>
type HasNameWithManyFieldType2 = HasNameType & PartialHasManyFieldType

// 型注釈を使って、補完機能を機能させる方法の説明
const d: HasNameWithManyFieldType2 = { name: 'aaaaa' }
type WithB = Pick<HasManyFieldType, 'b'> // | 'c'

type HasNameWithBType = HasNameType & WithB
const e: HasNameWithBType = { name: 'aaaaa', b: 'b' }

/**
 * - 特殊な記法[ JavaScript / 分割代入 ]( https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment )
 * [ JavaScript / スプレッド構文 ]( https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax )
 * [ TypeScript 3.7のOptinal Chainig とNullish Coalescingを使ってみた ]( https://qiita.com/YukiIchika/items/0c2bd4703aa1396ad8f8 )
 **/
