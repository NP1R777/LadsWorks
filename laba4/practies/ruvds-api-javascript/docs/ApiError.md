# RuvdsApi.ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Короткий идентификатор, соответствующий возвращаемому коду. Например, для запроса, вернувшего код 404 значение будет \&quot;not_found\&quot;. | 
**message** | **String** | Дополнительная информация об ошибке. | 



## Enum: IdEnum


* `json_error` (value: `"json_error"`)

* `forbidden` (value: `"forbidden"`)

* `not_found` (value: `"not_found"`)

* `server_error` (value: `"server_error"`)

* `rate_limit_exceeded` (value: `"rate_limit_exceeded"`)

* `auth_error` (value: `"auth_error"`)

* `conflict` (value: `"conflict"`)

* `unexpected_error` (value: `"unexpected_error"`)




