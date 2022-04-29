# rxjs-types
`rxjs 的类型体操，用 typescript 类型画 Marble 图`

## 符号释义
- `(any)` 值
- `-` 时间，一个`-`代表1ms
- `-10ms-` 超过10ms的时间
- `-1s-` 以`000`结尾的时间
- `...` 表示超出 ts 限制 value 不能全部画出
- `-|->` complete
- `-X->` 异常
- `-->` 无限的 stream

## observable
- [X] fromArray

![fromArray](https://user-images.githubusercontent.com/11540557/165904783-6082a561-8bdb-4a7f-8e52-0b13110876bd.png)

- [X] fromPromise

![fromPromise](https://user-images.githubusercontent.com/11540557/165904974-34cbfb9d-feed-4571-8ce6-690cf2786f44.png)

- [X] of

![of](https://user-images.githubusercontent.com/11540557/165905118-bbe54dcf-4739-4c30-aa84-8f212f95c0ba.png)

- [X] range

![range](https://user-images.githubusercontent.com/11540557/165905349-b36f8463-d369-413c-a8ad-51eafefd5f02.png)

- [X] timer

![timer](https://user-images.githubusercontent.com/11540557/165905487-51154015-144c-4506-8a0a-6446579e3f92.png)

![timer](https://user-images.githubusercontent.com/11540557/165905561-b4d0112e-ba6f-4217-aac4-4c6896daa171.png)

- [X] interval

![interval](https://user-images.githubusercontent.com/11540557/165905645-ecd25dfa-d6dd-4708-b69b-40d889305e05.png)

- [X] merge

![merge](https://user-images.githubusercontent.com/11540557/165905989-bc9e20df-1ff9-4428-846f-c2fc571032c3.png)


## operators

- [X] delay

![delay](https://user-images.githubusercontent.com/11540557/165906221-865e9640-40fc-4df8-9fae-45a1c818158b.png)

- [X] distinct

![distinct](https://user-images.githubusercontent.com/11540557/165906429-55f7bf7a-d5d0-4343-a4b0-f0c4095a9912.png)

- [X] distinctUntilChange

![distinctUntilChange](https://user-images.githubusercontent.com/11540557/165906541-f73def91-feb6-4cfe-a9a9-6bd00b92f471.png)

- [X] endWith

![endWith](https://user-images.githubusercontent.com/11540557/165906645-d26ac15d-e893-4fc3-89a7-d0c9802f2ace.png)

- [X] filter

![filter](https://user-images.githubusercontent.com/11540557/165906724-47cc9677-d5bf-4077-9dd5-17e3f8653c81.png)

- [X] mapTo

![mapTo](https://user-images.githubusercontent.com/11540557/165906967-673fed04-2365-4cd2-be6c-9c969d852025.png)

- [X] repeat

![repeat](https://user-images.githubusercontent.com/11540557/165907070-3d26feb2-ed7a-47d9-bf18-02212066474a.png)

![repeat](https://user-images.githubusercontent.com/11540557/165907147-31d1a6fd-5df7-4f13-b29f-bc2d6d085943.png)

- [X] skip

![skip](https://user-images.githubusercontent.com/11540557/165907227-15ebc457-4220-49e2-887a-b0dafbcea2d4.png)

- [X] startWith

![startWith](https://user-images.githubusercontent.com/11540557/165907291-09132ab2-bcc2-4173-a2e0-2f3da8f3aff4.png)

- [X] take

![take](https://user-images.githubusercontent.com/11540557/165907361-c22a8f4d-8999-469a-aa70-c8974cb617ad.png)

- [X] single

![single](https://user-images.githubusercontent.com/11540557/165930901-75b2a867-9861-4beb-8ffc-fce36987c7aa.png)

![single](https://user-images.githubusercontent.com/11540557/165931065-abf2b861-46f5-435e-91e5-1c4b9995593a.png)

![single](https://user-images.githubusercontent.com/11540557/165931166-8e75ec2c-3e0f-4b64-a191-49da4ee491c9.png)
