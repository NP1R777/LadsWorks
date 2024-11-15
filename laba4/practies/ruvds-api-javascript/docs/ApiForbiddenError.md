# RuvdsApi.ApiForbiddenError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Короткий идентификатор, соответствующий возвращаемому коду. | 
**userId** | **String** | Guid пользователя в базе. Может быть использован при дальнейшей отправки запроса для получения разрешения.  | 
**message** | **String** | Дополнительная информация об ошибке. | 



## Enum: IdEnum


* `forbidden` (value: `"forbidden"`)

* `email_not_confirmed` (value: `"email_not_confirmed"`)

* `phone_not_confirmed` (value: `"phone_not_confirmed"`)

* `server_creation_forbidden` (value: `"server_creation_forbidden"`)




