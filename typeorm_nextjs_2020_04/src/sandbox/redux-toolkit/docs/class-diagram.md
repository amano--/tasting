### a

```plantuml : plan
@startuml

interface Plan {
  div: PlanDiv
}

interface Campaign {
  div: CampaignDiv
}

interface DiscountSpec{
  calcPrice(item:CartItem):DiscountItemSpec

}

class NormalDiscountSpec implements DiscountSpec{
plan:Plan
campaign:Campaign
 }

 NormalDiscountSpec .. Plan
 NormalDiscountSpec .. Campaign
' コメント

class User {
  username
  password
  +sign_in()
}

class Group {
  name
}

class Member {
  roles
}

User .. Member
Group .. Member

@enduml

```

Plan
| uname | label | note |
| :-------- | :---------: | --------: |
| bronze | ブロンズ| |
| gold | ゴールド | |

Campaign
| uname | label | start | end |
| :--- | :---: | ---: | :---: |
| bronze | ブロンズ| |
| gold | ゴールド | |
