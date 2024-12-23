# RuvdsApi.TokenCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenName** | **String** | Произвольное имя токена. Задается для удобства, чтобы можно было отличать токены между собой. | 
**tokenRole** | **String** | Роль токена. Через API можно получать токен только для чтения и записи.  Если требуются права на удаление, то токен можно выпустить в личном кабинете RUVDS по адресу [https://ruvds.com/my/settings/api](https://ruvds.com/my/settings/api).  | 
**tokenExpiry** | **Date** | Дата экспирации токена. Можно не задавать - в этому случае токен будет все время валидным вплоть до его удаления.  | [optional] 



## Enum: TokenRoleEnum


* `read` (value: `"read"`)

* `write` (value: `"write"`)




