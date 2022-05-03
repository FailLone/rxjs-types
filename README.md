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

<img width="267" alt="fromArray" src="https://user-images.githubusercontent.com/11540557/165992324-e9150b4a-9855-416a-ab42-814865b578ee.png">

- [X] fromPromise

<img width="221" alt="fromPromise" src="https://user-images.githubusercontent.com/11540557/165992432-1d5de74a-eb6c-4df2-af32-d6da4a859d10.png">

- [X] of

<img width="262" alt="of" src="https://user-images.githubusercontent.com/11540557/165992495-45d042c4-7ca0-45f1-8c3b-63c03deef975.png">

- [X] range

<img width="962" alt="range" src="https://user-images.githubusercontent.com/11540557/165992849-4bf90ec4-2c1b-4339-8680-40fa23f1aea7.png">

- [X] timer

<img width="264" alt="timer" src="https://user-images.githubusercontent.com/11540557/165992909-25170ddb-40e2-4a77-aed2-78b5b62b88b2.png">

<img width="960" alt="timer" src="https://user-images.githubusercontent.com/11540557/165992962-d1ad4652-ad35-4d88-a25c-cdf1c2a6acf4.png">

- [X] interval

<img width="961" alt="interval" src="https://user-images.githubusercontent.com/11540557/165993136-454cbd08-69f9-4f68-9b13-31ec0cce1af9.png">

- [X] merge

<img width="960" alt="merge" src="https://user-images.githubusercontent.com/11540557/165993597-9a1477ce-2344-470a-9960-46a0a03e90d2.png">

<img width="958" alt="image" src="https://user-images.githubusercontent.com/11540557/166299242-6f6dc2d1-3324-4bde-9980-f1e16df7ab91.png">

<img width="964" alt="image" src="https://user-images.githubusercontent.com/11540557/166304269-f9cdc27f-7db8-458e-a07c-f638666384ff.png">


## operators

- [X] delay

<img width="395" alt="delay" src="https://user-images.githubusercontent.com/11540557/165993957-f5e9f914-340e-4fed-b34c-c6f37d9cefd3.png">

- [X] distinct

<img width="267" alt="distinct" src="https://user-images.githubusercontent.com/11540557/165994057-96426493-c21d-40bb-aeb6-7466d4a5a6b7.png">

- [X] distinctUntilChange

<img width="290" alt="distinctUntilChange" src="https://user-images.githubusercontent.com/11540557/165994154-7460509a-f2ed-416a-886c-c499a70398c5.png">

- [X] endWith

<img width="310" alt="endWith" src="https://user-images.githubusercontent.com/11540557/165994236-4aca23f3-aa2a-4810-bfe8-70f182d596b2.png">

- [X] filter

<img width="270" alt="filter" src="https://user-images.githubusercontent.com/11540557/165994410-808bdf45-47fa-46cf-8e71-c33f4b242bb9.png">

- [X] mapTo

<img width="338" alt="mapTo" src="https://user-images.githubusercontent.com/11540557/165994505-0fc87ba5-8284-4fd6-b935-fcd1718c2552.png">

- [X] repeat

<img width="463" alt="repeat" src="https://user-images.githubusercontent.com/11540557/165994587-8fba878d-721d-415f-a488-5e618964210b.png">

<img width="548" alt="repeat delay" src="https://user-images.githubusercontent.com/11540557/165994641-411934cb-5e2a-4cdb-a6fa-a34c002b65c4.png">

- [X] skip

<img width="244" alt="skip" src="https://user-images.githubusercontent.com/11540557/165994714-25ec66cc-f278-47d3-9b1f-7e36c27731f1.png">

- [X] startWith

<img width="319" alt="startWith" src="https://user-images.githubusercontent.com/11540557/165994764-2197b9c5-3c5d-4c7d-9368-0869a2fa20ee.png">

- [X] take

<img width="716" alt="take" src="https://user-images.githubusercontent.com/11540557/165994857-252cfc4c-5229-43d6-a71d-23e9a4300723.png">

- [X] single

<img width="202" alt="single" src="https://user-images.githubusercontent.com/11540557/165994912-7c728400-79a1-4a00-b4d4-0805ad324e21.png">

<img width="273" alt="single" src="https://user-images.githubusercontent.com/11540557/165995176-7a2a5bc2-c7c5-4f09-9d51-8b114240e609.png">

<img width="195" alt="single" src="https://user-images.githubusercontent.com/11540557/165995278-445ddeb2-4d14-4054-8f89-d675d3e1b5da.png">

- [X] concatAll

<img width="961" alt="image" src="https://user-images.githubusercontent.com/11540557/166305172-86fbd5c4-7a65-4d36-9626-38ed062948fe.png">

<img width="337" alt="image" src="https://user-images.githubusercontent.com/11540557/166305240-7f0b8e3f-3ed5-4a3b-90f2-5220e095d14c.png">

<img width="404" alt="image" src="https://user-images.githubusercontent.com/11540557/166305422-2e174ba2-223b-4815-8fe7-2f9b0b21d02f.png">

- [X] max

<img width="283" alt="image" src="https://user-images.githubusercontent.com/11540557/166307866-d2a1e00f-1831-45d3-b248-3b2d3c5308c2.png">

- [X] scan

<img width="954" alt="image" src="https://user-images.githubusercontent.com/11540557/166401358-644858a3-dc82-4e9b-a466-a3e462c14b32.png">

- [X] reduce

<img width="274" alt="image" src="https://user-images.githubusercontent.com/11540557/166402515-029dad5f-5f34-4900-8f3c-472302301442.png">
