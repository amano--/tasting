/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  createConnection
} from 'typeorm'

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ length: 100 })
  name: string

  @Column('text', { nullable: true })
  description?: string

  @Column({
    default: () => 'CURRENT_TIMESTAMP'
  }) //default値の指定:()=>"命令" でCURRENT_TIMESTAMPが文字列にならないように設定
  createdAt?: Date
}

/**
 *非同期主処理
 */
export async function testConect() {
  //DBへ接続
  const con = await createConnection({
    type: 'sqlite',
    database: `./db/item.sqlite`,
    entities: [Item],
    logging: true
  })
  //DBの構造を初期化
  await con.synchronize()
  //テーブルアクセス用インスタンスの取得
  const testModel01 = con.getRepository(Item)
  //テーブルへ挿入
  const a: Item = { name: 'あいうえお' }
  await testModel01.insert(a)
  await testModel01.insert({ name: 'かきくけこ' })
  //データの取得と表示
  const testValue01 = await testModel01.find()
  console.log('[出力結果]\n%s', JSON.stringify(testValue01, null, '  '))
  await con.close()
}
