# RuvdsApi.ActionError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Короткий идентификатор ошибки. | [optional] 
**message** | **String** | Дополнительная информация об ошибке. * &#x60;internal_error&#x60; - Внутренняя ошибка сервера. При возникновении такой ошибки можно попробовать выполнить запрос позже. * &#x60;insufficient_balance&#x60; - Недостаточно средста на балансе пользователя. Ошибка может возникнуть при создании сервера или изменении конфигурации. * &#x60;max_ip_reached&#x60; - В данный момент недостаточно IP адресов для создания сервера. * &#x60;paid_till_gap&#x60; - Для завершения операции необходимо, чтобы сервер был оплачен. * &#x60;server_is_offline&#x60; - Изменения концигурации сервера в данный момент недоступно. * &#x60;insufficient_resource&#x60; - Недостаточно ресурсов. * &#x60;change_config_limit&#x60; - Достигнуто максимальное количество изменений конфигурации сервера. * &#x60;unable_to_start_server&#x60; - Запуск сервера завершился с ошибкой. * &#x60;unable_to_stop_server&#x60; - Остановка сервера завершилась с ошибкой. * &#x60;unable_to_shrink_drive&#x60; - Уменьшение размера диска завершилось с ошибкой. * &#x60;unable_to_change_configuration&#x60; - Изменение концигурации сервера завершилось с ошибкой. * &#x60;no_available_resource&#x60; - Недостаточно ресурсов для изменения конфигурации. * &#x60;server_wait_for_payment&#x60; - Запрос на создание сервера сохранен. Дальнейшее создание начнется после оплаты сервера. * &#x60;too_much_servers_wait_for_payment&#x60; - Слишком много запросов на создание неоплаченных серверов. Необходимо оплатить предыдущие серверы, ожидающие оплаты. | [optional] 



## Enum: IdEnum


* `internal_error` (value: `"internal_error"`)

* `insufficient_balance` (value: `"insufficient_balance"`)

* `max_ip_reached` (value: `"max_ip_reached"`)

* `paid_till_gap` (value: `"paid_till_gap"`)

* `server_is_offline` (value: `"server_is_offline"`)

* `insufficient_resource` (value: `"insufficient_resource"`)

* `change_config_limit` (value: `"change_config_limit"`)

* `unable_to_start_server` (value: `"unable_to_start_server"`)

* `unable_to_stop_server` (value: `"unable_to_stop_server"`)

* `unable_to_shrink_drive` (value: `"unable_to_shrink_drive"`)

* `unable_to_change_configuration` (value: `"unable_to_change_configuration"`)

* `no_available_resource` (value: `"no_available_resource"`)

* `server_wait_for_payment` (value: `"server_wait_for_payment"`)

* `too_much_servers_wait_for_payment` (value: `"too_much_servers_wait_for_payment"`)




